/* Typing Animation */
let text = "Web Developer | JavaScript Learner | Problem Solver";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}
typing();


/* Scroll Reveal Animation */
let hidden = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  hidden.forEach(sec => {
    let top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});
