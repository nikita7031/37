var roll = new Audio('roulette_spin.wav');
const b_color=document.querySelector('#number_box');
document.getElementById('spin').addEventListener("click", spin);

function spin() {
    roll.pause();
    roll.currentTime = 0;
    roll.play()
    for (i=0; i<141; i++){
        // Runs 25 times, with step from 0 to 140
        // Returns a random integer from 0 to 37
        (function(i){
            window.setTimeout(function(){
                rand=Math.floor(Math.random()*38)
                document.getElementById('number').innerHTML=rand
                if (rand%2==0) {
                    b_color.style.backgroundColor='#202020';
                }
                if(rand%2!=0){
                    b_color.style.backgroundColor='#a52a2a';
                }
                if(rand==0){
                    b_color.style.backgroundColor='#0a8f0a';
                }
            },i*50);
        }(i));
    };
}