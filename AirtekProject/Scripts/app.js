//GLOBALS
var vpref, vsucursal, vtecnologia, vtotal, i, e, g, s;
    vpref = [];
    vsucursal = [];
    vtotal = [];
    vtecnologia = [];

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function myFunc(total, num) {
    return total + num;
}

$(document).ready(function () {

    $.get("Home/equiposGetData", function (data, status) {
        var cliente;

        var editor;
        
        for (i = 0; i <= data.length; i++) {
            if (i === data.length) { break; }
            vpref.push(data[i].pref);
            vsucursal.push(data[i].sucursal);
            vtotal.push(data[i].total);
            vtecnologia.push(data[i].tecnologia);
            
        }
        
        var sucursal = vsucursal.filter(onlyUnique);
        var tecnologia = vtecnologia.filter(onlyUnique);
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
    
        //CLASIFICADOS POR TECNOLOGÍA
        var CM = [];
        var GP = [];
        var WL = [];
        //TOTALES
        var totalCM = [];
        var totalGP = [];
        var totalWL = [];
        
        
        for (e = 0; e < data.length; e++) {
            //PARA TOTAL
            if (data[e].tecnologia === 'cablemodem') {
                CM.push(data[e]);
            }
            if (data[e].tecnologia === 'gpon') {
                GP.push(data[e]);
            }
            if (data[e].tecnologia === 'wireless') {
                WL.push(data[e]);
            }
            //PARA TECNOLOGÍA
            if (data[e].tecnologia === 'cablemodem') {
                totalCM.push(data[e].total);
            }
            if (data[e].tecnologia === 'gpon') {
                totalGP.push(data[e].total);
            }
            if (data[e].tecnologia === 'wireless') {
                totalWL.push(data[e].total);
            }
        }
        //SUMATORIA TOTALES
        var sumCM = totalCM.reduce(myFunc);
        var sumGP = totalGP.reduce(myFunc);
        var sumWL = totalWL.reduce(myFunc);
    
        var graphData = [];

        for (g = 0; g < data.length; g++) {
            graphData.push({
                name: data[g].sucursal,
                value: data[g].total,
                itemStyle: {
                    normal: {
                        color: '#5f'+Math.floor(Math.random() * 10000),
                        lineStyle: {
                            color: 'white'
                        },
                        areaStyle: {
                            color: '#5f2626'
                        },
                    }
                },
            })  
           
        }
       
        
        var app = {};
        option = null;
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: [{
                bottom: 10, width: '100%',
                orient: 'horizontal',
                height: '100',
                selectedMode: 'multiple',
                //pageButtonPosition:'end',
                //formatter:'legend {name} ',
                data: sucursal,

            },
            {
                orient: 'vertical',left: 10, width: '50%', height: 'auto',
                data: ['CM', 'WL', 'GP'],

            }
            ],

            series: [
                {
                    name: 'Tecnologías',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    left: 0,
                    bottom: 50,

                    label: {
                        position: 'inner'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            //CM PARA CABLE MODEM
                            value: sumCM, name: 'CM', itemStyle: {
                                normal: {
                                    color: '#502121',
                                    lineStyle: {
                                        color: 'white'
                                    },
                                    areaStyle: {
                                        color: '#502121'
                                    },
                                },
                            },
                        },
                        {
                            //GP PARA GPON
                            value: sumGP, name: 'GP', itemStyle: {
                                normal: {
                                    color: '#214d50',
                                    lineStyle: {
                                        color: 'white'
                                    },
                                    areaStyle: {
                                        color: '#214d50'
                                    },
                                },
                            },
                        },
                        {
                            //WL PARA WIRELESS
                            value: sumWL, name: 'WL', itemStyle: {
                                normal: {
                                    color: '#28671e',
                                    lineStyle: {
                                        color: 'white'
                                    },
                                    areaStyle: {
                                        color: '#28671e'
                                    },
                                },
                            },
                        },
                        {
                           
                        },

                    ],
                },
                {
                    name: 'Sucursal',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    left: 0,
                    bottom: 50,
                    label: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}    ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                         shadowBlur:3,
                         shadowOffsetX: 2,
                         shadowOffsetY: 2,
                         shadowColor: '#999',
                         padding: [0, 7],
                        rich: {
                            a: {
                                color: 'black',
                                lineHeight: 15,
                                align: 'center',
                                width:-10
                            },
                             abg: {
                                
                                 width: 10,
                                 align: 'center',
                                 height: 12,
                                 borderRadius: [4, 4, 0, 0]
                             },
                            hr: {
                                borderColor: '#aaa',                               
                                borderWidth: 0.5,
                                height: 0,
                                width: 0
                            },
                            b: {
                                fontSize: 10,
                                lineHeight: -10,
                                width: 100,
                                
                                
                            },
                            per: {
                                color: '#eee',
                                align: 'center',
                                backgroundColor: '#334455',
                                padding: [2, 2],
                                borderRadius: 0.5,
                                fontSize: 10,

                            }
                        }
                    },
                    data: graphData
                       
                }
            ]
        };;
       
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
       
        $.extend(true, $.fn.dataTable.defaults, {
            "searching": false,
            "ordering": false
        });
        
        $("#example").dataTable({
            destroy: true,

            scrollX:false,

            dom: "fBtip",   //P: opciones de filtrado //Bfrtip  ifrtBp

            responsive: true,

            select: true,

            processing: true,

            paging: true,

           


            buttons: ['copy', 'excel', 'pdf', 'print', { extend: 'colvis', text: 'Columna' }],
            
            select: {

                style: "single"

            },

            "order": [[0, "desc"]],

            "lengthMenu": [[10, 15, 20, -1], [5, 10, 15, 20, "All"]],

            "language": {

                "lengthMenu": "Mostar _MENU_ entradas",

                "search": "Buscar:",

                "zeroRecords": "No se encontraron registros coincidentes",

                "infoFiltered": "(filtrado de _MAX_ entradas totales)",

                "info": "Mostrando _START_ a _END_ de _total_ entradas",

                "infoEmpty": "Mostrando 0 a 0 de 0 entradas",

                "paginate": {

                    "previous": "<<",

                    "next": ">>"

                },

                "processing": '<div class="d-flex justify-content-center"> <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status"> <span class="sr-only">Loading...</span> </div> </div>'
            }});

        $.each(data, function (key, value) {
            cliente += '<tr>';
            cliente += '<td>' + value.pref + '</td>';
            cliente += '<td>' + value.sucursal + '</td>';
            cliente += '<td>' + value.tecnologia + '</td>';
            cliente += '<td>' + value.total + '</td>';          
        });
      

        

        $('#example').append(cliente);

    })

})


