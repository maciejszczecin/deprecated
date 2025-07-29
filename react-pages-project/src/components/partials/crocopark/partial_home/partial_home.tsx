import style from './partial_home.module.css'

function partial_home() {
  return (
    <>
      <title>Crocopark | Home</title>
      <section>
        <h2 className={style.section_title}>About us</h2>
        <hr />
        <article>
          <p>Crocoparc Agadir is a unique zoological park located in Drarga, on the outskirts of Agadir, Morocco, along National Highway 8 toward Marrakech. Opened in May 2015, it is the first crocodile park in Morocco, housing 325 Nile crocodiles (Crocodylus niloticus) within a 4-hectare botanical garden. The park also features other animals, including giant tortoises, green iguanas, giant pythons, anacondas, and marmosets. Its lush, forest-like design includes diverse plants from around the world, educational exhibits, and conservation efforts focused on the Nile crocodile, a species once native to southern Morocco until the 1950s. </p>
          <p>Visitors can enjoy self-guided tours, crocodile feeding sessions (at 12 PM, 3 PM, and 5 PM), a cactus garden, children’s play areas, and a restaurant offering affordable meals like paninis and milkshakes. A new attraction, introduced in July 2025, is Morocco’s first zipline over crocodile enclosures, adding an adventurous element. The park is open daily, with seasonal hours, and is accessible by car, taxi, or public bus (ALSA lines 5 or 9). Admission is approximately 90 MAD (around 10 EUR), with tickets available at the gate or online. It’s a family-friendly destination, praised for its clean facilities, knowledgeable staff, and engaging activities like face painting and henna tattoos.</p>
        </article>
      </section>
    </>
  )
}

export default partial_home;