const myfun = () => {
    const   phy = document.getElementById("phy").value;
     const  che = document.getElementById("che").value;
    const   math = document.getElementById("math").value;
    const   hin = document.getElementById("hin").value;
     const  eng = document.getElementById("eng").value;
     let grade ="";
    
       const total = parseFloat(phy) + parseFloat(che) + parseFloat(math) + parseFloat(hin) + parseFloat(eng);
      /** alert( total);**/
   
   const perc = (total/5);
  /** alert(perc); **/

   
   if(perc <= 100 && perc >= 80){
     grade = 'A';
   }else if( perc < 80 && perc >= 60){
        grade = 'B';
   }else if(perc < 60 && perc >=40){
        grade = 'C';
   }else{
        grade ='F';
   }
  /** alert(grade); **/
   if(perc >= 40){
     document.getElementById("output").innerHTML = ` Out of 500 your total is ${total}
     and percentage is ${perc}%. <br>       your grade is ${grade}. you are pass.`;

   }else{
     document.getElementById("output").innerHTML = ` Out of 500 your total is ${total}
     and percentage is ${perc}%. <br> your grade is ${grade}. you are fail.`;
   }
     }