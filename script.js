document.getElementById('calculateBtn').addEventListener('click',function(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById("height").value);
    
    if(isNaN(weight) || isNaN(height) || weight <=0 || height<=0){
        document.getElementById('result').innerText = 'Please provide us with valid values for weight and height.';
        return;
    }

    const bmi = (weight/(height*height)).toFixed(1);

    let category ='';
    if (bmi < 18.5){
        category = 'Underweight';
    }else if(bmi >=18.5 && bmi<24.9){
        category = 'Normal weight';
    }else if(bmi > 25 && bmi <=29.9){
        category = 'Overweight';
    }else{
        category = 'Obese';
    }
    document.getElementById('result').innerHTML = `
        Your BMI is <span style="color: #3498db;">${bmi}</span>. You are classified as <span style="color: #e74c3c;">${category}</span>
    `;
})