import './sass/main.scss'
import menu from './js/menu'
import svgxuse from './js/svgxuse'
import mixitup from 'mixitup'

menu()
svgxuse()

const portfolioboxEl = document.querySelector('.portfolio-box');
mixitup(portfolioboxEl);
 



