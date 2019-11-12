<template>
    <div>
        <div class="top">
            <van-nav-bar
                    title="标题"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"   
                    />
        </div>
        <div class="middle">
            <video src= "../assets/1.mp4" controls loop preload="metadata" id="v3"> </video>
        </div>
        <div class="bottom">
            <div class="bottom1">
                <div class="title">6款招牌芝士蛋糕(原味/柠檬/榴莲/抹茶白巧双层)</div>
                <div class="buju">
                    <div class="study">881人在学</div>
                    <div><img src="" alt=""></div>
                </div>
            </div>
             <div class="bottom2">
                <div>
                    <ul>
                        <li>永久回看</li>
                        <li>报名即学</li>
                        <li>自营课程</li>
                        <li>高效学习体验</li>
                        <li>分步州学</li>
                        <li>唯一品类</li>
                        <li>图片下载</li>
                        <li>工具材料参考</li>
                    </ul>
                </div>
                <div>
                    <img src="../assets/row-right.png"  alt="">
                </div>
            </div>
             <div class="bottom3">
                <div class="student">
                    <div class="student_title">学员作品</div>
                    <div class="show_pic">
                        <img src="../assets/student_zhishi1.jpg" alt="">
                        <img src="../assets/student_zhishi2.jpg" alt="">
                        <img src="../assets/student_zhishi3.jpg" alt="">                     
                    </div>
                </div>
                <div class="method">
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="dingdan">
            <van-submit-bar
                :price="950"
                button-text="提交订单"
                @submit="onSubmit"
                />
        </div>  -->
    </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
  
  
      this.$router.push({name:'zhishi'});
    }
  }
}
</script>
<style scoped>
    .middle{
          position:relative;
          width:100%;
    }
    #v3{
        width:90%;
        margin-left:17px;
        border-radius:8px
    }
    .title{
    width:85%;
    margin:0 auto;
    }
    .buju{
        display:flex;
        
    }
    .bottom1  .study{
        font-size:12px;
        margin-left:23px;
    }
    .bottom2{
        border-top:10px solid #e8e8e8;
        border-bottom:10px solid #e8e8e8;
        display: flex;
        
        justify-content: space-between;
    }
    .bottom2 ul{
        display:flex;
        width:84%;
    flex-wrap:wrap;

    margin:10px  0  10px 20px;
    }
    .bottom2 li{
        width:25%;
        font-size:12px;
    }
    .bottom3 .show_pic img{
    width:80px;
    height:80px;
    }
    .bottom3 .student_title{
        margin:15px;
    }
</style>