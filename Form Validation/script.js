const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs() {
    const usenameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usenameVal === '') {
        success = false;
        setError(username,'Username is required')
    }
    else {
        setSuccess(username)
    }

    if(emailVal==='') {
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false
        setError(email,'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }

    if(passwordVal==='') {
        success = false
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false
        setError(password,'Password must be 8 characters long')
    }
    else {
        setSuccess(password)
    }

    if(cpasswordVal==='') {
        success = false
        setError(cpassword,'Confirm password is required')
    }
    else if(passwordVal!==passwordVal){
        success = false
        setError(password,'Password does not match')
    }
    else {
        setSuccess(password)
    }

    return success;
}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('sucess')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    );
};