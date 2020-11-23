<template>
  <div>
    <van-row gutter="10">
      <van-col span="8" v-for="data in imgList" :key="data.id">
        <van-image
          width="100"
          height="100"
          :src="data.url"
      /></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Mypicture",
  data() {
    return {
      imgList: [
        {
          id: 1,
          url: "https://i.gzn.jp/img/2016/05/16/limits-of-humanity/00.jpg",
        },
        {
          id: 2,
          url:
            "https://www.cinra.net/uploads/img/news/2019/20190409-videogirl_full.jpg",
        },
        {
          id: 3,
          url:
            "https://storage.googleapis.com/ttrinity/_img/feature/44/feature_img_full_44.jpg",
        },
        {
          id: 4,
          url:
            "https://img.technews.tw/wp-content/uploads/2017/11/16173121/girl-2848057_960_720-624x367.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.van-col{
  margin: 10px;
  width:100px;
  height: 100px;
}
</style>
