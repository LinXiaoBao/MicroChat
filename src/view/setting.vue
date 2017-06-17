<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='4'>
                <sidebar></sidebar>
            </el-col>
            <el-col :span='14' :offset="1">
                <div class="settingUserInfo clearfix">
                    <h2>重置个人信息</h2>
                    <div style="margin: 20px 0;"></div>
                    <el-input v-model="settingInfo.username" placeholder="请输入用户名" type="string"></el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-input v-model="settingInfo.passwordOld" placeholder="请输入旧密码" type="password"></el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-input v-model="settingInfo.passwordNew" placeholder="请输入新密码" type="password"></el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-input v-model="settingInfo.signature" placeholder="Hello world" type="string"></el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-input v-model="settingInfo.avatar" placeholder="http://placehold.it/400x400" type="string"></el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-input v-model="settingInfo.cover" placeholder="http://placehold.it/800x450" type="string"></el-input>
                    <div style="margin: 20px 0;"></div>
                    <el-button type="primary" class='fr bt-submit' @click="btSettingInfo">提交</el-button>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import http from '../common/http.js'
import sidebar from '../component/sidebar.vue'

export default {
    components: {
        sidebar
    },
    data(){
        return{
            settingInfo: {
                username: '',
                passwordOld: '',
                passwordNew: '',
                signature: '',
                avatar: '',
                cover: ''
            }
        }
    },
    methods:{
        check(){
            if(this.settingInfo.username.trim()&&this.settingInfo.passwordOld.trim()&&this.settingInfo.passwordNew.trim()&&this.settingInfo.signature.trim()&&this.settingInfo.avatar.trim()&&this.settingInfo.cover.trim()){
                return true;
            }else{
                return false;
                alert("不能有输入框为空哦");
            }
        },
        btSettingInfo(){
            if(true){
                http({
                    vm: this,
                    api: 'setting',
                    data: this.settingInfo
                }).then((res) => {
                    alert("修改个人信息成功");
                    this.$store.dispatch('fetchProfileList');
                    this.$router.push({name: 'home'});
                }).catch((err) => {
                    
                });
            }
        }
    }
}
</script>
<style lang="less">
    .settingUserInfo{
        border: solid 1px #bfcbd9;
        padding: 40px;
        el-input{
            margin: 20px 0; 
        }
        .bt-submit{
            width: 100px;
        }
        
    }
</style>