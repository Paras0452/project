
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

  } else {
    window.location.href = "Loginpage.html";
    // No user is signed in.
  }
});

function logout() {
  firebase.auth().signOut().catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}
