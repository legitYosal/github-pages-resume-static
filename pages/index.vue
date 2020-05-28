<template>
<div>
        
    <div class="cool-img-bg">
        <div id="top-section-id" class="container transparent-black">
            <div class="top-border">
                <h2 class="title">یوسف سلملیان</h2>
                <p class="subtitle">من برنامه نویس هستم</p>
            </div>
        </div>
    </div>
    <div class="nav-place-holder">
    <div id="dynamic-nav-bar-id" class="dynamic-nav-bar">
        <a class="active" href="#">top</a>
        <a href="#">about</a>
        <a href="#">other</a>

        <a href="#">english</a>
        <a href="#">persian</a>
    </div>
    </div>
    <div class="container">
        this is about 
    </div>
    <div class="container">
        this is other things
    </div>
</div>
</template>

<script>

export default {
    components: {
    },
    data () {
        return {
            dynamic_nav_position: true,
        }
    },
    mounted: function() {
        if (
            process.client &&
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window && 
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ){
            this.handleObservers()
        }
    },
    methods: {
        handleObservers() {
            new IntersectionObserver(entries => {
                this.dynamic_nav_position = !this.dynamic_nav_position
                let nav_el = document.querySelector('#dynamic-nav-bar-id')
                if (this.dynamic_nav_position) {
                    nav_el.style.position = 'fixed'
                    nav_el.style.top = '0'
                } else {
                    nav_el.style.position = 'relative'
                    nav_el.style.top = 'auto'
                }
            // el.style.position = 'fixed'
            //     el.style.top = '0'
            // } else {
            //     el.style.position = 'relative'
            //     el.style.top = 'auto'
            }).observe(
                document.querySelector('#top-section-id')
            )
        }
    }
}
</script>

<style>
.nav-place-holder {
    height: 7vh;
}
.dynamic-nav-bar {
    left: 0px;
    right: 0px;
    /*position: fixed;*/
    min-height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #262b37;
}
.dynamic-nav-bar a {
    padding-top: 2.5vh;
    padding-bottom: 2.5vh;
    color: #bbb;
    text-decoration: none;
    padding-left: 3vh;
    padding-right: 3vh;
    height: 100%;
}
.dynamic-nav-bar a:hover {
    color: white;
}
.dynamic-nav-bar a.active {
    background-color: #1b1f29;
}
.container {
  margin: 0 auto;
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /*border: solid black 10px;*/
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 777;
  font-size: 6vw;
  color: #ddd;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 2.5vw;
  color: #ddd;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.left {
    width: 60%;
}
.right {
    width: 30%;
}
.transparent-black {
    background: rgba(0, 0, 0, 0.6);
}
.cool-img-bg {
    background-image: url("../static/cool.jpg");
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.top-border {
    border: solid white 2px;
    padding: 10px;
    padding-left: 80px;
    padding-right: 80px;
}
</style>
