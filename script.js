//const btn = document.getElementById("btn");
let calculatebtn = document.getElementById('calculatebtn');
let calculateage = document.getElementById('calculate_Age');

calculatebtn.addEventListener('click',function(){
    let date_input = document.getElementById('date_input').value;
    date_input = new Date(date_input);
    let todayDate = new Date();
   // alert(todayDate);
    let totalage = Date.now() - date_input.getTime();
    ageYear = new Date(totalage); 
    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970 );
    calculateage.innerHTML = "Your Age is "+ageYear+" years old.";
    
    });
    
// function ageMonth(){
//     if(todayDate.getMonth() >= birthdate_input.getMonth()){
//         if(todayDate.getDate() >= birthdate_input.getDate()){
//             return todayDate.getMonth() - birthdate_input.getMonth();
//         }else{
//             if((todayDate.getMonth()-1) >= birthdate_input.getMonth()){
//                 return (todayDate.getMonth()-1) - birthdate_input.getMonth();
            
//             }else{
//                 return ((todayDate.getMonth()-1) + 12) - birthdate_input.getMonth();
             
//             }
//         }
//     }
// }
    
//OR//
//calculateage.innerHTML = "Your Age is "+ageYear+" years old." + ageMonth() + "Months"