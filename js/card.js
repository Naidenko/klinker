Vue.filter('numberFormat', function(value) {
    value = Number(value);
    return (value).toFixed(0).replace(/\d(?=(\d{3}))/g, '$& ');
});

Vue.component('slider-item', {
    props: ['card'],
    template:
        `<li class="slider__item" :style="'background-image:' + card.backgroundImage"> 
            <h3 class="slider__title">{{card.title}}</h3>
            <p class="slider__text">{{card.text}}</p>
            <a href="catalog.html" class="slider__button">Посмотреть коллекцию</a>
        </li>`
});
Vue.component('category-item', {
    props: ['card'],
    template:
        `<a v-bind:href="card.href" class="category__item" :style="'background-image:' + card.backgroundImage"> 
            <h3 class="category__title">{{card.title}}</h3>
        </a>`
});

Vue.component('catalog-item', {
    props: ['card'],
    template:
        `<a href="item.html" class="hit__item" >
            <div class="hit__image" v-bind:style="{backgroundImage: card.backgroundImage, width: card.width, height: card.height}">
                
                <button class="card__mark card__new" v-if="card.isNew">Новинка</button>
                <button class="card__mark card__action" v-if="card.isAction">Акция</button>
                <button class="card__mark card__advice" v-if="card.isAdvice">Советуем</button>
                <button class="card__mark card__hit" v-if="card.isHit">Хит</button>
            </div>
           
            <div class="hit__text">
                <h3 class="hit__title">{{card.title}}</h3>
                <span class="hit__price">от {{card.price | numberFormat}} <span class="hit__price--sign">₽/шт.</span></span>
            </div>    
        </a>`
});


var cards = new Vue({
    el: '#cards',
    data: {
        sliderItems: [
            {
                title: 'Керамическая черепица',
                text: 'Европейская черепица по доступным ценам',
                backgroundImage: 'url("img/slider-item-1.jpg")'
            },
            {
                title: 'Облицовочный кирпич',
                text: 'Более 300 цветов и фактур кирпича',
                backgroundImage: 'url("img/slider-item-2.jpg")'
            },
            {
                title: 'Немецкий клинкер',
                text: 'Большой выбор немецких товаров',
                backgroundImage: 'url("img/slider-item-3.jpg")'
            },
            {
                title: 'Немецкая плитка',
                text: 'Клинкерная фасадная плитка',
                backgroundImage: 'url("img/slider-item-4.jpg")'
            }
        ],
        categoryItems: [
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-1.jpg")',
                title: 'Ступени и напольная плитка'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-2.jpg")',
                title: 'Фасадная клинкерная плитка'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-3.jpg")',
                title: 'Клинкерная брусчатка'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-4.jpg")',
                title: 'Керамические блоки'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-5.jpg")',
                title: 'Облицовочный кирпич'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-6.webp")',
                title: 'Фасадные термопанели'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-7.jpg")',
                title: 'Сланец'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-8.jpg")',
                title: 'Вентилируемые фасады'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-9.jpg")',
                title: 'Террасный керамогранит'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-10.jpg")',
                title: 'Бордюры тротуарные'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-11.jpg")',
                title: 'Фасадный декор'
            },
            {
                href: 'catalog.html',
                backgroundImage: 'url("img/category-item-12.jpg")',
                title: 'Фасадные теплоизоляционные системы'
            }
        ],
        catalogItems: [
            {
                backgroundImage: 'url("img/catalog-item-1.jpg")',
                title: 'Затирка для швов Weber Rapid Grout',
                price: 1621,
                isNew: true,
                isAdvice: true
            },
            {
                backgroundImage: 'url("img/catalog-item-2.png")',
                title: 'Цементно-песчаная (минеральная) черепица BRAAS - Таунус - Ангоб графит',
                price: 500,
                isHit: true
            },
            {
                backgroundImage: 'url("img/catalog-item-3.jpg")',
                title: 'Клинкерная плитка для вентилируемого фасада (с затиркой шва) Ströeher KERAVETTE unglazed',
                price: 2585,
                isHit: true,
                isAction: true
            },
            {
                backgroundImage: 'url("img/catalog-item-4.jpg")',
                title: 'Клинкерные ступени и напольная плитка STRÖHER KERAPLATTE AERA T - 712 MARONE',
                price: 379,
                isAction: true,
                isAdvice: true
            },
            {
                backgroundImage: 'url("img/catalog-item-5.jpg")',
                title: 'Клинкерная плитка STRÖHER KERAVETTE - 336 METALLIC SCHWARZ',
                price: 2424,
                isHit: true
            },
            {
                backgroundImage: 'url("img/catalog-item-6.jpg")',
                title: 'Тротуарная плитка ВЫБОР - Антик',
                price: 1711,
                isAction: true
            },
            {
                backgroundImage: 'url("img/catalog-item-7.jpg")',
                title: 'Цветная затирка для швов Quick-mix - FM',
                price: 1216,
                isNew: true
            },
            {
                backgroundImage: 'url("img/catalog-item-8.png")',
                title: 'Облицовочный кирпич RECKE BRICKEREI - 5-32-00-2-00 1NF',
                price: 45,
                isHit: true
            },
            {
                backgroundImage: 'url("img/catalog-item-9.jpg")',
                title: 'Керамическая черепица Tondach - Rumba Natural Red',
                price: 1227,
                isHit: true,
                isAdvice: true
            }
        ],
        tileItems: [
            {
                backgroundImage: 'url("img/tile-item-1.jpg")',
                title: 'Клинкерная плитка STRÖHER RIEGEL 50',
                price: 2400,
                isAdvice: true
            },
            {
                backgroundImage: 'url("img/tile-item-2.jpg")',
                title: 'Клинкерная плитка STRÖHER ZEITLOS',
                price: 4500
            },
            {
                backgroundImage: 'url("img/tile-item-3.jpg")',
                title: 'Клинкерная плитка Roben',
                price: 2833,
                isAction: true
            },
            {
                backgroundImage: 'url("img/tile-item-4.jpg")',
                title: 'Клинкерная плитка Roben',
                price: 3250,
                isAction: true
            },
            {
                backgroundImage: 'url("img/tile-item-5.jpg")',
                title: 'Плитка STRÖHER KERABIG',
                price: 4380,
                isHit: true
            },
            {
                backgroundImage: 'url("img/tile-item-6.jpg")',
                title: 'Клинкерная плитка Stroeher Kontur EG',
                price: 4950
            },
            {
                backgroundImage: 'url("img/tile-item-7.jpg")',
                title: 'Клинкерная плитка STRÖHER ZEITLOS',
                price: 2790,
                isHit: true
            },
            {
                backgroundImage: 'url("img/tile-item-8.jpg")',
                title: 'Клинкерная плитка STRÖHER KERAVETTE',
                price: 5345
            },
            {
                backgroundImage: 'url("img/tile-item-9.jpg")',
                title: 'Клинкерная плитка STRÖHER KERAVETTE SHINE',
                price: 2250,
                isHit: true
            },
            {
                backgroundImage: 'url("img/tile-item-10.jpg")',
                title: 'Клинкерная плитка STRÖHER BRICK 60',
                price: 5890
            },
            {
                backgroundImage: 'url("img/tile-item-11.jpg")',
                title: 'Облицовочная плитка ADW Klinker',
                price: 1980
            },
            {
                backgroundImage: 'url("img/tile-item-12.jpg")',
                title: 'Плитка STRÖHER KERABIG',
                price: 3475,
                isAction: true,
                isAdvice: true
            }
        ]
    }
});