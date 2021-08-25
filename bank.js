document.getElementById('deposit-btn').addEventListener('click' , function(){
    const depositInput = document.getElementById("deposit-input");
    const depositDisplay = document.getElementById('deposit-display');

    const balanceDisplay = document.getElementById('balance-display');

    const depositTotal = parseFloat(depositInput.value) + parseFloat(depositDisplay.innerText);

    depositDisplay.innerText = depositTotal;

    balanceDisplay.innerText = parseFloat(depositInput.value) + parseFloat(balanceDisplay.innerText);

    

    depositInput.value=""; //clear input field after clicked
})


document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawDisplay = document.getElementById('withdraw-display');

    const balanceDisplay = document.getElementById('balance-display');

    const withdrawTotal = parseFloat(withdrawInput.value) + parseFloat(withdrawDisplay.innerText);

    withdrawDisplay.innerText = withdrawTotal;

    balanceDisplay.innerText =  parseFloat(balanceDisplay.innerText) - parseFloat(withdrawInput.value);

    withdrawInput.value=""; //clear input field after clicked
    
})


