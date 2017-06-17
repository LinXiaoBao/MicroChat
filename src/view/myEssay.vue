<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='4'>
                <sidebar></sidebar>
            </el-col>
            <el-col :span='20'>
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