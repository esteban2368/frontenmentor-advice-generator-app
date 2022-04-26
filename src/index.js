import "./scss/main.scss";

let response,
    data;
const idTxt = document.querySelector("#idTxt");
const adviceTxt = document.querySelector("#adviceTxt");
//Events
window.addEventListener("load", (event) =>{
    drawLoader();
    const buttonNewAdvice = document.querySelector(".button");
    buttonNewAdvice.addEventListener("click", (event) =>{
        drawLoader();
        loadAdvice();
    })

    loadAdvice();
})

//Function async

const loadAdvice = async() =>{
    try{
        response = await fetch('https://api.adviceslip.com/advice');
        if(response.status === 200){
            data = await response.json();
            drawAdvice(data.slip.id, data.slip.advice);
        }
    } catch(e){
        console.log(e);
    }
}

//Function draw advice
const drawAdvice = (id,advice) =>{
    idTxt.textContent = id;
    adviceTxt.innerHTML = `<q>${advice}</q>`;
}

const drawLoader = () =>{

    adviceTxt.innerHTML = '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
}


