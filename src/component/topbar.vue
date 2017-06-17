<template>
    <div class="topbar">
        <div class="topbar-inner clearfix">
            <el-row :gutter='20'>
                <el-col :span="4">
                    <div class="logo-wrap flex-align-center">
                        <h2>MicroChat</h2>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div class="menu-wrap">
                        <el-menu :default-active="activeMenu" mode="horizontal">
                            <el-menu-item
                                v-for="(item, index) in menuList"
                                :index="(index+1)+''">
                                <router-link :to="{name: item.name}">
                                    <div>{{item.title}}</div>
                                </router-link>
                            </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="search-wrap">
                        <el-input 
                            placeholder="请填入搜索内容" 
                            icon="search" 
                            v-model="searchContent" 
                            @keyup.enter.native="searchIconClick"
                            :on-icon-click="searchIconClick">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="user-wrap flex-center fr">
                        <div class="avator-wrap">
                            <el-dropdown trigger="click" class="bt-avator" @command="handleCommand">
                                <span class="el-dropdown-link">
                                    <img :src="this.profileList.avatar" class="avator">
                                    <i class="el-icon-caret-bottom el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item
                                     command="follower">我的粉丝</el-dropdown-item>
                                    <el-dropdown-item
                                    command="following">我的关注</el-dropdown-item>
                                    <el-dropdown-item command="setting">设置</el-dropdown-item>
                                    <el-dropdown-item class='quit' command="quit">退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import http from '../common/http.js'

export default {
    data(){
        return {
            searchContent: '',
            menuList: [{
                name: 'home',
                title: '首页'
            }, {
                name: 'write',
                title: '写文章'
            }, {
                name: 'collection',
                title: '我的收藏'
            }, {
                name: 'myEssay',
                title: '我的文章'
            }],
            list:[]
        }
    },
    computed:{
        profileList()   {
            return this.$store.state.profileList;
        },
        activeMenu() {
            const curRouteName = this.$route.name;
            let curRouteIndex = '1';

            this.menuList.forEach((elem, index) => {
                if(elem.name === curRouteName){
                    curRouteIndex = (index + 1) + '';
                }
            });
            return curRouteIndex;
        }
    },
    created() {
        let initSearchKey = localStorage.getItem('searchKey');
        if(initSearchKey){
            this.searchContent = initSearchKey;
            this.$store.commit('setSearchKey', this.searchContent);
            this.$store.dispatch('searchUserListByName');
        }
    },
    methods:{
        check(){
            if(this.searchContent.trim()){
                return true;
            }else{
                alert('搜索内容不能为空')
                return false;
            }
        },
        searchIconClick(){
            if(this.check()){
                this.$store.commit('setSearchKey', this.searchContent);
                this.$store.dispatch('searchUserListByName');
                this.$router.push({name: 'searchResult'});
            }
        },
        handleCommand(command) {
            this[command]();
        },
        follower(){
            this.$router.push({name: 'follower'});
        },
        following(){
            this.$router.push({name: 'following'});
        },
        setting(){
            this.$router.push({name: 'setting'});
        },
        quit(){
            http({
                vm: this,
                api: 'logout'
            }).then((res) => {
                localStorage.removeItem("userId");
                this.$router.push({name: 'login'});
                alert('您已退出 请重新登录');
            }).catch((err) => {
                
            });
        }
    },
    watch: {
        searchContent(newVal) {
            if(!newVal.trim()) {
                this.$store.commit('removeSearchKey');
            }
        }
    }
}
</script>
<style lang="less" scoped>
.search-wrap{
    margin-top: 13px;
}
.user-wrap {
    height: 60px;
    .new-wrap {
        margin-right: 10px;
        .bt-add {
            .el-icon-plus {
                font-size: 20px;
            }
        }
    }
    .avator-wrap {
        .bt-avator {
            .avator {
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>
