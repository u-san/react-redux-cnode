
let base = 'https://cnodejs.org/api/v1/';

export const APIS = {
	LIST	: base + 'topics',
	TOPIC : base + 'topic',
	NEW		: base + 'topics',
	LOGIN : base + 'accesstoken',
	USER  : base + 'user',
	MSG 	: base + 'messages'
}

export const NAV_ITEM = [
	{key: 'all', 	name: '全部', icon: 'all'},
	{key: 'good', name: '精华', icon: 'good'},
	{key: 'share',name: '分享', icon: 'share'},
	{key: 'ask', 	name: '问答', icon: 'question'},
	{key: 'job',	name: '招聘', icon: 'group'},
	{key: 'message', name: '消息', icon: 'notice'},
	{key: 'about', name: '关于', icon: 'info'}
]

export const TAGS = {
	'top'   : {name: '置顶', color: 'red'},
	'good'	: {name: '精华', color: 'yellow'},
	'share'	: {name: '分享', color: 'green'},
	'ask'	: {name: '问答', color: 'blue'},
	'job'	: {name: '招聘', color: 'purple'},
}
