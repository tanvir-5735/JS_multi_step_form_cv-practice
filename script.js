// container id="cvBuilder"
// for all step class="step"
// step1 id="step1"
//personal info  id="profileImage", id="fullName", id="email", id="phone", id="address"
// step2 id="step2"
//education info id="schoolName", id="degree", id="fieldOfStudy", id="graduationYear"
// step3 id="step3"
//work experience id="companyName", id="jobTitle", id="startDate", id="endDate", id="jobDescription"
// step4 id="step4"
//skills and projects id="skills", id="liveprojects" ,id="objective",id="activities"
// step5 id="step5"
//review and download button id="downloadBtn"   

document.addEventListener("DOMContentLoaded"), function () {

    const steps = document.querySelectorAll(".step");
    const indicators=document.querySelectorAll(".step-indicator");
    let currentStep=0;

    const cvData={
        personal:{},
        profileImage:"",
        education:[],
        experience:[],
        skills:[],
        objective:"",
        activities:"",
        liveProject:"",
    };

    function showStep(index) {
        for (let i=0; i< steps.length; i++)  {

            steps[i].classList.remove("active");
            indicators[i].classList.remove("active");
        } 

        steps[index].classList.add("active");
        indicators[index].classList.add("active");
        window.scrollTo(0, 0);
        }

    // function showToast(msg) {
    //     const container=document.getElementById("toastContainer");
    //     const toast=document.createElement("div");
    //     toast.className="toast";
    //     toast.innerText=msg;
    //     container.appendChild(toast);

    //     setTimeout(() => toast.classList.add("show"), 10);
    //     setTimeout(() => {
    //         toast.classList.remove("show");
    //         setTimeout(() => toast.remove(), 300);
    //     },3000);
    // }

    function showToast(msg) {
        const container= document.getElementById("toastContainer");
        const toast= document.createElement("div");
        toast.className="toast";
        toast.innerTeaxt=msg;
        container.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 10);
        setTimeout(() =>{ toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
    }

    //profile image upload

    document.getElementById("profileimage").addEventListener("change", function (e) {  //change is a input event 
        const file = e.target.files[0];
        if (file) {
            const reader= new FileReader();
            reader.onload =function (evt) {
                cvData.profileImage=evt.target.result;
            };
            reader.readAsDataURL(file);
            }
        });

    

    }
