<template>
    <div class="sign-wrap">
        <div class="sign-inner">
            <h1 class="text-center blue-dark">MicroChat</h1>
            <div class="sign-box">
                <!-- 第一步：发送验证码 -->
                <el-form v-if="activeStep===1" label-position="right" label-width="0px">
                    <el-form-item label="">
                        <el-input placeholder="请输入邮箱" v-model="userInfo.email"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-row>
                        	<el-col :span="14">
                        		<el-input 
                                    placeholder="请输入验证码" 
                                    class="no-border-radius-r"
                                    v-model="userInfo.verifyCode"></el-input>
                        	</el-col>
                        	<el-col :span="10">
                        		<el-button
                                    :loading="loadingSendCode" 
                                    :disabled="sendCode.status==0"
                                    class="btn-flat no-border-radius" 
                                    @click="sendVerifyCode">{{sendCode.text}}
                                </el-button>
                        	</el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button 
                            :loading="loadingVerify"
                            :disabled="!sendCode.success"
                        	type="primary" 
                    		class="btn-flat"
                    		@click="nextStep">下一步</el-button>
                    </el-form-item>
                </el-form>
                <!-- 第二步：注册 -->
                <el-form v-if="activeStep===2" label-position="right" label-width="0px">
                    <el-form-item label="">
                        <el-input placeholder="请输入昵称" v-model="userInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                       <el-input type="password" placeholder="请输入密码" v-model="userInfo.password"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                       <el-input type="password" placeholder="请再次输入密码" v-model="userInfo.confirmPass"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button 
                            :loading="loadingRegist"
                            type="primary" 
                            class="btn-flat"
                            @click="regist">注册</el-button>
                    </el-form-item>
                </el-form>

                <small class="silver">
                	已有账号？
                	<router-link :to="{name: 'login'}">
                		去登录 <i class="fa fa-arrow-circle-o-right"></i>
            		</router-link>
            	</small>
            </div>
        </div>
    </div>
</template>
<script>
import http from '../common/http.js'

export default {
	data() {
		return {
			activeStep: 1,
            userInfo: {
                email: '',
                verifyCode: '',
                username: '',
                password: '',
                confirmPass: ''
            },
            countTime: '',
            sendCode: {
                time: 60,
                text: '获取验证码',
                status: 1,
                success: false
            },

            loadingSendCode: false,
            loadingVerify: false,
            loadingRegist: false,
		}
	},
    created() {
        if(localStorage.getItem('userId')){
            this.$router.push({name: 'home'});
        }
    },
	methods: {
        // 验证码发送倒计时
        countdown () {
            this.sendCode.status = 0;

            this.countTime = setInterval(()=>{
                if(this.sendCode.time <= 1){
                    this.sendCode.time= 60;
                    this.sendCode.status = 1;
                    this.sendCode.text = "获取验证码";
                    clearInterval(this.countTime);

                    return;
                }
                this.sendCode.time--;
                this.sendCode.text = '重新获取('+this.sendCode.time+')';
            }, 1000);
        },
        sendVerifyCode() {
            this.loadingSendCode = true;
            this.countdown();

            http({
                vm: this,
                api: 'sendVerifyCode',
                data: {
                    email: this.userInfo.email
                },
            }).then((res) => {
                this.sendCode.success = true;

                this.$message({
                    type: 'success',
                    message: '验证码发送成功',
                    duration: 1200
                });
                this.loadingSendCode = false;
            }).catch((err) => {
                this.sendCode.status = 1;
                this.sendCode.text = "获取验证码";
                clearInterval(this.countTime);

                this.loadingSendCode = false;
            });
        },
		nextStep() {
            this.loadingVerify = true;

            http({
                vm: this,
                api: 'verify',
                data: {
                    email: this.userInfo.email,
                    verifyCode: this.userInfo.verifyCode
                },
            }).then((res) => {
                this.loadingVerify = false;
                this.activeStep = 2;
            }).catch((err) => {
                this.loadingVerify = false;
            });
		},
        regist() {
            const _self = this;

            this.loadingRegist = true;

            http({
                vm: this,
                api: 'regist',
                data: {
                    email: this.userInfo.email,
                    username: this.userInfo.username,
                    password: this.userInfo.password
                },
            }).then((res) => {
                this.loadingRegist = false;
                this.$message({
                    type: 'success',
                    message: '注册成功',
                    duration: 1200,
                    onClose: function() {
                        _self.$router.push({name: 'home'});
                    }
                });
            }).catch((err) => {
                this.loadingRegist = false;
            });
        }
	}
}
</script>
<style lang="less">
.no-border-radius-r .el-input__inner{
    border-bottom-right-radius: 0; 
    border-top-right-radius: 0; 
}
</style>