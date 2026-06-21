window.onload = function(){

    let savedWeight = localStorage.getItem("weight");

    if(savedWeight){
        document.getElementById("weightDisplay").innerText =
        "Current Weight: " + savedWeight + " kg";
    }
};

function saveWeight(){

    let weight = document.getElementById("weight").value;

    localStorage.setItem("weight", weight);

    document.getElementById("weightDisplay").innerText =
    "Current Weight: " + weight + " kg";
}

function updateWater(){

    let water = document.getElementById("water").value;

    let percent = (water / 8) * 100;

    if(percent > 100){
        percent = 100;
    }

    document.getElementById("waterBar").style.width =
    percent + "%";

    document.getElementById("waterText").innerText =
    water + " / 8 Glasses";
}

function updateWorkout(){

    let workout =
    document.getElementById("workout").value;

    if(workout > 100){
        workout = 100;
    }

    document.getElementById("workoutBar").style.width =
    workout + "%";

    document.getElementById("workoutText").innerText =
    workout + "%";
}

function calculateBMI(){

    let height =
    document.getElementById("height").value / 100;

    let weight =
    document.getElementById("bmiWeight").value;

    let bmi =
    (weight / (height * height)).toFixed(1);

    let status = "";

    if(bmi < 18.5){
        status = "Underweight";
    }
    else if(bmi < 25){
        status = "Normal";
    }
    else if(bmi < 30){
        status = "Overweight";
    }
    else{
        status = "Obese";
    }

    document.getElementById("bmiResult").innerText =
    "BMI: " + bmi + " (" + status + ")";
}
