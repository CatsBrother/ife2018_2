var wrapper = document.getElementsByClassName("wrapper")[0];
var input = document.getElementById("email-input");
var ul = document.getElementById("email-sug-wrapper");
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var nowSelectTipIndex = 0;
//console.log("input "+input.value);
// document.onkeydown = function(e){
//     console.log("keydown "+e.keyCode);
// }
// document.onkeypress = function(e){
//     console.log("keypress "+e.keyCode);
// }
document.onkeyup = function(e){
    var numli = setHint();
    if(e.keyCode !== 13 && e.keyCode !== 38 && e.keyCode !== 40 && e.keyCode !== 27){
        addLi();
        hideShow();
    }else{
        if (e.keyCode === 38) {
            if(nowSelectTipIndex === 0){
                nowSelectTipIndex = numli.length - 1;
            }else{
                nowSelectTipIndex = nowSelectTipIndex - 1;
            }
            addLi();
            hideShow();
        }else if(e.keyCode === 40){
            if(nowSelectTipIndex >= numli.length-1) {
                nowSelectTipIndex = 0;
            } else {
                nowSelectTipIndex = nowSelectTipIndex + 1;
            }
            addLi();
            hideShow();
        }else if(e.keyCode === 13){
            input.value = numli[nowSelectTipIndex];
            hide();
        }else if(e.keyCode === 27){
            input.select();
        }
    }
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
        for (let i = 0; i < hint.length; i++) {
            hint[i] = htmlEncode(hint[i]);
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
            if(i === nowSelectTipIndex){
                li += '<li class = "active">'+hint[i]+'</li>';
            }else{
                li += '<li>'+hint[i]+'</li>';
            }
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
    if(t.parentNode.nodeName === "UL"){
        var choose = t.innerText;
        console.log("t.value:"+choose);
        input.value = htmlDecode(choose);
        hide();
        input.focus();
    }
}

//转码 解码

function htmlEncode (html){
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement ("div");
    //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
    (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
    //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
    var output = temp.innerHTML;
    temp = null;
    return output;
}
/*2.用浏览器内部转换器实现html解码*/
function htmlDecode (text){
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}
function refresh() {
    nowSelectTipIndex = 0;
}

