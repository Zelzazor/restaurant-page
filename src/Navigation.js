const Navigation = () => {
    let Nav = document.createElement("nav");
    let btnHome = document.createElement("button");
    let btnMenu = document.createElement("button");
    let btnContact = document.createElement("button");
    btnHome.textContent = "Home";
    btnMenu.textContent = "Menu";
    btnContact.textContent = "Contact";
    btnHome.classList.add("navBtns");
    btnMenu.classList.add("navBtns");
    btnContact.classList.add("navBtns");
    Nav.appendChild(btnHome);
    Nav.appendChild(btnMenu);
    Nav.appendChild(btnContact);

    return Nav;
}

export { Navigation };