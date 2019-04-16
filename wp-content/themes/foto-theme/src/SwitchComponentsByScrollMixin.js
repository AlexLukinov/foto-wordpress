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
                '/services/:service',
                '/services/portfolio',
                '/blog',
                '/contacts',
                '/aboutUs'
            ],
            switchableRoutePaths: [
                '/',
                '/services/:service',
                '/services/portfolio',
                '/aboutUs',
                '/blog',
                '/contacts',
            ],
        };
    },
    methods: {
        onSwipeUp() {
            var routes = this.$router.options.routes;
            var idx = routes.findIndex(item => item.path === this.$route.path);

            if (routes[idx].path != '/portfolio') {
                if (idx < routes.length - 1) {
                    this.$router.push(routes[idx + 1])
                }
            }
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
        onSwipeDown() {
            var routes = this.$router.options.routes;
            var idx = routes.findIndex(item => item.path === this.$route.path);

            if (routes[idx].path != '/portfolio') {
                if (idx > 0) {
                    this.$router.push(routes[idx - 1])
                }
            }
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
                // get delta of scroll event and add it to aggregate property deltaY
                let delta = event.deltaY;
                this.deltaY += parseInt(delta);

                // height of screen
                let innerHeight = window.innerHeight;

                // current Y position
                let positionY = innerHeight + window.scrollY;

                // height of document
                let scrollHeight = document.body.scrollHeight;

                // we at the top of the page
                if (positionY <= innerHeight) {
                    this.isAtThePageTop = true;
                }

                // if delta positive it's mean that we definitely not at the top of the page
                if (delta > 0) {
                    this.isAtThePageTop = false;
                }

                // we at the bottom of the page
                if (positionY >= scrollHeight) {
                    this.isAtThePageBottom = true;
                }

                // if overall deltaY more than 150px then switch component
                if (Math.abs(this.deltaY) > 250) {
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
    },
    computed: {
        routes: function () {
            return this.$router.options.routes;
        },
        routeIndex: function () {
            let routeIndex = this.routes.findIndex(item => item.path === this.$route.path);
            return routeIndex === -1 ? this.routes.findIndex(item => item.path === '/services/:service') : routeIndex;
        },
        currentRoutePath: function () {
            let currentUrl = window.location.pathname;

            if (currentUrl.includes('services')) {
                return '/services/:service';
            } else if (currentUrl.includes('album')) {
                return '/album';
            } else if (currentUrl.includes('post')) {
                return '/post';
            } else if (this.routes[this.routeIndex]) {
                return this.routes[this.routeIndex].path;
            }
        },
    },
});