function link(cell, formatterParams){
    var url = cell.getValue();
      return "<a href='/"+url+"'>"+url+"</a>";
  }

//Build Tabulator
var table = new Tabulator("#lista-desgl-table", {
    ajaxURL:"chunks/js/lista-desgl.json",
    pagination:"local",
    paginationSize:10,
    paginationSizeSelector:[10, 15, 20, 25],
    layout:"fitColumns",
    height:"100%",
    maxHeight:"100%",
    columns:[
    {title:"Ciclo", field:"ciclo", width:100, hozAlign:"left"},
    {title:"Mes", field:"mes", hozAlign:"left", width:120},
    {title:"Nombre", formatter:link, field:"name", widthGrow:1},
    {title:"Articulos", field:"articulos", hozAlign:"left", width:120},
    {title:"Total", field:"total", width:120},
    {title:"Canal", field:"canal", width:120},
    {title:"Status", field:"status", hozAlign:"left", width:150, headerSort:false, formatter:function(cell, formatterParams){
        var value = cell.getValue();
         if(value.indexOf("Pagado") !== -1){
             return "<span class='badge text-bg-success'>" + value + "</span>";
         }
         if(value.indexOf("Pendiente") !== -1){
             return "<span class='badge text-bg-send'>" + value + "</span>";
         }
         if(value.indexOf("En deuda") !== -1){
            return "<span class='badge text-bg-debt'>" + value + "</span>";
        }
         else{
             return value;
         }
     }},
    {title:"", field:"button", hozAlign:"right", width:100, headerSort:false},
    ],
});
