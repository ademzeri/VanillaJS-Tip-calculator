let bill = document.querySelector(".bill-ammount-container input");
let x=0;
let tips= document.querySelectorAll(".tips button");

let tipAmmount = document.querySelector(".tip-amount p");
let totalAmmount = document.querySelector(".total p");
let resetBtn = document.querySelector(".reset-btn button");
console.log(totalAmmount)
//tip



tips.forEach((tip)=>{
    tip.addEventListener("click",()=>{
        if(x>0){
            let actives = document.querySelectorAll(".active")
            actives.forEach((active)=>{
                active.classList.remove("active");
            })
        }
        x++;
        tip.classList.add("active");
        if(bill.value=="" || numberOfPeople.value=="0" || numberOfPeople==""){
            return;
        }
        let totalPerson = Number(Number(Number(bill.value)+(Number(bill.value))*Number(tip.value)).toFixed(2))/Number(numberOfPeople.value);
        totalAmmount.innerHTML= totalPerson+ " $";
        tipAmmount.innerText =  (Number(bill.value)*Number(tip.value))/Number(numberOfPeople.value) +" $";
    })
})

let numberOfPeople = document.querySelector(".number-of-people-container input");


