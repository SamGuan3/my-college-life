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
      <div className="max-w-[1600px] w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  );
  }
  function Hobby() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 60,
          boxSizing: 'border-box',
          background: 'transparent',
          color: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            width: '100%',
            padding: '32px 16px',
          }}
        >
          {/* 英雄区 */}
          <div
            style={{
              background: 'rgba(255,255,255,0.18)',
              borderRadius: 32,
              color: '#fff',
              padding: '48px 32px',
              marginBottom: 40,
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              textAlign: 'center',
            }}
          >
            <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 16, textShadow: '0 2px 8px rgba(0,0,0,0.10)', color: '#fff' }}>探索我的兴趣世界</h1>
            <p style={{ fontSize: 22, opacity: 0.92, marginBottom: 24, color: '#e0e7ef' }}>音乐、电影、健身和编程，每一种爱好都是生活的色彩</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
              <a href="#music" style={{ ...btnStyle, background: '#3B82F6', color: '#fff' }}><i className="fa fa-music" style={{ marginRight: 8 }}></i>音乐</a>
              <a href="#movies" style={{ ...btnStyle, background: '#8B5CF6', color: '#fff' }}><i className="fa fa-film" style={{ marginRight: 8 }}></i>电影</a>
              <a href="#fitness" style={{ ...btnStyle, background: '#10B981', color: '#fff' }}><i className="fa fa-heartbeat" style={{ marginRight: 8 }}></i>健身</a>
              <a href="#programming" style={{ ...btnStyle, background: '#F59E42', color: '#fff' }}><i className="fa fa-code" style={{ marginRight: 8 }}></i>编程</a>
            </div>
          </div>
          {/* 内容区 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
            {/* 音乐 */}
            <section id="music" style={glassSectionStyle}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <span style={{ ...tagStyle, color: '#3B82F6', background: '#DBEAFE' }}><i className="fa fa-music" style={{ marginRight: 6 }}></i>我的音乐世界</span>
                  <h2 style={{ ...h2Style, color: '#fff' }}>听音乐，感受节奏与情感的共鸣</h2>
                  <p style={{ ...pStyle, color: '#e0e7ef' }}>音乐是我生活中不可或缺的一部分。无论是工作、学习还是放松，不同风格的音乐总能带给我不同的心情和灵感。从流行到摇滚，从古典到电子，每一种音乐类型都有其独特的魅力。</p>
                  <ul style={{ fontSize: 16, color: '#A5B4FC', margin: '16px 0 0 0', padding: 0, listStyle: 'none' }}>
                    <li><i className="fa fa-headphones" style={{ color: '#3B82F6', marginRight: 8 }}></i>日常聆听：每天一小时</li>
                    <li><i className="fa fa-star" style={{ color: '#F59E42', marginRight: 8 }}></i>最爱类型：华语、流行、古典</li>
                  </ul>
                </div>
                <div style={{ flex: 1, minWidth: 260, textAlign: 'center' }}>
                  <img src="https://picsum.photos/seed/music/400/300" alt="音乐专辑封面" style={imgCardStyle} />
                </div>
              </div>
            </section>
            {/* 电影 */}
            <section id="movies" style={glassSectionStyle}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 260, textAlign: 'center' }}>
                  <img src="https://picsum.photos/seed/movie1/400/300" alt="电影" style={imgCardStyle} />
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <span style={{ ...tagStyle, background: '#FEE2E2', color: '#EF4444' }}><i className="fa fa-film" style={{ marginRight: 6 }}></i>电影爱好者</span>
                  <h2 style={{ ...h2Style, color: '#fff' }}>电影是一扇窗，带我看遍世间万象</h2>
                  <p style={{ ...pStyle, color: '#e0e7ef' }}>电影是视觉与听觉的盛宴，是故事与情感的交融。我喜欢在闲暇时光沉浸在电影的世界里，体验不同的人生和冒险。</p>
                  <ul style={{ fontSize: 16, color: '#FCA5A5', margin: '16px 0 0 0', padding: 0, listStyle: 'none' }}>
                    <li><i className="fa fa-star" style={{ color: '#F59E42', marginRight: 8 }}></i>最爱影片：《星际穿越》《千与千寻》《盗梦空间》</li>
                    <li><i className="fa fa-film" style={{ color: '#3B82F6', marginRight: 8 }}></i>类型偏好：科幻、动画、悬疑</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* 健身 */}
            <section id="fitness" style={glassSectionStyle}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <span style={{ ...tagStyle, background: '#D1FAE5', color: '#10B981' }}><i className="fa fa-heartbeat" style={{ marginRight: 6 }}></i>健康生活</span>
                  <h2 style={{ ...h2Style, color: '#fff' }}>健身是一种生活态度，坚持是最好的训练</h2>
                  <p style={{ ...pStyle, color: '#e0e7ef' }}>健身已经成为我生活中不可或缺的一部分。通过跑步、力量训练和团队运动，我不仅保持了健康的体魄，更培养了坚持和自律的品质。</p>
                  <ul style={{ fontSize: 16, color: '#6EE7B7', margin: '16px 0 0 0', padding: 0, listStyle: 'none' }}>
                    <li><i className="fa fa-futbol-o" style={{ color: '#8B5CF6', marginRight: 8 }}></i>足球：每周末和朋友踢球</li>
                    <li><i className="fa fa-balance-scale" style={{ color: '#F59E42', marginRight: 8 }}></i>营养管理：合理搭配饮食</li>
                  </ul>
                </div>
                <div style={{ flex: 1, minWidth: 260, textAlign: 'center' }}>
                  <img src="https://picsum.photos/seed/fitness/400/300" alt="健身" style={imgCardStyle} />
                </div>
              </div>
            </section>
            {/* 编程 */}
            <section id="programming" style={glassSectionStyle}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 260, textAlign: 'center' }}>
                  <img src="https://picsum.photos/seed/code/400/300" alt="编程" style={imgCardStyle} />
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <span style={{ ...tagStyle, background: '#EDE9FE', color: '#8B5CF6' }}><i className="fa fa-code" style={{ marginRight: 6 }}></i>技术探索者</span>
                  <h2 style={{ ...h2Style, color: '#fff' }}>编程是创造的艺术，AI是未来的钥匙</h2>
                  <p style={{ ...pStyle, color: '#e0e7ef' }}>我热爱编程和探索AI技术，喜欢用代码解决实际问题，创造有价值的应用。从Web开发到机器学习，每一次技术探索都是一次成长的机会。</p>
                  <ul style={{ fontSize: 16, color: '#C4B5FD', margin: '16px 0 0 0', padding: 0, listStyle: 'none' }}>
                    <li><i className="fa fa-code" style={{ color: '#3B82F6', marginRight: 8 }}></i>主攻方向：Web开发、AI</li>
                    <li><i className="fa fa-star" style={{ color: '#F59E42', marginRight: 8 }}></i>技能：c语言/c++编程能力，利用智能体进行一些前端开发</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
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
      <div
        style={{
          minHeight: '100vh',
          background: 'transparent',
          padding: '48px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">相册集</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 24,
            maxWidth: 1400,
            width: '100%',
            padding: '0 24px',
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{
                gridColumn: `span 4`, // 3行，每行3张，12列Bento Grid
                borderRadius: 24,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.18)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
                backdropFilter: 'blur(12px) saturate(180%)',
                WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 320,
                height: 320,
                transition: 'box-shadow 0.3s',
                position: 'relative',
              }}
              className="glass glass-hover"
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' as const,
                  borderRadius: 20,
                  boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)',
                  transition: 'transform 0.3s',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  function About() {
    const projects = [
      {
        id: 1,
        name: '编程之星项目',
        description: '参与学院编程之星比赛，开发了一个基于C++的数据结构可视化工具，帮助同学们更好地理解算法原理。',
        techStack: ['C++', 'Qt', '数据结构'],
        time: '2023年10月',
        image: '/bianchengzhixing.jpg',
        link: '#',
        tags: ['竞赛项目', '编程比赛']
      },
      {
        id: 2,
        name: '课程设计 - 智能家居系统',
        description: '基于物联网技术设计的智能家居控制系统，支持远程控制灯光、空调等设备。',
        techStack: ['Python', 'Arduino', 'MQTT'],
        time: '2024年3月',
        image: '/jidian1.jpg',
        link: '#',
        tags: ['课程设计', '物联网']
      },
      {
        id: 3,
        name: '个人作品集网站',
        description: '使用React和Vite构建的个人展示网站，展示我的大学生活和项目经历。',
        techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
        time: '2024年6月',
        image: '/mybackg.jpg',
        link: '#',
        tags: ['前端开发', '个人项目']
      },
      {
        id: 4,
        name: 'AI图像识别应用',
        description: '基于深度学习的图像分类应用，支持多种物体识别和实时检测功能。',
        techStack: ['Python', 'PyTorch', 'OpenCV'],
        time: '2024年9月',
        image: '/cat.jpg',
        link: '#',
        tags: ['AI项目', '机器学习']
      },
    ];

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: 60,
          boxSizing: 'border-box',
          paddingBottom: 60,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            padding: '40px',
            background: 'rgba(255,255,255,0.18)',
            borderRadius: '24px',
            maxWidth: '1000px',
            width: '90%',
            boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            border: '1.5px solid rgba(255,255,255,0.25)',
            marginBottom: 40,
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
            <div style={{ fontWeight: 'bold', fontSize: 22, marginTop: 16, color: '#34C759' }}>呱鲨</div>
            <div style={{ color: '#34C759', marginTop: 8 }}>地点：广州</div>
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

        {/* 项目经历区域 */}
        <div style={{
          maxWidth: '1200px',
          width: '90%',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            marginBottom: 32,
            textShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}>
            🚀 项目经历
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  borderRadius: 20,
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
                  backdropFilter: 'blur(12px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                className="glass glass-hover"
              >
                {/* 项目图片 */}
                <div style={{
                  height: 180,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 12,
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
                  }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 8,
                    }}>
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: '#3B82F6',
                            color: '#fff',
                            padding: '4px 12px',
                            borderRadius: 999,
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* 项目内容 */}
                <div style={{ padding: 20 }}>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: 8,
                  }}>
                    {project.name}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 12,
                  }}>
                    {project.description}
                  </p>
                  {/* 技术栈 */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.6)',
                      marginBottom: 6,
                    }}>
                      技术栈
                    </div>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                    }}>
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: 'rgba(139, 92, 246, 0.3)',
                            color: '#C4B5FD',
                            padding: '4px 10px',
                            borderRadius: 6,
                            fontSize: 12,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* 时间和链接 */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 13,
                  }}>
                    <span>{project.time}</span>
                    <a
                      href={project.link}
                      style={{
                        color: '#3B82F6',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'color 0.2s',
                      }}
                    >
                      查看详情 →
                    </a>
                  </div>
                </div>
              </div>
            ))}
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

