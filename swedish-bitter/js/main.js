$(function(){
  
});
function openRev(evt, cityName) {
    var i, tabs__content, tablinks;
    tabs__content = document.getElementsByClassName("tabs__content");
    for (i = 0; i < tabs__content.length; i++) {
        tabs__content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//button for .medicine
let item = document.getElementsByClassName('medicine__inner-list-item');
let dot = document.getElementsByClassName('medicine__inner-image-human');
for (let i = 0; i < item.length; i++) {
    item[i].onclick = function() {
        if (document.body.clientWidth < 480) {
            return false;
        }
        dot[0].className = 'medicine__inner-image-human';
        dot[0].classList.add('item' + i);
        for (let i = 0; i < item.length; i++) {
            item[i].className = 'medicine__inner-list-item';
        }
        this.classList.add('active');
    }
}

