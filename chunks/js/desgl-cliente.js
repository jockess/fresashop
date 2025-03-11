//Build Tabulator
var table = new Tabulator("#lista-compras-table", {
    ajaxURL:"chunks/js/desgl-cliente.json",
    layout:"fitColumns",

    columns:[
    {title:"Tienda", field:"tienda", width:130, hozAlign:"left"},
    {title:"Status", field:"status", hozAlign:"left", width:100},
    {title:"QTY", field:"qty", width:100},
    {title:"Producto", field:"producto", hozAlign:"left", widthGrow:1},
    {title:"Precio", field:"precio", hozAlign:"left", width:130},
    ],
});
table.on("rowClick", function(e, row){
    $('#editproduct').modal('show');
});