requirejs.config({
    baseUrl: '',
    paths: {
        css: "js/requirejs/css.min", //requirejs plugin for load css
        text: "js/requirejs/text", //requirejs plugin for load text
        vue: 'https://unpkg.com/vue/dist/vue'
    },
    shim: {
    }
});

require(['vue',
    'text!templates/preloader.html',
    'text!templates/phone.html',
    'text!templates/socials.html',
    'text!templates/sidebar.html',
    'text!templates/about.html',
    'text!templates/services.html',
    'text!templates/portfolio.html',
    'text!templates/resume.html',
    'text!templates/blog.html',
    'text!templates/testimonial.html',
    'text!templates/contact.html',
    'text!templates/footer.html',
],
    function (Vue, preloader, phone, socials, sidebar, about, services, portfolio, resume, blog, testimonial, contact, footer) {

        var app = new Vue({
            el: '#app',
            data: {
                loaded: false
            },
            mounted: function () {
                this.loaded = true;
                // `this` points to the vm instance
                console.log('App is ready!');
            },
            components: {
                'my-preloader': {
                    template: preloader
                },
                'my-phone': {
                    template: phone,
                    data: function () {
                        return { phone: '+8801753740230' }
                    }
                },
                'my-socials': {
                    template: socials,
                    data: function () {
                        return {
                            socials: [
                                { social: 'fa-facebook' },
                                { social: 'fa-github' },
                                { social: 'fa-linkedin' },
                                { social: 'fa-instagram' },
                                { social: 'fa-twitter' },
                                { social: 'fa-google-plus' },
                                { social: 'fa-skype' },
                                
                            ]
                        }
                    }
                },
                'my-sidebar': {
                    template: sidebar,
                    data: function () {
                        return { myImageSrc: 'images/cpp.jpg' }
                    }
                },
                'my-about': {
                    template: about,
                    data: function () {
                        return {
                            firstName: 'Colliense Podder',
                            lastName: 'Prodip',
                            mySpeciality: 'Software Engineer (Android Developer)',
                            briefDescriptionSpeciality: 'Colliense Podder Prodip is a truly and dedicated Android development with Java Programming,has a basic knowledge of web application and networking.Currently graduated his B.Sc degree in Computer Science and Engineering at Daffodil International University.',
                            skills: [
                                { skill: 'Android Development', percent: 90 },
                                { skill: 'Java', percent: 90 },
                                { skill: 'Networking', percent: 75 },
                                { skill: 'Web application', percent: 70 },
                            ]
                        }
                    },
                    computed: {
                        fullName: function () {
                            return this.firstName + ' ' + this.lastName
                        }
                    }
                },
                'my-services': {
                    template: services,
                    data: function () {
                        return {
                            services: [
                                { icon: 'fa-android', name: 'Android Development', description: '' },
                                { icon: 'fa-pencil', name: 'UX and UI Design', description: '' },
                                ]
                        }
                    },
                },
                'my-portfolio': {
                    template: portfolio,
                    data: function () {
                        return {
                            portfolio: [
                                { image: 'images/project1.png', title: 'PARENTS CARE', category_number: '2', category: 'application', description: 'PARENTS CARE is the Health care Application.This applications motto is "WE CARE FOR YOUR HEALTH". The purpose to designing “Parent’s Care” application is to take care our parent when their children are far away from them.' },
                                { image: 'images/project2.png', title: 'MEMORY SHARP', category_number: '1', category: 'GAME', description: 'MEMORY SHARP is the game application.' },
                                { image: 'images/project3.png', title: 'BMR CALCULATOR', category_number: '2', category: 'application', description: 'BASAL METABOLIC RATE(BMR) calculator is the estimates your basal metabolic rate.' },
                                { image: 'images/bmi.png', title: 'BMI CALCULATOR', category_number: '2', category: 'application', description: 'BODY MASS INDEX(BMI) calculator is the estimates your Body Mass Index.' },
                                { image: 'images/project5.png', title: 'LOST & FOUND', category_number: '2', category: 'application', description: 'Lost & Found application includes Admin & User panel.If anything is lost on the university as an equivalent, then it can be found by posting.' },
                                { image: 'images/mi.png', title: 'MI HOME DECOR', category_number: '2', category: 'application', description: 'MI HOME DECOR is an interior design ideas application.It contain list of interior design such as Living Room,Office Room,Bed Room,Dinning Room,Kitchen etc.' },
                                { image: 'images/log.png', title: 'Signin Activity', category_number: '3', category: 'UI & UX Design', description: 'This is the amaging Signin UI Design.' },
                                { image: 'images/lo.png', title: 'Login Activity', category_number: '3', category: 'UI & UX Design', description: 'This is the amaging Login UI Design.' },
                                
                            ],
                            filters: [
                                { dataFilter: 'all', title: 'SHOW ALL' },
                                { dataFilter: '.category-1', title: 'GAME' },
                                { dataFilter: '.category-2', title: 'APPLICATION' },
                                { dataFilter: '.category-3', title: 'UI & UX Design' },
                            ]
                        }
                    },
                },
                'my-resume': {
                    template: resume,
                    data: function () {
                        return {
                            resume: [
                                { icon: 'fa-graduation-cap', work_period: 'M.sc in CSE (January,2020 - Present)' , name: 'Jagannath University', description: 'Jagannath University is a renowned Public University of Bangladesh.' },
                                { icon: 'fa-graduation-cap', work_period: 'B.sc in CSE (January,2015 - December,2018)' , name: 'Daffodil International University', description: 'I complete my undergraduate program from Daffodil International University. It is a well-known Private University of Bangladesh. I have learned a lot of things from my University. As a computer science student have participated in different programming competition during the period of my study.' },
                                { icon: 'fa-graduation-cap', work_period: '2012 - 2014', name: 'Galachipa Government College', description: 'I completed my Higher Secondary Certificate (H.S.C) degree from this prestigious institution. Galachipa Government College is a well-known institution of Barishal Board as well as in Bangladesh. I successfully completed all the subjects without any fallout.' },
                                { icon: 'fa-graduation-cap', work_period: '2007 - 2012', name: 'Galachipa Model Secondary School', description: 'I completed my Secondary School Certificate (S.S.C) degree from this prestigious institution. Galachipa Model Secondary School is a famous school of Barishal Board as well as in Bangladesh. I participated many culteral programs like "Cultural Display" Program of 16th December,26th March every year. Patricipated in different music competitions, sports competition and so on.' },
                                { icon: 'fa-graduation-cap', work_period: '0ctober,2018 - january,2019', name: 'CodersTrust Bangladesh', description: 'I complete the Android Development course from the prestigious institution of CodersTrust Bangladesh.' },
                            
                            ]
                        }
                    },
                },
                'my-blog': {
                    template: blog,
                    data: function () {
                        return {
                            posts: [
                                {   title: 'C Programming Language'},
                                {   title: 'Java'},
                                {   title: 'NetBeans'},
                                {   title: 'VLAN'},
                                {   title: 'Packet Tracer'},
                                {   title: 'CodeBlocks'},
                                {   title: 'Android SDK'},
                                {   title: 'Android Studio'},
                                {   title: 'Firebase'},
                                {   title: 'SQLite'},
                                {   title: 'Prolog'},
                                {   title: 'Github'},
                                {   title: 'Git'},
                                {   title: 'Eclipse'},
                                {   title: 'HTML'},
                                {   title: 'Cascading Style Sheets (CSS)'},
                                {   title: 'Domain Name System (DNS)'},
                                {   title: 'Dynamic Host Configuration Protocol (DHCP'},
                            ]
                        }
                    },
                },
                'my-testimonial': {
                    template: testimonial,
                    data: function () {
                        return {
                            testimonials: [
                                { image: 'music.png', name: 'Music', position: '', content: 'I Love Music.Listening and Singing.' },
                                { image: '', name: 'Sleep', position: '', content: 'I Love Sleepping is too much.' },
                                { image: '', name: 'Programming', position: '', content: 'Enjoy Programming' },
                                { image: '', name: 'Movies', position: '', content: 'Show Movies with my some buddies.' },
                                { image: '', name: 'Technology', position: '', content: 'Always try to keep updated with new technology.' },
                                { image: '', name: 'Sports', position: '', content: 'Playing Cricket,Football,Batminton with my buddies.' },
                                { image: '', name: 'Coffee,Coke,Lassi', position: '', content: 'All are my favourite drink' },
                                { image: '', name: 'Chocolate,Burger', position: '', content: 'Chocolate as like as KITKAT,CADBURY is my favourite.I like Chocolate is very much. & Burger also my favourite fast food dishes.' },
                                { image: '', name: 'Travelling', position: '', content: 'Sometimes go outside for travelling with my buddies or only.' },
                            ]
                        }
                    },
                },
                'my-contact': {
                    template: contact,
                    data: function () {
                        return {
                            address: 'Dhanmondi,Dhaka,Bangladesh',
                            phone: '+880 1753740230',
                            email: 'colliensepodder25@gmail.com',
                            google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38704088956!2d90.2792374664844!3d23.780573255830905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C+Bangladesh!5e0!3m2!1sen!2sin!4v1548363636751',
                            form: {
                                name: '',
                                email: '',
                                message: ''
                            }
                        }
                    },
                    // define methods under the `methods` object
                    methods: {
                        send: function (event) {
                            // `this` inside methods point to the Vue instance
                            alert('Hello ' + this.form.name + '!')
                        }
                    }
                },
                'my-footer': {
                    template: footer,
                    data: function () {
                        return {
                            copyright: '2019 Colliense Podder Prodip',
                            developer: 'colliense1',
                            social: 'https://colliense1.github.io/'
                        }
                    }
                },
            }
        });

        require(['js/scripts.min.js']);
    });
