function homeSplash() {
    const homeTabContent = document.createElement("div");
    homeTabContent.classList.add("tab-content);

    const homeTitle = document.createElement("h1");
    foodName.textContent = 'Cubist Caf&eacute'

    const homeImage = document.createElement("img");
    homeImage.src = "images/cubericecut.png";
    foodImage.alt = "Your favorite dish";

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
    }

    function homeSplash() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
    }

    export default loadMenu;
    
    <div class="tab-content">
        <h1>Cubist Caf&eacute</h1>
         <img src="images/cubericecut.png">
        <div id="home-intro">
            <p>It's Hip to be Square!
            <br>
            Home to the World-Famous 'Bar-Bee-Cubes' and 'Shish-Cube-Babs'
            <br>
            Prepared by Chef Q-Bert
        </div>
    </p>
  </div>
