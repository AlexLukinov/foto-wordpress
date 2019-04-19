import Vue from 'vue'

export default Vue.mixin({
    data() {
        return {
            blocksCoordinates: [],
            currentBlockNumber: 1,
            blocksCount: 0,
            blockClassName: ''
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

            this.currentBlockNumber = currentBlockIndex + 1;
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
    watch: {
        '$route' (to, from) {
            this.setBlocksCoordinates();
        }
    },
    mounted() {
        this.setBlocksCoordinates();
        EventBus.$on('IS_SCROLLED_TO_BOTTOM', isAtTheBottom => {this.isAtTheBottom = isAtTheBottom});
    }
});