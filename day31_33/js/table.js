let regions = document.getElementById("region-select");
let products = document.getElementById("product-select");
let reg_opt = document.querySelectorAll("#region-select option");
let pro_opt = document.querySelectorAll("#product-select option");
let table_div = document.getElementById("table_list");
let reg_checkbox = document.getElementById("region-radio-wrapper");
let pro_checkbox = document.getElementById("product-radio-wrapper");
var reg_index = 0;
var pro_index = 0;
var select_region = reg_opt[reg_index].text;
var select_product = pro_opt[pro_index].text;
// console.log('select_region',select_region);
// console.log('select_product',select_product);

regions.onchange = function(){
    let reg_index = regions.selectedIndex;
    select_region = reg_opt[reg_index].text;
    console.log('select_region',select_region);
    newTable(getData(select_region,select_product));
}
products.onchange = function(){
    let pro_index = products.selectedIndex;
    select_product = pro_opt[pro_index].text;
    console.log('select_product',select_product);
    newTable(getData(select_region,select_product));
}

// 根据select选项获取数据
function getData(select_reg,select_pro,) {
    let arr = [];
    for(let i = 0; i < sourceData.length; i++){
        console.log(sourceData[i].region);
        if(sourceData[i].region === select_reg && sourceData[i].product === select_pro){
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
    newTable(getData(select_region,select_product));
}    

// 19.1.2  生成checkbox
function setCheckBox(container, array) {
    let all = `<input type="checkbox" checkbox_type="all" text="全选"/>全选`;
    let check_str = '';
    for(let i = 0; i < array.length; i++){
        check_str += `<input type="checkbox" checkbox_type="one" text="${array[i].text}"/> ${array[i].text} `;
    }
    container.innerHTML = all + check_str;

    container.onclick = function(e){
        let t = e.target;
        if(t.type === 'checkbox'){
            let type = t.getAttribute("checkbox_type");
            if(type === 'all'){
                let i = 1;
                for(i in t.parentNode.children){
                    t.parentNode.children[i].checked = true;
                }
            }else{
                let sum = 0;
                t.parentNode.children[0].checked = false;
                for(let j = 1; j < t.parentNode.children.length; j++){
                    if(t.parentNode.children[j].checked === true){
                        sum++;
                    }
                }
                console.log('sum',sum);
                if(sum == 0){
                    t.checked = true;
                }else if(sum == 3){
                    t.parentNode.children[0].checked = true;
                }
            }
        }
    }
}
// 调用
setCheckBox(reg_checkbox, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华北"
}, {
    value: 3,
    text: "华南"
}]);

setCheckBox(pro_checkbox, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
}, {
    value: 3,
    text: "智能音箱"
}]);