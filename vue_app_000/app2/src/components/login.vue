<template>
    <div id="base">
        <!-- 登录 -->
        <div id="nav_dl">
            <img src="../assets/u3306.png" alt="">
            <div id="nav_dl_div">登录</div>         
        </div>
        <div id="model">
            <!-- 注册 -->
            <div class="zc"><p><a>注册</a></p></div> 
            <!-- 手机验证登录 -->
            <div class="kuang">
                <div>用户名账号登录</div>
                <div class="sjdl">
                    <input  placeholder="请输入用户名" class="phone1" v-model="uname" >
                    <input placeholder="请输入密码" class="upwd1" v-model="upwd">
                    <div class="btnk">
                        <mt-button size="large" type="default" class="btn" @click="login">登录</mt-button>
                    </div>
                </div>
            </div>
            <!-- 通过以下方式登录 -->
            <div class="dlmethod">
                <div> ----或通过以下方式登录 ----</div>
            <!--登录的其他方式 -->
                <div class="other">
                    <div class="pic">
                        <div class="wx">
                            <img src="../assets/weixin.png" > 
                        </div>
                        <div class="QQ">
                            <img src="../assets/qq.png" alt="">
                        </div>
                        <div class="weibo">
                            <img src="../assets/weibo.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            //功能:对表单中每个元素进行验证
            //验证:去掉用户名无效操作
            //1:创建用户名和密码的正则表达式
            var ureg=/^[a-z0-9]{3,12}$/i;
            //2:获取用户名和户输入密码
            var p=this.upwd;
            var u=this.uname;
            //6:通过正则表达式验证用户名是否合法
            if(ureg.test(u)==false){
            //7:如果验证没通过显示确认消息框
            this.$messagebox("消息","用户名格式不正确");
            //8:停止函数
            return; }
            //9:通过正则表达式验证用户名密码是否合法
            if(ureg.test(p)==false){
            //10:如果验证没通过显示确认消息
            this.$messagebox("消息","用户名密码格式不正确");
            // return
            }
            //发送ajax请求
             var url="login";
             var obj={uname:u,upwd:p};
             this.axios.get(url,{params:obj}
             ).then(res=>{
                 console.log(res)
                if(res.data.code<0){
                    this.$messagebox("消息","用户名或密码有无")
                }else{
                    //跳转到Product组件
                     //组件跳转方式
                    //this.$router.push("组件路径")  //示例:this.$router.push("/Product")
                    this.$router.push("/choose");
                } 
    
            })
           
        }
    }
}
</script>
<style scoped>
*{
    margin:0;padding:0px;
    border:0px;
      text-align: center;
}
 #base{
     height:816px;
     position: absolute;
     width: 100%;
     border:1px solid black;
     
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
 /* 第二块 */
 #model{
     background:rgb(50,47,81);
    height:772px;
    
 }
 /* 注册 */
 .zc{
     width:100%;
     height:50px;
     
     
 }
 .zc p{
     float:right;
     margin-right:20px;
     padding-top: 23px;
 }
 /* 手机登录外面的框 */
 .kuang{
     width:80%;
     margin:0 auto;
     margin-top:67px;
     box-sizing: border-box;
  
 }
 /* s手机验证登录ziti */
 .kuang>div:first-child{
font-size:24px;
font-family: '思源黑体 CN Bold', '思源黑体 CN Regular', '思源黑体 CN';
    font-weight: 700;
    font-style: normal;
 }
 .sjdl{
     width:100%;
     height:200px;; 
     margin-top:50px;
    background:white;
    border-radius:10px;
    
 }
 /* 按钮框 */
 .btnk{
     width:80%;
     border-radius:2px;
     margin:0 auto;
 }
 /* 按钮 */
 .btn{
     margin-top:20px;
     background:rgb(190, 190, 216);
     color:white
  
 }
 /* 手机号 */
  
 .phone1,.upwd1{
  padding:20px 30px;
  color:black;
 
 box-sizing: border-box;
 border-bottom:1px solid #e8e8e8;
  
 }

 /* 通过以上方式登录 */
 .dlmethod,.zc,.kuang>div{
     color:white;
 }
.dlmethod{
    margin-top:192px;
    font-size:12px;
  }
  /* 登录的其它方式 */
.other{
    margin-top:30px;
   width:100%;


}
/* 图片布局 */
.pic{   
    margin:0 auto;
    width:50%;
    display:flex;
   justify-content:space-around;
}
/* 图片宽高 */
.wx,.QQ,.weibo{
    width:30px;
    height:30px;
    background:white;
    border-radius:50%;
}
.wx img,.QQ img,.weibo img{
     width:25px ;
     
 }
</style>

