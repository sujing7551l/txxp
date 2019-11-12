<template>
  <div >
    <!-- <router-link to="choose" >选好了</router-link> -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="推荐" />
      <van-sidebar-item title="蛋糕" />
      <van-sidebar-item title="面包" />
      <van-sidebar-item title="饼干" />
      <van-sidebar-item title="甜品饮料" />
      <van-sidebar-item title="西餐西点" />
      <van-sidebar-item title="中式面包" />
      <van-sidebar-item title="月饼" />
    </van-sidebar>
    <van-tabs v-model="activeKey">
      <van-tab>
        <div class="hot">热门分类</div>
        <!-- <router-link to="choose" >选好了</router-link> -->
        <div class="zong">   
            <div class="zong1" v-for="(item,index) of res" :key="index" @click="vzhishi(index)">
            <router-link :to="item.url">
         
                <div class="pic">
                    <img :src="'http://127.0.0.1:4000/'+item.img" alt="">
                </div>
                <div class="title">
                    <p class="xtitle">{{item.xtitle}}</p>
                </div>
            </router-link>
            </div>
        </div>
      </van-tab>
      <van-tab>
        <div class="hot">基础蛋糕</div>
        <div class="zong">
            <div class="zong1" v-for="(item,index) of res" :key="index">
              <a href="">
                <div class="pic">
                    <img :src="'http://127.0.0.1:4000/'+item.img" alt="">
                </div>
                <div class="title">
                    <p class="xtitle">{{item.xtitle}}</p>
                </div>
              </a>
            </div>
        </div>
      </van-tab>
      <van-tab>
        <div class="zong">
          <div class="pic">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="title">
            <p>标题3</p>
            <p>内容3。。。。。</p>
          </div>
        </div>
       
      </van-tab>
      <van-tab>
        <div class="zong">
          <div class="pic">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="title">
            <p>标题4</p>
            <p>内容4。。。。。</p>
          </div>
        </div>
       
      </van-tab>
    </van-tabs>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      res:[]
      
    };
  },
     created(){
         this.loadMore();//调用
     },
     methods:{
         loadMore(){
             this.axios.get("detail_pic").then(res=>{
                this.res=res.data;
               //console.log("输出：",this.res)
             })
         }
     },
    vzhishi(index){
      this.$router.push({name:'zhishi', params: {index: index}})
      console.log(111)
    }
};
</script>
<style >
/* 图片的层次 */
.van-tabs {
 
    z-index: 0 !important;
}
/* 右边的上边距 */
.van-tab__pane, .van-tab__pane-wrapper {
    margin-top: -482px;
    overflow: hidden;
    text-align: left;
    padding-left: 90px;
}
.van-tabs--line .van-tabs__wrap {
    height: 0px;
}
.zong{
  display: flex;
  width:100%;
  height:100%;
  flex-wrap:wrap ;
  margin-top:9px;

}
/* 图片外面的框 */
.zong>.zong1{
    margin-right:1px;
    width:30%;
    height:87px;

    
}
.pic>img{
  width: 50px;
  height: 50px;
  border-radius:5px;
}
.pic{
   display:table-cell;
	text-align:center;
	vertical-align:middle;
}
p{
  margin: 4px auto;
  font-size:8px;
}
.van-tabs {
    position: relative;
    z-index: -1;
}
.van-sidebar {
    width: 85px;
    z-index: 10;
}
/* 热门分类 */
.hot{
    font-size:13px
    
}
/* 图片下的字 */
.xtitle{
  font-size:12px;
  text-align: center
}
/* 图片 */
.pic{
  display:flex;
  justify-content: center;
  margin-top:10px;
}
/* 体模 */
.title{
  height:30px;
  color:black;
}
</style>



