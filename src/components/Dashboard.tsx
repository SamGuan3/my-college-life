import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

/**
 * 仪表盘小部件组件
 * @returns {JSX.Element}
 */
const initialWidgets = [
  { i: 'gpa', x: 0, y: 0, w: 2, h: 2, content: <div>GPA: <span style={{fontWeight:700, fontSize:32, background: 'linear-gradient(90deg,#3B82F6,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>3.9</span></div> },
  { i: 'todo', x: 2, y: 0, w: 2, h: 2, content: <div>任务：<ul><li>完成作业</li><li>参加活动</li></ul></div> },
];

const Dashboard = () => {
  const [widgets, setWidgets] = useState(initialWidgets);

  // 添加新小部件
  const addWidget = () => {
    setWidgets([
      ...widgets,
      {
        i: `widget${widgets.length}`,
        x: (widgets.length * 2) % 6,
        y: Infinity,
        w: 2,
        h: 2,
        content: <div style={{background: 'linear-gradient(90deg,#10B981,#F59E42)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700}}>新小部件 {widgets.length + 1}</div>
      }
    ]);
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
        onLayoutChange={(layout: any[]) => {
          setWidgets(widgets.map((w, idx) => ({ ...w, ...layout[idx] })));
        }}
        useCSSTransforms={true}
        style={{transition: 'all 0.4s cubic-bezier(.175,.885,.32,1.275)'}}
      >
        {widgets.map(w => (
          <div key={w.i} className="dashboard-widget-animated" style={{
            background: 'rgba(255,255,255,0.18)',
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
          }}>
            {w.content}
          </div>
        ))}
      </GridLayout>
      <style>{`
        .dashboard-animated .react-grid-item {
          transition: all 0.4s cubic-bezier(.175,.885,.32,1.275);
        }
        .dashboard-widget-animated:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 32px 0 #3B82F6AA, 0 2px 16px 0 #8B5CF6AA;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
