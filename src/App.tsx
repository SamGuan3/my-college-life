import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeBanner from "./components/HomeBanner";
import { useEffect } from 'react';

  // 其他页面内容可以先用简单占位
function Life() {
  useEffect(() => {
    const chartDom = document.getElementById('lifeChart');
    if (chartDom && (window as any).echarts) {
      const myChart = (window as any).echarts.init(chartDom);
      myChart.setOption({
        backgroundColor: 'rgba(0,0,0,0)',
        xAxis: { type: 'category', data: ['大一','大二','大三','大四'], axisLabel: { color: '#fff' } },
        yAxis: { type: 'value', axisLabel: { color: '#fff' } },
        series: [{
          data: [3.5, 3.7, 3.9, 4.0],
          type: 'line',
          smooth: true,
          itemStyle: {
            color: new (window as any).echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#36d1c4'},{offset:1,color:'#5b86e5'}])
          }
        }]
      });
    }
  }, []);
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* 超大卡片 */}
      <div className="glass col-span-2 row-span-2 flex flex-col justify-center items-start p-10 min-h-[400px] relative overflow-hidden">
        <div className="text-7xl font-extrabold mb-4 apple-gradient">大学生活</div>
        <div className="text-4xl font-bold mb-2">我的成长</div>
        <div className="text-2xl font-bold mb-6">My College Life</div>
        <div className="text-lg font-light">用Bento Grid和玻璃质感，记录我的大学点滴</div>
        <i className="fas fa-graduation-cap absolute right-8 bottom-8 text-8xl opacity-20"></i>
      </div>
      {/* 其他卡片 */}
      <div className="glass flex flex-col justify-center items-center p-8">
        <div className="text-6xl font-extrabold highlight-blue mb-2">3.9</div>
        <div className="text-lg font-bold">GPA</div>
        <div className="text-sm text-white/70">平均绩点</div>
      </div>
      {/* ECharts 图表 */}
      <div className="glass flex flex-col justify-center items-center p-8">
        <div id="lifeChart" className="w-full h-40"></div>
        <div className="text-lg font-bold mt-4">成绩趋势</div>
      </div>
      {/* 兴趣/活动 */}
      <div className="glass flex flex-col justify-center items-start p-8">
        <div className="text-2xl font-bold mb-2">活动 <span className="text-base font-normal ml-2">Activities</span></div>
        <ul className="list-disc pl-6 text-lg">
          <li>学生会 / Student Union</li>
          <li>志愿服务 / Volunteering</li>
          <li>编程比赛 / Coding Contest</li>
        </ul>
      </div>
    </div>
  );
}
  function Hobby() {
    return (
      <div style={{ padding: 40 }}>
        <h2>兴趣爱好</h2>
        <ul style={{ fontSize: 18, color: '#222', marginTop: 20 }}>
          <li>听音乐，看电影</li>
          <li>健身、跑步、足球</li>
          <li>编程、AI 技术探索</li>
         
          {/* 你可以继续添加更多兴趣 */}
        </ul>
      </div>
    );
  }
  function Gallery() {
    const images = [
      { src: "/meandlqr.jpg", alt: "" },
      { src: "/cwei.jpg", alt: "" },
      { src: "/meandlqr.jpg", alt: "" },
      { src: "/guohu1.jpg", alt: "" },
      { src: "/shuai.jpg", alt: "" },
      { src: "/guohu2.jpg", alt: "" },
      { src: "/meandlqr2.jpg", alt: "" },
      { src: "/meandlqrandxray.jpg", alt: "" },
      { src: "/meandlqr3.jpg", alt: "" },
    ];
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0e7ef 0%, #f5f7fa 100%)',
        padding: '48px 0'
      }}>
        <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">相册集</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[1400px] mx-auto px-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-3xl flex flex-col items-center"
              style={{
                background: 'rgba(255,255,255,0.28)',
                boxShadow: '0 12px 40px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '2px solid rgba(255,255,255,0.35)',
                padding: 20,
                minHeight: 320,
                height: 320,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'box-shadow 0.3s',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-2xl mb-2"
                style={{
                  maxHeight: 260,
                  maxWidth: '100%',
                  width: 'auto',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  function About() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 60, // 预留导航栏高度
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            padding: '40px',
            background: '#fff',
            borderRadius: '16px',
            maxWidth: '1000px',
            boxShadow: '0 8px 32px 0 rgba(31,38,135,0.08)',
          }}
        >
          {/* 左侧：头像和昵称 */}
          <div style={{ minWidth: 240, textAlign: 'center' }}>
            <img
              src="/cat.jpg"
              alt="呱鲨"
              style={{
                width: 200,
                height: 200,
                borderRadius: '16px',
                objectFit: 'cover',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
              }}
            />
            <div style={{ fontWeight: 'bold', fontSize: 22, marginTop: 16, color: '#111' }}>呱鲨</div>
            <div style={{ color: '#555', marginTop: 8 }}>地点：广州</div>
            <div style={{ color: '#007bff', marginTop: 8 }}>
              
            </div>
          </div>
          {/* 右侧：基本信息和技能 */}
          <div style={{ flex: 1, minWidth: 260 }}>
            {/* 基本信息 */}
            <div style={{
              background: '#eaf3ff',
              borderRadius: 12,
              padding: 20,
              marginBottom: 10,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              color: '#222'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: 8, color: '#111' }}>🐸 基本信息：</div>
              <div style={{ color: '#222' }}>呱鲨是我的别称。</div>
              <div style={{ color: '#222' }}>INTJ，水瓶座♒。</div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: '#f90', fontWeight: 'bold' }}>学习能力较强</span> &nbsp;
                <span style={{ color: '#f90', fontWeight: 'bold' }}>05在校大学生</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <ul style={{ paddingLeft: 20, color: '#222' }}>
                  <li>喜欢听歌，健身，热爱运动，喜欢探索</li>
                  <li>对新事物充满好奇</li>
                </ul>
              </div>
            </div>
            {/* 能力/服务 */}
            <div style={{
              background: '#fff7e6',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              color: '#222'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: 8, color: '#d2691e' }}>🧡 能力：</div>
              <ul style={{ paddingLeft: 20, color: '#222' }}>
                <li>具备c语言/c++编程能力</li>
                <li>会利用智能体进行一些前端开发</li>
                <li>乐于沟通，擅长倾听需求，能清晰表达自己的想法</li>
              </ul>
            </div>
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