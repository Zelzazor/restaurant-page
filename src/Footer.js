const Footer = () => {
    let foot = document.createElement("footer");
    let title = document.createElement("p");
    title.textContent = "Di Molto Pizza - © Zelzazor 2020";
    foot.appendChild(title);

    return foot;
}


export { Footer };