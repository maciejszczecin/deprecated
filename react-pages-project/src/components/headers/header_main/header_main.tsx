import { Outlet, Link } from "react-router-dom";
import style from './header_main.module.css';

const header_main = () => {
  return (
    <>
        <header className={style.header}>
            <Link to="/" className={style.home_link}>First React Project</Link>
        </header>

        <Outlet />
    </>
  )
};

export default header_main;