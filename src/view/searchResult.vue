<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='4'>
                <sidebar></sidebar>
            </el-col>
            <el-col :span='20'>
                <el-row :gutter='20'>
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