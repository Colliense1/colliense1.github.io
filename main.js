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
                                { skill: 'C (Programming language)', percent: 85 },
                                { skill: 'Wordpress', percent: 95 },
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
                                { icon: 'fa-globe', name: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
                                { icon: 'fa-pencil', name: 'UX and UI Design', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
                                { icon: 'fa-users', name: 'Online Marketing', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
                                { icon: 'fa-search-plus', name: 'SEO Optimization', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
                            ]
                        }
                    },
                },
                'my-portfolio': {
                    template: portfolio,
                    data: function () {
                        return {
                            portfolio: [
                                { image: 'images/portfolio-1.jpg', title: 'Project Title', category_number: '1', category: 'Branding', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.' },
                                { image: 'images/portfolio-2.jpg', title: 'Project Title', category_number: '2', category: 'Websites', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim.' },
                                { image: 'images/portfolio-3.jpg', title: 'Project Title', category_number: '1', category: 'Branding', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
                                { image: 'images/portfolio-4.jpg', title: 'Project Title', category_number: '2', category: 'Websites', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
                                { image: 'images/portfolio-5.jpg', title: 'Project Title', category_number: '2', category: 'Websites', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
                                { image: 'images/portfolio-6.jpg', title: 'Project Title', category_number: '1', category: 'Branding', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
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
                                { icon: 'fa-graduation-cap', work_period: '2015 - 2019', name: 'Bachelors of Computer Science and Engineering' , work_period: 'Daffodil International University', description: 'I complete my undergraduate program from Daffodil International University. It is a well-known Private University of Bangladesh. I have learned a lot of things from my University. As a computer science student have participated in different programming competition during the period of my study.' },
                                { icon: 'fa-university', work_period: '2012 - 2014', name: 'Galachipa Government College', description: '' },
                                { icon: 'fas fa-school', work_period: '2007 - 2012', name: 'Galachipa Model Secondary School', description: '' },
                                { icon: '', work_period: '0ctober,2018 - january,2019', name: 'CodersTrust Bangladesh', description: 'I complete the Android Development course from CodersTrust Bangladesh.' },
                            ]
                        }
                    },
                },
                'my-blog': {
                    template: blog,
                    data: function () {
                        return {
                            posts: [
                                { image: 'images/blog-img-1.jpg', date: 'February 15, 2016', title: 'Blog Post with Image', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                                { image: 'images/blog-img-2.jpg', date: 'February 15, 2016', title: 'Standart Blog Post', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                                { image: 'images/blog-img-3.jpg', date: 'February 15, 2016', title: 'Blog Post with Image', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                            ]
                        }
                    },
                },
                'my-testimonial': {
                    template: testimonial,
                    data: function () {
                        return {
                            testimonials: [
                                { image: 'images/client-1.jpg', name: 'Robert Green', position: 'Businessman', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                                { image: 'images/client-2.jpg', name: 'Robert Green', position: 'Businessman', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
                                { image: 'images/client-3.jpg', name: 'Robert Green', position: 'Businessman', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
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
