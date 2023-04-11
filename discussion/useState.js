function state(){
    //variable
    let value = 25;
    const setValue = ()=>{

    }
    return [value,setValue]
}

const [age,setAge] = state();

console.log(setAge);

