const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const checkboxField = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");

window.onload(){
	const savedUsername=localeStorage.getElement("username");
	const savedPassword=localeStorage.getElement("password");

	if(username&&password){
		existingButton.style.display="block";
	}	
}

loginForm.addEventListener("submit",(e)=>{
	e.preventDefault();
	const username=usernameField.value;
	const password=passwordField.value;
	const rememberMe=checkboxField.checked;

if(rememberMe){
	localeStorage.setItem("username",username);
	localeStorage.setItem("password",password);
}else{
	localeStorage.delete("username");
	localeStorage.delete("password");
}
alert(`Logged in as ${username}`);

if (!rememberMe) {
	existingButton.style.display = "none";
}	
});
existingButton.addEventListener("click", () => {
	const savedUsername = localStorage.getItem("username");
	alert(`Logged in as ${savedUsername}`);
});







