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

const mobileQuery = window.matchMedia("(max-width: 600px)");
const tabletQuery = window.matchMedia("(min-width: 601px) and (max-width: 1024px)");
const desktopQuery = window.matchMedia("(min-width: 1025px)");


function handleScreenChange(e) {
     if (e.matches) { 
        // If media query matches 
    if (e.media.includes('max-width: 600px' || 'max-width: 850px' )) 
        { 
        console.log("Mobile action triggered");
        
        // !to hide the container elements when we click on menu(tickbox)
document.getElementById('hideCheckbox').addEventListener('change', function() {
    document.querySelectorAll('.container').forEach(function(element) {
        element.style.display = this.checked ? 'none' : 'block';
    }, this),
    // !to hide the container elements when we click on menu(tickbox)
    document.querySelectorAll('.connect').forEach(function(element) {
        element.style.display = this.checked ? 'none' : 'block';
    }, this);
});
        }
    }
}



mobileQuery.addListener(handleScreenChange); 
tabletQuery.addListener(handleScreenChange); 
desktopQuery.addListener(handleScreenChange);

handleScreenChange(mobileQuery); handleScreenChange(tabletQuery); handleScreenChange(desktopQuery);