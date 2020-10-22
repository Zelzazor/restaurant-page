const MenuItem = (name, price, description) => {
    let item = document.createElement("div");
    item.classList.add("item");
    let paragraph = document.createElement("p");
    paragraph.textContent = `${name}   -   $${price}`;
    item.appendChild(paragraph);
    let paragraphDesc = document.createElement("p");
    paragraphDesc.textContent = `${description}`;
    item.appendChild(paragraphDesc);
    return item;
}

export { MenuItem };