import { Link, Outlet } from 'react-router-dom';
import style from './page_crocopark_body.module.css'

function page_crocopark_body() {
  return (
    <>
      <title>Crocopark</title>
      {/* <link rel="icon" type="image/png" href="./logo_256x256.png" /> */}
      {/* <link rel="icon" type="image/png" href="./../../../../public/logo_256x256.png" /> */}

      <section className={style.main}>
        <section className={style.main_box}>
          <header className={style.header}>
            <img className={style.logo} src="./logo_256x256.png" alt="logo" />
            <section className={style.right_header_section}>
              <h1>
                <Link className={style.park_name} to="/crocopark">
                  <span className={style.name_part1}>Crocopark</span>
                  &nbsp;
                  <span className={style.name_part2}>Agadir Marocco</span>
                </Link>
              </h1>
              <menu>
                <Link to="/crocopark/attractions">Attractions</Link>
                <Link to="/crocopark/tickets">Tickets</Link>
                <Link to="/crocopark/contact">Contact</Link>
              </menu>
            </section>
          </header>
          
          <main>
          <Outlet></Outlet>
          </main>

          <footer className={style.footer}>
            <p>©2025©</p>
          </footer>
        </section>
      </section>
    </>
  )
}

export default page_crocopark_body;