let amount = 0;
let increaseAmount = 1;

let multiplierCost = 100;

let addAuto = 0;
let autoClickerCost = 10;


let multiplierMultiAdd = 1;
let multiplierMultiply = 1;
let multiplierMultiplyCost = 100;

let autoClickerAdd = 1;
let autoClickerMultiply = 1;
let autoClickerMultiplyCost = 100;

let keepWeakSpotPosition = true;
let weakSpotBought = false;
let weakSpotCost = 1000;
let weakSpotIncrease = 1;

const multiplierMultiButton = document.getElementById("multiplierMultiButton");
const autoClickerMultiplyButton = document.getElementById("autoClickerMultiply");

const setWeakSpotPosition = document.getElementById("weakSpot");
const weakSpotButton = document.getElementById("weakSpotButton");

const mainClicker = document.getElementById("counter");
const mainButton = document.getElementById("mainClicker");
const multiplierButton = document.getElementById("multiplierButton");
const autoClickerButton = document.getElementById("autoClickerButton");
let clickPopUp = document.getElementById("clickPopUp");

let startGame = false;

function retrieveLocalData()
{
    startGame = (localStorage.getItem("gameStarted") === "true");
    weakSpotBought = (localStorage.getItem("weakSpotBought") === "true");


 amount = parseInt(localStorage.getItem("savedAmount"));
 mainClicker.textContent = amount

 increaseAmount = parseInt(localStorage.getItem("multiplier"));
     multiplierCost = Math.round(100*1.5**increaseAmount);
  multiplierButton.textContent = "multiplier level: " + increaseAmount + " cost: " + multiplierCost;

 addAuto = parseInt(localStorage.getItem("savedAutoAmount"));
    autoClickerCost = Math.round(20*1.5**(addAuto + 1));
    autoClickerButton.textContent = "auto clicker level: " + addAuto + " cost: " + autoClickerCost;

     multiplierMultiAdd =  parseInt(localStorage.getItem("multiplierMultiSave"));
          multiplierMultiplyCost = 100*(10**multiplierMultiAdd);
              multiplierMultiply = 0.5*(2**multiplierMultiAdd);
               multiplierMultiButton.textContent = "multiplier amount: " + multiplierMultiply + " cost: " + multiplierMultiplyCost;

  autoClickerAdd = parseInt(localStorage.getItem("autoClickerMultiplyButton"))
       autoClickerMultiplyCost = 100*(10**autoClickerAdd);
           autoClickerMultiply = 0.5*(2**autoClickerAdd);
      autoClickerMultiplyButton.textContent = "auto clicker multiplier amount: " + autoClickerMultiply + " cost: " + autoClickerMultiplyCost;

            weakSpotIncrease = parseInt(localStorage.getItem("weakSpotUpgrade"));
   weakSpotCost = Math.round((1000 * 2.5**weakSpotIncrease))
                   weakSpotButton.textContent = "weak spot upgrade level: " + weakSpotIncrease + " cost: " + weakSpotCost;


}
retrieveLocalData();
console.log(weakSpotBought);
function reset ()
{
    setWeakSpotPosition.style.display = "none";
     localStorage.setItem("savedAmount", 0);
      localStorage.setItem("savedAutoAmount", 0);
          localStorage.setItem("multiplier", 1);
          localStorage.setItem("multiplierMultiSave", 1);
     localStorage.setItem("autoClickerMultiplyButton", 1);
            localStorage.setItem("weakSpotUpgrade", 0);


          amount = 0;
          addAuto = 0;
          increaseAmount = 1;
          multiplierMultiAdd = 1;
          autoClickerAdd = 1;
          weakSpotIncrease = 1;

              autoClickerCost = Math.round(20*1.5**(addAuto + 1));
                   multiplierCost = Math.round(100*1.5**increaseAmount);

  multiplierButton.textContent = "multiplier level: " + increaseAmount + " cost: " + multiplierCost;
      autoClickerButton.textContent = "auto clicker level: " + addAuto + " cost: " + autoClickerCost;

               multiplierMultiplyCost = 100*(10**multiplierMultiAdd);
                   multiplierMultiply = 0.5*(2**multiplierMultiAdd);

               multiplierMultiButton.textContent = "multiplier amount: " + multiplierMultiply + " cost: " + multiplierMultiplyCost;

                    autoClickerMultiplyCost = 100*(10**autoClickerAdd);
                        autoClickerMultiply = 0.5*(2**autoClickerAdd);
                         autoClickerMultiplyButton.textContent = "auto clicker multiplier amount: " + autoClickerMultiply + " cost: " + autoClickerMultiplyCost;

                           weakSpotCost = Math.round((1000 * 2.5**weakSpotIncrease))
                           weakSpotButton.textContent = "weak spot upgrade level: " + weakSpotIncrease + " cost: " + weakSpotCost;

}

if (startGame == false)
{
    reset();
    startGame = true;
    localStorage.setItem("gameStarted", startGame)
}

function saveAmount ()
{
 localStorage.setItem("savedAmount", amount);
}

function multiplierMulti()
{
    if (amount >= multiplierMultiplyCost)
    {
           multiplierMultiAdd++;
    multiplierMultiply = 0.5*(2**multiplierMultiAdd);
     amount -= multiplierMultiplyCost;
     multiplierMultiplyCost = 100*(10**multiplierMultiAdd);
     saveAmount();
     multiplierMultiButton.textContent = "multiplier amount: " + multiplierMultiply + " cost: " + multiplierMultiplyCost;
     console.log(multiplierMultiplyCost); 
     localStorage.setItem("multiplierMultiSave", multiplierMultiAdd);
    }
}

