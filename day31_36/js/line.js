function drawGraph(data,max_num) {
    let c = document.getElementById("graph");
    c.width=c.width;
    let ctx = c.getContext("2d");
    console.log("arguments",typeof arguments[0]);
    // 画坐标轴
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.moveTo(0,0);
    
    ctx.lineTo(0,300);
    ctx.lineTo(500,300);
    ctx.stroke();
    ctx.save();

    let sale = data.sale;
    // let max_arr = Math.max.apply(null,sale);
    // console.log("最大值",max_arr);
    let ratio = 280/max_num;
    // 定义好两个数据点之间的横向间隔距离35
    ctx.height = ctx.height;
    ctx.beginPath();
    ctx.strokeStyle = "yellow"
    ctx.moveTo(35,300-sale[0]*ratio);
    for(let i = 1; i < sale.length; i++){
        ctx.lineTo(35+35*i,300-sale[i]*ratio);
    }
    ctx.stroke();  
}
// let data2 = {
//     product: "手机",
//     region: "华东",
//     sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
// }
// drawGraph(data2);