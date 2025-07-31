import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './../../../counterSlice';

function state_persistence()
{
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

    const [count_2, setCount_2] = useState<number>(0);

    const count_3 = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();

    return(
        <>
            <title>State Persistence Test</title>

            <header>
                <h1 style={{textAlign : "center"}}>State Persistence Test</h1>
            </header>

            <hr />

            <main>
                <h2 style={{textAlign : "center"}}>No State Persistence</h2>
                <h5 style={{textAlign : "center" , width : 100 + "%"}}>Counter 2 : {count_2}</h5>
                <section style={{display : 'flex' , flexDirection : "row"  , justifyContent : "center"  , alignItems : "center" , gap : 1 + "rem"}}>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => setCount_2(count_2 + 1)}>+1</button>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => setCount_2(count_2 - 1)}>-1</button>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => setCount_2(count_2 - count_2)}>Reset</button>
                </section>

                <hr />

                <h2 style={{textAlign : "center"}}>Basic State Persistence</h2>
                <h5 style={{textAlign : "center" , width : 100 + "%"}}>Counter 1 : {count_1}</h5>
                <section style={{display : 'flex' , flexDirection : "row"  , justifyContent : "center"  , alignItems : "center" , gap : 1 + "rem"}}>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => setCount_1(count_1 + 1)}>+1</button>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => setCount_1(count_1 - 1)}>-1</button>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => setCount_1(count_1 - count_1)}>Reset</button>
                </section>

                <hr />
                
                <h2 style={{textAlign : "center"}}>State Persistence with Redux Persist</h2>
                <h5 style={{textAlign : "center" , width : 100 + "%"}}>Counter 3 : {count_3}</h5>
                <section style={{display : 'flex' , flexDirection : "row"  , justifyContent : "center"  , alignItems : "center" , gap : 1 + "rem"}}>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => dispatch(increment())}>+1</button>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => dispatch(decrement())}>-1</button>
                    <button style={{ width : 25 + "%" , height : 4 + "rem"}} onClick={() => dispatch(reset())}>Reset</button>
                </section>
            </main>

            <hr />
        </>
    )
}
export default state_persistence;