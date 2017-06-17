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
                        <el-breadcrumb-item>我的文章</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <h2 class="silver-extra-light text-center no-data">
                    ～你真懒，啥都没写～
                </h2>
                <div class="grid-content">
                    <essay v-for="item in list" :essay="item"></essay>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import http from '../common/http.js'
import sidebar from '../component/sidebar.vue'
import essay from '../component/essay.vue'

export default {
    components: {
        essay,
        sidebar
    },
    created() {
        this.fetchMyEssayList();
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        fetchMyEssayList() {
            http({
                vm: this,
                api: 'fetchMyEssayList'
            }).then((res) => {
                this.list = res.data;
            }).catch((err) => {
                
            });
        }
    }
}
</script>