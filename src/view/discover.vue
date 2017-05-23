<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='6'>
                <div class="grid-content">
                    <img class="avator" src="../img/avator.png">
                </div>
            </el-col>
            <el-col :span='18'>
                <div class="grid-content">
                    <essay v-for="item in [1,1,1,1]"></essay>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
.grid-content {
    .avator {
        width: 100%;
        border-radius: 10px;
    }
}
</style>
<script>
import essay from '../component/essay.vue'

export default {
    components: {
        essay,
    }
}
</script>
