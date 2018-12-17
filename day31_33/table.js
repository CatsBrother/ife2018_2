let products = document.getElementById("region-select");
let one_product = document.getElementsByTagName("option");
let table = document.getElementById("table-list");

// let choose_product = document.querySelector("option:selected")
products.onchange = function(){
    let pro_index = products.selectedIndex;
    let select_product = one_product[pro_index].text
    console.log(select_product);
    newTable(getData(select_product));
}
// region-select的change事件 = function() {
//     渲染新的表格(根据select选项获取数据)
// }

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
    console.log("content",content);
    table.innerText = content;  //无法将内容添加到表格中 innerHTML无效！！！？？？
}
window.onload = function(){
    console.log(sourceData[0]);
}    

