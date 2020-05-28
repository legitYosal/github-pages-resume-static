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
        <a :class="{ active: in_top_section }" href="#">top</a>
        <a :class="{ active: !in_top_section && in_about_section }" href="#">about</a>
        <a :class="{ active: !in_about_section && in_skills_section }" href="#">skills</a>
        <a :class="{ active: !in_skills_section && in_experience_section }" href="#">experience</a>
        <a :class="{ active: !in_experience_section && in_education_section }" href="#">education</a>
        <a :class="{ active: !in_education_section && in_portfolio_section }" href="#">portfolio</a>
        <a :class="{ active: !in_portfolio_section && in_contact_section }" href="#">contact</a>

        <a href="#">other</a>

        <a href="#">english</a>
        <a href="#">persian</a>
    </div>
    </div>
    <div id="about-section-id" class="container-dynamic about-bg">
        <div class="context-container">
            <div class="context-header">
                <h1 class="white-text">about me</h1>
                <h5 class="white-text">A small intrudoction about my self</h5>
            </div>
            <div class="context-content">
                <div class="about-content-about">
                    <h2 class="white-text">Yosef Salmalian</h2>
                    <h4 class="white-text">Full Stack Web Developer & Hardworking Programmer </h4>
                    <p class="white-text">this is my life of a programmer lorem ipsolimg du du du ha ha lll adn after all i am al latin guy my self.</p>
                    <p class="white-text">this is my life of a programmer lorem ipsolimg du du du ha ha lll adn after all i am al latin guy my self.</p>
                    <p class="white-text">this is my life of a programmer lorem ipsolimg du du du ha ha lll adn after all i am al latin guy my self.</p>
                    <p class="white-text">this is my life of a programmer lorem ipsolimg du du du ha ha lll adn after all i am al latin guy my self.</p>
                    <p class="white-text">so i was going to do this any time now</p>
                </div>
                <div class="about-content-img">
                    <img src="~/static/notme.jpeg">
                </div>
            </div>
        </div>

    </div>
    <div id="skills-section-id" class="container-dynamic">
        <div class="context-container">
            <div class="context-header">
                <h1>TECHNICAL SKILLS</h1>
                <h5>That I can say i'm good at</h5>
            </div>
            <div class="context-content">
                <p>this are those guys</p>
            </div>
        </div>
    </div>
    <div id="experience-section-id" class="container-dynamic">
        <div class="context-container">
            <div class="context-header">
                <h1>work experience</h1>
                <h5>my previous associations</h5>
            </div>
            <div class="context-content">
                <p>this are expes</p>
            </div>
        </div>
    </div>
    <div id="education-section-id" class="container-dynamic">
        <div class="context-container">
            <div class="context-header">
                <h1>educations & diplomas</h1>
                <h5>what I have done in my academic career</h5>
            </div>
            <div class="context-content">
                <p>these are educ</p>
            </div>
        </div>
    </div>
    <div id="portfolio-section-id" class="container-dynamic">
        <div class="context-container">
            <div class="context-header">
                <h1>PORTFOLIO</h1>
                <h5>Show case of my works</h5>
            </div>
            <div class="context-content">
                <p>these are portfolio</p>
            </div>
        </div>
    </div>
    <div id="contact-section-id" class="container-dynamic">
        <div class="context-container">
            <div class="context-header">
                <h1>get in touch</h1>
                <h5>please feel free if you whould like to have a chat</h5>
            </div>
            <div class="context-content">
                <p>these are contact</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    components: {
    },
    data () {
        return {
            lang: 'fa',
            in_top_section: null,
            in_about_section: null,
            in_skills_section: null,
            in_experience_section: null,
            in_education_section: null,
            in_portfolio_section: null,
            in_contact_section: null
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
                this.in_top_section = entries[0].isIntersecting
                let nav_el = document.querySelector('#dynamic-nav-bar-id')
                if (this.in_top_section) {
                    nav_el.style.position = 'relative'
                    nav_el.style.top = 'auto'
                } else {
                    nav_el.style.position = 'fixed'
                    nav_el.style.top = '0'
                }
            }).observe(
                document.querySelector('#top-section-id')
            )

            new IntersectionObserver(entries => {
                this.in_about_section = entries[0].isIntersecting
            }).observe(
                document.querySelector('#about-section-id')
            )

            new IntersectionObserver(entries => {
                this.in_skills_section = entries[0].isIntersecting
            }).observe(
                document.querySelector('#skills-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_experience_section = entries[0].isIntersecting
            }).observe(
                document.querySelector('#experience-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_education_section = entries[0].isIntersecting
            }).observe(
                document.querySelector('#education-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_portfolio_section = entries[0].isIntersecting
            }).observe(
                document.querySelector('#portfolio-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_contact_section = entries[0].isIntersecting
            }).observe(
                document.querySelector('#contact-section-id')
            )
        }
    }
}
</script>

<style>
</style>
