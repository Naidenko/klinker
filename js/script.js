var navMain = document.querySelector('.main__dropdown'),
    navToggle = document.querySelector('.header__button'),
    header = document.querySelector('.page-header__wrapper'),
    backdrop = document.querySelector('.backdrop'),
    catalog = document.querySelector('.catalog'),
    submenuCatalog = document.querySelector('.submenu--catalog'),
    back = document.querySelectorAll('.submenu__button'),
    popupButton = document.querySelectorAll('.button__toggle'),
    popup = document.querySelector('.popup'),
    closePopup = document.querySelector('.popup__close'),
    searchButton = document.querySelector('.search__button'),
    searchField = document.querySelector('.search__field'),
    service = document.querySelector('.service'),
    submenuService = document.querySelector('.submenu--service'),
    inputNumber = document.querySelector('.item__buy'),
    inputMinus = document.querySelector('.item__minus'),
    inputPlus = document.querySelector('.item__plus'),
    quantityNumber = 1;

navToggle.addEventListener('click', function () {
    navMain.classList.remove('window--closed');
    header.classList.remove('nav--closed');
    backdrop.classList.remove('window--closed');
});

searchButton.addEventListener('click', function(){
    searchField.classList.toggle('window--closed');
});

backdrop.addEventListener('click', function () {
    backdrop.classList.add('window--closed');
    if(!navMain.classList.contains('window--closed')) {
        navMain.classList.add('window--closed');
        header.classList.add('nav--closed');
    } else if(!submenuCatalog.classList.contains('window--closed')) {
        submenuCatalog.classList.add('window--closed');
    } else if(!popup.classList.contains('window--closed')) {
        popup.classList.add('window--closed');
    }  else if(!submenuService.classList.contains('window--closed')) {
        submenuService.classList.add('window--closed');
    }

});

catalog.addEventListener('click', function() {
    navMain.classList.add('window--closed');
    submenuCatalog.classList.remove('window--closed');
    header.classList.add('nav--closed');
});

service.addEventListener('click', function() {
    navMain.classList.add('window--closed');
    submenuService.classList.toggle('window--closed');
    header.classList.add('nav--closed');
    backdrop.classList.remove('window--closed');
});


for (let i = 0; i < back.length; i++) {
    back[i].addEventListener('click', function(){
        if(!submenuCatalog.classList.contains('window--closed')) {
            submenuCatalog.classList.add('window--closed');
        } else if(!submenuService.classList.contains('window--closed')) {
            submenuService.classList.add('window--closed');
        }
        navMain.classList.remove('window--closed');
    });
}

for (let i = 0; i < popupButton.length; i++) {
    popupButton[i].addEventListener('click', function(){
        popup.classList.remove('window--closed');
        backdrop.classList.remove('window--closed');
    });
}

if(closePopup) {
    closePopup.addEventListener('click', function(){
        popup.classList.add('window--closed');
        backdrop.classList.add('window--closed');
    });
}

if(inputPlus && inputMinus) {
    inputPlus.addEventListener('click', function () {
        quantityNumber++;
        inputNumber.value = quantityNumber;
    });

    inputMinus.addEventListener('click', function () {
        quantityNumber--;
        inputNumber.value = quantityNumber;
    });
}



