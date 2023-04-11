function state(){
    //variable
    let value = 25;
    const setValue = ()=>{

    }
    return {v:value,f:setValue}
}

const {v,f} = state();

console.log(v);

