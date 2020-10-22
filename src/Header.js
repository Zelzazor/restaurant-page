const Header = () => {
    let head = document.createElement("header");
    let title = document.createElement("h1");
    title.textContent = "Di molto Pizza";
    head.appendChild(title);

    return head;
}


export { Header };