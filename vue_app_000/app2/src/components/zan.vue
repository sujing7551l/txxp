<template>
<div class="bj">
    <div class="search">
                       <van-search placeholder="请输入搜索关键词"  />
                    </div>
    <van-tabs v-model="active">
        <van-tab title="关注">
            <!-- 图片部分 -->
            <div class="xia">
                <div>
                    <van-grid :border="false" :column-num="2" :gutter="20" >
                    <van-grid-item  >
                        <div class="kuang ">
                            <van-image class="tu" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                            <div class="zi">asdsfdf</div>
                        </div>
                    </van-grid-item >
                    <van-grid-item >
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
        <van-tab title="广场">
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
</style>
