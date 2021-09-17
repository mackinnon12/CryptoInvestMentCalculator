function getData() {
  var currentPrice = $("#currentPrice").val();
  var futurePrice = $("#futurePrice").val();
  var userInvestment = $("#userInvestment").val();
  errors = 0;

  if (currentPrice == "") {
    errors = 1;
    $("#currentPriceError").css("display", "inline-block");
  } else {
    $("#currentPriceError").css("display", "none");
  }
  if (futurePrice == "") {
    errors = 2;
    $("#futurePriceError").css("display", "inline-block");
  } else {
    $("#futurePriceError").css("display", "none");
  }
  if (userInvestment == "") {
    errors = 3;
    $("#userInvestmentError").css("display", "inline-block");
  } else {
    $("#userInvestmentError").css("display", "none");
  }

  if (errors == "0") {
    var result = +userInvestment / +currentPrice;
    var userProfit = result * +futurePrice - +userInvestment;
    var roi = ((result * futurePrice) / userInvestment) * 100 - 100;
    $("#currentPrice").val("");
    $("#futurePrice").val("");
    $("#userInvestment").val("");
    if (userProfit >= 0) {
      document.getElementById("profitNumbers").className =
        "alert alert-success";
      document.getElementById("profitROI").className = "alert alert-success";
      $("#profitNumbers").html("$" + userProfit.toFixed(2));
      $("#profitROI").html("+" + roi.toFixed(2) + "%");
    } else if (userProfit < 0) {
      document.getElementById("profitNumbers").className = "alert alert-danger";
      document.getElementById("profitROI").className = "alert alert-danger";
      $("#profitNumbers").html("$" + userProfit.toFixed(2));
      $("#profitROI").html(roi.toFixed(2) + "%");
    }
  }
}

function clearData() {
  $("#currentPrice").val("");
  $("#futurePrice").val("");
  $("#userInvestment").val("");
}
