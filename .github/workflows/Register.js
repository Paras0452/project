var sign_in_btn = document.querySelector('#sign-in-btn');
var sign_up_btn = document.querySelector('#sign-up-btn');
var container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});
document.getElementById("RegisterForm").addEventListener("submit",(event)=>{
  event.preventDefault()
  })
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      window.location.href = "Homepage.html";
    }
  });
  let i =1 
  function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
       
      })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
  
          window.alert("Error : " + errorMessage);
        });
        // let newUser = firebase.database().ref().child("Users").push();
        // newUser.child("Email").set(email);
        // newUser.child("Password").set(password);

        
        let newUser = firebase.database().ref().child("Users").push();
        newUser.child("Email").set(email);
        // newUser.child("DOB").set(dob);
        newUser.child("Password").set(password);
        // newUser.child("Admin").set("False");

         
           



     
    }
  


  
  
  
