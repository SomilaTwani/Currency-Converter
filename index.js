function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let rate;

    if (from === "USD" && to === "ZAR") {
      rate = 17.97;
    } else if (from === "GBP" && to === "ZAR") {
      rate = 22.75;
    } else if (from === "BWP" && to === "ZAR") {
      rate = 1.33;
    }

    let result = amount * rate;
    document.getElementById("result").innerHTML = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
  }