<template>
  <div class="editnew">
    <div class="title">
      
      <input class="input" type="button" @click="pub()" value="发表"/> 
      <input class="input" type="button" @click="clear()" value="清空"/> 
      <input class="input" id="input" v-model="title"  placeholder="标题必须输入哦~"  type="text"/>
      <p class="p">标题：</p>
      <input class="input" id="label" v-model="label"  placeholder="话题必须输入哦~"  type="text"/>
      <p class="p">话题：</p>

    </div>
    <p class="tip p">{{tip}}</p>
    <quill-editor ref="myTextEditor"
                v-model="content"
                :config="editorOption" class="edit">

    </quill-editor>
    <div class="addFiles">
      <h3>添加附件</h3>
      <fileupload :url="url.url + '/project/addprojectfile'" 
      ref="vueFileUploader" :events="cbEvent" :request-options="reqopts" v-on:onAdd="onAddItem"
      ></fileupload>
      <ul class="fileshowul">
        <li v-for="file in files" class="fileshow">
          <p class="left">{{onStatus(file)}}</p>
          <p class="left filename">{{file.name}}</p>

        </li>
      </ul>
      <button @click="uploadAll">上传</button>
      <button @click="clearAll">清空</button>
    </div>
    
  </div>
</template>
<script>
  // import quillEditor from 'vue-quill-editor'

  import addproject from '../../getCGI/user/addProject'
  import addprojectimg from '../../getCGI/user/addProjectImg'
  import url from '../../getCGI/url'
  import token from '../../getCGI/getToken'
  // import fileUpload from '../../getCGI/project/fileUpload'

  import fileUpload from "vue-file-upload"

  export default {
    name : 'editnew',
    data () {
      return {
        content: '',
        editorOption: {},
        title:"",
        tip: "",
        visible: false,
        label: "",
        url: url,
        files: [],
        responses: [],
        cbEvent: {
          onCompleteUpload:(file,response,status,header)=>{
            // console.log(this.responses);
            let _dom = "<br/><a href='$1'>$2</a>"
            this.responses.push(_dom.replace("$1",url.url + response.result.url).replace("$2",response.result.name))
            console.log("finish upload;")
          },
          onAddFileSuccess:(file)=>{
            console.log(file);
            console.log("success add to queue");
          }
        },
        reqopts:{
          headers:{
            token: token()
          },
          responseType:'json',
          withCredentials:true
        }

      }
    },
    props: {

    },
    computed: {

    },
    methods : {
      pub() {
        var that = this;
        if(!this.title)
        {
          this.tip = "必须要输入标题哦~"
          return setTimeout(function(){that.tip = ""}, 2000)
        }
        if(!this.content)
        {
          this.tip = "必须要输入内容哦~"

          return setTimeout(function(){that.tip = ""}, 2000)
        }
        if(!this.label)
        {
          this.tip = "必须要输入话题哦~"

          return setTimeout(function(){that.tip = ""}, 2000)
        }
        if(this.files.length!=0 && this.files.length!=this.responses.length)
        {
          this.tip = "请先完成附件上传~"

          return setTimeout(function(){that.tip = ""}, 2000)
        }
        if(this.responses.length)
        {
          let _dom = "<h3>附件下载</h3>"
          _dom += this.responses.join("")
          this.content += _dom
        }

        let content = this.content;
        let content2 = this.content;
        let content3 = {content: content2}
        // let regex=/<IMG src=\"([^\"]*?)\">/gi
        // let s=content.match(regex)



        var imgReg = /<img.*?(?:>|\/>)/gi;
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        var arr = content.match(imgReg);


        let sum = {sum:0};
        if(!arr || arr.length == 0)
        {
          return addproject({
            title: this.title,
            label: this.label,
            context: encodeURI(content2)
          })
        }
        // for(let i= 0;i<s.length;i++)
        // {
        //   s[i];
        //   let data = RegExp.$1
        //   alert(data + i)
        //   addprojectimg(data, sum, s.length, content3, this.title, this.label);
          
        // }



        
        for (var i = 0; i < arr.length; i++) {
          var src = arr[i].match(srcReg);
          if(src[1]){
            addprojectimg(src[1], sum, arr.length, content3, this.title, this.label);
          }
        }

       
        // addproject({
        //   title: this.title,
        //   context: encodeURI(content2)
        // })
          
      },
      clear() {
        this.content = ""
      },
      handleYes() {
        this.visible = false
      },
      onStatus(file){
        if(file.isSuccess){
          return "上传成功";
        }else if(file.isError){
          return "上传失败";
        }else if(file.isUploading){
          return "正在上传";
        }else{
          return "待上传";
        }
      },
      onAddItem(files){
          this.files = files;
      },
      uploadItem(file){
        file.upload();
      },
      deleteItem(file){
        file.remove();
      },
      uploadAll(){
        this.$refs.vueFileUploader.uploadAll();
      },
      clearAll(){
        this.$refs.vueFileUploader.clearAll();
      }
    },
    components: {
      'fileupload' : fileUpload
    }
  }
</script>
<style lang="less">
.editnew{
  .edit{
    min-height: 400px;
  }
  .title{
    margin-top: 20px;
    height:40px;
    .p{
      float: right;
      line-height: 24px;
    }
    .input{
      float: right;
      width: 80px;
      border: 1px solid #D8DEE2;
      border-radius: 3px;
      background-color: #bbb;
      color: #fff;
      margin-right: 50px;
    }
    #input,#label{
      width: 300px;
      background-color: #fff;
      color: #bbb;
      padding-left: 3px;
    }
    #label{
      width: 200px;
    }


  }
  .tip{
      text-align: center;
      color: #F92672;
  }
  .left{
    float: left;
    width: 100px;
  }
  .filename{
    width: auto;
    color: #5CD9EF;
  }
  .fileshow{
    height: 30px;
  }
  .fileshowul{
    margin-top: 30px;
  }
}

</style>