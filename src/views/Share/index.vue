<template>
  <div id="mian">
    <Header title="Go To Share" />
    <van-divider
      :style="{ color: '#009688', borderColor: '#009688', padding: '0 16px' }"
    >
      {{ $store.state.cityName }}
    </van-divider>
    <van-grid :column-num="3">
      <van-grid-item icon="location-o" text="location" to="/home/city"/>
      <van-grid-item icon="vip-card-o" text="VIP" />
      <van-grid-item icon="shop-collect-o" text="shop" />
      <van-grid-item icon="like-o" text="like" />
      <van-grid-item icon="music-o" text="music" />
      <van-grid-item icon="chart-trending-o" text="chart" />
    </van-grid>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Share",
  components: {
    Header,
    TabBar,
  },
  data() {
    return {
    }
  },
  methods:{
    slectLocation(){
      this.$router.push('/home/city')
    }
  }
};
</script>

<style scoped>
</style>
