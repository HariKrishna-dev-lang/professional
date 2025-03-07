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

//this is auto typed js  
var typed=new Typed(".auto-type",{
    strings:["Programmer","Freelancer","PCDoc","Web-developer","Front-End Developer","Back-end Developer","Data Scientiest","Python Fullstack dev"],
    typeSpeed: 150,
    backSpeed: 150,
    looped:true
})

// this for change the behaviour of the check box(menu) when ever it's clicked 👇
document.getElementById('hideCheckbox').addEventListener('change', function() {
    const h4Content = document.querySelector('.auto');
    const originalContent = h4Content.dataset.original || h4Content.innerHTML;

    if (this.checked) {
        // Store original content and clear
        h4Content.dataset.original = originalContent;
        h4Content.innerHTML = '';
    } else {
        // Restore original content
        h4Content.innerHTML = originalContent;
    }
});

document.getElementById('hideCheckbox').addEventListener('change', function() {
    const elementsToHide = [
        document.querySelector('.auto'),       // The h4 content
        document.querySelector('.holder')     // The profile holder section
    ];

    elementsToHide.forEach(element => {
        if (this.checked) {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';  // or '' to revert to original
        }
    });
});

document.getElementById('hideCheckbox').addEventListener('change', function() {
    const elementsToHide = document.querySelectorAll('.auto, .holder');
    
    if (this.checked) {
        // Hide elements when checked
        elementsToHide.forEach(el => el.classList.add('hidden'));
    } else {
        // Refresh page when unchecked
        location.reload(true); // true forces reload from server
    }
});
// end 

