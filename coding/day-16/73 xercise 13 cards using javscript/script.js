const container = document.getElementById("container");


function createCard1(title, cName, views, monthsOld, duration, thumbnail) {
    const card = document.createElement("div");
    card.classList.add("cardd");

    
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const image = document.createElement("img");
    image.content = thumbnail;

    const channelname = document.createElement("h3")
    channelname.textContent = cName;

    const view = document.createElement("p");
    view.textContent = views;

    const time = document.createElement("p");
    time.textContent = monthsOld;

    const dur = document.createElement('p');
    dur.textContent = duration;


    card.appendChild(cardTitle);
    card.appendChild(image);
    card.appendChild(channelname);
    card.appendChild(view);
    card.appendChild(time);
    card.appendChild(dur);
    return card;
}

const card12 = createCard1("title hun mn", "codeWithHary", "24000", "7mothns old","34.21", "link" )




function creatCard(title, content) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

const card1 = creatCard("title hun mn", "mn hun content biaya g")
const card2 = creatCard("2nd title hun mn", "mn hun 2nd content biaya g")

container.appendChild(card1);
container.appendChild(card2);
container.appendChild(card12);