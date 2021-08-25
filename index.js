document.getElementById('submit-btn').addEventListener('click', function(){
    inputEmail = document.getElementById('user-email').value; //getting user typed email
    
    inputPass = document.getElementById('user-pass').value; //geting user typed password
    
    if(inputEmail== "tahim" && inputPass == "secret"){
        window.location.href = "bank.html"
    }

})