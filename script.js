function id(id){
    return document.getElementById(id);
}

// heart count
let heartIcon = document.getElementsByClassName("fa-heart");
for(const heart of heartIcon){
    heart.addEventListener("click", function(){
        let count = parseInt(id('heart-count').innerText);
        count++;
        id('heart-count').innerText=count;
    })
}


// call function and alert messege
let calling = document.getElementsByClassName("call-btn");
for(const call of calling){
    call.addEventListener("click", function(){
        let amount = parseInt(id('coin').innerText);
        console.log(amount);
        if(amount-20<0){
            alert("Insufficient Balance, Recharge at least 20 to call...");
        }else{
            id('coin').innerText=amount-20;
            const name = call.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
            const hotLineNo = call.parentNode.parentNode.childNodes[1].childNodes[5].innerText;
            alert(`Calling ${name} ${hotLineNo} ...`);
        }
        
    })
}