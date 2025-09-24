import { lib, game, ui, get, ai, _status } from '../../../noname.js';

export let config = {
	qiehuan: {
		intro: '切换BGM与背景图片，选择关闭则自动重启游戏',
		init: 'close',
		name: '切歌换景',
		item: {
			'Marius Masalar - All In Your Head (Neurax Worm Theme)': '物竞天择',
			'gamemusic': '瘟疫之花',
			'Joshua Kaplan - Plague Bloom': '绽放瘟疫',
			'neurax_music': '全在脑海',
			'Joshua Kaplan - Direct Control': '直接控制',
			'zombie_music': '人类沦陷',
			'Marius Masalar - Adverse Reactions': '异常反应',
			'simian_flu_music': '猩球黎明',
			'vampire_music': '永恒血夜',
			'cure': '展平曲线',
			'Carol of the bells': '钟声颂歌',
			'午夜凶铃': '午夜凶铃',
			'いとうかなこ - 悲しみの向こうへ': '悲伤彼岸',
			'close': '关闭音乐',
		},
		onclick(item) {
			const origin = lib.config.extension_瘟疫公司_qiehuan;
			if (origin == item) return;
			game.saveConfig('extension_瘟疫公司_qiehuan', item);
			if (item == 'close') game.reload();
			else {
				ui.background.setBackgroundImage('extension/瘟疫公司/image/background/PlagueInc' + (item == 'cure' ? '2' : '') + '.jpg');
				ui.background.setBackgroundImage(ui.background.style.backgroundImage);
				lib.config.background_music = "music_custom";
				lib.config.background_music_src = ui.backgroundMusic.src = `${lib.assetURL}extension/瘟疫公司/audio/background/${item}.mp3`;
			}
		},
	},
	Plague_check: {
		name: '<a href="extension/瘟疫公司/病原体分类.html" style="color: white; text-decoration: none;" target="_blank">病原查询</a>',
		clear: true,
		intro: '点击后自动查询病原体的生物学分类，本扩展以病原体的生物学分类，同属一个纲下进行珠联璧合',
		onclick() {
			game.playAudio("../extension/瘟疫公司/audio/effect/check");
		},
	},
	Plague_effect: {
		init: 'off',
		name: '感染进程',
		intro: (() => {
			return [
				'打开此选项，从游戏开始后将随着阶段变化进行不同的感染进程背景显示',
				'“感染进程”选项专属流程见下：<br>' + [
					'阶段一：游戏开始时',
					'阶段二：有角色被感染后，场上所有角色均已感染或不可被感染',
					'阶段三：感染角色死亡后，死亡的感染角色数不小于存活的感染角色数',
					'阶段四：感染角色死亡后，场上仅剩最后一名感染角色存活',
					'<span style="font-weight: bold;">注：四个阶段仅会依次递进，且游戏过程中更换为其他选项不会重置当前“感染进程”阶段（即切回“感染进程”选项会自动使用之前的“感染进程”阶段）</span>',
				].join('<br>'),
			].map(str => '<li>' + str).join('<br>');
		})(),
		item: {
			off: '关闭',
			AU: '澳大利亚',
			BR: '巴西',
			CA: '加拿大',
			CN: '中国',
			DE: '德国',
			ES: '西班牙',
			FR: '法国',
			IN: '印度',
			IT: '意大利',
			JP: '日本',
			KR: '韩国',
			RU: '俄罗斯',
			TH: '泰国',
			UK: '英国',
			US: '美国',
		},
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "Plague_effect", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/area");
		}
	},
	Plague_FenJieXian_xiushi: {
		clear: true,
		name: '<li>修饰遗传基因',
	},
	hesuanjiyin: {
		name: '核酸基因',
		init: 'close',
		intro: '所有病原体默认拥有选择的选项技能效果（重启生效）',
		item: {
			PIxiangangaoneng: '腺苷高能',
			PIsesubaofa: '色素爆发',
			PIjisudaixie: '急速代谢',
			PIcuihuakaiguan: '催化开关',
			PIdaixiejiechi: '代谢劫持',
			close: '取消插入',
		},
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "hesuanjiyin", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/gene");
		}
	},
	chuanbojiyin: {
		name: '传播基因',
		init: 'close',
		intro: '所有病原体默认拥有选择的选项技能效果（重启生效）',
		item: {
			PIludiqinhe: '陆地亲和',
			PIdaqiqinhe: '大气亲和',
			PIhaiyangqinhe: '海洋亲和',
			PIzhenyayizhi: '镇压抑制',
			PIbentuqinhe: '本土亲和',
			close: '取消插入',
		},
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "chuanbojiyin", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/gene");
		}
	},
	huanjingjiyin: {
		name: '环境基因',
		init: 'close',
		intro: '所有病原体默认拥有选择的选项技能效果（重启生效）',
		item: {
			PInaiganshihan: '耐干适旱',
			PIxishiqinshui: '喜湿亲水',
			PInongcunshengcun: '农村生存',
			PIchengshishengcun: '城市生存',
			PIjiduanshengwu: '极端生物',
			close: '取消插入',
		},
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "huanjingjiyin", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/gene");
		}
	},
	tubianjiyin: {
		name: '突变基因',
		init: 'close',
		intro: '所有病原体默认拥有选择的选项技能效果（重启生效）',
		item: {
			PIdaerwenlun: '达尔文论',
			PIshenchuangxueshuo: '神创学说',
			PImoniyichuan: '模拟遗传',
			PIjianxingyanghua: '碱性氧化',
			PIjianxingshuijie: '碱性水解',
			close: '取消插入',
		},
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "tubianjiyin", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/gene");
		}
	},
	jinhuajiyin: {
		name: '进化基因',
		init: 'close',
		intro: '所有病原体默认拥有选择的选项技能效果（重启生效）',
		item: {
			PIdianliluoxuan: '电离螺旋',
			PIkuasunxiufu: '跨损修复',
			PIjingtaizhengzhuang: '静态症状',
			PIbinglixiuting: '病理休停',
			PIfanshizhihou: '反式滞后',
			close: '取消插入',
		},
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "jinhuajiyin", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/gene");
		}
	},
	Plague_FenJieXian_zuobi: {
		clear: true,
		name: '<li><span style="color: red">开启作弊模式</span>',
	},
	wuyaokeyi: {
		name: '<span style="color: red">无药可医</span>',
		init: false,
		intro: '你的瘟疫无药可治（重启生效）',
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "wuyaokeyi", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/cheat");
		}
	},
	wuweibuzhi: {
		name: '<span style="color: red">无为不治</span>',
		init: false,
		intro: '人类永远不会反抗你（重启生效）',
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "wuweibuzhi", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/cheat");
		}
	},
	wuqiongwujin: {
		name: '<span style="color: red">无穷无尽</span>',
		init: false,
		intro: '利用神之力量来进化吧（重启生效）',
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "wuqiongwujin", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/cheat");
		}
	},
	jisubaofa: {
		name: '<span style="color: red">极速爆发</span>',
		init: false,
		intro: '初始地区人口完全感染（重启生效）',
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "jisubaofa", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/cheat");
		}
	},
	xingyunmoshi: {
		name: '<span style="color: red">幸运模式</span>',
		init: false,
		intro: '随机获得五种进化能力（重启生效）',
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "xingyunmoshi", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/cheat");
		}
	},
	shuangchongshentou: {
		name: '<span style="color: red">双重渗透</span>',
		init: false,
		intro: '选择要开始的两个国家（重启生效）',
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "shuangchongshentou", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/cheat");
		}
	},
	suijimoshi: {
		name: '<span style="color: red">随机模式</span>',
		init: false,
		intro: '打乱所有的进化顺序（重启生效）',
		onclick(item) {
			game.saveExtensionConfig("瘟疫公司", "suijimoshi", item);
			game.playAudio("../extension/瘟疫公司/audio/effect/cheat");
		}
	},
	decadeUI_imageLoad: {
		name: '十周年UI素材载入',
		clear: true,
		onclick() {
			game.playAudio("../extension/瘟疫公司/audio/effect/load");
			const decadeUIs = (lib.config.extensions && lib.config.extensions.includes('十周年UI') && lib.config['extension_十周年UI_enable']);
			const files = (game.getFileList && game.readFile && game.writeFile);
			if (decadeUIs && files) {
				//十周年样式
				game.getFileList('extension/十周年UI/image/decoration', (folders, files) => {
					if (!files.includes('name_PI_plague.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/name_PI_plague.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_PI_plague.png', () => { });
						});
					}
					if (!files.includes('name_DI_disaster.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/name_DI_disaster.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_DI_disaster.png', () => { });
						});
					}
					if (!files.includes('name_CI_cure.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/name_CI_cure.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decoration', 'name_CI_cure.png', () => { });
						});
					}
					if (!files.includes('dead_PI_plague.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/dead_PI_plague.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decoration', 'dead_PI_plague.png', () => { });
						});
					}
					if (!files.includes('dead_DI_disaster.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/dead_DI_disaster.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decoration', 'dead_DI_disaster.png', () => { });
						});
					}
					if (!files.includes('dead_CI_cure.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/dead_CI_cure.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decoration', 'dead_CI_cure.png', () => { });
						});
					}
					alert('十周年UI/image/decoration素材已成功导入');
				}, () => { });
				//手杀样式
				game.getFileList('extension/十周年UI/image/decorations', (folders, files) => {
					if (!files.includes('name2_PI_plague.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/name2_PI_plague.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decorations', 'name2_PI_plague.png', () => { });
						});
					}
					if (!files.includes('name2_DI_disaster.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/name2_DI_disaster.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decorations', 'name2_DI_disaster.png', () => { });
						});
					}
					if (!files.includes('name2_CI_cure.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/name2_CI_cure.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decorations', 'name2_CI_cure.png', () => { });
						});
					}
					if (!files.includes('dead2_PI_plague.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/dead2_PI_plague.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decorations', 'dead2_PI_plague.png', () => { });
						});
					}
					if (!files.includes('dead2_DI_disaster.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/dead2_DI_disaster.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decorations', 'dead2_DI_disaster.png', () => { });
						});
					}
					if (!files.includes('dead2_CI_cure.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/dead2_CI_cure.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/decorations', 'dead2_CI_cure.png', () => { });
						});
					}
					alert('十周年UI/image/decorations素材已成功导入');
				}, () => { });
				//卡牌
				game.getFileList('extension/十周年UI/image/card', (folders, files) => {
					if (!files.includes('sha_ill.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/sha_ill.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/card', 'sha_ill.png', () => { });
						});
					}
					if (!files.includes('sha_ill.webp')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/sha_ill.webp', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/card', 'sha_ill.webp', () => { });
						});
					}
					if (!files.includes('sha_cure.png')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/sha_cure.png', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/card', 'sha_cure.png', () => { });
						});
					}
					if (!files.includes('sha_cure.webp')) {
						game.readFile('extension/瘟疫公司/image/decadeUI-image/sha_cure.webp', (data) => {
							game.writeFile(data, 'extension/十周年UI/image/card', 'sha_cure.webp', () => { });
						});
					}
					alert('十周年UI/image/card素材已成功导入');
				}, () => { });
			}
			else if (!decadeUIs) alert('当前尚未开启《十周年UI》');
			else alert('读取功能出现问题，无法载入文件');
		},
	},
}