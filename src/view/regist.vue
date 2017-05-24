<template>
    <div class="sign-wrap">
        <div class="sign-inner">
            <h1 class="text-center blue-dark">MicroChat</h1>
            <div class="sign-box">
                <el-form v-if="activeStep===1" label-position="right" label-width="0px">
                    <el-form-item label="">
                        <el-input placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-row>
                        	<el-col :span="18">
                        		<el-input placeholder="请输入验证码" class="no-border-radius-r"></el-input>
                        	</el-col>
                        	<el-col :span="6">
                        		<el-button class="btn-flat no-border-radius">获取验证码</el-button>
                        	</el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button 
                        	type="primary" 
                    		class="btn-flat"
                    		@click="nextStep">下一步</el-button>
                    </el-form-item>
                </el-form>

                <el-form v-if="activeStep===2" label-position="right" label-width="0px">
                    <el-form-item label="">
                        <el-input placeholder="请输入昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                       <el-input type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                       <el-input type="password" placeholder="请再次输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" class="btn-flat">注册</el-button>
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
export default {
	data() {
		return {
			activeStep: 1,
		}
	},
	methods: {
		nextStep() {
			this.activeStep = 2;
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