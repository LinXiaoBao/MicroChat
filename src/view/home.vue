<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='6'>
                <sidebar></sidebar>
            </el-col>
            <el-col :span='18'>
                <h2 class="silver-extra-light text-center no-data">
                    ～贵圈好一片净土～
                </h2>
                <div class="grid-content" v-loading.body="loading">
                    <essay v-for="item in list" :essay="item"></essay>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import sidebar from '../component/sidebar.vue'
import essay from '../component/essay.vue'
import http from '../common/http.js'

export default {
    data() {
        return {
            loading: false
        }
    },
    created(){
        this.$store.commit('setFetchFollowingList', []);
        this.loading = true;
        this.$store.dispatch('fetchFollowingList').then((res) => {
            this.loading = false;
        }).catch((error) => {
            this.loading = false;
        });
    },
    components: {
        essay,
        sidebar
    },
    computed:{
        list() {
            return this.$store.state.homeEssayList
        }
    }
}
</script>
