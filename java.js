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
let weakSpotIncrease = 0;

const multiplierMultiButton = document.getElementById("multiplierMultiButton");
const autoClickerMultiplyButton = document.getElementById("autoClickerMultiply");
const weakSpotButton = document.getElementById("weakSpotButton");

const mainClicker = document.getElementById("counter");
const mainButton = document.getElementById("mainClicker");
const multiplierButton = document.getElementById("multiplierButton");
const autoClickerButton = document.getElementById("autoClickerButton");
let clickPopUp = document.getElementById("clickPopUp");

let startGame = false;

function retrieveLocalData()
{
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
                weakSpotCost = (1000 * 10**weakSpotIncrease)
                   weakSpotButton.textContent = "weak spot upgrade level: " + weakSpotIncrease + " cost: " + weakSpotCost;


}
function reset ()
{
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
          weakSpotIncrease = 0;

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

                                                   weakSpotCost = (1000 * 10**weakSpotIncrease)
                           weakSpotButton.textContent = "weak spot upgrade level: " + weakSpotIncrease + " cost: " + weakSpotCost;

}

if (startGame == false)
{
    reset();
    startGame = true;
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
}

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
    makeTextGreenWhenRich();
}
setInterval(AutoClicker, 1000);



let setWeakSpotPosition = document.getElementById("weakSpot");
let weakSpotY = 0;
let weakSpotX = 0;

function upgradeWeakSpot ()
{
 if (amount >= weakSpotCost)
 {
   weakSpotIncrease++;
   amount -= weakSpotCost
   weakSpotCost = (1000 * 10**weakSpotIncrease)
   weakSpotBought = true
   weakSpotButton.textContent = "weak spot upgrade level: " + weakSpotIncrease + " cost: " + weakSpotCost;
   saveAmount()
       setWeakSpotPosition.style.display = "inline-block";
       localStorage.setItem("weakSpotUpgrade", weakSpotIncrease);
 }
}



function randomizeWeakSpotPosition ()
{
    if (weakSpotBought == true)
{
    let X = Math.random()*100;
    let y = Math.random()*100;

    weakSpotX = X;
    weakSpotY = y;
if (weakSpotX >= 20 && weakSpotX <= 70 && weakSpotY >= 70 && weakSpotY <= 85 &&  keepWeakSpotPosition)
{
  setWeakSpotPosition.style.left = weakSpotX + "%";
  setWeakSpotPosition.style.bottom = weakSpotY + "%";
  
    setWeakSpotPosition.style.display = "block";
    keepWeakSpotPosition = false;
    console.log(keepWeakSpotPosition);
}
}
}

setInterval(randomizeWeakSpotPosition, 200);


function weakSpotOnClick ()
{
    amount += (increaseAmount * multiplierMultiply * weakSpotIncrease)
    console.log(amount += (increaseAmount * multiplierMultiply * 5))
    saveAmount();
    mainClicker.textContent = amount;
    setWeakSpotPosition.style.display = "none"
    keepWeakSpotPosition = true;
}



retrieveLocalData();
