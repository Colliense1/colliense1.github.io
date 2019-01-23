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
                                { social: 'fa-twitter' },
                                { social: 'fa-google-plus' },
                                { social: 'fa-linkedin' },
                                { social: 'fa-instagram' },
                                { social: 'fa-skype' },
                                { social: 'fa-dribbble' },
                                { social: 'fa-behance' },
                                { social: 'fa-pinterest' },
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
                            mySpeciality: 'Android Developer',
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
                                { icon: 'fa-globe', name: 'Web Development', description: '' },
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
                                { image: '', title: 'Parents care', category_number: '1', category: 'Branding', description: '' },
                                { image: '', title: 'Project Title', category_number: '2', category: 'Websites', description: '' },
                                { image: '', title: 'Project Title', category_number: '1', category: 'Branding', description: '' },
                                { image: '', title: 'Project Title', category_number: '2', category: 'Websites', description: '' },
                                { image: '', title: 'Project Title', category_number: '2', category: 'Websites', description: '' },
                                { image: '', title: 'Project Title', category_number: '1', category: 'Branding', description: '' },
                            ],
                            filters: [
                                { dataFilter: 'all', title: 'Show All' },
                                { dataFilter: '.category-1', title: 'Branding' },
                                { dataFilter: '.category-2', title: 'Websites' },
                            ]
                        }
                    },
                },
                'my-resume': {
                    template: resume,
                    data: function () {
                        return {
                            resume: [
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
                                { icon: 'fa fa-music', name: 'Music' },
                                { icon: 'fa fa-bed', name: 'Sleep'},
                                { icon: 'fas fa-code', name: 'Programming'},
                                { icon: 'fa fa-film', name: 'Movies'},
                                { icon: 'fa fa-microchip', name: 'Technology'},
                                { icon: 'fa fa-coffee', name: 'Coffee'},
                                { icon: 'fa-coffee', name: 'Chocolate'},

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
                            google_maps_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658281952!2d75.78663299928208!3d30.900473636616745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C+Punjab+141001!5e0!3m2!1sen!2sin!4v1461389509410',
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
