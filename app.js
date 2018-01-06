var express = require('express');

var app = express()

app.set('view engine','jade')
app.use(express.static('public'))
app.get('/',(req,res)=>{
	res.render('index',{
		title:'最新电影推荐',
		movies:[{
			_id:1,
			title:'机械战警',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			_id:2,
			title:'空天猎',
			poster:'http://r1.ykimg.com/0516000059C49F3B859B5D02F60D420E'
		},{
			_id:3,
			title:'银魂',
			poster:'http://r1.ykimg.com/05160000599FE820ADBC0938560379BE'
		},{
			_id:4,
			title:'看不见客人',
			poster:'http://r1.ykimg.com/0516000059B8C0C2AD881A030607EA78'
		}]
	})
})
app.get('/detail/:id',(req,res)=>{
	res.render('detail',{
		title:`电影详情页`,
		
		movie:[{
			title:'机械战警详情页',
			director:'帕迪',
			country:'美国',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。'
		},{
			title:'空天猎详情页',
			director:'李晨',
			country:'大陆',
			year:2017,
			language:'汉语',
			flash:'http://player.youku.com/player.php/sid/XMzE3MzgxOTE4OA/v.swf',
			summary:'霸天狼，一支神秘的空军顶级团队，每一名飞行员都是“金头盔” 级别的王牌飞行员。吴迪（李晨 饰）、亚莉（范冰冰 饰）、巴图（郭洺宇 饰）、高原（李晨浩 饰）通过层层考核，成为了霸天狼秘密基地的一员。可谁也没有想到，吴迪的好友浩辰（李佳航 饰）却在任务中陷入了一场境外战乱的阴谋。更大的威胁接踵而至，恐怖势力突如其来的导弹危机和人质危机，空前地挑战着中国空军的实战能力！十万火急之下，最新式的中国战机和最顶级的飞行员，与掌握导弹密码和先进战机的敌人，在境外天空展开了一场生死对决……'
		},{
			title:'银魂详情页',
			director:'福田雄一',
			country:'日本',
			year:2017,
			language:'日语',
			flash:'http://player.youku.com/player.php/sid/XMzE3NjYyMDIyOA/v.swf',
			summary:'这是一个外星人和地球人混居的时代，在外星移民的压迫和统治下，流传百年的武士道精神已然没落，然而，在一片倾颓之势面前，依然有一群人默默的遵守着他们的准则和正义。家道中落的青年志村新八（菅田将晖 饰）在一场意外中结识了万事屋老板坂田银时（小栗旬 饰）和天人少女神乐（桥本环奈 饰），三人成为好友。他们共同的朋友桂小太郎（冈田将生 饰）无故失踪，经过调查，一个名叫冈田似藏（新井浩文 饰）的男人和一把名为“红缨”的妖刀浮出水面。冈田似藏是曾经的攘夷志士高杉晋助（堂本刚 饰）的手下，高杉恨透了这个堕落的世界，一直都企图将它破坏殆尽。随着红缨的力量越来越强大，整个大江户被笼罩在越来越浓重的阴云之下。'
		},{
			title:'看不见客人详情页',
			director:'奥利奥尔·保罗',
			country:'西班牙',
			year:2017,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XMzE1MDk4MjQyNA/v.swf',
			summary:'艾德里安（马里奥·卡萨斯 饰）经营着一间科技公司，事业蒸蒸日上，家中有美丽贤惠的妻子和活泼可爱的女儿，事业家庭双丰收的他是旁人羡慕的对象。然而，野心勃勃的艾德里安并未珍惜眼前这来之不易的生活，一直以来，他和一位名叫劳拉（芭芭拉·蓝妮 饰）的女摄影师保持着亲密关系。 　　某日幽会过后，两人驱车离开别墅，却在路上发生了车祸，为了掩盖事件的真相，两人决定将在车祸中死去的青年丹尼尔连同他的车一起沉入湖底。之后，劳拉遇见了一位善良的老人，老人将劳拉坏掉的车拉回家中修理。然而，令劳拉没有想到的是，这位老人，竟然就是丹尼尔的父亲。'
		}],
		id:req.params.id
	})
})
app.get('/admin/list',(req,res)=>{
	res.render('list',{
		title:'后台列表管理页面',
		movies:[{
			_id:1,
			title:'机械战警',
			director:'帕迪',
			year:2014,
			country:'美国',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			_id:2,
			title:'空天猎',
			director:'李晨',
			year:2017,
			country:'大陆',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			_id:3,
			title:'银魂',
			director:'福田雄一',
			year:2017,
			country:'日本',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			_id:4,
			title:'看不见客人',
			director:'奥利奥尔·保罗',
			year:2017,
			country:'美国',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})
app.get('/admin/movie',(req,res)=>{
	res.render('admin',{
		  title: '后台录入页',
	      doctor: '',
	      country: '',
	      year: '',
	      poster: '',
	      flash: '',
	      summary: '',
	      language: ''
	})
})

app.listen(3000)