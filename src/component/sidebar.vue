<template>
    <div>
        <div class="grid-content">
            <img class="avator" :src="this.list.avatar">
            <div class="user-info">
            	<h1 class="text-center">{{this.list.username}}</h1>
            	<p class="signature silver">{{this.list.signature}}</p>
            	
                <el-row>
                    <el-col :span="12">
                        <p>
                            <label class="silver">
                                我的粉丝
                            </label>
                            <strong>
                                <router-link :to="{name: 'follower'}">
                                    {{this.list.followerNum}}
                                </router-link>
                            </strong>
                        </p>
                    </el-col>
                    <el-col :span="12">
                        <p>
                            <label class="silver">
                                我的关注
                            </label>
                            <strong>
                                <router-link :to="{name: 'following'}">
                                    {{this.list.followingNum}}
                                </router-link>
                            </strong>
                        </p>
                    </el-col>
                </el-row>

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
