document.addEventListener("DOMContentLoaded" , function (){

    const steps= document.querySelectorAll(".step");

    const indicators = document.querySelectorAll(".step-indicator");

    let currentStep=0;

    // function showStep (jamonchai) {
    //     steps.forEach((v,i) => {
    //         steps.classList.remoove("active");
    //         indicators[i].classList.remove("active");

    //         if(i===jamonchai) {
    //             steps.classList.add("active");
    //             indicators[i].classList.add("active");
    //         }
    //     });
    // }


     function showStep (jamonchai) {

        for( let i=0 ; i< steps.length ; i++) {

            steps[i].classList.remove("active");
            indicators[i].classList.remove("active");
        }
        steps[jamonchai].classList.add("active");
        indicators[jamonchai].classList.add("active");

     }

       //-----step-1------
     document.getElementById("next1").onclick=function() {
        currentStep=1;
        showStep(currentStep);

     }
     document.getElementById("prev2").onclick=function() {
        currentStep=0;
        showStep(currentStep);
     }
        //-----step-2------

     document.getElementById("next2").onclick=function(){
        currentStep=2;
        showStep(currentStep);
     }
     document.getElementById("prev3").onclick=function() {
        currentStep=1;
        showStep(currentStep);
     }
        //------step-3------

        document.getElementById("next3").onclick=function(){
            currentStep=3;
            showStep(currentStep);
        }

        document.getElementById("prev4").onclick=function() {
            currentStep=2;
            showStep(currentStep);
        }
            //------step-4------
        document.getElementById("next4").onclick=function() {
            currentStep=4;
            showStep(currentStep);
        }

        document.getElementById("prev5").onclick=function() {
            currentStep=3;
            showStep(currentStep);
        }

    showStep(0);
});