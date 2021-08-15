// Variables, querying the HTML DOM elements

const billAmount = document.querySelector(".input-bill-amount");
const cashReceived = document.querySelector(".input-payment-amount");
const btnCount = document.querySelector(".btn-count");
const btnNext = document.querySelector(".btn-next");
const paymentBlock = document.querySelector(".div-payment");
const changeBlock = document.querySelector(".div-change");
const remarks = document.querySelector(".span-remark");
const tableDiv = document.querySelector(".div-table");
const imgDishes = document.querySelector(".img-dishes");

/**Function to count the number of notes to be returned
   and to print the same on the change table*/

const nextCashDiv = ()=>{
    if(billAmount.value == 0)
        alert("No bill amount entered");
    else{
        btnNext.style.display = "none";
        paymentBlock.style.display = "block";
    }
    
}   


const countNotes = () =>{
    let arrFinal;
    if(billAmount.value < 0 || cashReceived.value < 0){
        remarks.style.display = "block";
        tableDiv.style.display = "none";
        changeBlock.style.display = "block";
        imgDishes.style.display = "none";
        remarks.textContent = "ENTER A VALID AMOUNT";
    }
   else if(Number(billAmount.value) > Number(cashReceived.value)){
        // console.log(billAmount.value +""+ cashReceived.value);
        // console.log(Number(billAmount.value) > Number(cashReceived.value));
        // alert("Cash not sufficient");
        remarks.style.display = "block";
        tableDiv.style.display = "none";
        changeBlock.style.display = "block";
        remarks.textContent = "CASH NOT SUFFICIENT";
        imgDishes.style.display = "block";
        
    }
    else if(billAmount.value == cashReceived.value){
        remarks.style.display = "block";
        tableDiv.style.display = "none";
        changeBlock.style.display = "block";
        imgDishes.style.display = "none";
        remarks.textContent = "NO CHANGE TO RETURN";
    }   
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
            // console.log(noteCountText)
        });
        changeBlock.style.display = "block";
        tableDiv.style.display = "block";
        remarks.style.display = "none";
        imgDishes.style.display = "none";
        } 
}


btnCount.addEventListener('click',countNotes);
btnNext.addEventListener('click',nextCashDiv);