function multiplyAutoClicker()
{
    if (amount >= autoClickerMultiplyCost)
    {
         autoClickerAdd++;
    autoClickerMultiply = 0.5*(2**autoClickerAdd);
     amount -= autoClickerMultiplyCost;
     autoClickerMultiplyCost = 100*(10**autoClickerAdd);
     saveAmount();
     autoClickerMultiplyButton.textContent = "auto clicker multiplier amount: " + autoClickerMultiply + " cost: " + autoClickerMultiplyCost;
     console.log(autoClickerMultiplyCost); 
     localStorage.setItem("autoClickerMultiplyButton", autoClickerAdd);
    }
}

function add ()
{
        mainButton.classList.add('pieClick');
    setTimeout(() => {
        mainButton.classList.remove('pieClick');
    }, 200);


amount += (increaseAmount * multiplierMultiply);
mainClicker.textContent = amount;
console.log(increaseAmount * multiplierMultiply);
saveAmount();
}

function multiplier ()
{
    if (amount >= multiplierCost)
    {
      increaseAmount++;
       amount -= multiplierCost;
     multiplierCost = Math.round(100*1.5**increaseAmount);
  multiplierButton.textContent = "multiplier level: " + increaseAmount + " cost: " + multiplierCost;
  mainClicker.textContent = amount;
     localStorage.setItem("multiplier", increaseAmount);
     saveAmount();
    
    }

}
function makeTextGreenWhenRich ()
{
if (amount >= multiplierCost)
{
     multiplierButton.style = "color: lightgreen";
}
else
{
         multiplierButton.style = "color: -var(--textColor)";
}
if (amount >= autoClickerCost)
{
     autoClickerButton.style = "color: lightgreen";
}
else
{
         autoClickerButton.style = "color: -var(--textColor)";
}
if (amount >= autoClickerMultiplyCost)
{
    autoClickerMultiplyButton.style = "color: lightgreen"
}
else
{
        autoClickerMultiplyButton.style = "color: -var(--textColor)"
}
if (amount >= multiplierMultiplyCost)
{
    multiplierMultiButton.style = "color: lightgreen"
}
else
    {
        multiplierMultiButton.style = "color: var(--textColor)"
    }
    if (amount >= weakSpotCost)
    {
        weakSpotButton.style.color = "lightgreen"
    }
    else{
        weakSpotButton.style.color = "var(--textColor)";
    }
}
setInterval(makeTextGreenWhenRich, 100)


function upgradeAutoClicker ()
{
    if (amount >= autoClickerCost)
    {
    addAuto++;
    amount -= autoClickerCost;
    autoClickerCost = Math.round(20*1.5**(addAuto + 1));
    autoClickerButton.textContent = "auto clicker level: " + (addAuto) + " cost: " + autoClickerCost;
    console.log(amount)
    localStorage.setItem("savedAutoAmount", addAuto);
    saveAmount();
    }

}
function AutoClicker ()
{
    amount += (addAuto * autoClickerMultiply);
    mainClicker.textContent = amount;
    console.log(addAuto * autoClickerAdd);
    saveAmount();
}
setInterval(AutoClicker, 1000);



let weakSpotY = 0;
let weakSpotX = 0;

function upgradeWeakSpot ()
{
 if (amount >= weakSpotCost)
 {
   weakSpotIncrease++;
   amount -= weakSpotCost
   weakSpotCost = Math.round((1000 * 2.5**weakSpotIncrease))
   weakSpotBought = true
   weakSpotButton.textContent = "weak spot upgrade level: " + weakSpotIncrease + " cost: " + weakSpotCost;
   saveAmount()
       setWeakSpotPosition.style.display = "inline-block";
       localStorage.setItem("weakSpotUpgrade", weakSpotIncrease);
 }
}

if (weakSpotBought == true)
{
     setWeakSpotPosition.style.display = "block";
}
    localStorage.setItem("weakSpotBought", weakSpotBought);
function randomizeWeakSpotPosition ()
{
    if (weakSpotBought == true)
{
    localStorage.setItem("weakSpotBought", weakSpotBought);
    let X = Math.random()*100;
    let y = Math.random()*100;

    weakSpotX = X;
    weakSpotY = y;
if (weakSpotX >= 40 && weakSpotX <= 60 && weakSpotY >= 40 && weakSpotY <= 60 &&  keepWeakSpotPosition)
{
  setWeakSpotPosition.style.left = weakSpotX + "%";
  setWeakSpotPosition.style.bottom = weakSpotY + "%";
  
    setWeakSpotPosition.style.display = "block";
    keepWeakSpotPosition = false;
    console.log(keepWeakSpotPosition);
}
}
}

setInterval(randomizeWeakSpotPosition, 80);


function weakSpotOnClick ()
{
    amount += increaseAmount * multiplierMultiply** weakSpotIncrease;
    console.log(increaseAmount * multiplierMultiply**weakSpotIncrease)
    console.log(weakSpotIncrease);
    saveAmount();
    mainClicker.textContent = amount;
    setWeakSpotPosition.style.display = "none"
    keepWeakSpotPosition = true;
}



retrieveLocalData();
