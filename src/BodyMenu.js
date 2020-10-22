import { MenuItem } from './MenuItem';

const BodyMenu = () => {
    let menu = document.createElement("section");
    menu.classList.add("menu");
    let menuitem1 = MenuItem("Pizza /w Pepperoni", "1", "This is a regular pizza with pepperoni");
    let menuitem2 = MenuItem("Pizza /w Pepperoni and Cheese", "3", "This is a regular pizza with pepperoni and cheese");
    let menuitem3 = MenuItem("Supreme Pizza", "5", "This is it. The Supreme Pizza. All in for the max!");
    menu.appendChild(menuitem1);
    menu.appendChild(menuitem2);
    menu.appendChild(menuitem3)
    return menu;
}

export { BodyMenu };