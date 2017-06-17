<template>
    <div class="usercard-wrap">
        <el-col :span='6'>
            <el-card :body-style="{ padding: '0px' }" class="usercard">
                <img :src="userInfo.avatar" class="image" @click="toUserDetails">
                <div style="padding: 14px;">
                    <span>{{userInfo.username}}</span>
                    <span>
                    	
 						<el-button
 							:loading="isLoading"
 							v-show="userInfo.followed===true"
 							@click="unfollow">
 							取消关注 
                    	</el-button> 
                    	<el-button 
                    		type="primary" 
                    		:loading="isLoading"
                    		@click="follow"
                    		v-show="userInfo.followed===false">
                    		关注Ta
                    	</el-button>                
                    </span>
                </div>
            </el-card>
        </el-col>
    </div>
</template>
<script>
import http from '../common/http.js'
export default {
    props: {
        userInfo: Object,
        type: String, // 'search', 'following', 'follower'
    },
	data(){
		return {
			isLoading: false,
            typeMap: {
                search: 'searchUserListByName',
                following: 'fetchFollowing',
                follower: 'fetchFollower',
            }
		}
	},
	methods:{
		toUserDetails(){
            this.$router.push({name: 'userDetails'});
		},
		follow(){
			this.isLoading = true;
			http({
                vm: this,
                api: 'follow',
                data:{
					"userId": this.userInfo.userId
				}
            }).then((res) => {
                this.$store.dispatch(this.typeMap[this.type]).then(() => {
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            }).catch((err) => {
                this.isLoading = false;
            });
		},
		unfollow(){
			this.isLoading = true;
			http({
                vm: this,
                api: 'unfollow',
                data:{
					"userId": this.userInfo.userId
				}
            }).then((res) => {
                this.$store.dispatch(this.typeMap[this.type]).then(() => {
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            }).catch((err) => {
                this.isLoading = false;
            });
		}
	}
}
</script>
<style lang="less" scoped>
.usercard{
	margin-bottom: 20px;
	.image {
	    width: 100%;
	    display: block;
	}
}

</style>
