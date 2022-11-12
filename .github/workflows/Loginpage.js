// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(() => {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     return firebase.auth().signInWithEmailAndPassword(email, password);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     window.alert("Error : " + errorMessage);
//   });

firebase.auth.Auth.Persistence.SESSION;


function login() {
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;
  const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // console.log(user.email);
    // console.log(user.uid);
    window.location.href = "Homepage.html";
  }
});





function googlesignin(){    //Google Sign In
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    window.alert(errorMessage);
  });
}


function reset() {    //Forget Password

  var emailAddress = document.getElementById("email").value;

  firebase.auth().sendPasswordResetEmail(emailAddress).then(function () {
    window.alert("Password Reset Email has been sent");// Email sent.
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);// An error happened.
  });
}

function forgotpass(){
    const email = document.getElementById("Email").value;
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("Reset link sent to your mail  ")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

