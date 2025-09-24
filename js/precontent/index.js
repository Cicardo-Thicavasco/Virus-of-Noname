import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import P_and_A from './P_and_A.js';
import S_and_P from './S_and_P.js';
import C_and_C from './C_and_C.js';

export function precontent(Plague_Inc) {
    if (Plague_Inc.enable) {
        //————————————————————————————————————扩展名称显示修改————————————————————————————————————//
        if (ui?.create?.menu) {
            const originLoading = ui.create.menu;
            ui.create.menu = function () {
                const result = originLoading.apply(this, arguments);
                //瘟疫公司logo
                const extensionPack = Array.from(document.getElementsByTagName('div')).find(div => div.innerHTML === '扩展');
                if (extensionPack) {
                    const originClick = extensionPack.onclick || function () { };
                    extensionPack.onclick = () => {
                        originClick.apply(this, arguments);
                        const plagueExtension = Array.from(document.querySelectorAll('.menubutton.large')).find(div => div.innerHTML === '瘟疫公司');
                        if (plagueExtension) plagueExtension.innerHTML = "<img style=width:100px src=" + lib.assetURL + "extension/瘟疫公司/image/introImage/logo.png>";
                    };
                }
                //武将包
                const characterPack = Array.from(document.getElementsByTagName('div')).find(div => div.innerHTML === '武将');
                if (characterPack) {
                    const originClick = characterPack.onclick || function () { };
                    characterPack.onclick = () => {
                        originClick.apply(this, arguments);
                        //瘟疫与疾苦
                        const plaguePack = Array.from(document.querySelectorAll('.menubutton.large')).find(div => div.innerHTML === '瘟疫与疾苦');
                        if (plaguePack) {
                            plaguePack.innerHTML = "<img style=width:100px src=" + lib.assetURL + "extension/瘟疫公司/image/introImage/P_and_A.png>";
                            const originClick2 = plaguePack.onclick || function () { };
                            plaguePack.onclick = () => {
                                originClick2.apply(this, arguments);
                                const rightPane = document.querySelector('.menu-buttons.leftbutton');
                                if (rightPane && !rightPane.init) {
                                    rightPane.init = true;
                                    const cfgNodes = rightPane.querySelectorAll('.config.toggle');
                                    for (let i = 0; i < cfgNodes.length; i++) {
                                        if (cfgNodes[i].textContent === '仅点将可用') {
                                            const title = document.createElement('div');
                                            title.classList.add('config', 'pointerspan');
                                            title.style.fontFamily = 'STKaiti';
                                            title.style.color = 'red';
                                            title.style.fontSize = '24px';
                                            title.style.textAlign = 'center';
                                            title.textContent = '瘟疫公司·物竞天择';
                                            cfgNodes[i].parentNode.insertBefore(title, cfgNodes[i].nextSibling);
                                            const image = document.createElement('img');
                                            image.src = lib.assetURL + 'extension/瘟疫公司/image/background/PlagueInc.jpg';
                                            image.style.maxWidth = '100%';
                                            image.style.height = 'auto';
                                            image.style.display = 'block';
                                            image.style.margin = '10px auto';
                                            cfgNodes[i].parentNode.insertBefore(image, cfgNodes[i].nextSibling);
                                            const subtitle1 = document.createElement('div');
                                            subtitle1.classList.add('config', 'pointerspan');
                                            subtitle1.style.fontFamily = 'Calibri';
                                            subtitle1.style.color = 'red';
                                            subtitle1.style.fontSize = '18px';
                                            subtitle1.style.textAlign = 'center';
                                            subtitle1.textContent = 'Welcome back, Doctor.';
                                            cfgNodes[i].parentNode.insertBefore(subtitle1, title.nextSibling);
                                            const welcome1 = document.createElement('div');
                                            welcome1.classList.add('config', 'pointerspan');
                                            welcome1.style.fontFamily = 'STKaiti';
                                            welcome1.style.color = 'red';
                                            welcome1.style.fontSize = '18px';
                                            welcome1.style.textAlign = 'center';
                                            welcome1.textContent = '欢迎回来，博士。';
                                            cfgNodes[i].parentNode.insertBefore(welcome1, subtitle1.nextSibling);
                                            const challenge1 = document.createElement('div');
                                            challenge1.classList.add('config', 'pointerspan');
                                            challenge1.style.fontFamily = 'Calibri';
                                            challenge1.style.color = 'red';
                                            challenge1.style.fontSize = '14px';
                                            challenge1.style.textAlign = 'center';
                                            challenge1.textContent = 'Can you infect the World?';
                                            cfgNodes[i].parentNode.insertBefore(challenge1, welcome1.nextSibling);
                                            const challenge2 = document.createElement('div');
                                            challenge2.classList.add('config', 'pointerspan');
                                            challenge2.style.fontFamily = 'STKaiti';
                                            challenge2.style.color = 'red';
                                            challenge2.style.fontSize = '14px';
                                            challenge2.style.textAlign = 'center';
                                            challenge2.textContent = '君可菌临天下耶？';
                                            cfgNodes[i].parentNode.insertBefore(challenge2, challenge1.nextSibling);
                                            break;
                                        }
                                    }
                                }
                            };
                        }
                        //细胞与医疗
                        const curePack = Array.from(document.querySelectorAll('.menubutton.large')).find(div => div.innerHTML === '细胞与医疗');
                        if (curePack) {
                            curePack.innerHTML = "<img style=width:100px src=" + lib.assetURL + "extension/瘟疫公司/image/introImage/C_and_C.png>";
                            const originClick2 = curePack.onclick || function () { };
                            curePack.onclick = () => {
                                originClick2.apply(this, arguments);
                                const rightPane = document.querySelector('.menu-buttons.leftbutton');
                                if (rightPane && !rightPane.init) {
                                    rightPane.init = true;
                                    const cfgNodes = rightPane.querySelectorAll('.config.toggle');
                                    for (let i = 0; i < cfgNodes.length; i++) {
                                        if (cfgNodes[i].textContent === '仅点将可用') {
                                            const title = document.createElement('div');
                                            title.classList.add('config', 'pointerspan');
                                            title.style.fontFamily = 'STKaiti';
                                            title.style.color = '#00BFFF';
                                            title.style.fontSize = '24px';
                                            title.style.textAlign = 'center';
                                            title.textContent = '解药公司·救世行动';
                                            cfgNodes[i].parentNode.insertBefore(title, cfgNodes[i].nextSibling);
                                            const image = document.createElement('img');
                                            image.src = lib.assetURL + 'extension/瘟疫公司/image/background/PlagueInc2.jpg';
                                            image.style.maxWidth = '100%';
                                            image.style.height = 'auto';
                                            image.style.display = 'block';
                                            image.style.margin = '10px auto';
                                            cfgNodes[i].parentNode.insertBefore(image, cfgNodes[i].nextSibling);
                                            const subtitle1 = document.createElement('div');
                                            subtitle1.classList.add('config', 'pointerspan');
                                            subtitle1.style.fontFamily = 'Calibri';
                                            subtitle1.style.color = '#00BFFF';
                                            subtitle1.style.fontSize = '18px';
                                            subtitle1.style.textAlign = 'center';
                                            subtitle1.textContent = 'Welcome back, Expert.';
                                            cfgNodes[i].parentNode.insertBefore(subtitle1, title.nextSibling);
                                            const welcome1 = document.createElement('div');
                                            welcome1.classList.add('config', 'pointerspan');
                                            welcome1.style.fontFamily = 'STKaiti';
                                            welcome1.style.color = '#00BFFF';
                                            welcome1.style.fontSize = '18px';
                                            welcome1.style.textAlign = 'center';
                                            welcome1.textContent = '欢迎回来，专家。';
                                            cfgNodes[i].parentNode.insertBefore(welcome1, subtitle1.nextSibling);
                                            const challenge1 = document.createElement('div');
                                            challenge1.classList.add('config', 'pointerspan');
                                            challenge1.style.fontFamily = 'Calibri';
                                            challenge1.style.color = '#00BFFF';
                                            challenge1.style.fontSize = '14px';
                                            challenge1.style.textAlign = 'center';
                                            challenge1.textContent = 'Can you save the World?';
                                            cfgNodes[i].parentNode.insertBefore(challenge1, welcome1.nextSibling);
                                            const challenge2 = document.createElement('div');
                                            challenge2.classList.add('config', 'pointerspan');
                                            challenge2.style.fontFamily = 'STKaiti';
                                            challenge2.style.color = '#00BFFF';
                                            challenge2.style.fontSize = '14px';
                                            challenge2.style.textAlign = 'center';
                                            challenge2.textContent = '君可悬壶济世耶？';
                                            cfgNodes[i].parentNode.insertBefore(challenge2, challenge1.nextSibling);
                                            break;
                                        }
                                    }
                                }
                            };
                        }
                        //天灾与人祸
                        const disasterPack = Array.from(document.querySelectorAll('.menubutton.large')).find(div => div.innerHTML === '天灾与人祸');
                        if (disasterPack) {
                            disasterPack.innerHTML = "<img style=width:100px src=" + lib.assetURL + "extension/瘟疫公司/image/introImage/S_and_P.png>";
                            const originClick2 = disasterPack.onclick || function () { };
                            disasterPack.onclick = () => {
                                originClick2.apply(this, arguments);
                                const rightPane = document.querySelector('.menu-buttons.leftbutton');
                                if (rightPane && !rightPane.init) {
                                    rightPane.init = true;
                                    const cfgNodes = rightPane.querySelectorAll('.config.toggle');
                                    for (let i = 0; i < cfgNodes.length; i++) {
                                        if (cfgNodes[i].textContent === '仅点将可用') {
                                            const title = document.createElement('div');
                                            title.classList.add('config', 'pointerspan');
                                            title.style.fontFamily = 'STKaiti';
                                            title.style.color = '#ADFF2F';
                                            title.style.fontSize = '24px';
                                            title.style.textAlign = 'center';
                                            title.textContent = '灾祸公司·灭世风云';
                                            cfgNodes[i].parentNode.insertBefore(title, cfgNodes[i].nextSibling);
                                            const image = document.createElement('img');
                                            image.src = lib.assetURL + 'extension/瘟疫公司/image/background/PlagueInc3.jpg';
                                            image.style.maxWidth = '100%';
                                            image.style.height = 'auto';
                                            image.style.display = 'block';
                                            image.style.margin = '10px auto';
                                            cfgNodes[i].parentNode.insertBefore(image, cfgNodes[i].nextSibling);
                                            const subtitle1 = document.createElement('div');
                                            subtitle1.classList.add('config', 'pointerspan');
                                            subtitle1.style.fontFamily = 'Calibri';
                                            subtitle1.style.color = '#ADFF2F';
                                            subtitle1.style.fontSize = '18px';
                                            subtitle1.style.textAlign = 'center';
                                            subtitle1.textContent = 'Welcome back, Professor.';
                                            cfgNodes[i].parentNode.insertBefore(subtitle1, title.nextSibling);
                                            const welcome1 = document.createElement('div');
                                            welcome1.classList.add('config', 'pointerspan');
                                            welcome1.style.fontFamily = 'STKaiti';
                                            welcome1.style.color = '#ADFF2F';
                                            welcome1.style.fontSize = '18px';
                                            welcome1.style.textAlign = 'center';
                                            welcome1.textContent = '欢迎回来，教授。';
                                            cfgNodes[i].parentNode.insertBefore(welcome1, subtitle1.nextSibling);
                                            const challenge1 = document.createElement('div');
                                            challenge1.classList.add('config', 'pointerspan');
                                            challenge1.style.fontFamily = 'Calibri';
                                            challenge1.style.color = '#ADFF2F';
                                            challenge1.style.fontSize = '14px';
                                            challenge1.style.textAlign = 'center';
                                            challenge1.textContent = 'Can you destroy the World?';
                                            cfgNodes[i].parentNode.insertBefore(challenge1, welcome1.nextSibling);
                                            const challenge2 = document.createElement('div');
                                            challenge2.classList.add('config', 'pointerspan');
                                            challenge2.style.fontFamily = 'STKaiti';
                                            challenge2.style.color = '#ADFF2F';
                                            challenge2.style.fontSize = '14px';
                                            challenge2.style.textAlign = 'center';
                                            challenge2.textContent = '君可席卷八荒耶？';
                                            cfgNodes[i].parentNode.insertBefore(challenge2, challenge1.nextSibling);
                                            break;
                                        }
                                    }
                                }
                            };
                        }
                    };
                }
                return result;
            };
        }
        //————————————————————————————————————CSS载入————————————————————————————————————//
        lib.init.css(lib.assetURL + 'extension/瘟疫公司', 'extension');
        //————————————————————————————————————势力添加————————————————————————————————————//
        game.addGroup('PI_plague', '瘟', '瘟疫', { color: '#FF0000' });
        game.addGroup('CI_cure', '医', '医疗', { color: '#00BFFF' });
        game.addGroup('DI_disaster', '灾', '灾祸', { color: '#ADFF2F' });
        //————————————————————————————————————函数相关————————————————————————————————————//
        lib.element.player.addPIliranMark = function () {
            let nosource, next = game.createEvent('addPIliranMark');
            next.player = this;
            for (const argument of arguments) {
                if (argument == 'nosource') {
                    nosource = true;
                    next.set('nosource', true);
                }
                else if (!nosource && get.itemtype(argument) == 'player') {
                    next.set('source', argument);
                }
            }
            if (!next.source && !nosource && _status.event.player) {
                next.set('source', _status.event.player);
            }
            next.setContent('addPIliranMark');
            return next;
        };
        lib.element.content.addPIliranMark = function () {
            'step 0'
            if (!player.canGanran()) {
                event._triggered = true;
                event.finish();
                return;
            }
            player.addMark('PIliran_mark', 1);
            game.playAudio('..', 'extension', '瘟疫公司', 'audio', 'skill', 'PIliran');
            'step 1'
            game.delayx();
        };
        lib.element.player.removePIliranMark = function () {
            let nosource, next = game.createEvent('removePIliranMark');
            next.player = this;
            for (const argument of arguments) {
                if (argument == 'nosource') {
                    nosource = true;
                    next.set('nosource', true);
                }
                else if (!nosource && get.itemtype(argument) == 'player') {
                    next.set('source', argument);
                }
            }
            if (!next.source && !nosource && _status.event.player) {
                next.set('source', _status.event.player);
            }
            next.setContent('removePIliranMark');
            return next;
        };
        lib.element.content.removePIliranMark = function () {
            'step 0'
            player.clearMark('PIliran_mark');
            'step 1'
            game.delayx();
        };
        lib.element.player.canGanran = function () {
            if (this.hasClan('瘟疫公司', true)) return false;
            return !(this.hasMark('PIliran_mark') || this.hasSkillTag('noganran'));
        };
        lib.filter.PI_targetEnabled4 = function (card, player, target) {
            if (!card) return false;
            var info = get.info(card);
            if (!info.singleCard || ui.selected.targets.length == 0) {
                var mod = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
                if (mod != 'unchanged') return mod;
                var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                if (mod != 'unchanged') return mod;
            }
            return true;
        };
        lib.filter.PI_targetEnabled5 = function (card, player, target) {
            if (lib.filter.PI_targetEnabled4(card, player, target)) return true;
            if (!card) return false;

            if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return false;
            if (game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target) == false) return false;

            var filter = get.info(card).modTarget;
            if (typeof filter == 'boolean') return filter;
            if (typeof filter == 'function') return Boolean(filter(card, player, target));
            return false;
        };
        game.PI_swapPlayer = function (player, player2) {
            if (player2) {
                if (player == game.me) game.swapPlayer(player2);
                else if (player2 == game.me) game.swapPlayer(player);
            } else {
                if (player == game.me) return;
                var players = game.players.concat(game.dead);
                for (var i = 0; i < players.length; i++) {
                    players[i].style.transition = 'all 0s';
                }
                game.addVideo('swapPlayer', player, get.cardsInfo(player.getCards('h')));
                if (!game.chess) {
                    var pos = parseInt(player.dataset.position), num = game.players.length + game.dead.length, players = game.players.concat(game.dead)
                    var temp;
                    for (var i = 0; i < players.length; i++) {
                        temp = parseInt(players[i].dataset.position) - pos;
                        if (temp < 0) temp += num;
                        players[i].dataset.position = temp;
                    }
                }
                game.me.node.handcards1.remove();
                game.me.node.handcards2.remove();
                var current = game.me;
                game.me = player;
                if (current.isDead()) current.$die();
                ui.handcards1 = player.node.handcards1.animate('start').fix();
                ui.handcards2 = player.node.handcards2.animate('start').fix();
                ui.handcards1Container.appendChild(ui.handcards1);
                ui.handcards2Container.appendChild(ui.handcards2);
                ui.updatehl();
            }
            if (game.me.isAlive()) {
                if (ui.auto) ui.auto.show();
                if (ui.wuxie) ui.wuxie.show();
                if (ui.revive) {
                    ui.revive.close();
                    delete ui.revive;
                }
                if (ui.swap) {
                    ui.swap.close();
                    delete ui.swap;
                }
                if (ui.restart) {
                    ui.restart.close();
                    delete ui.restart;
                }
                if (ui.continue_game) {
                    ui.continue_game.close();
                    delete ui.continue_game;
                }
            }
            setTimeout(function () {
                for (var i = 0; i < players.length; i++) {
                    players[i].style.transition = '';
                }
            }, 100);
        };
        lib.element.player.isPISameClanFor = function (player) {
            return this.getClans().some(tag => player.getClans().includes(tag));
        };
        //《感染进程》相关
        lib.skill._Plague_1 = {
            trigger: { player: 'gameDrawAfter' },
            filter(event, player) {
                return (lib.config.extension_瘟疫公司_Plague_effect || 'off') !== 'off';
            },
            forced: true,
            popup: false,
            forceDie: true,
            firstDo: true,
            content() {
                game._Plague_effect = 'Plague_' + event.name.slice(-1);
                game.broadcastAll((name, choice) => {
                    ui.background.setBackgroundImage('extension/瘟疫公司/image/background/' + choice + '/' + game._Plague_effect + '.png');
                    ui.background.setBackgroundImage(ui.background.style.backgroundImage);
                    if (lib.config.background_speak) game.playAudio('..', 'extension', '瘟疫公司/audio/effect', name);
                }, game._Plague_effect, lib.config.extension_瘟疫公司_Plague_effect || 'CN');
            },
        };
        lib.skill._Plague_2 = {
            inherit: '_Plague_1',
            trigger: { player: 'addPIliranMarkAfter' },
            filter(event, player) {
                if (!game._Plague_effect || parseInt(game._Plague_effect.slice(-1)) !== 1) return false;
                return !game.hasPlayer(target => target.canGanran());
            },
        };
        lib.skill._Plague_3 = {
            inherit: '_Plague_1',
            trigger: { player: 'dieAfter' },
            filter(event, player) {
                if (!game._Plague_effect || parseInt(game._Plague_effect.slice(-1)) !== 2) return false;
                return player.hasMark('PIliran_mark') && game.countPlayer2(target => {
                    return target.hasMark('PIliran_mark') && !target.isAlive();
                }) >= game.countPlayer(target => target.hasMark('PIliran_mark'));
            },
        };
        lib.skill._Plague_4 = {
            inherit: '_Plague_1',
            trigger: { player: 'dieAfter' },
            filter(event, player) {
                if (!game._Plague_effect || parseInt(game._Plague_effect.slice(-1)) !== 3) return false;
                return player.hasMark('PIliran_mark') && game.countPlayer(target => target.hasMark('PIliran_mark')) === 1;
            },
        };
        //载入元素
        lib.arenaReady.push(() => {
            //武将评级
            if (lib.rank) {
                lib.rank.rarity.legend.addArray(Object.keys(lib.characterPack['P_and_A']));
                lib.rank.rarity.legend.addArray(Object.keys(lib.characterPack['S_and_P']));
                lib.rank.rarity.legend.addArray(Object.keys(lib.characterPack['C_and_C']));
            }
            //切换背景图片
            //换背景换bgm
            const item = lib.config.extension_瘟疫公司_qiehuan;
            if (typeof item == 'string' && item != 'close') {
                game.broadcastAll(item => {
                    ui.background.setBackgroundImage('extension/瘟疫公司/image/background/PlagueInc' + (item == 'cure' ? '2' : '') + '.jpg');
                    ui.background.setBackgroundImage(ui.background.style.backgroundImage);
                    lib.config.background_music = "music_custom";
                    lib.config.background_music_src = ui.backgroundMusic.src = `${lib.assetURL}extension/瘟疫公司/audio/background/${item}.mp3`;
                }, item);
            }
            //特殊能力
            if (lib.characterPack['P_and_A']) {
                for (const name of Object.keys(lib.characterPack['P_and_A'])) {
                    for (const config of ['hesuanjiyin', 'chuanbojiyin', 'huanjingjiyin', 'tubianjiyin', 'jinhuajiyin']) {
                        const effect = lib.config['extension_瘟疫公司_' + config];
                        if (effect && effect !== 'close') {
                            lib.characterPack['P_and_A'][name].skills.push(effect);
                            if (lib.character[name]) lib.character[name].skills.push(effect);
                        }
                    }
                    for (const config of ['wuyaokeyi', 'wuweibuzhi', 'wuqiongwujin', 'jisubaofa', 'xingyunmoshi', 'shuangchongshentou', 'suijimoshi']) {
                        if (lib.config['extension_瘟疫公司_' + config]) {
                            const effect = 'PI' + config;
                            lib.characterPack['P_and_A'][name].skills.push(effect);
                            if (lib.character[name]) lib.character[name].skills.push(effect);
                        }
                    }
                }
            }
            //病【杀】
            game.addNature('ill', '病', {
                linked: true,
                lineColor: ['255', '48', '48'],
                background: 'ext:瘟疫公司/image/card/sha_ill.png',
                audio: {
                    damage: {
                        ill: {
                            1: 'ext:瘟疫公司/audio/effect/damage_ill.mp3',
                            2: 'ext:瘟疫公司/audio/effect/damage_ill2.mp3',
                        },
                    },
                    hujia_damage: {
                        ill: {
                            1: 'ext:瘟疫公司/audio/effect/hujia_damage_ill.mp3',
                            2: 'ext:瘟疫公司/audio/effect/hujia_damage_ill2.mp3',
                        },
                    },
                    sha: {
                        ill: {
                            'male': 'ext:瘟疫公司/audio/card/male/sha_ill.mp3',
                            'female': 'ext:瘟疫公司/audio/card/female/sha_ill.mp3',
                        },
                    },
                },
            });
            lib.skill['_ill_effect'] = {
                ruleSkill: true,
                trigger: { source: 'damageBefore' },
                filter(event, player) {
                    return event.hasNature('ill');
                },
                check(event, source) {
                    const { player } = event;
                    return get.damageEffect(player, source, source) < get.effect(player, { name: 'losehp' }, source, source);
                },
                logTarget: 'player',
                content() {
                    trigger.cancel();
                    trigger.player.loseHp(trigger.num);
                },
                ai: {
                    jueqing: true,
                    nohujia: true,
                    unequip: true,
                    unequip_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (tag === 'nohujia') {
                            if (!_status.event || !['damage', 'changeHp'].includes(_status.event.name)) return false;
                            let event = _status.event;
                            if (event.name === 'changeHp') event = event.getParent();
                            return event?.card?.name === 'sha' && game.hasNature(event.card, 'ill');
                        }
                        else {
                            if (!(arg?.card?.name === 'sha' && game.hasNature(arg.card, 'ill'))) return false;
                        }
                    },
                },
            };
            lib.translate['_ill_effect'] = '病杀';
            lib.translate['_ill_effect_info'] = '取消此伤害，改为令目标角色失去等量体力。';
            lib.translate['sha_nature_ill_info'] = '出牌阶段，对你攻击范围内的一名角色使用（无视防具）。其须使用一张【闪】，否则你对其造成1点无视护甲的病属性伤害。';
            //医【杀】
            game.addNature('cure', '医', {
                linked: true,
                lineColor: ['0', '191', '255'],
                background: 'ext:瘟疫公司/image/card/sha_cure.png',
                audio: {
                    damage: {
                        cure: {
                            1: 'ext:瘟疫公司/audio/effect/damage_cure.mp3',
                            2: 'ext:瘟疫公司/audio/effect/damage_cure2.mp3',
                        },
                    },
                    hujia_damage: {
                        cure: {
                            1: 'ext:瘟疫公司/audio/effect/hujia_damage_cure.mp3',
                            2: 'ext:瘟疫公司/audio/effect/hujia_damage_cure2.mp3',
                        },
                    },
                    sha: {
                        cure: {
                            'male': 'ext:瘟疫公司/audio/card/male/sha_cure.mp3',
                            'female': 'ext:瘟疫公司/audio/card/female/sha_cure.mp3',
                        },
                    },
                },
            });
            lib.skill['_cure_effect'] = {
                ruleSkill: true,
                trigger: { source: 'damageBefore' },
                filter(event, player) {
                    return event.hasNature('cure');
                },
                check(event, source) {
                    const { player } = event;
                    return get.damageEffect(player, source, source) < get.recoverEffect(player, source, source);
                },
                logTarget: 'player',
                content() {
                    trigger.cancel();
                    trigger.player.recover(trigger.num);
                },
                ai: {
                    nohujia: true,
                    unequip: true,
                    unequip_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (tag === 'nohujia') {
                            if (!_status.event || !['damage', 'changeHp'].includes(_status.event.name)) return false;
                            let event = _status.event;
                            if (event.name === 'changeHp') event = event.getParent();
                            return event?.card?.name === 'sha' && game.hasNature(event.card, 'cure');
                        }
                        else {
                            if (!(arg?.card?.name === 'sha' && game.hasNature(arg.card, 'cure'))) return false;
                        }
                    },
                    effect: {
                        target_use(card, player, target, current) {
                            if (target.isHealthy() || (card.name !== "sha" || !game.hasNature(card, 'cure'))) return;
                            if (current > 0) return 1.2;
                        },
                    },
                },
            };
            lib.translate['_cure_effect'] = '医杀';
            lib.translate['_cure_effect_info'] = '取消此伤害，改为令目标角色回复等量体力。';
            lib.translate['sha_nature_cure_info'] = '出牌阶段，对你攻击范围内的一名角色使用（无视防具）。其须使用一张【闪】，否则你对其造成1点无视护甲的医属性伤害。';
            if (lib.card?.list) {
                lib.card.list.addArray([
                    //病杀
                    ['heart', 1, 'sha', 'ill'],
                    ['spade', 1, 'sha', 'ill'],
                    ['club', 1, 'sha', 'ill'],
                    ['heart', 4, 'sha', 'ill'],
                    ['diamond', 4, 'sha', 'ill'],
                    ['club', 5, 'sha', 'ill'],
                    ['spade', 11, 'sha', 'ill'],
                    //医杀
                    ['heart', 1, 'sha', 'cure'],
                    ['heart', 1, 'sha', 'cure'],
                    ['heart', 9, 'sha', 'cure'],
                    ['heart', 9, 'sha', 'cure'],
                    ['diamond', 8, 'sha', 'cure'],
                    ['diamond', 8, 'sha', 'cure'],
                    ['diamond', 10, 'sha', 'cure'],
                    ['diamond', 10, 'sha', 'cure'],
                    ['club', 1, 'sha', 'cure'],
                    ['club', 1, 'sha', 'cure'],
                    ['club', 9, 'sha', 'cure'],
                    ['spade', 8, 'sha', 'cure'],
                    ['spade', 9, 'sha', 'cure'],
                    ['spade', 10, 'sha', 'cure'],
                ]);
            }
        });
        //--------------------武将包--------------------//
        //瘟疫与疾苦
        game.import('character', P_and_A);
        //天灾与人祸
        game.import('character', S_and_P);
        //细胞与医疗
        game.import('character', C_and_C);
        //--------------------卡牌包--------------------//
    }
}