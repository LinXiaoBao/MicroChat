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
                        <el-breadcrumb-item>搜索结果</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-row :gutter='20'>
                    <h2 class="silver-extra-light text-center">
                        ～本宝宝什么都没有找到～
                    </h2>
                    <template v-for="item in list">
                        <usercard :userInfo="item" type="search"></usercard>
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
    computed:{
        list() {
            return this.$store.state.searchList
        }
    }
}
</script>