document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");

  const indicators = document.querySelectorAll(".step-indicator");

  let currentStep = 0;
  const cvData = {
    personal: {},
    profileImage: "",
    education: [],
    experience: [],
    skill: [],
    objective: "",
    activities: "",
    liveproject: "",
  };

  //-----Toast Helper-----
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => toast.remove(), 3000);
  }

  // function showStep (jamonchai) {
  //     steps.forEach((v,i) => {
  //         steps.classList.remove("active");
  //         indicators[i].classList.remove("active");

  //         if(i===jamonchai) {
  //             steps.classList.add("active");
  //             indicators[i].classList.add("active");
  //         }
  //     });
  // }

  function showStep(jamonchai) {
    for (let i = 0; i < steps.length; i++) {
      steps[i].classList.remove("active");
      indicators[i].classList.remove("active");
    }
    steps[jamonchai].classList.add("active");
    indicators[jamonchai].classList.add("active");
  }

  //   function handleProfileImage(file) {
  //   if (!file) return;

  //   // File type validation
  //   if (!file.type.startsWith("image/")) {
  //     alert("Please upload a valid image file.");
  //     return;
  //   }

  //   // 2MB limit
  //   if (file.size > 2 * 1024 * 1024) {
  //     alert("Image must be under 2MB.");
  //     return;
  //   }

  //   const reader = new FileReader();
  //   reader.onload = ({ target }) => {
  //     cvData.profileImage = target.result;
  //     renderProfileImage();
  //   };

  //   reader.readAsDataURL(file);
  // }
  //          const cvData ={

  //     personal:{},
  //     profileImage:"",
  //     education:[],
  //     skill:[],
  //     objective:"",
  //     activities:"",
  //     liveproject:"",

  // };
  // document.getElementById("profileImage").addEventListener("change", function(e){
  //   const file = e.target.files[0];
  //   if(file){
  //     const reader = new FileReader();
  //     reader.onload=function(event){
  //       const imgData = event.target.result;
  //       cvData.profileImage = imgData;
  //       cvData.personal.profileImage = imgData;
  //       document.getElementById("cvProfileImage").src= imgData;
  //     }
  //   }
  // });

  const profileInput = document.getElementById("profileImage");
  const cvProfileImage = document.getElementById("cvProfileImage");
  const toastContainer = document.getElementById("toastContainer"); 

  profileInput.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      profileInput.value="";
      return;
    }
     if (file.size > 5 * 1024 * 1024) { // 5MB check directly
    showToast("Image size must be less than 5MB.");
    profileInput.value = ""; 
    return;
  }
    const reader = new FileReader();
    reader.onload = function (event) {
      cvData.profileImage = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  //-----step-1------
  document.getElementById("next1").onclick = function () {
    cvData.personal = {
      name: document.getElementById("name").value,
      title: document.getElementById("title").value,
      location: document.getElementById("location").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
    };

      // Check profile image
  if (!cvData.profileImage) {
    showToast("Please upload a profile image.");
    return; // stop going to next step
  }

    if (
      !cvData.personal.name ||
      !cvData.personal.title ||
      !cvData.personal.location ||
      !cvData.personal.phone ||
      !cvData.personal.email
    ) {
      showToast("Please fill in all personal details.");
      return;
    }

    if (!/^\d{8,}$/.test(cvData.personal.phone.replace(/\D/g, ""))) {
      showToast("Phone number must have at least 8 digits.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(cvData.personal.email)) {
      showToast("Please enter a valid email address.");
      return;
    }

    currentStep = 1;
    showStep(currentStep);
  };
  document.getElementById("prev2").onclick = function () {
    currentStep = 0;
    showStep(currentStep);
  };
  //-----step-2------

  // document.getElementById("next2").onclick = function () {
  //   cvData.education = [];
  //   if (
  //     document.getElementById("degree1").value.trim() ||
  //     document.getElementById("institute1").value.trim()
  //   ) {
  //     if(document.getElementById("degree1").value.trim()===""){
  //       showToast("Please enter at least one education entry.");
  //       return false;
  //     }else{
  //       cvData.education.push({
  //         degree: document.getElementById("degree1").value.trim(),
  //       })
  //     }

  //     if(document.getElementById("institute1").value.trim()===""){
  //       showToast("Please enter at least one education entry.")
  //       return false;
  //     }
  //     else{
  //       cvData.education.push({
  //         institute: document.getElementById("institute1").value.trim()
  //       });
  //     }
  //     cvData.education.push({
  //       // degree: document.getElementById("degree1").value.trim(),
  //       // institute: document.getElementById("institute1").value.trim(),
  //       year: document.getElementById("year1").value.trim(),
  //       desc: document.getElementById("eduDesc1").value.trim(),
  //     });
  //   }

  //   if (
  //     document.getElementById("degree2").value.trim() ||
  //     document.getElementById("institute2").value.trim()
  //   ) {
  //     cvData.education.push({
  //       degree: document.getElementById("degree2").value.trim(),
  //       institute: document.getElementById("institute2").value.trim(),
  //       year: document.getElementById("year2").value.trim(),
  //       desc: document.getElementById("eduDesc2").value.trim(),
  //     });
  //   }
  //   // ---- Education validation----
  //   // if (cvData.education.length === 0) {
  //   //   showToast("Please enter at least one education entry.");
  //   //   return;
  //   // }

  //   currentStep = 2;
  //   showStep(currentStep);
  // };

  //-----step-2------
  document.getElementById("next2").onclick = function () {
    cvData.education = [];

    const edu1 = {
      degree: document.getElementById("degree1").value.trim(),
      institute: document.getElementById("institute1").value.trim(),
      year: document.getElementById("year1").value.trim(),
      desc: document.getElementById("eduDesc1").value.trim(),
    };

    const edu2 = {
      degree: document.getElementById("degree2").value.trim(),
      institute: document.getElementById("institute2").value.trim(),
      year: document.getElementById("year2").value.trim(),
      desc: document.getElementById("eduDesc2").value.trim(),
    };

    const edu1Full = edu1.degree && edu1.institute && edu1.year && edu1.desc;
    const edu2Full = edu2.degree && edu2.institute && edu2.year && edu2.desc;

    const edu1HasAny = edu1.degree || edu1.institute || edu1.year || edu1.desc;

    const edu2HasAny = edu2.degree || edu2.institute || edu2.year || edu2.desc;

    // Partial validation
    if (edu1HasAny && !edu1Full) {
      showToast("Education 1 must be fully completed.");
      return;
    }

    if (edu2HasAny && !edu2Full) {
      showToast("Education 2 must be fully completed.");
      return;
    }
    // Require minimum 1 full entry
    if (!edu1Full && !edu2Full) {
      //  || → used when BOTH required
      //  && → used when minimum 1 required
      showToast("Please enter at least one complete education entry.");
      return;
    }

    // Push only full entries
    if (edu1Full) cvData.education.push(edu1);
    if (edu2Full) cvData.education.push(edu2);

    currentStep = 2;
    showStep(currentStep);
  };
  document.getElementById("prev3").onclick = function () {
    currentStep = 1;
    showStep(currentStep);
  };
  //------step-3------
  document.getElementById("next3").onclick = function () {
    cvData.experience = [];
    if (
      document.getElementById("company1").value.trim() ||
      document.getElementById("role1").value.trim()
    ) {
      cvData.experience.push({
        company: document.getElementById("company1").value.trim(),
        role: document.getElementById("role1").value.trim(),
        year: document.getElementById("expYear1").value.trim(),
        desc: document.getElementById("expDesc1").value.trim(),
      });
    }

    if (
      document.getElementById("company2").value.trim() ||
      document.getElementById("role2").value.trim()
    ) {
      cvData.experience.push({
        company: document.getElementById("company2").value.trim(),
        role: document.getElementById("role2").value.trim(),
        year: document.getElementById("expYear2").value.trim(),
        desc: document.getElementById("expDesc2").value.trim(),
      });
    }
    currentStep = 3;
    showStep(currentStep);
  };

  document.getElementById("prev4").onclick = function () {
    currentStep = 2;
    showStep(currentStep);
  };
  //------step-4------
  document.getElementById("next4").onclick = function () {
    cvData.skill = [];
    cvData.skill.push({
      skills: document.getElementById("skills").value.trim(),
    });
    if (!cvData.skill[0].skills) {
      showToast("Please enter at least one skill.");
      return;
    }

    cvData.objective = document.getElementById("objective").value.trim();
    cvData.activities = document.getElementById("activities").value.trim();
    cvData.liveproject = document.getElementById("liveProject").value.trim();

    updatepreview();
    currentStep = 4;
    showStep(currentStep);
  };
  //--------step-5---------
  function updatepreview() {
    cvProfileImage.src = cvData.profileImage; // just show the uploaded image
    document.getElementById("cvName").innerText = cvData
      ? cvData.personal.name
      : "none";
    document.getElementById("cvTitle").innerText = cvData.personal.title.trim();
    document.getElementById("cvLocation").innerText =
      cvData.personal.location.trim();
    document.getElementById("cvPhone").innerText = cvData.personal.phone.trim();
    document.getElementById("cvEmail").innerText = cvData.personal.email.trim();
    document.getElementById("cvObjective").innerText = cvData.objective.trim();
    document.getElementById("cvEducationList").innerHTML = cvData.education
      .map(
        (elm) =>
          `${elm.degree} -  ${elm.institute} -(${elm.year}) - ${elm.desc}`,
      )
      .join("<br><br>");
    document.getElementById("cvExperienceList").innerHTML = cvData.experience
      .map(
        (elm) => `${elm.role} -  ${elm.company} -(${elm.year}) - ${elm.desc}`,
      )
      .join("<br><br>");
    document.getElementById("cvSkillsList").innerHTML = cvData.skill
      .map((elm) => `${elm.skills}`)
      .join(" ");
    document.getElementById("cvActivities").innerText =
      cvData.activities.trim();
    document.getElementById("cvPortfolioLink").innerText =
      cvData.liveproject.trim();
  }

  document.getElementById("prev5").onclick = function () {
    currentStep = 3;
    showStep(currentStep);
  };

  showStep(0);
});
