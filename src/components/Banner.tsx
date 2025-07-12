
import './Banner.css';
import { useNavigate } from 'react-router-dom';

/**
 * 首屏 Banner 组件
 * @returns {JSX.Element}
 */
function Banner() {
  const navigate = useNavigate();
  return (
    <div
      className="banner"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // 让内容在父容器内垂直居中
      }}
    >
      <img
        className="banner__avatar"
        src="cat.jpg"
        alt="shuai.jpg"
      />
      <div className="banner__name">呱鲨</div>
      <div className="banner__slogan">05在校大学生</div>
      <button
        className="banner__btn"
        onClick={() => {
          // 跳转逻辑
        }}
      >
        探索我的生活
      </button>
    </div>
  );
}

export default Banner;