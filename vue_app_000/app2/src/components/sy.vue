<template>
    <div>
           <!-- 面板 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1">
                <div id="shouye">
                    <div class="search">
                       <van-search placeholder="请输入搜索关键词"  />
                    </div>
                    <!-- 第二板块 -->
                    <div class="model" >
                        <div class="lunbotu">
                            <mt-swipe :auto="4000" class="lunbotu">
                                    <mt-swipe-item><img src="../assets/22.png" alt=""></mt-swipe-item>
                                    <mt-swipe-item><img src="../assets/33.png" alt=""></mt-swipe-item>
                                    <mt-swipe-item><img src="../assets/6.jpg" alt=""></mt-swipe-item>
                                    <mt-swipe-item><img src="../assets/7.jpg" alt=""></mt-swipe-item>
                            </mt-swipe>
                        </div>
                        <div class="kc" style="display:none">
                            <div class="xkuang">
                                <div class="kc1">
                                    <img src="../assets/ms.png" alt="">
                                </div>
                                <p>热门好课</p>
                            </div>
                            <div class="xkuang">
                                <div class="kc2">
                                    <img src="../assets/bg1.png" alt="">
                                </div>
                                <p>免费专区</p>
                            </div>
                            <div class="xkuang">
                                <div class="kc3">
                                    <img src="../assets/tea.png" alt="">
                                </div>
                                <p>现时优惠</p>
                            </div>
                            <div class="xkuang">
                                <div class="kc4">
                                    <img src="../assets/yuyuan.png" alt="">
                                </div>
                                <p>精品课程</p>
                            </div>
                    
                        </div>
                        <div class="chear">
                            <div class="chear1">
                                <span>限时优惠</span>
                                <a href="">全部</a>
                            </div>
                            <div class="chear2">
                                <div class="ic" v-for="(item,index) of list.data" :key="index"   >
                                    <div class="pic_bg"><img src="../assets/course1.png" alt=""></div>
                                    <span>冰淇淋七天速成</span>
                                    <p>￥58</p>
                                    <!-- <a href="">马上抢</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="course" >
                            <div class="course1"  >
                                <span>甜品教程</span>
                                <a href="">全部</a>
                            </div>
                            <div class="course2" v-for="(item,index) of list.data2" :key="index">
                                <div class="course2_img"><img src="../assets/bg.jpg" alt=""></div>
                                <div class="course2_zi">
                                    <div class="course2_titile">
                                        <span>{{item.title}}</span>
                                    </div>
                                    <div class="hui_color">
                                        <span>{{item.xtitle}}</span>
                                    </div>
                                    <span class="red_color">{{item.price}}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">           
                <div>
                    <div class="search">
                       <van-search placeholder="请输入搜索关键词"  />
                    </div>
                    <div class="model2">                   
                    </div>
                </div>
                <de></de>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">              
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">
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
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar active="fixed" v-model="active">
        <!-- 添加三个按钮 -->
            <mt-tab-item id="tab1">
                <img slot="icon" src="../assets/shouye.png" >
                首页
            </mt-tab-item>
            <mt-tab-item   id="tab2">
                <img slot="icon" src="../assets/fenlei.png" >
                分类
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img slot="icon" src="../assets/zx.png" >
                个人
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <img slot="icon" src="../assets/person.png" >
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
//1:外观
//2:添加父元素和三个子面板和tabbar对应
import sylist from "./json/sy.json"
import De from "./de"
import Person from "./person"

export default {
    data(){
        return{
            //1.保存用户选择的按钮Id
            active:"tab1",
            list:sylist,

        }
    },
    components:{
        "de":De,
        "person":Person
    }
}
</script>
<style scoped>
*{
    padding:0;margin:0;
    text-decoration: none
}
.van-search{
    background: rgb(255, 255, 255);
    margin: 10px 15px 0 !important;
}

/* 首页 =======================*/
.mint-tabbar{
    position:fixed;
    top:596px;
    left:0px;
}
    .search{
    height:45px;
     width:100% 
    }
    .model{
        margin-top:10px;
    }
    .lunbotu{
        height:200px;
        width:94%;
        margin:0 auto;
        
    }
    .lunbotu img{
        width:100%;
            height: 170px;
  border-radius:10px
    }
    /* 课程 */
    .kc{
        margin-top:25px;
        display:flex;
        justify-content:space-around;
       
    }
    .kc1,.kc2,.kc3,.kc4{
        width:44px;
        height:44px; 
        background:#e8e8e8;
        position:relative;
        border-radius:50%;
    }
     .kc1 img,.kc2 img,.kc3 img,.kc4 img{
         width:32px;
         height:32px;
         position:absolute;
         top:5px;
         left:5px;
         margin: 0 auto;
         border-radius:50%

     }
    .xkuang p{
        font-size:12px;
        color:#CCCC;
    }
    /* 限时优惠 */

    .chear{
        margin-top:20px;
    }
    .chear1,.course1{
        display:flex;
        justify-content:space-between;
        margin:0 18px;

    }
    .chear1 a{
    font-family: '思源黑体 CN';
    font-weight: 400;
    font-style: normal;
    
    }
    /* 甜品教成 */
    .course1{
        margin-top:0px;
    }
    .chear2{
         margin:0 20PX;
         margin-top:10px;
          display:flex;
          justify-content:space-between;
    }
    .ic{
      width:30%;
      /* background: rgb(244,244,244); */
   
  }
  .ic p{
      color:red;
      font-size:15px;
    font-family: '思源黑体 CN Bold', '思源黑体 CN';
    font-weight: 700;
  }
  .ic span{
      font-size:13px;
      font-family: '思源黑体 CN Bold', '思源黑体 CN';
      font-weight: 700;
      font-style: normal;
      margin-top:5px;
      text-align:center;
      
  }
  /* 图片背景 */
  .pic_bg{
      background: rgb(193,207,181);
      text-align:center;
      border-radius:5px;
      
   
     
  }
 
 .chear img{
     width:84px;
     margin-top:8px;
 }
 .chear2  a{
       color:#867d7d;
     font-size:15px;
    float:right;
    margin-right:10px;
 }
 /* 甜品jiaocheng */
 .course{
     margin-top:5px;
     border-top:15px solid rgb(242,242,242);
 }
.course2{
      display: flex;
      margin-left:20px;
      margin-top:20px;
     
  }
.course2_zi{
        margin-left:40px;
   }

  .course2 img{
     /* width:100px;
     height:53px; */
    width: 124px;
    height: 81px;
    border-radius:10px;
  }
  .hui_color{
     font-size:12px;
     color:#867d7d;
     margin-top:5px;
  }
  .red_color{
     color:red;
     font-family: '思源黑体 CN Bold', '思源黑体 CN';
    font-weight: 700;
    display:block;
     margin-top:5px;
  }
  /* 甜品教程bianti */
  .course2_titile {
    font-family: '\601D\6E90\9ED1\4F53 CN Bold', '\601D\6E90\9ED1\4F53 CN';
    font-weight: 700;
    font-style: normal;
  }
/* 分类=========================================== */
.model2_left{
width:50%;
background:#e8e8e8;
height:720px;
border:1px solid black;
}
.model2_left_k{
    margin-top:20px;
    margin-left:20px; 
}
.model2_left_k div{
    height:70px;

}
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