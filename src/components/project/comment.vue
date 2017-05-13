<template>
  <div class="comment">
  	<h5>请撰写你的评论</h5>
    <quill-editor ref="myTextEditor"
                v-model="content"
                :config="editorOption" class="edit">
    </quill-editor>
    <span class="tip">{{tip}}</span>
    <button class="button" @click="addCommentHandle()">发布</button>
  </div>
</template>
<script>
    
  import addComment from '../../getCGI/project/addComment'


  export default {
    name : 'comment',
    props: {
  	  project_id: 0,
  	  comment_comment: 0
  	},
    data () {
      return {
        content: '',
        editorOption: {},
        tip: ""
      }
    },
    methods : {
      addCommentHandle() {
        let that = this;
        if(!this.project_id)
        {
          this.tip = "系统错误，请刷新重试"
          return setTimeout(function(){that.tip = ""}, 2000);
        }
        if(!this.content)
        {
          this.tip = "请输入评论内容"
          return setTimeout(function(){that.tip = ""}, 2000);
        }

        addComment(this.project_id, {comment_context: encodeURI(this.content), comment_comment: this.comment_comment}, function(result){
          if(result.err)
          {
            that.tip = "系统错误，请刷新重试"
            return setTimeout(function(){that.tip = ""}, 2000);
          }
          that.$emit('refreshDate')
          that.content = "";
          that.tip = "发送成功"
          return setTimeout(function(){that.tip = ""}, 2000);
        })
      }
    }
  }
</script>
<style lang="less">
  .comment{
    overflow: hidden;
  	.edit{
  		min-height: 150px;

  	}
  	.button{
  		width: 100px;
  		height: 30px;
  		background-color: #bbb;
  		color: #fff;
  		border: none;
  		float: right;
  	}
  	.button:hover{
  		background-color: #aaa;
  	}
  	.ql-image,.ql-color,.ql-size,.ql-script,.ql-strike{
  			display: none !important;
  	}
    .tip{
      color: #F92672;
    }
  }
</style>