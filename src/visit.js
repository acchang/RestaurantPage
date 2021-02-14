function loadVisit() {
    var visitTab = document.createElement('div');
    visitTab.classList.add('tab-content');
    visitTab.id = 'visitTab';
    document.getElementById('cube').appendChild(visitTab);
    
    var visitHero = document.createElement('div');
    visitHero.classList.add('hero');
    visitHero.id = 'visitHero';
    document.getElementById('visitTab').appendChild(visitHero);

    var visitHead = document.createElement('h1');
    visitHead.innerHTML = 'VISIT';
    visitHead.id = 'homeHead'
    document.getElementById('visitHero').appendChild(visitHead)

    var visitIntro = document.createElement('div');
    visitIntro.id = 'visitIntro'
    visitIntro.innerHTML = "One Tasty Square <br> Jackson Hole, Wyoming 83001<br> Phone: 1-307-FLAVOR3 // email: FlavorCubed@CubistCafe.com<br> A Cube on a Square in a Hole in the Nation's Squarest State!";
    document.getElementById('visitTab').appendChild(visitIntro);

    var visitMap = document.createElement('iframe');
    visitMap.id = 'locationmap'
    visitMap.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDDVt_rMsAY3Vj4nWB3zOGOB4GUWGvrHj8&q=q=jackson+square+jackson+hole");
    document.getElementById('visitTab').appendChild(visitMap);
    }
export default loadVisit;

    