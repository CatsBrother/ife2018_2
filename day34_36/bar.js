// 绘制一个柱状图
function drawHistogram(data) {
    let svg = document.getElementById("histogram");
    // 定义柱状图绘制区域的高度，宽度
    let height = 300;
    let width = 500; //宽高
    let pillar = 20;
    // 定义每一个柱子的宽度
    // 定义柱子颜色，轴的颜色
    let axisColor = '#666'; //轴的颜色
    let rectColor = '#89cff0';
    
    const padding = 30;
    let sale = data.sale;
    let max_data = Math.max.apply(null,sale);  //不懂 背了再说  数组取最大值
    console.log('最大值',max_data);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    // 拿到柱状图中的最大值Max
    // 根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    let rate = max_data/(height - padding);
    let string = [];   // innerHTML
    string.push(`<line x1="0" y1="300" x2="500" y2="300" stroke="${axisColor}" stroke-width="2"/>`);
    string.push(`<line x1="0" y1="300" x2="0" y2="0" stroke="${axisColor}" stroke-width="2"/>`);
    for(let i = 0; i < sale.length; i++){
        string.push(`<rect x="${pillar + 2*pillar*i}" y="${height - sale[i]*rate}" width="20" height="${sale[i]*rate}" style="fill:${rectColor};"/>`);
    }
    console.log('string',string.join(""));
    svg.innerHTML = string.join("");
}
let data = {
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}
drawHistogram(data);