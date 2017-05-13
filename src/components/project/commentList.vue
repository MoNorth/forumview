<template>
  <div class="commentList">
    <p class="commentList_tip">{{commentlist_tip ? '回复 ' +  commentlist_tip : ''}}</p>
  	<div class="commentList_context" v-html="comment_context"/>
    <ul class="commentList_ul">
      <li>{{comment_date}}</li>
      <li class="commentList_author">{{login_name}}</li>
      <li class="commentList_repeat" @click="commentShowHandle">{{commentShow ? '收起' : '回复'}}</li>
    </ul>
    <comment v-on:refreshDate="refreshDate" v-show="commentShow" :project_id="project_id" :comment_comment="comment_id"></comment>
  </div>
</template>
<script>
  import getCommentList from '../../getCGI/project/getCommentList'

  export default {
    name : 'commentList',
    props: {
      commentlist_tip: '',
  	  project_id: 0,
  	  comment_id: 0,
      comment_context: '',
      comment_date: '',
      login_name: ''
      
  	},
    data () {
      return {
        commentShow: false
      }
    },
    methods : {
      commentShowHandle() {
        this.commentShow = !this.commentShow
      },
      refreshDate() {
        this.commentShow = false
        this.$emit('refreshDate')
      }
    },
    components: {
      "comment": require("./comment.vue")
    }
  }
</script>
<style lang="less">
  .commentList{
    border-top: 1px solid #bbb;
    margin-bottom: 20px;
    padding-top: 20px;
    .commentList_tip{
      color: #6AC62E;
      font-weight: bold;
      font-size: 1rem;
    }
    .commentList_ul{
      height: 20px;

      li{
        list-style: none;
        float: right;
        height: 20px;
        line-height: 20px;
        width: 70px;
        overflow: hidden;
        margin-left: 20px;
      }
      .commentList_author{
        width: 100px;
      }
      .commentList_repeat{
        cursor: pointer;
      }
    }
    .commentList_context{
      margin-bottom: 30px;
      img{
        max-width: 100%;
      }
    }
  }
</style>