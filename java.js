let amount = 0;
let increaseAmount = 1;

let multiplierCost = 100;

let addAuto = 0;
let autoClickerCost = 10;

const mainClicker = document.getElementById("counter");
const mainButton = document.getElementById("mainClicker");
const multiplierButton = document.getElementById("multiplierButton");
const autoClickerButton = document.getElementById("autoClickerButton");
let clickPopUp = document.getElementById("clickPopUp");


function retrieveLocalData()
{
 amount = parseInt(localStorage.getItem("savedAmount"));
 mainClicker.textContent = amount

 increaseAmount = parseInt(localStorage.getItem("multiplier"));
     multiplierCost = Math.round(100*1.5**increaseAmount);
  multiplierButton.textContent = "multiplier level: " + increaseAmount + " cost: " + multiplierCost;

 addAuto = parseInt(localStorage.getItem("savedAutoAmount"));
    autoClickerCost = Math.round(20*1.5**(addAuto + 1));
    autoClickerButton.textContent = "auto clicker level: " + (addAuto + 1) + " cost: " + autoClickerCost;
}
function reset ()
{
     localStorage.setItem("savedAmount", 0);
      localStorage.setItem("savedAutoAmount", 0);
          localStorage.setItem("multiplier", 1);

          amount = 0;
          addAuto = 0;
          increaseAmount = 1;

              autoClickerCost = Math.round(20*1.5**(addAuto + 1));
                   multiplierCost = Math.round(100*1.5**increaseAmount);

  multiplierButton.textContent = "multiplier level: " + increaseAmount + " cost: " + multiplierCost;
      autoClickerButton.textContent = "auto clicker level: " + (addAuto + 1) + " cost: " + autoClickerCost;
}
function saveAmount ()
{
 localStorage.setItem("savedAmount", amount);
}
function add ()
{
        mainButton.classList.add('pieClick');
    setTimeout(() => {
        mainButton.classList.remove('pieClick');
    }, 200);
amount += increaseAmount;
mainClicker.textContent = amount;
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

function upgradeAutoClicker ()
{
    if (amount >= autoClickerCost)
    {
    addAuto++;
    amount -= autoClickerCost;
    autoClickerCost = Math.round(20*1.5**(addAuto + 1));
    autoClickerButton.textContent = "auto clicker level: " + (addAuto + 1) + " cost: " + autoClickerCost;
    console.log(amount)
    localStorage.setItem("savedAutoAmount", addAuto);
    saveAmount();
    }

}
function AutoClicker ()
{
    amount += addAuto
    mainClicker.textContent = amount;
    saveAmount();
}
setInterval(AutoClicker, 1000);

retrieveLocalData();
