<template>
<div class="bj">
    <div class="search">
                       <router-link to='sy'> <img src="../assets/row-left.png" alt=""> </router-link>
                       <van-search placeholder="请输入搜索关键词"  />
                    </div>
    <van-tabs v-model="active">
        <van-tab title="精选">
            <!-- 图片部分 -->
            <div class="xia">
                <div>
                    <van-grid :border="false" :column-num="2" :gutter="20" >
                    <van-grid-item class="k_y" >
                        <div class="kuang ">
                            <van-image class="tu" src="../assets/j1.jpg" />
                            <div class="zi">asdsfdf</div>
                        </div>
                    </van-grid-item >
                    <van-grid-item class="k_y" >
                        <div class="kuang " >
                            <van-image class="tu" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                            <div class="zi">asdsfdf</div>
                        </div>
                    </van-grid-item >
                    <van-grid-item  >
                        <div class="kuang">
                            <van-image class="tu" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                            <div class="zi">asdsfdf</div>
                        </div>
                    </van-grid-item >
                    </van-grid>
                </div>
                <div></div>
            </div>
        </van-tab>
        <van-tab title="新手">
            <div>内容2</div>
        </van-tab>
        <van-tab title="初级">
            <div>内容2</div>
        </van-tab>
        <van-tab title="原创">
            <div>内容2</div>
        </van-tab>
    </van-tabs>

</div>
</template>
<script>
    export default {
     data(){
        return{
            //1.保存用户选择的按钮Id
              active: 2
        }
     }
    };
</script>
<style scoped>
/* 搜索框和箭头的布局 */

.search  img{
    width:32px;
    height:32px;
    position:absolute;
    top:10px;
}
    .nav{
        position:fixed !important;
        top:0px !important;
    }
    .bj{
        background-color:#e8e8e8; 
    }
    .tu{
    border:1px solid red;
    border-radius:10px;
    }
    /* 字体 */
    .zi{
        border:1px solid black;
        width:100%;
       
    }
    /* 图片的框 */
    .kuang{
         background:white;
         border-radius:10px;
    }
    /* 图片部分 上  */
    .xia{
        margin-top:20px
    }
   .van-grid-item__content{
        border-radius:20px !important;
    }

    /* 白色部分的圆角 */
    .van-grid-item__content--center {
        border-radius:10px !important;
    }
    /*  */
.van-search__content{
    margin-left:30px;
}
</style>
