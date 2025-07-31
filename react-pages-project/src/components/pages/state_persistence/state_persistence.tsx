// import style from './redux_persists.module.css'
import { useState, useEffect } from 'react';

function state_persistence()
{
    const [count_2, setCount_2] = useState<number>(0);

    const [count_1, setCount_1] = useState<number>(() => {
        const storedValue = localStorage.getItem('count_1');
        if (storedValue !== null) {
          try {
            const parsedValue = JSON.parse(storedValue);
            return typeof parsedValue === 'number' ? parsedValue : 0;
          } catch (error) {
            console.error("Error parsing localStorage 'count_1':", error);
            return 0;
          }
        }
        return 0;
    });
    useEffect(() => {localStorage.setItem('count_1', JSON.stringify(count_1));}, [count_1]);


    return(
        <>
            <title>State Persistence Test</title>

            <header>
                <h1>State Persistence Test</h1>
            </header>

            <hr />

            <main style={{display : 'flex' , flexDirection : "row"  , justifyContent : "center"  , alignItems : "center" , gap : 1 + "rem"}}>
                With State Persistence -{'>'}
                <button style={{width : 30 + "%" , height : 4 + "rem"}} onClick={() => setCount_1(count_1 + 1)}>{count_1}</button>
                
                <button style={{width : 30 + "%" , height : 4 + "rem"}} onClick={() => setCount_2(count_2 + 1)}>{count_2}</button>
                {'<'}- Without State Persistence
            </main>

            <hr />
        </>
    )
}
export default state_persistence;