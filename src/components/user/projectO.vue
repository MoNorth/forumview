<template>
  <div class="projectO">
  	<modal v-on:sureHandle="delHandle" :modal_id="title + project_id" :modal_body="'你确定要删除 ' + title "></modal>
  	<p class="num">{{num}}</p>
    <h4><router-link :to="'/project/' + project_id">{{title}}</router-link></h4>
    <p class="del" v-show="delShow" data-toggle="modal" :data-target="'#' + title + project_id">删除</p>
    <p class="time">{{time}}</p>
    <p class="author"><router-link :to="routeTo">{{author || localname}}</router-link></p>
    <p class="labels"><router-link :to="'/labelpage/' + label">{{label}}</router-link></p>
  </div>
</template>
<script>
  import delProject from '../../getCGI/project/delProject'
  // import modal from 'modal'
  export default {
    name : 'projectO',
    props: {
      project_id:0,
      num:0,
      title: "",
      label: "",
      author: "",
      times: "",
      login_id: 0
    },
    computed: {
    	time() {
    		let d = new Date(this.times)
    		let m = d.getMonth() + 1
    		let dd = d.getDate()
    		return m + "月" + dd + "日"
    	},
    	routeTo() {
    		if(this.login_id)
    			return '/userinfo/' + this.login_id
    		return '/aboutme'
    	},
    	delShow() {
    		return location.hash == "#/aboutme"
    	}
    },
    data () {
      return {
        localname: $.cookie('forum_name') || ""
      }
    },
    methods : {
    	delHandle() {
    		let that = this
    		delProject(that.project_id, function(err, result){
    			if(result.affectedRows == 1){
    				that.$emit("refreshDate")
    			}
    			else alert("删除失败")
    		})
    	}
    },
    components: {
      'modal': require("../public/modal.vue")
    }
  }
</script>
<style lang="less">
.projectO{
	height: 50px;
	/*background-color: #bbb;*/
	border-bottom: 1px solid #bbb;
	p,h4{
		height: 50px;
		float: left;
		line-height: 50px;
		margin: 0;
	}
	.num{
		width: 40px;
		text-align: center;
		height: 20px;
		line-height: 20px;
		margin-top: 15px;
		border-radius: 2px;
		background-color: #bbb;
		color: #fff;
	}
	h4{
		/*background-color: #bbb;*/
		margin: 0 30px;
		font-size: 1.4rem;
		overflow: hidden;
		color: #222;
		a{
			text-decoration: none;
		}
	}
	.author{
		width: 70px;
		overflow: hidden;
		color: #4C8BF5;
		float: right;
	}
	.labels{
		width: 100px;
		overflow: hidden;
		float: right;
		a{
			color: #FFCD44;		

		}
	}
	.time{
		text-align: right;
		width: 70px;
		overflow: hidden;
		color: #FFCE42;
		float: right;
	}
	.del{
		float: right;
		color: red;
		margin-left: 20px;
		cursor: pointer;
	}

}
</style>