var initial_price = document.querySelector("#initial-price");
var stocks_quantity = document.querySelector("#stocks-quantity");
var current_price = document.querySelector("#Current-price");
var button = document.querySelector("#submit");
var output_box = document.querySelector(".output-box")


button.addEventListener("click",function show_output(){
    var initial = Number(initial_price.value);
    var quantity = Number(stocks_quantity.value);
    var current = Number(current_price.value);
    output_box.innerText = calculate_proft_and_loss(initial,quantity,current);
})

function calculate_proft_and_loss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity;
        var loss_percentage = (loss/(initial*quantity))*100;
        var ret = "Loss is "+ loss+ " Loss Percentage is "+loss_percentage+"%";
        return ret;
    }
    else if(current>initial){
        var gain = (current-initial) * quantity;
        var gain_percentage = (gain/(initial * quantity))*100;
        var ret = "Gain is "+gain+ " Gain Percentage is " + gain_percentage+"%";
        return ret;
    }
    else{
        var ret = "No pain no gain ";
        return ret;
    }
}

