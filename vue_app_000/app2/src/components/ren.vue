<template>
    <div>
         <div class="model3">
                    <!-- 上部分 -->
                    <div class="model3_top_k">
                        <div class=" toux">
                            <img src="../assets/logo.jpg" alt="">
                            <h3>Daisy</h3>
                        </div>
                        <div><img src="" alt=""></div>
                    </div>
                    <!-- 下部分 -->
                    <div class="model3_bottom">
                    <!-- 大框 -->
                        <div class="model_k">
                        <!-- 小横框 -->
                            <div class="molel_k_title">
                            <!--小横框里的字布局 -->
                                <div class="row"> 
                                    <img src="../assets/youhuijuan_1.png" alt="">
                                    <span>我的优惠卷</span>
                                </div> 
                                <div class="row"><img src="../assets/row-right.png" alt=""></div>
                            </div>
                            <div class="molel_k_title">
                                <div class="row"> 
                                    <img src="../assets/fufeikecheng.png" alt="">
                                    <span>我的课程</span>
                                </div> 
                                <div class="row"><img src="../assets/row-right.png" alt=""></div>
                            </div>
                            <div class="molel_k_title">
                                <div class="row"> 
                                    <img src="../assets/iedu-c-free.png" alt="">
                                    <span>免费课程</span>
                                </div> 
                                <div class="row"><img src="../assets/row-right.png" alt=""></div>
                            </div>
                            <div class="molel_k_title">
                                <div class="row"> 
                                    <img src="../assets/shezhi1.png" alt="">
                                    <span>设置</span>
                                </div> 
                                <div class="row"><img src="../assets//row-right.png" alt=""></div>
                            </div>
                        </div>
                    </div>
                     <!-- 中间固定部分 -->
                    <div class="model3_fix">
                        <div class="model3_fix_k">
                            <div>
                                <h3>36</h3>
                                <p>我的订单</p>
                            </div>
                            <div>
                                <h3>26</h3>
                                <p>我的关注</p>
                            </div>
                            <div>
                                <h3>54.00</h3>
                                <p>我的余额</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
</template>
<style>

/* 个人================================================= */
.model3_top_k {
    display:flex;
    height:192px;
   /*  border:1px solid black;*/ 
}
.toux{
    display:flex;
        margin:35px 20px;
       
}
.toux h3{
    margin-top:20px;
    margin-left:10px;
}
.model3_top_k  img{
    width:70px;
    height:70px;
}

.model_k{
    margin-top:45px;
    
}
/* 地步框 */
.model3_bottom{
  
   /* border:1px solid black; */
    font-family: '思源黑体 CN Bold', '思源黑体 CN';
    font-weight: 700;
    font-style: normal;
}
.model_k .molel_k_title{
height:60px;
width:90%;
margin:0 auto;
}
.molel_k_title{
    display:flex;
    justify-content: space-between;
    /*border:1px solid black; */
}
.row {
   line-height:37px;
}

/* 个人页面的固定框 */
.model3{
      position:relative;
}
.model3_fix{
    width:100%;
   position:absolute;
   top:108px;
   left:0px;
 
}
.model3_fix_k{
  display:flex;
   justify-content:space-between;
   margin:5px 30px;
}
.model3_fix_k h3{
    font-family: '思源黑体 CN Bold', '思源黑体 CN';
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
}
.model3_fix_k p{
    font-size: 13px;
    color: #999999;
    
}
</style>
