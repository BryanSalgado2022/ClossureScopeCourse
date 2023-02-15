function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox has $${saveCoins}`);
}

function moneyBox(){
  let saveCoins = 0;
  function countCoins(coins){
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(8);
myMoneyBox(15);

const moneyBoxAna = moneyBox();

moneyBoxAna(20);
moneyBoxAna(5);
