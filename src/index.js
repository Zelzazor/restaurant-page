import { Header } from './Header';
import { Navigation } from './Navigation';
import { BodyHome } from './BodyHome';
import { Footer } from './Footer';

const container = document.querySelector(".container");

container.appendChild(Header());
container.appendChild(Navigation());
container.appendChild(BodyHome());
container.appendChild(Footer());