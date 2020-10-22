import { Navigation } from './Navigation'
import { BodyHome } from './BodyHome'


const Body = () => {
    let body = document.createElement("div");
    let nav = Navigation();
    let home = BodyHome();
    body.classList.add("body");
    body.appendChild(nav);
    body.appendChild(home);

    return body;
}

export { Body };