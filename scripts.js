/* Add your JavaScript to this file */

//Expression to check [char*]@[1<char*<24].[char=3]
let regex = /[a-z A-Z 0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[@]{1}[a-z A-Z 0-9 - .]{1,24}[.]+[a-z A-Z]{3,3}/i;

//Function to run email check on input field
function verifyEmail(){
  //Get doc info
  let inputField = document.getElementById("email");
  let email = inputField.value;
  let responseDiv = document.getElementsByClassName("message")[0];
  console.log("Email Verification Started");
  console.log(email);

  //If regex check passes print out info else pass back invalid email
  if(regex.test(email)){
    console.log("Email Exists");
    responseDiv.innerHTML = `<p>Thank you! Your email address ${email} has been added to our mailing list!</p>`
    return false;
  }
  inputField.value = "Please enter a valid email";
  console.log("Email does not exist");
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  //Editing HTML
  document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerHTML = `<p>Copyright 2020, Kieran Jaggernauth</p><p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>`;
  document.getElementsByClassName("cta")[0].getElementsByTagName("a")[0].innerHTML = "LEARN MORE";

  //Attaching function to button
  let subButton =  document.getElementsByClassName("btn")[1];
  //Returning false prevents button from refreshing the webpage. If true the request is sent
  subButton.setAttribute("onclick","return verifyEmail()");
});
