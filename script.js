const step1= document.querySelector(".step1"),
step2 = document.querySelector(".step2"),
step3 = document.querySelector(".step3");
emailAddress = document.getElementById("email"),
verifyEmail = document.getElementById("verifyemail"),
inputs=document.querySelectorAll(".otp-group input"),
nextbutton = document.querySelector(".nxbtn")
verifybutton = document.querySelector(".verifybutton");
let otp = "";
window.addEventListener("load",()=>{
    emailjs.init("CbbnUWe0j0msm4znk");
    step2.style.display = "none";
    step3.style.display = "none";
    nextbutton.classList.add("disable");
    nextbutton.classList.add("verifybutton");
});

const validateEmail = (email)=>{
    let re=/\$+@\s+\.-/;
    if(re.test(email)){
        nextbutton.classList.remove("disable");
    }
    else{
        nextbutton.classList.remove("disable");
    }
};

const generateotp =()=>{
    return Math.floor(1000 + Math.random()*9000);
};

inputs.forEach((input)=>{
    input.addEventListener("keyup", function(e){
       if(inputs[0].value!="" && inputs[1].value!="" &&
        inputs[2].value!="" && inputs[0].value!=""){
            verifybutton.classList.remove("disable");
        } else{
            verifybutton.classList.add("disable");
        }

    });
});

const serviceID = "service_bazqog8";
const templateID = "template_yyyor3e";
nextbutton.addEventListener('click',()=>{
    otp=generateotp();
    nextbutton.innerHTML = "&#9889; sending....";

    let templateParameter = {
        from_name:"",
        OTP:otp,
        message:" ",
        reply_to:emailAddress.value ,
    };
    emailjs.send(serviceID , templateID, templateParameter).then(
        (res)=>{
            console.log(res);
            nextbutton.innerHTML = "NEXT&rarr;";
            step1.style.display = "none";
            step2.style.display = "block";
    step3.style.display = "none";
            


    },
    (err)=>{
        console.log(err);
    })
});

verifybutton.addEventListener('click',()=>{
   let values =" ";
   inputs.forEach((input)=>{
    values +=input.value;
   });
   if(otp == values){
    step1.style.display = "none";
            step2.style.display = "none";
    step3.style.display = "block";
   }else{
    
    setTimeout(()=>{
        verifybutton.classList.add("error-shake");
    },1000);
   }
});

function chengepage()  {
    step1.style.display = "block";
            step2.style.display = "none";
    step3.style.display = "none";

}