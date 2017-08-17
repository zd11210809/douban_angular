(function (angular) {
    //1. 首页模块、
    var app = angular.module('in_theaters', ['ngRoute']);
    //2.路由规则
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/in_theaters', {
                templateUrl: 'in_theaters/in_theaters.html',
                controller: 'in_theatersController'
            })
    }])
    //3.创建控制器
    app.controller('in_theatersController', ['$scope', function ($scope) {
        $scope.data = {
            count: 5,
            start: 0,
            total: 48,
            subjects: [{
                    rating: {
                        max: 10,
                        average: 7.5,
                        stars: "40",
                        min: 0
                    },
                    genres: [
                        "动作"
                    ],
                    title: "战狼2",
                    casts: [{
                            alt: "https://movie.douban.com/celebrity/1000525/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/39105.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/39105.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/39105.jpg"
                            },
                            name: "吴京",
                            id: "1000525"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1100321/",
                            avatars: {
                                small: "https://img1.doubanio.com/img/celebrity/small/1415801312.29.jpg",
                                large: "https://img1.doubanio.com/img/celebrity/large/1415801312.29.jpg",
                                medium: "https://img1.doubanio.com/img/celebrity/medium/1415801312.29.jpg"
                            },
                            name: "弗兰克·格里罗",
                            id: "1100321"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1274840/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1401440361.14.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1401440361.14.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1401440361.14.jpg"
                            },
                            name: "吴刚",
                            id: "1274840"
                        }
                    ],
                    collect_count: 332197,
                    original_title: "战狼2",
                    subtype: "movie",
                    directors: [{
                        alt: "https://movie.douban.com/celebrity/1000525/",
                        avatars: {
                            small: "https://img3.doubanio.com/img/celebrity/small/39105.jpg",
                            large: "https://img3.doubanio.com/img/celebrity/large/39105.jpg",
                            medium: "https://img3.doubanio.com/img/celebrity/medium/39105.jpg"
                        },
                        name: "吴京",
                        id: "1000525"
                    }],
                    year: "2017",
                    images: {
                        small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2485983612.webp",
                        large: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2485983612.webp",
                        medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2485983612.webp"
                    },
                    alt: "https://movie.douban.com/subject/26363254/",
                    id: "26363254"
                },
                {
                    rating: {
                        max: 10,
                        average: 7.1,
                        stars: "35",
                        min: 0
                    },
                    genres: [
                        "剧情",
                        "动作"
                    ],
                    title: "杀破狼·贪狼",
                    casts: [{
                            alt: "https://movie.douban.com/celebrity/1027577/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1419164187.6.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1419164187.6.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1419164187.6.jpg"
                            },
                            name: "古天乐",
                            id: "1027577"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1314321/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/45924.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/45924.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/45924.jpg"
                            },
                            name: "吴樾",
                            id: "1314321"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1004643/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/4862.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/4862.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/4862.jpg"
                            },
                            name: "托尼·贾",
                            id: "1004643"
                        }
                    ],
                    collect_count: 1136,
                    original_title: "殺破狼‧貪狼",
                    subtype: "movie",
                    directors: [{
                        alt: "https://movie.douban.com/celebrity/1274472/",
                        avatars: {
                            small: "https://img3.doubanio.com/img/celebrity/small/1379340288.41.jpg",
                            large: "https://img3.doubanio.com/img/celebrity/large/1379340288.41.jpg",
                            medium: "https://img3.doubanio.com/img/celebrity/medium/1379340288.41.jpg"
                        },
                        name: "叶伟信",
                        id: "1274472"
                    }],
                    year: "2017",
                    images: {
                        small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494948513.webp",
                        large: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494948513.webp",
                        medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494948513.webp"
                    },
                    alt: "https://movie.douban.com/subject/26826398/",
                    id: "26826398"
                },
                {
                    rating: {
                        max: 10,
                        average: 6.8,
                        stars: "35",
                        min: 0
                    },
                    genres: [
                        "动作",
                        "犯罪"
                    ],
                    title: "破·局",
                    casts: [{
                            alt: "https://movie.douban.com/celebrity/1041390/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/49475.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/49475.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/49475.jpg"
                            },
                            name: "郭富城",
                            id: "1041390"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1314827/",
                            avatars: {
                                small: "https://img1.doubanio.com/img/celebrity/small/1445948736.67.jpg",
                                large: "https://img1.doubanio.com/img/celebrity/large/1445948736.67.jpg",
                                medium: "https://img1.doubanio.com/img/celebrity/medium/1445948736.67.jpg"
                            },
                            name: "王千源",
                            id: "1314827"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1011562/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1415689928.93.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1415689928.93.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1415689928.93.jpg"
                            },
                            name: "刘涛",
                            id: "1011562"
                        }
                    ],
                    collect_count: 1608,
                    original_title: "破·局",
                    subtype: "movie",
                    directors: [{
                        alt: "https://movie.douban.com/celebrity/1316302/",
                        avatars: {
                            small: "https://img1.doubanio.com/img/celebrity/small/35859.jpg",
                            large: "https://img1.doubanio.com/img/celebrity/large/35859.jpg",
                            medium: "https://img1.doubanio.com/img/celebrity/medium/35859.jpg"
                        },
                        name: "连奕琦",
                        id: "1316302"
                    }],
                    year: "2017",
                    images: {
                        small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2496288510.webp",
                        large: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2496288510.webp",
                        medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2496288510.webp"
                    },
                    alt: "https://movie.douban.com/subject/26760160/",
                    id: "26760160"
                },
                {
                    rating: {
                        max: 10,
                        average: 0,
                        stars: "00",
                        min: 0
                    },
                    genres: [
                        "喜剧",
                        "动画",
                        "奇幻"
                    ],
                    title: "十万个冷笑话2",
                    casts: [{
                            alt: "https://movie.douban.com/celebrity/1334349/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1398540567.14.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1398540567.14.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1398540567.14.jpg"
                            },
                            name: "山新",
                            id: "1334349"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1340968/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1493704624.54.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1493704624.54.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1493704624.54.jpg"
                            },
                            name: "郝祥海",
                            id: "1340968"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1345414/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1498213287.65.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1498213287.65.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1498213287.65.jpg"
                            },
                            name: "李姝洁",
                            id: "1345414"
                        }
                    ],
                    collect_count: 1080,
                    original_title: "十万个冷笑话2",
                    subtype: "movie",
                    directors: [{
                            alt: "https://movie.douban.com/celebrity/1343619/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1498213042.81.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1498213042.81.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1498213042.81.jpg"
                            },
                            name: "卢恒宇",
                            id: "1343619"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1345414/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1498213287.65.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1498213287.65.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1498213287.65.jpg"
                            },
                            name: "李姝洁",
                            id: "1345414"
                        }
                    ],
                    year: "2017",
                    images: {
                        small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2492917402.webp",
                        large: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492917402.webp",
                        medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2492917402.webp"
                    },
                    alt: "https://movie.douban.com/subject/26759539/",
                    id: "26759539"
                },
                {
                    rating: {
                        max: 10,
                        average: 0,
                        stars: "00",
                        min: 0
                    },
                    genres: [
                        "儿童",
                        "喜剧",
                        "动画"
                    ],
                    title: "赛尔号大电影6：圣者无敌",
                    casts: [{
                            alt: "https://movie.douban.com/celebrity/1321912/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/51744.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/51744.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/51744.jpg"
                            },
                            name: "罗玉婷",
                            id: "1321912"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1320013/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1359861027.53.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1359861027.53.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1359861027.53.jpg"
                            },
                            name: "翟巍",
                            id: "1320013"
                        },
                        {
                            alt: "https://movie.douban.com/celebrity/1332379/",
                            avatars: {
                                small: "https://img3.doubanio.com/img/celebrity/small/1496308187.65.jpg",
                                large: "https://img3.doubanio.com/img/celebrity/large/1496308187.65.jpg",
                                medium: "https://img3.doubanio.com/img/celebrity/medium/1496308187.65.jpg"
                            },
                            name: "王晓彤",
                            id: "1332379"
                        }
                    ],
                    collect_count: 118,
                    original_title: "赛尔号大电影6：圣者无敌",
                    subtype: "movie",
                    directors: [{
                        alt: "https://movie.douban.com/celebrity/1330788/",
                        avatars: {
                            small: "https://img3.doubanio.com/img/celebrity/small/1500536247.43.jpg",
                            large: "https://img3.doubanio.com/img/celebrity/large/1500536247.43.jpg",
                            medium: "https://img3.doubanio.com/img/celebrity/medium/1500536247.43.jpg"
                        },
                        name: "王章俊",
                        id: "1330788"
                    }],
                    year: "2017",
                    images: {
                        small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2475952676.webp",
                        large: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2475952676.webp",
                        medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2475952676.webp"
                    },
                    alt: "https://movie.douban.com/subject/26969037/",
                    id: "26969037"
                }
            ],
            title: "正在上映的电影-北京"
        }
    }])

})(angular)