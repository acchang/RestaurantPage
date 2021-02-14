function loadHome() {
    var homeTab = document.createElement('div');
    homeTab.classList.add('tab-content');
    homeTab.id = 'homeTab';
    document.getElementById('cube').appendChild(homeTab);
    
    var homeHead = document.createElement('h1');
    homeHead.innerHTML = 'Cubist Café';
    homeHead.id = 'homeHead'
    document.getElementById('homeTab').appendChild(homeHead)

    var homeImage = document.createElement('img');
    homeImage.setAttribute("src", "images/cubericecut.png");
    document.getElementById("homeTab").appendChild(homeImage);

    var homeIntro = document.createElement('div');
    homeIntro.id = 'home-intro'
    homeIntro.innerHTML = "It's Hip to be Square! <br> Home to the World-Famous 'Bar-Bee-Cubes' and 'Shish-Cube-Babs' <br> Prepared by Chef Q-Bert <p>";
    document.getElementById('homeTab').appendChild(homeIntro);
    }

export default loadHome;
