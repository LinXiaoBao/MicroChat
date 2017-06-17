<template>
    <div>
        <div class="grid-content">
            <img class="avator" :src="this.list.avatar">
            <div class="user-info">
            	<h1 class="text-center">{{this.list.username}}</h1>
            	<p class="signature silver">{{this.list.signature}}</p>
            	<p @click="follower">我的粉丝 
                    <span>{{this.list.followingNum}}</span></p>
            	<p @click="following">我的关注    
                    <span>{{this.list.followerNum}}</span></p>

            </div>
        </div>
    </div>
</template>
<script>

import http from '../common/http.js'

export default {
	computed:{
		list(){
			return this.$store.state.profileList;
		}
	},
    methods:{
        follower(){
            this.$router.push('follower');
        },
        following(){
            this.$router.push('following');
        }
    }
}
</script>
<style lang="less" scoped>
.grid-content {
    .avator {
        width: 100%;
        border-radius: 10px;
    }
    .user-info{
    	p{
    		font-size: 17px;
    		text-align: center;
    	}
    	.signature{
    		font-size: 14px;
    	}
    }
}
</style>
