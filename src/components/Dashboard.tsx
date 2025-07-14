import { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
// @ts-ignore
import Calendar from 'react-calendar'; // 需安装 react-calendar
// @ts-ignore
import ReactECharts from 'echarts-for-react'; // 需安装 echarts-for-react、echarts

/**
 * 小部件类型定义
 */
interface Widget {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: 'gpa' | 'todo' | 'calendar' | 'echarts' | string;
  data: any;
}

/**
 * 获取本地存储的小部件布局
 * @returns {Widget[]}
 */
function getStoredWidgets(): Widget[] | null {
  try {
    const data = localStorage.getItem('dashboard_widgets');
    if (data) return JSON.parse(data);
  } catch {}
  return null;
}

/**
 * 保存小部件布局到本地存储
 * @param {Widget[]} widgets 
 */
function saveWidgets(widgets: Widget[]) {
  localStorage.setItem('dashboard_widgets', JSON.stringify(widgets));
}

const initialWidgets: Widget[] = [
  { i: 'gpa', x: 0, y: 0, w: 2, h: 2, type: 'gpa', data: { value: 3.9 } },
  { i: 'todo', x: 2, y: 0, w: 2, h: 2, type: 'todo', data: { tasks: ['完成作业', '参加活动'] } },
];

/**
 * 渲染小部件内容
 * @param {Widget} w 
 */
function renderWidgetContent(w: Widget) {
  switch (w.type) {
    case 'gpa':
      return <div>GPA: <span style={{fontWeight:700, fontSize:32, background: 'linear-gradient(90deg,#3B82F6,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{w.data.value}</span></div>;
    case 'todo':
      return <div>任务：<ul>{w.data.tasks.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul></div>;
    case 'calendar':
      return <Calendar />;
    case 'echarts':
      return <ReactECharts style={{height:'100%',width:'100%'}} option={w.data.option} />;
    default:
      return <div>新小部件</div>;
  }
}

const widgetTypeOptions = [
  { value: 'gpa', label: 'GPA' },
  { value: 'todo', label: '任务清单' },
  { value: 'calendar', label: '日历' },
  { value: 'echarts', label: '图表' },
];

/**
 * Dashboard 仪表盘组件 Props
 * @typedef {Object} DashboardProps
 * @property {string} [customBg] - 小部件卡片和编辑弹窗的自定义背景色
 */
interface DashboardProps {
  /** 小部件卡片和弹窗的自定义背景色 */
  customBg?: string;
}

/**
 * 仪表盘小部件区
 * @param {DashboardProps} props
 * @returns {JSX.Element}
 */
const Dashboard = ({ customBg }: DashboardProps) => {
  const [widgets, setWidgets] = useState<Widget[]>(() => getStoredWidgets() || initialWidgets);
  const [editing, setEditing] = useState<Widget | null>(null);

  // 持久化
  useEffect(() => { saveWidgets(widgets); }, [widgets]);

  /**
   * 添加新小部件
   */
  const addWidget = () => {
    setWidgets([
      ...widgets,
      {
        i: `widget${Date.now()}`,
        x: (widgets.length * 2) % 6,
        y: Infinity,
        w: 2,
        h: 2,
        type: 'gpa',
        data: { value: 4.0 },
      },
    ]);
  };

  /**
   * 删除小部件
   * @param {string} i 
   */
  const removeWidget = (i: string) => {
    setWidgets(widgets.filter((w) => w.i !== i));
  };

  /**
   * 编辑小部件
   * @param {Widget} w 
   */
  const startEdit = (w: Widget) => {
    setEditing({ ...w });
  };

  /**
   * 保存编辑
   */
  const saveEdit = () => {
    if (!editing) return;
    setWidgets(widgets.map((w) => w.i === editing.i ? { ...w, type: editing.type, data: editing.data } : w));
    setEditing(null);
  };

  /**
   * 处理布局变化
   * @param {any[]} layout 
   */
  const onLayoutChange = (layout: any[]) => {
    setWidgets(widgets.map((w, idx) => ({ ...w, ...layout[idx] })));
  };

  return (
    <div style={{margin: '40px auto', maxWidth: 900}}>
      <button onClick={addWidget} style={{marginBottom: 16, padding: '8px 20px', borderRadius: 8, background: '#3B82F6', color: '#fff', fontWeight: 600, transition: 'background 0.2s', boxShadow: '0 2px 8px #3B82F633'}}>+ 添加小部件</button>
      <GridLayout
        className="layout dashboard-animated"
        layout={widgets}
        cols={6}
        rowHeight={80}
        width={900}
        isResizable
        isDraggable
        onLayoutChange={onLayoutChange}
        useCSSTransforms={true}
        style={{transition: 'all 0.4s cubic-bezier(.175,.885,.32,1.275)'}}
      >
        {widgets.map((w) => (
          <div key={w.i} className="dashboard-widget-animated" style={{
            background: customBg || 'rgba(255,255,255,0.18)',
            borderRadius: 18,
            boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            border: '1.5px solid rgba(255,255,255,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            color: '#fff',
            height: '100%',
            transition: 'box-shadow 0.3s, transform 0.3s',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* 删除按钮 */}
            <button onClick={e => {e.stopPropagation(); removeWidget(w.i);}} style={{position:'absolute',top:8,right:8,background:'#EF4444',color:'#fff',border:'none',borderRadius:6,padding:'2px 8px',fontSize:14,cursor:'pointer',zIndex:2}}>
              删除
            </button>
            {/* 编辑按钮 */}
            <button onClick={e => {e.stopPropagation(); startEdit(w);}} style={{position:'absolute',top:8,left:8,background:'#F59E42',color:'#fff',border:'none',borderRadius:6,padding:'2px 8px',fontSize:14,cursor:'pointer',zIndex:2}}>
              编辑
            </button>
            {renderWidgetContent(w)}
          </div>
        ))}
      </GridLayout>
      {/* 编辑弹窗 */}
      {editing && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.25)',zIndex:10,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background: customBg ? customBg.replace('0.18','0.85') : 'rgba(30,41,59,0.98)', color:'#222', borderRadius:16,padding:32,minWidth:320,boxShadow:'0 8px 32px #3B82F6AA', minHeight:320}}>
            <h3 style={{marginBottom:16, color:'#222', fontWeight:700, fontSize:22, letterSpacing:1}}>编辑小部件</h3>
            <div style={{marginBottom:12, display:'flex', alignItems:'center', gap:8}}>
              <label style={{fontWeight:600, color:'#222'}}>类型：</label>
              <select value={editing.type} onChange={e => setEditing({...editing!, type: e.target.value, data: {}})}
                style={{padding:'6px 16px', borderRadius:6, border:'1.5px solid #3B82F6', background:'#fff', color:'#222', fontWeight:500, outline:'none'}}>
                {widgetTypeOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            {/* 不同类型的内容编辑 */}
            {editing.type === 'gpa' && (
              <div style={{marginBottom:12, display:'flex', alignItems:'center', gap:8}}>
                <label style={{fontWeight:600, color:'#222'}}>GPA：</label>
                <input type="number" step="0.01" value={editing.data.value || ''} onChange={e => setEditing({...editing!, data: { value: parseFloat(e.target.value) }})}
                  style={{padding:'6px 16px', borderRadius:6, border:'1.5px solid #3B82F6', background:'#fff', color:'#222', fontWeight:500, outline:'none', width:100}} />
              </div>
            )}
            {editing.type === 'todo' && (
              <div style={{marginBottom:12, display:'flex', alignItems:'center', gap:8}}>
                <label style={{fontWeight:600, color:'#222'}}>任务（逗号分隔）：</label>
                <input type="text" value={editing.data.tasks ? editing.data.tasks.join(',') : ''} onChange={e => setEditing({...editing!, data: { tasks: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) }})}
                  style={{padding:'6px 16px', borderRadius:6, border:'1.5px solid #3B82F6', background:'#fff', color:'#222', fontWeight:500, outline:'none', width:180}} />
              </div>
            )}
            {editing.type === 'echarts' && (
              <div style={{marginBottom:12, display:'flex', alignItems:'center', gap:8}}>
                <label style={{fontWeight:600, color:'#222'}}>图表类型：</label>
                <select value={editing.data.chartType||'line'} onChange={e => {
                  const chartType = e.target.value;
                  let option = {};
                  if(chartType==='line') option = {xAxis:{type:'category',data:['Mon','Tue','Wed','Thu','Fri']},yAxis:{type:'value'},series:[{data:[120,200,150,80,70],type:'line'}]};
                  if(chartType==='bar') option = {xAxis:{type:'category',data:['Mon','Tue','Wed','Thu','Fri']},yAxis:{type:'value'},series:[{data:[120,200,150,80,70],type:'bar'}]};
                  setEditing({...editing!, data: { chartType, option }});
                }}
                  style={{padding:'6px 16px', borderRadius:6, border:'1.5px solid #3B82F6', background:'#fff', color:'#222', fontWeight:500, outline:'none'}}>
                  <option value="line">折线图</option>
                  <option value="bar">柱状图</option>
                </select>
              </div>
            )}
            {/* 日历无需额外配置 */}
            <div style={{marginTop:24,display:'flex',gap:12, justifyContent:'flex-end'}}>
              <button onClick={saveEdit} style={{background:'#3B82F6',color:'#fff',border:'none',borderRadius:8,padding:'8px 28px',fontWeight:700, fontSize:16, boxShadow:'0 2px 8px #3B82F633', letterSpacing:1, cursor:'pointer', transition:'background 0.2s'}}>保存</button>
              <button onClick={()=>setEditing(null)} style={{background:'#aaa',color:'#fff',border:'none',borderRadius:8,padding:'8px 28px',fontWeight:700, fontSize:16, cursor:'pointer', transition:'background 0.2s'}}>取消</button>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .dashboard-animated .react-grid-item {
          transition: all 0.4s cubic-bezier(.175,.885,.32,1.275);
        }
        .dashboard-widget-animated:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 32px 0 #3B82F6AA, 0 2px 16px 0 #8B5CF6AA;
        }
        .dashboard-widget-animated button {
          min-width: 48px;
          min-height: 32px;
          font-size: 15px;
          font-weight: 600;
          opacity: 0.92;
          transition: background 0.18s, box-shadow 0.18s;
        }
        .dashboard-widget-animated button:active {
          box-shadow: 0 0 0 2px #3B82F6;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
