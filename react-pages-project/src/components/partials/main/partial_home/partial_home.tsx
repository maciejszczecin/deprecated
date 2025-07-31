import { Link } from 'react-router-dom';
import style from './partial_home.module.css'

function partial_home() {
  return (
    <>
      <title>Home Page</title>
      <link rel="icon" type="image/svg+xml" href="./vite.svg" />
      
      <main className={style.main}>
        <h1 style={{ margin: 0}}>Welcome to the Home Page</h1>
        <menu style={{margin: 0}}>
          Pages Available:
          <ul>
            <li className={`${style.li} ${style.link}`}><Link className={style.link} to="helloworld">Hello World Page</Link></li>
            <li className={`${style.li} ${style.link}`}><Link className={style.link} to="crocopark">CrocoPark Page</Link></li>
            <li className={`${style.li} ${style.link}`}><Link className={style.link} to="page_testing">Test Page 1 for ExpressJS</Link></li>
            <li className={`${style.li} ${style.link}`}><Link className={style.link} to="redux_persist">Redux  Persist Test</Link></li>
          </ul>
        </menu>
      </main>
    </>
  )
}

export default partial_home;