// import style from './page_testing.module.css'
const page_testing = () => {
  const EndPoint1 = async () => {
    try
    {
      const response = await fetch('http://localhost:3000/');

      // const returnData = await response.json();
      const returnData = await response.text();
      alert('EndPoint1: ' + returnData);
    }
    catch (error)
    {
      console.error('Error in EndPoint1:', error);
    }
  }

  const EndPoint2 = async () => {
    try
    {
      const response = await fetch('http://localhost:3000/get_test');

      // const returnData = await response.json();
      const returnData = await response.text();
      alert('EndPoint2: ' + returnData);
    }
    catch (error)
    {
      console.error('Error in EndPoint2:', error);
    }
  }

  const EndPoint3 = async () => {
    try
    {
      const response = await fetch('http://localhost:3000/post_test', {method: 'POST'});

      // const returnData = await response.json();
      const returnData = await response.text();
      alert('EndPoint3: ' + returnData);
    }
    catch (error)
    {
      console.error('Error in EndPoint3:', error);
    }
  }

  const EndPoint4 = async () => {
    try
    {
      const response = await fetch('http://localhost:3000/receive_and_return_test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Hello from EndPoint4' }),
      });

      // const returnData = await response.json();
      const returnData = await response.text();
      alert('EndPoint4: ' + returnData);
    }
    catch (error)
    {
      console.error('Error in EndPoint4:', error);
    }
  }

  return (
    <>
        Sebastian

        <button onClick={EndPoint1}>Test 1</button>
        <button onClick={EndPoint2}>Test 2</button>
        <button onClick={EndPoint3}>Test 3</button>
        <button onClick={EndPoint4}>Test 4</button>
    </>
  )
};

export default page_testing;