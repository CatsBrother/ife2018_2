# 28-30天 邮箱地址
预览地址： https://catsbrother.github.io/ife2018_2/day28_30/code1.html
## 键盘事件：
### 事件触发
事件触发顺序：keydown - > keypress - > keyup  
keydown: 当用户按下任意键时触发，而且按住不放的话，会重复触发此事件。  
keypress: 当用户按下字符键时触发，而且按住不放的话，会重复触发此事件。  
keyup: 当用户释放键时触发。  
### keyCode  
获取keyCode   event.keyCode  
回车、上下左右、等功能键keydown、keypress、keyup都获取keyCode，并且值相等。  
keydown: 获得keyCode， charCode=0  
keypress: 字符（英文区分大小写+数字  / * , .  ...等非功能键），keyCode=0 ，获取charCode值， 反之获取keyCode， charCode=0   
keyup: 获得keyCode， charCode=0  
### 其他：  
keypress事件不能对系统功能键(例如：后退、删除等，其中对中文输入法不能有效响应)进行正常的响应，  
keydown和keyup均可以对系统功能键进行有效的拦截，但事件截获的位置不同。  
keypress事件的keyCode对字母的大小写敏感，而keydown、keyup事件不敏感  
只有在触发keyup事件才能获得修改后的文本值。  
## XSS 攻防 转码解码  
XSS攻防  
跨站脚本攻击(Cross Site Scripting)，缩写为XSS，  
恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。  

转码 解码
```
<script>
var HtmlUtil = {
        /*1.用浏览器内部转换器实现html转码*/
        htmlEncode:function (html){
            //1.首先动态创建一个容器标签元素，如DIV
            var temp = document.createElement ("div");
            //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
            (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
            //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
            var output = temp.innerHTML;
            temp = null;
            return output;
        },
        /*2.用浏览器内部转换器实现html解码*/
        htmlDecode:function (text){
            //1.首先动态创建一个容器标签元素，如DIV
            var temp = document.createElement("div");
            //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
            temp.innerHTML = text;
            //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
            var output = temp.innerText || temp.textContent;
            temp = null;
            return output;
        },
        /*3.用正则表达式实现html转码*/
        htmlEncodeByRegExp:function (str){ 
             var s = "";
             if(str.length == 0) return "";
             s = str.replace(/&/g,"&");
             s = s.replace(/</g,"<");
             s = s.replace(/>/g,">");
             s = s.replace(/ /g," ");
             s = s.replace(/\'/g,"'");
             s = s.replace(/\"/g,""");
             return s; 
       },
       /*4.用正则表达式实现html解码*/
       htmlDecodeByRegExp:function (str){ 
             var s = "";
             if(str.length == 0) return "";
             s = str.replace(/&/g,"&");
             s = s.replace(/</g,"<");
             s = s.replace(/>/g,">");
             s = s.replace(/ /g," ");
             s = s.replace(/'/g,"\'");
             s = s.replace(/"/g,"\"");
             return s; 
       }
    };
</script>
```
## 其他
var input = document.getElementById("email-input");
获取焦点    input.focus();  
全选内容    input.select();  
var t = e.target;
t.nodeName 获取节点名称===LI  
获取标签内容   innerText  

