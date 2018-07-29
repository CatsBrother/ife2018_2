var wrapper = document.getElementsByClassName("wrapper")[0];
var input = document.getElementById("email-input");
var ul = document.getElementById("email-sug-wrapper");
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
//console.log("input "+input.value);
// document.onkeydown = function(e){
//     console.log("keydown "+e.keyCode);
// }
// document.onkeypress = function(e){
//     console.log("keypress "+e.keyCode);
// }
document.onkeyup = function(e){
    //console.log("value "+input.value);
    addLi();
    hideShow();
}

//去掉字符串前后空格
function trim(str){
    if(str){
       // console.log("str "+str);
        var str2 = String(str).match(/\S/g);
        var val = str2.join("");
        input.value = val;
        return val;
    }else{
        return null;
    }
}

//拿到input输入框的输入内容trim后返回
function getInput() {
    var str = input.value;
    return trim(str);
}
// console.log("getinput  " + getInput());

//生成提示框中的提示内容
function setHint() {
    if(getInput()){
        let userinput = getInput();
        let hint = [];
        if(userinput.indexOf('@') !== -1){
            var index = userinput.indexOf('@');
            var alater = userinput.substr(index+1); //@后
            userinput = userinput.substring(0,index);  //@前
            if(alater === ""){
                for (let i = 0; i < postfixList.length; i++) {
                    hint[i] = userinput +"@"+ postfixList[i];
                }
            }else{
                for (let i = 0,j = 0; i < postfixList.length; i++) {
                    // console.log(postfixList[i].indexOf(alater));
                    if(postfixList[i].indexOf(alater) >= 0){
                        hint[j] = userinput +"@"+ postfixList[i];
                        j ++;
                    }
                }
            }
        }else{
            for (let i = 0; i < postfixList.length; i++) {
                hint[i] = userinput +"@"+ postfixList[i];
            }
        }
        return hint;
    }else{
        return null;
    }
}

//将提示内容添加到email-sug-wrapper中
function addLi() {
    var hint = setHint();
    if(hint){
        var li="";
        for (let i = 0; i < hint.length; i++) {
            li += '<li>'+hint[i]+'</li>';
        }
        // li = li + '</ul>'
        ul.innerHTML = li;
    }else{
        hide();
    }
    
}

//控制email-sug-wrapper的显示/隐藏状态
function hideShow() {
    if (getInput() === null) {
        hide();
    } else {
        show();
    }
}

//隐藏提示框
function hide() {
    ul.style.display = 'none';
}

//显示提示框
function show() {
    ul.style.display = 'block';
}

ul.onclick = function (e) {
    var t = e.target;
    if(t.parentNode === "ul"){
        var choose = t.value;
        input.value = choose;
        hide();
    }
    // if 被点击的是不是提示框中的Li节点 {
    //     获取被点击Li对应的提示内容
    //     将内容放到input输入框中
    //     隐藏输入框
    // }
}