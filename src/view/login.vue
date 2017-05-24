<template>
    <div class="sign-wrap">
        <div class="sign-inner">
            <h1 class="text-center blue-dark">MicroChat</h1>
            <div class="sign-box">
                <el-form label-position="right" label-width="0px">
                    <el-form-item label="">
                        <el-input placeholder="请输入用户名或邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
	                    <router-link :to="{name: 'home'}">
	                		<el-button type="primary" class="btn-flat"> 登录</el-button>
	            		</router-link>
                    </el-form-item>
                </el-form>

                <small class="silver">
                	还没账号？
                	<router-link :to="{name: 'regist'}">
                		去注册 <i class="fa fa-arrow-circle-o-right"></i>
            		</router-link>
            	</small>
            </div>
        </div>
    </div>
</template>
