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


// call functionality, alert messege & call history
let calling = document.getElementsByClassName("call-btn");
for(const call of calling){

    // added to call history
    call.addEventListener("click", function(){
        // console.log(call.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[7])

        const serviceName = call.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
        const hotLineNo = call.parentNode.parentNode.childNodes[1].childNodes[5].innerText;

        let temp = document.createElement('div');
        temp.innerHTML =   `
            <div class="flex justify-between p-3 items-center bg-gray-100 rounded-xl mx-3 mb-1">
                <div>
                    <h1 class="font-bold text-sm">${serviceName}</h1>
                    <p class="text-sm">${hotLineNo}</p>
                </div>
                <div>${new Date().toLocaleTimeString()}</div>
            </div>
        `

        let amount = parseInt(id('coin').innerText);
        if(amount>0){
            call.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[7].appendChild(temp);
        }
        
    })


    // call alert event
    call.addEventListener("click", function(){
        let amount = parseInt(id('coin').innerText);
        // console.log(amount);
        if(amount-20<0){
            alert("Insufficient Balance, Recharge at least 20 to call...");
        }else{
            id('coin').innerText=amount-20;
            const serviceName = call.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
            const hotLineNo = call.parentNode.parentNode.childNodes[1].childNodes[5].innerText;
            alert(`Calling ${serviceName} ${hotLineNo} ...`);
        }
        
    }) 
}


// clear history
id("clear-history-btn").addEventListener("click", function(){
    id("call-history").innerHTML = " ";
})


// copy functionality
let copyBtn = document.getElementsByClassName('copy-btn');
for(const copy of copyBtn){
    copy.addEventListener('click',function(){
                
        let ans = parseInt(id('copy-no').innerText);
        ans++;
        id('copy-no').innerText=ans;
        ans = copy.parentNode.parentNode.childNodes[1].childNodes[5].innerText;
        navigator.clipboard.writeText(ans);
        alert(`Number copied ${ans}`);
    })
}