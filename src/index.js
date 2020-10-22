import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

const container = document.querySelector(".container");

container.appendChild(Header());
container.appendChild(Body());
container.appendChild(Footer());