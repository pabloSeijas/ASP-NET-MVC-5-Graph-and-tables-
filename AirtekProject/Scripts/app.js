function orderJSON(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function myFunc(total, num) {
    return total + num;
}

$(document).ready(function () {
   
    $.get("Home/equiposGetData", function (data, status) {

        //data ORDER BY "TECNOLOGIA"
        var dataOrder = data.sort(orderJSON("tecnologia"));
        var i, e, g;
       //SUCURSALES POR TECNOLOGÍA
        CMsucursal = [];
        GPsucursal = [];
        WLsucursal = [];
       //CONTRUCCIÓN DE ARRAYS PARA LABELS DEL GRÁFICO
        for (i = 0; i < dataOrder.length; i++) {
            if (dataOrder[i].tecnologia == 'cablemodem') {
                CMsucursal.push(dataOrder[i].sucursal + "" + "CM");
            } 
            if (dataOrder[i].tecnologia == 'gpon') {
                GPsucursal.push(dataOrder[i].sucursal + "" + "GP");
            } 
            if (dataOrder[i].tecnologia == 'wireless') {
                WLsucursal.push(dataOrder[i].sucursal + "" + "WL");
            } 
          
        }
  
        var cliente;
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var graphData = [];
  
        //TOTALES
        var totalCM = [];
        var totalGP = [];
        var totalWL = [];
        
        for (e = 0; e < data.length; e++) {          
             //PARA TOTAL
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
        graphStr(dataOrder, graphData, g, data, totalCM, totalGP, totalWL)  
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
        console.log(dataOrder)
        $('#example').append(cliente);
    })
})
function graphStr(dataOrder, graphData, g, data, totalCM, totalGP, totalWL) {
    //COLOR LIST
    var clCM = ['#548773', '#477160', '#3d6153', '#316d55', '#277757', '#457d67', '#2a4c3e', '#223f33', '#1d4434', '#5a8172']
    var clGP = ['#6cb7be', '#51abb3', '#439198', '#387a80', '#71bac1', '#86c4ca', '#9fd1d5', '#11c3d0', '#68999c', '#97c1c4']
    var clWL = ['#1b2936', '#243647', '#2b4055', '#324a62', '#3e5c7a', '#496e92', '#547da6', '#6a8fb4', '#7e9ebe', '#8fabc7']
    for (g = 0; g < data.length; g++) {
        if (data[g].tecnologia === 'cablemodem') {
            graphData.push({
                name: dataOrder[g].sucursal + "" + "CM",
                value: dataOrder[g].total,
                itemStyle: {
                    normal: {
                        color: clCM[Math.floor(Math.random() * 10)],
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
        if (dataOrder[g].tecnologia === 'gpon') {
            graphData.push({
                name: dataOrder[g].sucursal + "" + "GP",
                value: dataOrder[g].total,
                itemStyle: {
                    normal: {
                        color: clGP[Math.floor(Math.random() * 10)],
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
        if (dataOrder[g].tecnologia === 'wireless') {
            graphData.push({
                name: dataOrder[g].sucursal + "" + "WL",
                value: dataOrder[g].total,
                itemStyle: {
                    normal: {
                        color: clWL[Math.floor(Math.random() * 10)],
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
    }

    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        //LEGENDS
        //SUCURSALES PARA CABLEMODEM
        legend: [{
            bottom: 80,
            left: 10,
            width: '100%',
            orient: 'horizontal',
            height: '100',
            selectedMode: 'multiple',
            data: CMsucursal, borderColor: "rgba(38, 33, 33, 1)",
            borderWidth: 0.3,
            borderRadius: [5, 5, 5, 5]
        },
        //LEGENDS TECNOLOGIA
        {
            orient: 'vertical', left: 10, width: '50%', height: 'auto', data: ['CM', 'WL', 'GP'],
        },
        //SUCURSALES PARA GPON
        {
            orient: 'horizontal', left: 10, bottom: 50, width: '100%', height: '100', data: GPsucursal, borderColor: "rgba(38, 33, 33, 1)",
            borderWidth: 0.3,
            borderRadius: [5, 5, 5, 5]
        },
        //SUCURSALES PARA WIRELESS
        {
            orient: 'horizontal', left: 10, bottom: -3, width: '100%', height: '100', data: WLsucursal, borderColor: "rgba(38, 33, 33, 1)",
            borderWidth: 0.3,
            borderRadius: [5, 5, 5, 5]
        },
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
                        value: totalCM.reduce(myFunc), name: 'CM', itemStyle: {
                            normal: {
                                color: '#609982',
                                lineStyle: {
                                    color: 'white'
                                },
                                areaStyle: {
                                    color: '#609982'
                                },
                            },
                        },
                    },
                    {
                        //GP PARA GPON
                        value: totalGP.reduce(myFunc), name: 'GP', itemStyle: {
                            normal: {
                                color: '#6cb7be',
                                lineStyle: {
                                    color: 'white'
                                },
                                areaStyle: {
                                    color: '#6cb7be'
                                },
                            },
                        },
                    },
                    {
                        //WL PARA WIRELESS
                        value: totalWL.reduce(myFunc), name: 'WL', itemStyle: {
                            normal: {
                                color: '#1b2936',
                                lineStyle: {
                                    color: 'white'
                                },
                                areaStyle: {
                                    color: '#1b2936'
                                },
                            },
                        },
                    },
                    {

                    },

                ],
            },
            {
                name: '',
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
                    shadowBlur: 3,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    shadowColor: '#999',
                    padding: [0, 7],
                    rich: {
                        a: {
                            color: 'black',
                            lineHeight: 15,
                            align: 'center',
                            width: 10
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
                            width: 'auto',
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
   
}
 //graphStr END
