const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
  progressBar();
  enablePrev();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  progressBar();
  enablePrev();
});

//console.log('sal);

//let afisareConsola = () => {
// console.log('sal)
//}
//afisareConsola();

//addEventListener('click', afisaConsola);

//for(let i=0; i<arra.length; i++){
//console.log(array[i])
//console.log(i)
//
//.forEach((codrin, indexescu))
//console.log(c)
//console.log(index)

//console.lg(sda)
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}
//schimabre

let progressBar = () => {
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
};

let enablePrev = () => {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};
