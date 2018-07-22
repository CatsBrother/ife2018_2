# ife2018_2
花了两个周末终于把这个任务做完了，感觉写的还是比较乱，有种知其然不知其所以然的感觉，好在可以顺利运行，需要进一步的重构  
这个笔记不知道该怎么写才好，简单罗列一下吧 
## 定义一个日期对象
```
new Date(,,,);
参数年月日必须，时分秒随意，没有参数则是当前时间
```
## 判断闰年
```
function leapYear(year){
			var leap = false;
			if ((year % 4 == 0)&&(year % 100 != 0)) {
				leap = true;
			}else if (year % 400 == 0) {
				leap = true;
			}
			return leap;
		}
 ```
 ## 获取select option 选中的值
 ```
 var index = year.selectedIndex;    //获取dom对象的selectedIndex值 即为option的索引
 var aim = year.options[index].value;     // 对象.options[索引].value 获取option的value值
 ```
 ## 求两个时间差值
 时间对象.getTime() 为1970年一月一日至今毫秒数，两个毫秒相减，单位换算即可
 
 ## date 方法
 方法	描述
> Date()	返回当日的日期和时间。
> getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
> getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
> getMonth()	从 Date 对象返回月份 (0 ~ 11)。
> getFullYear()	从 Date 对象以四位数字返回年份。
> getHours()	返回 Date 对象的小时 (0 ~ 23)。
> getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
> getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
> getTime()	返回 1970 年 1 月 1 日至今的毫秒数。
> setDate()	设置 Date 对象中月的某一天 (1 ~ 31)。
> setMonth()	设置 Date 对象中月份 (0 ~ 11)。
> setFullYear()	设置 Date 对象中的年份（四位数字）。
> setHours()	设置 Date 对象中的小时 (0 ~ 23)。
> setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)。
> setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
> setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)。
> toLocaleString()	根据本地时间格式，把 Date 对象转换为字符串。

