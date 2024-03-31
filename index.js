const output = document.querySelector(".output");
let scrollEventCounter = 0;
let debaunsTimeOut 

const debauns =(func,delay)=>{
clearTimeout(debaunsTimeOut)
debaunsTimeOut = setTimeout(func,delay)
}
const handleScroll = ()=>{
    scrollEventCounter += 1;
    output.textContent = scrollEventCounter;
}
document.addEventListener("scroll", () => {
    debauns(handleScroll,500)
});