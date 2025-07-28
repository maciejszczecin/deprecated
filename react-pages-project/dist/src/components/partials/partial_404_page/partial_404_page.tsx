import { Link } from 'react-router-dom';
import style from './partial_404_page.module.css';

function partial_404_page() {
  return (
    <>
      <title>404 Not Found</title>
      <link rel="icon" type="image/png" href="./256x256_red_check.png" />
      
      <main className={style.background}>
        <h1>
          404 Page Not Found
        </h1>

        <p>
          The page you are looking for does not exist. Please check the URL or return to the <Link to="/">home page</Link>.
        </p>
      </main>
    </>
  )
}

export default partial_404_page;