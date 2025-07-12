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
        <img src="/zhiyuanshichang1.jpg" alt="荣誉学业证明3" style={{ width: '200px', borderRadius: '8px' }} />
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
    return <div style={{ padding: 40 }}><h2>关于我</h2><p>这里是关于我内容</p></div>;
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