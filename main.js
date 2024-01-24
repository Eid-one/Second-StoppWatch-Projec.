

   let  Greating = " Hello Eid Aden Abdi"

    console.log(Greating)

let startBotton = document.querySelector('#startBtn')
let resetBotton = document.querySelector('#resetBtn')


 // Variables

let seconds =0;
let minutes =0;
let hours=  0 ;

// Leading TO Zero....

 let leadingSeconds = 0;
 let leadingMinutes = 0;
 let leadingHours =  0;


 // Variable setinterval and timer Status

 let  timerInterval= null;
  let timerStatus = "stopped";


function  stopWatch (){
   seconds ++;
 if(seconds/60 ===1){
     seconds= 0;
     minutes ++;
      if(minutes/60 ===1){
        minutes =0;
        hours++;
      }
 }


 if(seconds <10){
    leadingSeconds ="0"+ seconds.toString();
 }else{
    leadingSeconds= seconds;
 }
 if(minutes <10){
    leadingMinutes ="0"+ minutes.toString();
 }else{
    leadingMinutes= minutes;
 }
 if(hours <10){
    leadingHours ="0" + hours.toString();
 }else{
    leadingHours= hours;
 }





 let displayTimer = document.getElementById('timer').innerText = leadingHours +":"+leadingMinutes+":"+leadingSeconds;


   }






     startBotton.addEventListener('click', function(){

        if( timerStatus === "stopped"){

             timerInterval = window.setInterval( stopWatch, 1000);

              document.getElementById('startBtn').innerHTML =`<i class="fa-solid fa-pause" id="pause"></i>`;

              timerStatus ="started";


        }else{

            window.clearInterval(timerInterval);
            document.getElementById('startBtn').innerHTML =`<i class="fa-solid fa-play" id="play"></i>`;

            timerStatus = "stopped";
        }
     })


     resetBotton.addEventListener('click', function(){

   window.clearInterval(timerInterval);

    
        seconds= 0;
        minutes=0;
        hours= 0;

    document.getElementById('timer').innerHTML= "00: 00: 00";

     })