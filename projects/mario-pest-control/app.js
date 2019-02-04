function calc(){
    var a = document.querySelector("#value1").value;
    var b = document.querySelector("#value2").value;
    var operator = document.querySelector("#operator").value;
    var calculate;

    if (op == "add"){
        calculate = a+b;
    } else if (op == "min"){
        calculate = a - b;
    }
    } else if (op == "mul"){
        calculate = a * b;
    }
    } else if (op == "div"){
        calculate = a / b;
    }

    console.log (calculate)
}

