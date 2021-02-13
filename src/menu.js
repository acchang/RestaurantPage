function createMenu() {
const menu = document.createElement("div");
menu.classList.add("menu");

menu.appendChild(
    createMenuItem(
    "Beef",
    "Free-Range, Corn-Fed"
    )
);
menu.appendChild(
    createMenuItem(
    "Chicken",
    "Organic, Vegetarian Feed"
    )
);
menu.appendChild(
    createMenuItem(
    "Pork",
    "Berkshire (Kurobuta)"
    )
);
menu.appendChild(
    createMenuItem(
    "Tofu",
    "Funjino, Japan"
    )
);
menu.appendChild(
    createMenuItem(
    "Onion",
    "Red, White, Yellow"
    )
);
menu.appendChild(
    createMenuItem(
    "Cabbage",
    "Romanesco broccoli"
    )
);
menu.appendChild(
    createMenuItem(
    "Beets",
    "Parsnips, varietals"
    )
);
menu.appendChild(
    createMenuItem(
    "Potato",
    "Idaho Whites and Reds"
    )
);

return menu;
}

function createMenuItem(name, description) {
const menuItem = document.createElement("div");
menuItem.classList.add("menu-item");

const foodImage = document.createElement("img");
foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;
foodImage.alt = `${name}`;

const foodName = document.createElement("h2");
foodName.textContent = name;

const foodDescription = document.createElement("p");
foodDescription.textContent = description;

menuItem.appendChild(foodImage);
menuItem.appendChild(foodName);
menuItem.appendChild(foodDescription);

return menuItem;
}

function loadMenu() {
const main = document.getElementById("main");
main.textContent = "";
main.appendChild(createMenu());
}

export default loadMenu;
