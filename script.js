const billAmount = document.querySelector(".input-bill-amount");
const cashReceived = document.querySelector(".input-payment-amount");
const btnCount = document.querySelector(".btn-count");




const countNotes = () =>{
    if(billAmount.value > cashReceived.value)
        alert("Cash not sufficient");
    else{
        // let arr = [0,0,0,0,0,0,0,0,0];
        let balance = cashReceived.value - billAmount.value;
        // if(balance/2000 > 0){
        //     arr[0] = Math.floor(balance/2000);
        //     balance = balance - arr[0] * 000;
        // }
        // if(balance/500 > 0){
        //     arr[1] = Math.floor(balance/500);
        //     balance = balance - arr[1] * 500;
        // }
        // console.log(balance);
        // console.log(arr);

        let arrInitial = [2000,500,100,50,20,10,5,2,1];
        let arrFinal = arrInitial.map((note)=>{
            if(balance === 0){
                return 0;
            }
            else if(balance / note > 0){
                let number = Math.floor(balance/note);
                balance = balance - note*number;
                return number;
            }
        })

        console.log(arrFinal);
        console.log(balance);

        }
}


btnCount.addEventListener('click',countNotes)
