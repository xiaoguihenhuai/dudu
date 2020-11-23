<template>
    <div id="main">
        <Header title="Share Life" />
            <div id="content">
                
                <div class="home_menu">
				<router-link to="/home/city"  tag="div" class="city_name">
					<span>日本</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<div class="hot_swtich">
					<router-link to="/home/nowPlaying"  tag="div" class="hot_item">正在热映</router-link>
					<router-link to="/home/comingSoon" tag="div" class="hot_item">生活</router-link>
				</div>
				<router-link to="/home/search" tag="div" class="search_entry">
					<i class="iconfont icon-search"></i>
				</router-link>
            　</div>
            <keep-alive>
                <router-view/>
            </keep-alive>
            </div>
        <TabBar />
        <router-view  name="detail"/>
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    name : 'home',
    components : {
        Header,
        TabBar
    }
}

</script>

<style scoped>
#content .home_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.home_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.home_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.home_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.home_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.home_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.home_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.home_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.home_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.home_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.home_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.home_menu .search_entry i{ font-size:24px;}

.slide-enter-active{ animation : 13s detailMove;}
@keyframes detailMove{
	0%{
		transform : translateX(100%);
	}
	100%{
		transform : translateX(0);
	}
}
</style>
