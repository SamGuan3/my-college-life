import Banner from './Banner';
import Dashboard from './Dashboard';

/**
 * 首页欢迎横幅组件
 * @returns {JSX.Element}
 */
const HomeBanner = () => (
  <div
    style={{
      position: "relative",
      width: "100vw",
      minHeight: "100vh",
      background: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start"
    }}
  >
    {/* 玻璃质感卡片 */}
    <div
      className="glass"
      style={{
        position: "relative",
        maxWidth: 700,
        margin: "60px auto 0 auto",
        padding: "48px 32px 56px 32px",
        borderRadius: 32,
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        border: "1.5px solid rgba(255,255,255,0.3)",
        color: "#fff",
        zIndex: 2
      }}
    >
      {/* 头像和名字（Banner组件） */}
      <Banner />
      {/* 欢迎语和账号信息 */}
      <h1 style={{
        margin: 0,
        fontSize: "2.5rem",
        fontWeight: "bold",
        letterSpacing: 2,
        textShadow: "0 2px 16px rgba(0,0,0,0.12)"
      }}>
        欢迎来到呱鲨的大学生活
      </h1>
      <div style={{ marginTop: 16 }}>
        抖音号：
        <a
          href="https://www.douyin.com/user/G3462343313"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ff5f6d", fontWeight: 700 }}
        >
          G3462343313
        </a>
      </div>
      <div>
        Bilibili账号：
        <a
          href="https://space.bilibili.com/你的UID"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#36d1c4", fontWeight: 700 }}
        >
          _呱呱呱鲨
        </a>
      </div>
      <div style={{ color: 'limegreen', marginTop: 4, fontWeight: 700 }}>微信：Guansss__</div>
    </div>
    {/* 可选：底部渐变装饰 */}
    <div style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 180,
      background: "linear-gradient(0deg,rgba(224,231,239,0.8) 0%,rgba(245,247,250,0) 100%)",
      zIndex: 1
    }} />
  </div>
);

export default HomeBanner;
