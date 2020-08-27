const form = document.getElementById('form');
const username = document.getElementById('username');
const mail = document.getElementById('mail'); //get username input
const password = document.getElementById('lock');
const password2 = document.getElementById('lock2');








form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    //get the values from the input
    const usernameValue = username.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorfor(username, 'Username cannot be empty');
    }else if(usernameValue.length < 5){
        setErrorfor(username, 'Username should be at least 5 characters');
    } else {
        // add success class
        setSuccessfor(username);
    };
    
    
    if (mailValue === ''){
        setErrorfor(mail, ' email cannot be empty');
  //  } //else if(!isEmail(mailValue)){
        //setErrorfor(mail, 'Email is not valid');
    } else{
        setSuccessfor(mail);
    };

    if(passwordValue === '' ){
        setErrorfor(lock, 'Put in a password');
    }else if(passwordValue.length < 8){
        setErrorfor(lock, 'Password should be at least 8 characters')
    }else {
        setSuccessfor(lock);
    };

    if(password2Value === ''){
      setErrorfor(lock2, 'Password cannot be blank');
    } else if (passwordValue !== password2Value){
        setErrorfor(lock2, 'Passwords does not match')
    }else{
        setSuccessfor(lock2);
    }

    //show a pop up sucess message
}
function minLength(){
    const minUser = document.getElementById('username').value;
    const minpwd = document.getElementById('lock').value;
    const smallMsg = formControl.querySelector('small');
      
    if(minUser.length < 5){
        smallMsg.innerText = message;
    }else{
        smallMsg ='';
    };

    if (minpwd.length < 8){
        smallMsg.innerText = message;
    }else{
        smallMsg = '';dfghj
    }

};
    

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



/*
(function (){
    var form = document.getElementById('submit');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        var elements = this.elements;
        var username = elements.mail.value;
        var msg      = 'Welcome ' + username;
        document.getElementById('main').textContent = msg;
    })
})
*/

 



/*
function checkMail(minLength){  //declaring the function to check the number of the email address given
 if (elMailer.value.length < minLength ){
     elMsg.textContent ='Input a valid email address with' + minLength + ' characters or more';
 } else{
     elMsg.textContent = '';
 }
}
if (elMailer.addEventListener){
    elMailer.addEventListener('blur', function() {
    checkMail(6);
}, false );

} else {
    elMailer.attachEvent('onblur', function() {
        checkMail(6);
    });
}





function tipUsername(){
    elMsg.className ='tip';
    elMsg.innerHTML ='Email must be complete';
}
elMailer.addEventListener('focus', tipUsername, false);
*/




/*THis is an IIFE to show password*/
/*
( function() {
    var pwd = document.getElementById('lock');
    var chk = document.getElementById('showPwd');

    addEvent(chk, 'change', function(e){               //when user clicks on checkbox
        var target = e.target || e.srcElement;      //get that element
        try {
            if (target.checked){
                pwd.type = 'text';
            } else{
                pwd.type = 'password';
            }
            } catch(error){
                alert('This browser cannot switch type');
        }
    });

}())*/


/*THis is an IIFE to show password*/
/*
( function() {
    var pwd = document.getElementById('lock');
    var chk = document.getElementById('showPwd');

    chk.addEventListener('change', function(e){               //when user clicks on checkbox
        var target = e.target || e.srcElement;      //get that element
        try {
            if (target.checked){
                pwd.type = 'text';
            } else{
                pwd.type = 'password';
            }
            } catch(error){
                alert('This browser cannot switch type');
        }
    });

}());*/




/* THis is an IIFE for the sign in button*/

/*
( function() {
    var form = document.getElementById('newPwd');
    var password = document.getElementById('lock');
    var submit = document.getElementById('submit');

    var submitted = false;                                     //has form been submitted?

    submit.disabled = true;                                    //Disable submit button

    submit.className = 'disabled';                             // style submit button
    
    password.addEventListener('change', function(e){
        var target = e.target || e.srcElement;
        submit.disabled = submitted || !target.value;

        //if form has been submitted or pwd has no vallue set CSS to disabled
        submit.className = (!target.value | submitted) ? 'disabled' : 'enabled';
    });

    //on submit: Disable the form so it cannot be submitted again

    form.addEventListener ('submit', function(e){
        if (submit.disabled || submitted) {
            e.preventDefault();
            return;
        }
        submit.disabled = true;
        submitted = true;
        submit.className = 'disabled';

        //Demo purposes only: what would have been & show submit is disabled
        e.preventDefault();
        alert ('password is ' + password.value);
    });
    
}());

*/