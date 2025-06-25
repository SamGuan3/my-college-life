/**
 * 顶部导航栏组件
 * @module Navbar
 * @returns {JSX.Element} React 元素
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NAV_ITEMS = [
  { label: '首页', to: '/' },
  { label: '大学生活', to: '/life' },
  { label: '兴趣爱好', to: '/hobby' },
  { label: '相册集', to: '/gallery' },
  { label: '关于我', to: '/about' },
];

/**
 * 顶部导航栏组件，包含 LOGO、菜单、移动端汉堡按钮。
 * @returns {JSX.Element}
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* LOGO 可替换为你的网名首字母或 SVG 图标 */}
        <span className="logo-text">G</span>
        <span className="logo-line" />
      </div>
      <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <Link to={item.to} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="navbar__toggle"
        aria-label="菜单"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
}

export default Navbar; 