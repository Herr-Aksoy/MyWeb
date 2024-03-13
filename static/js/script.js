// script.js

function showInfo(platform) {
    var infoBox = document.getElementById('infoBox');
    infoBox.innerHTML = 'Visit my ' + platform + ' profile!';
    infoBox.style.display = 'block';
}

function hideInfo() {
    var infoBox = document.getElementById('infoBox');
    infoBox.style.display = 'none';
}

function redirectTo(url) {
    window.open(url, '_blank');
}
