output = document.querySelector("#output");

const a=5;
function add(){
    const b=5;
    return addmore = () =>{
        const c=b+a;
        console.log(c);
        output.textContent = c;
    }
}
console.log(a);
add()();