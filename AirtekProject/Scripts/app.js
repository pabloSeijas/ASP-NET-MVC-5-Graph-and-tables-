//GLOBALS
var vpref, vsucursal, vtecnologia, vtotal, i, e;
    vpref = [];
    vsucursal = [];
    vtotal = [];
    vtecnologia = [];


$(document).ready(function () {

    $.get("Home/equiposGetData", function (data, status) {
        var cliente;

        var editor; // use a global for the submit and return data rendering in the examples
        console.log(data)
        for (i = 0; i <= data.length; i++) {
            if (i === data.length) { break; }
            vpref.push(data[i].pref);
            vsucursal.push(data[i].sucursal);
            vtotal.push(data[i].total);
            vtecnologia.push(data[i].tecnologia);
            
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        var sucursal = vsucursal.filter(onlyUnique);
        var tecnologia = vtecnologia.filter(onlyUnique);
        console.log(sucursal)
        console.log(tecnologia)
        
       
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                bottom: 10,
                data: tecnologia
            },
            series: [
                {
                    name: 'Tecnologías',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    left: 50,
                    bottom: 50,

                    label: {
                        position: 'inner'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 335, name: tecnologia[0], selected: true },
                        { value: 679, name: tecnologia[1] },
                        { value: 1548, name: tecnologia[2] },
                        { value: 1548, name: tecnologia[3] }
                    ]
                },
                {
                    name: 'Sucursal',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    left: 50,
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
                                color: '#999',
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
                    data: [
                        { value: 335, name: sucursal[0] },
                        { value: 310, name: sucursal[1] },
                        { value: 234, name: sucursal[2] },
                        { value: 135, name: sucursal[3] },
                        { value: 1048, name: sucursal[4] },
                        { value: 251, name: sucursal[5] },
                        { value: 147, name: sucursal[6] },
                        { value: 102, name: sucursal[7] },
                        { value: 102, name: sucursal[8] },
                        { value: 102, name: sucursal[9] }
                         
                    ]
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


