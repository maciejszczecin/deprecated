import { Link } from 'react-router-dom';
import style from './partial_crocopark_contact.module.css'

function partial_crocopark_contact() {
  return (
    <>
      <title>Crocopark</title>
      <link rel="icon" type="image/png" href="./../logo_256x256.png" />
      {/* <link rel="icon" type="image/png" href="./logo_256x256.png" /> */}

      <main>
        <section className={style.main_box}>
          <section className={style.crocopark_header}>
            <img src="./../logo_256x256.png" alt="logo_256x256.png" className={style.logo_style}/>
            <section className={style.right_header_section}>
              <h1>
                <Link to="/crocopark" className={style.park_name}>
                  <span className={style.name_part1}>CrocoPark</span>
                  &nbsp;
                  <span className={style.name_part2}>Agadir Marocco</span>
                </Link>
              </h1>
              <menu className={style.crocopark_menu}>
                <Link to="/crocopark/attractions_and_species" className={style.menu_link}>Attractions & Species</Link>
                <Link to="/crocopark/tickets" className={style.menu_link}>Tickets</Link>
                <Link to="/crocopark/contact" className={style.menu_link}>Contact Information</Link>
              </menu>
            </section>
          </section>


          <section>
            <h3 className={style.section_header}>About CrocoPark</h3>

            <hr />

          </section>
        </section>
      </main>
    </>
  )
}

export default partial_crocopark_contact;