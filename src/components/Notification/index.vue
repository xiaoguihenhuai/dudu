<template>
  <div class="Notification_body">
    <Loading v-if="isLoading" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="image in imgList" :key="image.id">
        <img :src="image.url" />
      </van-swipe-item>
    </van-swipe>
    <ul>
      <li v-for="data in datalist" :key="data.id">
        <div>
          <span
            ><a :href="data.url">{{ data.title }}</a></span
          ><br />
          <span class="q"><span class="price"></span> </span>
        </div>
        <div class="card">
          <div>author:</div>
          <div>{{ data.author }}</div>
        </div>
        <div class="info_list">
          <p>{{ data.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Notification",
  data() {
    return {
      datalist: [],
	  isLoading: true,
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
  mounted() {
    this.axios
      .get(
        "https://gank.io/api/v2/data/category/GanHuo/type/Android/page/1/count/25"
      )
      .then((res) => {
        this.datalist = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
}
img{
    height: 180px;
    width: 375px;
}
#content .Notification_body {
  flex: 1;
  overflow: auto;
}
.Notification_body ul {
  padding: 20px;
}
.Notification_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.Notification_body li a:link {
  text-decoration: none;
}
.Notification_body li a:hover {
  color: orange;
}
.Notification_body div {
  margin-bottom: 10px;
}
.Notification_body .q {
  font-size: 11px;
  color: #f03d37;
}
.Notification_body .price {
  font-size: 18px;
}
.Notification_body .address {
  font-size: 13px;
  color: #666;
}
.Notification_body .address span:nth-of-type(2) {
  float: right;
}
.Notification_body .card {
  display: flex;
}
.Notification_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.Notification_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.Notification_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
.Notification_body.info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>