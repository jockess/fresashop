//Build Tabulator
var table = new Tabulator("#lista-compras-table", {
    ajaxURL:"chunks/js/ciclo-compras.json",
    layout:"fitColumns",
    height:"100%",
    maxHeight:"100%",
    columns:[
    {title:"Fecha", field:"fecha", widthGrow:1, hozAlign:"center"},
    {title:"Tienda", field:"tienda", hozAlign:"left", widthGrow:1},
    {title:"Status", field:"status", widthGrow:1},
    {title:"Cliente", field:"cliente", hozAlign:"left", width:130},
    {title:"Qty", field:"cantidad", width:90,},
    {title:"Producto", field:"producto", hozAlign:"left", widthGrow:3},
    {title:"Precio", field:"precio", hozAlign:"left", widthGrow:1},
    ],
});
table.on("rowClick", function(e, row){
    $('#editModal').modal('show');
});