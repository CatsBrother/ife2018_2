let regions = document.getElementById("region-select");
let products = document.getElementById("product-select");
// let reg_opt = document.querySelectorAll("#region-select option");
// let pro_opt = document.querySelectorAll("#product-select option");
let table_div = document.getElementById("table_list");
let reg_checkbox = document.getElementById("region-radio-wrapper");
let pro_checkbox = document.getElementById("product-radio-wrapper");
// 定义选中的地区和产品数组
let arr1 = [];
let arr2 = [];
// let reg_index = 0;
// let pro_index = 0;
// let select_region = reg_opt[reg_index].text;
// let select_product = pro_opt[pro_index].text;

// select事件
// regions.onchange = function(){
//     let reg_index = regions.selectedIndex;
//     select_region = reg_opt[reg_index].text;
//     console.log('select_region',select_region);
//     newTable(getData(select_region,select_product));
// }
// products.onchange = function(){
//     let pro_index = products.selectedIndex;
//     select_product = pro_opt[pro_index].text;
//     console.log('select_product',select_product);
//     newTable(getData(select_region,select_product));
// }

// 根据select选项获取数据
/*function getData(select_reg,select_pro,) {
    let arr = [];
    for(let i = 0; i < sourceData.length; i++){
        console.log(sourceData[i].region);
        if(sourceData[i].region === select_reg && sourceData[i].product === select_pro){
            arr.push(sourceData[i]);
        }
    }
    console.log('arr',arr);
    return arr;
}*/
// 渲染新的表格  select

function newTable(data,arr1,arr2) {
    // 当地区只有一个时地区为第一列 其他情况商品第一列
    if(arr1.length === 1 && arr2.length !==1){
        str = "<tr> <th>地区</th> <th>商品</th>";
        is_product = true;
    }else{
        str = "<tr> <th>商品</th> <th>产地</th>";
        is_product = false;
    }
    let string = '<th>1月</th>'
                +'<th>2月</th>'
                +'<th>3月</th>'
                +'<th>4月</th>'
                +'<th>5月</th>'
                +'<th>6月</th>'
                +'<th>7月</th>'
                +'<th>8月</th>'
                +'<th>9月</th>'
                +'<th>10月</th>'
                +'<th>11月</th>'
                +'<th>12月</th>'
    str += string + "</tr>";
    console.log('表头',str);
    let content = "";
    for(let j = 0; j < data.length; j++){
        let row = "<tr>";
        if(is_product){
            row += "<td>" + data[j].region + "</td>" + "<td>" + data[j].product + "</td>";
        }else{
            row += "<td>" + data[j].product + "</td>" + "<td>" + data[j].region + "</td>";
        }
        let month_data = "";
        for(let k = 0; k < data[j].sale.length; k++){
            month_data += "<td>" + data[j].sale[k] + "</td>";
        }
        row += month_data + "</tr>";
        console.log("row",row);
        content = content.concat(row);
    }
    table_div.innerHTML = str + content; 
}

// 初始化表格
// window.onload = function(){
//     newTable(getData(select_region,select_product));
// }    

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
        // 设置选择按钮事件（全选等）
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
        // 分别输出两个数组
        if(container === reg_checkbox){
            arr1 = getOriginData(container);
        }else if(container === pro_checkbox){
            arr2 = getOriginData(container)
        }
        console.log('array',getData(arr1,arr2));
        newTable(getData(arr1,arr2),arr1,arr2);
    }
}
// 获取数据
function getData(arr1,arr2){
    let array = [];
    for(let i = 0; i < sourceData.length; i++){
        if(arr1.indexOf(sourceData[i].region)>-1 && arr2.indexOf(sourceData[i].product)>-1){
            array.push(sourceData[i]);
        }
    }
    return array;
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

// 获取数据
function getOriginData (container){
    let children = container.children;
    let arr = [];
    for(let i = 1; i < children.length; i++){
        if(children[i].checked){
            arr.push(children[i].getAttribute("text"));
        }
    }
    return arr;
}
// 我的妈终于写完了