<template>
    <div class="topbar">
        <div class="topbar-inner clearfix">
            <div class="logo-wrap fl flex-align-center">
                <h2>蛋仔</h2>
            </div>
            <div class="menu-wrap fl">
                <el-menu default-active="1" mode="horizontal">
                    <el-menu-item index="1">
                        <router-link :to="{name: 'discover'}">新动态</router-link>
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
            <div class="user-wrap fr"></div>
        </div>
    </div>
</template>
