<template>
    <div id="chose_course">
        <!-- 导航栏 -->
        <div id="nav_dl">
            <img src="../assets/u3306.png" alt="">        
        </div>
        <div id="model">
            <div class="model_1">
                <p >请选择你想探索的课程分类</p>
                <p>请至少选择一个感兴趣的分类</p>
            </div>
            <div class="model_2">
                <div class="title">
                    <img src="../assets/zi.png" alt=""> 
                    <h3 class="title1">职场提升</h3>
                </div>   
                <div class="kuang" >     
                    <div class="xtitle "  v-for="(item,index) of list.data" :key="index" :class = "isactive == index ? 'addcolor' : '' "  @click="show(index)">
                        <p  class="click1">{{item.title}}</p>
                     </div>
                </div>
            </div>
            <div class="model_3" >
                <div class="title">
                    <img src="../assets/zi.png" alt=""> 
                    <h3 class="title1">电商运营</h3>
                 </div>
                 <div class="kuang2 ">     
                    <div class="xtitle " v-for="(item,index) of list.data2" :key="index" >
                        <p>{{item.title}}</p>
                     </div>
                </div>
            </div>
            <div class="model_4">
                <div class="title">
                    <img src="../assets/zi.png" alt=""> 
                    <h3 class="title1">编程开发</h3>
                 </div>
                 <div class="kuang2">     
                    <div class="xtitle" v-for="(item,index) of list.data2" :key="index" >
                        <p>{{item.title}}</p>
                     </div>
                </div>
            </div>
            <div > 
                <router-link to="sy" style="background:rgb(50,47,81)" class="btn" >选好了</router-link>
            </div>      
        </div>
    </div>
</template>
<script>
//1:引入一个JSON文件
import chooselist from "./json/choose_course.json"
export default {
    data(){
        return{
            //将读取数据保存list,显示
            list:chooselist,
            isactive:-1
          
        }
    },
    methods:{
        show(index){
            this.isactive=index
            console.log(this.isactive)
        }
      
    }
}
</script>
<style scoped>
.addcolor{
    color:pink
}
*{
    list-style: none;
    padding:0px;margin:0px;
}
 #chose_course{
     height:816px;
     position: relative;
     width: 100%;
   
     
 }
 /* 导航栏 */
 #nav_dl{
     width:100%;
     height:44px;
     padding:10px 10px;
     box-sizing:border-box
 }
 #nav_dl  img{
    float:left;
    width: 9px;
    height: 14px;
 }
.model_1{
    margin-top:20px; 
    text-align:center;
}
.model_1 p:first-child{
    font-size:18px;
    font-family: '思源黑体 CN';
    font-weight: 400;
    font-style: normal

}
.model_1 p:nth-child(2){
        color: #999999;
        font-size:14px;
        margin-top:15px;
      
}
.model_2{
    margin-top:30px;
}
.title{
    display:flex;
}
.kuang{
    margin-top:10px;
    width:100%;
    display:flex;
    height:200px;
    flex-wrap:wrap


}
.kuang2{
     margin-top:10px;
     flex-wrap:wrap;
     width:100%;
    display:flex;
    height:100px;
}
/* 职场提升 */
.title1{
    /* float:left; */
    font-family: '思源黑体 CN Bold', '思源黑体 CN';
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
}
/* 视觉设计 */
.xtitle{
    width:80px;
    height: 32px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(242, 242, 242, 1);
    background-color: rgba(247, 247, 247, 0.498039215686275);
    line-height:32px;
    border-radius:20%;
    text-align:center;
}

.model_3,.model_2,.model_4{
    margin:20px 20px;
}
.btn{
    color:rgba(242, 242, 242, 1);
    width:80%;
    height:33px;
    margin-left:10%;
    display:block;
       text-decoration:none;
       text-align: center;
       font-size:15px;
       line-height: 33px;
       border-radius:3px;
}

/* 点击后的样式 */

</style>
