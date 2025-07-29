import { Link, Outlet } from 'react-router-dom';
import style from './page_crocopark_body.module.css'

function page_crocopark_body() {
  return (
    <>
      <section className={style.main}>
        <section className={style.main_box}>
          <header className={style.header}>
            <img className={style.logo} src="./public/logo_256x256.png" alt="logo"   onError={e => {const target = e.currentTarget; if (target.src.endsWith("/logo_256x256.png")) {target.src = "./../public/logo_256x256.png";}}}/>
            <section className={style.right_header_section}>
              <h1 style={{textAlign: 'center'}}>
                <Link className={style.park_name} to="/crocopark">
                  <span className={style.name_part1}>Crocopark</span>
                  &nbsp;
                  <span className={style.name_part2}>Agadir Marocco</span>
                </Link>
              </h1>
              <menu className={style.menu}>
                <Link className={style.menu_link} to="/crocopark/attractions">Attractions</Link>
                &nbsp;
                <Link className={style.menu_link} to="/crocopark/tickets">Tickets</Link>
                &nbsp;
                <Link className={style.menu_link} to="/crocopark/contact">Contact</Link>
              </menu>
            </section>
          </header>
          
          <hr className={style.hr} />


          <main>
          <Outlet></Outlet>
          </main>

          
          
          <footer className={style.footer}>
            <hr className={style.hr} />
            <p>©2025©</p>
          </footer>
        </section>
      </section>
    </>
  )
}

export default page_crocopark_body;