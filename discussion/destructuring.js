function useState(){
    var value = 25;
    var setValue = ()=>{

    }
    return []
}

//traditional function - named traditional function
function someName9(){

}
// 
const  someName9_2 = () => {

}

()=>{
    
}
//block scope - const and let - cannot accessed outside of block(if,while,switch,for) but var can be accessed
//function scope - const , let and var - cannot accessed outside of function 
//module scope
//global scope

function add(){
    var a=1;
    let b=1;
    console.log(a+b);
}

if(true){
    let m =2;
}

console.log(m)