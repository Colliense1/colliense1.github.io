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
                                { icon: 'fa-pencil', work_period: '2015 - Present', name: 'Academy of Art University', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                                { icon: 'fa-briefcase', work_period: '2014 - 2015', name: 'IT Technical Institute', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                                { icon: 'fa-paint-brush', work_period: '2013 - 2014', name: 'Web Design School', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                                { icon: 'fa-university', work_period: '2010 - 2013', name: 'Bachelor Degree', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
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
                            google_maps_url: 'https://www.google.com/maps/place/Bangladesh/@23.4420877,85.8465794,6z/data=!3m1!4b1!4m5!3m4!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b!8m2!3d23.684994!4d90.356331?hl=en-GB',
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
