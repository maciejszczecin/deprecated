import { Link } from 'react-router-dom';
import style from './partial_home.module.css'

function partial_home() {
  return (
    <>
      <title>Home Page</title>
      <link rel="icon" type="image/svg+xml" href="./vite.svg" />
      
      <main className={style.main}>
        <h1 style={{ marginTop: 0 }}>Welcome to the Home Page</h1>
        <menu>
          Pages Available:
          <ul>
            <li><Link className={style.link} to="helloworld">Hello World</Link></li>
            <li><Link className={style.link} to="crocopark/home">CrocoPark</Link></li>
            <li><Link className={style.link} to="page_testing">Test Page</Link></li>
          </ul>
        </menu>
      </main>
    </>
  )
}

export default partial_home;