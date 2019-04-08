<template>
    <div class="page album-page">
        <header-with-back></header-with-back>
        <div class="horizontal-divider" :class="$mq"></div>
        <div class="album-content" :class="$mq">
            <div class="album-name" :class="$mq">
                {{album.title.rendered}}
            </div>
            <div class="photographer" :class="$mq">Ph:
                <span class="photographer" :class="$mq">
            {{album.photographer}}
            </span>
            </div>
            <div class="album-photo" :class="$mq">
                <div v-for="photo in album.photoes"
                     :class="$mq"
                     :ref="photo.ID">
                    <img :src="photo.guid">
                </div>
            </div>
        </div>

        <div class="arrow-box" :class="$mq">
            <div class="arrow-around arrow-rotate" @click="prev">
                <div class="div-around"></div>
                <img class="arrow arrow-left" src="/wp-content/themes/foto-theme/src/assets/img/arrow-left.png" alt="Буектное бюро">
            </div>
            <router-link v-if="postId" :to="'/post/' + postId">
                <button :class="$mq">Смотреть статью</button>
            </router-link>
            <div class="arrow-around arrow-rotate" @click="next">
                <img class="arrow arrow-right" src="/wp-content/themes/foto-theme/src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="div-around"></div>
            </div>
        </div>
        <div class="footer-img" :class="$mq">
            <img src="/wp-content/themes/foto-theme/src/assets/img/preview.png" :class="$mq" alt="Буектное бюро">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                album: {
                    title: {
                        rendered: ''
                    },
                    photographer: '',
                    photoes: []
                },
                postId: ''
            };
        },
        methods: {
            prev: function () {

            },
            next: function () {

            },
            setAlbum: function () {
                this.album = window.albums.filter(album => {
                    return album.id == this.$route.params.albumId;
                })[0];

                this.postId = this.album.post_id;

                setTimeout(()=> {
                    _.each(this.album.photoes, photo => {
                        let photoDiv = this.$refs[photo['ID']][0];

                        if (photoDiv.clientWidth > photoDiv.clientHeight) {
                            photoDiv.classList.add('horizontal-photo');
                        } else {
                            photoDiv.classList.add('photo-item');
                        }
                    });
                }, 0);
            },
            initGlobalVars: function () {
                let checkIsUploaded = setInterval(() => {
                    if (window.albums && window.catalogs && window.albums.length && window.catalogs.length) {
                        clearInterval(checkIsUploaded);
                        this.setAlbum();
                    }
                }, 20);
            }
        },
        watch: {
            '$route' (to, from) {
                this.initGlobalVars();
            }
        },
        mounted() {
            this.initGlobalVars();
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .album-page {
        background-color: #fcfcfc;
        z-index: 10;
        height: auto;
        position: absolute;
        top: 0;
    }
    .author-photo {
        font-size: 0.8vw;
        text-align: left;
        color: #dfcfc0;
        transform: rotate(-90deg);
        width: 5%;
        white-space: nowrap;
        margin-bottom: 1%;
        &.mobile {
            font-size: 2vh;
        }
    }
    .album-content {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 77%;
        &.mobile {
            width: 90%;
            margin-top: 3vh;
        }
    }
    .album-name {
        font-family: 'Merriweather-Regular';
        font-size: 1.1vw;
        color: #333333;
        margin: 3vh;
        &.mobile {
            font-size: 2.2vh;
            line-height: 1.5;
        }
    }
    .album-photo {
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .photo-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        width: 43%;
        border: 15px solid #fcfcfc;
        outline: 1px solid #dacfb1;
        margin: 1%;
        &.mobile {
            width: 100%;
            border: 10px solid #fcfcfc;
            margin-bottom: 2vh;
        }
    }
    .horizontal-photo {
        width: 96%;
        border: 1px solid #dacfb1;
        padding: 1.5%;
        margin: 1%;
    }
    .photo-item img, .horizontal-photo img {
        width: 100%;
    }
    .photographer {
        color: #333333;
        margin-top: 1vh;
        margin-bottom: 3vh;
        font-family: "ArnoProCaption";
        font-size: 1vw;
        &.mobile {
            font-size: 2vh;
        }
    }
    .horizontal-divider {
        display: none;
        &.mobile {
            display: block;
            width: 111%;
            margin-top: 8vh;
            margin-bottom: 0;
            height: 1px;
            background-color: #dacfb1;
        }
    }
    .arrow-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 82%;
        height: 40vh;
        &.mobile {
            width: 90%;
        }
    }
    button {
        width: 220px;
        height: 80px;
        font-family: $blog-p;
        font-size: 0.9vw;
        border: 1px solid #dacfb1;
        &.mobile {
            width: 160px;
            height: 60px;
            font-size: 2.2vh;
        }
    }
    .footer-img {
        width: 82%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #dacfb1;
        &.mobile {
            width: 90%;
        }
    }
    .footer-img img {
        width: 18%;
        margin: 8vh;
        &.mobile {
            width: 35%;
            margin: 2vh;
        }
    }
</style>