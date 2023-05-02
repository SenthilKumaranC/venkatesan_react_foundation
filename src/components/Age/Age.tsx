import { useCallback, useMemo, useState } from "react";

const Age = () => {
  //int age = 25;
  //age = age +1;
  //setter and getter

  console.log("rendering");

  const [age, setAge] = useState(25); //25 will be stored in the local closure variable inside the hook

  const incrementAge = useCallback(() => {
    //Directly we cannot modify the age variable. We have to use set funciton to trigger rendering
    //setAge(age + 1);
    setAge((prevAge)=>prevAge+1)
  }, []);

  /* const incrementAge = () => {
    //age=age+1;

    setAge(age + 1);
  }; */

  const decrementAge = useCallback(() => {
    //Directly we cannot modify the age variable. We have to use set funciton to trigger rendering
    //setAge(age - 1);
    setAge((prevAge)=>prevAge-1)
  }, []);

  /* const decrementAge = () => {
    setAge(age - 1);
  }; */

  const buttons = useMemo(() => {
    console.log("use memo triggered cache resetting")
    return (
      <>
        <button onClick={incrementAge}>Increment Age</button>
        <button onClick={decrementAge}>Decrement Age</button>
      </>
    );
  }, [decrementAge, incrementAge]);

  return (
    <div className="App">
      {age}
      {buttons}
    </div>
  );
};

export default Age;
