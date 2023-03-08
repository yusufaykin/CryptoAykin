let baslik = document.title;
window.onblur = () =>
document.title = "Geri gel :(";
window.onfocus = () =>
document.title = baslik;