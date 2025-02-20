

//Build Tabulator
var table = new Tabulator("#lista-compras-table", {
    ajaxURL:"https://jockess.github.io/fresashop/chunks/js/lista-compras.json",
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
    {title:"Estado", field:"estado", hozAlign:"left", widthGrow:1, formatter:function(cell, formatterParams){
        var value = cell.getValue();
         if(value.indexOf("Compras") !== -1){
             return "<span class='badge text-bg-success'>" + value + "</span>";
         }
         if(value.indexOf("Enviado") !== -1){
             return "<span class='badge text-bg-send'>" + value + "</span>";
         }
         if(value.indexOf("Proceso") !== -1){
            return "<span class='badge text-bg-process'>" + value + "</span>";
        }
         else{
             return value;
         }
     }},
    ],
});
table.on("rowClick", function(e, row){
    window.location.href = "https://jockess.github.io/fresashop/shop-list.html";
});