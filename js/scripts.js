
/*
slide behaviour starts here
*/
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}
/*
slide behaviour ends here
*/


/*
nav bar behaviour starts
*/
function navFunc() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*
nav bar behaviour ends
*/

/*
e-banking
*/

function getDeposit() {
  var cur_balance = 1800;
  var deposit = document.getElementById("deposit").value;

  if (isNaN(deposit))
  {
      alert("Please input valid amount");
      return false;
  }

  if(deposit == ""){
     alert("Amount field is empty, please enter an amount.")
     return false;
  }
  
  var new_balance = Number(deposit) + cur_balance;
  alert("Deposit successful. Your new balance is GHC " + new_balance);

}

function getBalance() {
  var cur_balance = 1800;
  alert("Your current balance is GHC " + cur_balance);
}