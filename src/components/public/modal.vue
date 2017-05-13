<template>
  <div class="modal fade" :id="modal_id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Forum Tip</h4>
      </div>
      <div class="modal-body">
        {{modal_body}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-show="!modal_sure" @click="sureHandle">Sure</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  
  export default {
    name : 'modal',
    props: {
      modal_body: '',
      modal_id: '',
      modal_sure: false
    },
    methods : {
      sureHandle() {
        $('#' + this.modal_id).modal('hide')
        this.$emit('sureHandle')
      }
    },
    components: {
    
    }
  }
</script>
<style lang="less">

</style>