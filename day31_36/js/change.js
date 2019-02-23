let table_list = document.getElementById("table_list");
table_list.onmouseover = function(e){
    let t = e.target;
    if(t.nodeName == "TD"){
        let obj_str = t.parentNode.innerHTML;
        let obj_arr = obj_str.replace(/<[/]?td>/g,' ').split(' ');
        obj_arr = deleteEmpty(obj_arr);
        let obj = new Object;
        obj.product = obj_arr[0];
        obj.region = obj_arr[1];
        obj.sale = obj_arr.slice(2);
        drawHistogram(obj, max_num);
        drawGraph(obj, max_num);
    }
}

// 删除数组中的空元素
function deleteEmpty(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ''){
            arr.splice(i,1);
            i= i - 1;
        }
    }
    return arr;
}
