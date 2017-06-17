<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='6'>
                <sidebar></sidebar>
            </el-col>
            <el-col :span='18'>
                <div class="breadcrumb-wrap">
                        <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>我的关注</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <h2 class="silver-extra-light text-center no-data">
                    ～老铁，快去关注好友吧～
                </h2>
                <el-row :gutter='20'>
                    <template v-for="item in list">
                        <usercard :userInfo="item" type="following"></usercard>
                    </template>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import http from '../common/http.js'
import usercard from '../component/usercard.vue'
import sidebar from '../component/sidebar.vue'
export default {
    components: {
        usercard,
        sidebar
    },
    created() {
        this.$store.dispatch('fetchFollowing');
    },
    computed:{
        list(){
            return this.$store.state.followingList;
        }
    }
}
</script>