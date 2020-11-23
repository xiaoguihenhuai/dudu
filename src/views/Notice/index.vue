<template>
    <div id="main">
        <Header title="Share Information" />
        <div id="content">
            <div class="notice_menu">
				<router-link to="/notice/notification" tag="div" class="notification_switch">
					お知らせ <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link to="/notice/news" tag="div" class="news_swtich">
					ニュース <i class="iconfont icon-lower-triangle"></i>
				</router-link>
			</div>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    name : 'notice',
    components : {
        Header,
        TabBar
    }
}
</script>

<style scoped>
#content .notice_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
.notice_menu .notification_switch.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.notice_menu .news_swtich.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
</style>
