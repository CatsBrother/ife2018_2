let regions = document.getElementById("region-select");
let products = document.getElementById("product-select");
// let reg_opt = document.getElementsByTagName("option");
let reg_opt = document.querySelector("#region-select option");
let pro_opt = document.querySelector("#product-select option");
let table_div = document.getElementById("table_list");

regions.onchange = function(){
    let reg_index = regions.selectedIndex;
    let select_region = reg_opt[reg_index].text;
    console.log(select_region);
    newTable(getData(select_region));
}
products.onchange = function(){
    let pro_index = pro_index.selectedIndex;
    let select_product = pro_opt[pro_index].text;
}
// 根据select选项获取数据
function getData(select) {
    let arr = [];
    for(let i = 0; i < sourceData.length; i++){
        console.log(sourceData[i].region);
        if(sourceData[i].region == select){
            arr.push(sourceData[i]);
        }
    }
    console.log('arr',arr);
    return arr;
}
// 渲染新的表格
function newTable(data) {
    // table.appendChild()
    let str = "<tr> <th>商品</th> <th>产地</th>";
    let string = "";
    for(let i = 0; i < 12; i++){
        string += '<th>' + i + "月</th>"
    }
    str += string + "</tr>";
    let content = "";
    for(let j = 0; j < data.length; j++){
        let row = "<tr>";
        row += "<td>" + data[j].product + "</td>" + "<td>" + data[j].region + "</td>";
        let monthdata = "";
        for(let k = 0; k < data[j].sale.length; k++){
            monthdata += "<td>" + data[j].sale[k] + "</td>";
        }
        row += monthdata + "</tr>";
        console.log("row",row);
        content = content.concat(row);
    }
    table_div.innerHTML = content; 
}
// 初始化表格
window.onload = function(){
    let reg_index = 0;
    let select_region = reg_opt[reg_index].text
    console.log(select_region);
    newTable(getData(select_region));
}    

