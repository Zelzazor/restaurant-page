const BodyHome = () => {
    let home = document.createElement("section");
    home.classList.add("home");

    //First row
    let row1 = document.createElement("div");
    row1.classList.add("row");
    let parragraph1 = document.createElement("p");
    parragraph1.textContent = "Welcome to Di Molto Pizza, this is the best pizza you will ever eat!";
    row1.appendChild(parragraph1);

    //Second row
    let row2 = document.createElement("div");
    row2.classList.add("row");
    row2.classList.add("img-flex");
    let parragraph2 = document.createElement("p");
    parragraph2.textContent = "Just look at it... Look at it! Don't want a bite? I know you want some, c'mon! Only available at this page, can't be found anywhere else... Are you sure you don't want at the very least a single bite?";
    let img1 = document.createElement("img");
    img1.classList.add("imgs");
    img1.src = "./img/1.jpg";
    img1.alt = "Pizza image";
    row2.appendChild(img1);
    row2.appendChild(parragraph2);


    //Third row
    let row3 = document.createElement("div");
    row3.classList.add("row");
    row3.classList.add("img-flex");
    let parragraph3 = document.createElement("p");
    parragraph3.textContent = "And this one! I mean, you've gotta be kidding me if you don't want something like this!";
    let img2 = document.createElement("img");
    img2.classList.add("imgs");
    img2.src = "./img/photo-1513104890138-7c749659a591.jpg";
    img2.alt = "Pizza image";
    row3.appendChild(parragraph3);
    row3.appendChild(img2);

    //Wrapping all up
    home.appendChild(row1);
    home.appendChild(row2);
    home.appendChild(row3);

    return home;
}

export { BodyHome };