<template>
<div class="photo"> 
  <ul>
    <photo-template v-for="(b, i) in photo" :key="i" class="photo" v-bind:bk="b"></photo-template>
  </ul>
</div>
</template>

<script>
import photoTemplate from './photoTemplate.vue';
import storage from '../storage';

export default{
    name:"photo", 
    components:{
      photoTemplate,
      
    },
    data(){
      return {
        photo:storage.photo,
      }
    }
};
</script>

<style>
body{
  background:url(https://i1.wp.com/hipzmag.com/wp-content/uploads/2018/12/novogodnij-fon-2018.jpg);
  background-size: 100%;
  text-align: center;
}
ul{
  list-style: none;
}
.photo {
  padding: 50px;
  padding-top: 0px;
}
input{
  background: linear-gradient(0deg, rgba(255,255,255,0.9026961126247374) 0%, rgba(176,175,174,1) 100%);
}
input[type=button]{
text-align:center; 
 padding:11px 33px;   
 font:18px Arial, Helvetica, sans-serif; 
 font-weight:bold; 
 box-shadow:1px 1px 5px #000000, inset 0px 0px 1px #ffffff;  
 text-shadow: 2px 1px 0px #adabab; 
 }

 input[type=button]:hover{
 padding:15px 40px; 
 font:18px Arial, Helvetica, sans-serif; 
 font-weight:bold; 
 color:#000000; 
 box-shadow:3px 3px 6px #000000, inset 0px 0px 1px #ffffff;  
 text-shadow: 2px 1px 0px #adabab; 
}
li{
    background: linear-gradient(0deg, rgba(255,255,255,0.9026961126247374) 0%, rgba(176,175,174,1) 100%);
    margin: 20px;
    width: 130px;
    display: inline-block;
}
</style>
