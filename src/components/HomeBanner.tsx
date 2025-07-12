import Banner from './Banner';

/**
 * 首页欢迎横幅组件
 * @returns {JSX.Element}
 */
const HomeBanner = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    {/* 头像和名字（Banner组件） */}
    <Banner />

    {/* 左上角欢迎语和账号信息 */}
    <div style={{
      position: "absolute",
      top: 30,
      left: 30,
      color: "#fff",
      zIndex: 2,
      textAlign: "left"
    }}>
      <h1 style={{
        margin: 0,
        fontSize: "2.5rem",
        fontWeight: "bold"
      }}>
        欢迎来到呱鲨的大学生活
      </h1>
      <div>
        抖音号：
        <a
          href="https://www.douyin.com/user/G3462343313"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "red" }}
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
          style={{ color: "blue" }}
        >
          _呱呱呱鲨
        </a>
      </div>
      <div style={{ color: 'limegreen', marginTop: 4 }}>微信：Guansss__</div>
    </div>
  </div>
);

export default HomeBanner;
