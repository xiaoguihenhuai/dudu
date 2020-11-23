<template>
  　　<div class="movie_body"  ref="movie_body">
	  <Loading v-if="isLoading"/>
				<ul>
					<li class="pullDown">{{pullDownMsg}}</li>
					<li v-for="data in datalist" :key="data._id" @tap='handleToDetail(data._id)'>
						<div class="pic_show" ><img :src="data.images"></div>
						<div class="info_list">
							<h2>{{data.title}}</h2>
							<p>观看次数 <span class="grade">{{data.views}}</span></p>
							<p>作者:{{data.author}}</p>
							<p>{{data.desc}}</p> 
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
				</ul>
	  </div>  
</template>

<script>

import Bscroll from 'better-scroll'

export default {
	name:'NowPlaying',
	data(){
		return {
			datalist:[],
			isLoading:true,
			pullDownMsg:''
		}
	},
	mounted(){
		var i = 1;
		this.axios.get('https://gank.io/api/v2/data/category/Girl/type/Girl/page/1/count/10').then((res)=>{
			this.datalist = res.data.data;
			console.log(res.data.data)
			this.isLoading = false;
			this.$nextTick(()=>{
				    var scroll = new Bscroll(this.$refs.movie_body,{
					tap : true,
					probeType: 1
				});
				scroll.on('scroll',(pos)=>{
					if(pos.y > 30){
						this.pullDownMsg = '正在更新中';
					}					
				});
				scroll.on('touchEnd',(pos)=>{
					i++;
					if(pos.y > 30 && i < 8){
					    this.axios.get('https://gank.io/api/v2/data/category/Girl/type/Girl/page/'+i+'/count/10').then((res)=>{
							this.pullDownMsg = '更新成功';
							this.datalist = [...res.data.data,...this.datalist];
							this.pullDownMsg =  '';
						})
                    }else{
						this.pullDownMsg = '没有最新数据了';
						setInterval(()=>{
							this.pullDownMsg = '';
						},2000)
					}
                });
			}) 
		})
	},
	methods:{
		handleToDetail(id){
			this.$router.push('/movie/detail/'+id)
		},
	}
}
</script>
<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{margin: 0;padding: 0;border: none;}

</style>