let popup;
function func(){
    popup= document.querySelector(".popup");
    console.log(popup);
}
function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}

func();