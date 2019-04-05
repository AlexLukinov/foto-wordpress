<template>
    <div class="page album_page">
        <headerWidthBack></headerWidthBack>
        <div class="horizontal-divider" :class="$mq"></div>
        <div class="album-content" :class="$mq">
            <div class="album_name" :class="$mq">
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
    </div>
</template>
<script>
    export default {
        data() {
            return {
                album: window.albums[0]
            };
        },
        methods: {

        },
        mounted() {
            EventBus.$on('ALBUM_CLICKED', albumId => {
                this.album = window.albums.filter(album => {
                    return album.id === albumId;
                })[0];

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
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .album_page {
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
    .album_name {
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
</style>