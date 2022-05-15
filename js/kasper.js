const lis = document.querySelectorAll('.shuffle li');
const boxs = document.querySelectorAll('.image-container .box');
// console.log(window.innerWidth());
lis.forEach((li) => {
  li.addEventListener('click', (e) => {
    boxs.forEach((box) => {
      if (box.classList.contains(li.textContent) === false) {
        box.style.opacity = 0.3;
      } else {
        box.style.opacity = 1;
      }
    });
  });
});
