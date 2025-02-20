//Build Tabulator
var table = new Tabulator("#lista-compras-table", {
    ajaxURL:"./chunks/js/ciclo-compras.json",
    pagination:"local",
    paginationSize:10,
    paginationSizeSelector:[10, 15, 20, 25],
    layout:"fitColumns",
    height:"100%",
    maxHeight:"100%",
    columns:[
    {title:"Ciclo", field:"ciclo", width:90, hozAlign:"center"},
    {title:"Mes", field:"mes", hozAlign:"left", widthGrow:1},
    {title:"Fecha", field:"fecha", sorter:"date", widthGrow:1},
    {title:"Articulos", field:"articulos", hozAlign:"left", width:130},
    {title:"Total", field:"total", widthGrow:1},
    {title:"Ubicacion", field:"ubicacion", hozAlign:"left", widthGrow:1},
    {title:"Canal", field:"canal", hozAlign:"left", widthGrow:1},
    ],
});