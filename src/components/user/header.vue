<template>
  <div class="user_header">
    <img :src="src" @click="changeImg">
    <p class="name">{{name}}</p>
    <p class="email" v-show="!!email">{{email}}</p>
    <p class="msg" v-show="!isChange">{{msg}}<img class="fixed" v-show="fixshow" @click="changeMsg" :src="require('../../static/images/fix.png')"/></p>
    <div class="changeMsg" v-show="isChange">
      <form class="form-inline">
        <div class="form-group">
          <input type="text" v-model="newmsg" class="form-control"/> 
        </div>
        <button @click="changeok" class="btn btn-default">ok</button>
      </form>
    </div>


    <my-upload field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="300"
        :height="300"
        :url="url"
        img-format="png"></my-upload>


  </div>
</template>
<script>
  import url from '../../getCGI/url'
  import changeMsgCGI from '../../getCGI/user/changeMsg'
  import myUpload from 'vue-image-crop-upload/upload-2.vue';


  export default {
    name : 'user_header',
    props: {
      img: String,
      name: String,
      message: String,
      email: String,
      fixshow: Boolean,
      login_id: String
    },
    data () {
      return {
        isChange: false,
        newmsg: '',
        show: false,
        imgDataUrl: ''
      }
    },
    computed: {
      src: function(){
        return this.imgDataUrl || (this.img ? url.url + this.img : 
                          require("../../static/images/head/head.jpg"))
      },
      msg: function(){
        return this.newmsg || (this.message || "这个人什么都没有说~")
      },
      url () {
        return url.url + '/user/fiximg/' + this.login_id
      }

    },
    methods : {
      changeMsg () {
        this.isChange = true
      },
      changeok () {
        this.isChange = false
        changeMsgCGI({msg: this.newmsg})
      },
      changeImg () {
        if(!this.fixshow) return
        this.show = !this.show
      },
      toggleShow() {
          this.show = !this.show;
      },
      cropSuccess(imgDataUrl, field){
          console.log('-------- crop success --------');
          this.imgDataUrl = imgDataUrl;
      },
      cropUploadSuccess(jsonData, field){
          console.log('-------- upload success --------');
          console.log(jsonData);
          console.log('field: ' + field);
      },
      cropUploadFail(status, field){
          console.log('-------- upload fail --------');
          console.log(status);
          console.log('field: ' + field);
      }
    },
    components:{
      'my-upload': myUpload
    }
  }
</script>
<style lang="less">
  .user_header{
    margin-top: 20px;
    img{
      display: block;
      margin: 0 auto;
      border: 5px solid #bbb;
      border-radius: 50%;
      width: 100px;
    }
    p{
      text-align: center;
      font-family: 'Microsoft YaHei';
      width: 50%;
      margin: 0 auto;
      margin-top: 5px;
      line-height: 20px;
      .fixed{
        height: 20px;
        width: 20px;
        border: none;
        display: inline;
      }
    }
    .msg{
      border-bottom: 1px solid #bbb;
    }
    .changeMsg{
      text-align: center;
    }
  }

</style>