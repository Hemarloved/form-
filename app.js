const form = document.getElementById('form');
const username = document.getElementById('username');
const mail = document.getElementById('mail'); //get username input
const password = document.getElementById('lock');
const password2 = document.getElementById('lock2');
const usernameValue = username.value.trim();
const mailValue = mail.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
var uminLength = 5;
var nmsg = 'welcome ' + usernameValue;
login =document.getElementById('login');
document.forms

 
//form.addEventListener('submit', validate, false);

//login.addEventListener('click', signupAlert);

function signupAlert(){
    alert('form sucessefully signed up')
}


/*form.addEventListener('submit', (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();
    request.open('post', index.php);
    request.onload =function() {
        console.log(request.responseText);
    }
    request.send(new FormData(form));
});*/



username.addEventListener('submit', userverify );
mail.addEventListener('submit',  userverify);
lock.addEventListener('submit', userverify);
lock2.addEventListener('submit', userverify);


function validate(){
    //const usernameValue = username.value.trim();
    //show error
    //add error class
    
    if(username.value === '' ){

    setErrorfor(username, 'Username cannot be empty');
}else if(username.value < uminLength){
    setErrorfor(username, 'Username should be at least 5 characters');
} else {
    // add success class
    setSuccessfor(username);
}

if (mail.value === ''){
    
    setErrorfor(mail, ' email cannot be empty');
//} else if(!isEmail(mail)){
   // setErrorfor(mail, 'Email is not valid');
} else{
    setSuccessfor(mail);
}


if(lock.value === '' ){
    
    setErrorfor(lock, 'Put in a password');
}else if(lock.value.length < 8){
    setErrorfor(lock, 'Password should be at least 8 characters')
}else {
    setSuccessfor(lock);
}


if(lock2.value === ''){

  setErrorfor(lock2, 'Password cannot be blank');
} else if (lock.value !== lock2.value){
    setErrorfor(lock2, 'Passwords does not match')
}else{
    setSuccessfor(lock2);
}
//alert('form successful')
return false;
/*username.focus();
mail.focus();
lock.focus();
lock2.focus();
*/

};

function userverify(){
    if(usernameValue.value != ''&& usernameValue.length > uminLength){
        // add success class
        setSuccessfor(username);
    }
    
    if (mail.value != ''){
        setSuccessfor(mail);
    } 

    if(lock.value !='' && lock.value.length > 8){
        setSuccessfor(lock);
    }

    if(lock2.value != '' && lock.value == lock2.value){
          setSuccessfor(lock2);
      }
       
    return true;
}








// function reValidate(){
//     if (validate == true){
//         console.log('e don happen');
//     }
// else{
//     console.log('shake body');
// }
// }



function setErrorfor(input, message){
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className ='form-control error';
}
function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success';
}
function isEmail(mail){
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(mail);
}
/*This is an immmediately invoked function to reveal passwords*/
( function() {
    var pwd = document.getElementById('lock');
    var pwd2 = document.getElementById('lock2');
    var chk = document.getElementById('showPwd');

    chk.addEventListener('change', function(e){               //when user clicks on checkbox
        var target = e.target || e.srcElement;      //get that element
        try {
            if (target.checked){
                pwd.type = 'text';
                pwd2.type = 'text';
            } else{
                pwd.type = 'password';
                pwd2.type = 'password';
            }
            } catch(error){
                alert('This browser cannot switch type');
        }
    });

}());



