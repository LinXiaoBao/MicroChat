export default {
	sendVerifyCode: '/server/user/sendVerifyCode', // 发送验证码
	verify: '/server/user/verify', // 验证
	regist: '/server/user/regist', // 注册
	login: '/server/user/login', // 登录
	profile: '/server/user/profile', // 配置
	setting:'/server/user/setting',//重置用户信息
	follow:'/server/user/follow',//关注ta
	unfollow:'/server/user/unfollow',//取消关注
	getFollowingList:'/server/user/getFollowingList',//获取关注人列表
	getFollowerList:'/server/user/getFollowerList',//获取粉丝列表
	logout:'/server/user/logout',//退出
	essayPublish: '/server/post/publish', // 发布文章
	fetchMyEssayList: '/server/post/my/list', // 加载我的文章
	myCollectedList: '/server/post/collected/list', // 加载我收藏的文章
	fetchFollowingList:'/server/post/following/list',//首页文章加载
	collect:'/server/post/collect',//收藏
	discollect:'/server/post/discollect',//取消收藏
	approve:'/server/post/approve',//点赞
	disapprove:'/server/post/disapprove',//取消点赞
	comment:'/server/post/comment',//评论
	delComment:'/server/post/delComment',//取消评论
	search:'/server/search/userListByName'//搜索

}