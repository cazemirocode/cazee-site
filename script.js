function revealProfile() {
    document.getElementById('profile-card').style.display = 'block';
    document.getElementsByClassName('social-icons')[0].style.display = 'flex';
    document.getElementById('reveal-button').style.display = 'none';
    document.getElementById('background-music').play();
}
