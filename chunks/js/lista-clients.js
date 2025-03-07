

//Build Tabulator
var table = new Tabulator("#lista-clients-table", {
    ajaxURL:"chunks/js/lista-clients.json",
    pagination:"local",
    paginationSize:10,
    paginationSizeSelector:[10, 15, 20, 25],
    layout:"fitColumns",
    height:"100%",
    maxHeight:"100%",
    columns:[
    {title:"Nombre", field:"name", widthGrow:1, hozAlign:"left"},
    {title:"Teléfono", field:"phone", hozAlign:"left", width:200},
    {title:"Email", field:"email", widthGrow:1},
    {title:"Ciudad", field:"city", hozAlign:"left", width:230},
    {title:"Desgloses", field:"desg", width:200},
    {title:"", field:"acction", hozAlign:"right", width:100, headerSort:false},
    ],
});
table.on("rowClick", function(e, row){
    window.location.href = "client-detail.html";
});