<template>
    <div class="page blog-page">
        <headerWidthBack></headerWidthBack>
            <h3 class="h3-border-bottom blog-h3" :class="$mq">НАШИ ИСТОРИИ И ДРУГИЕ СТАТЬИ</h3>
            <div class="gallery" id="gallery-blog">
                <div @click="onAlbumClick(photo.id)" class="image"
                     :class="$mq"
                     v-for="(photo, index) in data.portfolioSlides[currentNumber].photos">
                    <img @mouseover="mouseOnPhoto(index)"
                         @mouseleave="mouseLeavePhoto(index)"
                         :src="photo.src"
                         :ref="index"
                         class="fadeImg">
                    <div class="catalog-name" :class="$mq">{{photo.catalog}}</div>
                    <div class="photo-name" :class="$mq">{{photo.name}}</div>
                </div>
            </div>
        <div class="text-element current-photo">
            <span class="pagination-slide">53</span>/53
        </div>
        <div class="slide_line" :class="$mq">
            <span class="slide_line_span">01</span>
            <div class="slide-progress"></div>
            <span class="slide_line_span" >07</span>
        </div>
        <div class="scroll-element" :class="$mq">
            <img src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
            <div class="text-element">SCROLL</div>
        </div>
        <info v-show="showInfo"></info>
        <album v-show="showAlbum"></album>
        <post></post>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
                data: {
                    portfolioSlides: [
                        {
                            header: {
                                caption: 'Весь каталог наших работ',
                                photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider1.jpg',
                                backgroundText: 'Portfolio'
                            },
                            photos: [
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/1.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h1.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Иван & Даша. Балаклавский Эдем',
                                    id: 'IvanDashaBalaklava'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/2.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h2.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Коктебель',
                                    id: 'DimaVikaKoktebel'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/3.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h3.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Осеннее вдохновение',
                                    id: 'DimaVikaOsen'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/4.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h4.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Съемка для каталога свадебного салона  Marylin. Отель Превысоковъ',
                                    id: 'Previsokov'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/5.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h5.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Ольга. Оттенки багряного',
                                    id: 'OlgaOttenkiBagryanogo'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/6.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h6.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Анастасия. Silk & gold',
                                    id: 'AnastasiyaSilkAndGold'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/7.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h7.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Валерий & Надежда. Новый Свет',
                                    id: 'ValeraNadiaNoviiSvet'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/8.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h8.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Александр & Валерия. Алые паруса',
                                    id: 'SashaValeraParusa'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/9.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h9.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Александра. Английский сад',
                                    id: 'DimaSashaEnglandSad'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/10.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h10.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Композиции. Подборка',
                                    id: 'CompoziciiPodborka'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/11.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h11.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Лебединая песнь',
                                    id: 'LebedinayaPesnya'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/12.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h12.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Слава. Snowball'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/13.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h13.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Дарья. Партенит'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/14.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h14.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дарья & Юрий. Артиллерийская бухта'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/15.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h15.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Андрей & Мила. Форос'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/16.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h16.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'День Рождения. Южная терраса'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/17.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h17.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Закрытая презентация тихих вин «АртВин»'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/18.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h18.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Запуск кометы. Морпорт'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/19.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h19.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Даниил & Анна. Свадьба в яблоневом саду'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/20.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h20.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Николай & Снежана. Долина Гор'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/21.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h21.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Олег & Евгения. Цитрусовая свадьба'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/22.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h22.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Севастопольский бал'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/23.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h23.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Открытие салона «Галерея интерьера»'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/24.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h24.jpg',
                                    catalog: 'РИТУАЛЬНАЯ ФЛОРИСТИКА',
                                    name: '???'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/25.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h25.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Мария. Bohemian morning'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/26.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h26.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Наталья. Sweet peony'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/27.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h27.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Диляна. Wild & gentle.'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/28.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h28.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Гостевой дом УЗУНДЖА. Новогоднее оформление'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/29.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h29.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  '???'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/30.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h30.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Гостевой дом «VoyageSV». Новогоднее оформление'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/31.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h31.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Вадим & Анастасия'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/32.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h32.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Владимир & Олеся. Крымская Ривьера'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/33.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h33.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Дмитрий & Яна. Воронцовский дворец'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/34.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h34.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Дарья & Даниил. Кружево'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/35.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h35.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Иван & Юлия. Power of love'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/36.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h36.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Алексей & Ольга. Где ты, там я'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/37.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h37.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Букет невесты. Подборка'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/38.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h38.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Букеты. Подборка'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/39.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h39.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Татьяна. Вместе навсегда'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/40.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h40.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Антон & Елена. Одной дорогой'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/41.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h41.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Павел & Юлия. Ялта'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/42.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h42.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Константин & Юлия. Меллас'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/43.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h43.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Алексей & Яна. Александрия'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/44.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h44.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Сергей & Мария. Hidden Garden'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/45.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h45.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Сергей & Валерия. Полотна гобелена'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/46.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h46.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Евгений & Наталья. Юсуповский дворец'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/47.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h47.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Алена & Виталий. Озеро грез'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/48.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h48.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Игорь & Татьяна. Балаклава'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/49.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h49.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Aquamarine Resort & SPA'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/50.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h50.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Sevastopol Hotel & SPA'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/51.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h51.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Открытие «Russian Beauty Academy» копия'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/52.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h52.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Рождественская и новогодняя флористика'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/53.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h53.jpg',
                                    catalog: 'МАСТЕР-КЛАССЫ',
                                    name:  '???'
                                }

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                        {
                            header: {
                                caption: 'Букеты и композиции',
                                photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider2.jpg',
                                backgroundText: 'Flowers'
                            },
                            photos: [
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/4.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h4.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Съемка для каталога свадебного салона  Marylin. Отель Превысоковъ'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/5.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h5.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Ольга. Оттенки багряного'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/6.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h6.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Анастасия. Silk & gold'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/10.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h10.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Композиции. Подборка'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/11.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h11.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Лебединая песнь'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/12.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h12.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Слава. Snowball'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/25.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h25.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Мария. Bohemian morning'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/26.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h26.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Наталья. Sweet peony'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/27.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h27.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Диляна. Wild & gentle.'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/37.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h37.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Букет невесты. Подборка'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/38.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h38.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Букеты. Подборка'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/39.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h39.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Татьяна. Вместе навсегда'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/51.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h51.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Рождественская и новогодняя флористика'
                                }

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                        {
                            header: {
                                caption: 'Свадебная флористика и декор',
                                photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider3.jpg',
                                backgroundText: 'Weddings'
                            },
                            photos: [
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/1.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h1.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Иван & Даша. Балаклавский Эдем'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/2.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h2.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Коктебель'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/3.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h3.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Осеннее вдохновение'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/7.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h7.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Валерий & Надежда. Новый Свет'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/8.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h8.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Александр & Валерия. Алые паруса'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/9.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h9.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Александра. Английский сад'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/13.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h13.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Дарья. Партенит'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/14.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h14.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дарья & Юрий. Артиллерийская бухта'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/15.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h15.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Андрей & Мила. Форос'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/19.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h19.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Даниил & Анна. Свадьба в яблоневом саду'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/20.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h20.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Николай & Снежана. Долина Гор'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/21.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h21.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Олег & Евгения. Цитрусовая свадьба'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/31.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h31.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Вадим & Анастасия'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/32.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h32.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Владимир & Олеся. Крымская Ривьера'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/33.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h33.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Дмитрий & Яна. Воронцовский дворец'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/34.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h34.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Дарья & Даниил. Кружево'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/35.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h35.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Иван & Юлия. Power of love'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/36.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h36.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Алексей & Ольга. Где ты, там я'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/40.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h40.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Антон & Елена. Одной дорогой'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/41.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h41.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Павел & Юлия. Ялта'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/42.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h42.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Константин & Юлия. Меллас'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/43.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h43.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Алексей & Яна. Александрия'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/44.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h44.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Сергей & Мария. Hidden Garden'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/45.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h45.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Сергей & Валерия. Полотна гобелена'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/46.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h46.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Евгений & Наталья. Юсуповский дворец'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/47.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h47.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Алена & Виталий. Озеро грез'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/48.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h48.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Игорь & Татьяна. Балаклава'
                                },

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                        {
                            header: {
                                caption: 'Оформление мероприятий',
                                photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider4.jpg',
                                backgroundText: 'Events'
                            },
                            photos: [
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/16.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h16.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'День Рождения. Южная терраса'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/17.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h17.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Закрытая презентация тихих вин «АртВин»'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/18.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h18.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Запуск кометы. Морпорт'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/22.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h22.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Севастопольский бал'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/23.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h23.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Открытие салона «Галерея интерьера»'
                                },
                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                        {
                            header: {
                                caption: 'Отели и корпоративные клиенты',
                                photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider5.jpg',
                                backgroundText: 'Corporate'
                            },
                            photos: [
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/28.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h28.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Гостевой дом УЗУНДЖА. Новогоднее оформление'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/29.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h29.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  '???'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/30.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h30.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Гостевой дом «VoyageSV». Новогоднее оформление'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/49.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h49.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Aquamarine Resort & SPA'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/50.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h50.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Sevastopol Hotel & SPA'
                                },
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/51.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h51.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Открытие «Russian Beauty Academy» копия'
                                },

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                        {
                            header: {
                                caption: 'Ритуальная флористика',
                                photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider6.jpg',
                                backgroundText: 'Funeral'
                            },
                            photos: [
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/24.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h24.jpg',
                                    catalog: 'РИТУАЛЬНАЯ ФЛОРИСТИКА',
                                    name: '???'
                                },

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                        {
                            header: {
                                caption: 'Мастер-классы',
                                photo: '/wp-content/themes/foto-theme/src/assets/img/portfolio-slider6.jpg',
                                backgroundText: 'Workshops'
                            },
                            photos: [
                                {
                                    src: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/51.jpg',
                                    hoverSrc: '/wp-content/themes/foto-theme/src/assets/img/portfolio-gallery/h51.jpg',
                                    catalog: 'МАСТЕР-КЛАССЫ',
                                    name:  '???'
                                }

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                    ],
                },
                currentNumber: 0,
                timer: null,
                showInfo: false,
                showAlbum: false,
            }
        },
        methods: {
            mouseOnPhoto: function (index) {
                this.$refs[index][0].src = this.data.portfolioSlides[this.currentNumber].photos[index].hoverSrc;
            },
            mouseLeavePhoto: function (index) {
                this.$refs[index][0].src = this.data.portfolioSlides[this.currentNumber].photos[index].src;
            },
            next: function () {
                if (this.currentNumber < this.data.portfolioSlides.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }
                EventBus.$emit('SLIDE_CHANGED', this.currentNumber);
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.data.portfolioSlides.length - 1
                }
                EventBus.$emit('SLIDE_CHANGED', this.currentNumber);
            },
            onAlbumClick: function (album) {
                EventBus.$emit('ALBUM_CLICKED', album);
                this.showAlbum = true;
            }
        },
        computed: {
            strokeWidth: function () {
                let oneStep = 600 / this.data.slides.length;
                return oneStep * (this.currentNumber + 1)
            },
            infoType: function () {
                switch (this.currentNumber) {
                    case 0: return 'portfolio';
                        break;
                    case 1: return 'flowers';
                        break;
                }
            }
        },
        mounted() {
            EventBus.$on('close', () => {
                this.showInfo = false;
            })
        }
    }

</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .blog-page {
        height: auto;
    }

    .image {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-size: contain;
        cursor: pointer;
        width: 32%;
        height: auto;
        &.mobile {
            width: 48%;
        }

    }
    .image img {
        width: 100%;
        margin: 1%;

    }
    .image:hover .fadeImg {
        animation: fadeImg 1s ease;
    }
    @keyframes fadeImg {
        0% {
            opacity: 1;
        }
        5% {
            opacity: 0.3;
        }

        100% {
            opacity: 1;
        }
    }
    .gallery {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        height: auto;
        width: 82%;
    }
    .catalog-name {
        text-transform: uppercase;
        font-family: 'HelveticaNeueCyr-Roman';
        font-size: 0.85vw;
        letter-spacing: 1px;
        color: #666666;
        line-height: 2.5;
        &.mobile {
            line-height: 1.5;
            width: 90%;
            margin-bottom: 1vh;
            margin-top: 1vh;
            font-size: 1.2vh;
        }
    }
    .photo-name {
        font-family: 'Merriweather-Regular';
        font-size: 1.12vw;
        color: #333333;
        line-height: 1.5;
        margin-block-end: 1.5em;
        width: 90%;
        letter-spacing: 1px;
        &.mobile {
            font-size: 1.5vh;
        }
    }
    .blog-h3 {
        border-bottom: 1px solid;
        padding: 5vh;
        margin-top: 11vh;
        margin-bottom: 10vh;
        width: 76%;
        text-align: center;
        &.mobile {
            margin-top: 45vh;
        }
    }
    .h3-border-bottom {
        border-bottom: 1px solid #dacfb1;
    }
    .current-photo {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
    .slide_line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        position: absolute;
        left: 4%;
        top: 50vh;
        width: 20px;
        &.mobile {
            display: none;
        }
    }
    .slide-progress {
        z-index: 1;
        width: 1px;
        background-color: #333333;
        height: 72%;
    }
    .slide_line_span {
        font-family: $font-element;
        color: #000000;
        font-size: 1.8vh;
        line-height: 1.5;
        padding: 5px;
    }
    .scroll-element {
        width: 9%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: rotate(90deg);
        position: absolute;
        right: 0;
        bottom: 10vh;
        height: max-content;
        &.mobile {
            display: none;
        }
    }
    .scroll-element img {
        margin-bottom: 4px;
    }
    .scroll-element .text-element {
        color: #000000;
    }

</style>