<template>
  <div>
    <van-notice-bar left-icon="volume-o" :text="textContent" />
    <van-empty description="通知はまだ届いていません">
      <van-button round type="danger" class="bottom-button" to='/share'> Share </van-button>
    </van-empty>
  </div>
</template>
<script>
export default {
  name: "News",
  data() {
    return {
      textContent: "この「シェア」こそ、これからの時代を幸せに生きていくために",
    };
  },
};
</script>
<style scoped>
</style>