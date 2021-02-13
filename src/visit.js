function loadVisit() {
    var visitTab = document.createElement('div');
    visitTab.classList.add('tab-content');
    visitTab.id = 'visitTab';
    document.getElementById('cube').appendChild(visitTab);
    
    var visitItem = document.createElement('h1');
    visitItem.innerHTML = 'VISIT';
    document.getElementById('visitTab').appendChild(visitItem)
    }

export default loadVisit;