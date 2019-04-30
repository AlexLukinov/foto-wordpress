import Vue from 'vue'

export default Vue.mixin({
    data() {
        return {
            blocksCoordinates: [],
            currentBlockNumber: 1,
            blocksCount: 0,
            blockClassName: '',
            progress: 1,
            progressLineHeight: 0
        };
    },
    methods: {
        onScroll: function () {
            let positionY = window.scrollY;
            let currentBlockIndex = undefined;

            _.each(this.blocksCoordinates, (coordinate, index) => {
                if (positionY < coordinate && currentBlockIndex === undefined) {
                    currentBlockIndex = index;
                }
            });

            if (this.currentBlockNumber !== currentBlockIndex + 1) {
                this.progress = currentBlockIndex + 1;
                document.getElementById('filled-line').setAttribute('style', 'height:' + this.progressLineHeight + 'px');
            }

            this.currentBlockNumber = currentBlockIndex + 1;
        },
        scrollToTop: function () {
            window.scrollTo(0, 0);
            this.currentBlockNumber = 1;
        },
        setBlocksCoordinates: function () {
            let checkIsBlocksSetted = setInterval(() => {
                let blocks = document.getElementsByClassName(this.blockClassName);

                if (blocks && blocks.length) {
                    clearInterval(checkIsBlocksSetted);

                    _.each(blocks, block => {
                        this.blocksCoordinates.push(block.offsetTop + block.offsetHeight);
                    });

                    this.blocksCount = blocks.length;
                }

            }, 100);
        }
    },
    computed: {
        fillStyle() {
            return `height: ${this.progress * this.progressLineHeight / this.blocksCount }px`;
        },
    },
    watch: {
        '$route' (to, from) {
            this.setBlocksCoordinates();
        }
    },
    mounted() {
        this.setBlocksCoordinates();
        EventBus.$on('IS_SCROLLED_TO_BOTTOM', isAtTheBottom => {this.isAtTheBottom = isAtTheBottom});

        this.progress = this.currentBlockNumber;

        let initProgressHeight = setInterval(() => {
            if (document.getElementById('filled-line')) {
                this.progressLineHeight = document.getElementById('filled-line').offsetHeight;
                clearInterval(initProgressHeight);
            }
        }, 100);
    }
});