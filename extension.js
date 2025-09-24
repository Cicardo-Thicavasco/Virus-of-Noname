//game.import(name: "瘟疫公司",
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { config } from './js/config.js';
import { precontent } from './js/precontent/index.js';
import { content } from './js/content.js';
import { help } from './js/help.js';

lib.init.css(lib.assetURL + 'extension/瘟疫公司', 'extension');

let extensionPackage = {
	name: "瘟疫公司",
	editable: false,
	content: content,
	precontent: precontent,
	config: config,
	help: help,
	files: {},
};

export let type = 'extension';
export default async function () {
	const { name, intro, author, ...otherInfo } = await lib.init.promises.json(`${lib.assetURL}extension/瘟疫公司/info.json`);
	extensionPackage.package = {
		...otherInfo,
		intro: [
			"<img style=width:300px src=" + lib.assetURL + "extension/瘟疫公司/image/introImage/Plague_Inc.jpg>",
			'在扩展群里活跃的萌新，平时以制作整合包为主，本扩展根据瘟疫公司游戏元素创作的扩展，武将设计方面还请各位大佬轻喷...如果我的扩展能给您带来愉悦的好心情是我最大的回馈与收获，目前只更新了几个武将和技能，未更新的武将或技能将在后续更新，敬请期待，谢谢各位下载支持！',
			'<video controls style=width:300px src=' + lib.assetURL + 'extension/瘟疫公司/image/introImage/plague_introVideo.mp4>',
			//"瘟疫公司的游戏本体下载链接，欢迎各位感兴趣下载游玩原游戏",
			//"手机版：https://www.123pan.com/s/U1PjVv-Au7i3.html提取码:NCWM",
			//"电脑版：https://www.123pan.com/s/U1PjVv-Hu7i3.html提取码:NCWM",
			//"Q：为什么不直接把游戏本体放进本扩展包里呢？",
			//"A：那样的话本扩展包的内存会变得更大，而且这种行为与安装捆绑软件没什么两样。",
		].join('<br>'),
		author: [
			'東は永遠に天下第一だ',
			...['来这群蹭吃蹭喝的屑祈明', '萌新（转型中）'].map(i => '代码：' + i),
			...['萨菲瑞伊', 'dairi', '清水茜', '湖山kozan', '日在校园', '铃木光司', '天行木羽'].map(i => '武将插画：' + i),
		].join('<br>'),
	};
	return extensionPackage;
};
