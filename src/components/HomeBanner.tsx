import React from "react";

/**
 * 首页欢迎横幅组件
 * @returns {JSX.Element}
 */
const HomeBanner = () => (
  <div>
    {/* 你的头像和背景部分 */}
    <h1>欢迎来到呱鲨的大学生活</h1>
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
