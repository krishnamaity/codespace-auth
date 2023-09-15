

const forms=document.querySelector('form');
// console.log(forms);

forms.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    // console.log(height);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');

    if(height===0 || height < 0 || isNaN(height)){
        // console.log("enter a valid height");
        result.innerHTML="enter a valid height";
    }
    else if( weight === 0 || weight <0 || isNaN(weight)){
        // console.log("enter a valid weight");
        result.innerHTML="enter a valid weight";
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML=` <span> ${bmi} </span>`;
       
        if(bmi<18.6){
            result.innerHTML=`under weight ${bmi}`
        }
        else if(bmi>18.6 && bmi<24.9){
            result.innerHTML=`normal range ${bmi}`
        }
        else{
            result.innerHTML=`over weight ${bmi}`
        }
    }
})