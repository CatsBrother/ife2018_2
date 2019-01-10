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
// 获取checkbox选择情况数据
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