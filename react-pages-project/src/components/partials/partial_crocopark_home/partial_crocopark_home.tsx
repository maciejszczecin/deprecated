import { Link } from 'react-router-dom';
import style from './partial_crocopark_home.module.css'

function partial_crocopark_home() {
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
                <Link to="/crocopark/home" className={style.park_name}>
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

            <p className={style.about_text}>
              Crocoparc Agadir, nestled in the suburban town of Drarga, Morocco, approximately 14 km from Agadir along National Route 8 toward Marrakech, is a distinctive zoological and botanical attraction that opened its gates in May 2015. As Morocco’s first dedicated crocodile park, it spans 4 hectares and is home to over 325 Nile crocodiles (Crocodylus niloticus), a species once native to southern Morocco until the 1950s. Founded by Luc Fougeirol, a seasoned reptile expert with experience establishing similar parks in Europe and Tunisia, Crocoparc combines wildlife conservation with an immersive visitor experience, set within a vibrant botanical garden filled with exotic flora like jasmine, gardenias, cacti, and water features such as cascades and ponds.The park offers a 600-meter self-guided trail equipped with clear signage, educational panels, and unique underground glass viewing areas for close-up crocodile observation. Beyond its star reptiles, Crocoparc features a diverse array of animals, including giant tortoises, green iguanas, pythons, anacondas, marmosets, and a frog habitat. A major draw is the daily crocodile feeding session at noon, showcasing the predators’ raw power, while a 2025 addition—a thrilling zipline over the crocodile enclosures—adds an adventurous twist, safely blending adrenaline with wildlife viewing. Family-friendly amenities include a cactus garden, children’s play areas, a restaurant with affordable dining, a souvenir shop, and activities like henna zones and kids’ workshops (e.g., origami and puzzles). Committed to conservation, the park supports scientific research through its crocodile nursery and incubation lab, emphasizing the protection of the Nile crocodile, a species under threat.
            </p>
          </section>
        </section>
      </main>
    </>
  )
}

export default partial_crocopark_home;