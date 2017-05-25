<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='6'>
                <div class="grid-content">
                    <img class="avator" src="../img/avator.png">
                </div>
                <div class="essay-list">
                    <ul>
                        <li class="nav-item">标题1</li>
                        <li class="nav-item">标题2</li>
                        <li class="nav-item">标题3</li>
                    </ul>
                </div>
            </el-col>
            <el-col :span='18'>
                <div class="new-content">
                    <el-input type="textarea" autosize placeholder="请输入标题" v-model="title">
                    </el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 20}" placeholder="请输入内容" v-model="content">
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
.essay-list{
    li{
        list-style: none;
        display: list-item;
        text-align: -webkit-match-parent;
    }
    .nav-item{
   font-size: 16px; 
    color: #5e6d82;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: all .3s;
    }
}
.bt-submit{
    margin-top: 20px; 
}


</style>
<script>
import http from '../common/http.js'

export default {
  data() {
    return {
        essayInfo: {
            title: '',
            content: ''
        }
      
    }
  },
  methods: {
        submit() {
            http({
                vm: this,
                api: 'essayPublish',
                data: this.essayInfo,
            }).then((res) => {
                this.$router.push({name: 'home'});
            }).catch((err) => {
                
            });
        }
    }
}
</script>
