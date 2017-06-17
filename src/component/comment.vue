<template>
    <div class="history-comment">
        <el-row :gutter="10">
            <el-col :span='2' class='text-right'>
                <img  class="avator" :src="comments.avatar" >
            </el-col>
            <el-col :span='22'>
                <p class="username">{{comments.username}}</p>
                <p class="content">{{comments.content}}</p>
            </el-col>
        </el-row>
    </div>  
</template>
<script>
import http from '../common/http.js'

export default {
    props: {
        comments: Object
    },
    data() {
        return{
            comment :''
        }
    },
    methods: {
        submit(){
            http({
                vm: this,
                api: 'comment',
                data: {
                    'postId': this.essay._id,
                    'comment':{
                        'username': this.$store.state.profileList.username,
                        'avatar': this.$store.state.profileList.avatar,
                        'content': this.comment
                    }
                }
            }).then((res) => {
                this.$store.dispatch('fetchFollowingList');
                this.$store.dispatch('fetchMyCollectedList');
                this.comment = '';   
            }).catch((err) => {

            });
        }
    }
}
</script>
<style lang="less" scoped>
    .history-comment{
        border-bottom: 1px solid #c1cdda;
        padding: 10px 0;
        .avator{
            width: 35px;
        }
        .username{
            color: #1D8CE0;
        }
    }
</style>
