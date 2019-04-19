import Vue from 'vue'

export default Vue.mixin({
    data() {
        return {
            isScrolledAlready: false,
            isJustSwitched: false,
            isAtThePageTop: true,
            isAtThePageBottom: false,
            deltaY: 0,
            scrollableRoutePaths: [
                '/services/portfolio',
                '/services/bouquets',
                '/services/weddings',
                '/services/events',
                '/services/corporate',
                '/services/funerals',
                '/services/master-class',
                '/services/:service',
                // '/album',
                // '/post',
                '/blog',
                '/blog/our-stories',
                '/blog/other-articles',
                '/blog/:category',
                '/contacts',
                '/aboutUs'
            ],
            switchableRoutePaths: [
                '/',
                '/services/:service',
                '/services/portfolio',
                '/blog/:category',
                '/blog/all',
                '/aboutUs',
                '/contacts',
            ],
            currentRoutePath: '/',
            // routeIndex: 0
        };
    },
    methods: {
        onSwipeUp() {
            // if (this.currentRoutePath === '/') {
            //     if (this.routeIndex < this.routes.length - 1) {
            //         this.$router.push(this.routes[this.routeIndex + 1])
            //     }
            // }
            // // // get delta of scroll event and add it to aggregate property deltaY
            // // let delta = event.deltaY;
            // // this.deltaY += parseInt(delta);
            // //
            // // // height of screen
            // // let innerHeight = window.innerHeight;
            // //
            // // // current Y position
            // // let positionY = innerHeight + window.scrollY;
            // //
            // // // height of document
            // // let scrollHeight = document.body.scrollHeight;
            // // console.log('--------------')
            // // console.log(delta)
            // // console.log(innerHeight)
            // // console.log(positionY)
            // // console.log(scrollHeight)
            // // console.log('--------------')
            // if (this.isAtThePageBottom) {
            //     if (this.routeIndex < this.routes.length - 1) {
            //         this.$router.push(this.routes[this.routeIndex - 1])
            //     }
            // }
        },
        onSwipeDown() {
            // if (this.isAtThePageTop) {
            //     if (this.routeIndex > 0) {
            //         this.$router.push(this.routes[this.routeIndex - 1])
            //     }
            // }

            // // get delta of scroll event and add it to aggregate property deltaY
            // let delta = event.deltaY;
            // this.deltaY += parseInt(delta);
            //
            // // height of screen
            // let innerHeight = window.innerHeight;
            //
            // // current Y position
            // let positionY = innerHeight + window.scrollY;
            //
            // // height of document
            // let scrollHeight = document.body.scrollHeight;
            // console.log('--------------')
            // console.log(delta)
            // console.log(innerHeight)
            // console.log(positionY)
            // console.log(scrollHeight)
            // console.log('--------------')
        },
        setInitialScrollData() {
            this.isScrolledAlready = false;
            this.isAtThePageTop = true;
            this.isAtThePageBottom = false;
            this.deltaY = 0;

            // if just switched than set isJustSwitched to true
            // and then set to false with delay
            this.isJustSwitched = true;
            setTimeout(() => {
                this.isJustSwitched = false;
            }, 1000);
        },
        switchRoute(where, comparePathIndex) {
            let route = this.routes[this.routeIndex + where].path;

            if (route === '/services/:service') {
                route = '/services/portfolio';
            } else if (route === '/blog/:category') {
                route = '/blog/all';
            }

            if (this.isRouteCanBeSwitched(route, comparePathIndex)) {
                setTimeout(() => {
                    this.$router.push(route);
                    this.setInitialScrollData();
                }, 0);
            }
        },
        nextRoute() {
            this.switchRoute(1, (this.switchableRoutePaths.length - 1));
        },
        prevRoute() {
            this.switchRoute(-1, 0);
        },
        isRouteCanBeSwitched: function (route, comparePathIndex) {
            return this.switchableRoutePaths.includes(this.currentRoutePath) &&
                this.currentRoutePath !== this.switchableRoutePaths[comparePathIndex] &&
                this.switchableRoutePaths.includes(route)
        },
        onWheel(event) {
            // fire only if not just switched (for purposes of good UX on
            // switching components on scroll)
            if (!this.isJustSwitched) {
                // height of screen
                let innerHeight = window.innerHeight;

                // current Y position
                let positionY = innerHeight + window.scrollY;

                // height of document
                let scrollHeight = document.body.scrollHeight;

                // we at the top of the page
                let oldIsAtThePageTop = this.isAtThePageTop;

                // get delta of scroll event and add it to aggregate property deltaY
                let delta = event.deltaY;

                // if isAtThePageTop changed it's mean that we need to reset deltaY for new calculation
                // else we add positionY to deltaY for accumulate and switch component at saturation
                this.isAtThePageTop = positionY <= innerHeight;
                oldIsAtThePageTop === this.isAtThePageTop ? this.deltaY += parseInt(delta) : this.deltaY = 0;

                // we at the bottom of the page
                let oldIsAtThePageBottom = this.isAtThePageBottom;

                // if isAtThePageBottom changed it's mean that we need to reset deltaY for new calculation
                // else we add positionY to deltaY for accumulate and switch component at saturation
                this.isAtThePageBottom = positionY >= scrollHeight;
                oldIsAtThePageBottom === this.isAtThePageBottom ? this.deltaY += parseInt(delta) : this.deltaY = 0;

                // emit isAtThePageBottom to handle it in PositionSwitchOnScrollMixin
                EventBus.$emit('IS_SCROLLED_TO_BOTTOM', this.isAtThePageBottom);

                // if overall deltaY more than saturation value then switch component
                if (
                    Math.abs(this.deltaY) > 2500 &&
                    this.currentRoutePath !== '/post' &&
                    this.currentRoutePath !== '/album'
                ) {
                    // if we on scrollable page then switch if we at the bottom or at the top
                    // else switch on sign of delta
                    if (this.scrollableRoutePaths.includes(this.currentRoutePath)) {
                        if (delta < 0 && this.isAtThePageTop) {
                            this.prevRoute();
                        }

                        if (delta > 0 && this.isAtThePageBottom) {
                            this.nextRoute();
                        }
                    } else {
                        if (delta > 0 && this.routeIndex < this.routes.length - 1) {
                            this.nextRoute();
                        }

                        if (delta < 0 && this.routeIndex > 0) {
                            this.prevRoute();
                        }
                    }
                }
            }
        },
        setCurrentRoutePath: function () {
            let currentUrl = window.location.pathname;

            if (currentUrl.includes('services')) {
                this.currentRoutePath = '/services/:service';
            } else if (currentUrl.includes('album')) {
                this.currentRoutePath = '/album';
            } else if (currentUrl.includes('post')) {
                this.currentRoutePath = '/post';
            } else if (currentUrl.includes('blog')) {
                this.currentRoutePath = '/blog/:category';
            } else if (this.routes[this.routeIndex]) {
                this.currentRoutePath = this.routes[this.routeIndex].path;
            }
        },
        setRouteIndex: function () {
            let routeIndex = this.routes.findIndex(item => item.path === this.$route.path);

            if (routeIndex === -1) {
                let currentUrl = window.location.pathname;

                if (currentUrl.includes('services')) {
                    return this.routes.findIndex(item => item.path === '/services/:service')
                } else if (currentUrl.includes('blog')) {
                    return this.routes.findIndex(item => item.path === '/blog/:category')
                }
            }

            this.routeIndex = routeIndex;
        }
    },
    computed: {
        routes: function () {
            return this.$router.options.routes;
        },
        routeIndex: function () {
            let routeIndex = this.routes.findIndex(item => item.path === this.$route.path);

            if (routeIndex === -1) {
                let currentUrl = window.location.pathname;

                if (currentUrl.includes('services')) {
                    return this.routes.findIndex(item => item.path === '/services/:service')
                } else if (currentUrl.includes('blog')) {
                    return this.routes.findIndex(item => item.path === '/blog/:category')
                }
            }

            return routeIndex;
        },
    },
    watch:{
        $route (to, from){
            this.setCurrentRoutePath();
            // this.setRouteIndex();
        }
    },
    mounted() {
        this.setCurrentRoutePath();
        // this.setRouteIndex();
    }
});