// 卡片按钮样式
const btnStyle = {
  background: '#fff',
  color: '#3B82F6',
  padding: '12px 32px',
  borderRadius: 999,
  fontWeight: 500,
  fontSize: 18,
  boxShadow: '0 2px 8px rgba(59,130,246,0.10)',
  margin: '0 4px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'all 0.2s',
};
const glassSectionStyle = {
  background: 'rgba(255,255,255,0.18)',
  borderRadius: 24,
  boxShadow: '0 4px 24px 0 rgba(31,38,135,0.10)',
  backdropFilter: 'blur(12px) saturate(180%)',
  WebkitBackdropFilter: 'blur(12px) saturate(180%)',
  border: '1.5px solid rgba(255,255,255,0.25)',
  padding: '32px 24px',
};
const tagStyle = {
  display: 'inline-block',
  background: '#DBEAFE',
  color: '#3B82F6',
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 600,
  padding: '4px 16px',
  marginBottom: 12,
};
const h2Style = {
  fontSize: '2rem',
  fontWeight: 700,
  margin: '12px 0 18px 0',
  color: '#1E293B',
};
const pStyle = {
  fontSize: 18,
  color: '#374151',
  marginBottom: 8,
};
const imgCardStyle = {
  width: '100%',
  maxWidth: 340,
  height: 220,
  objectFit: 'cover' as const,
  borderRadius: 18,
  boxShadow: '0 2px 16px 0 rgba(59,130,246,0.10)',
  margin: '0 auto',
};