burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav')
rNav = document.querySelector('.rNav')

burger.addEventListener('click',() =>{
      navList.classList.toggle('v-class-resp')
      rNav.classList.toggle('v-class-resp')
      navbar.classList.toggle('h-nav-resp')
})
