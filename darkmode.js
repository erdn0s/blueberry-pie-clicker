let themeSwitch = document.getElementById("themeSwitch");
let darkmode = localStorage.getItem("darkmode");
   let pieType = document.getElementById("mainClickerIMG")

   
function activeDarkmode ()
{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active")
    pieType.src="bluberry pie.webp"
}

function disableDarkmode ()
{
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null)
     pieType.src="cherry pie.png"
}

if (darkmode === "active") {activeDarkmode();}

function switchThemes ()
{
    darkmode = localStorage.getItem("darkmode");
    if(darkmode !== "active") {activeDarkmode()} 
    else {disableDarkmode()}

  
}