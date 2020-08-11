//GLOBALS
var vMONTOAUT, vMONTOMANUAL, vTOTAL, vTOTALDOL, i, e;
    vMONTOAUT = [];
    vMONTOMANUAL = [];
    vTOTAL = [];
    vTOTALDOL = [];


$(document).ready(function () {

    $.get("Home/ReciboGetData", function (data, status) {
        var cliente;

        var editor; // use a global for the submit and return data rendering in the examples
        console.log(data)
        for (i = 0; i <= data.length; i++) {
            if (i === data.length) { break; }
            vMONTOAUT.push(data[i].MONTOAUT);
            vMONTOMANUAL.push(data[i].MONTOMANUAL);
            vTOTAL.push(data[i].TOTAL);
            vTOTALDOL.push(data[i].TOTALDOL);
            
        }

        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            title: {
                text: 'Montos',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                left: 'left',
                data: ['Monto Auto', 'Monto Manual', 'Total', 'Total Dólar'],
                bottom: '10%'
            },
            series: [
                {
                    name: 'Montos',
                    type: 'pie',
                    radius: '40%',
                    center: ['45%', '35%'],
                    label: {
                        distanceToLabelLine: 1,
                        margin: '10%',
                },
                    data: [
                        { value: vMONTOAUT[0], name: 'Monto Auto' },
                        { value: vMONTOMANUAL[1], name: 'Monto Manual' },
                        { value: vTOTAL[2], name: 'Total' },
                        { value: vTOTALDOL[3], name: 'Total Dólar' },
                        
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        }
                    }
                }
            ]
        };
        ;

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
            
            "columnDefs": [

                {

                    "targets": [0, 1, 2, 3, 4],

                    "visible": true,

                }

            ],

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

                "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",

                "infoEmpty": "Mostrando 0 a 0 de 0 entradas",

                "paginate": {

                    "previous": "<<",

                    "next": ">>"

                },

                "processing": '<div class="d-flex justify-content-center"> <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status"> <span class="sr-only">Loading...</span> </div> </div>'
            }});
        for (i = 0; i <= data.length; i++) {
            if (i === data.length) { break; }
            vMONTOAUT.push(data[i].MONTOAUT);
            vMONTOMANUAL.push(data[i].MONTOMANUAL);
            vTOTAL.push(data[i].TOTAL);
            vTOTALDOL.push(data[i].TOTALDOL);

        }

        var fecha = new Date()

        $.each(data, function (key, value) {
            cliente += '<tr>';
            cliente += '<td>' + value.NOMBRES + '</td>';
            cliente += '<td>' + value.CODCLIENTE + '</td>';
            cliente += '<td>' + value.BANCO + '</td>';
            cliente += '<td>' + value.FORMAPAGO + '</td>';
            cliente += '<td>' + fecha.getDate(value.FECSISTEM) + '/' + fecha.getMonth(value.FECSISTEM) + '/' + fecha.getFullYear(value.FECSISTEM) + '</td>';
            cliente += '<td>' + value.VERIFICADOMANUAL +'</td>';
            cliente += '<td>' + value.TOTAL + '</td>';
        });
      

        

        $('#example').append(cliente);

    })

})


