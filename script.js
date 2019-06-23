var depositNames=[];
var depositAmounts=[];
var name;
var totalDeposit;
var deposit;
$(".newDeposit").click(function() {

        totalDeposit=0;
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
    depositAmounts.push(parseInt(deposit));
    depositNames.push(name);
    depositAmounts.forEach(function(money){
        totalDeposit=totalDeposit+ parseInt(money); 
        $(".total").text("totalDeposit:"+totalDeposit);
    $(".number").text("Number of Transactions" +depositAmounts.length);
    });
});
    $(".update").click(function(){
    console.log(depositAmounts[depositAmounts.length]);
   alert("Your last depsoit amount was $"+depositAmounts[depositAmounts.length-1]+" by "+depositNames[depositNames.length-1]);
});