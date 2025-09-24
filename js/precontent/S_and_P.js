import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
lib.init.css(lib.assetURL + "extension/瘟疫公司/js/precontent", "DI_title");

const packs = function () {
    var S_and_P = {
        name: "S_and_P",
        connect: true,
        character: {
            DI_fakenews: ["female", "DI_disaster", 3, ["DIhuolun", "DIshanzhong", "DIshouliu", "DIyuqing"], []],
            DI_chemicalweapon: ["female", "DI_disaster", 4, ["DIdudan", "DIlieyang", "DIjindu", "DIduran"], []],
        },
        characterIntro: {
            DI_fakenews: '——画师：dairi<br>——不实与失真的讯息正如疾病般蔓延<br><a class="disaster" href="https://plagueinc.wiki.gg/wiki/Fake_News" target="_blank">虚假新闻</a>（英语：Fake News）是指为了达到某一目的而采用发布假信息达到欺骗当事者的一种舆论，未能真实反映客观事物本来面貌，带有虚假成分的报道。虚假新闻的发布需要承担民事法律责任、行政和刑事法律责任。',
            DI_chemicalweapon: '——因战争而诞生自人类手中的潘多拉魔盒，所过之地寸草不生<br><a class="disaster" href="https://baike.baidu.com/item/%E5%8C%96%E5%AD%A6%E6%AD%A6%E5%99%A8/470784" target="_blank">化学武器</a>（英语：Chemical Weapon）是通过爆炸的方式（比如炸弹、核武器、炮弹或导弹）释放有毒化学品或称化学战剂。化学武器通过包括窒息、神经损伤、血中毒和起水疱在内的令人恐怖的反应杀伤人类。化学武器素有“无声杀手”之称。它包括装有各种化学毒剂的化学炮弹、导弹和化学地雷、飞机布洒器、毒烟施放器以及某些二元化学炮弹等。战争中使用毒物杀伤对方有生力量、牵制和扰乱对方军事行动的有毒物质统称为化学战剂（Chemical Warfareagents，CWA）或简称毒剂。装填有CWA弹药称化学弹药（Chemical Munitions）。应用各种兵器，如步枪、各型火炮、火箭或导弹发射架、飞机等将毒剂施 放至空间或地面，造成一定的浓度或密度从而发挥其战斗作用。因此，化学战剂、化学弹药及其施放器材合称为化学武器。而CWA则是构成化学武器的基本要素。化学武器大规模使用始于1914年～1918年的第一次世界大战。使用的毒剂有氯气、光气、双光气、氯化苦、二苯氯胂、氢氰酸、芥子气等多达40余种，毒剂用量达12万吨，伤亡人数约130万，占战争伤亡总人数的4.6%。2023年7月7日，美国总统拜登宣布，美国已销毁最后一批化学武器库存。',
            //DI_:'——<br>',
            //a:'<a class="disaster" href="">'
        },
        characterTitle: {
            DI_fakenews: '<span class="disaster-title" style="font-size: 20px">谣言门户</span>',
            DI_chemicalweapon: '<span class="disaster-title" style="font-size: 20px">白骨露野</span>',
            //DI_:'<span class="disaster-title"  style="font-size: 20px"></span>',
            //DI_:'<span style="font-size: 20px"></span>',
        },
        skill: {
            //虚假消息
            DIhuolun: {
                enable: "phaseUse",
                filter(event, player) {
                    if (player.hasSkill("DIhuolun_used")) return false;
                    const cards = Array.from(ui.cardPile.childNodes);
                    if (!cards.length) return false;
                    const card = cards[cards.length - 1];
                    for (const i of lib.inpile) {
                        const type = get.type(i);
                        if ((type == "basic" || type == "trick") && event.filterCard(get.autoViewAs({ name: i }, [card]), player, event)) return true;
                        if (i == "sha") {
                            for (const j of lib.inpile_nature) {
                                if (event.filterCard(get.autoViewAs({ name: i, nature: j }, [card]), player, event)) return true;
                            }
                        }
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        let list = [];
                        const cards = Array.from(ui.cardPile.childNodes),
                            card = cards[cards.length - 1];
                        for (const i of lib.inpile) {
                            if (event.type != "phase") if (!event.filterCard(get.autoViewAs({ name: i }, [card]), player, event)) continue;
                            const type = get.type(i);
                            if (type == "basic" || type == "trick") list.push([type, "", i]);
                            if (i == "sha") {
                                for (const j of lib.inpile_nature) {
                                    if (!event.filterCard(get.autoViewAs({ name: i, nature: j }, [card]), player, event)) continue;
                                    list.push(["基本", "", "sha", j]);
                                }
                            }
                        }
                        return ui.create.dialog("惑论", [list, "vcard"]);
                    },
                    filter(button, player) {
                        const evt = get.event().getParent();
                        return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
                    },
                    check(button) {
                        const card = { name: button.link[2], nature: button.link[3] };
                        const player = get.event().player,
                            val = player.getUseValue(card);
                        if (val <= 0) return 0;
                        const enemyNum = game.countPlayer(current => {
                            return current != player && !current.hasMark("DIhuolun_mark") && (get.realAttitude || get.attitude)(current, player) < 0;
                        });
                        if (enemyNum) {
                            const cards = Array.from(ui.cardPile.childNodes);
                            const cardx = cards[cards.length - 1];
                            if (
                                !(function (card, cardx) {
                                    return card.name == cardx.name || (get.type2(card) == get.type2(cardx) && get.color(cardx, false) == "red");
                                })(card, cardx)
                            ) {
                                if (get.value(card, player, "raw") < 6) return Math.sqrt(val) * (0.25 + Math.random() / 1.5);
                                if (enemyNum <= 2) return Math.sqrt(val) / 1.5;
                                return 0;
                            }
                            return 3 * val;
                        }
                        return val;
                    },
                    backup(links, player) {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            ignoreMod: true,
                            aiUse: 1 + Math.random(),
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                                suit: "none",
                                number: null,
                            },
                            async precontent(event, _, player) {
                                await player.logSkill("DIhuolun");
                                player.addTempSkill("DIhuolun_guess");
                                player.addTempSkill("DIhuolun_used", "phaseUseAfter");
                                const cards = Array.from(ui.cardPile.childNodes);
                                const card = cards[cards.length - 1];
                                event.result.cards = [card];
                                event.result.card.cards = [card];
                                event.result.card.suit = get.suit(card);
                                event.result.card.number = get.number(card);
                            },
                        };
                    },
                    prompt(links) {
                        const cards = Array.from(ui.cardPile.childNodes);
                        return "将" + get.translation(cards[cards.length - 1]) + "当作" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
                    },
                },
                ai: {
                    order: 7.5,
                    result: { player: 1 },
                },
                mark: true,
                markimage: "image/card/handcard.png",
                intro: {
                    mark(dialog, _, player) {
                        if (!player.isUnderControl(true)) return get.translation(player) + "观看牌堆中...";
                        const cards = Array.from(ui.cardPile.childNodes);
                        if (!cards.length) return "牌堆底无牌";
                        dialog.add([cards[cards.length - 1]]);
                    },
                },
                group: "DIhuolun_mark_effect",
                subSkill: {
                    mark: {
                        markimage: "extension/瘟疫公司/image/card/DIhuolun_mark.png",
                        intro: {
                            name: "惑",
                            content: "mark",
                        },
                    },
                    used: { charlotte: true },
                    guess: {
                        charlotte: true,
                        trigger: { player: "useCardBefore" },
                        filter(event, player) {
                            return event.skill == "DIhuolun_backup";
                        },
                        firstDo: true,
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const cards = trigger.cards,
                                card = cards[0];
                            await game.cardsGotoOrdering(cards);
                            let fake = false,
                                show = false;
                            if (card.name != trigger.card.name && (get.type2(card) != get.type2(trigger.card) || get.color(card, false) == "red")) fake = true;
                            trigger.skill = "DIhuolun_backup";
                            game.log(player, "声明", trigger.targets && trigger.targets.length ? "对" : "", trigger.targets || "", trigger.name == "useCard" ? "使用" : "打出", trigger.card);
                            const prompt = get.translation(player) + "声明" + (trigger.targets && trigger.targets.length ? "对" + get.translation(trigger.targets) : "") + "使用" + (get.translation(trigger.card.nature) || "") + get.translation(trigger.card.name) + "，是否质疑？";
                            const targets = game
                                .filterPlayer(current => {
                                    return current != player && !current.hasMark("DIhuolun_mark");
                                })
                                .sortBySeat(player);
                            for (const target of targets) {
                                const result = await target
                                    .chooseButton([prompt, [["reguhuo_ally", "reguhuo_betray"], "vcard"]], true)
                                    .set("ai", button => {
                                        const player = get.event().player;
                                        const evt = get.event().getParent("DIhuolun_guess"),
                                            evtx = evt.getTrigger();
                                        if (!evt) return Math.random();
                                        const card = { name: evtx.card.name, nature: evtx.card.nature, isCard: true };
                                        const ally = button.link[2] == "reguhuo_ally";
                                        if (ally && get.attitude(player, evt.player) >= 0) return 1.1;
                                        if (!ally && get.attitude(player, evt.player) < 0 && evtx.name == "useCard") {
                                            const targetsx = evtx.targets || [];
                                            let eff = targetsx.reduce((sum, target) => {
                                                return sum + get.effect(target, card, evt.player, player) / (target == evt.player ? 1.5 : 1);
                                            }, 0);
                                            eff /= 1.5 * targetsx.length || 1;
                                            if (eff > 0) return 0;
                                            if (eff < -7) return Math.random() + Math.pow(-(eff + 7) / 8, 2);
                                            return Math.pow((get.value(card, evt.player, "raw") - 4) / (eff == 0 ? 5 : 10), 2);
                                        }
                                        return Math.random();
                                    })
                                    .forResult();
                                if (result.links[0][2] == "reguhuo_betray") {
                                    target.addExpose(0.2);
                                    show = true;
                                    game.log(target, "#y质疑");
                                    target.popup("质疑！", "fire");
                                    await player.showCards(cards, get.translation(player) + "【惑论】转化");
                                    if (fake) {
                                        await game.cardsDiscard(cards);
                                        player.$throw(cards, 1000);
                                        trigger.throw = false;
                                        target.popup("质疑正确", "wood");
                                        game.log(player, "声明的", trigger.card, "作废了");
                                        trigger.cancel();
                                        trigger.getParent().goto(0);
                                        trigger.line = false;
                                        await player.chooseToDiscard(2, "he", true);
                                        const result = await player
                                            .chooseBool("是否失去1点体力，然后重置【惑论】使用次数？")
                                            .set("choice", player.getHp() > 2)
                                            .forResult();
                                        if (result.bool) {
                                            await player.loseHp();
                                            player.removeSkill("DIhuolun_used");
                                            player.popup("惑论");
                                            game.log(player, "重置了技能", "#g【惑论】");
                                        }
                                    } else {
                                        target.popup("质疑错误", "fire");
                                        target.addMark("DIhuolun_mark", 1);
                                    }
                                    break;
                                } else {
                                    game.log(target, "#g不质疑");
                                    target.popup("不质疑", "wood");
                                    await game.asyncDelay();
                                }
                            }
                            if (!show) await player.showCards(cards, get.translation(player) + "【惑论】转化");
                            if (fake) game.broadcastAll(ui.clear);
                        },
                    },
                    effect: {
                        trigger: { player: "useCardToPlayered" },
                        filter(event, player) {
                            return event.target.hasMark("DIhuolun_mark");
                        },
                        forced: true,
                        locked: false,
                        content() {
                            game.log(trigger.target, "不可响应", trigger.card);
                            trigger.getParent().directHit.add(trigger.target);
                        },
                    },
                },
            },
            DIshanzhong: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    if (!event.player.isIn() || !event.source || !event.source.isIn()) return false;
                    return event.player == player || !player.getRoundHistory("useSkill", evt => evt.skill == "DIshanzhong").length;
                },
                check(event, player) {
                    return get.attitude(player, event.player) > 0 && get.attitude(player, event.source) <= 0;
                },
                logTarget: "player",
                async content(event, trigger, player) {
                    const source = trigger.source,
                        target = trigger.player;
                    player.line(game.filterPlayer());
                    const result = await player.chooseToDebate(game.filterPlayer()).forResult();
                    if (result.opinion) {
                        if (result.opinion == "red") {
                            if (target.isDamaged()) {
                                await source.chooseToGive("he", target, target.getDamagedHp(), true);
                            }
                            await source.loseHp();
                        }
                        if (result.opinion == "black") {
                            let resultx,
                                next = _status.currentPhase.getNext();
                            if (source.isTurnedOver() && (!next || source.getStorage("DIshanzhong_ban").includes(next))) return;
                            else if (source.isTurnedOver()) resultx = { index: 0 };
                            else if (!next || source.getStorage("DIshanzhong_ban").includes(next)) resultx = { index: 1 };
                            else
                                resultx = await player
                                    .chooseControl()
                                    .set("choiceList", ["不能使用或打出手牌直到" + get.translation(next) + "的回合结束", "将武将牌翻至背面"])
                                    .set("ai", () => get.rand(0, 1))
                                    .forResult();
                            if (resultx.index == 0) {
                                source.addSkill("DIshanzhong_ban");
                                source.markAuto("DIshanzhong_ban", [next]);
                            } else await source.turnOver(true);
                        }
                    }
                },
                subSkill: {
                    ban: {
                        mark: true,
                        intro: {
                            markcount: () => 0,
                            content: "不能使用手牌直到$的回合结束",
                        },
                        charlotte: true,
                        onremove: true,
                        trigger: { global: "phaseEnd" },
                        filter(event, player) {
                            return player.getStorage("DIshanzhong_ban").includes(event.player);
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        content() {
                            player.unmarkAuto("DIshanzhong_ban", [trigger.player]);
                            if (!player.getStorage("DIshanzhong_ban").length) {
                                player.removeSkill("DIshanzhong_ban");
                            }
                        },
                        mod: {
                            cardEnabled2(card) {
                                if (get.position(card) == "h") return false;
                            },
                        },
                    },
                },
            },
            DIshouliu: {
                trigger: { global: "phaseEnd" },
                filter(event, player) {
                    return game.hasPlayer(target => target.hasMark("DIhuolun_mark"));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt2("DIshouliu"),
                            (card, player, target) => {
                                return target.hasMark("DIhuolun_mark");
                            },
                            [1, Infinity]
                        )
                        .set("ai", () => 1 + Math.random())
                        .forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    for (const i of targets) i.removeMark("DIhuolun_mark", i.countMark("DIhuolun_mark"));
                    let more,
                        num = player.getHp();
                    if (num > 0 && !player.hasSkill("DIshouliu_effect")) {
                        const result = await player.chooseBool("收流：是否多摸" + get.cnNumber(num) + "张牌？", "若如此做，你本轮不能以此法多摸牌").forResult();
                        if (result.bool) {
                            more = true;
                            player.addTempSkill("DIshouliu_effect", "roundStart");
                        }
                    }
                    await player.draw(targets.length + (more ? num : 0));
                },
                subSkill: {
                    effect: { charlotte: true },
                },
            },
            DIyuqing: {
                trigger: {
                    player: "compare",
                    target: "compare",
                    global: "debateShowOpinion",
                },
                filter(event, player, name) {
                    const Players = game.filterPlayer(target => target.hasMark("DIhuolun_mark"));
                    if (!(Players.length * 2 >= game.countPlayer())) return false;
                    if (name == "compare") return true;
                    if (!event.targets.includes(player)) return false;
                    let dissent;
                    const colors = ["red", "black"];
                    for (const color of colors) {
                        if (event[color].some(i => i[0] == player)) {
                            dissent = colors.find(i => i != color);
                            break;
                        }
                    }
                    return event[dissent].some(i => Players.includes(i[0]));
                },
                forced: true,
                content() {
                    if (event.triggername == "compare") {
                        game.log(player, "拼点牌点数", "#y+3");
                        if (player == trigger.player) {
                            trigger.num1 += 3;
                            if (trigger.num1 > 13) trigger.num1 = 13;
                        } else {
                            trigger.num2 += 3;
                            if (trigger.num2 > 13) trigger.num2 = 13;
                        }
                    } else {
                        let myOpinion,
                            dissent,
                            dissident = [];
                        const colors = ["red", "black"];
                        for (const color of colors) {
                            if (trigger[color].some(i => i[0] == player)) {
                                myOpinion = color;
                                dissent = colors.find(i => i != color);
                                break;
                            }
                        }
                        const Players = game.filterPlayer(target => target.hasMark("DIhuolun_mark"));
                        for (let i = 0; i < trigger[dissent].length; i++) {
                            const pair = trigger[dissent][i];
                            if (Players.includes(pair[0])) {
                                dissident.push(pair[0]);
                                trigger[myOpinion].push(pair);
                                trigger[dissent].splice(i--, 1);
                            }
                        }
                        if (dissident.length) {
                            game.log(dissident, "的意见视为与", player, "相同");
                        }
                    }
                },
            },
            //化学武器
            DIdudan: {
                trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                getIndex(event, player) {
                    return game.filterPlayer(target => event.getg(target).length > 0).sortBySeat();
                },
                filter(event, player, name, target) {
                    if (!target?.isIn() || event.getParent("phaseDraw", true) || !target.hasMark("DIduran")) return false;
                    const history = target.getHistory("gain");
                    const [A, B, C, D] = [history.length, target.getHp(), history.reduce((sum, evt) => sum + evt.getg(target).length, 0), player.getHp()];
                    const Q = (C ** 3 * D) / A ** 2,
                        K = 500;
                    const trend = Q - K;
                    if (trend >= 0 && target.hasCard(card => !card.isKnownBy(player) || lib.filter.cardDiscardable(card, target), "he") > 0) return true;
                    if (trend <= 0 && player.canUse(new lib.element.VCard({ name: "sha" }), target, false)) return true;
                    return false;
                },
                check(event, player, name, target) {
                    const history = target.getHistory("gain");
                    const [A, B, C, D] = [history.length, target.getHp(), history.reduce((sum, evt) => sum + evt.getg(target).length, 0), player.getHp()];
                    const Q = (C ** 3 * D) / A ** 2,
                        K = 500;
                    const trend = Q - K;
                    if (trend >= 0 && target.hasCard(card => !card.isKnownBy(player) || lib.filter.cardDiscardable(card, target), "he") > 0 && get.effect(target, { name: "guohe_copy2" }, target, player) > 0) return true;
                    if (trend <= 0 && player.canUse(new lib.element.VCard({ name: "sha" }), target, false) && get.effect(target, new lib.element.VCard({ name: "sha" }), player, player) > 0) return true;
                    if (trend === 0 && get.effect(target, { name: "losehp" }, player, player) > 0) return true;
                    return false;
                },
                logTarget: (event, player, name, target) => target,
                async content(event, trigger, player) {
                    const [target] = event.targets,
                        history = target.getHistory("gain");
                    const [A, B, C, D] = [history.length, target.getHp(), history.reduce((sum, evt) => sum + evt.getg(target).length, 0), player.getHp()];
                    const Q = (C ** 3 * D) / A ** 2,
                        K = 500,
                        trend = Q - K;
                    if (trend >= 0) {
                        if (target.hasCard(card => lib.filter.cardDiscardable(card, target), "he")) {
                            const result = await target.chooseToDiscard(C, "he", true).forResult();
                            if (result?.bool && result.cards?.length) {
                                if (result.cards.filter(i => get.color(i, target) === "black").length >= result.cards.filter(i => get.color(i, target) === "red").length) {
                                    await target.loseHp();
                                }
                            }
                        }
                    }
                    if (trend <= 0) {
                        const card = new lib.element.VCard({ name: "sha", storage: { DIdudan: Math.max(0, A - B) } });
                        if (player.canUse(card, target, false))
                            await player.useCard(card, target, false).set("oncard", () => {
                                const event = get.event(),
                                    num = event.card?.storage?.DIdudan;
                                if (typeof num === "number" && num > 0) event.baseDamage += num;
                            });
                    }
                    if (trend === 0) await target.loseHp();
                },
            },
            DIlieyang: {
                trigger: { player: "useCard" },
                filter(event, player) {
                    if (_status.currentPhase !== player || player.countMark("DIlieyang_count") >= 2 || typeof get.number(event.card) !== "number") return false;
                    const evt = player.getLastUsed(1);
                    if (typeof evt?.card !== "object" || typeof get.number(evt.card) !== "number") return false;
                    return get.number(event.card) > get.number(evt.card);
                },
                async content(event, trigger, player) {
                    const num = get.number(trigger.card) - get.number(player.getLastUsed(1).card) - 1;
                    await player.draw();
                    if (num > 0 && player.hasCard(card => player.canRecast(card), "he")) {
                        const result = await player
                            .chooseCard(
                                "he",
                                [1, num],
                                true,
                                (card, player) => {
                                    return player.canRecast(card);
                                },
                                get.translation(event.name) + "：重铸至多" + num + "张牌"
                            )
                            .set("ai", get.info("zhiheng").check)
                            .forResult();
                        if (result?.bool && result.cards?.length) {
                            if (result.cards.filter(i => get.color(i, player) === "red").length > result.cards.filter(i => get.color(i, player) === "black").length) {
                                if (game.hasPlayer(target => !target.hasMark("DIduran") && !target.hasSkill("DIduran", null, null, false))) {
                                    const result2 = await player
                                        .chooseTarget(
                                            "请选择一名角色，将其毒染",
                                            (card, player, target) => {
                                                return !target.hasMark("DIduran") && !target.hasSkill("DIduran", null, null, false);
                                            },
                                            true
                                        )
                                        .set("ai", target => -get.attitude(get.player(), target))
                                        .forResult();
                                    if (result2?.bool && result2.targets?.length) {
                                        const targets = (event.targets = result2.targets.sortBySeat());
                                        player.line(targets);
                                        targets[0].addMark("DIduran", 1);
                                        await event.trigger("DIlieyang");
                                    }
                                }
                            } else if (game.hasPlayer(target => target.hasMark("DIduran"))) {
                                const result2 = await player
                                    .chooseTarget(
                                        [1, num],
                                        (card, player, target) => {
                                            return target.hasMark("DIduran");
                                        },
                                        "对至多" + num + "名毒染角色各造成1点火属性伤害",
                                        true
                                    )
                                    .set("ai", target => {
                                        const player = get.player();
                                        return get.damageEffect(target, player, player, "fire");
                                    })
                                    .forResult();
                                if (result2?.bool && result2.targets?.length) {
                                    const targets = result2.targets.sortBySeat();
                                    player.line(targets);
                                    for (const i of targets) await i.damage(i.countCards("h") > player.countCards("h") ? 2 : 1, "fire");
                                }
                            }
                        }
                    }
                },
                locked: false,
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card !== "object" || _status.currentPhase !== player || player.countMark("DIlieyang_count") >= 2) return;
                        const evt = player.getLastUsed();
                        if (typeof evt?.card !== "object" || typeof get.number(evt.card) !== "number" || typeof get.number(card) !== "number") return;
                        if (get.number(card) > get.number(evt.card)) return num + 10;
                    },
                },
            },
            DIjindu: {
                trigger: { global: "phaseEnd" },
                filter(event, player) {
                    const target = event.player,
                        num = target.getHistory("sourceDamage").reduce((sum, evt) => sum + evt.num, 0);
                    if (!target.hasMark("DIduran")) return false;
                    if (
                        num === 0 &&
                        target.hasCard(card => {
                            if (card.isKnownBy(player) && !lib.filter.canBeDiscarded(card, player, target)) return false;
                            return get.position(card) === "h" || get.subtypes(card).containsSome("equip1", "equip2");
                        }, "he")
                    )
                        return true;
                    return num >= target.getHp();
                },
                direct: true,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        list = [event.name, target];
                    const num = target.getHistory("sourceDamage").reduce((sum, evt) => sum + evt.num, 0);
                    if (
                        num === 0 &&
                        target.hasCard(card => {
                            if (card.isKnownBy(player) && !lib.filter.canBeDiscarded(card, player, target)) return false;
                            return get.position(card) === "h" || get.subtypes(card).containsSome("equip1", "equip2");
                        }, "he")
                    ) {
                        const result = await player
                            .chooseBool(get.prompt(...list), "弃置其装备区的武器牌和防具牌和一张手牌")
                            .set(
                                "choice",
                                (() => {
                                    return get.effect(target, { name: "guohe_copy2" }, player, player) > 0;
                                })()
                            )
                            .forResult();
                        if (result?.bool) {
                            player.logSkill(...list);
                            const cards = target.getCards("e", card => lib.filter.canBeDiscarded(card, player, target) && get.subtypes(card).containsSome("equip1", "equip2"));
                            if (cards.length) await target.discard(cards).set("discarder", player);
                            await player.discardPlayerCard(target, "h", true);
                        }
                    }
                    if (num >= target.getHp()) {
                        const result = await player.chooseBool(get.prompt(...list), "令其成为你使用伤害牌的目标后，你可令此牌对其无效，然后其失去1点体力").forResult();
                        if (result?.bool) {
                            player.addTempSkill("DIjindu_effect", { player: "phaseAfter" });
                            player.markAuto("DIjindu_effect", [target]);
                        }
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        markimage: "extension/瘟疫公司/image/card/DIjindu_mark.png",
                        intro: { content: "$成为你使用伤害牌的目标后，你可令此牌对其无效，然后其失去1点体力" },
                        trigger: { player: "useCardToPlayered" },
                        filter(event, player) {
                            return get.tag(event.card, "damage") >= 0.5 && player.getStorage("DIjindu_effect").includes(event.target);
                        },
                        check(event, player) {
                            _status._DIjindu_check = true;
                            const bool = get.effect(event.target, event.card, event.player, player) < get.effect(event.target, { name: "losehp" }, player, player);
                            delete _status._DIjindu_check;
                            return bool;
                        },
                        logTarget: "target",
                        async content(event, trigger, player) {
                            trigger.getParent().excluded.add(trigger.target);
                            await trigger.target.loseHp();
                        },
                        ai: {
                            effect: {
                                player(card, player, target) {
                                    if (!_status._DIjindu_check || get.tag(card, "damage") < 0.5) return;
                                    _status._DIjindu_check = true;
                                    const effect = get.effect(target, card, player, player);
                                    delete _status._DIjindu_check;
                                    return [0, Math.max(effect, get.effect(target, { name: "losehp" }, player, player))];
                                },
                            },
                        },
                    },
                },
            },
            DIduran: {
                trigger: {
                    global: ["phaseBefore", "roundStart", "DIduranAfter", "DIlieyang"],
                    player: "enterGame",
                    source: "damageSource",
                },
                filter(event, player, name) {
                    if (event.name === "DIduran" || event.name === "DIlieyang") {
                        if (event.name === "DIduran" && event._trigger.name === "DIduran") return false;
                        const target = event.targets?.[0];
                        return (
                            target?.isIn() &&
                            target.hasCard(card => {
                                if (!card.isKnownBy(player)) return true;
                                return lib.filter.canBeDiscarded(card, player, target);
                            }, "he")
                        );
                    }
                    const func = target => !target.hasMark("DIduran") && !target.hasSkill("DIduran", null, null, false);
                    if (event.name === "damage") return func(event.player);
                    if (name === "phaseBefore" && game.phaseNumber > 0) return false;
                    return game.hasPlayer(func);
                },
                async cost(event, trigger, player) {
                    switch (trigger.name) {
                        case "DIduran":
                        case "DIlieyang":
                            event.result = { bool: true, targets: trigger.targets };
                            break;
                        case "damage":
                            event.result = { bool: true, targets: [trigger.player] };
                            break;
                        default:
                            event.result = await player
                                .chooseTarget(
                                    "请选择一名角色，将其毒染",
                                    (card, player, target) => {
                                        return !target.hasMark("DIduran") && !target.hasSkill("DIduran", null, null, false);
                                    },
                                    true
                                )
                                .set("ai", target => -get.attitude(get.player(), target))
                                .forResult();
                            break;
                    }
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    if (trigger.name === "DIduran") await player.discardPlayerCard(target, 2, "he", true);
                    else target.addMark("DIduran", 1);
                },
                mod: {
                    targetInRange(card, player, target) {
                        if (target.hasMark("DIduran")) return true;
                    },
                },
                markimage: "extension/瘟疫公司/image/card/DIduran_mark.png",
                intro: { content: "毒化物正在腐蚀你的身体..." },
            },
        },
        dynamicTranslate: {
            DIshouliu(player) {
                let str = "「引流收割」<br/><li>一名角色的回合结束时，你可以移去场上任意名角色的“惑”标记，然后选择一项：①摸Y张牌；";
                if (player.hasSkill("DIshouliu_effect")) str += '<span style="opacity:0.5">';
                str += "②摸Y+Z张牌，本轮不能选择本项。";
                if (player.hasSkill("DIshouliu_effect")) str += "</span>";
                return str + "（Y为选择的角色数，Z为你的体力值）</li>";
            },
        },
        translate: {
            DI_fakenews: "虚假消息",
            DIhuolun: "惑论",
            DIhuolun_info: "「妖言惑众」<br/><li>①牌堆底的牌对你可见。②出牌阶段限一次，你可以将牌堆底的牌当作任意基本牌或普通锦囊牌使用，其他角色依次选择是否质疑，有角色选择质疑后，结束质疑流程并展示此牌，若此牌与转化牌的名称相同，或类别相同且此牌为红色，则质疑错误，质疑角色获得1枚“惑”标记；否则质疑正确，此牌作废，且你须弃置两张牌，然后你可以失去1点体力并重置【惑论】。③拥有“惑”标记的角色不能参与【惑论】质疑，且不能响应你对其使用的牌。</li>",
            DIshanzhong: "煽众",
            DIshanzhong_info: "「拱火众怒」<br/><li>一名角色受到有来源造成的伤害后，且该角色为你或本轮你未因其发动过【煽众】，则你可以与场上所有角色发起议事，若议事结果为：红色，伤害来源须交给受伤角色X张牌，然后失去1点体力（X为受伤角色已损失体力值）；黑色，伤害来源须选择一项：①不能使用或打出手牌直到当前回合角色的下家的回合结束；②将武将牌翻至背面。</li>",
            DIshouliu: "收流",
            DIshouliu_info: "「引流收割」<br/><li>一名角色的回合结束时，你可以移去场上任意名角色的“惑”标记，然后选择一项：①摸Y张牌；②摸Y+Z张牌，本轮不能选择本项。（Y为选择的角色数，Z为你的体力值）</li>",
            DIyuqing: "舆倾",
            DIyuqing_info: "「舆势倾压」<br/><li>锁定技，若场上有“惑”标记的角色数大于等于场上没有“惑”标记的角色数，则：①有你参与的议事中，有“惑”标记的角色的意见视为与你相同；②你的拼点牌亮出后，你令此牌点数+3。</li>",
            DIyuqing_append: '<span class="disaster-append">不实与失真的讯息正如疾病般蔓延</span>',
            DI_chemicalweapon: "化学武器",
            DIdudan: "毒氮",
            DIdudan_info: ["「窒息毒气」", "现有二氧化氮融水制硝酸的反应：3NO2(g)+H2O(l)⇌2HNO3(aq)+NO(g)，平衡常数取298k下查文献的值100-1000的中间值500。", "毒染角色于摸牌阶段外获得牌后，设其本回合内获得过牌的次数为A，体力值为B，获得的牌数为C，你的体力值为D，四个数值依次代表该反应各物质的浓度，若此化学反应：", "正向移动，则该角色须弃置C张牌，若弃置的牌中黑色牌数不小于红色牌数，则其失去1点体力。", "逆向移动，则你视为对该角色使用了一张伤害基数+A-B（至少为0）点的【杀】。", "反应平衡，则执行以上两项，然后其失去1点体力。"].join("<br>"),
            DIdudan_append: ["平衡移动原理：", "<li>化学反应平衡移动为反应熵Q和平衡常数K之间进行比较，若反应熵大于/等于/小于平衡常数，则反应正向/不/逆向移动。", "<li>反应熵计算公式：除去水以外，生成物浓度次方程式系数次幂之积除以反应物浓度次方程式系数次幂之积，此技能反应熵Q为C²×D÷A³。"],
            DIlieyang: "烈氧",
            DIlieyang_info: "「强氧还原」<br/><li>每轮限两次，当你于回合内使用牌后，若此牌点数大于你本回合使用的上一张牌的点数，则你可以摸一张牌，然后重铸至多X张牌（X为这两张牌点数差-1）。若这些牌中黑色牌的数量大于红色牌数量，则你可以毒染一名其他角色；否则你对场上至多X名毒染角色各造成1点火焰伤害（手牌数大于你的角色改为2点）。</li>",
            DIjindu: "金毒",
            DIjindu_info: "「重金之毒」<br/><li>毒染角色的回合结束时，若其本回合内：未造成过伤害，则你可以弃置其装备区的武器牌与防具牌与一张手牌；造成过的伤害值大于等于B（B为其体力值），则你可以获得以下效果直到你的回合结束：其成为你使用伤害牌的目标后，你可令此牌对其无效，然后其失去1点体力。</li>",
            DIduran: "毒染",
            DIduran_info: "「毒祸临门」<br/><li>锁定技。①游戏开始时/每轮开始时，你令一名未毒染的角色毒染（你不能被毒染）。②你对未毒染角色造成伤害后，你令该角色毒染。③一名角色毒染后，你弃置其两张牌。④你对毒染角色使用牌无距离限制。</li>",
            DIduran_append: '<span class="disaster-append">因战争而诞生自人类手中的潘多拉魔盒，所过之地寸草不生</span>',
            //DI_info:'「」<br/><li></li>',
            //DI_append:'<span class="disaster-append"></span>',
        },
    };
    for (var i in S_and_P.character) {
        S_and_P.character[i][4] ??= [];
        if (lib.device || lib.node) S_and_P.character[i][4].add("ext:瘟疫公司/image/character/" + i + ".jpg");
        else S_and_P.character[i][4].add("db:extension-瘟疫公司-image-character:" + i + ".jpg");
    }
    lib.config.all.characters.push("S_and_P");
    if (!lib.config.characters.includes("S_and_P")) lib.config.characters.remove("S_and_P");
    lib.translate["S_and_P_character_config"] = "天灾与人祸";
    return S_and_P;
};

export default packs;
