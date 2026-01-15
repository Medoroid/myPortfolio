  
  var typed = new Typed("#typing", {
    strings: ["Mohamad Abdelkader","Frontend Developer", "React Developer", "Web Designer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

let navbar = document.querySelector('header')

  window.addEventListener('scroll' , ()=>{
if(window.scrollY >= 500){
  navbar.classList.add('bg-black')
}else{
  navbar.classList.remove('bg-black')
}
  })



  // send suggestion


  (function (){
    emailjs.init('1Kx1g6FLXt0eaZrIh')
  })()
  let form = document.querySelector('#form-control')
   
  form.addEventListener('submit' , function (e){
    e.preventDefault();
    emailjs.sendForm('service_09pop41' , "template_zlw96hr" , this).then(
      () => {
        alert("Message sent successfully ✅");
        form.reset();
      },
      (error) => {
        alert("Failed to send message ❌");
        console.log(error);
      }
    );
  })
let goTop = () => {
  window.scrollTo(0, 0);
}