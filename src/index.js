import './index.html';
import './main.scss';

const menuBtn = document.querySelector('.menu')
const mobileMenuNav = document.querySelector('.mobile-menu__navigation')
const mobileMenuBackground = document.querySelector('.mobile-menu__background')
const body = document.body

const toggleMobileMenu = () => {
  mobileMenuNav.classList.toggle('mobile-menu__navigation_opened')
  mobileMenuBackground.classList.toggle('mobile-menu__background_opened')
  body.classList.toggle('lock')
  menuBtn.classList.toggle('menu_active')
}

menuBtn.addEventListener('click', () => toggleMobileMenu())
mobileMenuBackground.addEventListener('click', () => {
  mobileMenuBackground.classList.contains('mobile-menu__background_opened') && toggleMobileMenu()
})

mobileMenuNav.children[0].addEventListener('click', (e) => {
  mobileMenuNav.classList.contains('mobile-menu__navigation_opened') && e.target.classList.contains('link') && toggleMobileMenu()
})

