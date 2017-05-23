<template>
    <div class="essay-wrap">
        <el-row class="esy-header" :gutter="10">
            <el-col :span="2">
                <img class="avator" src="../img/avator.png" />
            </el-col>
            <el-col :span="22">
                <el-row class="name-date">
                    <el-col :span="10">
                        <p>林小宝</p>
                    </el-col>
                    <el-col :span="14">
                        <p class="text-right silver">2017-05-21</p>
                    </el-col>
                </el-row>
                <div class="esy-title">
                    <a href="#" class="blue-dark">
                        <h3>泰国曼谷考山路值得一去吗？</h3>
                    </a >
                </div>
            </el-col>
        </el-row>
  
        <div class="esy-body">
            <p class="black-light">
                看到如此华丽的辞藻，我都觉得我去了个假考山路，当初就是奔着吃的和便宜住宿去的。说说我的真实体验吧。 交通特别不方便，没有MRT和BTS只有公交，你知道泰国的公交多难坐吗？ 给你看图 看着这个蚯蚓似的文字，你就懂了，人少还好，可以让卖票的大妈到站提…
            </p>
        </div>
        <div class="esy-footer">
            <div class="operate silver">
                <el-row>
                    <el-col :span="2">
                        <div class="operate-item">
                            <i class="fa fa-thumbs-o-up"></i> 点赞
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div class="operate-item">
                            <i class="fa fa-heart-o"></i> 收藏
                        </div>
                    </el-col>
                    <el-col :span="3" :offset="17">
                        <div class="operate-item text-right">
                            <i class="fa fa-angle-down"></i> 展开评论
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.essay-wrap{
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    .esy-header{
        .avator{
            width: 100%;
        }
        .esy-title{
            margin-top: 8px; 
        }
    }
    .esy-body{
        font-size: 14px;
        line-height: 1.5;
    }
    .esy-footer{
        margin: 10px 0 0;
        .operate{
            font-size: 13px;
            .operate-item{
                cursor: pointer;
            }
        }
    }
}
</style>
