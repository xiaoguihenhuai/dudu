<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name:'Scroller',
  // props:{
  //   handleToScroll:{ 
  //     type:Function,
  //     default:function(){}
  //   },
  //   handleToTouchEnd:{
  //     ty pe:Function,
  //     default:function(){}
  //   }
  // },
  mounted(){
     this.$nextTick(()=>{
      var scroll = new Bscroll(this.$refs.wrapper,{
        tap : true,
        probeType: 1 
    });
  //   scroll.on('scroll',(pos)=>{
  //     this.handleToScroll(pos);
  //   });
  //   scroll.on('touchEnd',(pos)=>{
  //     this.handleToTouchEnd(pos);
  //   });
  })
   } 
}
</script>

<style scoped>
.wrapper{height: 100%;}
</style>
