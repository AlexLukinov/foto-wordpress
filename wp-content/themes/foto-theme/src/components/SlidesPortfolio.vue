<template>
    <div class="slides-portfolio">
        <div class="page-slides" :class="$mq">
            <h3 class="portfolio-caption" :class="$mq">{{ data.portfolioSlides[currentNumber].header.caption }}</h3>
            <div class="image-slides" :class="$mq">
                <transition class="slider-body" name="myanim" mode="out-in">
                    <img :src="data.portfolioSlides[currentNumber].header.photo" :key="'headPhoto' + currentNumber">
                </transition>
            </div>
            <div class="arrow-box" :class="$mq">
                <div class="arrow-around arrow-rotate" @click="prev">
                    <div class="div-around"></div>
                    <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Буектное бюро">
                </div>
                <div class="arrow-around arrow-rotate" @click="next">
                    <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                    <div class="div-around"></div>
                </div>
            </div>
            <div class="portfolio-footer" :class="$mq">
                <div class="text-element" :class="$mq">
                    <span class="pagination-slide">0{{currentNumber+1}}</span>/07
                </div>
                <div class="info text-element"
                     :class="$mq"
                     id="show-info"
                     @click="showInfo = true"
                >INFO</div>
            </div>
            <div class="see-album" :class="$mq">
                <button class="text-element"
                        @click="scrollMeTo('porto')"
                        :class="$mq">
                    СМОТРЕТЬ<br>АЛЬБОМ
                </button>
                <div class="see-album-line" :class="$mq">
                    <div class="see-album-circle"></div>
                    <div class="album-line" :class="$mq"></div>
                    <div class="see-album-circle"></div>
                </div>
            </div>
            <h3 class="portfolio-h3 h3-border-bottom"
                ref="porto"
                :class="$mq">{{ data.portfolioSlides[currentNumber].header.caption }}</h3>
            <div class="gallery" id="gallery-portfolio">
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
        </div>
        <div class="arrow-box arrow-box-footer" :class="$mq">
            <div class="arrow-around arrow-rotate" @click="prev">
                <div class="div-around"></div>
                <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Буектное бюро">
            </div>
            <div class="text-element current-photo">
                <span class="pagination-slide">53</span>/53
            </div>
            <div class="arrow-around arrow-rotate" @click="next">
                <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="div-around"></div>
            </div>
        </div>

        <info v-show="showInfo" class="animated fadeIn"></info>
        <album v-show="showAlbum"></album>
    </div>
</template>
<script>
    export default {
        data() {
            return {
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
            },
            scrollMeTo(refName) {
                var element = this.$refs[refName];
                var top = element.offsetTop;

                window.scrollTo(0, top);
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
            });

            console.log(window.albums);
        }
    }

</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .slides-portfolio {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .page-slides {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 90%;
        height: auto;
        margin-top: 10vh;
        align-items: center;
        &.mobile {
            margin-top: 3vh;
        }
    }
    .portfolio-caption {
        font-family: HelveticaNeueCyr-Light;
        font-size: 0.9vw;
        color: #333333;
        letter-spacing: 1px;
        &.mobile {
            width: 60%;
            font-size: 2.5vh;
            text-align: center;
        }
    }
    span.slides_text {
        font-family: 'MinionVariableConcept';
        font-size: 14.5vw;
        color: #dacfb1;
        &.mobile {
            font-size: 13vh;

        }
    }
    .image-slides {
        width: 30%;
        height: 65vh;
        overflow: hidden;
        margin-top: 1vh;
        transition: all 0.3s ease;
        &.mobile {
            width: 50%;
            height: 40vh;
            margin-top: 12vh;
        }
    }
    .image-slides img {
        width: 100%;
    }
    .slide-container {
        position: absolute;
        top: 35vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        z-index: -1;
        &.mobile {
            top: 44vh;
        }
    }
    .slide-container::before {
        content: '';
        transform: translateX(-50%);
    }
    .arrow-box {
        position: absolute;
        top: 43%;
        right: 5%;
        display: flex;
        justify-content: space-between;
        width: 90%;
        &.mobile {
            top: 72vh;
        }
    }
    .myanim-enter-active {
        animation: myanim cubic-bezier(.8,.8,1,1) 2s;
    }
    .myanim-leave-active {
        animation: myanimout cubic-bezier(.8,.8,1,1) 2s;
    }
    a.slide-a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 250px;
        height: 60px;
        font-family: $font-h2;
        font-size: 16px;
        border: 1px solid white;
        &.tablet, &.mobile {
            width: 160px;
            height: 40px;
        }
    }
    @keyframes myanim {
        0% {
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            transform: scale(1.2);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: scale(1);

        }
    }
    @keyframes myanimout {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: scale(1);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            transform: scale(1.2);
        }
    }
    @keyframes text-anim {
       0% {

       }

    }
    .pageanim-enter-active {
        animation: pageanim ease 1s;
    }
    .pageanim-leave-active {
        animation: pageanimout ease 1s;
    }
    .portfolio-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 20vh;
        &.mobile {
            flex-direction: column-reverse;
            width: 20%;
            height: 50vh;
            position: absolute;
            top: 25vh;
        }
    }
    .see-album {
        position: absolute;
        top: 77vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 20%;
        height: auto;
        &.mobile {
            top: 80vh;
        }
    }
   .see-album button {
        width: 140px;
        height: 140px;
        border-radius: 100%;
        border: 1px solid #dacfb1;
       font-size: 14px;
       &.mobile {
           width: 100px;
           height: 100px;
           font-size: 11px;
           line-height: 1.4;
       }
    }
    .see-album-line {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 5px;
        margin-top: -20px;
        &.mobile {
            margin-top: 5vh;
        }
    }
    .album-line {
        width: 1px;
        height: 100px;
        background-color: #333333;
        &.mobile {
            height: 60px;
        }
    }
    .see-album-circle {
        width: 5px;
        height: 5px;
        border: 1px solid #333333;
        background-color: transparent;
        border-radius: 100%;
    }
    .pagination-slide, .current-photo .pagination-slide {
        color: #997a5f;
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
        width: 92%;
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
    .portfolio-h3 {
        border-bottom: 1px solid;
        padding: 10vh;
        margin-top: 11vh;
        margin-bottom: 10vh;
        width: 80%;
        text-align: center;
        text-transform: uppercase;
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
    .arrow-box-footer {
        position: static;
        width: 30%;
    }
</style>