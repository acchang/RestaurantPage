
function chiefDiv() {
var persp = document.createElement('div');
persp.classList.add('perspective');
persp.id = 'perspective';
document.getElementById('content').appendChild(persp);

var menuLabel = document.createElement('label');
menuLabel.innerHTML = 'MENU';
menuLabel.classList.add('tab', 'monofett');
menuLabel.htmlFor = 'tab-home'
document.getElementById('perspective').appendChild(menuLabel);

var homeLabel = document.createElement('label');
homeLabel.innerHTML = 'HOME';
homeLabel.classList.add('tab', 'monofett');
homeLabel.htmlFor = 'tab-home'
document.getElementById('perspective').appendChild(homeLabel);

var visitLabel = document.createElement('label');
visitLabel.innerHTML = 'VISIT';
visitLabel.classList.add('tab', 'monofett');
visitLabel.htmlFor = 'tab-visit'
document.getElementById('perspective').appendChild(visitLabel);

var menuInput = document.createElement('input');
menuInput.type = 'radio'
menuInput.name = 'tabs'
menuInput.id = 'tab-menu'
document.getElementById('perspective').appendChild(menuInput);

var homeInput = document.createElement('input');
homeInput.type = 'radio'
homeInput.name = 'tabs'
homeInput.id = 'tab-home'
document.getElementById('perspective').appendChild(homeInput);

var visitInput = document.createElement('input');
menuInput.type = 'radio'
menuInput.name = 'tabs'
menuInput.id = 'tab-visit'
document.getElementById('perspective').appendChild(visitInput);

var cubeDiv = document.createElement('div');
cubeDiv.classList.add('cube');
cubeDiv.id = 'cube';
document.getElementById('perspective').appendChild(cubeDiv);
}

export default chiefDiv;


// <label class="tab monofett" for="tab-menu">MENU</label>
// <label class="tab monofett" for="tab-home">HOME</label>
// <label class="tab monofett" for="tab-visit">VISIT</label>
// <input type="radio" name="tabs" id="tab-menu">
// <input type="radio" name="tabs" id="tab-home">
// <input type="radio" name="tabs" id="tab-visit"> 

// <div class="cube">
