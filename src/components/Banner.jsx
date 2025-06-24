import React from 'react';
import './Banner.css';

/**
 * 首屏 Banner 组件
 * @returns {JSX.Element}
 */
function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__avatar"
        src="cat.jpg"
        alt="myphoto.jpg"
      />
      <div className="banner__name">呱鲨</div>
      <div className="banner__slogan">mylife</div>
      <button
        className="banner__btn"
        onClick={() => {
          document.getElementById('life')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        探索我的生活
      </button>
    </div>
  );
}

export default Banner;