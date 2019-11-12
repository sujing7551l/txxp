<template>
    <div>
        <div><img  class="vzansy" src="../assets/vzansy.jpg" alt=""></div>
        <div class="zong">
            <div class="top">
                <h3>三色香蕉巧克力豆马分</h3>
                <p>很久没烤蛋糕了，用了同一款方子烤了三种口味的香蕉巧克力豆马芬，感觉很有意思</p>
            </div>
            <div class="bottom">
                <div class="bottom1">
                    <div class="bottom_K">
                        <h3>用料</h3>
                        <img src="../assets/vzand.png" alt="">
                    </div>
                    <div>
                        <ul>
                            <li>香蕉450克</li>
                            <li>鸡蛋3个</li>
                            <li>牛奶120克</li>
                            <li>色拉油150克</li>
                            <li>白砂糖150克</li>
                            <li>低粉300克</li>
                            <li>泡打粉15克</li>
                            <li>可可粉12克</li>
                            <li>原味低粉12克</li>
                            <li>坚果核桃 适量</li>
                            <li>巧克力都 120克</li>

                        </ul>
                    </div>
                </div>
                <div class="bottom2">
                    <div class="bottom_K">
                        <h3>步骤</h3>
                        <img src="../assets/vzanb.png" alt="">
                    </div>
                    
                    <div class="bz">
                        <img src="../assets/bz1.jpg" alt="" class="b_pic">
                        <div class="zi">
                            <img src="../assets/vzan1.png" alt="" >
                            <p>香蕉切小块压成泥,我没有工具，就用了吃火锅的漏勺压的，还挺好</p>
                        </div>
                         <img src="../assets/bz2.jpg" alt="" class="b_pic">
                        <div class="zi">
                            <img src="../assets/vzan2.png"  alt="" >
                            <p>鸡蛋液打散</p>
                        </div>
                        <img src="../assets/bz1.jpg" alt="" class="b_pic">
                        <div class="zi">
                            <img src="../assets/vzan3.png"  alt="" >
                            <p>加入牛奶,色拉油,糖，用蛋抽打匀</p>
                        </div>
                        <img src="../assets/bz1.jpg" alt="" class="b_pic">
                        <div class="zi">
                            <img src="../assets/vzan4.png"  alt="">
                            <p>加入香料泥，打匀</p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>
<style scoped>
/* 第一张图 */
.vzansy{
    width:100%;
    height:240px; 
    display:table-cell;
}
/* 第一张图的标题 */
.zong{
    margin:auto;
    width:92%;
}
   .bottom ul{
      
   } 
   .bottom ul li{
       display:inline-block;
       height:30px;
       background:rgb(221,221,221);
      line-height: 30px;
       margin-right:30px;
       margin-bottom:10px;
       padding:0 5px;
       font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
   }

   /* buzhou */
   .b_pic{
       width:90%;
       margin: 0 auto;
       display:table-cell;
   }
   .bottom_K{
       margin-bottom:10px;
   }
   .bz p{
       width:90%;
       margin: auto;
   }
   /* 步骤的图片和字的布局 */
   .zi{
       display:flex;
       margin:20px 8px 30px;
   }
   /* 步骤1d图片 */
   .zi img{
       width:28px;
       height:28px;
       margin-left:10px;
       margin-right:10px;
   }
   /* 用料 步骤 图片的布局 */
 .bottom_K{
     display:flex;
 }
 .bottom_K img{
     width:20px;
     height:20px;
     margin-top:23px;
     margin-left:5px;
 }
 /* 用料颜色    */
 .bottom_K h3{
     color:rgb(50,47,81)
 }
</style>