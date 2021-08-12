const billAmount = document.querySelector(".input-bill-amount");
const cashReceived = document.querySelector(".input-payment-amount");
const btnCount = document.querySelector(".btn-count");




const countNotes = () =>{
    let arrFinal;
    if(billAmount.value > cashReceived.value)
        alert("Cash not sufficient");
    else{
        let balance = cashReceived.value - billAmount.value;
        let arrInitial = [2000,500,100,50,20,10,5,2,1];
        arrFinal = arrInitial.map((note)=>{
            if(balance === 0){
                return 0;
            }
            else if(balance / note > 0){
                let number = Math.floor(balance/note);
                balance = balance - note*number;
                return number;
            }
        })

        arrFinal.forEach((number,index)=>{
            let noteString = ".td-note-"+index;
            let noteCountText = document.querySelector(noteString);
            noteCountText.textContent = number;
            console.log(noteCountText)
        });
        }

       
}


btnCount.addEventListener('click',countNotes)
