import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

/**
 * 仪表盘小部件组件
 * @returns {JSX.Element}
 */
const initialWidgets = [
  { i: 'gpa', x: 0, y: 0, w: 2, h: 2, content: <div>GPA: <span style={{fontWeight:700, fontSize:32}}>3.9</span></div> },
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
        content: <div>新小部件 {widgets.length + 1}</div>
      }
    ]);
  };

  return (
    <div style={{margin: '40px auto', maxWidth: 900}}>
      <button onClick={addWidget} style={{marginBottom: 16, padding: '8px 20px', borderRadius: 8, background: '#3B82F6', color: '#fff', fontWeight: 600}}>+ 添加小部件</button>
      <GridLayout
        className="layout"
        layout={widgets}
        cols={6}
        rowHeight={80}
        width={900}
        isResizable
        isDraggable
        onLayoutChange={layout => {
          // 保持小部件顺序
          setWidgets(widgets.map((w, idx) => ({ ...w, ...layout[idx] })));
        }}
      >
        {widgets.map(w => (
          <div key={w.i} style={{
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
            height: '100%'
          }}>
            {w.content}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Dashboard;
