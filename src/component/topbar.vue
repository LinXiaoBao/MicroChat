<template>
    <div class="topbar">
        <div class="topbar-inner clearfix">

            <el-row :gutter='20'>
                <el-col :span="6">
                    <div class="logo-wrap flex-align-center">
                        <h2>MicroChat</h2>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="menu-wrap">
                        <el-menu default-active="1" mode="horizontal">
                            <el-menu-item index="1">
                                <router-link :to="{name: 'home'}">首页</router-link>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <router-link :to="{name: 'write'}">写文章</router-link>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <router-link :to="{name: 'collection'}">我的收藏</router-link>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <router-link :to="{name: 'myEssay'}">我的文章</router-link>
                            </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="user-wrap"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
