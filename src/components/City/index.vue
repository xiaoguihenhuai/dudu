<template>
  <div>
    <Loading v-if="isLoading" />
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor
        :index="item.index"
        v-for="item in cityList"
        :key="item.index"
      >
        {{ item.index }}
        <van-cell
          :title="cityitem.name"
          v-for="cityitem in item.list"
          :key="cityitem.id"
          @click="selectCityName(cityitem.name)"
        />
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      cityList: [],
      isLoading: true,
      indexList: [],
    };
  },
  mounted() {
    this.axios
      .get("https://postcode.teraren.com/prefectures.json")
      .then((res) => {
        var datalist = res.data;
        this.isLoading = false;

        this.formatCityList(datalist);
      });
  },
  methods: {
    formatCityList(datalist) {
      var firstLetterlist = [];
      var cityList = [];
      for (var i = 0; i < datalist.length; i++) {
        var firstLetter = datalist[i].name_h.substring(0, 1);
        firstLetterlist.push(firstLetter);
        var newFirstLetterList = [...new Set(firstLetterlist)];
        if (toCom(firstLetter)) {
          //xin
          cityList.push({
            index: firstLetter,
            list: [{ name: datalist[i].name, id: datalist[i].code }],
          });
        } else {
          //leijia
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({
                name: datalist[i].name,
                id: datalist[i].code,
              });
            }
          }
        }
      }
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      newFirstLetterList.sort((a, b) => {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      });
      this.indexList = newFirstLetterList;

      cityList.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      });
      this.cityList = cityList;
      console.log(cityList);
    },
    selectCityName(cityname){
      console.log(cityname)
      this.$store.commit('setCityName',cityname)
      this.$router.push('/share')
    }
  },
};
</script>
<style scoped>
</style>
