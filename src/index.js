import { Header } from './Header';
import { Navigation } from './Navigation';
import { BodyHome } from './BodyHome';
import { BodyMenu } from './BodyMenu';
import { BodyContact } from './BodyContact';
import { Footer } from './Footer';


const container = document.querySelector(".container");

container.appendChild(Header());
container.appendChild(Navigation());
container.appendChild(BodyHome());
container.appendChild(Footer());

const btnHome = document.querySelector("#btnHome");
const btnMenu = document.querySelector("#btnMenu");
const btnContact = document.querySelector("#btnContact")


btnHome.addEventListener("click", () => {
    container.replaceChild(BodyHome(), document.querySelector("section"));
});

btnMenu.addEventListener("click", () => {
    container.replaceChild(BodyMenu(), document.querySelector("section"));
});

btnContact.addEventListener("click", () => {
    container.replaceChild(BodyContact(), document.querySelector("section"));
});