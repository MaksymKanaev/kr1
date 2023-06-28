const appBullet = document.querySelector("#game__field");
console.log(appBullet)
const towerPlayer = document.querySelector(".tower");
function shoot() {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
    bullet.style.top = towerPlayer.offsetTop + "px";
    bullet.style.left = towerPlayer.offsetLeft + (player.offsetWidth / 2) + "px";
    appBullet.appendChild(bullet);
}