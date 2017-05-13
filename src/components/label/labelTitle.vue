<template>
  <div class="labelTitle">
   	<h3><router-link :to="'/labelpage/' + labelName">#{{labelName}}#</router-link></h3>
   	<span>{{labelCount}}</span>
  </div>
</template>
<script>
  
  export default {
    name : 'labelTitle',
    props: {
      labelName: "",
      labelCount: 0
    },
    methods : {
    }
  }
</script>
<style lang="less">
  .labelTitle{
  	margin-top: 15px;
  	border-bottom: 1px solid #ccc;
  	overflow: hidden;
  	h3{
  		font-size: 15px;
  		float: left;
  		margin: 0;
  		line-height: 40px;
  		width: 90%;
  		text-align: center;
  	}
  	span{
  		font-size: 13px;
  		height: 20px;
  		display: block;
  		margin-top: 10px;
  		float: right;
  		line-height: 20px;
  		width: 50px;
  		text-align: center;
  		border: 1px solid #ccc;
  		border-radius: 2px;
  		color: #ccc;
  	}
  }
</style>