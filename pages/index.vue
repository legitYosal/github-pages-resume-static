<template>
<div>
    <!-- <a class="" href="#">english</a> -->
    <a class="language-buttom" href="#">persian</a>
    <div class="cool-img-bg">
        <div id="top-section-id" class="container transparent-black">
            <div class="top-border">
                <h2 class="title">in development</h2>
                <p class="subtitle">درحال توسعه</p>
            </div>
        </div>
    </div>
    <div class="nav-place-holder">
    <div id="dynamic-nav-bar-id" class="dynamic-nav-bar">
        <a @click="scrollVanilla" :class="{ active: in_top_section }" href="#top-section-id">top</a>
        <a @click="scrollVanilla" :class="{ active: !in_top_section && in_about_section }" href="#about-section-id">about</a>
        <a @click="scrollVanilla" :class="{ active: !in_about_section && in_skills_section }" href="#skills-section-id">skills</a>
        <a @click="scrollVanilla" :class="{ active: !in_skills_section && in_experience_section }" href="#experience-section-id">experience</a>
        <a @click="scrollVanilla" :class="{ active: !in_experience_section && in_education_section }" href="#education-section-id">education</a>
        <a @click="scrollVanilla" :class="{ active: !in_education_section && in_portfolio_section }" href="#portfolio-section-id">portfolio</a>
        <a @click="scrollVanilla" :class="{ active: !in_portfolio_section && in_contact_section }" href="#contact-section-id">contact</a>


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
                <div class="circular-item">
                    <radial-progress
                        :diameter="180"
                        :total-steps="totalSteps"
                        :toComplete="90"
                        :fillTimeOut="1"
                    >
                    </radial-progress>
                    <h2>python</h2>
                    <p>this is very cool</p>
                </div>
                <div class="circular-item">
                    <radial-progress
                        :diameter="180"
                        :total-steps="totalSteps"
                        :toComplete="90"
                        :fillTimeOut="1"
                    >
                    </radial-progress>
                    <h2>python</h2>
                    <p>this is very cool</p>
                </div>
                <div class="circular-item">
                    <radial-progress
                        :diameter="180"
                        :total-steps="totalSteps"
                        :toComplete="90"
                        :fillTimeOut="1"
                    >
                    </radial-progress>
                    <h2>python</h2>
                    <p>this is very cool</p>
                </div>
                <div class="circular-item">
                    <radial-progress
                        :diameter="180"
                        :total-steps="totalSteps"
                        :toComplete="90"
                        :fillTimeOut="1"
                    >
                    </radial-progress>
                    <h2>python</h2>
                    <p>this is very cool</p>
                </div>
                <div class="circular-item">
                    <radial-progress
                        :diameter="180"
                        :total-steps="totalSteps"
                        :toComplete="90"
                        :fillTimeOut="1"
                    >
                    </radial-progress>
                    <h2>python</h2>
                    <p>this is very cool</p>
                </div>
                <div class="circular-item">
                    <radial-progress
                        :diameter="180"
                        :total-steps="totalSteps"
                        :toComplete="90"
                        :fillTimeOut="1"
                    >
                    </radial-progress>
                    <h2>python</h2>
                    <p>this is very cool</p>
                </div>
                <div class="circular-item">
                    <radial-progress
                        :diameter="180"
                        :total-steps="totalSteps"
                        :toComplete="90"
                        :fillTimeOut="1"
                    >
                    </radial-progress>
                    <h2>python</h2>
                    <p>this is very cool</p>
                </div>
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
                <div class="circle-date">
                    <div class="circle-date-item">
                        <div class="top-space"></div>
                        <h5>march,2014</h5>
                        <h5>present</h5>
                    </div>
                    <div class="top-space"></div>
                    <div class="circle-date-item">
                        <div class="top-space"></div>
                        <h5>march,2014</h5>
                        <h5>present</h5>
                    </div>
                </div>
                <div class="work-cards">
                    <div class="card-contain">
                        <div class="arrow-shape"></div>
                        <div class="card">
                            <p>hello</p>
                        </div>
                    </div>
                    <div class="card-contain"> 
                        <div class="arrow-shape"></div>
                        <div class="card">

                        </div>
                    </div>
                </div>
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
                <div class="circle-date">
                    <div class="circle-date-item">
                        <div class="top-space"></div>
                        <h5>march,2014</h5>
                        <h5>present</h5>
                    </div>
                </div>
                <div class="work-cards">
                    <div class="card-contain">
                        <div class="arrow-shape"></div>
                        <div class="card">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
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
                <div class="google-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.095871522228!2d59.52744881550642!3d36.3099819028393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c925d73674337%3A0x6325879f5fb01d18!2sFerdowsi%20University%20of%20Mashhad!5e0!3m2!1sen!2spl!4v1590845979554!5m2!1sen!2spl" 
                        width="100%" 
                        height="450" 
                        frameborder="0" 
                        style="padding:0;margin:0;border-top: 0.5vh dashed #2e9878; border-bottom: 0.5vh dashed #2e9878;" 
                        allowfullscreen="no" 
                        aria-hidden="false" 
                        tabindex="0"
                        scrolling="no"
                    ></iframe>
                </div>
                <div class="address-content-bg">
                <div class="address-content">
                    <div class="contact-details">
                        <h1>details</h1>
                        <p>my number is 323wedwefwefwefwef</p>
                        <p>this is my address</p>
                    </div>
                    <div class="contact-with-email">
                        <h1>contact now</h1>
                        <div class="inp-container">
                            <input spellcheck="false" placeholder="your name..." type="name" name="" class="inp inp-top-l">
                            <input spellcheck="false" placeholder="your email..." type="email" name="" class="inp inp-top-r">
                            <textarea spellcheck="false" placeholder="your message..." type="text" name="" class="inp inp-botton"></textarea>
                            <a href="" class="email-buttom">send message</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import RadialProgress from '~/components/RadialProgress'

export default {
    components: {
        'radial-progress': RadialProgress,
    },
    data () {
        return {
            completedSteps: 70,
            totalSteps: 100,
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
        scrollVanilla(event) {
            event.preventDefault()
            let el = document.querySelector(
                event.target.getAttribute('href')
            )
            let bodyRect = document.body.getBoundingClientRect().top
            let elRect = el.getBoundingClientRect().top
            window.scrollTo({
                top: (elRect - bodyRect + 1),
                behavior: 'smooth'
            })
        },
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
                console.log('top')

            }).observe(
                document.querySelector('#top-section-id')
            )

            new IntersectionObserver(entries => {
                this.in_about_section = entries[0].isIntersecting
                console.log('about')
            }).observe(
                document.querySelector('#about-section-id')
            )

            new IntersectionObserver(entries => {
                this.in_skills_section = entries[0].isIntersecting
                console.log('skills')
            }).observe(
                document.querySelector('#skills-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_experience_section = entries[0].isIntersecting
                console.log('experience')
            }).observe(
                document.querySelector('#experience-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_education_section = entries[0].isIntersecting
                console.log('education')
            }).observe(
                document.querySelector('#education-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_portfolio_section = entries[0].isIntersecting
                console.log('portfolio')
            }).observe(
                document.querySelector('#portfolio-section-id')
            )
            new IntersectionObserver(entries => {
                this.in_contact_section = entries[0].isIntersecting
                console.log('contact')
            }).observe(
                document.querySelector('#contact-section-id')
            )
        }
    }
}
</script>

<style>
</style>
