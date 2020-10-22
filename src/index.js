import { Header } from './Header';
import { Navigation } from './Navigation';
import { BodyHome } from './BodyHome';

const container = document.querySelector(".container");

container.appendChild(Header());
container.appendChild(Navigation());
container.appendChild(BodyHome());