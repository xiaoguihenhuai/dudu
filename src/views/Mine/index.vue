<template>
  <div>
    <Header title="MY PAGE" />
    <van-row>
      <van-col span="8">
        <van-image
          class="img-account"
          round
          width="100"
          height="100"
          lazy-load
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
	  <div class="mine-info">
      <van-col span="5">
        <van-grid :border="false">
          <van-grid-item icon="comment-o" text="投稿" />
        </van-grid>
      </van-col>
      <van-col span="5">
        <van-grid :border="false">
          <van-grid-item icon="like-o" text="like" />
        </van-grid>
      </van-col>
      <van-col span="6">
        <van-grid :border="false">
          <van-grid-item icon="star-o" text="link" />
        </van-grid>
      </van-col>
	  </div>
    </van-row>

    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      プロフィール編集
    </van-divider>
    <van-tabbar route :fixed="false" :border="false">
      <van-tabbar-item replace to="/mine/mypicture" icon="apps-o"> 写真 </van-tabbar-item>
      <van-tabbar-item replace to="/mine/myvideo" icon="gem"> 動画 </van-tabbar-item>
    </van-tabbar>
	<router-view />
    <TabBar />
  </div>
</template>

<script>
import { Lazyload } from "vant";
import { Toast } from "vant";
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Mine",
  components: {
    Header,
    TabBar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.img-account {
  margin: 10px;
}
.van-grid-item{
	margin:15px;
}
.van-grid-item__text{
	width: 48px;
}
.van-tabbar{
	margin-bottom: 20px;
}
</style>