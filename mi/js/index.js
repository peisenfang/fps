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
    var timer=null;
// 上方商品列表切换
function clearclass1(){
    for(let i=0;i<list.length;i++){
        list[i].className="list";
        list[i].setAttribute("number",i);
    }
}
clearclass1();
for(let i=0;i<list.length;i++){
    show_goods[i].addEventListener("mouseover",function(){
        let index=list[i].getAttribute("number");
        clearclass1();
        list[index].className="list active";
    })
}

// 轮播图效果
let index_img = 0;
function clearclass2(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].className="xximg";
        circles[i].className="circle";
        circles[i].setAttribute("num",i);
    }
}
function move(){
    clearclass2();
    imgs[index_img].className="xximg active";
    circles[index_img].className="circle circle-active";
}
move();
for(let i=0;i<circles.length;i++){// 点击小圆点切换轮播图
    circles[i].addEventListener("click",function(){
        index_img = circles[i].getAttribute("num");
        move();
    })
}

nextBtn.onclick=function(){// 切换至下一张轮播图
    if(index_img<imgs.length-1){
        index_img++;
    }
    else{
    index_img=0;
    }
    move();
}

preBtn.onclick=function(){//  切换下一张轮播图
    if(index_img>0){
        index_img--;
    }
    else{
        index_img=imgs.length-1;
    }
    move();
}

timer=setInterval(// 轮播图计时轮换
    function(){
        nextBtn.onclick();}
,2000)

banner.onmouseover=function(){// 鼠标移入时停止计时
    clearInterval(timer);
} 

banner.onmouseleave=function(){// 鼠标移出继续计时
    clearInterval(timer);
    timer=setInterval(
        function(){
            nextBtn.onclick();}
    ,2000)
}

// 右侧工具栏
function clearclass3(){
    for(let i=0;i<tool.length;i++){
        tool[i].className="hover";
        tool[i].setAttribute("number1",i);
     }
}

for(let i=0;i<tool.length;i++){
    tools[i].addEventListener("mouseover",function(){
        let index_tool=tool[i].getAttribute("number1");
        clearclass3();
        tool[index_tool].className="hover visible";
    })
}
for(let i=0;i<tool.length;i++){
    tools[i].addEventListener("mouseout",function(){
        clearclass3();
    })
}
}