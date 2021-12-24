import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      style={({ isActive }) => ({
        color: isActive ? '#2196f3' : '#2a363b',
        fontSize: isActive ? '25px' : '20px',
      })}
      className={s.link}
    >
      Home
    </NavLink>
    <NavLink
      to="/variables"
      style={({ isActive }) => ({
        color: isActive ? '#2196f3' : '#2a363b',
        fontSize: isActive ? '25px' : '20px',
      })}
      className={s.link}
    >
      Variables
    </NavLink>
  </nav>
);

export default Navigation;
