

let toggler = document.querySelector('.toggler')
let navMenu = document.querySelector('#navMenu')


console.log(toggler,navMenu)

toggler.addEventListener('click' , function(){
    navMenu.classList.toggle('active')
    console.log('clicked')
})

let scroll = document.getElementById('scroll')

scroll.addEventListener("click", () =>{
    document.querySelector('.get-started').scrollIntoView({behavior:'smooth'})
})


const toggle = document.getElementById('toggle');
const main = document.getElementById('main');
const textElements = document.querySelectorAll('#text');
const circle = document.querySelector('.circle')

toggle.onclick = () => {
  main.classList.toggle('theme');
  textElements.forEach((element) => {
    element.classList.toggle('black-text');
    circle.classList.toggle('right')
  });
  console.log('clicked');
};