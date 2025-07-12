import React from "react";

/**
 * 首页欢迎横幅组件
 * @returns {JSX.Element}
 */
const HomeBanner = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    {/* 左上角欢迎语 */}
    <h1
      style={{
        position: "absolute",
        top: 30,
        left: 30,
        margin: 0,
        color: "#fff",
        fontSize: "2.5rem",
        zIndex: 2,
        fontWeight: "bold"
      }}
    >
      欢迎来到呱鲨的大学生活
    </h1>
    {/* 头像、抖音号、B站账号等内容可以继续放在合适位置 */}
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
  </div>
);

export default HomeBanner;
