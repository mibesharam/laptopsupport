function UpdateCurrentYearOnFooter(){
    $("#currYear").html( new Date().getFullYear() )
}

// function showSpinner(){
//     const spinner = document.getElementById("spinner-wrapper");
//     spinner.style.visibility = "visible";
// }

function hideSpinner(){
    const spinner = document.getElementById("spinner-wrapper");
    spinner.style.visibility = "hidden";
}
hideSpinner(); 

window.onload = function(e){
    UpdateCurrentYearOnFooter();
    
}
