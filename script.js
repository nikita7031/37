var roll = new Audio('roulette_spin.mp3');
const b_color=document.querySelector('#number_box');
const btn=document.getElementById('spin')

document.getElementById('spin').addEventListener("click", spin);

function spin() {
    // btn.disabled=true
    // btn.innerText='Вращение...'
    roll.pause();
    roll.currentTime=0;
    roll.play()
    for (i=0; i<141; i++){
        // Runs 141 times, with step from 0 to 140
        // Returns a random integer from 0 to 37
        (function(i){
            window.setTimeout(function(){
                rand=Math.floor(Math.random()*37)
                document.getElementById('number').innerHTML=rand
                if ((rand>0 && rand<10) || (rand>18 && rand<28)){
                    if (rand%2==0) {
                        b_color.style.backgroundColor='#202020';
                    }
                    // if(rand%2!=0)
                    else{
                        b_color.style.backgroundColor='#a52a2a';
                    }
                }
                if ((rand>9 && rand<19) || (rand>27 && rand<=36)){
                    if (rand%2==0) {
                        b_color.style.backgroundColor='#a52a2a';
                    }
                    // if(rand%2!=0)
                    else{
                        b_color.style.backgroundColor='#202020';
                    }
                }
                if (rand==10 || rand==28){
                    b_color.style.backgroundColor='#202020';
                }
                if(rand==0){
                    b_color.style.backgroundColor='#0a8f0a';
                }
            },i*50);
        }(i));
    };
    /*
    setTimeout(() => {
        btn.disabled=false
        btn.innerText='Вращать'
    }, 7100);
    */
}
