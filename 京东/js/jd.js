window.onload=function() {
    // 轮播图
    let dots = document.querySelectorAll(".dot");
    let imgs = document.querySelectorAll(".slider_wrapper img");
    let banner = document.querySelector(".slider_wrapper");
    let prev = document.querySelector(".slider_control_prev");
    // console.log(prev);
    let next = document.querySelector(".slider_control_next");
    banner_oi(dots, imgs, banner, prev, next, "dot_active", 1500)
    // 顶部搜索框
    let search =document.querySelector(".search-fix");
    // console.log(search);
    window.onscroll = function () {
        bodytop = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(bodytop);

        if (bodytop>=300) {

            search.style.top = 0;
        }
        if (bodytop<300) {
            search.style.top = "-50px";
        }

    }
    //我的京东
    let jd =document.querySelector(".s3");
    let jdlist=document.querySelector(".myjd");
    jd.onmouseover =function(){
        jdlist.style.height="172px";
        // jdlist.style.padding=" 10px 0 10px 15px;"
        // jdlist.style.boxShadow="1px 2px 1px rgba(0,0,0,.1);"
        // jdlist.style.border="1px solid #ccc;";
    }
    jd.onmouseout =function(){
        jdlist.style.height="0";
    }
    //企业购
    // let com =document.querySelector(".com");
    // let company=document.querySelector(".company");
    // com.onmouseover =function() {
    //     company.style.height = "120px";
    // }
    // com.onmouseout =function(){
    //     company.style.height="0";
    // }
    //购物车
    let buycar =document.querySelector(".buy-car");
    let empty =document.querySelector(".empty");
    buycar.onmouseover=function(){
        empty.style.height="69px";
        empty.style.border="1px solid #999";
        empty.style.borderTop="none";
    }
    buycar.onmouseout=function(){
        empty.style.height="0";
        empty.style.border="none";
    }
    //侧滑
    let items=document.querySelectorAll(".menu-item");
    let popCtn=document.querySelectorAll(".popCtn");
    console.log(items,popCtn);

    function select(items,popCtn){
        for (let i=0;i<items.length;i++) {
            //鼠标移入子元素出现
            items[i].onmouseover=function(){
                //让其余子元素全部消失
                for (let j=0;j<popCtn.length;j++) {
                    popCtn[j].style.display="none";
                }
                //当前子元素出现
                popCtn[i].style.display="block";

            }
            //鼠标移走，子元素消失
            items[i].onmouseout=function(){
                popCtn[i].style.display="none";
            }
        }

    }
    select(items,popCtn);


    //促销 公告
    let newshead1=document.querySelectorAll(".news-head a")[0];
    let newshead2=document.querySelectorAll(".news-head a")[2];
    let newsitem1=document.querySelectorAll(".news-item")[0];
    let newsitem2=document.querySelectorAll(".news-item")[1];

        newshead1.onmouseover=function(){
            newshead2.classList.remove("active");
            newsitem2.style.display="none";
            newshead1.classList.add("active");
            newsitem1.style.display="block";
        }

        newshead2.onmouseover=function(){
            newshead1.classList.remove("active");
            newsitem1.style.display="none";
            newshead2.classList.add("active");
            newsitem2.style.display="block";
        }
    //秒杀轮播
    let leftb =document.querySelector(".flash-prev");
    let rightb=document.querySelector(".flash-next");
    let con=document.querySelector(".flash-list");
    let widths=parseInt(getComputedStyle(con,null).width)/3;
    console.log(leftb,rightb,con,widths);
    banner_translate(leftb,rightb,widths,3,con);
//秒杀右边轮播
    let t=setInterval(move,2500);
    let imgs1=document.querySelectorAll(".sk_chn img");
    let dot =document.querySelectorAll(".sk_chn-dots");
    let num=0;
    // t=setInterval(move,1500);
    function move(){
        num++;
        if (num==imgs1.length) {
            num=0;
        }
        for (let j=0;j<imgs1.length;j++) {
			imgs1[j].style.zIndex="1";
            // imgs[j].style.opacity="0";
//			dot[j].style.background="#333";
            dot[j].classList.remove("sk_chn-dots-active");
        }
		imgs1[num].style.zIndex="3";
        // imgs1[num].style.opacity="1";
		// dot[num].style.background="#fff";
        dot[num].classList.add("sk_chn-dots-active");
    }
    //特色推荐轮播
    let leftb1 =document.querySelector(".special-prev");
    let rightb1=document.querySelector(".special-next");
    let con1=document.querySelector(".special-wrapper-list");
    let widths1=parseInt(getComputedStyle(con1,null).width)/2;
    console.log(leftb1,rightb1,con1,widths1);
    banner_translate(leftb1,rightb1,widths1,2,con1);

    //排行榜选项卡
    let li =document.querySelectorAll(".pai-nav-item");
    let list=document.querySelectorAll(".nav-list");
    console.log(li,list);
    // select(li,list);
    select1(li,list);
    list[0].style.zIndex=999;
    function select1(li,list){
        for (let i=0;i<li.length;i++) {
            //鼠标移入子元素出现
            li[i].onmouseover=function(){
                //让其余子元素全部消失
                for (let j=0;j<list.length;j++) {
                    list[j].style.zIndex=0;
                }
                //当前子元素出现
                list[i].style.zIndex=999;
            }
            //鼠标移走，子元素消失
            li[i].onmouseout=function(){
                list[i].style.zIndex=0;
            }
        }
    }
    //会买专辑轮播
    let dot1=document.querySelectorAll(".slider_indicators_btn");
    let imgs2=document.querySelectorAll(".daily_slider");
    let lbtn1=document.querySelector(".slider_control_prev");
    let rbtn1=document.querySelector(".slider_control_next");

    banner_oi(dot1,imgs2,imgs2,lbtn1,rbtn1,"slider_indicators_btn_active",1500);
}