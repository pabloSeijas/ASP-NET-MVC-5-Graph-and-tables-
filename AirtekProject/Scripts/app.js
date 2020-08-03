
//GLOBALS
    var math, sci, sport, cast, eng, i,e;
    math = [];
    sci = [];
    sport = [];
    cast = [];
    eng = [];

    $.get("Home/GetData", function (data, status) {
        
            for (i = 0; i <= data.length; i++) {
                if (i === data.length) { break; }
                math.push(data[i].matematica);
                sci.push(data[i].ciencias);
                sport.push(data[i].deporte);
                cast.push(data[i].castellano);
                eng.push(data[i].ingles);
            }
           


        //var ctx = document.getElementById('math').getContext('2d');
        //var myChart = new Chart(ctx, {
        //    type: 'bar',
        //    data: {
        //        labels: ['Examen #1', 'Examen#2', 'Examen#3', 'Examen#4', 'Examen#5'],
        //        datasets: [{
        //            label: 'Matemáticas',
        //            data: math,
        //            backgroundColor: [
        //                'rgba(255, 99, 132, 0.2)',
        //                'rgba(54, 162, 235, 0.2)',
        //                'rgba(255, 206, 86, 0.2)',
        //                'rgba(75, 192, 192, 0.2)',
        //                'rgba(153, 102, 255, 0.2)',
        //                'rgba(255, 159, 64, 0.2)'
        //            ],
        //            borderColor: [
        //                'rgba(255, 99, 132, 1)',
        //                'rgba(54, 162, 235, 1)',
        //                'rgba(255, 206, 86, 1)',
        //                'rgba(75, 192, 192, 1)',
        //                'rgba(153, 102, 255, 1)',
        //                'rgba(255, 159, 64, 1)'
        //            ],
        //            borderWidth: 1
        //        }]
        //    },
        //    options: {
        //        scales: {
        //            yAxes: [{
        //                ticks: {
        //                    beginAtZero: true
        //                }
        //            }]
        //        }
        //    }
        //});

        //var ctx = document.getElementById('sci').getContext('2d');
        //var myChart = new Chart(ctx, {
        //    type: 'bar',
        //    data: {
        //        labels: ['Examen #1', 'Examen#2', 'Examen#3', 'Examen#4', 'Examen#5'],
        //        datasets: [{
        //            label: 'Ciencias',
        //            data: sci,
        //            backgroundColor: [
        //                'rgba(255, 99, 132, 0.2)',
        //                'rgba(54, 162, 235, 0.2)',
        //                'rgba(255, 206, 86, 0.2)',
        //                'rgba(75, 192, 192, 0.2)',
        //                'rgba(153, 102, 255, 0.2)',
        //                'rgba(255, 159, 64, 0.2)'
        //            ],
        //            borderColor: [
        //                'rgba(255, 99, 132, 1)',
        //                'rgba(54, 162, 235, 1)',
        //                'rgba(255, 206, 86, 1)',
        //                'rgba(75, 192, 192, 1)',
        //                'rgba(153, 102, 255, 1)',
        //                'rgba(255, 159, 64, 1)'
        //            ],
        //            borderWidth: 1
        //        }]
        //    },
        //    options: {
        //        scales: {
        //            yAxes: [{
        //                ticks: {
        //                    beginAtZero: true
        //                }
        //            }]
        //        }
        //    }
        //});

        //var ctx = document.getElementById('sport').getContext('2d');
        //var myChart = new Chart(ctx, {
        //    type: 'bar',
        //    data: {
        //        labels: ['Examen #1', 'Examen#2', 'Examen#3', 'Examen#4', 'Examen#5'],
        //        datasets: [{
        //            label: 'Deportes',
        //            data: sport,
        //            backgroundColor: [
        //                'rgba(255, 99, 132, 0.2)',
        //                'rgba(54, 162, 235, 0.2)',
        //                'rgba(255, 206, 86, 0.2)',
        //                'rgba(75, 192, 192, 0.2)',
        //                'rgba(153, 102, 255, 0.2)',
        //                'rgba(255, 159, 64, 0.2)'
        //            ],
        //            borderColor: [
        //                'rgba(255, 99, 132, 1)',
        //                'rgba(54, 162, 235, 1)',
        //                'rgba(255, 206, 86, 1)',
        //                'rgba(75, 192, 192, 1)',
        //                'rgba(153, 102, 255, 1)',
        //                'rgba(255, 159, 64, 1)'
        //            ],
        //            borderWidth: 1
        //        }]
        //    },
        //    options: {
        //        scales: {
        //            yAxes: [{
        //                ticks: {
        //                    beginAtZero: true
        //                }
        //            }]
        //        }
        //    }
        //});

        //var ctx = document.getElementById('cast').getContext('2d');
        //var myChart = new Chart(ctx, {
        //    type: 'bar',
        //    data: {
        //        labels: ['Examen #1', 'Examen#2', 'Examen#3', 'Examen#4', 'Examen#5'],
        //        datasets: [{
        //            label: 'Castellano',
        //            data: cast,
        //            backgroundColor: [
        //                'rgba(255, 99, 132, 0.2)',
        //                'rgba(54, 162, 235, 0.2)',
        //                'rgba(255, 206, 86, 0.2)',
        //                'rgba(75, 192, 192, 0.2)',
        //                'rgba(153, 102, 255, 0.2)',
        //                'rgba(255, 159, 64, 0.2)'
        //            ],
        //            borderColor: [
        //                'rgba(255, 99, 132, 1)',
        //                'rgba(54, 162, 235, 1)',
        //                'rgba(255, 206, 86, 1)',
        //                'rgba(75, 192, 192, 1)',
        //                'rgba(153, 102, 255, 1)',
        //                'rgba(255, 159, 64, 1)'
        //            ],
        //            borderWidth: 1
        //        }]
        //    },
        //    options: {
        //        scales: {
        //            yAxes: [{
        //                ticks: {
        //                    beginAtZero: true
        //                }
        //            }]
        //        }
        //    }
        //});

        //var ctx = document.getElementById('eng').getContext('2d');
        //var myChart = new Chart(ctx, {
        //    type: 'bar',
        //    data: {
        //        labels: ['Examen #1', 'Examen#2', 'Examen#3', 'Examen#4', 'Examen#5'],
        //        datasets: [{
        //            label: 'Inglés',
        //            data: eng,
        //            backgroundColor: [
        //                'rgba(255, 99, 132, 0.2)',
        //                'rgba(54, 162, 235, 0.2)',
        //                'rgba(255, 206, 86, 0.2)',
        //                'rgba(75, 192, 192, 0.2)',
        //                'rgba(153, 102, 255, 0.2)',
        //                'rgba(255, 159, 64, 0.2)'
        //            ],
        //            borderColor: [
        //                'rgba(255, 99, 132, 1)',
        //                'rgba(54, 162, 235, 1)',
        //                'rgba(255, 206, 86, 1)',
        //                'rgba(75, 192, 192, 1)',
        //                'rgba(153, 102, 255, 1)',
        //                'rgba(255, 159, 64, 1)'
        //            ],
        //            borderWidth: 1
        //        }]
        //    },
        //    options: {
        //        scales: {
        //            yAxes: [{
        //                ticks: {
        //                    beginAtZero: true
        //                }
        //            }]
        //        }
        //    }
        //});

        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            title: {
                text: 'Notas',
                subtext: 'Matemáticas',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Examen #1', 'Examen #2', 'Examen #3', 'Examen #4', 'Examen #5']
            },
            series: [
                {
                    name: 'Notas',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: math[0], name: 'Examen #1' },
                        { value: math[1], name: 'Examen #2' },
                        { value: math[2], name: 'Examen #3' },
                        { value: math[3], name: 'Examen #4' },
                        { value: math[4], name: 'Examen #5' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        //Bar Graph
        for (e = 0; e <= data.length; e++) {
            if (e >= data.length) {
                break;
            }

            var dom = document.getElementById("container2");
            var myChart = echarts.init(dom);
            var app = {};
            option = null;
            option = {
                title: {
                    text: 'Notas',
                    subtext: 'Varias'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Matemáticas', 'Ciencias', "Inglés", "Castellano", "Deporte"]
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['Nota#1 ', 'Nota#2 ', 'Nota#3 ', 'Nota#4 ', 'Nota#5 ']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        max: 15

                    }
                ],
                series: [
                    {
                        name: 'Matemáticas',
                        type: 'bar',
                        data: math,
                        markPoint: {
                            mark_point_symbol: "triangle",
                            data: [
                                { value: math[e], xAxis: 0, yAxis: math[0] },
                                { value: math[e], xAxis: 1, yAxis: math[1] },
                                { value: math[e], xAxis: 2, yAxis: math[2] },
                                { value: math[e], xAxis: 3, yAxis: math[3] },
                                { value: math[e], xAxis: 4, yAxis: math[4] },
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },
                    {
                        name: 'Ciencias',
                        type: 'bar',
                        data: sci,
                        markPoint: {
                            itemStyle: { color: 'gray' },
                            data: [
                                { value: sci[e], xAxis: 0, yAxis: sci[0] },
                                { value: sci[e], xAxis: 1, yAxis: sci[1] },
                                { value: sci[e], xAxis: 2, yAxis: sci[2] },
                                { value: sci[e], xAxis: 3, yAxis: sci[3] },
                                { value: sci[e], xAxis: 4, yAxis: sci[4] },
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },
                    {
                        name: 'Inglés',
                        type: 'bar',
                        data: eng,
                        markPoint: {
                            itemStyle: { color: "Gray" },
                            data: [
                                { value: eng[e], xAxis: 0, yAxis: eng[0] },
                                { value: eng[e], xAxis: 1, yAxis: eng[1] },
                                { value: eng[e], xAxis: 2, yAxis: eng[2] },
                                { value: eng[e], xAxis: 3, yAxis: eng[3] },
                                { value: eng[e], xAxis: 4, yAxis: eng[4] },
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },

                    {
                        name: 'Deporte',
                        type: 'bar',
                        data: sport,
                        markPoint: {
                            itemStyle: { color: "gray" },
                            data: [
                                { value: sport[e], xAxis: 0, yAxis: sport[0] },
                                { value: sport[e], xAxis: 1, yAxis: sport[1] },
                                { value: sport[e], xAxis: 2, yAxis: sport[2] },
                                { value: sport[e], xAxis: 3, yAxis: sport[3] },
                                { value: sport[e], xAxis: 4, yAxis: sport[4] }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    }, {
                        name: 'Castellano',
                        type: 'bar',
                        data: cast,
                        markPoint: {
                            itemStyle: { color: "gray" },
                            data: [
                                { value: cast[e], xAxis: 0, yAxis: cast[0] },
                                { value: cast[e], xAxis: 1, yAxis: cast[1] },
                                { value: cast[e], xAxis: 2, yAxis: cast[2] },
                                { value: cast[e], xAxis: 3, yAxis: cast[3] },
                                { value: cast[e], xAxis: 4, yAxis: cast[4] }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },
                ]
            };
            ;
            if (option && typeof option === "object") {
                myChart.setOption(option, true);


            }

        }
        console.log(e);
       
    });
    

 
    


   
