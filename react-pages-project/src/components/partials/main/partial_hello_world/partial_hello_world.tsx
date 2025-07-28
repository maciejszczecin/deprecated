import style from './partial_hello_world.module.css'

function partial_hello_world() {
  return (
    <>
      <title>Hello World</title>
      
        <main className={style.main}>
          <h1 className={style.h1}>
              Hello World
          </h1>
        </main>
    </>
  )
}

export default partial_hello_world;