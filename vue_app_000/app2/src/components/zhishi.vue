<template>
    <div id="family">
        <div class="tu-nav" >
            <router-link to="sy" >
                <img src="../assets/row-left.png" alt="">
            </router-link>
            <div class="search">
                    <van-search placeholder="请输入搜索关键词" />
            </div>
        </div>
        <div class="top">
            <div id="model1">
                
                <van-dropdown-menu class="sale">
                     <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu> 
            </div>
            <div></div>
            <!-- 如此元素影藏 -->
            
        </div>
        <div class="bottom">
            <div class="bottom_k" v-for="(item,index) of res" :key="index" @click="vzhishi(index)">
                 <div class="left"><img :src="'http://127.0.0.1:4000/'+item.img" ></div>
                 <div class="right">
                     <span class="b_title">{{item.b_title}}</span>
                     <!--  -->
                     <div class="method">{{item.method}}</div>
                     <div class="name">{{item.name}}</div>
                      <div class="like">{{item.like}}</div>
                      <!--  -->
                     <div class="title">
                         <div class="leave">{{item.study}}</div>
                        
                      </div>
                      <div class="xtitle">
                          <div class="sal">{{item.sal}}</div>
                          <div class="zi">{{item.zi}}</div>
                      </div>
                 </div>
            </div>
        </div>
        <div class="zhao"></div>
    </div>

</template>
<script>


//查找触发事件的函数
import flist from "./json/family.json"
 export default {
  data() {
     return  {
        list:flist,
        res:[],
        src:flist.images,
        value2: 'a',
        value1: 0,
       option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
       ],
        option2: [
         { text: '推荐排序', value: 'a' },
         { text: '销量最高', value: 'b' },
         { text: '价格最高', value: 'c' },
         { text: '价格最低', value: 'd' },
        { text: '热门评论', value: 'e' },
         { text: '本周最热', value: 'f' }
       ]
     }
   },
     created(){
         this.loadMore();//调用
     },
     methods:{
         loadMore(){
             this.axios.get("zhishi_pic").then(res=>{
                this.res=res.data;
               //console.log("输出：",this.res)
             })
         },
         vzhishi(index){
           this.$router.push({name:'vzhishi', params: {index: index}})
            console.log(111)
         }
     }
    
 };

</script>
<style scoped >
body{
    height:0px !important;
}
.tu-nav{
    display:flex;
    justify-content: space-around;
}
.tu-nav img{
    width:25px;
    height:25px;
    margin-top:10px;
    margin-left:5px;
}
.van-search{
    background: rgb(255, 255, 255);
    margin: 10px 15px 0 !important;
}


    .search{
    height:45px;
     width:100% 
    }
*{
    margin:0;padding:0;
}
#model1{
    display:flex;
    
}
#sort,.sale{
    width:100%;
    
  
}
#sort p{
    margin:15px auto;
    vertical-align: middle;
    width:30%;
}
.gn-listx{
    display:none;
}
/*  */
.bottom{
    position:absolute;
    top:117px;
    left:0px;

}
.bottom img{
    width:85px;
    height:85px;
}
.bottom .bottom_k{
    display:flex;
    width:90%;
    margin:15px auto 20px;
  
}
.bottom .bottom_k .left{
    margin-right:15px;
}
.bottom .bottom_k  .title,.bottom .bottom_k .xtitle{
    display: flex;
}
.bottom .bottom_k  .title .leave{
    margin-right:5px;
}
/* .bottom .bottom_k  .title .day{
    font-size:15px;
} */
.bottom .bottom_k   .title  .leave{
        font-size: .24rem;
    color: #00bcd4;
    margin-right:10px;
}

.bottom .bottom_k   .title {

    margin-bottom:3px;
}
.bottom .bottom_k   .xtitle{
    display:flex;
    justify-content: space-between;
    color: #9e9e9e;
}

.bottom .bottom_k   .name{
      color: #9e9e9e;
}
.bottom .bottom_k   .xtitle  .sal,.bottom .bottom_k   .xtitle  .zi,
.bottom .bottom_k   .name,.bottom .bottom_k .like,.bottom .bottom_k   .method
{
      font-size: .18rem;
}
/* 第四个视频开始 小子的上边距 */
.bottom .bottom_k   .name,.bottom .bottom_k .like,.bottom .bottom_k   .method{
    margin-top:5px;
}
.bottom_k .b_title{
font-size:14px;
}
</style>