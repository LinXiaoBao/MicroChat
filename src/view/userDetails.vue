<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='4'>
                <sidebar></sidebar>
            </el-col>
            <el-col :span='20'>
                <div class="grid-content">
                <p>用户详情</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

import sidebar from '../component/sidebar.vue'

export default{
    components:{
        sidebar
    }
}

</script>
