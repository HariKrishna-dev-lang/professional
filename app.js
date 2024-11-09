let darkmode=localStorage.getItem("darkmode");
const themeSwitch=document.getElementById("theme-switch");

const enableDarkMode=()=>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}
const disableDarkMode=()=>{
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

if(darkmode === "active"){
    enableDarkMode();
}
themeSwitch.addEventListener("click",()=>{
    darkmode=localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();


});
    //same as if else statement
// todo       if condition->darkmode !== "active" ?
// *          do -> enableDarkMode()
// !          else -> disableDarkMode()


// if(darkmode !== "active"){
//     enableDarkMode();
// }else{
//     disableDarkMode();
// }
// function enableDarkMode(){
//     document.body.classList.add("dark-mode");
//     localStorage.setItem("darkmode","active");
// }
// function disableDarkMode(){
//     document.body.classList.remove("dark-mode");
//     localStorage.setItem("darkmode","inactive");
// }
