<template>
    <div class="essay-wrap">
        <el-row class="esy-header" :gutter="10">
            <el-col :span="2">
                <div class="avator-wrap">
                    <img class="avator" :src="essay.avatar" />
                </div>
            </el-col>
            <el-col :span="22">
                <el-row class="name-date">
                    <el-col :span="10">
                        <p class="blue-dark">{{essay.username}}</p>
                    </el-col>
                    <el-col :span="14">
                        <p class="text-right silver">{{essay.created_at}}</p>
                    </el-col>
                </el-row>
                <div class="esy-title">
                    <a href="#">
                        <h3 class="title black-light">{{essay.title}}</h3>
                    </a>
                </div>
            </el-col>
        </el-row>
        <div class="esy-body">
            <p class="black-light">{{essay.content}}</p>
        </div>
        <div class="esy-footer">
            <div class="operate silver">
                <el-row>
                    <el-col :span="2">
                        <div class="operate-item">
                            <i v-if='this.changeApprove()' @click="approve" class='fa fa-thumbs-o-up'> 点赞 </i>
                            <i v-else @click="disapprove" class="fa fa-thumbs-up"> 取消 </i>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div class="operate-item">
                            <i v-if='this.changeCollect()' @click='collect' class="fa fa-heart-o"> 收藏 </i>
                            <i v-else @click='discollect' class="fa fa-heart"> 已收藏 </i>
                        </div>
                    </el-col>
                    <el-col :span="3" :offset="17">
                        <div class="operate-item text-right">
                            <i :class="this.commentIconName" v-on:click="toggleCommand">
                            {{this.commentIconContent}}</i>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <transition name="fade">
                <el-row v-if="show">
                    <el-col class="comment">
                        <el-row>
                            <el-col :span="22">
                                <comment v-for='item in list' :comments='item'>
                                </comment>
                            </el-col>
                        </el-row>
                        <div class="addcomment">
                            <el-row :gutter="20">
                                <el-col :span='21'>
                                    <el-input type="textarea" autosize placeholder="写下你的评论..." v-model="comment">
                                    </el-input>
                                </el-col>
                                <el-col :span='2'>
                                    <el-button class="bt-submit" type="primary" @click="submit">评论</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </transition>
        </div>
    </div>
</template>
<script>
import http from '../common/http.js'
import comment from '../component/comment.vue'


export default {
    components: {
        comment
    },
    props: {
        essay: Object
    },
    created() {
        this.commentIconName = this.iconName.down;
        this.commentIconContent = this.iconContent.down;
    },
    data() {
        return {
            comment: '',
            show: false,
            commentIconName: '',
            commentIconContent: '',
            iconName: {
                down: 'fa fa-angle-down',
                up: 'fa fa-angle-up'
            },
            iconContent: {
                down: '展开评论',
                up: '收起评论'
            }

        }
    },
    computed: {
        list() {
            return this.essay.comments;
        }
    },
    methods: {
        toggleCommand() {
            this.show = !this.show;
            if (this.commentIconName == this.iconName.down) {
                this.commentIconName = this.iconName.up;
            } else {
                this.commentIconName = this.iconName.down;
            }
            if (this.commentIconContent == this.iconContent.down) {
                this.commentIconContent = this.iconContent.up;
            } else {
                this.commentIconContent = this.iconContent.down;
            }

        },
        checkApprove() {
            for (let i = 0; i < this.essay.approves.length; i++) {
                if (this.$store.getters.myId == this.essay.approves[i].userId) {
                    return true;
                }
            }
        },
        checkCollect() {
            for (let i = 0; i < this.essay.collects.length; i++) {
                if (this.$store.getters.myId == this.essay.collects[i].userId) {
                    return true;
                }
            }
        },
        changeApprove() {
            if (this.checkApprove()) {
                return false;
            } else {
                return true;
            }
        },
        changeCollect() {
            if (this.checkCollect()) {
                return false;
            } else {
                return true;
            }
        },
        approve() {
            http({
                vm: this,
                api: 'approve',
                data: {
                    'postId': this.essay._id,
                    'username': this.$store.state.profileList.username,
                    'avatar': this.$store.state.profileList.avatar
                }
            }).then((res) => {
                this.$store.dispatch('fetchFollowingList');
                this.$store.dispatch('fetchMyCollectedList');
            }).catch((err) => {

            });
        },
        disapprove() {
            http({
                vm: this,
                api: 'disapprove',
                data: {
                    'postId': this.essay._id
                }
            }).then((res) => {
                this.$store.dispatch('fetchFollowingList');
                this.$store.dispatch('fetchMyCollectedList');
            }).catch((err) => {

            });
        },
        collect() {
            http({
                vm: this,
                api: 'collect',
                data: {
                    'postId': this.essay._id,
                    'username': this.$store.state.profileList.username,
                    'avatar': this.$store.state.profileList.avatar
                }
            }).then((res) => {
                this.$store.dispatch('fetchFollowingList');
                this.$store.dispatch('fetchMyCollectedList');
            }).catch((err) => {

            });
        },
        discollect() {
            http({
                vm: this,
                api: 'discollect',
                data: {
                    'postId': this.essay._id
                }
            }).then((res) => {
                this.$store.dispatch('fetchFollowingList');
                this.$store.dispatch('fetchMyCollectedList');
            }).catch((err) => {

            });
        },
        submit() {
            if (!this.comment ) {
                alert('评论内容不能为空哦')
            } else {
                http({
                    vm: this,
                    api: 'comment',
                    data: {
                        'postId': this.essay._id,
                        'comment': {
                            'username': this.$store.state.profileList.username,
                            'avatar': this.$store.state.profileList.avatar,
                            'content': this.comment
                        }
                    }
                }).then((res) => {
                    this.$store.dispatch('fetchFollowingList');
                    this.$store.dispatch('fetchMyCollectedList');
                    this.comment = '';
                }).catch((err) => {

                });
            }

        }
    }
}
</script>
<style lang="less" scoped>
.essay-wrap {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    .esy-header {
        .avator-wrap {
            width: 48px;
            height: 48px;
            overflow: hidden;
            .avator {
                width: 100%;
            }
        }
        .esy-title {
            margin-top: 8px;
        }
    }
    .esy-body {
        font-size: 14px;
        line-height: 1.5;
        margin: 10px 0;
    }
    .esy-footer {
        margin: 10px 0 0;
        .operate {
            font-size: 13px;
            .operate-item {
                cursor: pointer;
            }
        }
        .comment {
            margin-top: 10px;
            padding: 20px;
            background: #eef1f6;
            .addcomment {
                padding-top: 15px;
            }
        }
    }
    .fade-enter-active {
        transition: opacity 2s
    }
    .fade-leave-active {
        transition: opacity 0.5s
    }
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
}
</style>
