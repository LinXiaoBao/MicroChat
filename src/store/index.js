import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import http from '../common/http.js'

const store = new Vuex.Store({
    state: {
        searchKey: '',
        searchList: [],
        followerList: [],
        followingList: [],
        homeEssayList: [],
        profileList: [],
        myCollectedList: []
    },
    getters: {
        myId(state) {
            return localStorage.getItem('userId');
        }
    },
    mutations: {
        setSearchList(state, list) {
            state.searchList = list;
        },
        setSearchKey(state, searchKey) {
            localStorage.setItem('searchKey', searchKey);
            state.searchKey = searchKey;
        },
        setFollowerList(state, list) {
            state.followerList = list;
        },
        setFollowingList(state, list) {
            list.forEach((elem) => {
                elem.followed = true;
            });
            state.followingList = list;
        },
        //首页文章加载setFetchFollowingList
        setFetchFollowingList(state, list) {
            state.homeEssayList = list;
        },
        setProfileList(state, list) {
            state.profileList = list;
        },
        setMyCollectedList(state, list){
            state.myCollectedList = list;
        }
    },
    actions: {
        searchUserListByName(context) {
            return new Promise((resolve, reject) => {
                http({
                    api: 'search',
                    data: {
                        "username": context.state.searchKey
                    }
                }).then((res) => {
                    context.commit('setSearchList', res.data);
                    resolve();
                }).catch((err) => {
                    reject();
                })
            });
        },
        fetchFollower(context) {
            return new Promise((resolve, reject) => {
                http({
                    api: 'getFollowerList',
                    data: {
                        "userId": context.getters.myId
                    }
                }).then((res) => {
                    context.commit('setFollowerList', res.data);
                    resolve();
                }).catch((err) => {
                    reject();
                })
            });
        },
        //关注列表
        fetchFollowing(context) {
            return new Promise((resolve, reject) => {
                http({
                    api: 'getFollowingList',
                    data: {
                        "userId": context.getters.myId
                    }
                }).then((res) => {
                    context.commit('setFollowingList', res.data);
                    resolve();
                }).catch((err) => {
                    reject();
                })
            });
        },
        //首页文章列表
        fetchFollowingList(context) {
            return new Promise((resolve, reject) => {
                http({
                    api: 'fetchFollowingList'
                }).then((res) => {
                    context.commit('setFetchFollowingList', res.data)
                    resolve();
                }).catch((err) => {
                    reject();
                })
            });
        },
        //我收藏的文章
        fetchMyCollectedList(context) {
            return new Promise((resolve, reject) => {
                http({
                    api: 'myCollectedList'
                }).then((res) => {
                    context.commit('setMyCollectedList', res.data)
                    resolve();
                }).catch((err) => {
                    reject();
                })
            });
        },
        //配置信息加载
        fetchProfileList(context) {
            return new Promise((resolve, reject) => {
                http({
                    api: 'profile'
                }).then((res) => {
                    context.commit('setProfileList', res.data)
                    resolve();
                }).catch((err) => {
                    reject();
                })
            });
        }
    }
});

export default store;
