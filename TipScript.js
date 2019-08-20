function calculateTip(form) {
  //Make sure there is a value in the Check Amount form field
  if (form.CheckAmt.value) {
    var checkAmt = form.CheckAmt.value;
  } else {
    alert("Please enter a check amount.");
    return;
  }
  //Calculate tip and total amounts
  var tipPct = form.ServiceRating.value / 100;
  var tipAmt = checkAmt * tipPct;
  var total = parseFloat(tipAmt) + parseFloat(checkAmt);
  form.TipAmt.value = tipAmt.toFixed(2);
  form.Total.value = total.toFixed(2);
}
