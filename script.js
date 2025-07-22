const form = document.getElementById("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passError")
const confirmError = document.getElementById("confirmError")

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  nameError.textContent = ''
  emailError.textContent = ''
  passwordError.textContent = ''
  confirmError.textContent = ''

  let isValid = true;

  if(name.value.trim().length < 3){
    nameError.textContent =  "Name must be at least 3 characters."
    isValid = false;
  }
  if(!email.value.includes("@")){
    emailError.textContent = `${name.value} , please enter a valid Email Address`
    isValid = false;
  }
  if(!passwordRegex.test(password.value)){
    passwordError.textContent = `Password must includes atleast one Symbol , number ,uppercase and lowercase characters`
    isValid = false;
  }
  if(password.value !== confirmPassword.value){
    confirmError.textContent = `Password is not matching...`
    isValid= false;
  }

  if(isValid){
    const userData = {
      name : name.value,
      email:email.value,
      password: password.value
    }
    localStorage.setItem("userDetails",JSON.stringify(userData));
    document.getElementById("formContainer").innerHTML=`
     <h2>🎉 Registration Successful!</h2>
      <p class="success-msg">Thank you, <strong>${userData.name}</strong>. Your details have been saved.</p>
    `
    
  }
})
