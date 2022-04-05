window.onload=function(){
    var preBtn=document.getElementById("left");
    var nextBtn=document.getElementById("right");
    var imgs=document.getElementsByClassName("xximg");
    var circles=document.getElementsByClassName("circle");
    var banner=document.querySelector(".banner");
    var show_goods=document.getElementsByClassName("show-goods");
    var list=document.getElementsByClassName("list");
    var tool=document.getElementsByClassName("hover")
    var tools=document.getElementsByClassName("tools")   
    var index=0;
    var index1=0;
    var index2=0;
    var timer=null;
// 上方商品列表切换
var clearclass1=function(){
    for(let i=0;i<list.length;i++){
        list[i].className="list";
        list[i].setAttribute("number",i);
     }
}
clearclass1();
function move(){
    clearclass1();
    list[index].className="list active";
    }
for(let i=0;i<list.length;i++){
    show_goods[i].addEventListener("mouseover",function(){
        let list_index=list[i].getAttribute("number");
        index=list_index;
        move();
    })
}

// 轮播图效果
var clearclass2=function(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].className="xximg";
        circles[i].className="circle";
        circles[i].setAttribute("num",i);
    }
}
function move1(){
    clearclass2();
    imgs[index1].className="xximg active";
    circles[index1].className="circle circle-active";
}
// 点击小圆点切换轮播图
for(let i=0;i<circles.length;i++){
    circles[i].addEventListener("click",function(){
        let circle_index=circles[i].getAttribute("num");
        index1=circle_index;
        move1();
    })
}
// 切换至下一张轮播图
nextBtn.onclick=function(){
    if(index1<imgs.length-1){
        index1++;
    }
    else{
        index1=0;
    }
    move1();
}
//  切换下一张轮播图
preBtn.onclick=function(){
    if(index1>0){
        index1--;
    }
    else{
        index1=imgs.length-1;
    }
    move1();
}
// 轮播图计时轮换
timer=setInterval(
    function(){
        nextBtn.onclick();}
,2000)
// 鼠标移入时停止计时
banner.onmouseover=function(){
    clearInterval(timer);
} 
// 鼠标移出继续计时
banner.onmouseleave=function(){
    clearInterval(timer);
    timer=setInterval(
        function(){
            nextBtn.onclick();}
    ,2000)
}
// 右侧工具栏
var clearclass3=function(){
    for(let i=0;i<tool.length;i++){
        tool[i].className="hover";
        tool[i].setAttribute("number1",i);
     }
}
function move2(){
    clearclass3();
    tool[index2].className="hover visible";
    }
for(let i=0;i<tool.length;i++){
    tools[i].addEventListener("mouseover",function(){
        let tool_index=tool[i].getAttribute("number1");
        index2=tool_index;
        move2();
    })
}
for(let i=0;i<tool.length;i++){
    tools[i].addEventListener("mouseout",function(){
        clearclass3();
    })
}
}