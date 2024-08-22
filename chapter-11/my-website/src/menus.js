import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import "./stylesheets/menus.scss";

const selectedStyle = {
  backgroundColor: "White",
  color: "slatagray",
};

//좌측 메인 메뉴
export const MainMenu = () => (
  <nav className="main-menu">
    <NavLink to="/">
      <FcHome />
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
      [회사소개]
    </NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>
      [이벤트]
    </NavLink>
    <NavLink to="/products" activeStyle={selectedStyle}>
      [제품 소개]
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>
      [고객지원]
    </NavLink>
  </nav>
);

//회사 소개 상단 메뉴
export const AboutMenu = ({ match }) => (
  <div className="about-menu">
    <li>
      <NavLink to="/about" style={match.isExact && selectedStyle}>
        [회사]
      </NavLink>
    </li>
    <li>
      <NavLink to="/about/history" activeStyle={selectedStyle}>
        [연혁]
      </NavLink>
    </li>
    <li>
      <NavLink to="/about/services" activeStyle={selectedStyle}>
        [서비스]
      </NavLink>
    </li>
    <li>
      <NavLink to="/about/location" activeStyle={selectedStyle}>
        [위치]
      </NavLink>
    </li>
  </div>
);
