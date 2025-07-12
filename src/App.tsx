import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeBanner from "./components/HomeBanner";

  // 其他页面内容可以先用简单占位
function Life() {
  return (
    <div style={{ padding: 40 }}>
      <h2>大学生活</h2>
      {/* 这里插入图片 */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginTop: '16px'
      }}>
        <img src="/xiaoyunhui1.jpg" alt="荣誉学业证明1" style={{ width: '200px', borderRadius: '8px' }} />
        <img src="/jidian1.jpg" alt="荣誉学业证明2" style={{ width: '200px', borderRadius: '8px' }} />
        <img src="/zhiyuanshichang1.png" alt="荣誉学业证明3" style={{ width: '200px', borderRadius: '8px' }} />
        <img src="/bianchengzhixing.jpg" alt="荣誉学业证明4" style={{ width: '200px', borderRadius: '8px' }} />
        <img src="/junxun.jpg" alt="荣誉学业证明5" style={{ width: '200px', borderRadius: '8px' }} />
      </div>
    </div>
  );
}
  function Hobby() {
    return <div style={{ padding: 40 }}><h2>兴趣爱好</h2></div>;
  }
  function Gallery() {
    return <div style={{ padding: 40 }}><h2>相册集</h2><div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginTop: '16px'
    }}>
     
      <img src="/meandlqr.jpg" alt="和同学合影1" style={{ width: '100%', borderRadius: '8px' }} />
      <img src="/cwei.jpg" alt="照片2" style={{ width: '100%', borderRadius: '8px' }} />
     <img src="/meandlqr.jpg" alt="照片3" style={{ width: '100%', borderRadius: '8px' }} />
    <img src="/guohu1.jpg" alt="照片4" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/shuai.jpg" alt="照片5" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/guohu2.jpg" alt="照片6" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/meandlqr2.jpg" alt="照片7" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/meandlqrandxray.jpg" alt="照片8" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/meandlqr3.jpg" alt="照片9" style={{ width: '100%', borderRadius: '8px' }} />
      {/* 可以继续添加更多图片 */}
    </div></div>;
  }
  function About() {
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px',
        padding: '40px',
        background: '#fff',
        borderRadius: '16px',
        maxWidth: '1000px',
        margin: '40px auto'
      }}>
        {/* 左侧：头像和昵称 */}
        <div style={{ minWidth: 240, textAlign: 'center' }}>
          <img
            src="/你的头像图片名.jpg"
            alt="呱鲨"
            style={{
              width: 200,
              height: 200,
              borderRadius: '16px',
              objectFit: 'cover',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
            }}
          />
          <div style={{ fontWeight: 'bold', fontSize: 22, marginTop: 16 }}>呱鲨</div>
          <div style={{ color: '#888', marginTop: 8 }}>地点：广州</div>
          <div style={{ color: '#007bff', marginTop: 8 }}>
            
          </div>
        </div>

        {/* 右侧：基本信息和技能 */}
        <div style={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* 基本信息 */}
          <div style={{
            background: '#eaf3ff',
            borderRadius: 12,
            padding: 20,
            marginBottom: 10,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>🐶 基本信息：</div>
            <div>呱鲨是我的别称。</div>
            <div>INTJ，水瓶座♒。</div>
            <div style={{ marginTop: 8 }}>
              <span style={{ color: '#f90', fontWeight: 'bold' }}>学习能力较强</span> &nbsp;
              <span style={{ color: '#f90', fontWeight: 'bold' }}>05在校大学生</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <ul style={{ paddingLeft: 20 }}>
             
                <li>喜欢听歌，健身，热爱运动</li>
                <li></li>
              </ul>
            </div>
          </div>
          {/* 能力/服务 */}
          <div style={{
            background: '#fff7e6',
            borderRadius: 12,
            padding: 20,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>🧡 我能提供什么：</div>
            <ul style={{ paddingLeft: 20 }}>
              <li></li>
              
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
/**
 * 应用主组件
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeBanner />} />
        <Route path="/life" element={<Life />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;