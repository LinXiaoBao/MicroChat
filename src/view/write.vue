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
                        <el-breadcrumb-item>写文章</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="new-content">
                    <el-input type="textarea" autosize placeholder="请输入标题" v-model="essayInfo.title">
                    </el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 20}" placeholder="请输入内容" v-model="essayInfo.content">
                    </el-input>
                </div>
                <el-button class="bt-submit fr" type="primary" @click="submit">提交</el-button>
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
.bt-submit{
    margin-top: 20px; 
}
</style>
<script>
import http from '../common/http.js'
import sidebar from '../component/sidebar.vue'

export default {
  components: {
    sidebar
  },  
  data() {
    return {
        essayInfo: {
            title: '',
            content: ''
        }
      
    }
  },
  methods: {
        check(){
            if(this.essayInfo.title.trim()&&this.essayInfo.content.trim()){
                return true;
            }else{
                alert('标题和内容都不能为空');
                return false;
            }
        },
        submit() {
            if(this.check()){
                http({
                    vm: this,
                    api: 'essayPublish',
                    data: this.essayInfo
                }).then((res) => {
                    this.$router.push({name: 'home'});
                }).catch((err) => {
                    
                });
            }
            
        }
    }
}
</script>
