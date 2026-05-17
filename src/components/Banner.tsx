
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
        width: "100%",
        height: "100%",
        minHeight: 400,
        padding: "32px 0"
      }}
    >
      <img
        className="banner__avatar"
        src="cat.jpg"
        alt="头像"
        style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", marginBottom: 24, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)" }}
      />
      <div className="banner__name" style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, color: "#5b86e5", letterSpacing: 2 }}>呱鲨</div>
      <div className="banner__slogan" style={{ fontSize: 20, marginBottom: 24, color: "#222" }}>05在校大学生</div>
      <button
        className="banner__btn"
        style={{
          background: "linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)",
          color: "#fff",
          fontWeight: 600,
          fontSize: 18,
          border: "none",
          borderRadius: 24,
          padding: "12px 32px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(91,134,229,0.18)",
          transition: "background 0.2s"
        }}
        onClick={() => {
          navigate('/gallery');
        }}
      >
        探索我的生活
      </button>
    </div>
  );
}

export default Banner;