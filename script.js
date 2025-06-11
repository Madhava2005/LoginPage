
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  alert(`Attempting login with:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
});


function loginWithGoogle() {
  alert('Redirecting to Google login...');
  
}

function loginWithFacebook() {
  alert('Redirecting to Facebook login...');
 
}

function loginWithGitHub() {
  alert('Redirecting to GitHub login...');
  
}
