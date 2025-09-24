import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
lib.init.css(lib.assetURL + "extension/瘟疫公司/js/precontent", "PI_title");

const packs = function () {
    var P_and_A = {
        name: "P_and_A",
        connect: true,
        characterSort: {
            P_and_A: {
                basic_pathogene: ["PI_mycoplasmachlamydia", "PI_rickettsia", "PI_bacteria", "PI_virus", "PI_fungus", "PI_parasite", "PI_prion", "PI_nanovirus", "PI_biologicalweapon"],
                special_pathogene: ['PI_nyancatvirus', "PI_ringvirus", "PI_simianflu", "PI_neurax", "PI_necroa", "PI_shadowplague"],
                story_pathogene: ["PI_nipahvirus", "PI_pithovirus", "PI_creutzfeldtjacobdisease", "PI_swineflu", "PI_neurie", "PI_pestilence", "PI_smallpox", "PI_unknownpathogen"],
                reality_pathogene: ['PI_rhinovirus','PI_leucochloridium', 'PI_ascaris', 'PI_athenianplague', "PI_bubonicplague", "PI_yellowfever", "PI_vibriovulnificus", "PI_hantavirus", "PI_lassavirus", "PI_leprosy", "PI_lactobacillusacetobacter", "PI_papillomavirus", "PI_streptococcus", "PI_porphyria", "PI_scarletfever", "PI_anthrax", "PI_candida", "PI_aspergillus", "PI_ancylostomatrichuris", "PI_amoeba", "PI_poliomyelitis", "PI_echinococcus", "PI_avianinfluenza", "PI_spanishinfluenza", "PI_angiostrongylus", "PI_typhoid", "PI_dengue", "PI_westnilevirus", "PI_plasmodium", "PI_gonorrhea", "PI_measles", "PI_tuberculosis", "PI_diphtheria", "PI_pertussis", "PI_varicella", "PI_gordius", "PI_filovirus", "PI_rabies", "PI_distome", "PI_toxoplasma", "PI_fasciolopsis", "PI_helicobacterpylori", "PI_staphylococcusaureus", "PI_cholera", "PI_sparganum", "PI_tetanus", "PI_clonorchis", "PI_schistosoma", "PI_aids", "PI_syphilis", "PI_paragonimus"],
                master_pathogene: ["PI_fentianhuowu"],
                antibodies: [],
            },
        },
        character: {
            PI_bacteria: ["female", "PI_plague", 3, ["PIliran", "PIjunbi", "PInaiyao"], ["clan:瘟疫公司"]],
            PI_virus: ["female", "PI_plague", 3, ["PIliran", "PItubian", "PIfuzhi"], ["clan:瘟疫公司"]],
            PI_fungus: ["female", "PI_plague", 3, ["PIliran", "PIbaoya", "PIpenfa"], ["clan:瘟疫公司"]],
            PI_parasite: ["male", "PI_plague", 4, ["PIliran", "PIjifu", "PIzidan"], ["clan:瘟疫公司"]],
            PI_prion: ["double", "PI_plague", 4, ["PIliran", "PIsiluan", "PIshenwei"], ["clan:瘟疫公司"]],
            PI_nanovirus: ["male", "PI_plague", 3, ["PIliran", "PIlanjie", "PIguozai"], ["clan:瘟疫公司"]],
            PI_biologicalweapon: ["female", "PI_plague", 4, ["PIliran", "PIyizhi", "PIyanmie"], ["clan:瘟疫公司"]],
            PI_neurax: ["female", "PI_plague", 4, ["PIliran", "PIjingkong", "PIchongji", "PIzisha"], ["clan:瘟疫公司"]],
            PI_necroa: ["male", "PI_plague", 4, ["PIliran", "PIsusheng", "PIliushi", "PIshichao"], ["clan:瘟疫公司"]],
            PI_pestilence: ["male", "PI_plague", 4, ["PIliran", "PIhengxuan", "PIheisi"], ["clan:瘟疫公司"]],
            PI_smallpox: ["female", "PI_plague", 4, ["PIliran", "PIpinxue", "PIhuaiju"], ["clan:瘟疫公司"]],
            PI_staphylococcusaureus: ["female", "PI_plague", 3, ["PIliran", "PIlieran", "PIhuanong"], ["clan:瘟疫公司"]],
            PI_cholera: ["male", "PI_plague", 4, ["PIliran", "PItuoshui", "PIlansi"], ["clan:瘟疫公司"]],
            PI_sparganum: ["male", "PI_plague", 3, ["PIliran", "PIshejiu", "PInaolie"], ["clan:瘟疫公司"]],
            PI_tetanus: ["male", "PI_plague", 4, ["PIliran", "PIpofeng", "PIzhijing"], ["clan:瘟疫公司"]],
            PI_clonorchis: ["male", "PI_plague", 3, ["PIliran", "PIganshi", "PIganying"], ["clan:瘟疫公司"]],
            PI_schistosoma: ["male", "PI_plague", 4, ["PIliran", "PIyishui", "PIqinzang"], ["clan:瘟疫公司"]],
            PI_shadowplague: ["female", "PI_plague", 4, ["PIliran", "PIkuangnu", "PIxuechao", "PIhongfu"], ["clan:瘟疫公司"]],
            PI_aids: ["female", "PI_plague", 4, ["PIliran", "PIxuechuan", "PIbengmian"], ["clan:瘟疫公司"]],
            PI_syphilis: ["female", "PI_plague", 4, ["PIliran", "PIxingchuan", "PImeizhen"], ["clan:瘟疫公司"]],
            PI_paragonimus: ["male", "PI_plague", 3, ["PIliran", "PIfeishi", "PIfeixue"], ["clan:瘟疫公司"]],
            PI_helicobacterpylori: ["female", "PI_plague", 4, ["PIliran", "PIfanwei", "PIweiyan"], ["clan:瘟疫公司"]],
            PI_fasciolopsis: ["male", "PI_plague", 3, ["PIliran", "PIchangxi", "PIchanggeng"], ["clan:瘟疫公司"]],
            PI_toxoplasma: ["male", "PI_plague", 3, ["PIliran", "PIzhimang", "PIyiyan"], ["clan:瘟疫公司"]],
            PI_distome: ["male", "PI_plague", 3, ["PIliran", "PIqingan", "PIqubao"], ["clan:瘟疫公司"]],
            PI_unknownpathogen: ["female", "PI_plague", 3, ["PIliran", "PIshenwen", "PIxinyi"], ["clan:瘟疫公司"]],
            PI_rabies: ["female", "PI_plague", 4, ["PIliran", "PIzaokuang", "PIshenkong"], ["clan:瘟疫公司"]],
            PI_filovirus: ["female", "PI_plague", 4, ["PIliran", "PIxueyi", "PIxuere", "PIfuzang"], ["clan:瘟疫公司"]],
            PI_gordius: ["male", "PI_plague", 3, ["PIliran", "PIniaoran", "PIponi"], ["clan:瘟疫公司"]],
            PI_varicella: ["female", "PI_plague", 4, ["PIliran", "PIyipao", "PIshuizhen"], ["clan:瘟疫公司"]],
            PI_diphtheria: ["female", "PI_plague", 3, ["PIliran", "PIkongchuan", "PIhoubi"], ["clan:瘟疫公司"]],
            PI_pertussis: ["female", "PI_plague", 4, ["PIliran", "PIfeimo", "PIbaike"], ["clan:瘟疫公司"]],
            PI_measles: ["female", "PI_plague", 3, ["PIliran", "PIqirong", "PIduchuang"], ["clan:瘟疫公司"]],
            PI_tuberculosis: ["female", "PI_plague", 4, ["PIliran", "PIfeilao", "PIbaisi"], ["clan:瘟疫公司"]],
            PI_typhoid: ["male", "PI_plague", 3, ["PIliran", "PIgaoshao", "PIfuxie"], ["clan:瘟疫公司"]],
            PI_dengue: ["female", "PI_plague", 3, ["PIliran", "PIwenre", "PIqingu"], ["clan:瘟疫公司"]],
            PI_westnilevirus: ["male", "PI_plague", 4, ["PIliran", "PIwenmei", "PInaore"], ["clan:瘟疫公司"]],
            PI_plasmodium: ["male", "PI_plague", 3, ["PIliran", "PIziyang", "PInveji"], ["clan:瘟疫公司"]],
            PI_gonorrhea: ["male", "PI_plague", 3, ["PIliran", "PIxingdu", "PIkuiyin"], ["clan:瘟疫公司"]],
            PI_angiostrongylus: ["male", "PI_plague", 3, ["PIliran", "PIluya", "PInaozu"], ["clan:瘟疫公司"]],
            PI_avianinfluenza: ["female", "PI_plague", 3, ["PIliran", "PIniaomei", "PIfeishuai"], ["clan:瘟疫公司"]],
            PI_spanishinfluenza: ["male", "PI_plague", 4, ["PIliran", "PIsiji", "PIeli"], ["clan:瘟疫公司"]],
            PI_simianflu: ["female", "PI_plague", 4, ["PIliran", "PIjiqun", "PIzhiqi"], ["clan:瘟疫公司"]],
            PI_echinococcus: ["male", "PI_plague", 3, ["PIliran", "PIjiqiu", "PIchongai"], ["clan:瘟疫公司"]],
            PI_amoeba: ["male", "PI_plague", 3, ["PIliran", "PIshinao", "PIbianxing"], ["clan:瘟疫公司"]],
            PI_poliomyelitis: ["male", "PI_plague", 4, ["PIliran", "PItanhuan", "PIliwei"], ["clan:瘟疫公司"]],
            PI_ancylostomatrichuris: ["male", "PI_plague", 3, ["PIliran", "PIyanshi", "PIliji"], ["clan:瘟疫公司"]],
            PI_aspergillus: ["male", "PI_plague", 4, ["PIliran", "PIfuhua", "PImeibian"], ["clan:瘟疫公司"]],
            PI_swineflu: ["female", "PI_plague", 3, ["PIliran", "PIshicun", "PIqishuai"], ["clan:瘟疫公司"]],
            PI_neurie: ["female", "PI_plague", 4, ["PIliran", "PIchongli", "PIshengan", "PIxingshi"], ["clan:瘟疫公司"]],
            PI_fentianhuowu: ["male", "PI_plague", 5, ["PIliran", "PIwenjiang", "PIyixing", "PIjishi"], ["zhu", "clan:瘟疫公司"]],
            PI_nipahvirus: ["female", "PI_plague", 3, ["PIliran", "PIkangre", "PInaoyan"], ["clan:瘟疫公司"]],
            PI_candida: ["female", "PI_plague", 3, ["PIliran", "PIzhijun", "PIkuimo"], ["clan:瘟疫公司"]],
            PI_creutzfeldtjacobdisease: ["female", "PI_plague", 4, ["PIliran", "PIkunhuo", "PImianluan"], ["clan:瘟疫公司"]],
            PI_pithovirus: ["male", "PI_plague", 3, ["PIliran", "PIkanghan", "PIshizhi"], ["clan:瘟疫公司"]],
            PI_scarletfever: ["male", "PI_plague", 4, ["PIliran", "PIrongxue", "PIdandu"], ["clan:瘟疫公司"]],
            PI_anthrax: ["male", "PI_plague", 4, ["PIliran", "PIjiaju", "PIbaixue"], ["clan:瘟疫公司"]],
            PI_porphyria: ["female", "PI_plague", 4, ["PIliran", "PIxueyou", "PIxueai"], ["clan:瘟疫公司"]],
            PI_streptococcus: ["male", "PI_plague", 3, ["PIliran", "PIfeiyan", "PIniangnong"], ["clan:瘟疫公司"]],
            PI_papillomavirus: ["male", "PI_plague", 4, ["PIliran", "PIyudu", "PIxingliu"], ["clan:瘟疫公司"]],
            PI_lactobacillusacetobacter: ["female", "PI_plague", 3, ["PIliran", "PIsuanshi", "PIquchi"], ["clan:瘟疫公司"]],
            PI_leprosy: ["female", "PI_plague", 4, ["PIliran", "PIjiangsuo", "PIguqi"], ["clan:瘟疫公司"]],
            PI_mycoplasmachlamydia: ["double", "PI_plague", 3, ["PIliran", "PIjieniao", "PIshayan"], ["clan:瘟疫公司"]],
            PI_rickettsia: ["male", "PI_plague", 4, ["PIliran", "PIyangbing", "PIkoure"], ["clan:瘟疫公司"]],
            PI_ringvirus: ["female", "PI_plague", 4, ["PIliran", "PIlingran", "PIyuanzu", "PIxincu"], ["clan:瘟疫公司"]],
            PI_hantavirus: ["male", "PI_plague", 4, ["PIliran", "PIfeizhong", "PIshenshuai", "PIdiaozang"], ["clan:瘟疫公司"]],
            PI_lassavirus: ["female", "PI_plague", 4, ["PIliran", "PIganshuai", "PIxuekui", "PIbengzang"], ["clan:瘟疫公司"]],
            PI_vibriovulnificus: ["male", "PI_plague", 4, ["PIliran", "PIchuangran", "PIshangyan"], ["clan:瘟疫公司"]],
            PI_yellowfever: ["male", "PI_plague", 3, ["PIliran", "PIhuangdan", "PIjieyan"], ["clan:瘟疫公司"]],
            PI_bubonicplague: ["female", "PI_plague", 4, ["PIliran", "PIheili", "PIhuayi", "PImoyi"], ["clan:瘟疫公司"]],
            PI_athenianplague: ['female', 'PI_plague', 4, ['PIliran', 'PIliaoyi', 'PIreli', 'PIhunji'], ['clan:瘟疫公司']],
            PI_nyancatvirus: ['female', 'PI_plague', 3, ['PIliran', 'PIcairan', 'PImengmiao'], ['clan:瘟疫公司']],
            PI_rhinovirus: ['male', 'PI_plague', 3, ['PIliran', 'PIganmao', 'PIkesou'], ['clan:瘟疫公司']],
            PI_ascaris: ['male', 'PI_plague', 3, ['PIliran', 'PIchangji', 'PIzuanchang'], ['clan:瘟疫公司']],
            PI_leucochloridium: ['male', 'PI_plague', 3, ['PIliran', 'PIshihong', 'PIqietong'], ['clan:瘟疫公司']],
        },
        characterIntro: {
            PI_bacteria: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_bacteria.png><<br>——最常见的瘟疫病原体，潜力不可估量<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Bacteria" target="_blank">细菌</a>（英语：Bacteria）是指生物的主要类群之一，属于细菌域。也是所有生物中数量最多的一类，据估计，其总数约有5×1030个。细菌的形状相当多样，主要有球状、杆状，以及螺旋状。细菌也对人类活动有很大的影响。一方面，细菌是许多疾病的病原体，可以通过各种方式，如接触、消化道、呼吸道、昆虫叮咬等在正常人体间传播疾病，具有较强的传染性，对社会危害极大。另一方面，人类也时常利用细菌，例如乳酪及酸奶和酒酿的制作、部分抗生素的制造、废水的处理等，都与细菌有关。在生物科技领域中，细菌也有着广泛的运用。</div>',
            PI_virus: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_virus.png><br>——一个能够迅速突变和极其难控制的病原体<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Virus" target="_blank">病毒</a>（英语：Virus）是一种个体微小，结构简单，只含一种核酸（DNA或RNA），必须在活细胞内寄生并以复制方式增殖的非细胞型生物。 病毒是一种非细胞生命形态，它由一个核酸长链和蛋白质外壳构成，病毒没有自己的代谢机构，没有酶系统。因此病毒离开了宿主细胞，就成了没有任何生命活动、也不能独立自我繁殖的化学物质。它的复制、转录、和转译的能力都是在宿主细胞中进行，当它进入宿主细胞后，它就可以利用细胞中的物质和能量完成生命活动，按照它自己的核酸所包含的遗传信息产生和它一样的新一代病毒。</div>',
            PI_fungus: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_fungus.png><br>——真菌孢子很难在没有特殊能力下传播到远距离<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Fungus" target="_blank">真菌</a>（英语：Fungi）是一种具真核的、产孢的、无叶绿体的真核生物。包含霉菌、酵母、蕈菌以及其他人类所熟知的菌菇类。已经发现了十二万多种真菌。真菌独立于动物、植物和其他真核生物，自成一界。真菌的细胞有含甲壳素，能通过无性繁殖和有性繁殖的方式产生孢子。</div>',
            PI_parasite: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_parasite.png><br>——隐于市井的复杂寄生生物<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Parasite" target="_blank">寄生虫</a>（英语：Parasite）指具有致病性的低等真核生物，可作为病原体，也可作为媒介传播疾病。寄生虫特征为在宿主或寄主（host）体内或附着于体外以获取维持其生存、发育或者繁殖所需的营养或者庇护的一切生物。许多小动物以寄生的方式生存，依附在比它们更大的动物身上。 寄生虫可以改变寄主的行为，以达到自身更好地繁殖生存的目的。人类若受到一些寄生在脑部的寄生虫，如终生寄生在脑部的弓形虫（Toxoplasmosis），反应能力会降低。</div>',
            PI_prion: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_prion.png><br>——画师：萨菲瑞伊<br>——一种隐藏在大脑内、缓慢、微妙、且极为复杂的病原体<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Prion" target="_blank">朊毒体</a>（英语：Prion），又称朊病毒，朊粒、蛋白质侵染因子、毒朊或感染性蛋白质，是一类能侵染动物并在宿主细胞内无免疫性疏水蛋白质。朊是蛋白质的旧称，朊病毒意思就是蛋白质病毒，朊病毒（Prion）严格来说不是病毒，是一类不含核酸而仅由蛋白质构成的具感染性的因子。朊病毒是动物和人类传染性海绵状脑病的病原。早在15世纪发现的绵羊的痒病就是由朊病毒所致，1986年在英国发生的牛海绵状脑病（bovine spongelike encephalitis，BSE），俗称“疯牛病”，其病原也是朊病毒，美国学者布鲁辛纳（S.B. Prusiner）获得了1997年的诺贝尔生理和医学奖，就是为了表彰其在研究朊病毒的性质及其致病机理方面所取得的突破性进展。</div>',
            PI_nanovirus: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_nanovirus.png><br>——这是一种难以控制、内部设有自毁开关、纳米级的人造病毒<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Nano-Virus" target="_blank">纳米病毒</a>（英语：Nano Virus）目前纳米技术的发展趋势是制造多用途的病毒。从材料科学的观点来看，病毒可以被看作有机纳米颗粒：它们的表面携带特定的工具用于穿过宿主细胞的壁垒。病毒的大小和形状，以及它们表面的功能基团的数量和性质，是经过精确地定义的。正因为如此，病毒在材料科学中被普遍用作支架来共价连接表面修饰。病毒的一个特点是它们能够通过直接进化来被改动。从生命科学发展而来的这些强大技术正在成为纳米材料制造方法的基础，远远超越了它们在生物学和医学中的应用而被应用于更加广泛的领域中。</div>',
            PI_biologicalweapon: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_biologicalweapon.png><br>——极为致命的病原体，所到之处，尸横遍野<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Bio-Weapon" target="_blank">生物武器</a>（英语：Biological Weapon）生物武器是以生物战剂杀伤有生力量和破坏植物生长的各种武器、器材的总称。生物战剂包括立克次体、病毒、毒素、衣原体、真菌等。生物战剂是军事行动中用以杀死人、牲畜和破坏农作物的致命微生物、毒素和其他生物活性物质的统称。旧称细菌战剂。生物战剂是构成生物武器杀伤威力的决定因素。致病微生物一旦进入机体（人、牲畜等）便能大量繁殖，导致破坏机体功能、发病甚至死亡。它还能大面积毁坏植物和农作物等。生物战剂的种类很多，据国外文献报道，可以作为生物战剂的致命微生物约有160种之多，但就具有引起疾病能力和传染能力的来说就为数不算很多。</div>',
            PI_neurax: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_neurax.png><br>——钻进大脑的精神控制生物<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Neurax_Worm">神经蠕虫</a>（Neurax Worm）是英国独立游戏工作室Ndemic Creations所开发的策略游戏《瘟疫公司》（Plague Inc.）及其衍生作品《瘟疫公司：进化》（Plague Inc: Evolved）的特殊病原体。其中“Neurax”是取自英语单词“Neural”，意为“与神经中枢相关的”。该病原体最早是在2012年7月16日于游戏官网上被提及，并于当年8月30日移动端发布1.3版更新时追加，而电脑端则是在2014年3月1日推出0.5.5版时增加的。按照游戏始设定的内容，该蠕虫是一种入侵人类大脑实施精神控制生物，在数千年的历史中都曾未被人发现或提及过。只是人类进入了蠕虫的栖息地，才为其提供了极佳的寄生途径。该病原体在移动端需要玩家以困难难度完成前面7种基础病原体后方能解锁，在电脑端只需以普通以上难度完成前面真菌游戏后即可解锁。</div>',
            PI_necroa: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_necroa.png><br>——尚未被归类，初期报告显示，它们具有超速再生能力<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Necroa_Virus" target="_blank">丧尸病毒</a>（英语：Necroa Virus）是英国独立游戏工作室Ndemic Creations所开发的策略游戏《瘟疫公司》（Plague Inc.）及其衍生作品《瘟疫公司：进化》（Plague Inc: Evolved）的特殊病原体。其中“Necroa”是取自英语前缀“Necro-”，意为“坏死的”。该病原体最早是在2013年2月1日于游戏官网上被提及，并于当年2月26日移动端发布1.5版更新时追加，而电脑端则是在2014年3月30日推出0.6.5版时增加的。按照游戏始设定的内容，该病原体尚未被人为归类，且初期医学报告中表明它具有超级再生能力和强烈代谢需求，但是它的大部分基因结构仍是未解之谜。该病原体在移动端需玩家以困难难度完成前面所有病原体后方能解锁，在电脑端只需以普通以上难度完成前面朊病毒游戏后即可解锁。',
            PI_pestilence: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_pestilence.png><br>——隐藏数世纪并夺走两亿条无辜生命的可怕病菌<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Black_Death" target="_blank">鼠疫</a>，由鼠疫耶尔森菌（英语：Yersinia Pestis）引起的自然疫源性疾病。通过鼠蚤媒介,经人的皮肤传入引起腺鼠疫,经呼吸道传入发生肺鼠疫。临床表现为发热、淋巴结肿大、肺炎、出血倾向。可发展为败血症,传染性强,死亡率高, 是危害人类最严重的烈性传染病之一。鼠疫属国际检疫传染病和我国法定的甲类管理传染病。 历史上，鼠疫是导致高死亡率的大流行病，十四世纪时被称为“黑死病”，曾在欧洲造成约5000万人死亡。根据卫健委《2022年我国卫生健康事业发展统计公报》统计，2022年全国鼠疫发病例数为2例，死亡人数为1人。',
            PI_smallpox: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_smallpox.png><br>——人类史上最致命的疾病之一<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Smallpox" target="_blank">天花</a>（英语：Small Pox）是由天花病毒感染人引起的一种烈性传染病，痊愈后可获终生免疫，目前已被消灭。天花是最古老也是死亡率最高的传染病之一，传染性强，病情重，没有患过天花或没有接种过天花疫苗的人，均能被感染，主要表现为严重的病毒血症，染病后死亡率高。最基本有效而又最简便的预防方法是接种牛痘。天花临床表现有重型和轻型，重型天花病死率约为25.5%，45%的病例出现融合性皮疹，79%有出血现象；轻型天花病死率为0.1%～1.0%。天花病毒是痘病毒的一种，人被感染后无特效药可治，患者在痊愈后脸上会留有麻子，“天花”由此得名。天花病毒外观呈砖形，约200nm×300nm，抵抗力较强，能对抗干燥和低温，在痂皮、尘土和被服上，可生存数月至一年半之久。',
            PI_staphylococcusaureus: '——常见引起食物中毒和伤口感染的致病菌<br>——画师：清水茜<br><a class="pathogen" href="http://www.a-hospital.com/w/%E9%87%91%E9%BB%84%E8%89%B2%E8%91%A1%E8%90%84%E7%90%83%E8%8F%8C" target="_blank">金黄色葡萄球菌</a>（英语：Staphylococcus Aureus，S. Aureus）也称“金葡菌”，隶属于葡萄球菌属，是革兰氏阳性菌代表，为一种常见的食源性致病微生物。该菌最适宜生长温度为37℃，pH为7.4，耐高盐，可在盐浓度接近10%的环境中生长。金黄色葡萄球菌常寄生于人和动物的皮肤、鼻腔、咽喉、肠胃、痈、化脓疮口中，空气、污水等环境中也无处不在。哈佛医学院的科学家首次证明，金黄色葡萄球菌（一种常见的皮肤细菌）可以直接作用于神经细胞，引发瘙痒，相关成果刊发在 11 月 22 日的《Cell》期刊上。',
            PI_cholera: '——一项全球性威胁的一种急性腹泻感染<br><a class="pathogen" href="http://www.a-hospital.com/w/%E9%9C%8D%E4%B9%B1%E5%BC%A7%E8%8F%8C" target="_blank">霍乱</a>（英语：Cholera）是由霍乱弧菌感染引起的烈性肠道传染病，是我国法定甲类传染病。霍乱弧菌通过污染的水或食物感染人体，产生肠毒素而引起发病。典型的临床霍乱患者表现为：急性起病、剧烈腹泻、常伴呕吐，以及由此引起的脱水、电解质紊乱和肌肉痉挛，严重者可发生循环衰竭甚至死亡。治疗的关键是补充液体，纠正脱水和电解质紊乱。霍乱是由霍乱弧菌所引起的。O1和O139这两种霍乱弧菌的血清型能够引起疾病暴发。大多数的疾病暴发由O1型霍乱弧菌引起，而1992年首次在孟加拉国确定的O139型仅限于东南亚一带。非O1非O139霍乱弧菌可引起轻度腹泻，但不会造成疾病流行。近年来，在亚洲和非洲的一些地区发现了新的变异菌株。据观察认为，这些菌株可引起更为严重的霍乱疾病，病死率更高。霍乱弧菌存在于水中，最常见的感染原因是食用被患者粪便污染过的水。霍乱弧菌能产生霍乱毒素，造成分泌性腹泻，即使不再进食也会不断腹泻，洗米水状的粪便是霍乱的特征。',
            PI_sparganum: '——裂头蚴病的病症危害巨大且不易解药<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E6%9B%BC%E6%B0%8F%E8%BF%AD%E5%AE%AB%E7%BB%A6%E8%99%AB" target="_blank">裂头蚴</a>（英语：Sparganum）是曼氏迭宫绦虫（英语：Spirometra Mansoni）假叶目裂头科迭宫属的扁形动物的幼虫，头呈节梭形，在背腹各有一个吸槽。链体节片一般呈宽大于长的扁长方形，但虫体后端的节片长宽接近等长。成节和孕节的内部结构相似，有雄性和雌性生殖器官各一套，节片中央有雌雄两个生殖孔，一后一前位于节片前部中央腹面；子宫位于节片中部，螺旋状盘曲，基部宽而顶端窄小，呈发髻状，亦开口于节片中央，位于雌性生殖孔之后。裂头蚴分布于中国上海、广东、台湾、四川和福建等地，在日本、俄罗斯等少数国家亦有分布。裂头蚴生活史为间接型，需要中间宿主的参与，其生活史包括虫卵、钩球蚴、原尾蚴、裂头蚴和成虫等阶段。终宿主主要是猫科和犬科动物等食肉动物，人可成为它的第二中间宿主、转续宿主，甚至终宿主。成虫寄生于终宿主小肠，虫卵自子宫口产出，随宿主粪便排出体外，但需入水后才能发育。成虫在猫体内的寿命约3年半。裂头蚴幼虫阶段可侵袭人体多个组织和器官，引起裂头蚴病。危害非常严重，是一种重要的人兽共患寄生虫病。裂头蚴病广泛分布于全世界，中国首次记载的裂头蚴病为1882年研究者在厦门一男尸体内检测出裂头蚴虫体。裂头蚴感染通常与饮食习惯有关，如食用新鲜的蛙肉、蛇肉等，甚至吞食活蝌蚪。此外，游泳或饮用含原尾蚴的生水也可能导致感染。防治方法为注重养成良好的卫生习惯，改变不良的生活行为。',
            PI_tetanus: '——常和创伤相关联的一种特异性感染致病菌<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%A0%B4%E4%BC%A4%E9%A3%8E%E6%9D%86%E8%8F%8C" target="_blank">破伤风</a>（英语：Tetanus）是破伤风梭菌经由皮肤或黏膜伤口侵入人体，在缺氧环境下生长繁殖，产生毒素而引起肌痉挛的一种特异性感染。破伤风毒素主要侵袭神经系统中的运动神经元，因此本病以牙关紧闭、阵发性痉挛、强直性痉挛的为临床特征，主要波及的肌群包括咬肌、背棘肌、腹肌、四肢肌等。破伤风潜伏期通常为7～8天，可短至24小时或长达数月、数年。潜伏期越短者，预后越差。约90%的患者在受伤后2周内发病，偶见患者在摘除体内存留多年的异物后出现破伤风症状。人群普遍易感，且各种类型和大小的创伤都可能被含有破伤风梭菌的土壤或污泥污染，但只有少数患者会发病。在户外活动多的温暖季节，受伤患病者更为常见。患病后无持久免疫力，故可再次感染。',
            PI_clonorchis: '——华支睾吸虫病的危害性主要是患者的肝脏受损<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E5%8D%8E%E6%94%AF%E7%9D%BE%E5%90%B8%E8%99%AB" target="_blank">华支睾吸虫</a>（英语：Clonorchis Sinensis），是复殖目后睾科支睾属其中的一种吸虫。又名肝吸虫，华肝蛭。成虫体薄，前端尖细，后端较钝，表皮无棘；虫体大小相差颇大，口吸盘直径略大于腹吸盘；消化道包括口、咽及很短的食道，肠支伸至体之后端；贮精囊从虫体的中央开始，沿正线迂曲前行，开口于腹吸盘前的生殖腔，缺阴茎及阴袋；卵巢分叶，位于睾丸之前，受精囊在睾丸与卵巢间，椭圆形；子宫由卵巢附近的卵模开始，盘绕而上，达腹吸盘前的生殖腔。华枝睾吸虫分布于中国全境，日本、朝鲜、菲律宾及越南也有分布。成虫寄生于人或哺乳类动物的肝胆管、胆囊、胆道及胰管内。虫卵随胆汁入肠与粪便混合排出体外。虫卵必须进入水中，被第一中间宿主淡水螺吞食后，在其消化道内孵出毛蚴，穿过肠壁向肝脏移行，继续发育为胞蚴，经胚细胞分裂，一个胞蚴可增殖为许多个雷蚴，每个雷蚴可产生5～50个尾蚴。成虫寿命长达20～30年。华支睾吸虫成虫可寄生于人体和多种动物肝胆管内，导致华支睾吸虫病。华支睾吸虫病的主要表现为肝脏损害，可引起胆管内膜及胆管周围的超敏反应和炎性反应。慢性感染者可出现肝胆管周围纤维结缔组织增生，肝实质萎缩，甚至肝硬化。2009年WHO明确提出华支睾吸虫，可致人类胆管癌。华支睾吸虫病为食源性感染，预防的关键是把好“口”关，改变生食鱼虾习惯。生熟食物的菜刀、砧板要分开。不用生鱼喂饲猫、犬。',
            PI_schistosoma: '——在亚非地区水域流行的瘟神，其危害影响深远<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E8%A1%80%E5%90%B8%E8%99%AB" target="_blank">裂体吸虫</a>（英语：Schistosoma）是吸虫纲复殖目裂体科血吸虫属寄生虫，又称血吸虫。血吸虫是寄生在血管中的一类吸虫，寄生于人体的血吸虫主要有曼氏血吸虫（英语：Schistosoma Mansoni）、埃及血吸虫（英语：Schistosoma Haematobium）及日本血吸虫（英语：Schistosoma Japonica）3种，在中国流行的是日本血吸虫，成虫雌雄异体，雌雄合抱是童虫正常发育的必要条件，单性雌虫或雄虫感染均不能正常发育。血吸虫病的诊断是检测粪便或尿液标本中的寄生虫卵，血吸虫病在热带和亚热带地区流行，尤其是无法获得安全饮用水和适当卫生设施的贫穷社区。据估计至少有90%需要得到血吸虫病治疗的患者生活在非洲。血吸虫病是人畜共患的寄生虫病，由皮肤接触含尾蚴的疫水而感染，血吸虫成虫寄生在肠系膜静脉，虫卵沉积于肠壁及肝脏，急性期以发热、肝脾大、腹痛、腹泻、血中嗜酸性粒细胞显著增多为特征，慢性期症状多不明显，晚期发展为肝纤维化(肝硬化)，以门脉高压症、巨脾和腹腔积液为主要临床表现。血吸虫潜伏期15—75 天，平均40天。血吸虫病的临床表现复杂多样。根据病期早晚、感染轻重、虫卵沉积部位以及人体免疫反应不同，临床上可分为急性、慢性与晚期血吸虫病和异位损害。《中华人民共和国传染病防治法》规定血吸虫病按乙类传染病进行管理。血吸虫病致残情况多于致死。控制血吸虫病的基础是针对危险人群开展大规模治疗。',
            PI_shadowplague: '——感知型诱变病原体，激发宿主嗜血欲望<br>——画师：dairi<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Shadow_Plague" target="_blank">暗影瘟疫</a>（英语：Shadow Plague）是英国独立游戏工作室Ndemic Creations所开发的策略游戏《瘟疫公司》（Plague Inc.）及其衍生作品《瘟疫公司：进化》（Plague Inc: Evolved）的特殊病原体。一种感知型诱变性病原体，能够激发宿主的嗜血欲望，在1.13版加入。 该病原体允许玩家控制吸血鬼，透过喂养的方式使其变得更加强大，同时还要支配感染者击败人类的圣堂组织以实现毁灭世界的野心。该病原体不论是在移动端还是在电脑端都要求玩家以困难难度完成前面所有病原体后才能解锁。',
            PI_aids: '——削弱免疫系统，使患者更容易患上疾病并减少其抵抗力<br><a class="pathogen" href="http://www.a-hospital.com/w/%E8%89%BE%E6%BB%8B%E7%97%85%E6%AF%92" target="_blank">艾滋病</a>（英语：Acquired Immune Deficiency Syndrome，缩写：AIDS），获得性免疫缺陷综合征);是一种危害性极大的传染病，由感染艾滋病病毒（英语：Human Immunodeficiency Virus，缩写：HIV），引起，HIV是一种能攻击人体免疫系统的病毒。它把人体免疫系统中最重要的CD4T淋巴细胞作为主要攻击目标，大量破坏该细胞，使人体丧失免疫功能。因此，人体易于感染各种疾病，并发生恶性肿瘤，病死率较高。HIV在人体内的潜伏期平均为8～9年，在艾滋病病毒潜伏期内，感染者可以没有任何症状地生活和工作多年。',
            PI_syphilis: '——令人生畏的一种性传播疾病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E6%A2%85%E6%AF%92%E8%9E%BA%E6%97%8B%E4%BD%93" target="_blank">梅毒</a>（英语：Syphilis）俗称杨梅疮、花柳病, 是由梅毒螺旋体（苍白螺旋体，Treponema Pallidum, 简称TP）引起的慢性传染病。主要通过性交传染, 极少数患者通过接吻、哺乳、接有传染性损害病人的日常用品而传染, 可由母亲传染给胎儿。患病后病程漫长，早期侵犯生殖器和皮肤， 晚期侵犯全身各器官，并生多种多样的症状和体征，病变几乎能累及全身各个脏器。梅毒与肺结核、麻风并列为世界三大慢性传染病。梅毒是艾滋病出现以前最令人生畏的一种性传播疾病，当然它也是一种很难对付的疾病。《中华人民共和国传染病防治法》中，梅毒被列为乙类传染病进行防治管理。',
            PI_paragonimus: '——在人体组织中游走或定居时能对脏器造成的机械性损害<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E5%8D%AB%E6%B0%8F%E5%B9%B6%E6%AE%96%E5%90%B8%E8%99%AB" target="_blank">卫氏并殖吸虫</a>（英语：Paragonimus Westermani），隐孔吸虫科。体呈卵圆形，背面隆起，体表多小棘。长7-15毫米，宽3-8毫米。红褐色，半透明。口吸盘和腹吸盘大小相等。寄生在人的肺脏内，也可异位寄生在脑等部位。猫、犬、猪等也能感染。卵一般呈卵圆形，黄褐色，壳厚，有小盖。第一中间宿主是川卷螺，第二中间宿主是溪蟹、蝲蛄（寄生在鳃、肌肉等处）等。人因食生醉和未煮熟的蟹或蝲蛄而受感染，引起肺吸虫病。',
            PI_helicobacterpylori: '——慢性活动性胃炎、消化性溃疡、胃黏膜和胃癌的主要致病因素<br><a class="pathogen" href="http://www.a-hospital.com/w/%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C" target="_blank">幽门螺杆菌</a>（英语：Helicobacter Pylori）简称Hp。首先由巴里.马歇尔(Barry J. Marshall)和罗宾.沃伦(J. Robin Warren)二人发现，此二人因此获得2005年的诺贝尔生理学或医学奖。幽门螺杆菌是一种单极、多鞭毛、末端钝圆、螺旋形弯曲的细菌。长2.5～4.0μm，宽0.5～1.0μm。革兰染色阴性。有动力。在胃粘膜上皮细胞表面常呈典型的螺旋状或弧形。在固体培养基上生长时，除典型的形态外，有时可出现杆状或圆球状。电子显微镜下，菌体的一端可伸出2～6条带鞘的鞭毛。在分裂时，两端均可见鞭毛。鞭毛长约为菌体1～1.5倍。粗约为30nm。鞭毛的顶端有时可见一球状物，实为鞘的延伸物。每一鞭毛根部均可见一个圆球状根基伸入菌体顶端细胞壁内侧。在其内侧尚有一电子密度降低区域。。鞭毛在运动中起推进器作用，在定居过程中起抛锚作用。幽门螺杆菌是微需氧菌，环境氧要求5～8%，在大气或绝对厌氧环境下不能生长。许多固体培养基可作幽门螺杆菌分离培养的基础培养基，布氏琼脂使用较多，但需加用适量全血或胎牛血清作为补充物方能生长。常以万古霉素、TMP、两性霉素B等组成抑菌剂防止杂菌生长。幽门螺杆菌对临床微生物实验中常用于鉴定肠道细菌的大多数经典生化实验不起反应。而氧化酶、触酶、尿素酶、碱性磷酸酶、r－谷氨酰转肽酶、亮氨酸肽酶这七种酶反应是作为幽门螺杆菌生化鉴定的依据。幽门螺杆菌的全基因序列已经测出，其中尿素酶基因有四个开放性读框，分别是UreA、 UreB、 UreC 和UreD。UreA和UreB编码的多肽与尿素酶结构的两个亚单位结构相当。幽门螺杆菌的尿素酶极为丰富，约含菌体蛋白的15%，活性相当于变形杆菌的400倍。尿素酶催化尿素水解形成氨云保护细菌在高酸环境下生存。此外，尚有VacA基因和CagA基因，分别编码空泡毒素和细胞毒素相关蛋白。根据这两种基因的表达情况，又将幽门螺杆菌菌株分成两种主要类型：Ⅰ型含有CagA和VacA基因并表达两种蛋白，Ⅱ型不含CagA基因，不表达两种蛋白，尚有一些为中间表达型，即表达其中一种毒力因子。现在多认为Ⅰ型与胃疾病关系较为密切。',
            PI_fasciolopsis: '——姜片虫数多发生感染时常有腹泻与便秘交替出现，甚至肠梗阻<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E5%B8%83%E6%B0%8F%E5%A7%9C%E7%89%87%E8%99%AB" target="_blank">布氏姜片虫</a>（英语：Fasciolopsis Buski）又称姜片虫，是复殖目片形科姜片属寄生动物。因活虫呈椭圆形、扁平似姜片而得名。虫体呈肉红色，雌雄同体，成虫有口腹吸盘各一个，两吸盘相距较近，口吸盘位于虫体前端，腹吸盘呈漏斗状、较大，虫体凭借腹吸盘吸附在宿主的小肠黏膜上。虫卵为椭圆形，呈棕黄色或淡黄色，卵壳薄而均匀，一端具有不明显的卵盖。布氏姜片虫主要分布于亚洲，我国主要分布在浙江、福建、广东、广西、云南、贵州、四川、湖南、湖北、江西、安徽、江苏、上海、山东、河南、河北、陕西、甘肃、辽宁及台湾等省、市、自治区。成虫寄生于人或猪的小肠，重度感染可波及到胃和大肠，虫卵随粪便排出体外。虫卵在适宜温度下经3~7周的发育孵出毛蚴，毛蚴经1~2个月发育和无性繁殖，先后形成胞蚴、母雷蚴、子雷蚴阶段，再形成许多尾蚴到囊蚴的感染阶段。囊蚴用吸盘附着于小肠壁黏膜上寄生，经1~3个月发育为成虫。成虫寿命一般为1～2年，长者可达4~4.5年不等。 布氏姜片虫成虫是人体寄生吸虫中最大的一种；虫卵是人体寄生虫卵中最大的一种。布氏姜片虫是人畜共患病，病人、带虫者和猪是本病的传染源，家猪是主要储存宿主，虫卵随粪便污染水源。在流行区内多数居民有生食菱角、荸荠、茭白和饮生水的不良习惯，农民喜用新鲜水生植物作猪饲料，因而构成了人和猪感染姜片虫的机会。开展健康宣传教育、消灭中间宿主、积极查治病人、带虫者和病猪，以便控制传染源。目前有效的防治药物是吡喹酮和中药槟榔。',
            PI_toxoplasma: '——由刚地弓形虫所引起的人畜共患病，可引发神经疾病<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E5%88%9A%E5%9C%B0%E5%BC%93%E5%BD%A2%E8%99%AB" target="_blank">刚地弓形虫</a>（英语：Toxophasma Gondii）属顶端复合物亚门（Subphylum Apicomplexa）、孢子虫网（Clss sporozoasida）、真球虫目（Order Eucoccidiorida），细胞内寄生性原虫。其生活史中出现5种形态，即滋养体（速殖子、Tachyzoite）；包囊（可长期存活于组织内），呈圆形或椭圆形、直径10～200μm、破裂后可释出缓殖子、（Bradyzoite）；裂殖体；配子体和卵囊（Oocyst）。前3期为无性生殖，后2期为有性生弓形虫生活史的完成需双宿主：在终宿主（猫与猫科动物）体内，上述5种形成俱存；在中间宿主（包括禽类、哺乳类动物和人）体内则仅有无性生殖而有无性生殖。无性生殖常可造成全身感染，有性生殖仅在终宿主肠粘膜上皮细胞内发育造成局部感染。卵囊由猫粪排出，发育成熟后含二个孢子囊（Sporocyst）、各含4个子孢子（Sporozoite），在电镜下子孢子的结构与滋养体相似。卵囊被猫天食后，在其肠中囊内子孢子逸出，侵入回肠末端粘膜上皮细胞进行裂体增殖，细胞破裂后裂殖子逸出，侵入附近的细胞，继续裂体增殖，部分则发育为雌雄配子体，进行配子增殖，形成卵囊，后者落入肠腔。在适宜温度（24℃）和湿度环境中，约经2～4天发育成熟，抵抗力强，可存活1年以上，如被中间宿主吞入，则进入小肠后子孢子穿过肠壁，随血液或淋巴循环播散全身各组织细胞内以纵二分裂法（Endodyogeny）进行增殖。在细胞内可形成多个虫体的集合体，称假包囊（Pseudocyst），囊内的个体即滋体或速殖子，为急性期病例的常见形态。宿主细胞破裂后，滋养体散出再侵犯其他组织细胞，如此反复增殖，可致宿主死亡。但更多见的情况是宿主产生免疫力，使原虫繁殖减慢，其外有囊壁形成、称包囊，囊内原虫称缓殖子。包囊在中间宿主体内可存在数月、数年，甚至终生（呈陷性感染状态）。弓形体病（Toxoplasmosis）又称弓形虫病，是由刚地弓形虫（Toxophasma Gondii）所引起的人畜共患病。在人体多为隐性感染；发病者临床表现复杂，其症状和体征又缺乏特异性，易造成误诊，主要侵犯眼、脑、心、肝、淋巴结等。孕妇受染后，病原可通过胎盘感染胎儿，直接影响胎儿发育，致畸严重，其危险性较未感染孕妇大10倍、影响优生，成为人类先天性感染中最严重的疾病之一，已引起广泛重视。本病与艾滋病（AIDS）的关系亦密切。',
            PI_distome: '——自然界最神秘的寄生生物之一<br><a class="pathogen" href="https://baike.baidu.com/item/%E5%8F%8C%E7%9B%98%E5%90%B8%E8%99%AB/5380181" target="_blank">双盘吸虫</a>（英语：Distome）是斜殖目扁形动物。雄虫身上长有深深的褶痕，雌吸虫就象在管子里一样夹在这些褶痕里，只有身体的前后两端伸出管外。双盘吸虫寄生于肝部。宿主为蜗牛、鸟类，并通过鸟类传播。以血及肝细胞为食。 数百只活跃的尾蚴寄生在蜗牛的消化系统，并形成一条带有花纹的管道，直通蜗牛的长眼睛。准备繁殖时，会使蜗牛对光的敏感性降低，并在蜗牛的眼柄中疯狂蠕动，吸引鸟类来捕食。产出的虫卵通过鸟类的粪便排出，落到植物上能感染经过的蜗牛，并在蜗牛体内虫卵孵化成尾蚴。双盘吸虫是自然界最神秘的生物之一。会导致双盘吸虫病，一种人与许多动物共患的疾病。临床症状为肝肿大、肝压痛、右季肋酸痛、消化障碍，有时发热，常有嗜酸性白血球增多症。黄痘不显著或缺如。',
            PI_unknownpathogen: '——每个人都有自己最喜爱的技能和角色，可惜您在这里没有选择的余地，手气可好了吧<br>——画师：dairi<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Unknown_Origin" target="_blank">未知病原</a>（英语：Unknown Pathogen），由作者杜撰的一种病原体，可指现实中并未被发现证实或不存在的某种特殊病原体，其传播途径或临床症状表现以及危害严重性等都是一个未知数。',
            PI_rabies: '——一旦出现临床症状，狂犬病几乎一定致命<br>——画师：dairi<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%8B%82%E7%8A%AC%E7%97%85%E6%AF%92" target="_blank" target="_blank">狂犬病</a>（英语：Rabies）是狂犬病毒所致的人畜共患急性传染病，多见于犬、猫、野生或流浪的哺乳类肉食动物，如狼、狐狸、獾、蝙蝠等，人多因被病兽咬伤而感染。临床表现为特有的恐水、怕风、咽肌痉挛、进行性瘫痪等。因恐水症状比较突出，故本病又名恐水症（Hydrophobia）。狂犬病病毒属于弹状病毒科狂犬病毒属，单股RNA病毒，动物通过互相间的撕咬而传播病毒。我国狂犬病例主要由犬伤所致，约占 90%左右；其次为猫，占 5%左右；其他致伤动物包括马、松鼠、猪、蝙蝠、猴和獾等。对于狂犬病尚缺乏有效的治疗手段，人患狂犬病后的病死率几近100%，患者一般于3～6日内死于呼吸或循环衰竭，故应加强预防措施。',
            PI_filovirus: '——一种少见但及其严重的疾病，它往往是十分致命的<br>——画师：湖山kozan<br><a class="pathogen" href="http://www.a-hospital.com/w/%E4%B8%9D%E7%8A%B6%E7%97%85%E6%AF%92" target="_blank">埃博拉病毒</a>（英语：Ebola Virus）又译作伊波拉病毒。是一种十分罕见的病毒，于1976年在苏丹南部和刚果（金）（旧称扎伊尔）的埃博拉河地区发现。是一种能引起人类和其他灵长类动物产生埃博拉出血热的烈性传染病病毒，其引起的埃博拉出血热（EBHF）是当今世界上最致命的病毒性出血热，感染者症状与同为纤维病毒科的马尔堡病毒极为相似，包括恶心、呕吐、腹泻、肤色改变、全身酸痛、体内出血、体外出血、发烧等。死亡率在50%至90%不等，致死原因主要为中风、心肌梗塞、低血容量休克或多发性器官衰竭。生物安全等级为4级，病毒潜伏期可达2至21天，但通常只有5天至10天。埃博拉是世界上最高级别的病毒之一，比艾滋病病毒还要可怕得多。病毒一旦入侵人体，医学治疗的速度就很难赶上病毒攻击人体的速度。它较强的传染性和最高达90%的病死率，如未及时防控很容易让疫情大规模爆发，所以埃博拉也被称为最致命的病毒之一。<br><a class="pathogen" href="http://www.a-hospital.com/w/%E4%B8%9D%E7%8A%B6%E7%97%85%E6%AF%92" target="_blank">马尔堡病毒</a>（英语：Marburg Virus）是由马尔堡病毒引起的严重的病毒性出血热。据认为，狐蝠科果蝠属于马尔堡病毒的天然宿主。马尔堡病毒从果蝠传给人类，并通过人际间传播。马尔堡病毒病传染源为患者和带毒的非洲绿猴，通过感染的血液、组织、尿及呼吸道分泌物、精液等传播。这是一种病死率非常高的疾病。马尔堡出血热最初于1967年在德国的马尔堡（该病由此得名）和法兰克福以及塞尔维亚贝尔格莱德同时出现疫情后得以发现。马尔堡和埃博拉病毒属于丝状病毒科的两个成员。形态学特征相似，为多形性并有许多奇异的形状，大多呈杆状，由50～80nm直径的中央核包含着病毒的基因组。',
            PI_gordius: '——铁线虫偶然感染人体所引起一种较为罕见的寄生虫病<br><a class="pathogen" href="https://baike.baidu.com/item/%E9%93%81%E7%BA%BF%E8%99%AB/2387095" target="_blank">铁线虫</a>（英语：Gordius）是铁线虫目铁线虫科铁线虫属线形动物。成虫线形，颜色变化很大，可呈黄、灰、棕褐色或黑褐色；虫体前端钝圆，口位于头部顶端或前端腹面；体壁粗糙，虫体表面有许多小乳突，雄虫末端分为两叶，雌虫尾部末端完整或分3叶。因其体前端直到后端粗细几乎一致，细长且角皮较厚，弯曲时像铁丝状，故名铁线虫。铁线虫分布于中国湖北、陕西、河南、云南、四川、重庆、广东、广西等地，主要见于温带和热带地区。栖息在河流、池塘、湖泊、水沟等有水的地方。雌雄交配后，雌体将卵产在水中，并在水中孵化出幼虫。孵化的幼虫在水中被昆虫捕食后，便在其体内营寄生生活。铁线虫雌雄交配后，雄虫死亡。雌虫一次可产卵150万-600万，粘连呈绳索状。寄生于体内的铁线虫体至少可存活3-4年。铁线虫主要寄生于人体的消化道，一般症状不明显，有时会出现消化不良、腹痛、腹泻等表现。尿路感染多见于女性患者，会阴部接触有铁线虫稚虫的水体，经尿路侵入，上行至膀胱内寄生。寄生于外耳道时，虫体移行可引起耳道极度瘙痒。喉部寄生会引起喉部发痒、阻塞感、咳嗽、声音嘶哑等症状。 防治铁线虫病的关键是不饮用不清洁的水、不生吃昆虫、鱼类和螺类等水产食物，下水时避免口腔与不洁水体直接接触，感染者可以口服驱虫药促虫排出体外，若虫体已寄生于组织内，患者应及时就医，手术取虫。',
            PI_varicella: '——由水痘带状疱疹病毒初次感染引起的急性传染病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E6%B0%B4%E7%97%98%E5%B8%A6%E7%8A%B6%E7%96%B1%E7%96%B9%E7%97%85%E6%AF%92" target="_blank">水痘</a>（英语：Varicella）是由水痘带状疱疹病毒初次感染引起的急性传染病。传染率很高。主要发生在婴幼儿，以发热及成批出现周身性红色斑丘疹、疱疹、痂疹为特征。冬春两季多发，其传染力强，接触或飞沫均可传染。易感儿发病率可达95％以上，学龄前儿童多见。临床以皮肤粘膜分批出现斑丘疹、水疱和结痂，而且各期皮疹同时存在为特点。该病为自限性疾病，病后可获得终身免疫，也可在多年后感染复发而出现带状疱疹。',
            PI_diphtheria: '——由白喉杆菌引起的急性呼吸道传染病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%99%BD%E5%96%89" target="_blank">白喉</a>（英语：Diphtheria）是由白喉杆菌引起的急性呼吸道传染病，以咽、喉等处粘膜充血、肿胀并有灰白色伪膜形成为突出临床特征，严重者可引起心肌炎与末梢神经麻痹。白喉属中医学温病范畴。白喉是由白喉杆菌引起的急性呼吸道传染病，以咽、喉等处粘膜充血、肿胀并有灰白色伪膜形成为突出。白喉临床特征，严重者可引起心肌炎与末梢神经麻痹。白喉属中医学温病范畴，中医文献中的“喉痹”、“喉风”、“锁喉风”、“白蚁疮”、“白缠喉”、“白喉风”等包括本病。由于细菌产生的外毒素所致全身中毒症状，严重者可并发心肌炎和末梢神经麻痹。本病呈世界性分布，四季均可发病，以秋季冬季较多。我国广泛推行白喉类毒素接种，发病率、死亡率显著降低。现仅在未进行免疫接种或免疫不完全的人群中偶然散发。白喉杆菌所产生的外毒素为致病的主要因素。该病临床特征为咽痛，咽、喉、鼻等处假膜形成及发热、乏力、恶心、呕吐等中毒症状；假膜范围大时，颌下淋巴结及颈部软组织肿胀致颈部呈牛颈状；严重者可引起心肌炎和周围神经麻痹等。急性期病人应卧床休息、对症治疗及隔离；早期、足量应用抗毒素治疗有特效；抗菌药杀灭或抑制细菌生长，可阻止毒素的产生。该病的传染源是病人和带菌者，主要通过呼吸道飞沫传染，亦可经玩具、衣服、用具等间接传播。发病以冬春季节为多见，人群对该病普遍易感，而儿童易感性最高。该病广泛存在于世界各地，尤多见于温带地区，不少先进国家及地区已基本控制了该病的发生，中国尚有散发病例。对易感者预防接种白喉类毒素是控制白喉的根本措施；及时隔离和积极治疗患者、集体儿童机构内的接触者留观7天并作咽拭子培养等，可避免疾病的蔓延。',
            PI_pertussis: '——由百日咳杆菌引起的急性呼吸道传染病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%99%BE%E6%97%A5%E5%92%B3%E6%9D%86%E8%8F%8C" target="_blank">百日咳</a>（英语：Pertussis）是由百日咳杆菌引起的急性呼吸道传染病。俗称鸡咳、鸬鹚咳。临床表现以阵发性痉挛性咳嗽，咳嗽终末伴有鸡鸣样吸气性吼声和外周血淋巴细胞增多为特征。由于病程可长达2—3个月，故名“百日咳”。婴儿和重症患者易并发肺炎、脑病等。随着百日咳疫苗的普及预防接种等措施，其发病率明显下降，但至今尚未在全球控制。及早应用抗生素治疗，一般预后良好。该病遍及世界各地，一般呈散发状，在儿童集体机构中可发生流行。全年均可发病，以冬春季节为多，可延至春末夏初，甚至高峰在6、7、8三个月份。病人及无症状带菌者是传染源，从潜伏期到第6周都有传染性，通过飞沫传播。人群对本病普遍易感，约2/3的病例是7岁以下小儿，尤以5岁以下者多。因婴幼儿从母体得到的特异性抗体极少，最为易感。一般病后可持久免疫。百日咳杆菌从易感者的呼吸道侵入，约经1～3周的潜伏期（一般7～10天）后出现症状，病程分3期，但无明显界限。',
            PI_measles: '——儿童最常见的急性呼吸道传染病之一<br><a class="pathogen" href="http://www.a-hospital.com/w/%E9%BA%BB%E7%96%B9%E7%97%85%E6%AF%92" target="_blank">麻疹</a>（英语：Measles）是儿童最常见的急性呼吸道传染病之一，其传染性很强，在人口密集而未普种疫苗的地区易发生流行，2～3年一次大流行。麻疹具有高度传染性。据美疾控中心介绍，未接种疫苗者如果与麻疹患者密切接触，10人中有9人会感染麻疹。麻疹病毒属副黏液病毒，通过呼吸道分泌物飞沫传播。临床上以发热、上呼吸道炎症、眼结膜炎及皮肤出现红色斑丘疹和颊黏膜上有麻疹黏膜斑，疹退后遗留色素沉着伴糠麸样脱屑为特征。常并发呼吸道疾病如中耳炎、喉-气管炎、肺炎等，麻疹脑炎、亚急性硬化性全脑炎等严重并发症。尚无特效药物治疗。麻疹可以通过接种麻疹、腮腺炎、风疹三联疫苗（MMR疫苗）来预防，其两剂预防有效率为97%（一剂有效率为93%）。社区接种率超95%时，大多数人会通过社区免疫得到保护。中国自1965年开始普种麻疹减毒活疫苗后发病显著下降。根据卫健委发布的《2022年我国卫生健康事业发展统计公报》统计，2022年我国麻疹发病例数为552例，无死亡人数。',
            PI_tuberculosis: '——至今已经感染全球约有四分之一的人口的致命细菌<br><a class="pathogen" href="http://www.a-hospital.com/w/%E8%82%BA%E7%BB%93%E6%A0%B8" target="_blank">肺结核</a>（英语：Tuberculosis），由结核分歧杆菌引发，属于乙类传染病，指结核病变发生在肺、气管、支气管和胸膜等部位。主要分为原发性肺结核、血行播散性肺结核、继发性肺结核、气管（支气管）结核、结核性胸膜炎五种类型。肺结核是我国发病、死亡人数最多的重大传染病之一。目前我国仍是全球30个结核病高负担国家之一。根据卫健委发布的《2022年我国卫生健康事业发展统计公报》统计，2022年我国肺结核发病例数为560847例，死亡人数为2205人。结核病报告发病总数和报告死亡数均为全国甲乙类传染病报告前五。',
            PI_typhoid: '——由伤寒沙门氏菌引起的可危及生命的感染<br><a class="pathogen" href="http://www.a-hospital.com/w/%E4%BC%A4%E5%AF%92%E6%9D%86%E8%8F%8C" target="_blank">伤寒</a>（英语：Typhoid）由伤寒沙门氏菌造成之伤寒病，在伤寒流行季节和地区患者有持续性高热（40～41℃）为时1～2周以上，并出现特殊中毒面容，相对缓脉，皮肤玫瑰疹，肝脾肿大，周围血象白细胞总数低下，嗜酸性粒细胞消失，骨髓象中有伤寒细胞（戒指细胞），可临床诊断为伤寒。',
            PI_dengue: '——是登革热病毒引起、伊蚊传播的一种急性传染病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%99%BB%E9%9D%A9%E7%83%AD%E7%97%85%E6%AF%92" target="_blank">登革热</a>（英语：Dengue）是登革热病毒引起、依蚊传播的一种急性传染病。临床特征为起病急骤，高热，全身肌肉、骨髓及关节痛，极度疲乏，部分患可有皮疹、出血倾向和淋巴结肿大。本病于1779年在埃及开罗、印度尼西亚雅加达及美国费城发现，并据症状命名为关节热和骨折热。1869年由英国伦敦皇家内科学会命名为登革热。20世纪，登革热在世界各地发生过多次大流行，病例数百万计。在东南亚一直呈地方性流行。我国于1978年在广东流行，并分离出第Ⅳ型登革热病毒。此后，于1979、1980、1985年小流行中分离出Ⅰ、Ⅱ、Ⅲ型病毒。登革热病毒属B组虫媒病毒，现在归入披盖病毒科（Togaviridae）黄热病毒属（Flavivirus）。病毒颗粒呈哑铃状（700×20--40nm）、棒状或球形（直径为 20--50nm）。髓核为单股线状核糖核酸（RNA）。病毒颗粒与乙型脑炎病毒相似，最外层为两种糖蛋白组成的包膜，包膜含有型和群特异性抗原，用中和试验可鉴定其型别。登革病毒可分为4个血清型，与其他B组虫媒病毒如乙型脑炎病毒可交叉免疫反应。登革病毒在1～3日龄新生小白鼠脑、猴肾细胞株、伊蚊胸肌及C6/36细胞株内生长良好，并产生恒定的细胞病变。但接种猴子、猩猩和其他实验动物，不产生症状。登革病毒对寒冷的抵抗力强，在人血清中贮存于普通冰箱可保持传染性数周，-70℃可存活8年久；但不耐热，50℃、30min或100℃、2min皆能使之灭活；不耐酸、不耐醚。用乙醚、紫外线或0.05%福尔马林可以灭活。',
            PI_westnilevirus: '——可以导致人类罹患神经系统疾病甚至死亡<br><a class="pathogen" href="http://www.a-hospital.com/w/%E8%A5%BF%E5%B0%BC%E7%BD%97%E6%B2%B3%E7%97%85%E6%AF%92" target="_blank">西尼罗病毒</a>（英语：West Nile Virus）属于黄病毒科黄病毒属，与乙型脑炎、圣路易脑炎、黄热病、登革热、丙型肝炎等病毒同属。有囊膜，单链线形核糖核酸，RNA为正链，约有10000～11000个碱基对，具有感染性。电镜下该病毒呈中等大小，直径21nm～60nm,圆形颗粒，对有机溶剂，紫外线敏感。西尼罗河病毒属于人和动物都可能被感染的病毒，病原学西尼罗病毒属于黄病毒科黄热病毒属，与乙型脑炎、黄热病、登革热等病毒同属。1937年在非洲的乌干达首次被发现，每年6月至10月是西尼罗河病毒感染高发期。西尼罗病毒最初是1937年从乌干达西尼罗地区一名发热的妇女血液中分离出来而被发现,因此得名为西尼罗病毒。 西尼罗河病毒可以导致人类罹患神经系统疾病甚至死亡，常通过蚊虫叮咬传播，人类、马和其他哺乳动物都可能被感染，在非洲、欧洲、中东、北美和西亚等地很常见。当地时间2023年9月7日，罗马尼亚国家公共卫生研究所通报，自今年6月6日西尼罗河病毒监测期开始至9月7日，该国已登记38例西尼罗河病毒确诊病例和2例疑似病例。',
            PI_plasmodium: '——通过某些类型的蚊子传播给人类的疾病，可危及生命<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E7%96%9F%E5%8E%9F%E8%99%AB" target="_blank">疟原虫</a>（英语：Plasmodium），是人疟疾的病原体。寄生于人体的疟原虫有四种，即间日疟原虫（P.Vivax Grassi and Feletti，1890）、三日疟原虫（P.Malariae Laveran，1881）、恶性疟原虫（P.Falciparum Welch，1897）和卵形疟原虫（P.ovale Graig，1900），属于色藻界-顶复门-无类椎体纲-血孢子虫目-疟原虫科。这些疟原虫有蚊虫和人两个宿主，包括蚊体内的有性繁殖和人体内的无性增殖，携带疟原虫的按蚊通过叮咬人而传播，引起疟疾寒热往来发作，俗称“打摆子”。而其他种类的疟原虫会感染它种动物，包括其他灵长目动物、啮齿目动物、蜥形纲动物。',
            PI_gonorrhea: '——一种古老而又常见的性病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E6%B7%8B%E7%97%85" target="_blank">淋病</a>（英语：Gonorrhea）是淋病奈瑟菌（简称淋菌）引起的以泌尿生殖系统化脓性感染为主要表现的性传播疾病。是一种古老而又常见的性病。近年来发病率居我国（中国）性传播疾病首位，淋菌为革兰氏阴性双球菌，呈肾型，成双排列，离开人体不易生存，一般消毒剂容易将其杀灭。多发生于青年男女。人类在古时候就发现了这种疾病,《圣经》上就有这样的描述。17世纪来， Boswell曾形象地描述了他本人的发病情况，反复感染、并发症及治疗情况。 John Hunter(1728-1793年)认为根据传染的部位可决定疾病的类型，例如淋病是发生在粘膜上，而梅毒下疳则发生在皮肤上。在我国，公元前2-3世纪，《黄帝内经素问》载曰：“膀胱不和为癃。”公元二世纪张仲景在《金匮要略》这样描述淋病的：“小便如浆状，小腹弦急，痛引脐中。”公元7世纪隋朝巢元方在《诸病源候总论》中把淋病分为七淋，即石淋、气淋、膏淋、痨淋、热淋、血淋、寒淋，并把膏淋列为急性淋病，痨淋列为慢性淋病。解放前，我国一些城市的淋病发病率为20%左右。解放后在1953年早期病人已近绝迹，1960年基本上完成了晚期病人的普查普治，1964年已基本消失淋病。由于淋病是世界各国发病率最高的性传播疾病，接触者感染率高，潜伏期短，可在短期内病例成倍增长。又由于1976年西非和东亚出现了耐青霉素的淋球菌菌株以来，世界淋病有明显增加的趋势。我国自1975年以后，淋病又死灰复然，病人逐年呈直线增多，是性病主要发病病种。如上海地区性病就以淋病为主，约占90%以上。淋病的病原体即奈瑟菌，是1879年由Neisseria首次分离出的淋病双球菌，因此淋病双球菌又称为奈瑟又球菌(Neisseriagon-orrhoeas)。淋病双球菌呈肾形，两个凹面相对，大小一致，长约0.7微米，宽0.5微米。它是嗜二氧化碳的需氧菌，革兰染色阴性，最适宜在潮湿，温度为35℃，含2.5-5%二氧化碳的环境中生长。常存在多核白细胞内，椭圆或球形，常成双排列，无鞭毛、无荚膜、不形成芽孢，对外界理化条件的抵抗力差，最怕干燥，在干燥环境中1--2 小时即可死亡。在高温或低温条件下都易致死。对各种化学消毒剂的抵抗力也很弱。正常成年男性尿道长15-18厘米，舟状窝粘膜由鳞状细胞组成，前尿道粘膜由柱状细胞组成，后尿道及膀胱粘膜由移行上皮细胞组成。细胞的排列及层次以细菌的抵抗力各不相同，舟状窝系复层鳞状细胞重叠组成，对淋病双球菌抵抗力最大。前尿道柱状细胞是成行排列而且是单层结构，一遇感染，病菌即可由细胞间隙进入粘膜下层，引起严重病变。后尿道及膀胱三角区的移行上皮由于受解剖结构上的限制，不能伸缩自如，也易受侵袭。膀胱壁除三角区具有很大伸缩性，移行上皮能起鳞状细胞的作用，从不受淋病双球菌的影响。',
            PI_angiostrongylus: '——较常见的一种蠕虫蚴移行症，是一种人畜共患病<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E5%85%B6%E4%BB%96%E4%BA%BA%E4%BD%93%E5%AF%84%E7%94%9F%E7%BA%BF%E8%99%AB" target="_blank">广州管圆线虫</a>（英语：Angiostrongyliasis Cantonensis）是我国较常见的一种蠕虫蚴移行症，是一种人畜共患病。病原体为广州管圆线虫(Angiostrongylus Cantonensis)幼虫或成虫早期(性未成熟)阶段。广州管圆线虫长侵入心脑肺等部位，尤其是中枢神经系统感染多见，导致发热、头痛、呕吐、抽搐、昏迷等嗜酸性粒细胞增多性脑膜脑炎或脑膜炎。广州管圆线虫（又称广东住血线虫）最早是由我国的陈心陶教授于1933年在广东家鼠及褐家鼠体内发现，当时命名为广州肺线虫(Pulmonema Cantonensis)。后由Matsumoto1937年在台湾报道，至1946年才由Dougherty正式命名为广州管圆线虫。广州管圆线虫的中间宿主，主要是陆生螺类与淡水螺类，如螺、蛞蝓、蜗牛等;终宿主为哺乳动物，主要是鼠类，如黑家鼠、褐家鼠、黑线姬鼠、黄毛鼠等。成虫寄生于鼠类的肺动脉内。广州管圆线虫雄虫白色，大小为 (1 5～25)×(0.26～0.40)mm;雌虫体内的白色子宫与充满血液的肠支互相缠绕成红白相间的麻花状，大小为 (20～4 5)×(0.3～0.6)mm。有时可在雌虫的子宫内看见单细胞虫卵。雌、雄成虫交合后产卵，虫卵进入鼠肺毛细血管，I期幼虫孵出后穿破肺毛细血管进入肺泡，沿呼吸道上行至咽部，再被吞入消化道，随鼠粪一起排出。I期幼虫在体外潮湿环境中可存活3周。当中间宿主将I期幼虫吞食后，可在其体内发育为II期和III期幼虫。III期幼虫对人体有较强的感染力。人类多由于生吃含有III期幼虫的淡水螺肉而感染，也可通过生吃中间宿主如鱼、虾、蛙等而感染，或当婴幼儿在有蛞蝓滋生的地方爬行时，亦有可能获得感染。III期幼虫可侵入小肠组织、进入血液循环系统，随血流到达肺、脑、肝、脾、肾、心、肌肉等各种器官组织，引起广州管圆线虫病。人类不是广州管圆线虫的正常宿主，只能充当其转续宿主。III期幼虫在人体内可发育为第IV、V期幼蜱或成虫早期，但不能发育为性成熟的成虫。幼虫移行的机械性刺激和抗原性作用可使病变部位产生炎症反应及过敏性反应。尤其是在死亡变性的虫体周围组织表现得最为明显。如幼虫在侵犯中枢神经系统时，可引起脑膜炎、脑膜脑炎、脊神经根脑膜脑炎或脑脊髓炎等。此外，在巴西、阿根廷等中、南美洲地区存在着一种由哥斯达管圆线虫(Angiostrongylus Costaricensis)引起的哥斯达管圆线虫病，其主要引起肠和腹部病变，可致肠炎、肠脓肿、肠肉芽肿与肠穿孔。在患者的肠组织活检标本中可发现其幼虫，在粪便中则很难发现其幼虫。在患者的血清中可检出特异性IgG、IgM抗体。病变部位主要发生在中枢神经系统中的脑、脑干、小脑和脊髓，主要病理改变为充血、水肿、出血、脑组织损伤及肉芽肿性炎症反应。虫蚴可堵塞所侵入组织的小动脉形成肉芽肿，肉芽肿内有大量嗜酸性粒细胞浸润。如导致脑组织供血障碍，脑神经细胞出现空泡变性、软化，脑膜出现嗜酸细胞性脑膜炎，肺组织则可出现脓肿或肉芽肿。在尸检病例常客在脑、肺病变部位发现虫蚴。',
            PI_avianinfluenza: '——是由禽流感病毒引起的传染病<br>——画师：dairi<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%A6%BD%E6%B5%81%E6%84%9F%E7%97%85%E6%AF%92" target="_blank">禽流感</a>（英语：Avian Influenza），全名鸟禽类流行性感冒，是由禽流感病毒引起的传染病，通常只感染鸟类，常见于鸭子和鹅等野生水禽，某些禽流感病毒跨越物种界限传播，并导致人类和其他哺乳动物患病或亚临床感染。自从1997年在香港发现人类也会感染禽流感之后，此病症引起全世界卫生组织的高度关注。其后，本病一直在亚洲区零星爆发，但在2003年12月开始，禽流感在东亚多国，主要在越南、韩国、泰国严重爆发，并造成越南多名病人丧生。直到2005年中，疫症不单未有平息的迹象，而且还不断扩散。现时远至东欧多个国家亦有案例。人感染后的症状主要表现高热、咳嗽、流涕、肌痛等，多数伴有严重的肺炎，严重者心、肾等多种脏器衰竭导致死亡，病死率很高。人类感染的首要危险因素似乎是直接或间接暴露于受感染活禽或病死禽类或污染环境中。',
            PI_spanishinfluenza: '——西班牙型流行性感冒是人类历史上最致命的传染病<br><a class="pathogen" href="https://baike.baidu.com/item/1918%E5%B9%B4%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%A7%E6%B5%81%E6%84%9F?fromtitle=%E8%A5%BF%E7%8F%AD%E7%89%99%E6%B5%81%E6%84%9F&fromid=7366227&fromModule=lemma_search-box" target="_blank">西班牙大流感</a>（英语：Spanish Influenza）造成至少5000万人死亡。而当时的世界总人口，不过17亿人左右。根据事后的科研表明，“西班牙流感”并不源自于西班牙，“零号病人”也并不出现于西班牙。为什么，从欧洲向全世界蔓延的大流感，被命名为“西班牙流感”？因为当时正处于第一次世界大战期间，英法美德和所有欧洲参战国，都实行严格的新闻管制，一切可能有损于前线士气的事情都不允许报道，更不允许把区域流感渲染成“瘟疫”。整个欧洲，只有中立国西班牙的媒体不受管制，他们也不用报道战争，每天就报道自家的流感情况，全球媒体也迅速跟进，甚至还给西班牙流感病毒起了一个名字，叫“西班牙流感”。就这样，强势媒体确定了这个名字，并且流传。西班牙型流行性感冒是人类历史上最致命的传染病，在1918~1919年曾经造成全世界约5亿人感染，全世界死亡人数至少为5000万。（当时世界人口约17亿人）；其全球平均致死率约为10%，和一般流感的0.1%比较起来较为致命。西班牙型流行性感冒，这一名字的由来并不是因为此流感从西班牙爆发；而是因为当时西班牙有约8百万人感染了此病，甚至连西班牙国王也感染了此病，所以被称为西班牙型流行性感冒。而在当时的西班牙，则称此病为法国型流行性感冒。此流感蔓延全球，从阿拉斯加的因纽特人部落到太平洋中央的萨摩亚岛，无一幸免；许多爱斯基摩部落是一村一村的死绝，在萨摩亚死亡率更高达25%。亚马孙河口的马拉若岛是当时世界上唯一没有感染报告的人类聚集地。这一波的大流感也传入中国台湾，在当时造成约4万余人的死亡。第一波流感于1918年6月初在基隆开始出现，然后蔓延全岛，至9月下旬消失，没有特别显著的死亡率。10月下旬，第二波流感又开始从基隆出现，并顺着纵贯线往南扩散至新竹、台中、台南、打狗、阿缑等地，并借由海运传入花莲港和澎湖县，至12月中旬结束，造成约77万人感染，25,394人死亡。1919年12月，第三波流感又从基隆开始出现，1920年2月底结束，造成约14余万人感染，19,244人死亡。日本人社群最先爆发疫情，再传给台湾居民；先在城镇发生，再往乡村扩散。当时台湾医疗资源缺乏，在台湾367万人中，只有732名受过4年医学教育的西医师。日本人患者受到较好的医疗照顾，因此死亡率较低，死亡率为1.1%；台湾汉人为3.3%、台湾少数民族则为3.5%。西班牙流感夺去2千5百万到4千万（一说7千万或一亿）条生命，比第一次世界大战的死亡人数还多，成为第一次世界大战提早结束的原因之一，因为各国都已经没有额外的兵力作战。',
            PI_simianflu: '——基因修改，增加猩猩智力，但未经人体测试<br>——画师：dairi<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Simian_Flu" target="_blank">猩猩流感</a>（英语：Simian Flu）是英国独立游戏工作室Ndemic Creations所开发的策略游戏《瘟疫公司》（Plague Inc.）及其衍生作品《瘟疫公司：进化》（Plague Inc: Evolved）的特殊病原体。该病原体最早是在2014年7月2日于游戏的官网上并于当年7月10日移动端发布1.9版更新时追加，而电脑端则是在7月18日推出0.7.5版时增加的。该病原体是为配合《猩球崛起：黎明之战》的上映而加入的。与原电影《猩球崛起》的设定一样，该病毒是生物科技公司Gen-Sys研制出来的转基因病毒，用于治疗阿尔茨海默病。尽管它被证实能提高猩猩的智力水平，但是在人体的测试表现则不得而知。该病原体不论是在移动端还是在电脑端都要求玩家以困难难度完成前面所有病原体后才能解锁。',
            PI_echinococcus: '——细粒棘球绦虫的幼虫感染人体所致的疾病<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E7%BB%86%E7%B2%92%E6%A3%98%E7%90%83%E7%BB%A6%E8%99%AB" target="_blank">包虫</a>（英语：Echinococcus），又称棘球蚴，包虫病是细粒棘球绦虫或多房棘球绦虫的幼虫感染人体所致的疾病。该病为人畜共患病。狗为终宿主，羊、牛是中间宿主；人因误食虫卵成为中间宿主而患包虫病。1.形态细粒棘球绦虫的成虫寄生在犬的小肠中，是带科绦虫中最小的一种。虫体长度为2～11mm，多数在5mm以下。虫卵为圆形或椭圆形，直径约30～40um，内为六钩蚴，对外环境有较强的抵抗力。细粒棘球蚴囊或称包虫囊是寄生在中间宿主家畜和人体内的发育阶段，囊壁由两层构成，内层直接包裹着囊液，称为生发层。生发层之外的角质层系由生发层分泌形成，为无细胞的较坚韧的板层状结构。囊液透明，内有原头节，育囊和子囊，子囊壁的结构与母襄同。发育与生活史：成虫寄生在终宿主——犬的小肠上段（空肠），借顶突钩和吸盘固定在肠粘膜上， 不引起宿主症状。从食入原头节到成虫发育成熟 所需时间6～9周。孕节中的虫卵每7～14d成熟， 每个孕节含有虫卵100～1500个。孕节或虫卵随粪便排出，污染牧场、畜舍、皮毛、蔬菜、土壤、水源等，虫卵被牲畜（羊、牛）或人吞食后，卵内六钩蚴在十二指肠孵出，钻入肠壁，通过门静脉系统进人肝、肺等脏器，约经5个月发育成包虫（棘）球蚴。人仅为中间宿主。动物的包囊如被狗吞食，其头节在狗的小肠经3～10周长成成虫。细粒棘球绦虫的终宿主与中间宿主范围很广，但主要在狗（终宿主）与羊（中间宿主）间循环。',
            PI_amoeba: '——少数种类偶尔会侵入动物机体<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E8%87%B4%E7%97%85%E6%80%A7%E8%87%AA%E7%94%9F%E7%94%9F%E6%B4%BB%E9%98%BF%E7%B1%B3%E5%B7%B4" target="_blank">福氏耐格里变形虫</a>（英语：Amoeba Naegleria Fowleri）单细胞真核生物，主要指肉足鞭毛门、肉足亚门、根足超纲的叶足纲生物。别称变形虫，源自希腊“Amoibe”，意思是“变化”。阿米巴原虫通过伸长或收缩伪足不断改变自身形状，借此进行运动及进食，这种运动方式称为阿米巴样运动。因此，阿米巴原虫没有固定形状，其伪足的形态和内部结构作为分类的依据之一。阿米巴原虫的大小差异较大，最小的仅2~3微米，较大可达肉眼可见的5毫米。根据生活环境的不同，可分为内阿米巴和自由生活阿米巴（Free-living Amoeba）。前者营寄生生活，寄生于人体内的主要有阿米巴目、内阿米巴科的属种。后者主要生活在水和土壤中，以细菌、藻类、真菌等为食，少数种类偶尔会侵入动物机体。对人体影响较大的包括裂核目中棘阿米巴科与双鞭阿米巴科的属种。临床上，以溶组织内阿米巴的致病性最强，主要引发阿米巴痢疾和肝脓肿；耐格里属与棘阿米巴属主要引起脑膜脑炎、角膜炎、口腔感染和皮肤损伤等，其中福氏耐格里阿米巴即俗称的“食脑虫”。',
            PI_poliomyelitis: '——由病毒侵入血液循环系统引起的急性传染病，易感婴幼儿<br><a class="pathogen" href="http://www.a-hospital.com/w/%E8%84%8A%E9%AB%93%E7%81%B0%E8%B4%A8%E7%82%8E%E7%97%85%E6%AF%92" target="_blank">脊髓灰质炎</a>（英语：Poliomyelitis）俗称小儿麻痹症，由病毒侵入血液循环系统引起的急性传染病。患者多为一至六岁儿童，主要症状是发热，全身不适，严重时肢体疼痛，发生瘫痪。脊髓灰质炎是一种急性病毒性传染病，其临床表现多种多样，包括程度很轻的非特异性病变，无菌性脑膜炎(非瘫痪性脊髓灰质炎)和各种肌群的弛缓性无力（瘫痪性脊髓灰质炎）。 脊髓灰质炎病人，由于脊髓前角运动神经元受损，与之有关的肌肉失去了神经的调节作用而发生萎缩，同时皮下脂肪，肌腱及骨骼也萎缩，使整个机体变细。脊髓灰质炎病毒是一种体积小（22~30nm），单链RNA基因组，缺少外膜的肠道病毒。按免疫性可分为三种血清型，其中Ⅰ型最容易导致瘫痪，也最容易引起流行。人是脊髓灰质炎病毒唯一的自然宿主，本病通过直接接触传染，是一种传染性很强的接触性传染病。隐性感染（最主要的传染源）在无免疫力的人群中常见，而明显发病者少见；即使在流行时，隐性感染与临床病例的比例仍然超过100：1。一般认为，瘫痪性病变在发展中国家（主要是热带）少见，但近来对跛行残疾的调查发现这些地区的发病率达到美国接种疫苗以前的高峰发病年份。这些地区环境卫生和个人卫生都很差，病毒传播广泛，终年发病，因而小儿在生后几年内就获得感染和免疫，而不发生大流行。瘫痪病例中，90%以上发生于5岁以前。相比之下，环境卫生和个人卫生好的经济发达国家，感染的年龄往往推迟，许多年长儿和青年人仍然是易感者，夏季流行在年长小儿中越来越多。在工业化国家，由于疫苗的广泛使用，脊髓灰质炎目前已基本消灭。在全世界范围内，消灭脊髓灰质炎已经为时不远。临床表型差异很大，有两种基本类型：轻型（顿挫型）和重型（瘫痪型或非瘫痪型）。轻型脊髓灰质炎占临床感染的80%~90%，主要发生于小儿。临床表现轻，中枢神经系统不受侵犯。在接触病原后3~5天出现轻度发热，不适，头痛，咽喉痛及呕吐等症状，一般在24~72小时之内恢复。重型常在轻型的过程后平稳几天，然后突然发病，更常见的是发病无前驱症状，特别在年长儿和成人。潜伏期一般为7~14日，偶尔可较长。发病后发热，严重的头痛，颈背僵硬，深部肌肉疼痛，有时有感觉过敏和感觉异常，在急性期出现尿潴留和肌肉痉挛深腱反射消失，可不再进一步进展，但也可能出现深腱反射消失，不对称性肌群无力或瘫痪，这主要取决于脊髓或延髓损害的部位。呼吸衰弱可能由于脊髓受累使呼吸肌麻痹，也可能是由于呼吸中枢本身受病毒损伤所致。吞咽困难，鼻反流，发声时带鼻音是延髓受侵犯的早期体征。脑病体征偶尔比较突出。脑脊液糖正常，蛋白轻度升高，细胞计数10~300个/μl（淋巴细胞占优势）。外周血白细胞计数正常或轻度升高。治疗是对症性的。顿挫型或轻型非瘫痪型脊髓灰质炎仅需卧床几日，用解热镇痛药对症处理。当急性脊髓灰质炎时，可睡在硬板床上（用足填板，有助于防止足下垂）。如果发生感染应给予适当抗生素治疗，并大量饮水以防在泌尿道内形成磷酸钙结石。在瘫痪型脊髓灰质炎恢复期，理疗是最重要的治疗手段。脊髓病变引起呼吸肌麻痹，或者病毒直接损害延髓的呼吸中枢引起颅神经所支配的肌肉麻痹时，都可能导致呼吸衰竭。此时需要进行人工呼吸。对咽部肌肉无力，吞咽困难，不能咳嗽，气管支气管分泌物积聚的病人，应进行体位引流和吸引。常需要气管切开或插管，以保证气道通畅。在呼吸衰竭时常发生肺不张，故常需作支气管镜检查及吸引。若无感染不主张用抗菌药。',
            PI_ancylostomatrichuris: '——导致患者出现贫血及与贫血相关的症状<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E5%8D%81%E4%BA%8C%E6%8C%87%E8%82%A0%E9%92%A9%E5%8F%A3%E7%BA%BF%E8%99%AB%E5%92%8C%E7%BE%8E%E6%B4%B2%E6%9D%BF%E5%8F%A3%E7%BA%BF%E8%99%AB" target="_blank"> target="_blank"钩虫</a>（英语：Ancylostoma）是钩口科线虫的统称，发达的口囊是其形态学的特征。在寄生人体消化道的线虫中，钩虫的危害性最严重，由于钩虫的寄生，可使人体长期慢性失血，从而导致患者出现贫血及与贫血相关的症状。钩虫呈世界性分布，尤其在热带及亚热带地区，人群感染较为普遍。据估计，全世界钩虫感染人数达9亿左右。在我国，钩虫病仍是严重危害人民健康的寄生虫病之一。寄生人体的钩虫，主要有十二指肠钩口线虫（Ancylostomaduodenale Dubini，1843），简称十二指肠钩虫；美洲板口线虫（Necator AmericanusStiles，1902），简称美洲钩虫。另外，偶尔可寄生人体的锡兰钩口线虫（Ancylostoma CeylanicumLoose，1911），其危害性与前两种钩虫相似。犬钩口线虫（Ancylostoma CaninumErcolani，1859）和巴西钩口线虫（Aucylostoma BrazilienseGomezdeFaria，1910）的感染期蚴，虽也可侵入人体，引起皮肤幼虫移行症（cutaneous larva Migrans，CLM）。因幼虫移行蜿蜒弯曲，引起皮疹呈匐行线状，故称匐形疹（creeping eruption）。但幼虫不能发育为成虫。<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E6%AF%9B%E9%A6%96%E9%9E%AD%E5%BD%A2%E7%BA%BF%E8%99%AB" target="_blank">毛首鞭形线虫</a>（英语：Trichuris）简称鞭虫。是人体常见的寄生线性虫之一，地理分布广泛，感染率较高。成虫主要寄生于人体盲肠，引起鞭虫病。中国在距今2300多年前的一具西汉古尸的肠内容物中检获鞭虫卵，证实已有人鞭虫寄生。鞭虫是袋形动物门线虫纲鞭虫属蠕虫，尤指毛首鞭虫。毛首鞭虫寄生在人和哺乳类的大肠内，因身体鞭状而得名。人(尤其是儿童)吃了污染的泥土而受染。鞭虫分泌一种液体到宿主组织内，将组织溶解并取食之。鞭虫又称毛首鞭形线虫。成虫寄生于人体盲肠内，严重感染时也寄生于阑尾、回肠下段、结肠及直肠等处。虫体呈鞭状，雌虫体长35毫米~50毫米雄虫30毫米~45毫米，虫体前五分之三细如鞭状。成虫寄生于人体盲肠内，严重感染时也寄生于阑尾、回肠下段、结肠及直肠等处。毛首鞭虫寄生在人和哺乳类的大肠内，因身体鞭状而得名。人(尤其是儿童)吃了污染的泥土而受染。鞭虫分泌一种液体到宿主组织内，将组织溶解并取食之。鞭虫的生活史简单，人是唯一的宿主。成虫主要寄生于人盲肠内，严重感染者可见于结肠、直肠甚至回肠下端等处。成虫在寄生部位交配产卵后，卵随寄主粪便排出体外，在土壤中经过三周左右的时间发育成感染卵，感染卵随被污染的食物、蔬菜或水源经口感染。卵在小肠内孵化，侵入局部肠黏膜，摄取营养并发育。约经10天幼虫返回肠腔移行到盲肠处发育为成虫。自感染到成虫产卵约需1~3个月。1条雌虫日产卵5000~20000粒，成虫寿命3—5年，长者可达8年。',
            PI_aspergillus: '——广泛存在于食物中的剧毒微生物<br><a class="pathogen" href="http://www.a-hospital.com/w/%E9%BB%84%E6%9B%B2%E9%9C%89" target="_blank">黄曲霉菌</a>（英语：Aspergillus Flavus）或称为黄曲菌、黄曲霉等，属真菌门、半知菌亚门、丛梗孢科、曲霉属，是一种广泛分布于世界各地的常见腐生霉菌，其中有30%-60%的菌株可产生黄曲霉毒素；而大多数非致病性的菌种，常作为曲种应用于发酵工业，主要是一些有机酸的发酵生产，如黄曲霉Aspergillus FlavusH-98可用于L-苹果酸的发酵生产。黄曲霉毒素是由黄曲霉和寄生曲霉产生的杂环化合物，它的代谢产物主要有B1、B2、G1、G2、M1和M2等类型。',
            PI_swineflu: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_swineflu.png><br>——新变异的甲型流感病毒，与西班牙流感存在相似序列<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Swine_Flu" target="_blank">猪流行性感冒</a>（英语：Swine Influenza），二类传染病、寄生虫病，是猪的一种急性、传染性呼吸器官疾病。其特征为突发，咳嗽，呼吸困难，发热及迅速转归。猪流感由甲型流感病毒（A型流感病毒）引发，通常爆发于猪之间，传染性很高但通常不会引发死亡。秋冬季属高发期，但可全年传播。猪流感多被辨识为丙型流感病毒（C型流感病毒）或甲型流感病毒的亚种之一。该病毒可在猪群中造成流感暴发。通常情况下人类很少感染猪流感病毒。',
            PI_neurie: '——用欢乐与幸福感染全世界的奇迹<br>——画师：天行木羽<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Santa%27s_Little_Helper" target="_blank">圣诞蠕虫</a>（英语：Santa Neurie Worm）世界是黑暗和阴暗的。世界范围内无聊的政府都禁止节日、欢笑和庆祝活动。人类已经忘记了如何享受乐趣，人们穿着灰色衣服，把所有时间都花在工作上。幸运的是神经蠕虫与圣诞老人合作，决心用欢乐和幸福感染全世界，圣诞老人的小帮手能创造奇迹吗？',
            PI_fentianhuowu: '——欢迎莅临瘟疫公司，博士<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://tieba.baidu.com/f?ie=utf-8&kw=%E7%84%9A%E5%A4%A9%E7%9A%84%E7%81%AB%E8%88%9E&fr=search" target="_blank">焚天の火舞</a>（现贴吧名：火舞°，现已退位）是百度plagueinc吧（现已封禁）中的第二任领导者吧主，同时也有“暴君“，“独裁者”，“民主人士”，“PI帝国武宗皇帝”等称号。于2014年9月8日在百度plagueinc吧上任吧主，之后同时兼任环太平洋联合军防部队 （Pan Pacific Defense Corps） 中国署，当然也是百度环太平洋吧主管（现已退位）。焚天の火舞于2016年2月16日于百度plagueinc吧宣布退位，后续由法伦斯泰尔（现贴吧名：-夏木折葵-，现已退位）接管百度plagueinc吧主。',
            PI_nipahvirus: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_pithovirus.png><br>——有史以来最致命的尼帕病毒大爆发<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Nipah_Virus" target="_blank">尼帕病毒</a>（英语：Nipah Virus）</a>是一新型人兽共患病毒，它是RNA病毒，属于副粘病毒科，能引起广泛的血管炎，感染者有发热、严重头痛、脑膜炎等症状，给人及动物带来严重危害。尼帕病毒病是继英国疯牛病、台湾岛猪口蹄疫、香港禽流感后，又一引起世界各国广泛关注和恐慌的人畜共患病。从公共卫生的角度出发，本病应引起国内医学和畜牧兽医界人士的高度重视。',
            PI_candida: '——白色念珠菌引起的一种真菌病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E5%8C%BB%E5%AD%A6%E5%BE%AE%E7%94%9F%E7%89%A9%E5%AD%A6/%E7%99%BD%E8%89%B2%E5%BF%B5%E7%8F%A0%E8%8F%8C" target="_blank">念珠菌</a>（英语：Candida）是由白色念珠菌引起的一种真菌病。该病原菌既可侵犯皮肤和黏膜，又能累及内脏。通常按照受累部位分类，最常见的两种综合征为黏膜皮肤念珠菌病（例如口咽念珠菌病或鹅口疮，食管炎和阴道炎）和侵袭性或深部器官念珠菌病（例如念珠菌血症，慢性播散性或肝脾念珠菌病，心内膜炎等）。在大多数患者中，念珠菌病为机会感染性疾病。',
            PI_creutzfeldtjacobdisease: '——蛋白质异常折叠催生的朊病毒新式变种<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Mad_Cow_Disease" target="_blank">克雅氏病</a>（英语：Creutzfeldt Jacob Disease）是一种罕见的主要发生在50-70岁之间的可传播的脑病。受感染的人可以有睡眠紊乱，个性改变，共济失调，失语症，视觉丧失，物理，肌肉萎缩，肌阵挛，进行性痴呆等症状，并且会在发病的一年内死亡。该病常有染色体家族遗传倾向，并且有一个新的克雅氏病的报道（该病与牛海绵状脑病有潜在的联系）。此病的病理学特征包括以小脑和大脑皮层为主的海绵样变性和朊病毒的出现。',
            PI_pithovirus: "<img style=width:238px src=" + lib.assetURL + 'extension/瘟疫公司/image/introImage/PI_pithovirus.png><br>——基因结构比智人更古老，它能把人类带回旧石器时代<br>——画师：萨菲瑞伊<br><a class="pathogen" href="https://plagueinc.wiki.gg/wiki/Frozen_Virus" target="_blank">西伯利亚阔口罐病毒</a>（英语：Pitho Virus），是法国病毒学家发现的世界上第三种超大型病毒。该病毒能在冰土中活3万多年，依然不死且具有感染性及杀伤力。该病毒外形神似潘多拉，由于其强烈的生存能力，被调侃为万岁爷。 法国国家科研中心与马赛大学的联合实验室科研团队从俄罗斯远东地区的楚科奇自治区采集到一份冻土样本，证实了“西伯利亚阔口罐病毒”(Pithovirus Sibericum)的存在，其生存年代正是史前人类尼安德特人灭绝之时。',
            PI_scarletfever: '——在侵入部位及其周围组织引起炎性和化脓性变化<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%8C%A9%E7%BA%A2%E7%83%AD" target="_blank">猩红热</a>（英语：Scarlet Fever）为A群溶血性链球菌感染引起的急性呼吸道传染病。其临床特征为发热、咽峡炎、全身弥漫性鲜红色皮疹和疹退后明显的脱屑。少数患者患病后由于变态反应而出现心、肾、关节的损害。本病一年四季都有发生，尤以冬春之季发病为多。多见于小儿，尤以5-15岁居多。猩红热是由β（乙）型A群溶血性链球菌所引起的急性呼吸道传染病，也可引起扁桃体炎，丹毒，风湿热，心内膜炎及局部感染。临床以发热、咽峡炎、全身弥漫性猩红色皮疹和疹退后皮肤脱屑为特征。少数人在病后可出现变态反应性心、肾并发症。西医学认为，猩红热的主要病原体为A组β型溶血性链球菌，病原菌及其毒素在侵入部位及其周围组织引起炎性和化脓性变化，并进入血循环，引起败血症，致热毒素引起发热和皮疹。少数可见病毒性心肌炎、肾小球等病变；中医学认为，本病系痧毒疫疠之邪从口鼻而人，侵犯肺胃，郁而化热、化火。火热之毒发散，犯卫、人营、伤阴，从而形成邪侵肺卫，毒在气营，疹后伤阴三个病理阶段，若痧毒内陷，或余毒未尽，又可导致痧毒内陷心肝之变证。',
            PI_anthrax: '——炭疽杆菌曾被帝国主义作为致死战剂之一<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%82%AD%E7%96%BD%E6%9D%86%E8%8F%8C" target="_blank">炭疽</a>（英语：Anthrax）是由炭疽芽孢杆菌（Bacillus Authracis）引起的传染性疾病。该病是牛、马、羊等动物传染病，但偶尔也可传染给从事皮革、畜牧工作的人员，该细菌由Robert Koch在1877年首次发现。炭疽杆菌的芽孢可以抵御很强的紫外线,高温等恶劣环境,在适合的环境下,芽孢会从新开始活动,变成有感染能力炭疽杆菌。炭疽引起的疾病病以皮肤型多见。病症为身体外露部位出现小丘疹，继之形成水泡，破溃及坏死，最后形成黑色焦痂。同时可有全身不适、发热、头痛、呕吐等症状，可并发脑脊髓膜炎及败血症，因此，如不及时治疗则有生命危险。有效的治疗是应用大剂量青霉素。预防更不可忽视，重要的是严格控制有病的牲畜及其产品，其次是有关的职业人员注射炭疽疫苗。为什么炭疽杆菌会成为目前关注的焦点？主要在于它被用来作为生物武器。美国历史上已经有3人死于炭疽杆菌，13人被确认感染炭疽杆菌，近百人因接触过白色粉末而惶惶不安。进一步引发了美国民众对化学生物战的忧虑。民意调查说明，有80%美国人担心可能遭受化学生物武器的袭击，46%的人认为美国还没有做好防御化学生物武器袭击的准备。美国市场上的防毒面具、防毒服装、炭疽疫苗及各种类型的抗生素药物开始脱销。与此同时，一些关于生化战争以及如何应付生化武器袭击的书籍也开始在美国市场上供不应求。美国国防部于10月26日在五角大楼的3个主要进出口设置了6台化学生物武器探测器，以防恐怖分子利用化学生物武器对五角大楼发动袭击。美国食品和药物管理局（FDA）已将环丙沙星（Ciprofloxacin）作为治疗炭疽的推荐药品之一。美国国防部也为美国全体军人进行了全面注射炭疽疫苗。国防部与BioPort公司下属的密执安生物制品研究所（Michigan Biologic Products Institute）制定了炭疽疫苗生产合同。 ',
            PI_porphyria: '——卟啉症的患者的悲惨命运被怀疑是吸血鬼故事的起源<br>——画师：dairi<br><a class="pathogen" href="http://www.a-hospital.com/w/%E5%8D%9F%E5%95%89%E7%97%87" target="_blank">卟啉症</a>（英语：Porphyria）是由于血红素生物合成途径中的酶缺乏引起的一组疾病。卟啉或其前体如δ-氨基-r-酮戊酸（ALA）和胆色素原（PBG）生成，浓度异常升高,并在组织中蓄积，由尿和粪中排出。临床表现主要累及神经系统和皮肤。古希腊医生希波克拉底通常被认为是第一个认识到卟啉症的人，当时，他把这种疾病看作一种血液病或肺病。直到1871年，德国伟大的生物化学家菲利克斯.霍珀-塞勒才发现了卟啉色素同卟啉症之间的因果关系。1889年，B.J.斯托克维斯将一系列的临床症状统称为“卟啉症”，从此这种怪病的名称得以确立。 卟啉症有众多表现形式，比较常见的一种是急性间歇型卟啉症(AIP)，英国的“疯子国王”乔治三世就是这种疾病的受害者之一。最严重的卟啉症是先天红血球生成卟啉症(CEP)，它的患者的悲惨命运被怀疑是吸血鬼故事的起源。尽管卟啉症通常是由于基因突变所导致，但饮酒过度和环境污染也会诱发这种疾病。最臭名昭著的事例发生在上个世纪50年代的土耳其。大约有4000人在食用了喷洒过除真菌剂六氯苯的小麦后患上了一种类型的卟啉症，上百人因此丧生。在此之后不久，六氯苯除真菌剂就在全世界范围内被禁用。卟啉病分为遗传性和获得性两类，其中多数为遗传性。遗传性卟啉病有6种，其遗传方式、所产生卟啉或其前体物质的种类以及排泄途径各异，因而临床表现不同。卟啉病的临床表现主要有：皮肤光敏感现象，与卟啉的荧光特性有关，可造成皮肤损伤；神经系统异常，包括腹部绞痛、周围神经病变、麻痹、精神症状、昏迷等。引起神经症状的原因未明，但与卟啉前体物质（如ALA和卟胆原）的产生和排泄增多有关。对遗传性卟啉病尚无根治方法。可采取相应措施预防发作、保护皮肤和控制神经系统症状，及其他对症和支持疗法。<br>先天性红细胞生成性卟啉病，罕见的常染色体隐性遗传性疾病，以影响造红细胞组织为主。主要缺陷在于缺乏尿卟啉原辅合成酶，致幼红细胞生成过多的尿卟啉原。尿卟啉原不能合成血红素却能形成尿卟啉和粪卟啉等荧光性卟啉，在波长400nm的紫外光下可发出红色荧光，并能产生具有破坏性的光化学反应。幼儿期即开始排红色尿液，牙变黄或呈棕色，在紫外光下可发出红色荧光。阳光曝晒后的皮肤可发红、起泡、溃破，继而结疤，重者可致鼻、耳、指（趾）坏死和残缺。多数患者有轻度溶血性贫血伴脾肿大。多毛也常见。尿中尿卟啉、尿卟啉、粪卟啉增多，尤以尿卟啉增多明显。患者应避免日晒，有溶血者行脾切除术可减轻症状。',
            PI_streptococcus: '——能引起各种化脓性炎症以及链球菌变态反应性疾病的球菌<br>——画师：清水茜<br><a class="pathogen" href="http://www.a-hospital.com/w/%E8%82%BA%E7%82%8E%E9%93%BE%E7%90%83%E8%8F%8C" target="_blank">肺炎链球菌</a>（英语：Pneumococcus），又称肺炎双球菌，菌体矛头状、常成双排列的球菌。直径0.5～1.5微米。革兰氏染色阳性，但老龄菌常呈阴性反应。在机体内形成荚膜，经人工培养后荚膜逐渐消失，菌落由光滑型变为粗糙型。兼性厌氧菌，经常寄居在正常人鼻咽腔中，多数不致病，仅部分具有致病力，引起大叶肺炎、腹膜炎、胸膜炎、中耳炎、乳突炎以及败血症等。在含血的营养琼脂培养基上，37℃，24小时可形成细小、灰白、透明或半透明有光泽的扁平菌落，周围有草绿色溶血环。培养2～3天后，由于产生自溶酶，菌体自溶，菌落中央出现凹陷。胆汁、胆盐或其他活性物质能加速自溶酶的作用，使细菌在短期内溶解。其荚膜多糖抗原与致病力有密切关系，且成分复杂。根据荚膜多糖抗原的不同，可将其分为若干血清型，其中Ⅰ～Ⅲ型致病力较强，Ⅲ型最强，且具有厚的荚膜，可作为鉴别此菌的依据。在各型肺炎球菌中，许多遗传标记可被转移，种内和属内的相互转化作用也已证明。显微镜下的肺炎双球菌对于由肺炎双球菌感染的眼部疾病，可以用对其非常敏感的眼药水“玻璃酸钠滴眼液”来做为抗生素治疗使用。<br><a class="pathogen" href="http://www.a-hospital.com/w/%E9%93%BE%E7%90%83%E8%8F%8C">酿脓链球菌</a>（ 英语：Streptococcus Pyogenes ），即 A 群链球菌（ Group A streptococcus, GAS ），为 β 溶血、对杆菌肽敏感、 PYR 阳性，具有兰氏 A 群抗原。在血平板上形成大菌落，是人体的重要致病菌之一，可以引起很多种疾病，因此早期 GAS 还被称为丹毒链球菌（Streptococcus Erysipelatos）和猩红热链球菌（Streptococcus Scarlatinae）等。酿脓链球菌属链球菌科（ Streptoccaceae ）、链球菌属（ Streptococcus ）。GAS 目前已有 13 个全基因组序列，以 M1 型菌株（ SF370 ）为例 (1) ，其基因组大小为 1 ， 852 ， 442 个碱基对， G + C 含量为 38.5% ，是革兰氏阳性菌中属 G + C% 较低家族中的一员。基因组中共预测了 1 ， 752 个 ORF ，其中有 1 ， 282 个（ 83% ）与其他菌种已有的假想蛋白或同源蛋白相匹配，这些菌种包括枯草杆菌、乳酸乳球菌及其他链球菌。共有 79 个稳定的RNA基因，其中包括 6 个 rRNA操纵子。另外，将近 10% 的 ORF （ 176 个）与前噬菌体（ prophage ）或转座子基因有关，前噬菌体基因组共有四个，分别携带及编码不同的毒力基因如链球菌致热外毒素（SPE, streptococcal pyrogenic exotoxins ）。这些毒力基因一般位于噬菌体基因组的末端即整合位点附近，而且 G+C 含量在 26%~30% 之间，明显低于临近的噬菌体其他基因或整个染色体的平均 G+C% （ 38.5% ），说明这些基因可能是从其他菌获得 , 另外某些链球菌致热外毒素还与金黄色葡萄球菌的肠毒素具有同源性，但是这些基因的具体来源目前尚不清楚。 GAS 基因组中普遍存在的前噬菌体基因组可以使毒力基因水平转移，这种转移不仅可以产生高致病性菌株，而且对 GAS 的进化也具有非常重要的促进作用。',
            PI_papillomavirus: '——众人谈性色变的病原体，它的存在还与癌症诱发因素有关<br>——画师：日在校园<br><a class="pathogen" href="http://www.a-hospital.com/w/%E4%BA%BA%E4%B9%B3%E5%A4%B4%E7%98%A4%E7%97%85%E6%AF%92" target="_blank">乳头瘤病毒</a>（英语：Human Papilloma Virus，缩写：HPV），一种球形DNA病毒，广泛存在于自然界中，以人为唯一的宿主，非常耐受干燥并可以长期保存。目前仅已知的150多种HPV亚型，根据其引起的疾病的严重程度，可以分为低危型和高危型。疾病的临床症状包括各类皮肤疣，如寻常疣、扁平疣、跖疣等。此外，高危型HPV可以引起多种肿瘤，如宫颈癌、肛门癌、阴茎癌等。传播途径主要包括接触传播、性传播和母婴传播，其中性接触是最常见的感染途径。HPV人群普遍易感，但存在过早性交、性激素水平紊乱、免疫力低下、多个性伴侣、吸烟等因素的人更容易感染。防治方面，加强公共卫生宣传，增进性教育，减少非安全性行为。疫苗接种是目前防治HPV感染最有效的手段。尽早识别并及时治疗HPV感染也很重要，抗病毒药物和外科手术是常见的治疗方式。同时，定期筛查有助于早期定位HPV引起的各种肿瘤。<br>伊藤诚（いとう まこと；Itou Makoto）是Overflow于2005年出品的《School Days系列》游戏及其衍生作品同名动漫和漫画中的男主角，其动漫配音演员为平川大辅。伊藤诚是泽越止和伊藤萌子的长子，他还有一个妹妹伊藤止。伊藤诚是榊野学院1年3组的一名普通高中生，由于相貌英俊，性格温柔体贴。他在生活中深受异性的喜欢。又因为伊藤诚继承了其父不负责任的品质，家庭环境黑暗，因此造成了伊藤诚为情所困最终惨死的下场。由于《School Days》在Galgame领域的影响极大，0verflow在《School Days》之后又发售了《Summer Days》、《Cross Days》和《Island Days》等作品，分别讲述了伊藤诚与其他角色在另外几个平行世界中的故事。',
            PI_lactobacillusacetobacter: '——附着在牙齿表面，是导致诱发龋齿病的元凶之一<br><a class="pathogen" href="http://www.a-hospital.com/w/%E4%B9%B3%E9%85%B8%E8%8F%8C" target="_blank">乳酸菌</a>（英语：Lactobacillus）指发酵糖类主要产物为乳酸的一类无芽孢、革兰氏染色阳性细菌的总称。凡是能从葡萄糖或乳糖的发酵过程中产生乳酸的细菌统称为乳酸菌。这是一群相当庞杂的细菌，目前至少可分为18个属，共有200多种。除极少数外，其中绝大部分都是人体内必不可少的且具有重要生理功能的菌群，其广泛存在于人体的肠道中。目前已被国内外生物学家所证实，肠内乳酸菌与健康长寿有着非常密切的直接关系。乳酸菌是一种存在于人类体内的益生菌。乳酸菌能够将碳水化合物发酵成乳酸，因而得名。益生菌能够帮助消化，有助人体肠脏的健康，因此常被视为健康食品，添加在酸奶之内。在人体肠道内栖息着数百种的细菌，其数量超过百万亿个。其中对人体健康有益的叫益生菌，以乳酸菌、双歧杆菌等为代表，对人体健康有害的叫有害菌，以大肝杆菌、产气荚膜梭状芽胞杆菌等为代表。益生菌是一个庞大的菌群，有害菌也是一个不小的菌群，当益生菌占优势时（占总数的80%以上），人体则保持健康状态，否则处于亚健康或非健康状态。长期科学研究结果表明，以乳酸菌为代表的益生菌是人体必不可少的且具有重要生理功能的有益菌，它们数量的多和少，直接影响到人的健康与否，直接影响到人的寿命长短，科学家长期研究的结果证明，乳酸菌对人的健康与长寿非常重要。而人体肠道内乳酸菌拥有的数量，随着人的年龄增长会逐渐减少，当人到老年或生病时，乳酸菌数量可能下降100至1000倍，直到老年人临终完全消失。在平时，健康人比病人多50倍，长寿老人比普通老人多60倍。因此，人体内乳酸菌数量的实际状况，已经成为检验人们是否健康长寿的重要指标。现在，由于广谱和强力的抗菌素的广泛应用，使人体肠道内以乳酸菌为主的益生菌遭受到严重破坏，抵抗力逐步下降，导致疾病越治越多，健康受到极大的危胁。所以，有意增加人体肠道内乳酸菌的数量就显得非常重要。目前国际上公认的乳酸菌，被认为是最安全的菌种，也是最具代表性的肠内益生菌，人体肠道内以乳酸菌为代表的益生菌数量越多越好。也完全符合诺贝尔得奖者生物学家梅契尼柯夫“长寿学说”里所得出的结论，乳酸菌=益生菌等于长寿菌。人类面对抗生素的日渐无能为力的现状，正在不断寻求新的更加有效的生物抗菌产品，世界发达国家首先认识并开创了以使用乳酸菌为代表的免疫疗法革命。瑞典科学家研究发布的结果是，治疗胃和大肠炎症时直接喝乳酸菌比用抗生素更好，危险性几乎为零。而在日本，乳酸菌制品已占日本乳制品市场的85%以上，二十年来日本青年平均身高增加15厘米，人口平均寿命达85岁，居世界第一位。这都是乳酸菌制品所带来的直接健康功效。<br><a class="pathogen" href="https://baike.baidu.com/item/%E9%86%8B%E9%85%B8%E8%8F%8C?fromModule=lemma_search-box" target="_blank">醋酸菌</a>（英语：Acetobacter）醋酸菌是重要的工业用菌之一。醋酸菌的细胞为椭圆至杆状；单个、成对或成链；端毛或周毛；运动或不运动；革兰氏阴性；专性好氧菌，氧化各种有机物成有机酸及其它种氧化物。一般在乙醇或其它可氧化物的酵母煮液或酵母消化液培养基上生长旺盛。醋酸杆菌属的重要的特征是能将乙醇氧化成醋酸，并可将醋酸和乳酸氧化成CO2和H2O。有些菌株能够合成纤维素，其纤维素组成细胞壁外的基质，而细菌则埋置于纤维索微丝缠结的片层中。当这些种的细菌生长在静止的液体培养基中，它们就会在表面形成一层纤维素薄膜。醋酸菌是一种原核生物，以二分裂的形式来增殖。自然界中的醋酸菌分布广泛，在果园的土壤中、葡萄或酸败食物表面以及未灭菌的醋、果酒和啤酒中都有生长。代谢类型属于异养需氧型，故在发酵过程中一直需要氧气的参与。醋酸菌在发酵工程中常用来酿醋。',
            PI_leprosy: '——它悄然吞噬肌肤与神经，终将鲜活的生命拖入残缺与孤寂的深渊<br>——画师：dairi<br><a class="pathogen" href="http://www.a-hospital.com/w/%E9%BA%BB%E9%A3%8E" target="_blank">麻风</a>（英语：Leprosy）是由麻风杆菌引起的一种慢性接触性传染病。主要侵犯人体皮肤和神经，如果不治疗可引起皮肤、神经、四肢和眼的进行性和永久性损害。麻风病的流行历史悠久，分布广泛 ，给流行区人民带来深重灾难。要控制和消灭麻风病，必须坚持“预防为主”的方针，贯彻“积极防治，控制传染”的原则，执行“边调查、边隔离、边治疗”的做法，积极发现和控制传染病源，切断传染途径，同时提高周围自然人群的免疫力，对流行地区的儿童、患者家属以及麻风菌素及结核菌素反应均为阴性的密切接触者给予卡介苗接种，或给予有效的化学药物进行预防性治疗。麻风病是一种毁容的疾病，在世界范围内曾是一种常见的病，甚至《圣经》里也曾提到过麻风病。患者多处发生溃疡，并可导致残疾。儿童最容易患这种病，感染这种病后要过2---7年才会发病。由麻风病造成的足部的毁损。麻风病人经过治疗能完全康复。在世界上许多地方，麻风病不能被治愈的原因主要是没钱或缺乏药物。挪威医生格哈特·亨里克·阿莫尔·汉森（Gerhard Henrik Armauer Hansen，1841～1912年）在1868年开始研究麻风病。这种病常常累及一个家庭中的多个成员，许多医生怀疑它可能是遗传性疾病。然而当汉森检查了几个病例的病史后注意到，一旦家庭分裂或家庭成员分居，其他成员就不会患病。所以，麻风病不可能是遗传病。麻风病村的设立是因为麻风病具传染性。但经几个月的治疗，病人应能回到家中和家人一起生活。根据巴斯德的研究成果，汉森寻找麻风病的致病菌。1873年，他发现了麻风杆菌，并确认是它导致了麻风病。尽管他不能证明两者之间的直接联系，他还是说服了政府：因为麻风病是传染性的，应该将麻风病人隔离起来。直到发现了磺胺，才有了治愈麻风病的方法。麻风杆菌很难被杀死，需要箕服用几种药物。目前世界上仍然有1000万---1500万麻风病人，主要分布在非洲、亚洲和拉丁美洲的热带地区。',
            PI_mycoplasmachlamydia: '——悄无声息地侵袭泌尿生殖系统甚至眼睛，造成难以挽回的后果<br><a class="pathogen" href="http://www.a-hospital.com/w/%E6%94%AF%E5%8E%9F%E4%BD%93" target="_blank">支原体</a>（英语：Mycoplasma）：又称霉形体，为目前发现的最小的最简单的原核生物。支原体细胞中唯一可见的细胞器是核糖体（支原体是原核细胞，原核细胞的细胞器只有核糖体）。支原体是在1898年发现的，是一种简单的原核生物。其大小介于细菌和病毒之间。支原体结构也比较简单，多数成球形，没有细胞壁，只有三层结构的细胞膜，故具有较大的可变性。支原体可以在特殊的培养基上接种生长，用此法配合临床进行诊断。与泌尿生殖道感染有关的主要是分解尿素支原体和人型支原体两种，约有20-30%的非淋菌性尿道炎的病人，是由以上两种支原体引起的，是非淋菌性尿道炎及宫颈炎的第二大致病菌。在成年人的泌尿生殖道中分解尿素支原体和人型支原体感染率主要与性活动有关，也就是说，与性交次数的多少、性交对象的数量有关，不管男女两性都是如此。据统计女性的支原体感染率更高些，说明女性的生殖道比男性生殖道更易生长支原体。另外，分解尿素支原体的感染率要比人型支原体的感染率为高。<br><a class="pathogen" href="http://www.a-hospital.com/w/%E8%A1%A3%E5%8E%9F%E4%BD%93" target="_blank">衣原体</a>（英语：Chlamydia）为革兰氏阴性病原体，在自然界中传播很广泛。它没有合成高能化合物ATP、GTP的能力，必须由宿主细胞提供，因而成为能量寄生物，多呈球状、堆状，有细胞壁，以一般寄生在动物细胞内。从前它们被划归病毒，后来发现自成一类。它是一种比病毒大、比细菌小的原核微生物，呈球形，直径只有O.3-0.5微米，它无运动能力，衣原体广泛寄生于人类，哺乳动物及鸟类，仅少数有致病性。衣原体可分为4种，即肺炎衣原体、鹦鹉热衣原体、沙眼衣原体和牛衣原体。衣原体为革兰阴性病原体，是一类能通过细菌滤器、在细胞内寄生、有独特发育周期的原核细胞性微生物。衣原体是一种比细菌小但比病毒大的生物，是专性细胞内寄生的、近似细菌与病毒的病原体，具有两相生活环。它没有合成高能化合物ATP、GTP的能力，必须由宿主细胞提供，因而成为能量寄生物，多呈球状、堆状，有细胞壁，有细胞膜，属原核细胞，一般寄生在动物细胞内。区分为沙眼、肺炎、鹦鹉与家畜等四种衣原体。',
            PI_rickettsia: '——通过节肢动物隐匿传播，引发高热、皮疹多器官损伤，严重时可致命的病原<br><a class="pathogen" href="http://www.a-hospital.com/w/%E7%AB%8B%E5%85%8B%E6%AC%A1%E6%B0%8F%E4%BD%93" target="_blank">立克次氏体</a>（英语：Rickettsia）是介于最小细菌和病毒之间的一类独特的微生物，它们的特点之一是多形性，可以是球杆状或杆状，还有时出现长丝状体。立克次体长0.3微米～0.8微米，宽0.3微米～0.5微米，丝状体长可达2微米。一般可在光学显微镜下观察到。立克次体可引起多种疾病，临床表现为起病突然，持续一至几周发热，头痛，疲乏，虚脱，外周血管炎以及大多病例具有的典型皮疹。立克次体病包括4组：斑疹伤寒---流行性斑疹伤寒，Brill-Zinsser病，鼠（地方性）斑疹伤寒和恙虫病；斑点热---落基山斑点热，东方蜱传立克次体病和立克次体痘；寇热和战壕热。埃里希体病是由埃里希体属微生物（一种类立克次体）引起的，经蜱传染给人。立克次体目大多成员为严格细胞内寄生多形性的球杆菌。虽然它们需生长在活细胞内，但它们是真正的细菌，因为它们具有代谢酶，细胞壁，需氧和对抗生素敏感。大多立克次体通过在动物宿主和可感染人类的昆虫媒介（通常为节肢动物）之间的循环存在于自然界。由于许多立克次体的生长只局限于某些地理区域，因此病人的居住地或新近的旅游处等信息常有助于诊断。某些立克次体在节肢动物吸附处增殖，产生局部损伤（焦痂）再穿过皮肤或粘膜，在小血管内皮细胞中增殖，引起内皮细胞增殖，血管周围渗出和血栓等血管炎。血管内膜炎引起出疹，脑症状和皮肤，组织的坏疽。立克次氏体是一类严格的活细胞内寄生的原核细胞型微生物。它的许多生物学性状接近细菌，比如：有与细菌相似的细胞壁结构，也是一个分成两个，两个分成4个的二分裂方式繁殖，它有比较复杂的酶系统，对多种抗生素敏感，等等。它能引起人类患病，如引起斑疹伤寒、斑点热、恙虫病等；它与一些昆虫关系密切，如森林蜱、体虱，都可以是立克次体的宿主或储存宿主，通过它们作为传播媒介而感染人。这种微生物为什么叫立克次氏体呢？这与发现它的故事以及为此献身的人有关系。立克次氏体是1909年国病理学副教授立克次(Howard Taylor Ricketts, 1871–1910), 在研究落基山斑疹热时首先发现的。第二年，他不幸因感染斑疹伤寒而为科学献身。1916年罗恰.利马首先从斑疹伤寒病人的体虱中找到，并建议取名为普氏立克次氏体，以纪念从事斑疹伤寒研究而牺牲的立克次和捷克科学家普若瓦帅克。1934年，我国科学工作者谢少文首先应用鸡胚培养立克次体成功，为人类认识立克次氏体做出了重大的贡献。立克次氏体也是个庞大的家族，科学家把它们分为3个属，12个种。它们有些与动物有关，有些与人类有关。',
            PI_ringvirus: '——在来到现实世界后，突变为了转移性人类癌症病毒<br>——画师：铃木光司<br><a class="pathogen" href="https://baike.baidu.com/item/ring%E7%97%85%E6%AF%92/8920046#:~:text=RING%E7%97%85%E6%AF%92%E5%8F%88%E7%A7%B0%E9%93%83%E7%97%85%E6%AF%92%EF%BC%88Ring%EF%BC%89%EF%BC%8C%E5%87%BA%E8%87%AA%E6%97%A5%E6%9C%AC%E7%A7%91%E5%B9%BB%E5%B0%8F%E8%AF%B4%E3%80%8A%E7%8E%AF%E7%95%8C%E3%80%8B%E5%8F%8A%E5%85%B6%E6%94%B9%E7%BC%96%E6%81%90%E6%80%96%E7%94%B5%E5%BD%B1%E3%80%8A%E5%8D%88%E5%A4%9C%E5%87%B6%E9%93%83%E3%80%8B%EF%BC%8C%E6%98%AF%E4%B8%80%E7%A7%8D%E7%8E%AF%E7%8A%B6%E7%97%85%E6%AF%92%EF%BC%8C%E7%94%B1%E8%B4%9E%E5%AD%90%E7%9A%84%E9%81%97%E4%BC%A0%E5%9F%BA%E5%9B%A0%E4%B8%8E%E5%A4%A9%E8%8A%B1%E7%97%85%E6%AF%92%E6%9E%84%E6%88%90%EF%BC%8C%E5%9C%A8%E7%8E%AF%E7%95%8C%E4%B8%AD%E5%8F%AF%E7%BB%8F%E7%94%B1%E5%BD%95%E5%83%8F%E5%B8%A6%E6%88%96%E6%96%87%E5%AD%97%E7%AD%89%E5%BD%A2%E5%BC%8F%E4%BC%A0%E6%92%AD%EF%BC%8C%E5%B9%B6%E5%9C%A8%E6%9D%A5%E5%88%B0%E7%8E%B0%E5%AE%9E%E4%B8%96%E7%95%8C%E5%90%8E%E7%AA%81%E5%8F%98%E4%B8%BA%E4%BA%86%E8%BD%AC%E7%A7%BB%E6%80%A7%E4%BA%BA%E7%B1%BB%E7%99%8C%E7%97%87%E7%97%85%E6%AF%92%E3%80%82,RING%E7%97%85%E6%AF%92%E6%98%AF%E8%B4%9E%E5%AD%90%E5%88%9B%E9%80%A0%E7%9A%84%E4%B8%80%E7%A7%8D%E7%97%85%E6%AF%92%E3%80%82%20%E8%B4%9E%E5%AD%90%E5%9C%A8%E7%96%97%E5%85%BB%E9%99%A2%E4%B8%AD%E7%9C%8B%E6%9C%9B%E8%BA%AB%E6%82%A3%E8%82%BA%E7%BB%93%E6%A0%B8%E7%9A%84%E7%88%B6%E4%BA%B2%E6%97%B6%EF%BC%8C%E8%A2%AB%E7%96%97%E5%85%BB%E9%99%A2%E4%B8%AD%E7%9A%84%E5%A4%A9%E8%8A%B1%E7%97%85%E4%BA%BA%E5%BC%BA%E5%A5%B8%E8%80%8C%E6%84%9F%E6%9F%93%E4%BA%86%E5%A4%A9%E8%8A%B1%E7%97%85%E6%AF%92%E3%80%82" target="_blank">铃病毒</a>（英语：Ring Virus），出自日本科幻小说《环界》及其改编恐怖电影《午夜凶铃》，是一种环状病毒，由贞子的遗传基因与天花病毒构成，在环界中可经由录像带或文字等形式传播，并在来到现实世界后突变为了转移性人类癌症病毒。 铃病毒是贞子创造的一种病毒。 贞子在疗养院中看望身患肺结核的父亲时，被疗养院中的天花病人强奸而感染了天花病毒。',
            PI_hantavirus: '——汉坦病毒所过之处，尽是脏腑的衰败，病患的绝望与疫景的疮痍<br><a class="pathogen" href="http://www.a-hospital.com/w/%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92" target="_blank">汉坦病毒</a>（英语：Hanta Virus）归属布尼亚病毒科，是一种有包膜分节段的负链RNA病毒，基因组包括L、M、S 3个片段，分别编码L聚合酶蛋白、G1和G2糖蛋白、核蛋白。汉坦病毒包括引起肾综合征出血热(HFRS)的汉滩病毒(Hantaan Virus,HTNV)、汉城病毒(Seoul Virus,SEOV)、普马拉病毒(Puumala Virus,PUUV)、多不拉伐病毒(Dobrava Virus,DOBV)，引起汉坦病毒肺综合征(HPS)的无名病毒(Sin Nombre Virus,SNV)、纽约病毒(New York Virus,NYV)、污黑小河沟病毒(Black Creek Canal Virus,BCCNV)、牛轭湖病毒(Bayou Virus,BAYV)、安第斯病毒(Andes Virus,ANV)以及与人类疾病关系尚不清楚的一组病毒，如希望山病毒(Prospect Hill Virus,PHV)、泰国病毒(Thailand Virus,THAIV)、图拉病毒(Tula Virus,TULV)、索托帕拉雅病毒(Thottapalayam Virus,TPMV)、哈巴罗夫斯基病毒(Khabarovsk Virus,KBRV)、El Moro Canyon病毒(ELMCV)、Rio Segundo病毒(RIOSV)、岛景病毒(Isla Vista Virus,ISLAV)、Muleshoe病毒(MULEV)、Bloodland lake病毒(BLLLV)、Rio Mamore病毒(RMV)、Topografov病毒(TOPV)等。近年来随着新技术的应用和新型病毒的发现，汉坦病毒及其相关疾病的研究得以飞速发展。1998年3月～7日，第四届国际HFRS和汉坦病毒会议在美国亚特兰大市召开，与会的世界各国学者和专家交流了这一领域的最新研究方法和研究成果。',
            PI_lassavirus: '——存于西非的致命瘟疫，从血液逐渐侵蚀各个器官系统，最终夺走鲜活的生命<br><a class="pathogen" href="http://www.a-hospital.com/w/%E6%8B%89%E6%B2%99%E7%83%AD" target="_blank">拉沙热</a>（英语：Lassa Fever）是一种急性、传染性强烈的国际性传染病。是由拉沙病毒（英语：Lassavirus）引起，主要经啮齿类动物传播的一种急性传染病，主要流行于尼日利亚、利比亚、塞拉利昂、几内亚等西非国家。因首例于1969年在尼日利亚东北地区的拉沙镇发现而得名。拉沙病毒属沙粒病毒科广沙粒病毒一般和啮齿类宿主的慢性感染有关。拉沙热的发病机制尚未完全阐明。目前认为拉沙病毒可通过损伤的皮肤或黏膜侵入，进入淋巴系统和血液循环。病毒在咽部淋巴组织内增殖，出现咽炎症状。导致多器官损伤的主要机制为病毒直接作用，以肝损伤最常见。出血原因主要为血小板和内皮细胞功能丧失所致。拉沙病毒可感染人树突状细胞(DC)和巨噬细胞(MP)，但不引起DC、MP细胞凋亡。拉沙热患者血清中炎性介质升高，如IL-8、干扰素诱导蛋白-10(IP-10)、IFN-γ、IL-12、IL-6、RANTES等。在致死性患者中，IL-8水平较低或检测不到。IP-10可通过抑制内皮细胞功能，趋化T细胞和NK细胞参与感染和休克。重症病例表现为细胞免疫反应受到抑制。本病病例尸检资料较少，现有的少数病理所见多为非特异改变。肝脏为主要靶器官。肝脏肿大、切面苍白。肝索和肝窦状隙可见凋亡小体。电镜下肝脏细胞内可见大量的拉沙病毒颗粒。肝细胞质致密可见嗜酸性包涵体，胞核固缩或消失。肝小叶内点、灶状坏死、出血，但其网状组织构架完好。炎症细胞较少，可见到枯否细胞。心、肺、肾、脑等器官可见充血、水肿。淋巴结单核吞噬细胞增生，皮质、滤泡淋巴细胞减少。拉沙热潜伏期约6-21天。起病缓慢，症状包括全身不适、发热、咽痛、咳嗽、恶心、呕吐、腹泻、肌痛及胸腹部疼痛，发热为稽留热或弛张热，常见眼部和结膜的炎症和渗出。约80%的人类感染表现为轻症或无症状，其他表现为严重多系统疾病。疾病在妊娠期尤为严重，超过80%的孕妇可发生流产。严重病例常发生低血压或休克、胸腔积液、出血、癫痫样发作、脑病、脸病和颈部水肿，也常伴有蛋白尿和血液浓缩。恢复期可发生暂时性脱发和运动失调。25%的病人可发生第八脑神经性耳聋，1-3个月后仅半数病人可恢复部分功能。总病死率约为1%,住院病死率接近15%，在一些流行区病死率更高。妊娠第3个月妇女和胎儿病死率尤高。谷草转氨酶高于150和高病毒血症者，预后较差。',
            PI_vibriovulnificus: '——人类感染疾病之三大弧菌之一，是一种截肢率和死亡率双高的致命细菌<br><a class="pathogen" href="https://baike.baidu.com/item/%E5%88%9B%E4%BC%A4%E5%BC%A7%E8%8F%8C?fromModule=lemma_search-box" target="_blank">创伤弧菌</a>（英语：Vibrio Vulnificus）也叫海洋弧菌，与霍乱弧菌、肠炎弧菌并列为人类感染疾病之三大弧菌之一，是一种截肢率和死亡率双高的疾病，它的致死率很高。根据相关文献显示，48小时内死亡率会达到50%以上，如果超过72小时未接受有效治疗，感染的死亡率将会趋近100%。 创伤弧菌是一种生活在海洋里的细菌，多漂浮在海水中或附着在海鱼、海虾、牡蛎、螃蟹等海洋生物上。生吃携带创伤弧菌的海产品，或肢体破损创口接触带菌海水，或被带菌的海产品刺伤等都容易被感染。如果伤口暴露在含有这种细菌的海水中，创伤弧菌会在伤口上繁殖，可能引发溃烂，甚至导致组织坏死。 若食用了遭污染的海鲜，也有罹患肠胃炎的可能。在2003年12月，中国台湾卫生研究院主导的基因体定序团队，完成了创伤弧菌的基因体定序与分析工作。',
            PI_yellowfever: '——一种长期威胁欧洲殖民者的疾病<br><a class="pathogen" href="http://www.a-hospital.com/w/%E9%BB%84%E7%83%AD%E7%97%85" target="_blank">黄热病</a>（Yellow Fever），又俗称“黄杰克”、“黑呕”，是由黄热病病毒所致的急性传染病，主要媒介在城市是埃及伊蚊，在农村为趋血蚊和非洲伊蚊，传播途径是经蚊的叮咬。黄热病是由黄热病病毒引起的急性传染病，埃及伊蚊是主要传播媒介。国际上将黄热病定为检疫传染病，我国也将其定为甲类传染病。迄今为止，我国尚无病例的报道。有记载的人间流行已有几百年，历史上流行地区曾波及南美、北美、非洲及欧洲，对人类造成了极大灾难。1907年继天花、鼠疫、霍乱后被当时《国际卫生公约》列为国际检疫传染病。自本世纪始，黄热病发生局限在中、南美洲及非洲中部地区。40年代至60年代疫情曾一度处于相对静息状态，流行次数与病例总数大为减少。但近10几年来，非洲地区的黄热病流行再次引人注目。为此，世界卫生组织已号召有关政府、部门和机构行动起来与黄热病作斗争。我国福建、广东、海南等地存在着该病的传播媒介，一旦传人有潜在的流行危险。而世界各地赴南美、非洲等黄热病流行区工作、旅行的人员因感染黄热病而死亡的病例时有报道。故在我国保持对黄热病的警惕十分必要。病原为<a class="pathogen" href="https://baike.baidu.com/item/%E9%BB%84%E7%83%AD%E7%97%85%E7%97%85%E6%AF%92?fromModule=lemma_search-box" target="_blank">黄热病病毒</a>（Yellow Fever Virus），属黄病毒科（Family Flaviviridae）的黄病毒属（Genus Flavivirus），（过去的虫媒病毒B组）与同属的登革热病毒等有交叉免疫反应。病毒颗粒呈球形，直径37～50nm，外有脂蛋白包膜包红，包膜表面有刺突。病毒基因组为单股正链RNA，分子量约为3.8×106，长约11kb，只含有一个长的开放读码框架，约96%的核苷酸在此框架内。黄病毒基因组分为二个区段：5＇端1/4编码该病毒3个结构蛋白，即C蛋白（衣壳蛋白）、M蛋白（膜蛋白）和E蛋白（包膜蛋白）；3＇端3/4编码7个非结构蛋白。基因组的5＇端和3端均有一段非编码区。 E蛋白是主要的包膜糖蛋白，含有病毒血凝素和中和抗原决定簇，可能是某些宿主细胞表面受体的配体，当它与受体结合，可对细胞产生感染。E蛋白樘可能是一种膜融合蛋白，可诱导病毒颗粒的包膜与细胞膜融合，促使病毒颗粒进入细胞而引起感染。M蛋白能导致病毒的感染性增加，并形成病毒颗粒的表面结构。非结构蛋白的作用尚不十分清楚，在病毒免疫反应中可能起重要作用。黄热病病毒有嗜内脏如肝、肾、心等（人和灵长类）和嗜神经（小鼠）的特性。经鸡胚多次传代后可获得作为疫苗的毒力减弱株。易被热、常用消毒剂、乙醚、去氧胆酸钠等迅速灭活，在50%甘油溶液中可存活数月，在冻干情况下可保持活力多年。小鼠和恒河猴是常用的易感实验动物。<br><a class="pathogen" href="http://www.a-hospital.com/w/%E5%AF%A8%E5%8D%A1%E7%97%85%E6%AF%92" target="_blank">寨卡病毒</a>（Zika Virus，Zika是乌干达语，意思是杂草）属黄病毒科，黄病毒属，是一种通过蚊虫进行传播的虫媒病毒。被感染后的常见征状包括发烧、红疹、关节疼痛、肌肉疼痛、头痛和结膜炎(红眼)。其病情通常较温和，征状可持续数日至一周。需要住院治疗的严重病情并不常见。目前没有药物可以预防和治疗寨卡热。寨卡病毒最早于1940年代在非洲被发现，此后也传播到东南亚、太平洋岛国和美洲地区。由于传播该病毒的伊蚊在全世界都可以找到，病毒的爆发很可能会传播到更多国家。此前，世界卫生组织已表示，来自全球的调查人员正在调查寨卡病毒与出现在巴西的新生儿小头畸形之间的联系。过去一年左右的时间中，数以千计当地出生的婴儿头部大小不正常。由于担心当前在蚊虫传播的寨卡(Zika)病毒可能导致新生婴儿畸形并留下后遗症，美国疾病防治中心(CDC)对加勒比海和拉美8个国家或领地发布旅行警报，建议孕妇避免前往报告有寨卡病毒传染的地区。目前，已有22个国家和领地被列为旅游警告名单。寨卡病毒通过蚊虫叮咬传播。被感染后的常见征状包括发烧、疹子、关节疼痛、肌肉疼痛、头痛和结膜炎(红眼)。其病情通常较温和，征状可持续数日至一周。需要住院治疗的严重病情并不常见。',
            PI_bubonicplague: '——它化作死神，在鸦群的注视下，将人命如麦草般收割，使墓堆上长绕着凋零的玫瑰<br>——画师：天行木羽<br><a class="pathogen" href="https://baike.baidu.com/item/%E4%BC%A6%E6%95%A6%E5%A4%A7%E7%98%9F%E7%96%AB/8735930" target="_blank">伦敦大瘟疫</a>（英语：Great Plague of London）是一场1665年至1666年间发生在英国的大规模传染病暴发事件，超过8万人死于这次瘟疫之中，足足相当于当时伦敦人口的五分之一。该次的疾病后来被确认为是淋巴腺鼠疫（英语：Bubonic Plague），一种由鼠疫杆菌造成并以跳蚤为载体的细菌感染。伦敦大瘟疫与1347年至1353年期间侵袭全欧洲，并导致最少7,500万人死亡的黑死病相比规模要小得多，这场前后扰攘大约一年的流行病被人们形容为大灾难的原因，很大程度是由于它已经是英国本土最后一次广泛蔓延的鼠疫，之后随着英国政府着手改善地区卫生条件，鼠疫对英国民众的威胁也逐渐消失。伦敦大瘟疫是英国本土最后一次大型的鼠疫传播，此前在1636年及1625年发生过的两次则分别夺去了一万和三万五千人的性命。当时英国的鼠疫爆发被认为是由荷兰带入的，因为该地从1599年起就多次出现鼠疫疫情，最初进入英国的病源很可能便是那些从阿姆斯特丹开出的运送棉花的商船，而阿姆斯特丹本身在1663年至1664年亦同样受鼠疫蹂躏，死亡民众不少于5万人。伦敦外围的码头地区以及圣贾尔斯（St. Giles）教区首先遭殃，在这两处地方生活的穷困工人成为了鼠疫肆虐的第一群牺牲者，由于社会最低下阶层的患者都没有被关注和记录，因此伦敦大瘟疫的首宗正式个案是在1665年4月12日确诊的女子丽蓓嘉．安德鲁斯（Rebecca Andrews）。同年7月，疫病已经进入伦敦内城区，时任英王查理二世连忙带同家人和宫廷逃到牛津郡避难。虽然如此，伦敦市市府参事（the aldermen，地位仅次于市长）和其他主要当局官员都选择了谨守岗位，伦敦市长罗伦斯先生（Sir John Lawrence）本人亦决定继续留守在城中。当时伦敦市面上的绝大多数商业活动陷入瘫痪状态，因为富商们和各行各业的职人都已经纷纷撤离；只有少数品格高尚的牧师、医生和药剂师愿意留下来，在疫症肆虐的整个夏天里协助其他民众生活。决意留下来与城市共患难的民众里面还包括了日记作者塞缪尔·佩皮斯（Samuel Pepys）以及住在东伦敦的马鞍匠亨利·科尔（Henry Foe）：佩皮斯在他的日记簿里面记下大瘟疫时期伦敦生活的点点滴滴；而科尔的外甥恰巧是《鲁宾逊漂流记》作者丹尼尔·狄福（Daniel Defoe），他在1722年推出的纪实小说经典《大疫年纪事》（A Journal of the Plague Year）便很可能源自当时亲历其境的科尔舅父的手稿。在瘟疫高峰之时，鼠疫医师（Plague doctors）每日都自发性地穿街过巷为病者们诊断，尽管他们中许多都欠缺西医公会的执业资格。另外，多项关于公众健康的措施都被英国政府陆续尝试过，其中有些对日后公共医疗机构的成立颇有建树，但好些却只是单纯的盲目之举，印证了当时的瘟疫情况其实已经到了刻不容缓、等不了仔细分析利弊的危急存亡之际。首先，市政府开始聘用公立医生为大众服务，官方亦有组织地处理尸体埋葬以防止疫症扩散，然而恐慌情绪仍然在整座城市的民间挥之不去，由于市民害怕直接接触而受感染，遗体往往只会被草率地丢在马路旁边挤满死尸的大坑仓促了事。其次，市议会严格下令扑杀所有猫、狗（其时仍未认清病源），这个愚蠢的决定后来被证实是徒劳无功，因为真正的罪魁祸首——老鼠的数量反而因为天敌猫、狗不在而变得更加不受控。第三，当局发出指示要日以继夜地在城区内燃烧大火，企图借此令空气变得洁净。第四，官方同时在街头焚烧各种具有强烈气味的物质，如辣椒、啤酒花和乳香，并且强烈敦促市民吸食烟草以吐出烟雾，希望凭这些物质抵御细菌在市内散播。当局的有关政策收效并不明显，根据记录指出伦敦的死亡人数仍旧在不断攀升，从每星期1,000名牺牲者升到每星期2,000人死亡。到了1665年9月以后，每周更有7,000人死于疫病之中。情况一直至到冬季降临才有转变，死亡人数开始逐步放缓。翌年2月，国王查理二世认为首都的疫情已经受到控制，于是便与一众随行人员班师返回伦敦。不过，由于英国在瘟疫期间并没有放弃外贸，中断与欧洲大陆的商务来往，使到法国在接下来的冬天马上遭殃，爆发出新一轮的鼠疫。虽说疫情主要集中在伦敦市，但亦渐渐影响到英国的其他区域，最有名的例子包括打比郡的小镇亚姆。有争论指，瘟疫是在1665年8月跟着来自伦敦的衣料商人抵达当地的。村民们当机立断，随即自行实施隔离，断绝所有对外的运输往来和接触，以阻止这种疾病进一步蔓延，由于这做法收效良好，最终鼠疫的传播迹象在亚姆的周边地区开始减缓，没有再进一步向北侵袭。可惜的是亚姆本身却付出了惨痛的代价，村内75%左右的居民死于该场瘟疫之中。伦敦区的鼠疫个案也没完全停下来，而是继续零星地出现。直至1666年9月2日的伦敦大火摧毁了伦敦市中心的大部分地方，持续了4日4夜的漫天大火连伦敦地标圣保罗大教堂也烧掉，大约在同一时间，鼠疫疫情亦告彻底消失。但普遍认为这只是一个偶发的巧合，鼠疫的灭绝与那场大火并没有直接的关系，因为它在火灾前就已经有绝迹的趋势；而且持续的零星个案都发生在伦敦的郊区地方，与受火灾影响的市中心位置并不吻合。',
            PI_athenianplague: '——它如地狱使者，踞于恶泉之源，吹起地狱的焚风，化人间骸骨作炼狱焦土<br><a class="pathogen" href="https://baike.baidu.com/item/%E9%9B%85%E5%85%B8%E5%A4%A7%E7%98%9F%E7%96%AB?fromModule=lemma_search-box" target="_blank">雅典大瘟疫</a>（英语：Athenian Plague）发生在伯罗奔尼撒战争的第二年。这场瘟疫是人类历史上记载较详尽的最早的一次重大疾病。根据修昔底德的推测，瘟疫传播路线源于上埃及的埃塞俄比亚，然后传播到埃及本土和利比亚，以及波斯国王的大部分领土。 根据《剑桥医学史》记载，公元前430年席卷整个雅典的瘟疫导致了雅典一半以上的居民和四分之一的城邦军队的死亡，直接导致了雅典民主政治的衰落。重创雅典的瘟疫源头来自于埃塞俄比亚南部，随后经埃及传入波斯帝国，又通过爱琴海的商路传入欧洲。最后从比雷埃夫斯港蔓延到雅典。公元前430年夏季，39℃-40℃高温席卷全城。城外的雅典公民纷纷携家带口，赶着牲畜躲入城区范围，使得城邦内人口迅速超过了20万。由于城内住宅普遍狭小，排水系统的效率也比较有限，让城市的卫生压力随之暴增。还有人居无定所，来到卫城山下聚居。由此产生的人畜混杂和公共用水困难，都在为外来瘟疫的爆发推波助澜。此后，疫情就在雅典城内疯狂传播。据记载，病人往往从头部高烧等症状开始，并随病情恶化而转移到胸部。然后伴随着腹部疼痛、呕吐和痉挛，出现肠道的严重溃烂与腹泻。到病人生命的最后阶段，患者会突然拥有超越常人的大力，直至将自身体力耗尽为止。整个疾病会持续7-9日，虽然医生觉得病人身体不热，但患者自己却感到遭到火烧。以至于他们根本不愿穿衣服，只想裸体跳入冷水中降温。这一过程又会污染公共水源。虽然有人能靠免疫力等因素幸存，但轻则失去记忆，重则失去手指、脚趾、视力或者生殖器。从而变成生活困难的残疾人。后世学者对这次疾病的解释包括鼠疫、麻疹、流感、天花、呼吸道疾病或斑疹伤寒，但当代都没有能让所有人信服的结论。虽然雅典人在疾病爆发的初期就开展积极自救，但医护人员因缺乏防疫护具而纷纷中招。随后，又将疾病的源头归于太阳神阿波罗，从而得出斯巴达对手有神明庇护。对于一个身处长期鏖战的国家来说，这种无可避免的丧气也有着很大负面因素。很快，关于疫情的阴谋论也纷纷出炉，怀疑有伯罗奔尼撒间谍在城内故意放毒。斯巴达军队虽然毫不知情，但在发现疾病的烈度非比寻常后，也在短时间内对雅典敬而远之。这种非常自然的自保措施，却被风声鹤唳的雅典守军看在眼里。当疫情因雅典自身问题而无法得到有效遏制，民众的愤怒情绪就只能发泄在同胞身上。在疾病肆虐的三年里，社会的公序良俗遭到极大践踏。比如因缺乏财力和人手运送尸体，很多人一反常态地将死去亲人放到别家焚尸堆上火化。由于发现一些富裕公民去世，入室抢劫的案例也明显增多。而对于尚未病死的亲人，健康者也开始不敢去照料他们，只能放任其自生自灭。更有大量针对富人发起的诉讼案件，目的是趁机瓜分多余财富。但在获得财富之后，因觉得自己朝不保夕，所以又倾向于用花天酒地大肆挥霍。更为讽刺的是，古希腊人的保守思维明显比中世纪后代更为顽固。人们相信自己离开城邦，就会被视为野兽或者鬼神。所以宁可继续在危险的疫区居住，也不会轻易地放弃城中的住宅。因此，类似后世黑死病时代的那种大规模疏散就根本不可能出现。随着公民阶级的巨大损失，雅典的对外军事行动也遭严重削弱。比如围攻波迪提亚的4000重装步兵，就有1500人死于病患。相比之下，斯巴达人得以花更多的时间蹂躏雅典城郊，加剧对手的后勤问题。在公民兵严重不足的前提下，城邦只能加大对雇佣军人的使用比例。作为国之重器的舰队，也只能更多的采用贫民或者无地群氓作为桨手。这对后来的雅典内部政治生态，将会造成破坏性的结构改变。到公元前427年，肆虐雅典的瘟疫渐渐平息。困居城内的希波克拉底，一面积极调查疫情，同时探寻病因及解救方法。不久，他发现全城只有与火打交道的铁匠非常健康。由烈焰产生的隔绝与净化空气效果，让“医学之父”希波克拉底幸运地找到了遏止手段。于是，他让雅典民众在街头燃烧带有香味的植物，利用香油的成分净化空气。这个简单易行的招数，还会在之后的千年时间里，成为预防瘟疫的重要手段。雅典的这次瘟疫终究带走了接近1/4人口。但当局依旧坚持与斯巴达作战，而且没有立即出现崩溃迹象，体现了雅典城邦的强大组织能力。只是因疾病造成的永久性损失，很难依靠战术胜利来获得弥补。',
            PI_nyancatvirus: "——你的电脑已经被彩虹猫病毒废了。现在一起来欣赏彩虹猫吧<br><a class='pathogen' href='https://malware.fandom.com/zh/wiki/MEMZ#:~:text=MEMZ%E6%98%AF%E4%B8%80%E7%A7%8D%E5%AD%98%E5%9C%A8%E4%BA%8E%E5%BE%AE%E8%BD%AFWindows%EE%80%80%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E8%87%AA%E5%88%B6%E6%9C%A8%E9%A9%AC%E7%97%85%E6%AF%92%EF%BC%8C%E5%8E%9F%E6%9C%AC%E6%98%AF%E4%B8%BA%E4%BA%86Danooct1%E7%9A%84%EE%80%81%E2%80%9C%E8%A7%82%E8%B5%8F%E6%80%A7%E6%81%B6%E6%84%8F%E8%BD%AF%E4%BB%B6%E2%80%9D%E8%A7%86%E9%A2%91%E7%B3%BB%E5%88%97%E5%92%8C%E5%98%B2%E8%AE%BD%E9%82%A3%E4%BA%9B%E2%80%9C%E7%8E%A9%E5%85%B7%E7%97%85%E6%AF%92%E2%80%9D%E8%80%8C%E5%88%B6%E4%BD%9C%E3%80%82%E5%9B%A0%E5%85%B6%E9%AB%98%E5%BA%A6%E5%A4%8D%E6%9D%82%E5%92%8C%E7%8B%AC%E7%89%B9%E7%9A%84%E6%84%9F%E6%9F%93%E7%89%B9%E5%BE%81%EF%BC%88%E5%A4%A7%E5%A4%9A%E4%B8%8E%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3%EF%BC%89%E5%A4%87%E5%8F%97%E5%85%B3%E6%B3%A8%E5%92%8C%E8%B4%A3' target='_blank'>彩虹猫病毒</a>（英语：MEMZ）是一种存在于微软Windows操作系统中的自制木马病毒，原本是为了Danooct1的“观赏性恶意软件”视频系列和嘲讽那些“玩具病毒”而制作。因其高度复杂和独特的感染特征（大多与网络相关）备受关注和责骂。普遍认为是一款恶作剧病毒。MEMZ是一种能运行于微软Windows操作系统的木马。它最初诞生是源于Danooct1的“观赏性恶意软件”系列。该木马拥有好几个感染阶段，并且全部阶段都由其他阶段自动触发，某些会延迟执行。 它能以.exe文件方式和批处理文件去运行。其中批处理版本的运行方式类似于压缩文件的自解压，然后运行解压出来的.exe文件。MEMZ木马是单词“Memes”的误拼。这就是该病毒的大多感染行为都包含“火星文”和随机网站搜索，彩虹猫，以及引用Materialisimo的名为“MLG Antivirus”的视频的原因。该木马的制作者Leurak制作了一些恶作剧程式，比如“光照派”（Illuminati Joke Program）恶作剧程式还有“地震”恶作剧程式（Earthquake joke program）。Leurak's Channel。本扩展引申为通过Meme将通过电子设备传播将感染者变为只会喵喵叫卖萌的猫娘，故取名为Nyan Cat Virus（有含猫娘病毒的意味），实际上并不是真的MEMZ病毒。",
            PI_rhinovirus: '——在成人主要引起普通感冒等上呼吸道感染，还能引起支气管炎和支气管肺炎<br><a class="pathogen" href="https://www.yixue.com/%E9%BC%BB%E7%97%85%E6%AF%92" target="_blank">鼻病毒</a>（英语：Rhinovirus）分类上属小RNA病毒科（Picornaviridae），现发现有144个血清型,新型还在不断地被发现,是普通感冒最重要的病原体，约有50%的上呼吸道感染是由该病毒引起。鼻病毒的生物学特性虽与肠道病毒基本相似，但也有不同，该病毒可在人胚肾、人胚肺及二倍体细胞系WI-26或人胚气管器官培养中增殖，最宜条件是33℃、pH7.0旋转培养；该病毒不耐酸，pH3.0时可迅速被灭活，但该病毒比肠道病毒耐热，4℃可存活1周。鼻病毒感染，在成人主要引起普通感冒等上呼吸道感染；在婴幼儿和慢性呼吸道疾病患者，除上呼吸道感染外，还能引起支气管炎和支气管肺炎。病毒主要通过接触和飞沫传播，经鼻、口、眼粘膜进入体内，在鼻咽腔内增殖。潜伏期1～2d，临床症状有流涕、鼻塞、喷嚏、头痛、咽痛和咳嗽等，体温不增高或略有增高。该病毒引起为自限性疾病，一般1w左右自愈。感染后可产生局部SIgA，对同型病毒有免疫力，但持续时间短，故常发生再感染。普通感冒的两大致病原因就是鼻病毒和冠状病毒。',
            PI_ascaris: '——人体最常见的消化道寄生虫之一<br><a class="pathogen" href="https://www.yixue.com/%E5%AF%84%E7%94%9F%E8%99%AB%E5%AD%A6/%E4%BC%BC%E8%9A%93%E8%9B%94%E7%BA%BF%E8%99%AB" target="_blank">蛔虫</a>（英语：Ascaris）是无脊椎动物，线形动物门，线虫纲，蛔目，蛔科。是人体肠道内最大的寄生线虫，成体略带粉红色或微黄色，体表有横纹，雄虫尾部常卷曲。 蛔虫是世界性分布种类，是人体最常见的寄生虫，感染率可达70%以上，农村高于城市，儿童高于成人。蛔虫可导致蛔虫病。成虫寄生于小肠, 多见于空肠，以半消化食物为食。雌、雄成虫交配后雌虫产卵， 卵随粪便排出体外,，污染环境，受精卵在荫蔽、潮湿、氧气充足和适宜温度(21~30℃)下,，经2周， 其内的卵细胞发育成第一期幼虫，再经一周，在卵内第一次蜕皮后发育为感染期卵.。感染期卵被人吞入，在小肠内孵出幼虫。 幼虫能分泌透明质酸酶和蛋白酶，侵入小肠粘膜和粘膜下层，钻入肠壁小静脉或淋巴管，经静脉入肝,，再经右心到肺，穿破毛细血管进入肺泡，在此进行第2次和第3次蜕皮，然后再沿支气管、气管移行至咽，被宿主吞咽，经食管、胃到小肠，在小肠内进行第4次蜕皮后经数周发育为成虫。自感染期卵进入人体到雌虫开始产卵约需2个月，成虫寿命约1年，每条雌虫每日排卵约24万个。宿主体内的成虫数目一般为一至数十条，个别可达上千条。幼虫在人体内移行途中，可引起组织损伤，尤其对肺部损害最明显，可出肺出血、肺水肿、实变、支气管扩张及粘液增加等。临床表现可有发热、咳嗽、胸痛、哮喘、血痰及血中嗜酸性粒细胞增多等。也可有荨麻疹、血管神经性水肿等。多数病例可于发病后1～2周内自愈。重度感染时，幼虫也可侵犯甲状腺、脾、脑、肾等器官，引起异位损害。成虫是其主要的致病期，可有以下几种表现：掠夺营养引起营养不良：蛔虫以半消化性食糜为食，掠夺人体营养，其代谢产物可对肠粘膜造成刺激、损伤，引起消化和吸收不良，最后导致营养不良。重度感染的儿童甚至出现发育障碍。损伤肠粘膜引起肠功能紊乱：患者常有食欲不振、恶心、呕吐，以及间歇性脐周腹痛等表现。肠粘膜损伤与蛔虫唇齿及代谢产物有关。过敏反应：蛔虫代谢产物、分泌物等对人体是变应原，可引起过敏，表现为荨麻疹、血管神经性水肿、皮肤搔痒等。血中IgE升高、嗜酸性粒细胞也可增多。并发症：对人体的危害最大。蛔虫以游离方式寄生，有钻孔习性，当人体温升高、食入辛辣食物及驱虫不当时，可刺激蛔虫到处窜扰，造成严重的并发症。较常见的是胆道蛔虫症，患者出现突发性右上腹绞痛，并向右肩、背部及下腹部放射，呈间歇性，伴有恶心、呕吐等。不及时治疗可致化脓性胆管炎、胆囊炎、甚至胆囊穿孔。肠梗阻也是常见的并发症之一，其原因是大量成虫扭结成团，堵塞肠管，使该部位发生肠蠕动障碍所致，多发生于回肠。患者表现有脐周或右下腹突发间歇性疼痛，伴有呕吐、腹胀，在患者腹部可触及条索状移动团块。部分病人可出现蛔虫性阑尾炎、胰腺炎等并发症，个别病人甚至出现肠穿孔。',
            PI_leucochloridium: '——以操控宿主自杀来繁衍自身的恐怖寄生虫<br><a class="pathogen" href="https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E5%BD%A9%E8%9A%B4%E5%90%B8%E8%99%AB/63154245?fromModule=search-result_lemma-recommend" target="_blank">多肌彩蚴吸虫</a>（英语：Leucochloridium Muscularae）是扁形动物门吸虫纲彩蚴吸虫属的寄生性蠕虫。成虫体呈椭圆形，表皮光滑，体长约1.95-2.01毫米，具发达的口吸盘与腹吸盘，内部结构包括多肉质咽板、短食道及末端肠盲管。生殖系统特征显著，睾丸斜置于腹吸盘后方，卵巢位于睾丸前侧，子宫盘曲于两吸盘之间，卵黄腺沿体侧分布，虫卵呈椭圆形，大小约28×18微米。该虫终宿主为麻雀，成虫寄生于宿主的直肠内，其生活史依赖宿主完成，分布范围与宿主活动区域密切相关。虫体通过发达的生殖结构适应寄生环境，卵黄腺与子宫的形态特征为其繁殖提供适应性支撑。表皮光滑大小为1.954-2.009×1.073-1.110毫米，两吸盘发育良好，大小儿相同，口吸盘位顶端，咽板多肉，食道甚短，肠盲端，两睾丸稍呈椭圆形，前睾大小为0.272×0.222毫米，后睾0.259×0.227毫米，位子腹吸盘后，左右斜置，具阴茎袋位于体后端，阴茎长呈襟状，生殖孔开口子体末端，卵巢位于后睾丸之前，大小为0.172×0.124毫米，子宫盘曲于口吸盘和腹吸盘后缘之间的大部空间，并越过肠支至体外侧，卵黄腺发育良好，始于口吸盘的后缘水平，沿体侧伸延至后睾之后缘水平。虫卵椭圆形，大小为28×18微米。终宿主：麻雀。成虫寄生子直肠内。',
            //PI_:'<img style=width:238px src='+lib.assetURL+'extension/瘟疫公司/image/introImage/.png><br>——<br>——<br>',
            //a:'<a class="pathogen" href="" target="_blank"></a>'
        },
        characterTitle: {
            PI_bacteria: '<span class="pathogen-title" style="font-size: 20px">最初病原</span>',
            PI_virus: '<span class="pathogen-title"  style="font-size: 20px">错译突变</span>',
            PI_fungus: '<span class="pathogen-title"  style="font-size: 20px">远传孢菌</span>',
            PI_parasite: '<span class="pathogen-title"  style="font-size: 20px">入体异虫</span>',
            PI_prion: '<span class="pathogen-title"  style="font-size: 20px">扰绪错朊</span>',
            PI_nanovirus: '<span class="pathogen-title"  style="font-size: 20px">因子风暴</span>',
            PI_biologicalweapon: '<span class="pathogen-title"  style="font-size: 20px">尸横遍野</span>',
            PI_neurax: '<span class="pathogen-title"  style="font-size: 20px">僭神魔虫</span>',
            PI_necroa: '<span class="pathogen-title"  style="font-size: 20px">丧尸围城</span>',
            PI_pestilence: '<span class="pathogen-title"  style="font-size: 20px">黑死瘟菌</span>',
            PI_smallpox: '<span class="pathogen-title"  style="font-size: 20px">天花魔毒</span>',
            PI_staphylococcusaureus: '<span class="pathogen-title"  style="font-size: 20px">无缝不入</span>',
            PI_cholera: '<span class="pathogen-title"  style="font-size: 20px">蓝死枯骨</span>',
            PI_sparganum: '<span class="pathogen-title"  style="font-size: 20px">头痛欲裂</span>',
            PI_tetanus: '<span class="pathogen-title"  style="font-size: 20px">静息潜凶</span>',
            PI_clonorchis: '<span class="pathogen-title"  style="font-size: 20px">肝害胆损</span>',
            PI_schistosoma: '<span class="pathogen-title"  style="font-size: 20px">血水瘟君</span>',
            PI_shadowplague: '<span class="pathogen-title"  style="font-size: 20px">血影魔族</span>',
            PI_aids: '<span class="pathogen-title"  style="font-size: 20px">失抗绝症</span>',
            PI_syphilis: '<span class="pathogen-title"  style="font-size: 20px">妖风媚月</span>',
            PI_paragonimus: '<span class="pathogen-title"  style="font-size: 20px">肺孔千疮</span>',
            PI_helicobacterpylori: '<span class="pathogen-title"  style="font-size: 20px">胃糜烂穿</span>',
            PI_fasciolopsis: '<span class="pathogen-title"  style="font-size: 20px">固寄阻肠</span>',
            PI_toxoplasma: '<span class="pathogen-title"  style="font-size: 20px">目神失芒</span>',
            PI_distome: '<span class="pathogen-title"  style="font-size: 20px">夺明冲光</span>',
            PI_unknownpathogen: '<span class="pathogen-title"  style="font-size: 20px">神秘瘟疫</span>',
            PI_rabies: '<span class="pathogen-title"  style="font-size: 20px">狂烈侵脑</span>',
            PI_filovirus: '<span class="pathogen-title"  style="font-size: 20px">血疫双王</span>',
            PI_gordius: '<span class="pathogen-title"  style="font-size: 20px">幽水丝蛇</span>',
            PI_varicella: '<span class="pathogen-title"  style="font-size: 20px">恶浆溢疮</span>',
            PI_diphtheria: '<span class="pathogen-title"  style="font-size: 20px">白风锁喉</span>',
            PI_pertussis: '<span class="pathogen-title"  style="font-size: 20px">扼咽咳喘</span>',
            PI_measles: '<span class="pathogen-title"  style="font-size: 20px">邪风瘄疱</span>',
            PI_tuberculosis: '<span class="pathogen-title"  style="font-size: 20px">白死美尸</span>',
            PI_typhoid: '<span class="pathogen-title"  style="font-size: 20px">伤体寒乱</span>',
            PI_dengue: '<span class="pathogen-title"  style="font-size: 20px">伊蚊水方</span>',
            PI_westnilevirus: '<span class="pathogen-title"  style="font-size: 20px">热元焚首</span>',
            PI_plasmodium: '<span class="pathogen-title"  style="font-size: 20px">飞疟痼疾</span>',
            PI_gonorrhea: '<span class="pathogen-title"  style="font-size: 20px">邪云淫雨</span>',
            PI_angiostrongylus: '<span class="pathogen-title"  style="font-size: 20px">福失寿折</span>',
            PI_avianinfluenza: '<span class="pathogen-title"  style="font-size: 20px">枭飞严疾</span>',
            PI_spanishinfluenza: '<span class="pathogen-title"  style="font-size: 20px">荒流役病</span>',
            PI_simianflu: '<span class="pathogen-title"  style="font-size: 20px">猩球崛起</span>',
            PI_echinococcus: '<span class="pathogen-title"  style="font-size: 20px">囊虫毒蛊</span>',
            PI_amoeba: '<span class="pathogen-title"  style="font-size: 20px">食脑魇虫</span>',
            PI_poliomyelitis: '<span class="pathogen-title"  style="font-size: 20px">小儿麻痹</span>',
            PI_ancylostomatrichuris: '<span class="pathogen-title"  style="font-size: 20px">寄肠吮血</span>',
            PI_aspergillus: '<span class="pathogen-title"  style="font-size: 20px">剧毒腐菌</span>',
            PI_swineflu: '<span class="pathogen-title"  style="font-size: 20px">人畜共染</span>',
            PI_neurie: '<span class="pathogen-title"  style="font-size: 20px">除悲圣虫</span>',
            PI_fentianhuowu: '<span class="pathogen-title"  style="font-size: 20px">菌临天下</span>',
            PI_nipahvirus: '<span class="pathogen-title"  style="font-size: 20px">脑炎热病</span>',
            PI_candida: '<span class="pathogen-title"  style="font-size: 20px">隐菌潜伤</span>',
            PI_creutzfeldtjacobdisease: '<span class="pathogen-title"  style="font-size: 20px">狂牛怪疫</span>',
            PI_pithovirus: '<span class="pathogen-title"  style="font-size: 20px">冰隐封智</span>',
            PI_scarletfever: '<span class="pathogen-title"  style="font-size: 20px">红疹热菌</span>',
            PI_anthrax: '<span class="pathogen-title"  style="font-size: 20px">黑疽坏血</span>',
            PI_porphyria: '<span class="pathogen-title"  style="font-size: 20px">紫质血病</span>',
            PI_streptococcus: '<span class="pathogen-title"  style="font-size: 20px">侵血病菌</span>',
            PI_papillomavirus: '<span class="pathogen-title"  style="font-size: 20px">性甚致灾</span>',
            PI_lactobacillusacetobacter: '<span class="pathogen-title"  style="font-size: 20px">酵化生龋</span>',
            PI_leprosy: '<span class="pathogen-title"  style="font-size: 20px">毁身蚀骨</span>',
            PI_mycoplasmachlamydia: '<span class="pathogen-title"  style="font-size: 20px">隐疾侵视</span>',
            PI_rickettsia: '<span class="pathogen-title"  style="font-size: 20px">热病引原</span>',
            PI_ringvirus: '<span class="pathogen-title"  style="font-size: 20px">午夜凶铃</span>',
            PI_hantavirus: '<span class="pathogen-title"  style="font-size: 20px">血恶异毒</span>',
            PI_lassavirus: '<span class="pathogen-title"  style="font-size: 20px">统崩体亡</span>',
            PI_vibriovulnificus: '<span class="pathogen-title"  style="font-size: 20px">潜海之刺</span>',
            PI_yellowfever: '<span class="pathogen-title"  style="font-size: 20px">虫热烈病</span>',
            PI_bubonicplague: '<span class="pathogen-title"  style="font-size: 20px">尸绽恶花</span>',
            PI_athenianplague: '<span class="pathogen-title"  style="font-size: 20px">城烬狱花</span>',
            PI_nyancatvirus: '<span class="pathogen-title"  style="font-size: 20px">彩猫萌病</span>',
            PI_rhinovirus: '<span class="pathogen-title"  style="font-size: 20px">清风沫飏</span>',
            PI_ascaris: '<span class="pathogen-title"  style="font-size: 20px">肠缚暴虫</span>',
            PI_leucochloridium: '<span class="pathogen-title"  style="font-size: 20px">寄目虹虫</span>',
            //PI_:'<span class="pathogen-title"  style="font-size: 20px"></span>',
        },
        perfectPair: {
            /*孩子这里有一些新的病原体ID，虽然没做，但我先提前分好类
            PI_escherichiacoli:大肠杆菌
            PI_brucella:布鲁氏菌
            PI_rhinovirus:鼻病毒
            PI_dermatophyte:毛癣菌
            PI_coxsackievirus:柯萨奇病毒
            PI_norovirus:诺如病毒
            PI_mpoxvirus:猴痘
            PI_nyancatvirus:彩虹猫病毒
            PI_ascaris:蛔虫
            PI_leucochloridium:彩蚴吸虫
            PI_pagumogonimus:斯氏狸殖吸虫
            PI_alveococcus:泡球蚴
            PI_athenianplague:雅典大瘟疫
            */
            //细菌病原体
            PI_bacteria: ["PI_pestilence", "PI_anthrax", "PI_cholera", "PI_diphtheria", "PI_pertussis", "PI_tuberculosis", "PI_gonorrhea", "PI_helicobacterpylori", "PI_scarletfever", "PI_staphylococcusaureus", "PI_streptococcus", "PI_lactobacillusacetobacter", "PI_typhoid", "PI_tetanus", "PI_leprosy", "PI_vibriovulnificus", "PI_bubonicplague", "PI_escherichiacoli", "PI_brucella"],
            //芽孢杆菌纲
            PI_staphylococcusaureus: ["PI_streptococcus", "PI_lactobacillusacetobacter", "PI_anthrax"],
            PI_streptococcus: ["PI_staphylococcusaureus", "PI_lactobacillusacetobacter", "PI_anthrax"],
            PI_lactobacillusacetobacter: ["PI_staphylococcusaureus", "PI_streptococcus", "PI_anthrax"],
            PI_anthrax: ["PI_staphylococcusaureus", "PI_streptococcus", "PI_lactobacillusacetobacter"],
            //梭菌纲
            PI_tetanus: [],
            //放线菌纲
            PI_diphtheria: ["PI_tuberculosis", "PI_leprosy"],
            PI_tuberculosis: ["PI_diphtheria", "PI_leprosy"],
            PI_leprosy: ["PI_diphtheria", "PI_tuberculosis"],
            //α-变形菌纲
            PI_rickettsia: ["PI_lactobacillusacetobacter", "PI_brucella"],
            PI_brucella: ["PI_lactobacillusacetobacter", "PI_rickettsia"],
            //β-变形菌纲
            PI_gonorrhea: ["PI_pertussis", "PI_syphilis", "PI_aids", "PI_papillomavirus"], //四大性病
            PI_pertussis: ["PI_gonorrhea"],
            //γ-变形菌纲
            PI_cholera: ["PI_vibriovulnificus", "PI_typhoid", "PI_bubonicplague", "PI_pestilence", "PI_escherichiacoli"],
            PI_vibriovulnificus: ["PI_cholera", "PI_typhoid", "PI_bubonicplague", "PI_pestilence", "PI_escherichiacoli"],
            PI_typhoid: ["PI_cholera", "PI_vibriovulnificus", "PI_bubonicplague", "PI_pestilence", "PI_escherichiacoli"],
            PI_bubonicplague: ["PI_cholera", "PI_vibriovulnificus", "PI_typhoid", "PI_pestilence", "PI_escherichiacoli"],
            PI_pestilence: ["PI_cholera", "PI_vibriovulnificus", "PI_typhoid", "PI_bubonicplague", "PI_escherichiacoli"],
            PI_escherichiacoli: ["PI_cholera", "PI_vibriovulnificus", "PI_typhoid", "PI_bubonicplague", "PI_pestilence"],
            //ε-变形菌纲
            PI_helicobacterpylori: [],
            //螺旋体纲
            PI_syphilis: ["PI_gonorrhea", "PI_aids", "PI_papillomavirus"], //四大性病
            //柔膜菌纲&衣原体纲
            PI_mycoplasmachlamydia: [],
            //病毒病原体
            PI_virus: ["PI_nanovirus", "PI_necroa", "PI_simianflu", "PI_smallpox", "PI_nipahvirus", "PI_pithovirus", "PI_swineflu", "PI_avianinfluenza", "PI_spanishinfluenza", "PI_aids", "PI_dengue", "PI_filovirus", "PI_measles", "PI_varicella", "PI_westnilevirus", "PI_papillomavirus", "PI_rabies", "PI_poliomyelitis", "PI_hantavirus", "PI_lassavirus", "PI_ringvirus", "PI_yellowfever", "PI_nyancatvirus", "PI_norovirus", "PI_coxsackievirus", "PI_rhinovirus", "PI_mpoxvirus"],
            //黄病毒纲
            PI_dengue: ["PI_westnilevirus", "PI_yellowfever"],
            PI_westnilevirus: ["PI_dengue", "PI_yellowfever"],
            yellowfever: ["PI_dengue", "PI_westnilevirus"],
            //小南嵌套病毒纲
            PI_poliomyelitis: ["PI_rhinovirus", "PI_coxsackievirus"],
            PI_rhinovirus: ["PI_poliomyelitis", "PI_coxsackievirus"],
            PI_coxsackievirus: ["PI_rhinovirus", "PI_poliomyelitis"],
            //杯状病毒纲
            PI_norovirus: [],
            //艾略特病毒纲
            PI_lassavirus: ["PI_hantavirus", "PI_avianinfluenza", "PI_spanishinfluenza", "PI_swineflu"],
            PI_hantavirus: ["PI_lassavirus", "PI_avianinfluenza", "PI_spanishinfluenza", "PI_swineflu"],
            PI_avianinfluenza: ["PI_lassavirus", "PI_hantavirus", "PI_spanishinfluenza", "PI_swineflu"],
            PI_spanishinfluenza: ["PI_lassavirus", "PI_hantavirus", "PI_avianinfluenza", "PI_swineflu"],
            PI_swineflu: ["PI_lassavirus", "PI_hantavirus", "PI_avianinfluenza", "PI_spanishinfluenza"],
            //单股反链病毒纲
            PI_measles: ["PI_nipahvirus", "PI_rabies", "PI_filovirus"],
            PI_nipahvirus: ["PI_measles", "PI_rabies", "PI_filovirus"],
            PI_rabies: ["PI_measles", "PI_nipahvirus", "PI_filovirus"],
            PI_filovirus: ["PI_measles", "PI_nipahvirus", "PI_rabies"],
            //逆转录病毒纲
            PI_aids: ["PI_papillomavirus", "PI_syphilis", "PI_gonorrhea"], //四大性病
            //巨病毒纲
            PI_pithovirus: [],
            //痘病毒纲
            PI_smallpox: ["PI_mpoxvirus"],
            PI_mpoxvirus: ["PI_smallpox"],
            //乳头多瘤空泡病毒纲
            PI_papillomavirus: ["PI_aids", "PI_syphilis", "PI_gonorrhea"], //四大性病
            //疱疹病毒纲
            PI_varicella: [],
            //电子病毒类
            PI_nanovirus: ["PI_ringvirus", "PI_nyancatvirus"],
            PI_ringvirus: ["PI_nanovirus", "PI_nyancatvirus"],
            PI_nyancatvirus: ["PI_nanovirus", "PI_ringvirus"],
            //真菌病原体
            PI_fungus: ["PI_aspergillus", "PI_candida", "PI_dermatophyte"],
            //散囊菌纲
            PI_aspergillus: ["PI_dermatophyte"],
            PI_dermatophyte: ["PI_aspergillus"],
            //酵母纲
            PI_candida: [],
            //寄生虫病原
            PI_parasite: ["PI_neurax", "PI_neurie", "PI_amoeba", "PI_ancylostomatrichuris", "PI_angiostrongylus", "PI_clonorchis", "PI_paragonimus", "PI_schistosoma", "PI_sparganum", "PI_fasciolopsis", "PI_leucochloridium", "PI_gordius", "PI_toxoplasma", "PI_plasmodium", "PI_echinococcus", "PI_distome", "PI_alveococcus", "PI_ascaris", "PI_pagumogonimus"],
            //孢子虫纲
            PI_plasmodium: ["PI_toxoplasma"],
            PI_toxoplasma: ["PI_plasmodium"],
            //根足虫纲
            PI_amoeba: [],
            //吸虫纲
            PI_schistosoma: ["PI_paragonimus", "PI_fasciolopsis", "PI_clonorchis", "PI_leucochloridium", "PI_pagumogonimus", "PI_distome"],
            PI_paragonimus: ["PI_schistosoma", "PI_fasciolopsis", "PI_clonorchis", "PI_leucochloridium", "PI_pagumogonimus", "PI_distome"],
            PI_fasciolopsis: ["PI_schistosoma", "PI_paragonimus", "PI_clonorchis", "PI_leucochloridium", "PI_pagumogonimus", "PI_distome"],
            PI_clonorchis: ["PI_schistosoma", "PI_paragonimus", "PI_fasciolopsis", "PI_leucochloridium", "PI_pagumogonimus", "PI_distome"],
            PI_distome: ["PI_schistosoma", "PI_paragonimus", "PI_fasciolopsis", "PI_clonorchis", "PI_pagumogonimus", "PI_leucochloridium"],
            PI_leucochloridium: ["PI_schistosoma", "PI_paragonimus", "PI_fasciolopsis", "PI_clonorchis", "PI_pagumogonimus", "PI_distome"],
            PI_pagumogonimus: ["PI_schistosoma", "PI_fasciolopsis", "PI_clonorchis", "PI_leucochloridium", "PI_paragonimus", "PI_distome"],
            //绦虫纲
            PI_sparganum: ["PI_echinococcus", "PI_alveococcus"],
            PI_echinococcus: ["PI_sparganum", "PI_alveococcus"],
            PI_alveococcus: ["PI_echinococcus", "PI_sparganum"],
            //线虫纲
            PI_angiostrongylus: ["PI_ancylostomatrichuris", "PI_ascaris"],
            PI_ancylostomatrichuris: ["PI_angiostrongylus", "PI_ascaris"],
            PI_ascaris: ["PI_angiostrongylus", "PI_ancylostomatrichuris"],
            //铁线虫纲
            PI_gordius: [],
            //神经蠕虫纲
            PI_neurax: ["PI_neurie"],
            PI_neurie: ["PI_neurax"],
            //朊粒病原体
            PI_prion: ["PI_creutzfeldtjacobdisease"],
            PI_creutzfeldtjacobdisease: ["PI_prion"],
            //其他病原体
            PI_shadowplague: ["PI_porphyria"], //背德组，一个原型一个改编
            PI_porphyria: ["PI_shadowplague"], //背德组，一个原型一个改编
            PI_biologicalweapon: ["PI_unknownpathogen", "PI_anthrax", "PI_bubonicplague", "PI_pestilence", "PI_typhoid", "PI_smallpox"],
            PI_unknownpathogen: ["PI_biologicalweapon", "PI_athenianplague"],
            PI_athenianplague: ["PI_unknownpathogen"],
            //主宰病原体
            PI_fentianhuowu: [], //任意病原体，太长了就先不写了
        },
        skill: {
            //宗族技
            PIliran: {
                mod: {
                    targetInRange(card, player, target) {
                        if (target.hasMark("PIliran_mark")) return true;
                    },
                },
                subSkill: {
                    damageSource: { audio: "ext:瘟疫公司/audio/skill:2" },
                    dying: { audio: "ext:瘟疫公司/audio/skill:3" },
                    recover: { audio: "ext:瘟疫公司/audio/skill:1" },
                    die: { audio: "ext:瘟疫公司/audio/skill:2" },
                    dieAfter: { audio: "ext:瘟疫公司/audio/skill:2" },
                    audio: {
                        trigger: {
                            source: ["damageSource", "dying", "dieAfter"],
                            player: "recoverEnd",
                            global: "die",
                        },
                        firstDo: true,
                        forced: true,
                        direct: true,
                        filter(event, player, name) {
                            switch (name) {
                                case "die":
                                    return game.countPlayer() <= game.countPlayer2() - game.countPlayer();
                                case "recoverEnd":
                                    return game.hasPlayer(function (current) {
                                        return current == player || current.hasClan("瘟疫公司");
                                    });
                                default:
                                    return true;
                            }
                        },
                        content() {
                            "step 0";
                            if (trigger.name == "recover")
                                player
                                    .chooseTarget(true, "令一名瘟疫公司角色摸一张牌", function (card, player, current) {
                                        return current == player || current.hasClan("瘟疫公司");
                                    })
                                    .set("ai", target => get.attitude(_status.event.player, target));
                            else player.logSkill("PIliran_" + event.triggername);
                            "step 1";
                            if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill("PIliran_recover", target);
                                target.draw();
                                //game.delayx();
                            }
                        },
                    },
                    enter: {
                        audio: "ext:瘟疫公司/audio/skill:1",
                        trigger: {
                            global: "phaseBefore",
                            player: "enterGame",
                        },
                        filter: event => event.name != "phase" || game.phaseNumber == 0,
                        forced: true,
                        firstDo: true,
                        content() {
                            game.broadcastAll(player => {
                                var musicname;
                                switch (player.name1) {
                                    case "PI_neurax":
                                        musicname = "neurax_music";
                                        break;
                                    case "PI_necroa":
                                        musicname = "zombie_music";
                                        break;
                                    case "PI_simianflu":
                                        musicname = "simian_flu_music";
                                        break;
                                    case "PI_shadowplague":
                                        musicname = "vampire_music";
                                        break;
                                    case "PI_neurie":
                                        musicname = "Carol of the bells";
                                        break;
                                    case "PI_ringvirus":
                                        musicname = "午夜凶铃";
                                        break;
                                    default:
                                        musicname = "gamemusic";
                                }
                                lib.config.background_music = "music_custom";
                                lib.config.background_music_src = ui.backgroundMusic.src = `${lib.assetURL}extension/瘟疫公司/audio/background/${musicname}.mp3`;
                            }, player);
                        },
                    },
                    out: {
                        trigger: { player: "dieAfter" },
                        filter(event, player) {
                            return ["PI_papillomavirus", "ol_nanhualaoxian"].some(name => get.is.playerNames(player, name));
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        forceDie: true,
                        content() {
                            game.broadcastAll(() => {
                                lib.config.background_music = "music_custom";
                                lib.config.background_music_src = ui.backgroundMusic.src = `${lib.assetURL}extension/瘟疫公司/audio/background/いとうかなこ - 悲しみの向こうへ.mp3`;
                            });
                        },
                    },
                    draw: {
                        trigger: {
                            global: "addPIliranMarkAfter",
                        },
                        filter(event, player) {
                            return event.source === player;
                        },
                        forced: true,
                        content() {
                            player.draw(2);
                        },
                    },
                    mark: {
                        markimage: "extension/瘟疫公司/image/card/infected.png",
                        intro: {
                            name: "感染",
                            name2: "感染",
                            markcount: () => 0,
                            content: "病原体正在侵蚀你的身体……",
                        },
                    },
                },
                group: ["PIliran_draw", "PIliran_audio", "PIliran_enter", "PIliran_out"],
                derivation: ["PIliran_enter", "PIliran_damageSource", "PIliran_dying", "PIliran_dieAfter", "PIliran_die", "PIliran_recover"],
                trigger: {
                    global: "roundStart",
                    source: "damageSource",
                },
                audio: "ext:瘟疫公司/audio/skill:1",
                forced: true,
                direct: true,
                clanSkill: true,
                filter(event, player, name) {
                    if (name == "roundStart") return game.hasPlayer(current => current.canGanran());
                    return event.player.canGanran();
                },
                content() {
                    "step 0";
                    if (trigger.name == "damage") event._result = { bool: true, targets: [trigger.player] };
                    else
                        player
                            .chooseTarget("请挑一个你中意的角色感染", true, (card, player, target) => target.canGanran())
                            .set("ai", function (target) {
                                var player = _status.event.player;
                                return get.sgn(-get.attitude(player, target));
                            });
                    "step 1";
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill("PIliran", target);
                        target.addPIliranMark();
                    }
                },
                ai: {
                    noganran: true,
                },
            },
            //遗传密码
            PIxiangangaoneng: {
                nobracket: true,
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                forced: true,
                content: function () {
                    player.directgain(get.cards(4));
                },
            },
            PIsesubaofa: {
                nobracket: true,
                trigger: {
                    player: ["recoverEnd", "gainEnd"],
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    if (
                        game.countPlayer(function (current) {
                            return current.countCards("he") != player.countCards("he");
                        }) < 1
                    )
                        return false;
                    return event.source && event.source != player && event.source.hasMark("PIliran_mark") && Math.random() <= 0.5;
                },
                content: function () {
                    player.draw();
                },
            },
            PIjisudaixie: {
                nobracket: true,
                trigger: {
                    global: "addPIliranMarkAfter",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return Math.random() <= 0.5;
                },
                content: function () {
                    player.draw();
                },
            },
            PIcuihuakaiguan: {
                nobracket: true,
                usable: 2,
                trigger: {
                    player: "damageEnd",
                },
                forced: true,
                filter: function (event, player) {
                    return player.hasClan("瘟疫公司");
                },
                content: function () {
                    var num = Math.max(trigger.num, 2);
                    player.draw(Math.min(num, 5));
                },
            },
            PIdaixiejiechi: {
                nobracket: true,
                trigger: {
                    global: "addPIliranMarkAfter",
                    player: "recoverEnd",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return Math.random() <= 1 / 3;
                },
                content: function () {
                    player.chooseToDiscard("he", true, 1);
                },
            },
            PIludiqinhe: {
                nobracket: true,
                forced: true,
                trigger: {
                    source: "damageBegin",
                },
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || Math.random() > 0.1) return false;
                    return event.player != player && get.distance(player, event.player) <= 1;
                },
                content: function () {
                    "step 0";
                    player
                        .chooseTarget("请挑一个你中意的角色感染", true, (card, player, target) => target.canGanran())
                        .set("ai", function (target) {
                            var player = _status.event.player;
                            return get.sgn(-get.attitude(player, target));
                        });
                    "step 1";
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill("PIliran", target);
                        target.addPIliranMark();
                    }
                },
            },
            PIdaqiqinhe: {
                nobracket: true,
                forced: true,
                trigger: {
                    source: "damageBegin",
                },
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || Math.random() > 0.1) return false;
                    return event.player != player && get.distance(player, event.player) > 1;
                },
                content: function () {
                    "step 0";
                    player
                        .chooseTarget("请挑一个你中意的角色感染", true, (card, player, target) => target.canGanran())
                        .set("ai", function (target) {
                            var player = _status.event.player;
                            return get.sgn(-get.attitude(player, target));
                        });
                    "step 1";
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill("PIliran", target);
                        target.addPIliranMark();
                    }
                },
            },
            PIhaiyangqinhe: {
                nobracket: true,
                forced: true,
                trigger: {
                    player: ["loseHpBegin", "damageBegin"],
                },
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || Math.random() > 0.1) return false;
                    return event.name == "loseHp" || event.hasNature("ice");
                },
                content: function () {
                    "step 0";
                    player
                        .chooseTarget("请挑一个你中意的角色感染", true, (card, player, target) => target.canGanran())
                        .set("ai", function (target) {
                            var player = _status.event.player;
                            return get.sgn(-get.attitude(player, target));
                        });
                    "step 1";
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill("PIliran", target);
                        target.addPIliranMark();
                    }
                },
            },
            PIzhenyayizhi: {
                nobracket: true,
                forced: true,
                trigger: {
                    global: "phaseJieshuBegin",
                },
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || Math.random() > 0.3) return false;
                    return event.player.getNext().hasMark("PIliran_mark") || event.player.getPrevious().hasMark("PIliran_mark") || player.isPISameClanFor(event.player.getNext()) || player.isPISameClanFor(event.player.getPrevious());
                },
                content: function () {
                    trigger.player.addPIliranMark();
                },
            },
            PIbentuqinhe: {
                nobracket: true,
                trigger: {
                    player: "phaseZhunbeiBegin",
                },
                filter: function (event, player) {
                    const target = game.getAllGlobalHistory("everything", evt => evt.name == "addPIliranMark")[0]?.player;
                    return target?.isIn() && player.countCards("h") < target.countCards("h");
                },
                forced: true,
                content: function () {
                    const target = game.getAllGlobalHistory("everything", evt => evt.name == "addPIliranMark")[0].player;
                    player.drawTo(target.countCards("h"));
                },
            },
            PInaiganshihan: {
                nobracket: true,
                trigger: {
                    player: "damageBegin4",
                },
                filter: function (event) {
                    return player.hasClan("瘟疫公司") && event.hasNature("fire");
                },
                forced: true,
                content: function () {
                    var num = Math.random();
                    if (num <= 0.5) trigger.num--;
                    if (num <= 0.25) trigger.cancel();
                },
                ai: {
                    nofire: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, "fireDamage")) return "zerotarget";
                        },
                    },
                },
            },
            PIxishiqinshui: {
                nobracket: true,
                trigger: {
                    player: ["damageBegin", "loseHpBegin"],
                },
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || Math.random() > 0.5) return false;
                    return event.name == "loseHp" || event.hasNature("ice");
                },
                forced: true,
                content: function () {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, "iceDamage")) return "zerotarget";
                        },
                    },
                },
            },
            PInongcunshengcun: {
                nobracket: true,
                trigger: {
                    player: "damageEnd",
                },
                filter: function (event) {
                    if (!event.source || !event.source.isIn() || !event.player.isIn() || player.isPISameClanFor(event.source)) return false;
                    return Math.random() <= 0.5 && event.source.countCards("h") <= player.countCards("h");
                },
                forced: true,
                content: function () {
                    player.draw();
                },
            },
            PIchengshishengcun: {
                nobracket: true,
                trigger: {
                    player: "damageEnd",
                },
                filter: function (event) {
                    if (!player.hasClan("瘟疫公司") || Math.random() > 0.5) return false;
                    if (!event.source || !event.source.isIn() || !event.player.isIn() || player.isPISameClanFor(event.source)) return false;
                    return event.source.countCards("h") >= player.countCards("h");
                },
                forced: true,
                content: function () {
                    player.draw();
                },
            },
            PIjiduanshengwu: {
                nobracket: true,
                trigger: {
                    player: ["damageBegin", "loseHpBegin", "damageEnd"],
                },
                filter: function (event, player, name) {
                    if (!player.hasClan("瘟疫公司") || Math.random() > 0.2) return false;
                    if (name == "damageEnd") return (event.source.countCards("h") >= player.countCards("h") && event.source) || event.source.isIn() || event.player.isIn() || !player.isPISameClanFor(event.source);
                    if (name == "loseHpBegin") return true;
                    if (name == "damageBegin") return event.hasNature("ice") || event.hasNature("fire");
                },
                forced: true,
                content: function () {
                    "step 0";
                    if (event.triggername == "damageEnd") player.draw();
                    "step 1";
                    if (event.triggername == "damageBegin" || "loseHpBegin") trigger.cancel();
                },
                ai: {
                    nofire: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, "iceDamage")) return "zerotarget";
                        },
                    },
                },
            },
            PIdaerwenlun: {
                nobracket: true,
                trigger: {
                    player: "phaseDrawBegin2",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || event.numFixed) return false;
                    return Math.random() <= 0.4;
                },
                content: function () {
                    trigger.num++;
                },
                ai: {
                    threaten: 1.5,
                },
            },
            PIshenchuangxueshuo: {
                nobracket: true,
                trigger: {
                    player: "phaseDrawBegin2",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || event.numFixed) return false;
                    return Math.random() <= 0.4;
                },
                content: function () {
                    trigger.num--;
                },
                ai: {
                    threaten: 1.5,
                },
            },
            PImoniyichuan: {
                nobracket: true,
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                content: function () {
                    player.gainMaxHp();
                    player.recoverTo(player.maxHp);
                },
            },
            PIjianxingyanghua: {
                nobracket: true,
                trigger: {
                    global: "phaseBefore",
                    player: ["enterGame", "phaseDrawBegin2"],
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || (event.name == "phaseDraw" && event.numFixed)) return false;
                    return (Math.random() <= 0.25 && event.name != "phase") || game.phaseNumber == 0;
                },
                content: function () {
                    if (trigger.name !== "phaseDraw") player.loseMaxHp();
                    else {
                        trigger.num--;
                        var list = [];
                        for (var i = 0; i < 1; i++) {
                            var cardx = get.cardPile2(function (card) {
                                return get.type(card) == "equip" && !list.contains(card);
                            });
                            if (cardx) list.push(cardx);
                        }
                        if (list.length) player.gain(list, "draw");
                    }
                },
            },
            PIjianxingshuijie: {
                nobracket: true,
                trigger: {
                    global: "phaseBefore",
                    player: ["enterGame", "phaseDrawBegin2"],
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司") || (event.name == "phaseDraw" && event.numFixed)) return false;
                    return (Math.random() <= 0.25 && event.name != "phase") || game.phaseNumber == 0;
                },
                content: function () {
                    if (trigger.name !== "phaseDraw") player.loseMaxHp();
                    else {
                        trigger.num--;
                        var list = [];
                        for (var i = 0; i < 1; i++) {
                            var cardx = get.cardPile2(function (card) {
                                return get.type2(card) == "trick" && !list.contains(card);
                            });
                            if (cardx) list.push(cardx);
                        }
                        if (list.length) player.gain(list, "draw");
                    }
                },
            },
            PIdianliluoxuan: {
                nobracket: true,
                trigger: {
                    player: "phaseDiscardEnd",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return event.cards && event.cards.length > 0;
                },
                content: function () {
                    player.draw(2);
                },
            },
            PIkuasunxiufu: {
                nobracket: true,
                mod: {
                    maxHandcard: function (player, num) {
                        if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                    },
                },
            },
            PIjingtaizhengzhuang: {
                nobracket: true,
                mod: {
                    ignoredHandcard: function (card, player) {
                        if (get.tag(event.card, "damage")) return true;
                    },
                    cardDiscardable: function (card, player, name) {
                        if (name == "phaseDiscard" && get.tag(event.card, "damage")) return false;
                    },
                },
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                content: function () {
                    player.loseMaxHp();
                },
            },
            PIbinglixiuting: {
                nobracket: true,
                mod: {
                    ignoredHandcard: function (card, player) {
                        if (get.type(card, player) == "equip") return true;
                    },
                    cardDiscardable: function (card, player, name) {
                        if (name == "phaseDiscard" && get.type(card, player) == "equip") return false;
                    },
                },
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                content: function () {
                    player.loseMaxHp();
                },
            },
            PIfanshizhihou: {
                nobracket: true,
                mod: {
                    ignoredHandcard: function (card, player) {
                        if (get.type(card, player) == "trick") return true;
                    },
                    cardDiscardable: function (card, player, name) {
                        if (name == "phaseDiscard" && get.type(card, player) == "trick") return false;
                    },
                },
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                forced: true,
                filter: function (event, player) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                content: function () {
                    player.loseMaxHp();
                },
            },
            PIwuyaokeyi: {
                nobracket: true,
                trigger: {
                    player: ["damageBegin", "loseHpBegin"],
                },
                filter: function (event, player) {
                    return player.hasClan("瘟疫公司");
                },
                forced: true,
                content: function () {
                    trigger.cancel();
                },
            },
            PIwuweibuzhi: {
                nobracket: true,
                trigger: {
                    player: "useCardToPlayer",
                    target: "useCardToBefore",
                },
                forced: true,
                filter: function (event, player, name) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    return !player.isPISameClanFor(event[name == "useCardToPlayer" ? "target" : "player"]);
                },
                logTarget: "target",
                content: function () {
                    "step 0";
                    if (event.triggername == "useCardToPlayer") {
                        trigger.getParent().directHit.add(trigger.target);
                    }
                    "step 1";
                    if (event.triggername == "useCardToBefore") {
                        trigger.cancel();
                    }
                },
                ai: {
                    directHit_ai: true,
                },
            },
            PIwuqiongwujin: {
                nobracket: true,
                enable: "phaseUse",
                filter: function (event, player) {
                    return player.hasClan("瘟疫公司");
                },
                content: function () {
                    player.draw();
                },
            },
            PIjisubaofa: {
                nobracket: true,
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                forced: true,
                filter: function (event, player, name) {
                    if (!player.hasClan("瘟疫公司")) return false;
                    if (!game.hasPlayer(target => target.canGanran())) return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                content: function () {
                    const targets = game.filterPlayer(target => target.canGanran());
                    for (const i of targets) i.addPIliranMark();
                },
            },
            PIxingyunmoshi: {
                nobracket: true,
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                filter(event, player) {
                    if (event.name === "phase" && game.phaseNumber > 0) return false;
                    if (!_status.PIshenwen_list) lib.skill.PIshenwen.init();
                    return _status.PIshenwen_list.some(skill => !player.hasSkill(skill, null, false, false)) && player.hasClan("瘟疫公司");
                },
                forced: true,
                content() {
                    player.addSkills(
                        _status.PIshenwen_list.filter(skill => {
                            return !player.hasSkill(skill, null, false, false);
                        }).randomGets(5)
                    );
                },
            },
            PIshuangchongshentou: {
                nobracket: true,
                trigger: { global: "useCardToTargeted" },
                filter(event, player) {
                    if (event.player !== player || !event.targets.some(target => target.hasMark("PIliran_mark"))) return false;
                    return event.targets.length === event.getParent().triggeredTargets4.length;
                },
                forced: true,
                logTarget(event, player) {
                    return event.targets.filter(target => target.hasMark("PIliran_mark")).sortBySeat();
                },
                content() {
                    trigger.targets = trigger.targets.concat(event.targets);
                    trigger.getParent().targets = trigger.getParent().targets.concat(event.targets);
                    trigger.getParent().triggeredTargets4 = trigger.getParent().triggeredTargets4.concat(event.targets);
                },
            },
            PIsuijimoshi: {
                nobracket: true,
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                filter(event, player) {
                    if (event.name === "phase" && game.phaseNumber > 0) return false;
                    return !_status.auto;
                },
                forced: true,
                content() {
                    ui.click.auto();
                },
            },
            //细菌
            PIjunbi: {
                mod: {
                    maxHandcard(player, num) {
                        return num + player.hujia;
                    },
                },
                subSkill: {
                    chongji: {
                        trigger: {
                            player: "changeHujiaEnd",
                        },
                        direct: true,
                        filter: event => event.num < 0,
                        content() {
                            "step 0";
                            player
                                .chooseTarget("###是否发动【菌壁】？###选择自己则摸两张牌，或选择一名其他角色将其感染", function (card, player, target) {
                                    if (target == player) return true;
                                    return target.canGanran();
                                })
                                .set("ai", function (target) {
                                    var player = _status.event.player;
                                    return 2 + get.sgn(-get.attitude(player, target));
                                });
                            "step 1";
                            if (result.bool) {
                                var target = result.targets[0];
                                event.target = target;
                                var self = target == player;
                                player.logSkill("PIjunbi", self ? null : target);
                                if (self) {
                                    player.draw(2);
                                    event.finish();
                                } else target.addPIliranMark();
                            }
                        },
                    },
                },
                group: "PIjunbi_chongji",
                trigger: {
                    player: "phaseJieshuBegin",
                },
                prompt2: (event, player) => `获得${Math.min(player.getDamagedHp(), 3 - player.hujia)}点护甲`,
                frequent: true,
                locked: false,
                filter: (event, player) => player.isDamaged() && !player.hujia,
                content() {
                    player.changeHujia(player.getDamagedHp(), null, 3);
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    skillTagFilter: player => player.hujia > 0,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, "damage") && target.hujia > 0) {
                                if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
                            }
                            if (!target.hasFriend()) return;
                            var num = 1;
                            if (get.attitude(player, target) > 0) {
                                if (player.needsToDiscard()) num = 0.7;
                                else num = 0.5;
                            }
                            return [1, num * 2];
                        },
                    },
                },
            },
            PInaiyao: {
                subSkill: {
                    blacklist: {
                        intro: {
                            name: "抗药性",
                            markimage: "extension/瘟疫公司/image/card/PInaiyao_mark.png",
                            content: "<li>你已对以下牌名产生了抗药性：$。</li><br/><em>同样的招式，无法对同一个圣斗士使用两次！</em>",
                            markcount: storage => storage.length,
                        },
                    },
                    storage: {
                        trigger: {
                            player: "dying",
                        },
                        forced: true,
                        filter: event => event.getParent().name == "damage" && event.getParent().card,
                        content() {
                            player.markAuto("PInaiyao_blacklist", [trigger.getParent().card.name]);
                        },
                    },
                },
                group: "PInaiyao_storage",
                trigger: {
                    target: "useCardToTargeted",
                },
                usable: 1,
                locked: true,
                filter(event, player) {
                    if (!player.storage.PInaiyao_blacklist) return false;
                    return player.storage.PInaiyao_blacklist.includes(event.card.name);
                },
                content() {
                    "step 0";
                    trigger.getParent().excluded.add(player);
                    "step 1";
                    if (_status.currentPhase.hasMark("PIliran_mark")) player.draw();
                },
            },
            //病毒
            PItubian: {
                subSkill: {
                    liran: {
                        trigger: {
                            player: "phaseDrawEnd",
                        },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        direct: true,
                        filter: (event, player) => player.isMaxHandcard(true) && game.hasPlayer(current => current.canGanran()),
                        content() {
                            "step 0";
                            player
                                .chooseTarget("请挑一个你中意的角色感染", true, (card, player, target) => target.canGanran())
                                .set("ai", function (target) {
                                    var player = _status.event.player;
                                    return get.sgn(-get.attitude(player, target));
                                });
                            "step 1";
                            if (result.bool) {
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target);
                                target.addPIliranMark();
                            }
                        },
                    },
                },
                group: "PItubian_liran",
                trigger: {
                    player: "phaseDrawBegin2",
                },
                filter: event => !event.numFixed,
                frequent: true,
                content() {
                    player.showHandcards(`${get.translation(player)}发动了【突变】`);
                    var types = [];
                    for (var i of player.getCards("h")) {
                        types.add(get.type2(i, player));
                    }
                    trigger.num += 4 - types.length;
                    player.addTempSkill("PItubian_liran", { player: "phaseDrawAfter" });
                },
            },
            PIfuzhi: {
                subSkill: {
                    guanwei: {
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        filter: (event, player) => player.isMinHp(),
                        frequent: true,
                        prompt: "###是否发动【复制】？###先执行一个额外的摸牌阶段，再执行一个额外的出牌阶段",
                        content() {
                            var next1 = player.phaseDraw();
                            event.next.remove(next1);
                            trigger.getParent().next.push(next1);
                            var next2 = player.phaseUse();
                            event.next.remove(next2);
                            trigger.getParent().next.push(next2);
                        },
                    },
                },
                group: "PIfuzhi_guanwei",
                enable: "phaseUse",
                subfrequent: ["guanwei"],
                usable: 3,
                filterCard: card => !card.hasGaintag("PIfuzhi"),
                discard: false,
                lose: false,
                delay: false,
                content() {
                    "step 0";
                    player.judge(card => (get.number(card) >= game.countPlayer(current => current.hasMark("PIliran_mark")) + 3 ? 1 : -1)).judge2 = result => result.bool;
                    "step 1";
                    if (result.bool) {
                        var card = cards[0],
                            cardx = game.createCard(card.name, card.suit, card.number, card.nature);
                        player.addGaintag(card, "PIfuzhi");
                        player.gain(cardx).gaintag.add("PIfuzhi");
                    }
                },
            },
            //真菌
            PIbaoya: {
                markimage: "extension/瘟疫公司/image/card/PIbaoya.png",
                intro: {
                    name: "孢子",
                    content: "◇攻击范围和手牌上限+$。",
                    markcount: storage => storage,
                },
                trigger: {
                    player: "useCardAfter",
                },
                forced: true,
                filter: (event, player) => player.countMark("PIbaoya") < 8 && !player.hasHistory("sourceDamage", evt => evt.card == event.card),
                content() {
                    player.addMark("PIbaoya", 1);
                },
                mod: {
                    attackRange(player, num) {
                        return num + player.countMark("PIbaoya");
                    },
                    maxHandcard(player, num) {
                        return num + player.countMark("PIbaoya");
                    },
                },
            },
            PIpenfa: {
                subSkill: {
                    backup: {
                        delay: false,
                        multitarget: true,
                        multiline: true,
                        filterTarget(card, player, target) {
                            if (ui.selected.targets.length && ui.selected.targets[0] != player) return target.hasMark("PIliran_mark");
                            return target == player || target.hasMark("PIliran_mark");
                        },
                        selectTarget() {
                            var player = _status.event.player;
                            var map = {};
                            for (var i = 1; i < player.countMark("PIbaoya") + 1; i++) {
                                map[get.cnNumber(i)] = i;
                            }
                            if (ui.selected.targets[0] == player) return 1;
                            return map[lib.skill.PIpenfa_backup.cnNum];
                        },
                        content() {
                            "step 0";
                            targets.sortBySeat();
                            var map = {};
                            for (var i = 1; i < player.countMark("PIbaoya") + 1; i++) {
                                map[get.cnNumber(i)] = i;
                            }
                            event.map = map;
                            event.num = map[lib.skill.PIpenfa_backup.cnNum];
                            player.removeMark("PIbaoya", event.num);
                            "step 1";
                            if (targets.length == 1 && targets[0] == player) player.draw(event.num);
                            else {
                                for (var i of targets) {
                                    i.damage("nocard");
                                }
                            }
                        },
                        ai: {
                            order: 1,
                            tag: { damage: 1 },
                            result: {
                                target(player, target) {
                                    if (player == target) {
                                        if (!player.needsToDiscard()) return 3;
                                        return 1;
                                    }
                                    if (target.hp == 1) return -3 * get.damageEffect(target, player, player);
                                    return -get.damageEffect(target, player, player);
                                },
                            },
                        },
                    },
                    shiren: {
                        trigger: {
                            player: "damageEnd",
                        },
                        filter: (event, player) => player.hasMark("PIbaoya"),
                        direct: true,
                        content() {
                            "step 0";
                            var next = player.chooseTarget();
                            next.set("prompt", get.prompt2("PIpenfa"));
                            next.set("filterTarget", lib.skill.PIpenfa_backup.filterTarget);
                            next.set("selectTarget", function () {
                                var player = _status.event.player,
                                    mc = player.countMark("PIbaoya");
                                if (ui.selected.targets[0] == player) return 1;
                                return [1, mc];
                            });
                            next.set("ai", function (target) {
                                var player = _status.event.player;
                                if (player == target) {
                                    if (!player.needsToDiscard()) return 3;
                                    return 1;
                                }
                                if (get.attitude(player, target) < 0) {
                                    if (target.hp == 1) return 3 * get.damageEffect(target, player, player);
                                    return get.damageEffect(target, player, player);
                                }
                            });
                            "step 1";
                            if (result.bool) {
                                var targets = result.targets;
                                if (targets.length == 1 && targets[0] == player) {
                                    player.logSkill("PIpenfa");
                                    var num = player.countMark("PIbaoya"),
                                        map = {},
                                        list = [];
                                    for (var i = 1; i <= num; i++) {
                                        var cn = get.cnNumber(i);
                                        map[cn] = i;
                                        list.push(cn);
                                    }
                                    event.map = map;
                                    player
                                        .chooseControl(list, () => get.cnNumber(_status.event.goon))
                                        .set("prompt", "弃置任意枚“孢子”")
                                        .set("goon", num);
                                } else {
                                    player.logSkill("PIpenfa", targets);
                                    player.removeMark("PIbaoya", targets.length);
                                    var targetsx = targets.sortBySeat(_status.currentPhase);
                                    for (var i of targetsx) {
                                        i.damage("nocard");
                                    }
                                    event.finish();
                                }
                            } else event.finish();
                            "step 2";
                            var num = event.map[result.control] || 1;
                            player.removeMark("PIbaoya", num);
                            player.draw(num);
                        },
                    },
                },
                group: "PIpenfa_shiren",
                enable: "phaseUse",
                usable: 1,
                filter: (event, player) => player.hasMark("PIbaoya"),
                chooseButton: {
                    dialog: () => ui.create.dialog(`###喷发###${lib.translate.PIpenfa_info}`),
                    chooseControl(event, player) {
                        var list = [];
                        for (var i = 1; i < player.countMark("PIbaoya") + 1; i++) {
                            list.push(get.cnNumber(i));
                        }
                        list.push("cancel2");
                        return list;
                    },
                    check: (event, player) => get.cnNumber(player.countMark("PIpenfa")),
                    backup(result) {
                        var next = get.copy(lib.skill.PIpenfa_backup);
                        next.cnNum = result.control;
                        return next;
                    },
                    prompt: result => `对${result.control}名感染角色各造成1点伤害，或选择自己摸${result.control}张牌`,
                },
                ai: {
                    order(item, player) {
                        if (player.countMark("PIbaoya") >= 8) return 13;
                        return 1;
                    },
                    result: { player: 1 },
                    maixie: true,
                    maixie_hp: true,
                    maixie_defend: true,
                    skillTagFilter: player => player.hasMark("PIbaoya"),
                    expose: 0.4,
                },
            },
            //寄生虫
            PIjifu: {
                subSkill: {
                    mark: {
                        markimage: "extension/瘟疫公司/image/card/PIjifu_mark.png",
                        intro: {
                            name: "寄生",
                            content: "<li>当你回复体力后，$回复等量的体力，当你一次得到至少两张牌后，$获得你的一张牌。</li><br/><em>寄生虫王盖小被，寄寄寄寄，被被被被</em>",
                        },
                    },
                    xianfu: {
                        charlotte: true,
                        trigger: {
                            global: ["recoverEnd", "gainAfter", "loseAsyncAfter"],
                        },
                        forced: true,
                        filter(event, player) {
                            if (!player.storage.PIjifu_xianfu) return false;
                            if (event.name == "recover") return player.storage.PIjifu_xianfu.includes(event.player) && event.num > 0 && player.isDamaged();
                            return game.hasPlayer(current => event.getg(current).length > 1 && player.storage.PIjifu_xianfu.includes(current) && current.countGainableCards(player, "he"));
                        },
                        logTarget(event, player) {
                            if (event.name == "recover") return [event.player];
                            return game.filterPlayer(current => event.getg(current).length > 1 && player.storage.PIjifu_xianfu.includes(current) && current.countGainableCards(player, "he"));
                        },
                        content() {
                            "step 0";
                            event.targets = [];
                            for (var i of lib.skill.PIjifu_xianfu.logTarget(trigger, player)) {
                                if (!i.storage.PIjifu_mark) i.storage.PIjifu_mark = [];
                                i.storage.PIjifu_mark.add(player);
                                i.storage.PIjifu_mark.sortBySeat();
                                i.markSkill("PIjifu_mark");
                                event.targets.add(i);
                            }
                            game.delayx();
                            "step 1";
                            if (trigger.name == "recover") player.recover(trigger.num);
                            else player.gainMultiple(event.targets, "he");
                        },
                        onremove(player) {
                            if (!player.storage.PIjifu_xianfu) return;
                            game.countPlayer(function (current) {
                                if (player.storage.PIjifu_xianfu.includes(current) && current.storage.PIjifu_mark) {
                                    current.storage.PIjifu_mark.remove(player);
                                    if (!current.storage.PIjifu_mark.length) current.unmarkSkill("PIjifu_mark");
                                    else current.markSkill("PIjifu_mark");
                                }
                            });
                            delete player.storage.PIjifu_xianfu;
                        },
                        group: "PIjifu_clear",
                    },
                    clear: {
                        trigger: {
                            global: "dieBegin",
                        },
                        silent: true,
                        filter(event, player) {
                            if (event.player == player) return true;
                            return player.storage.PIjifu_xianfu && player.storage.PIjifu_xianfu.includes(player);
                        },
                        content() {
                            if (player == trigger.player) lib.skill.PIjifu_xianfu.onremove(player);
                            else player.storage.PIjifu_xianfu.remove(event.player);
                        },
                    },
                },
                trigger: {
                    global: "roundStart",
                },
                forced: true,
                direct: true,
                filter: () => game.roundNumber == 1 && game.hasPlayer(current => current.canGanran()),
                content() {
                    "step 0";
                    player
                        .chooseTarget("###请挑一个你中意的角色感染###同时为其添加触发效果后才显示的“寄生”标记", true, (card, player, target) => target.canGanran())
                        .set("ai", function (target) {
                            var player = _status.event.player;
                            return get.sgn(-get.attitude(player, target));
                        });
                    "step 1";
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.logSkill("PIliran", target);
                        target.addPIliranMark();
                        if (!player.storage.PIjifu_xianfu) player.storage.PIjifu_xianfu = [];
                        player.storage.PIjifu_xianfu.push(target);
                        player.addSkill("PIjifu_xianfu");
                    }
                },
            },
            PIzidan: {
                trigger: { player: "dying" },
                unique: true,
                skillAnimation: true,
                animationColor: "gray",
                derivation: "PIchongluan",
                filter: () => game.hasPlayer(current => current.hasMark("PIliran_mark")),
                content() {
                    "step 0";
                    player.awakenSkill("PIzidan");
                    player.recover(1 - player.hp);
                    player
                        .chooseTarget("令一名感染角色获得技能〖虫卵〗", true, (card, player, target) => target.hasMark("PIliran_mark"))
                        .set("ai", function (target) {
                            var player = _status.event.player;
                            return -get.attitude(player, target);
                        });
                    "step 1";
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        target.storage.PIchongluan = player;
                        target.addSkill("PIchongluan");
                    }
                    "step 2";
                    player.addTempSkill("mianyi", { player: "phaseBegin" });
                },
                limited: true,
                markimage: "extension/瘟疫公司/image/card/PIzidan_mark.png",
            },
            PIchongluan: {
                mark: true,
                markimage: "extension/瘟疫公司/image/card/PIchongluan.png",
                intro: {
                    name: "虫卵",
                    name2: "「魔虫破壳」",
                    content: "<li>锁定技，回合结束时，你弃置一张牌并失去1点体力，然后若$存活，你令其回复1点体力；当你死亡时，$获得你所有牌并回复3点体力。</li>",
                    markcount: () => 0,
                },
                locked: true,
                onremove: true,
                group: "PIchongluan_expire",
                subSkill: {
                    expire: {
                        trigger: {
                            global: "recoverEnd",
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        filter: (event, player) => event.player == player.storage.PIchongluan && event.player.isHealthy(),
                        content() {
                            player.removeSkill("PIchongluan");
                        },
                    },
                },
                trigger: {
                    player: ["phaseEnd", "die"],
                },
                forced: true,
                filter(event, player) {
                    if (event.name == "phase") return true;
                    var target = player.storage.PIchongluan;
                    return target && target.isIn() && player.countCards("he");
                },
                forceDie: true,
                logTarget(event, player) {
                    if (event.name == "phase") return false;
                    return player.storage.PIchongluan;
                },
                content() {
                    var target = player.storage.PIchongluan;
                    "step 0";
                    if (trigger.name == "die") {
                        target.gain(player.getCards("he"), player, "giveAuto", "bySelf");
                        target.recover(3);
                        event.finish();
                    } else {
                        player.chooseToDiscard("he", true);
                        player.loseHp();
                    }
                    "step 1";
                    if (target && target.isIn()) {
                        player.line(target);
                        target.recover();
                    }
                },
            },
            //朊病毒
            PIsiluan: {
                trigger: {
                    global: "useCard2",
                },
                filter(event) {
                    if (!event.player.hasMark("PIliran_mark")) return false;
                    if (get.type(event.card) == "equip") return false;
                    var info = get.info(event.card);
                    if (info.allowMultiple == false) return false;
                    if (event.targets && !info.multitarget) {
                        if (game.hasPlayer(current => lib.filter.targetEnabled2(event.card, event.player, current))) {
                            var history = event.player.getHistory("useCard", evt => get.type(evt.card) !== "equip");
                            return history && history.indexOf(event) < Math.max(1, event.player.getDamagedHp());
                        }
                    }
                    return false;
                },
                direct: true,
                content() {
                    "step 0";
                    var info = get.info(trigger.card);
                    event.aoe = info.selectTarget == -1 && !info.toself;
                    if (event.aoe)
                        player.chooseToDiscard(get.prompt("PIsiluan"), "你可以弃一张牌，令此牌造成伤害后你摸一张牌", "he").set("ai", function (card) {
                            if (get.tag(card, "damage")) return 6 - get.value(card);
                            return 0;
                        });
                    else
                        player.chooseCardTarget({
                            filterCard: true,
                            position: "he",
                            filterTarget(card, player, target) {
                                var trigger = _status.event.getTrigger();
                                return lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                            },
                            selectTarget: info.toself ? 1 : info.selectTarget,
                            prompt: get.prompt("PIsiluan"),
                            prompt2: `你可以弃一张牌，为${get.translation(trigger.card)}重新指定目标`,
                            ai1: card => 6 - get.value(card),
                            ai2(target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                return get.effect(target, trigger.card, trigger.player, player);
                            },
                        });
                    "step 1";
                    if (result.bool) {
                        if (!event.isMine() && !event.isOnline()) game.delayx();
                        event.targets = event.aoe ? game.filterPlayer(current => lib.filter.targetEnabled2(trigger.card, trigger.player, current)).sortBySeat(_status.currentPhase) : result.targets.sortBySeat(_status.currentPhase);
                        if (!event.aoe) player.discard(result.cards);
                    } else event.finish();
                    "step 2";
                    player.logSkill("PIsiluan", event.targets);
                    player.storage.PIsiluan_draw = trigger.card;
                    player.addTempSkill("PIsiluan_draw", "useCardAfter");
                    if (!event.aoe) trigger.targets = event.targets;
                },
                subSkill: {
                    draw: {
                        trigger: {
                            global: "damageEnd",
                        },
                        forced: true,
                        charlotte: true,
                        onremove: true,
                        filter: (event, player) => player.storage.PIsiluan_draw == event.card,
                        content() {
                            player.draw(2);
                        },
                    },
                },
            },
            PIshenwei: {
                trigger: {
                    global: "damageBegin1",
                },
                forced: true,
                filter: (event, player) => {
                    if (!event.source || !event.source.isIn()) return false;
                    return (player == event.source && event.player.hasMark("PIliran_mark") && event.player.isMinHp() && event.player.isMinHandcard()) || (event.source.hasMark("PIliran_mark") && event.source.isMinHp() && event.source.isMinHandcard());
                },
                content() {
                    if (trigger.source == player) trigger.player.chooseToDiscard("he", true);
                    else trigger.num--;
                },
            },
            //纳米病毒
            PIlanjie: {
                trigger: { target: "useCardToTargeted" },
                filter(event, player) {
                    if (event.player.isPISameClanFor(player)) return false;
                    var evt = event.getParent();
                    for (var i = event.player.actionHistory.length - 1; i >= 0; i--) {
                        var history = event.player.actionHistory[i].useCard;
                        for (var evtx of history) {
                            if (evtx == evt) continue;
                            if (evtx.targets && evtx.targets.includes(player)) return false;
                        }
                        if (event.player.actionHistory[i].isRound) break;
                    }
                    return true;
                },
                forced: true,
                logTarget: "player",
                content() {
                    "step 0";
                    var choices = [],
                        choiceList = [`令此牌对${get.translation(player)}无效，然后令其摸两张牌`, `感染，然后令${get.translation(player)}获得此牌`];
                    if (!trigger.getParent().excluded.includes(player)) choices.push("选项一");
                    if (trigger.player.canGanran()) choices.push("选项二");
                    if (choices.length) {
                        if (choices.length == 1) event._result = { control: choices[0] };
                        else
                            trigger.player
                                .chooseControl(choices, function () {
                                    if (_status.event.choices.includes("选项二")) return "选项二";
                                    if (_status.event.choices.includes("选项一")) return "选项一";
                                    return "cancel2";
                                })
                                .set("prompt", "拦截：请选择一项")
                                .set("choiceList", choiceList)
                                .set("choices", choices);
                    } else event.finish();
                    "step 1";
                    if (result.control == "选项一") {
                        trigger.getParent().excluded.add(player);
                        player.draw(2);
                    } else {
                        trigger.player.addPIliranMark();
                        var cards = trigger.cards.filterInD();
                        if (cards.length) player.gain(cards, "gain2", "log");
                    }
                },
            },
            PIguozai: {
                subSkill: {
                    enhanced: {
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIguozai.png",
                        intro: {
                            content: "<li>当你使用即时牌时，你可令任意名感染角色成为额外目标；结束阶段，你摸感染角色数张牌。</li><br/><em>你已被强化了，快上！</em>",
                        },
                        group: ["PIguozai_add", "PIguozai_draw"],
                        trigger: {
                            player: "changeHp",
                        },
                        forced: true,
                        popup: false,
                        charlotte: true,
                        silent: true,
                        filter: event => event.num < 0,
                        content() {
                            player.removeSkill("PIguozai_enhanced");
                        },
                    },
                    add: {
                        trigger: {
                            player: "useCard2",
                        },
                        filter(event, player) {
                            if (!event.targets || event.targets.length != 1) return false;
                            if (["equip", "delay"].includes(get.type(event.card))) return false;
                            var info = get.info(event.card);
                            if (info.multitarget) return false;
                            if (info.allowMultiple == false) return false;
                            return game.hasPlayer(function (current) {
                                if (!current.hasMark("PIliran_mark")) return false;
                                return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                            });
                        },
                        direct: true,
                        charlotte: true,
                        content() {
                            "step 0";
                            player
                                .chooseTarget(`###过载：请选择任意名感染角色###令这些角色成为${get.translation(trigger.card)}的额外目标`, [1, Infinity], function (card, player, target) {
                                    if (!target.hasMark("PIliran_mark")) return false;
                                    var trigger = _status.event.getTrigger();
                                    return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                                })
                                .set("ai", function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, _status.event.getTrigger().card, player, player);
                                });
                            "step 1";
                            if (result.bool) {
                                if (!event.isMine() && !event.isOnline()) game.delayx();
                                event.targets = result.targets.sortBySeat(_status.currentPhase);
                            } else event.finish();
                            "step 2";
                            player.logSkill("PIguozai_add", event.targets);
                            trigger.targets.addArray(event.targets);
                        },
                    },
                    draw: {
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        forced: true,
                        charlotte: true,
                        content() {
                            player.draw(game.countPlayer(current => current.hasMark("PIliran_mark")));
                        },
                    },
                },
                enable: "phaseUse",
                limited: true,
                unique: true,
                filter: () => game.countPlayer(current => current.hasMark("PIliran_mark")) >= Math.ceil(game.countPlayer() / 2),
                skillAnimation: true,
                animationColor: "gray",
                content() {
                    "step 0";
                    player.awakenSkill("PIguozai");
                    player.drawTo(player.maxHp);
                    game.countPlayer(current => {
                        if (current.canGanran()) {
                            player.line(current);
                            current.addPIliranMark();
                        }
                    });
                    player.recover(player.maxHp - player.hp);
                    "step 1";
                    player.addSkill("PIguozai_enhanced");
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                },
                markimage: "extension/瘟疫公司/image/card/PIguozai_mark.png",
            },
            //生化武器
            PIyizhi: {
                trigger: {
                    player: "damageBegin4",
                    source: "damageBegin1",
                },
                group: "PIyizhi_fail",
                forced: true,
                dutySkill: true,
                unique: true,
                filter: (event, player) => player.hp < game.countPlayer(),
                content() {
                    "step 0";
                    game.log(player, "成功完成使命");
                    trigger.num--;
                    player.draw(2);
                    player.chooseCard("h", "抑制", "将任意张手牌当做“积”置于武将牌上", [1, Infinity]).set("ai", function (card) {
                        if (["shan", "wuxie", "caochuan"].includes(card.name)) return 2 + Math.random();
                        return 1 + Math.random();
                    });
                    "step 1";
                    if (result.bool) {
                        game.log(player, "将", result.cards, "放到了武将牌上");
                        player.addSkill("PIyizhi_mark");
                        player.loseToSpecial(result.cards, "PIyizhi_mark").visible = true;
                    } else event.finish();
                    "step 2";
                    player.markSkill("PIyizhi");
                },
                markimage: "extension/瘟疫公司/image/card/PIzhiyin_mark.png",
                intro: {
                    mark(dialog, storage, player) {
                        dialog.addAuto(player.getCards("s", card => card.hasGaintag("PIyizhi_mark")));
                    },
                    markcount(storage, player) {
                        return player.getCards("s", card => card.hasGaintag("PIyizhi_mark")).length;
                    },
                    onunmark(storage, player) {
                        var cards = player.getCards("s", card => card.hasGaintag("PIyizhi_mark"));
                        if (cards.length) {
                            player.lose(cards, ui.discardPile);
                            player.$throw(cards, 1000);
                            game.log(cards, "进入了弃牌堆");
                        }
                    },
                },
                subSkill: {
                    mark: {},
                    fail: {
                        trigger: { global: "die" },
                        forced: true,
                        async content(event, trigger, player) {
                            game.log(player, "使命失败");
                            const cards = player.getCards("s", card => card.hasGaintag("PIyizhi_mark"));
                            if (cards.length) await player.gain(cards, "gain2");
                            player.awakenSkill("PIyizhi");
                            await player.disableJudge();
                            await player.gainMaxHp();
                            player.storage.PIyizhi_fail = true;
                        },
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (get.itemtype(card) == "card" && card.hasGaintag("PIyizhi")) return num - 0.5;
                    },
                },
                ai: {
                    filterDamage: true,
                    skillTagFilter(player, tag, arg) {
                        if (player.hp >= game.countPlayer()) return false;
                        if (arg && arg.player) {
                            if (arg.player.hasSkillTag("jueqing", false, player)) return false;
                        }
                        return false;
                    },
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag("jueqing", false, target)) return;
                            if (player.hp >= game.countPlayer()) return;
                            var num = get.tag(card, "damage");
                            if (num) {
                                if (num > 1) return 0.5;
                                return 0;
                            }
                        },
                    },
                },
            },
            PIyanmie: {
                subSkill: {
                    crit: {
                        trigger: {
                            source: "damageBegin1",
                        },
                        filter: (event, player) => event.player.hasMark("PIliran_mark") && player.storage.PIyizhi_fail && player.isDamaged(),
                        forced: true,
                        content() {
                            trigger.num += player.getDamagedHp();
                        },
                    },
                },
                derivation: "PIyanmie_rewrite",
                group: "PIyanmie_crit",
                trigger: { global: "dyingAfter" },
                filter(event, player) {
                    if (event.getParent().name !== "die" || event.source !== player) return false;
                    return event.player.hasMark("PIliran_mark") && game.hasPlayer(target => target != event.player && target.hasMark("PIliran_mark"));
                },
                direct: true,
                content() {
                    "step 0";
                    player
                        .chooseTarget(get.prompt2("PIyanmie"), (card, player, target) => {
                            const trigger = get.event().getTrigger();
                            return target != trigger.player && target.hasMark("PIliran_mark");
                        })
                        .set("ai", function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                    "step 1";
                    if (result.bool) {
                        player.logSkill("PIyanmie", result.targets[0]);
                        result.targets[0].damage();
                    }
                },
            },
            //神经蠕虫
            PIjingkong: {
                trigger: { global: "phaseUseBefore" },
                filter(event, player) {
                    if (player.countMark("PIjingkong_round") >= player.maxHp) return false;
                    return event.player.hasMark("PIliran_mark");
                },
                direct: true,
                content() {
                    "step 0";
                    var choices = [],
                        choiceList = [`以${get.translation(trigger.player)}的视角使用其一张手牌`, `操控${get.translation(trigger.player)}的出牌阶段`];
                    if (trigger.player.countCards("h")) choices.push("选项一");
                    if (player.isHealthy() && !game.hasPlayer(current => current != player && current.isHealthy())) choices.push("选项二");
                    choices.push("cancel2");
                    if (choices[0] == "cancel2") event._result = { control: "cancel2" };
                    else
                        player
                            .chooseControl(choices, function () {
                                if (_status.event.choices.includes("选项二")) return "选项二";
                                if (_status.event.choices.includes("选项一")) return "选项一";
                                return "cancel2";
                            })
                            .set("prompt", get.prompt("PIjingkong"))
                            .set("choiceList", choiceList)
                            .set("choices", choices);
                    "step 1";
                    if (result.control != "cancel2") {
                        player.logSkill("PIjingkong", trigger.player);
                        player.addTempSkill("PIjingkong_round", "roundStart");
                        player.addMark("PIjingkong_round", 1, false);
                        if (result.control == "选项一") {
                            if (game.me == player) {
                                event.auto = true;
                                game.PI_swapPlayer(trigger.player);
                                var current = game.me;
                            } else var current = trigger.player;
                            current
                                .chooseCardTarget({
                                    filterCard: (card, player) => player.hasUseTarget(card),
                                    position: "hs",
                                    filterTarget: (card, player, target) => lib.filter.filterTarget(ui.selected.cards[0], _status.event.source, target),
                                    selectTarget() {
                                        var card = ui.selected.cards[0],
                                            player = _status.event.source;
                                        if (card == undefined) return;
                                        var range;
                                        var select = get.copy(get.info(card).selectTarget);
                                        if (select == undefined) {
                                            if (get.info(card).filterTarget == undefined) return [0, 0];
                                            range = [1, 1];
                                        } else if (typeof select == "number") range = [select, select];
                                        else if (get.itemtype(select) == "select") range = select;
                                        else if (typeof select == "function") range = select(card, player);
                                        game.checkMod(card, player, range, "selectTarget", player);
                                        return range;
                                    },
                                    ai1: card => _status.event.source2.getUseValue(card),
                                    ai2(target) {
                                        var evt = _status.event;
                                        return get.effect(target, ui.selected.cards[0], _status.event.source, _status.event.current);
                                    },
                                    prompt: `选择${get.translation(trigger.player)}需使用的一张手牌与需指定的目标`,
                                })
                                .set("source", trigger.player)
                                .set("source2", player);
                        } else {
                            player.loseHp();
                            if (trigger.player.hasMark("PIjingkong")) {
                                trigger.player.chooseToGive(player, "he", true);
                            }
                            event.goto(3);
                        }
                    } else event.finish();
                    "step 2";
                    if (event.auto) game.swapPlayerAuto(player);
                    if (result.bool) {
                        trigger.player.useCard(result.cards[0], result.targets, "noai", "PIjingkong");
                        player.chooseToDiscard(true, 2, "he");
                    }
                    "step 3";
                    trigger.player.goMad('roundStart');
                    event.finish();
                    "step 4";
                    trigger.player.addMark("PIjingkong", 1);
                    trigger.player._trueMe = player;
                    game.addGlobalSkill("autoswap");
                    if (trigger.player == game.me) {
                        game.notMe = true;
                        if (!_status.auto) ui.click.auto();
                    }
                    trigger.player.addSkill("PIjingkong_release");
                    game.log("#yBe one", " with ", "#bNeurax Worm");
                },
                intro: {
                    name: "虫神",
                    content: "Neurax蠕虫是至高无上的神！",
                },
                group: "PIjingkong_effect",
                markimage: "extension/瘟疫公司/image/card/PIjingkong_mark.png",
                subSkill: {
                    round: { charlotte: true, onremove: true },
                    release: {
                        trigger: {
                            player: ["phaseUseAfter", "dieAfter"],
                            global: "phaseBefore",
                        },
                        lastDo: true,
                        charlotte: true,
                        forceDie: true,
                        forced: true,
                        silent: true,
                        content() {
                            player.removeSkill("PIjingkong_release");
                        },
                        onremove(player) {
                            if (player == game.me) {
                                if (!game.notMe) game.swapPlayerAuto(player._trueMe);
                                else delete game.notMe;
                                if (_status.auto) ui.click.auto();
                            }
                            delete player._trueMe;
                            player.goMad('roundStart');
                        },
                    },
                    effect: {
                        trigger: { global: "useCardToPlayered" },
                        filter(event, player) {
                            if (event.player !== event.target) return false;
                            if (player.countMark("PIjingkong_round") >= player.maxHp) return false;
                            return event.player.hasMark("PIliran_mark");
                        },
                        logTarget: "player",
                        check(event, player) {
                            const target = event.player;
                            return get.effect(target, { name: "shunshou_copy2" }, player, player) - get.effect(target, event.card, target, player) > 0;
                        },
                        prompt2(event, player) {
                            return "令" + get.translation(event.card) + "对" + get.translation(event.player) + "无效，然后其交给你一张牌";
                        },
                        async content(event, trigger, player) {
                            player.addTempSkill("PIjingkong_round", "roundStart");
                            player.addMark("PIjingkong_round", 1, false);
                            const target = trigger.player;
                            trigger.getParent().excluded.add(target);
                            game.log(trigger.card, "对", target, "无效");
                            await target.chooseToGive(player, "he", true);
                        },
                    },
                },
            },
            PIchongji: {
                subSkill: {
                    praise: {
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/worm_plane.png",
                        intro: {
                            name: "天赐飞机",
                            content: "<li>当你于回合内使用首张单目标牌指定目标后，感染目标角色。</li><br/><em>再见了妈妈，今晚我就要远航</em>",
                        },
                        trigger: {
                            player: "useCardToPlayered",
                        },
                        forced: true,
                        charlotte: true,
                        logTarget: "targets",
                        filter(event, player) {
                            if (_status.currentPhase != player) return false;
                            var info = get.info(event.card);
                            if (info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
                            if (
                                player
                                    .getHistory("useCard", function (evt) {
                                        var info = get.info(evt.card);
                                        if (info.notarget || (info.selectTarget && info.selectTarget != 1)) return false;
                                        return true;
                                    })
                                    .indexOf(event.getParent()) != 0
                            )
                                return false;
                            return event.targets.some(i => i.canGanran());
                        },
                        content() {
                            for (var i of trigger.targets) {
                                if (i.canGanran()) i.addPIliranMark();
                            }
                        },
                    },
                },
                enable: "phaseUse",
                usable: 1,
                filter: (event, player) => player.countCards("he") > 0,
                filterTarget: (card, player, target) => !player.isPISameClanFor(target),
                filterCard: true,
                position: "he",
                check: card => 8 - get.value(card),
                discard: false,
                lose: false,
                delay: false,
                content() {
                    "step 0";
                    player.give(cards[0], target);
                    target.addPIliranMark();
                    "step 1";
                    if (
                        game.countPlayer(i => i.hasMark("PIliran_mark")) >
                        game.countPlayer(i => {
                            return !player.isPISameClanFor(i) && !i.hasMark("PIliran_mark");
                        })
                    ) {
                        player.chooseBool("是否对" + get.translation(target) + "造成1点伤害？").set("choice", get.damageEffect(target, player, player) > 0);
                    } else event.goto(3);
                    "step 2";
                    if (result.bool) {
                        player.line(target);
                        target.damage();
                    }
                    "step 3";
                    if (!target.isIn()) return;
                    target.addSkill("PIchongji_praise");
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                    threaten: 2,
                },
                locked: false,
                mod: {
                    maxHandcard(player, num) {
                        return (
                            num +
                            game.filterPlayer().reduce((sum, target) => {
                                return sum + 2 * target.countMark("PIjingkong");
                            }, 0)
                        );
                    },
                },
            },
            PIzisha: {
                trigger: {
                    global: "useCard2",
                },
                filter(event, player) {
                    if (!event.targets) return false;
                    if (["equip", "delay"].includes(get.type(event.card))) return false;
                    var info = get.info(event.card);
                    if (info.multitarget) return false;
                    if (info.allowMultiple == false) return false;
                    if (event.player == player) return false;
                    return ((event.skill && event.skill == "PIjingkong") || (event.player._trueMe && event.player._trueMe == player)) && !event.targets.includes(event.player) && lib.filter.PI_targetEnabled5(event.card, event.player, event.player);
                },
                logTarget: "player",
                check: (event, player) => get.effect(event.player, event.card, event.player, player),
                async content(event, trigger, player) {
                    const target = trigger.player;
                    trigger.targets.add(trigger.player);
                    game.log(target, "成为了", trigger.card, "的额外目标");
                    trigger.directHit.add(trigger.player);
                    game.log(target, "不可响应", trigger.card);
                    if (target.hasMark("PIjingkong")) {
                        await player.viewHandcards(target);
                        await target.chooseToGive(player, "he", true);
                    }
                },
            },
            PIsusheng: {
                trigger: { global: "dying" },
                filter(event, player) {
                    if (player.isPISameClanFor(event.player)) return false;
                    return !player.getAllHistory("useSkill", evt => evt.skill == "PIsusheng" && evt.targets.includes(event.player)).length;
                },
                logTarget: "player",
                check(event, player) {
                    return get.recoverEffect(event.player, player, player) > 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    await target.recoverTo(1);
                    await target.addPIliranMark();
                    target.addMark("PIsusheng", 1);
                    const card = new lib.element.VCard({ name: "sha" });
                    if (target.hasUseTarget(card, false)) {
                        const result = await player
                            .chooseTarget("是否令" + get.translation(target) + "视为对一名角色使用【杀】？", "若造成伤害，则你与其各摸两张牌", (card, player, target) => {
                                const cardx = new lib.element.VCard({ name: "sha" });
                                return get.event("target").canUse(cardx, target, false);
                            })
                            .set("ai", target => {
                                const card = new lib.element.VCard({ name: "sha" });
                                return get.effect(target, card, get.event("target"), get.event("player"));
                            })
                            .set("target", target)
                            .forResult();
                        if (result.bool) {
                            const aim = result.targets[0];
                            if (target != player) {
                                await game.asyncDelay(0.25);
                                player.line2([target, aim]);
                            }
                            await target.useCard(card, aim, false).set("animate", target == player);
                            if (
                                target.getHistory("sourceDamage", evt => {
                                    return evt.getParent(3) == event;
                                }).length
                            ) {
                                await target.recover();
                                await player.draw(2, "nodelay");
                                await target.draw(2);
                            }
                        }
                    }
                },
                markimage: "extension/瘟疫公司/image/card/PIsusheng_mark.png",
                intro: {
                    name2: "尸",
                    content: "mark",
                },
            },
            PIliushi: {
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => player.inRange(target));
                },
                filterTarget(card, player, target) {
                    return player.inRange(target);
                },
                usable: 1,
                prompt() {
                    return lib.translate["PIliushi_info"].split("②")[0].slice(1);
                },
                async content(event, trigger, player) {
                    let num = game.countPlayer(cur => cur.hasMark("PIsusheng")) + 1;
                    let targets = [],
                        current = event.target.getNext();
                    while (current != player) {
                        targets.add(current);
                        current = current.getNext();
                    }
                    const card = new lib.element.VCard({ name: "sha" });
                    while (
                        targets.some(i => player.canUse(card, i, false)) &&
                        !player.getHistory("sourceDamage", evt => {
                            return evt.getParent(3) == event;
                        }).length &&
                        num > 0
                    ) {
                        const i = targets.shift();
                        if (player.canUse(card, i, false)) {
                            num--;
                            await player.useCard(card, i, false);
                        }
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            const sgn = get.sgn(get.sgn(get.attitude(player, target)) - 0.5);
                            let targets = [],
                                current = target.getNext();
                            while (current != player) {
                                targets.add(current);
                                current = current.getNext();
                            }
                            const card = new lib.element.VCard({ name: "sha" });
                            return (
                                sgn *
                                targets.reduce((sum, i) => {
                                    if (player.canUse(card, i, false)) {
                                        return sum + get.effect(i, card, player, player);
                                    }
                                    return sum;
                                }, 0)
                            );
                        },
                    },
                },
                group: "PIliushi_zhangxianzhong",
                subSkill: {
                    zhangxianzhong: {
                        trigger: { player: "phaseJieshuBegin" },
                        filter(event, player) {
                            return game.hasPlayer(cur => cur.hasMark("PIsusheng"));
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget(
                                    get.prompt("PIliushi"),
                                    (card, player, target) => {
                                        return target.hasMark("PIsusheng");
                                    },
                                    lib.translate["PIliushi_info"].split("②")[1],
                                    [1, Infinity]
                                )
                                .set("ai", target => {
                                    const player = get.player();
                                    return get.effect(target, { name: "losehp" }, player, player);
                                })
                                .forResult();
                        },
                        async content(event, trigger, player) {
                            const targets = event.targets.sortBySeat();
                            for (const i of targets) await i.loseHp();
                            if (game.hasPlayer(target => target.hasMark("PIliran_mark"))) {
                                const result = await player
                                    .chooseTarget(
                                        (card, player, target) => {
                                            return target.hasMark("PIliran_mark");
                                        },
                                        "是否对至多" + get.cnNumber(targets.length) + "名感染角色各造成1点伤害",
                                        [1, targets.length]
                                    )
                                    .set("ai", target => {
                                        const player = get.player();
                                        return get.damageEffect(target, player, player);
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    player.line(result.targets);
                                    for (const j of result.targets.sortBySeat()) await j.damage();
                                }
                            }
                        },
                    },
                },
            },
            PIshichao: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == "sha") return num + game.dead.filter(i => !player.isPISameClanFor(i)).length;
                    },
                },
                trigger: {
                    player: "phaseJieshuBegin",
                    global: "damageSource",
                },
                filter(event, player) {
                    if (event.name === "damage") {
                        if (!event.player.isIn() || !event.player.hasMark("PIliran_mark")) return false;
                        if (!event.source?.isIn() || (event.source !== player && !event.source.hasMark("PIsusheng"))) return false;
                        return event.source.getHp() >= event.player.getHp();
                    }
                    return game.dead.some(i => !player.isPISameClanFor(i));
                },
                forced: true,
                content() {
                    if (trigger.name === "damage") {
                        const target = trigger.player;
                        player.line(target);
                        target.addMark("PIsusheng", 1);
                        return;
                    }
                    let names = [],
                        cards = [];
                    while (cards.length < game.dead.filter(i => !player.isPISameClanFor(i)).length) {
                        const card = get.cardPile2(card => {
                            return !cards.includes(card) && card.name == "sha" && get.type(card) == "basic";
                        });
                        if (card) {
                            cards.push(card);
                            names.push(card.name);
                        } else break;
                    }
                    if (cards.length) player.gain(cards, "gain2");
                },
            },
            PIhengxuan: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    return (
                        event.player.isIn() &&
                        event.player.hasMark("PIliran_mark") &&
                        game.hasPlayer(target => {
                            return (target.canGanran() || (target.hasMark("PIliran_mark") && target.countCards("h"))) && (event.player.getNext() == target || event.player.getPrevious() == target);
                        })
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2("PIhengxuan"), (card, player, target) => {
                            const trigger = get.event().getTrigger();
                            return (target.canGanran() || (target.hasMark("PIliran_mark") && target.countCards("h"))) && (trigger.player.getNext() == target || trigger.player.getPrevious() == target);
                        })
                        .set("ai", target => {
                            const player = get.player();
                            if (target.canGanran()) return 114514 - get.attitude(player, target);
                            return -get.attitude(player, target) * Math.max(0, player.getHp() - 1);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    if (target.canGanran()) {
                        await target.addPIliranMark();
                    } else {
                        await player.loseHp();
                        player.logSkill("PIheisi", target);
                        let cards,
                            result,
                            cardx = target.getCards("h"),
                            max = Math.max(1, target.getDamagedHp());
                        if (cardx.length <= max) {
                            cards = cardx.slice();
                        } else {
                            cards = await player
                                .choosePlayerCard(target, "h", max, true)
                                .set("ai", button => 1 + Math.random())
                                .forResult("cards");
                        }
                        if (!cards || !cards.length) return;
                        await player.showCards(cards, get.translation(player) + "发动了【黑死】");
                        const red = cards.some(i => get.color(i) == "red"),
                            black = cards.some(i => get.color(i) == "black");
                        if (!red && !black) return;
                        if (red && black) {
                            const {
                                result: { bool },
                            } = await player.chooseBool("是否与其各失去1点体力，然后摸" + get.cnNumber(max) + "张牌，令" + get.translation(target) + "执行所有选项？").set("choice", player.getHp() > 1);
                            if (bool) {
                                await player.loseHp();
                                player.line(target);
                                await target.loseHp();
                                await player.draw(max);
                                result = { control: "all" };
                            } else {
                                result = await target
                                    .chooseControl("black", "red")
                                    .set("choiceList", ["令" + get.translation(player) + "获得其中的黑色牌（其使用这些牌不计入次数限制）", "弃置其中的红色牌，然后受到" + get.translation(player) + "对你造成的1点伤害"])
                                    .set("ai", () => {
                                        return cards.filter(i => get.color(i) == "red") - cards.filter(i => get.color(i) == "black") > 0 ? "black" : "red";
                                    })
                                    .set("cards", cards)
                                    .forResult();
                            }
                        } else result = { control: red ? "red" : "black" };
                        const control = result.control;
                        if (control != "red") {
                            player.addSkill("PIheisi_buff");
                            await player
                                .gain(
                                    cards.filter(i => get.color(i) == "black"),
                                    "give",
                                    target,
                                    "bySelf"
                                )
                                .gaintag.add("PIheisi_buff");
                        }
                        if (control != "black") {
                            await target.discard(cards.filter(i => get.color(i) == "red"));
                            player.line(target);
                            await target.damage();
                        }
                    }
                },
            },
            PIheisi: {
                trigger: { global: ["phaseBegin", "phaseEnd"] },
                filter(event, player) {
                    return (
                        event.player.hasMark("PIliran_mark") &&
                        event.player.countCards("h") &&
                        player.countCards("he", card => {
                            if (get.position(card) == "h" && _status.connectMode) return true;
                            return get.color(card) == "black" && lib.filter.cardDiscardable(card, player);
                        })
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseToDiscard(
                            get.prompt2("PIheisi"),
                            (card, player) => {
                                return get.color(card) == "black";
                            },
                            "he"
                        )
                        .set("ai", card => {
                            const player = get.event("player"),
                                target = get.event().getTrigger().player;
                            if (get.attitude(player, target) >= 0) return 0;
                            return 7 - get.value(card);
                        })
                        .set("logSkill", ["PIheisi", trigger.player])
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    let cards,
                        result,
                        cardx = target.getCards("h"),
                        max = Math.max(1, target.getDamagedHp());
                    if (cardx.length <= max) {
                        cards = cardx.slice();
                    } else {
                        cards = await player
                            .choosePlayerCard(target, "h", max, true)
                            .set("ai", button => 1 + Math.random())
                            .forResult("cards");
                    }
                    if (!cards || !cards.length) return;
                    await player.showCards(cards, get.translation(player) + "发动了【黑死】");
                    const red = cards.some(i => get.color(i) == "red"),
                        black = cards.some(i => get.color(i) == "black");
                    if (!red && !black) return;
                    if (red && black) {
                        const {
                            result: { bool },
                        } = await player.chooseBool("是否与其各失去1点体力，然后摸" + get.cnNumber(max) + "张牌，令" + get.translation(target) + "执行所有选项？").set("choice", player.getHp() > 1);
                        if (bool) {
                            await player.loseHp();
                            player.line(target);
                            await target.loseHp();
                            await player.draw(max);
                            result = { control: "all" };
                        } else {
                            result = await target
                                .chooseControl("black", "red")
                                .set("choiceList", ["令" + get.translation(player) + "获得其中的黑色牌（其使用这些牌不计入次数限制）", "弃置其中的红色牌，然后受到" + get.translation(player) + "对你造成的1点伤害"])
                                .set("ai", () => {
                                    return cards.filter(i => get.color(i) == "red") - cards.filter(i => get.color(i) == "black") > 0 ? "black" : "red";
                                })
                                .set("cards", cards)
                                .forResult();
                        }
                    } else result = { control: red ? "red" : "black" };
                    const control = result.control;
                    if (control != "red") {
                        player.addSkill("PIheisi_buff");
                        const next = player.gain(
                            cards.filter(i => get.color(i) == "black"),
                            "give",
                            target,
                            "bySelf"
                        );
                        next.gaintag.add("PIheisi_buff");
                        await next;
                    }
                    if (control != "black") {
                        await target.discard(cards.filter(i => get.color(i) == "red"));
                        player.line(target);
                        await target.damage();
                    }
                },
                subSkill: {
                    buff: {
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.hasGaintag("PIheisi_buff")) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == "phaseDiscard" && card.hasGaintag("PIheisi_buff")) return false;
                            },
                            aiOrder(player, card, num) {
                                if (get.itemtype(card) == "card" && card.hasGaintag("PIheisi_buff")) return num + 0.1;
                            },
                        },
                        charlotte: true,
                        trigger: { player: "useCard0" },
                        filter(event, player) {
                            if (event.addCount === false) return false;
                            return player.hasHistory("lose", evt => {
                                if (evt.getParent() !== event) return false;
                                return Object.values(evt.gaintag_map).flat().includes("PIheisi_buff");
                            });
                        },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.addCount = false;
                            player.stat[player.stat.length - 1].card[trigger.card.name]--;
                        },
                    },
                },
            },
            PIpinxue: {
                trigger: { global: ["recoverEnd", "loseHpEnd"] },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark");
                },
                forced: true,
                logTarget: "player",
                content() {
                    const target = trigger.player;
                    if (_status.currentPhase === target) {
                        target.addTempSkill("PIpinxue_1");
                        target.addMark("PIpinxue_1", 1, false);
                        target.chooseToDiscard("he", true);
                    } else {
                        target.addTempSkill("PIpinxue_2", { player: "phaseEnd" });
                        target.addMark("PIpinxue_2", 1, false);
                        player.draw();
                    }
                },
                subSkill: {
                    1: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark("PIpinxue_1");
                            },
                        },
                        markimage: "extension/瘟疫公司/image/card/PIpinxue.png",
                        intro: { content: "手牌上限-#" },
                    },
                    2: {
                        charlotte: true,
                        onremove: true,
                        trigger: { player: "phaseDrawBegin2" },
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.num -= player.countMark("PIpinxue_2");
                        },
                        markimage: "extension/瘟疫公司/image/card/PIpinxue.png",
                        intro: { content: "下个回合的摸牌阶段少摸#张牌" },
                    },
                },
            },
            PIhuaiju: {
                trigger: { player: "useCardToPlayered" },
                filter(event, player) {
                    return event.player.isDamaged() && event.player.hasMark("PIliran_mark");
                },
                logTarget: "target",
                forced: true,
                locked: false,
                async content(event, trigger, player) {
                    const target = trigger.target,
                        num = target.getDamagedHp();
                    if (num > 0) {
                        await player.draw();
                    }
                    if (num > 1) {
                        await player.discardPlayerCard(target, "he", true);
                    }
                    if (num >= player.getHp() && (!trigger.getParent().directHit || !trigger.getParent().directHit.includes(target))) {
                        const bool = await player
                            .chooseBool("坏疽：是否令" + get.translation(target) + "不可响应此牌？")
                            .set("choice", get.attitude(player, target) <= 0)
                            .forResult("bool");
                        if (bool) {
                            trigger.getParent().directHit.add(target);
                        }
                    }
                },
                group: ["PIhuaiju_ganran", "PIhuaiju_loseHp"],
                subSkill: {
                    ganran: {
                        trigger: { global: "loseHpEnd" },
                        filter(event, player) {
                            return game.hasPlayer(target => {
                                return target.canGanran();
                            });
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget("坏疽：请感染一名角色", (card, player, target) => {
                                    return target.canGanran();
                                })
                                .set("ai", target => {
                                    return 114514 - get.attitude(get.event("player"), target);
                                })
                                .forResult();
                        },
                        content() {
                            event.targets[0].addPIliranMark();
                        },
                    },
                    loseHp: {
                        trigger: { global: "die" },
                        filter(event, player) {
                            return (
                                event.player.hasMark("PIliran_mark") &&
                                game.hasPlayer(target => {
                                    return !target.hasClan("瘟疫公司") && (target == event.player.getPrevious() || target == event.player.getNext());
                                })
                            );
                        },
                        logTarget(event, player) {
                            return game.filterPlayer(target => {
                                return !target.hasClan("瘟疫公司") && (target == event.player.getPrevious() || target == event.player.getNext());
                            });
                        },
                        check(event, player) {
                            return (
                                game
                                    .filterPlayer(target => {
                                        return !target.hasClan("瘟疫公司") && (target == event.player.getPrevious() || target == event.player.getNext());
                                    })
                                    .reduce((sum, target) => sum + get.effect(target, { name: "losehp" }, player, player), 0) >= 0
                            );
                        },
                        prompt2(event, player) {
                            return (
                                "令" +
                                get.translation(
                                    game.filterPlayer(target => {
                                        return !target.hasClan("瘟疫公司") && (target == event.player.getPrevious() || target == event.player.getNext());
                                    })
                                ) +
                                "各失去1点体力"
                            );
                        },
                        content() {
                            const targets = game.filterPlayer(target => {
                                return !target.hasClan("瘟疫公司") && (target == trigger.player.getPrevious() || target == trigger.player.getNext());
                            });
                            for (const i of targets) i.loseHp(i.isHealthy() ? 2 : 1);
                        },
                    },
                },
            },
            PIlieran: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    const target = event.player;
                    if (!target.isIn()) return false;
                    return player.inRange(target) && target.canGanran();
                },
                forced: true,
                logTarget: "player",
                content() {
                    trigger.player.addPIliranMark();
                },
            },
            PIhuanong: {
                trigger: {
                    source: "damageSource",
                    player: "useCardToPlayered",
                },
                filter(event, player) {
                    const target = lib.skill.PIhuanong.logTarget(event, player);
                    if (!target || !target.isIn() || !target.hasMark("PIliran_mark")) return false;
                    if (event.name == "useCardToPlayered") {
                        if (event.card.name != "sha" || target.isHealthy()) return false;
                    }
                    const storage = player.storage.PIhuanong_used;
                    if (storage && (storage[target.playerid] || 0) > 1) return false;
                    return target.countCards("h");
                },
                logTarget(event, player) {
                    return event[event.name == "damage" ? "player" : "target"];
                },
                check(event, player) {
                    const target = lib.skill.PIhuanong.logTarget(event, player);
                    return get.attitude(player, target) <= 0;
                },
                async content(event, trigger, player) {
                    const target = lib.skill.PIhuanong.logTarget(trigger, player);
                    if (!player.storage.PIhuanong_used) {
                        player.storage.PIhuanong_used = {};
                        player.when({ global: "roundStart" }).then(() => {
                            delete player.storage.PIhuanong_used;
                        });
                    }
                    if (!player.storage.PIhuanong_used[target.playerid]) {
                        player.storage.PIhuanong_used[target.playerid] = 0;
                    }
                    player.storage.PIhuanong_used[target.playerid]++;
                    let cards,
                        cardx = target.getCards("h"),
                        max = Math.max(1, target.getDamagedHp());
                    if (cardx.length <= max) {
                        cards = cardx.slice();
                    } else {
                        cards = await player
                            .choosePlayerCard(target, "h", max, true)
                            .set("ai", button => 1 + Math.random())
                            .forResult("cards");
                    }
                    if (!cards || !cards.length) return;
                    await player.showCards(cards, get.translation(player) + "发动了【化脓】");
                    const red = cards.filter(i => get.color(i) == "red"),
                        black = cards.filter(i => get.color(i) == "black" && lib.filter.canBeDiscarded(i, player, target));
                    if (black.length) {
                        const bool = await player
                            .chooseBool("化脓：是否弃置" + get.translation(black) + "？")
                            .set("choice", get.attitude(player, target) < 0)
                            .forResult("bool");
                        if (bool) {
                            player.line(target);
                            await target.discard(black).set("discarder", player);
                        }
                    }
                    if (red.length) {
                        let control,
                            gains = red.filter(i => lib.filter.canBeGained(i, player, target));
                        if (!gains.length) {
                            control = "摸牌";
                        } else {
                            control = await player
                                .chooseControl("拿牌", "摸牌")
                                .set("prompt", "化脓：请选择一项")
                                .set("choiceList", ["获得" + get.translation(gains), "摸" + get.cnNumber(red.length) + "张牌"])
                                .set("ai", () => {
                                    return get.event("goon") ? "摸牌" : "拿牌";
                                })
                                .set("goon", red.length - gains.length)
                                .forResult("control");
                        }
                        player.line(target);
                        if (control == "拿牌") await player.gain(gains, target, "give", "bySelf");
                        else await player.draw(red.length);
                    }
                },
            },
            //霍乱
            PItuoshui: {
                trigger: {
                    global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                },
                getIndex(event, player) {
                    return game
                        .filterPlayer(target => {
                            if (!target.hasMark("PIliran_mark")) return false;
                            const evt = event.getl(target);
                            return evt && (evt.cards2 || []).filter(card => get.color(card, target) == "black").length >= Math.max(1, target.getHp());
                        })
                        .sortBySeat();
                },
                filter(event, player, name, target) {
                    return target?.isIn();
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                forced: true,
                async content(event, trigger, player) {
                    await event.targets[0].loseHp();
                    await player.draw();
                },
            },
            PIlansi: {
                trigger: { global: "phaseDiscardEnd" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark") && (event.cards || []).some(card => get.color(card, event.player) == "black");
                },
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        cards = (trigger.cards || []).filter(card => get.color(card, target) == "black");
                    let result = await player
                        .chooseButton([get.prompt2("PIlansi"), cards], [1, Math.max(target.getDamagedHp(), 1)])
                        .set("ai", () => {
                            return 1 + Math.random();
                        })
                        .forResult();
                    if (result.bool && (result.links || []).length) {
                        result.targets = [target];
                        result.cards = result.links.slice();
                        delete result.links;
                    }
                    event.result = result;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        cards = event.cards;
                    player.addSkill("PIlansi_effect");
                    player.markAuto("PIlansi_effect", cards);
                    const next = player.chooseToMove();
                    next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
                    next.set("prompt", "蓝死：点击将牌移动到牌堆顶或牌堆底");
                    next.processAI = list => {
                        const cards = list[0][1],
                            player = get.event("player");
                        const top = [],
                            target = player.getNext();
                        const judges = target.getCards("j"),
                            att = get.attitude(player, target);
                        const judge = (card, num) => get.judge(card) * num;
                        let stopped = false;
                        if (!player.hasWuxie()) {
                            for (let i = 0; i < judges.length; i++) {
                                cards.sort((a, b) => judge(b, att) - judge(a, att));
                                if (judge(cards[0], att) < 0) {
                                    stopped = true;
                                    break;
                                } else {
                                    top.unshift(cards.shift());
                                }
                            }
                        }
                        let bottom;
                        if (!stopped) {
                            cards.sort((a, b) => get.value(b, target) * att - get.value(a, target) * att);
                            while (cards.length) {
                                if (att <= 0 && get.value(cards[0], target) > 5) break;
                                if (att > 0 && get.value(cards[0], target) <= 5) break;
                                top.unshift(cards.shift());
                            }
                        }
                        bottom = cards;
                        return [top, bottom];
                    };
                    const {
                        result: { moved },
                    } = await next;
                    player.$throw(cards.length, 1000);
                    const top = moved[0].reverse(),
                        bottom = moved[1];
                    game.cardsGotoPile(top.concat(bottom), ["top_cards", top], (event, card) => {
                        if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
                        return null;
                    });
                    player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
                    game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶，将" + get.cnNumber(bottom.length) + "张牌置于牌堆底");
                    game.asyncDelayx();
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: {
                            global: ["gainAfter", "loseAsyncAfter"],
                        },
                        filter(event, player) {
                            if (!event.getg) return false;
                            return game.hasPlayer(target => {
                                return event.getg(target).some(card => player.getStorage("PIlansi_effect").includes(card));
                            });
                        },
                        async cost(event, trigger, player) {
                            let targets = game.filterPlayer(target => {
                                return trigger.getg(target).some(card => player.getStorage("PIlansi_effect").includes(card));
                            }),
                                removeTargets = targets.filter(i => {
                                    if (i == player) return true;
                                    return player.getClans().some(tag => i.getClans().includes(tag));
                                });
                            if (removeTargets.length) {
                                targets.removeArray(removeTargets);
                                for (const i of removeTargets) {
                                    const cards = trigger.getg(i).filter(card => player.getStorage("PIlansi_effect").includes(card));
                                    player.unmarkAuto("PIlansi_effect", cards);
                                }
                            }
                            event.result = { bool: Boolean(targets.length), targets: targets };
                        },
                        async content(event, trigger, player) {
                            const targets = event.targets;
                            for (const target of targets) {
                                if (target.canGanran()) await target.addPIliranMark();
                                const cards = trigger.getg(target).filter(card => player.getStorage("PIlansi_effect").includes(card));
                                player.unmarkAuto("PIlansi_effect", cards);
                                target.addGaintag(cards, "PIlansi_mark");
                                target.addTempSkill("PIlansi_buff");
                                target.addMark(
                                    "PIlansi_buff",
                                    target.countCards("h", card => card.hasGaintag("PIlansi_buff")),
                                    false
                                );
                            }
                        },
                    },
                    mark: {},
                    buff: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: "手牌上限-#" },
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark("PIlansi_buff");
                            },
                        },
                    },
                },
            },
            //裂头蚴
            //送你的蛇酒写法，不收费
            PIshejiu: {
                trigger: { global: "useCardAfter" },
                filter(event, player) {
                    if (!event.player.canGanran() && event.player.hasMark("PIshejiu_mark")) return false;
                    return event.card.name == "jiu" && !player.getClans().some(tag => event.player.getClans().includes(tag));
                },
                forced: true,
                logTarget: "player",
                async content(event, trigger, player) {
                    const result = await player
                        .judge(card => {
                            return get.color(card) == "black" ? -5 : 5;
                        })
                        .set("judge2", result => (result.bool === false ? true : false))
                        .forResult();
                    if (result.color == "black") {
                        if (trigger.player.canGanran()) {
                            await trigger.player.addPIliranMark();
                        }
                        if (!trigger.player.hasMark("PIshejiu_mark")) {
                            trigger.player.addMark("PIshejiu_mark", 1);
                        }
                    }
                },
                group: "PIshejiu_damage",
                subSkill: {
                    mark: {
                        markimage: "extension/瘟疫公司/image/card/PInaolie_mark.png",
                        intro: { content: "mark" },
                    },
                    damage: {
                        trigger: { global: ["useCard", "damageSource"] },
                        filter(event, player) {
                            if (event.name == "damage" && (!event.source?.isIn() || event.num <= 1)) return false;
                            const target = event[event.name == "useCard" ? "player" : "source"];
                            if (!target.isIn() || !target.hasMark("PIshejiu_mark")) return false;
                            return event.name === "damage" || event.card.name === "jiu";
                        },
                        forced: true,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const target = trigger[trigger.name == "useCard" ? "player" : "source"];
                            await target.loseHp();
                            if (trigger.name == "damage") {
                                await target.chooseToDiscard("he", true, trigger.num - 1);
                            }
                        },
                    },
                },
            },
            PInaolie: {
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => {
                        return lib.skill.PInaolie.filterTarget(null, player, target);
                    });
                },
                filterTarget(card, player, target) {
                    return target.hasMark("PIliran_mark") && target.countCards("h");
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    await player.viewHandcards(target);
                    if (!target.hasMark("PIshejiu_mark")) {
                        target.addMark("PIshejiu_mark", 1);
                    }
                    const map = { 1: "奇数", 0: "偶数" };
                    const list = target
                        .getCards("h", card => {
                            return typeof get.number(card) == "number";
                        })
                        .reduce((all, card) => {
                            return all.add(get.number(card) % 2);
                        }, [])
                        .sort((a, b) => b - a);
                    if (list.length > 1) {
                        const control = await target
                            .chooseControl(list.map(i => map[parseFloat(i)]))
                            .set("prompt", "选择保留一类手牌")
                            .set("ai", () => {
                                const player = get.event("player");
                                const num = player.countCards("h", card => {
                                    return typeof get.number(card) == "number" && get.number(card) % 2 == 1;
                                });
                                return num * 2 >= player.countCards("h") ? "奇数" : "偶数";
                            })
                            .forResult("control");
                        await target.discard(
                            target.getDiscardableCards(target, "h").filter(card => {
                                return typeof get.number(card) != "number" || get.number(card) % 2 != (control == "奇数" ? 1 : 0);
                            })
                        );
                    }
                    if (target.countCards("h")) {
                        const colors = target.getGainableCards(player, "h").reduce((all, card) => {
                            return all.add(get.color(card));
                        }, []);
                        let chooseColors = ["black", "red"];
                        if (colors.includes("none")) chooseColors.push("none2");
                        const control = await player
                            .chooseControl(chooseColors)
                            .set("dialog", ["###选择获得" + get.translation(target) + "一种颜色的手牌，然后对其造成1点伤害" + "###若" + get.translation(target) + "没有你选择的颜色，则你再对其造成1点伤害", "hidden", target.getGainableCards(player, "h")])
                            .set("ai", () => {
                                const player = get.event("player"),
                                    target = get.event().getParent().target;
                                const color = color => (color == "none2" ? "none" : "none2");
                                let controls = get.event("controls").slice();
                                controls.sort((a, b) => {
                                    return (
                                        target
                                            .getGainableCards(player, "h")
                                            .filter(card => {
                                                return get.color(card) == color(b);
                                            })
                                            .reduce((sum, card) => sum + get.value(card, player), 0) -
                                        target
                                            .getGainableCards(player, "h")
                                            .filter(card => {
                                                return get.color(card) == color(b);
                                            })
                                            .reduce((sum, card) => sum + get.value(card, player), a)
                                    );
                                });
                                return controls[0];
                            })
                            .forResult("control");
                        const gains = target.getGainableCards(player, "h").filter(card => {
                            return get.color(card) == (control == "none2" ? "none" : control);
                        });
                        if (gains.length) {
                            await player.gain(gains, target, "giveAuto", "bySelf");
                        }
                        await target.damage();
                        if (!gains.length) {
                            await target.damage();
                        }
                        if (!target.isAlive()) {
                            delete player.getStat().skill.PInaolie;
                            player.popup("PInaolie");
                            game.log(player, "重置了技能", "#g【脑裂】");
                        }
                    }
                },
                usable: 1,
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return -target.countCards("h");
                        },
                    },
                },
            },
            PIpofeng: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    if (event.hasNature() && !event.hasNature("fire")) return false;
                    if (player.isPISameClanFor(event.player)) return false;
                    return event.player.hasMark("PIliran_mark") || event.num > 1;
                },
                forced: true,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        num = trigger.num;
                    if (target.canGanran()) await target.addPIliranMark();
                    target.addMark("PIpofeng", trigger.source === player ? 2 * num + 1 : num);
                    if (target.countMark("PIpofeng") >= 7 - target.maxHp) {
                        target.clearMark("PIpofeng");
                        await target.loseMaxHp();
                    }
                },
                markimage: "extension/瘟疫公司/image/card/PIganshi_mark.png",
                intro: { content: "mark" },
            },
            PIzhijing: {
                trigger: { global: "phaseUseBegin" },
                filter(event, player) {
                    if ([1, 2, 3, 4, 5].every(num => !event.player.hasEnabledSlot("equip" + num))) return false;
                    return event.player.hasMark("PIliran_mark") && event.player.hasMark("PIpofeng");
                },
                async cost(event, trigger, player) {
                    event.result = await trigger.player
                        .chooseBool(get.prompt("PIzhijin"), "令" + get.translation(player) + "废除你的一个装备栏，然后你移去2枚“风”标记，" + get.translation(player) + "选择摸牌或弃牌并视为对你使用病【杀】")
                        .set(
                            "choice",
                            (() => {
                                //return trigger.player.countMark('PIzhijin')>=5;
                                return false;
                            })()
                        )
                        .forResult();
                },
                logTarget: "player",
                async content(event, trigger, player) {
                    const target = trigger.player,
                        choices = [1, 2, 3, 4, 5].filter(num => target.hasEnabledSlot("equip" + num));
                    const result = await player
                        .chooseControl(choices)
                        .set("ai", () => {
                            return get.event().controls.randomGet();
                        })
                        .set("prompt", "请选择你要废除" + get.translation(trigger.player) + "的装备栏")
                        .forResult();
                    if (result?.control) {
                        player.line(target);
                        player.popup(result.control);
                        game.log(player, "选择废除了", target, "的", "#g" + get.translation(result.control) + "栏");
                        await target.disableEquip(result.control);
                        target.removeMark("PIpofeng", 2);
                        const num = Math.max(target.countMark("PIpofeng"), 1) + 1;
                        const result2 = await player.discardPlayerCard(target, "he", num, "弃置" + get.translation(target) + get.cnNumber(num) + "张牌或摸" + get.cnNumber(num) + "张牌").forResult();
                        if (!result2?.cards?.length) await player.draw(num);
                        const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                        if (player.canUse(card, target, false)) await player.useCard(card, target, false);
                    }
                },
            },
            PIganshi: {
                trigger: { global: "recoverBegin" },
                filter(event, player) {
                    return event.player.isIn() && event.player.hasMark("PIliran_mark") && !event.player.hasClan("瘟疫公司");
                },
                forced: true,
                logTarget: "player",
                async content(event, trigger, player) {
                    const num = trigger.player.getDamagedHp() + 1;
                    const cards = await trigger.player
                        .chooseToDiscard(num, "弃置" + get.cnNumber(num) + "张手牌且获得你" + get.translation(player) + "弃置的一张牌或取消本次体力回复")
                        .set("ai", card => {
                            return 9 - get.value(card);
                        })
                        .forResult("cards");
                    if (!cards?.length) trigger.cancel();
                    else {
                        const gains = cards.filterInD("d");
                        if (gains.length) {
                            const result =
                                gains.length > 1
                                    ? await player
                                        .chooseButton(["肝蚀：获得其中一张牌", gains], true)
                                        .set("ai", button => get.value(button.link))
                                        .forResult()
                                    : { bool: true, links: gains };
                            if (result?.bool && result.links?.length) await player.gain(result.links, "gain2");
                        }
                    }
                    if (!trigger.player.hasMark("PIganshi")) trigger.player.addMark("PIganshi", 1);
                    await player.recover();
                },
                markimage: "extension/瘟疫公司/image/card/PIpofeng_mark.png",
                intro: { content: "可无命，不可无脍" },
            },
            PIganying: {
                trigger: { global: "recoverBefore" },
                filter(event, player) {
                    return event.player.hasMark("PIganshi") && !event.player.hasClan("瘟疫公司") && event.player.countCards("he") > 0;
                },
                direct: true,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        str = get.translation(target);
                    const card = new lib.element.VCard({ name: "sha", nature: "ill", isCard: true });
                    let choice = ["得牌摸牌"],
                        choiceList = ["获得" + str + "一张牌并摸一张牌"];
                    if (player.canUse(card, target, false)) {
                        choice.push("对其出杀");
                        choiceList.push("视为对" + str + "使用一张病【杀】");
                    }
                    choice.push("cancel2");
                    const result = await player
                        .chooseControl(choice)
                        .set("choiceList", choiceList)
                        .set("ai", () => {
                            const player = get.player(),
                                target = get.event().getTrigger().player;
                            const map = {
                                cancel2: 0,
                                得牌摸牌: get.effect(target, { name: "shunshou_copy2" }, player, player) + get.effect(player, { name: "draw" }, player, player),
                                对其出杀: get.effect(target, new lib.element.VCard({ name: "sha", nature: "ill", isCard: true }), player, player),
                            };
                            let controls = get.event().controls.slice();
                            return controls.sort((a, b) => map[b] - map[a])[0];
                        })
                        .set("prompt", get.prompt("PIganying", target))
                        .forResult();
                    if (result.control === "cancel2") return;
                    player.logSkill("PIganying", target);
                    if (result.control == "得牌摸牌") {
                        await player.gainPlayerCard(target, "he", true);
                        await player.draw();
                    } else await player.useCard(card, target, false);
                },
                group: "PIganying_damage",
                subSkill: {
                    damage: {
                        trigger: { source: "damageAfter" },
                        filter(event, player) {
                            return event.card && event.card.name == "sha" && event.getParent().name == "sha" && event.player.hasMark("PIganshi");
                        },
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            const result = await player.gainPlayerCard([1, 2], target, "he").forResult();
                            if (!result?.bool || !result.cards?.length) await target.loseHp();
                        },
                    },
                },
            },
            PIyishui: {
                trigger: { global: "phaseBegin" },
                filter(event, player) {
                    if (player.countMark("PIyishui_used") >= 3) return false;
                    return !player.isPISameClanFor(event.player);
                },
                check(event, player) {
                    return game.hasPlayer(target => {
                        return !player.isPISameClanFor(target) && get.attitude(player, target) < 0 && (!target.hasMark("PIliran_mark") || (!target.hasSkill("PIyishui_effect") && target.countMark("PIyishui") < 3));
                    });
                },
                prompt2: () => "展示牌堆顶的一张牌并选择一名非同族角色。若其未感染，则获得此牌并感染，否则你令一名角色获得此牌。直到其回合结束前，当其使用一张与此牌颜色相同的牌时，其获得1枚“蚴”标记",
                async content(event, trigger, player) {
                    player.addTempSkill("PIyishui_used", "roundStart");
                    player.addMark("PIyishui_used", 1, false);
                    const cards = get.cards();
                    await game.cardsGotoOrdering(cards);
                    await player.showCards(cards, get.translation(player) + "发动了【疫水】");
                    const result = await player
                        .chooseTarget(
                            "疫水：选择一名非同族角色并执行后续效果",
                            (card, player, target) => {
                                return !player.isPISameClanFor(target);
                            },
                            true
                        )
                        .set("ai", target => {
                            const player = get.event("player");
                            if (get.attitude(player, target) >= 0) return 0;
                            return -(!target.hasMark("PIliran_mark") ? 3 : 0) - (!target.hasSkill("PIyishui_effect") && target.countMark("PIyishui") < 3 ? target.countCards("h") : 0) - 1;
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.line(target);
                        if (!target.hasMark("PIliran_mark")) {
                            await target.gain(cards, "gain2").set("giver", player);
                            if (target.canGanran()) await target.addPIliranMark();
                            target.addMark("PIyishui", 1);
                        } else {
                            const result2 = await player
                                .chooseTarget("疫水：令一名角色获得" + get.translation(cards), true)
                                .set("ai", target => {
                                    const player = get.event("player");
                                    return get.attitude(player, target);
                                })
                                .forResult();
                            if (result2.bool) {
                                const gainner = result2.targets[0];
                                player.line(gainner);
                                await gainner.gain(cards, "gain2").set("giver", player);
                            }
                        }
                        target.addTempSkill("PIyishui_effect", { player: "phaseAfter" });
                        target.markAuto("PIyishui_effect", cards);
                    } else await game.cardsDiscard(cards);
                },
                markimage: "extension/瘟疫公司/image/card/PIyishui_mark.png",
                intro: {
                    name: "蚴",
                    content: "绿水青山枉自多，华佗无奈小虫何！",
                },
                global: "PIyishui_hand",
                group: "PIyishui_dying",
                subSkill: {
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                    effect: {
                        charlotte: true,
                        onremove: true,
                        trigger: { player: ["useCard", 'phaseEnd'] },
                        filter(event, player) {
                            if (player.countMark("PIyishui") === 3) return false;
                            if (event.name === 'phase') return true;
                            return player.getStorage("PIyishui_effect").some(card => get.color(card) == get.color(event.card));
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.addMark("PIyishui", trigger.name === 'phase' ? (3 - player.countMark('PIyishui')) : 1);
                        },
                        markimage: "extension/瘟疫公司/image/card/PIyishui_effect_mark.png",
                        intro: {
                            mark(dialog, storage) {
                                if (!storage || !storage.length) return;
                                dialog.addAuto(storage);
                            },
                        },
                    },
                    hand: {
                        mod: {
                            maxHandcard(player, num) {
                                if (player.countMark("PIyishui") < 3) return;
                                return num - game.countPlayer(target => target.hasSkill("PIyishui"));
                            },
                        },
                    },
                    dying: {
                        trigger: { global: "dying" },
                        filter(event, player) {
                            return event.player.hasMark("PIyishui");
                        },
                        forced: true,
                        locked: false,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const num = trigger.player.countMark("PIyishui");
                            trigger.player.removeMark("PIyishui", num);
                            event.removeNum = num;
                            await event.trigger("PIyishui_move");
                            trigger.player.loseHp();
                        },
                    },
                },
            },
            PIqinzang: {
                trigger: {
                    player: "damageEnd",
                    source: "damageSource",
                },
                filter(event, player) {
                    if (!event.source || !event.player.isIn()) return false;
                    return event[event.source == player ? "player" : "source"].hasMark("PIyishui");
                },
                logTarget: (event, player) => (name != "PIyishui_move" ? event[event.source == player ? "player" : "source"] : undefined),
                prompt2(event, player) {
                    const target = lib.skill.PIqinzang.logTarget(event, player);
                    return "根据" + get.translation(target) + "的“蚴”标记数执行以下项：≥1，你回复1点体力；≥2，你可以获得其至多两张牌。然后你移动其1个“蚴”标记至令一名感染角色（若无可移动目标则改为移去其1个“蚴”标记）";
                },
                async content(event, trigger, player) {
                    const target = lib.skill.PIqinzang.logTarget(trigger, player);
                    const num = target.countMark("PIyishui");
                    if (num > 0) await player.recover();
                    if (num > 1) await player.gainPlayerCard(target, "he", [1, 2]);
                    if (
                        game.hasPlayer(current => {
                            return current != target && current.hasMark("PIliran_mark") && current.countMark("PIyishui") < 3;
                        })
                    ) {
                        const result = await player
                            .chooseTarget(
                                "将" + get.translation(target) + "的一个“蚴”标记移动给一名已感染的其他角色",
                                (card, player, current) => {
                                    return current != get.event().getTrigger().player && current.hasMark("PIliran_mark") && current.countMark("PIyishui") < 3;
                                },
                                true
                            )
                            .set("ai", target => {
                                const player = get.event("player");
                                if (get.attitude(player, target) >= 0) return 0;
                                return -(!target.hasMark("PIliran_mark") ? 3 : 0) - (!target.hasSkill("PIyishui_effect") && target.countMark("PIyishui") < 3 ? target.countCards("h") : 0) - 1;
                            })
                            .forResult();
                        if (result.bool) {
                            const current = result.targets[0];
                            player.line2([target, current]);
                            target.removeMark("PIyishui", 1);
                            current.addMark("PIyishui", 1);
                            await event.trigger("PIyishui_move");
                        }
                    } else {
                        target.removeMark("PIyishui", 1);
                        await event.trigger("PIyishui_move");
                    }
                },
                subfrequent: ["draw"],
                group: "PIqinzang_draw",
                subSkill: {
                    draw: {
                        trigger: { player: "PIyishui_move" },
                        prompt2: event => "摸一张牌",
                        getIndex: event => event.removeNum || 1,
                        frequent: true,
                        content() {
                            player.draw();
                        },
                    },
                },
            },
            //暗影瘟疫
            PIkuangnu: {
                trigger: { source: "damageBegin3" },
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    let result;
                    if (!target.hasMark("PIliran_mark")) {
                        result = await player
                            .chooseBool(get.prompt("PIkuangnu", target))
                            .set("prompt2", "令此伤害+1")
                            .set("choice", !(get.attitude(player, target) >= 0 || get.damageEffect(target, player, player) <= 0))
                            .forResult();
                    } else {
                        result = await player
                            .chooseCard("he", get.prompt("PIkuangnu", target), (card, player) => {
                                return get.color(card) == "red" && lib.filter.cardDiscardable(card, player);
                            })
                            .set("prompt2", "弃置一张红色牌并令此伤害+1")
                            .set("ai", card => {
                                const player = get.event("player"),
                                    target = get.event().getTrigger().player;
                                if (get.attitude(player, target) >= 0 || get.damageEffect(target, player, player) <= 0) return 0;
                                return 7.5 - get.value(card);
                            })
                            .forResult();
                    }
                    result.targets = [target];
                    event.result = result;
                },
                async content(event, trigger, player) {
                    if ((event.cards || []).length) await player.discard(event.cards);
                    trigger.increase("num");
                },
                group: ["PIkuangnu_recover", "PIkuangnu_die"],
                subSkill: {
                    recover: {
                        trigger: { source: "damageSource" },
                        filter(event, player) {
                            return event.num > 1 && player.isDamaged();
                        },
                        forced: true,
                        locked: false,
                        async content(event, trigger, player) {
                            await player.recover(Math.ceil(player.getDamagedHp() / 2));
                        },
                    },
                    die: {
                        trigger: { player: ["drawBegin", "chooseToDiscardBegin", "discardBegin"] },
                        filter(event, player) {
                            if (game.countPlayer(target => target.hasMark("PIliran_mark")) * 2 < game.countPlayer()) return false;
                            return event.getParent().name == "die";
                        },
                        forced: true,
                        locked: false,
                        async content(event, trigger, player) {
                            if (trigger.name == "draw") {
                                trigger.num *= 2;
                            } else {
                                trigger.cancel();
                                await player.draw(2);
                            }
                        },
                        ai: {
                            noDieAfter: true,
                            noDieAfter2: true,
                            skillTagFilter: () => game.countPlayer(target => target.hasMark("PIliran_mark")) * 2 < game.countPlayer(),
                        },
                    },
                },
            },
            PIxuechao: {
                trigger: { player: "phaseJieshuBegin" },
                filter(event, player) {
                    return game.countPlayer(target => target.hasSkill("PIxuechao_remove")) < 3 && game.hasPlayer(target => !target.hasSkill("PIxuechao_remove"));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCardTarget({
                            prompt: get.prompt("PIxuechao"),
                            prompt2: (player.countCards("h") > 1 ? "弃置一半手牌（向下取整）并" : "") + "令一名其他角色获得一个“巢”标记",
                            filterTarget: (_, player, target) => target != player && !target.hasSkill("PIxuechao_remove"),
                            filterCard: (card, player) => player.countCards("h") > 1 && lib.filter.cardDiscardable(card, player),
                            selectCard: () => (get.event("player").countCards("h") > 1 ? Math.floor(get.event("player").countCards("h") / 2) : -1),
                            ai1: card => 7 - get.value(card),
                            ai2: target => -get.attitude(get.event("player"), target),
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    if ((event.cards || []).length) await player.discard(event.cards);
                    const target = event.targets[0];
                    target.addSkill("PIxuechao_remove");
                    target.markAuto("PIxuechao_remove", [player]);
                },
                subSkill: {
                    remove: {
                        charlotte: true,
                        onremove: true,
                        trigger: {
                            player: ["phaseBegin", "damageEnd", "damageBegin3"],
                        },
                        filter(event, player, name) {
                            const targets = player.getStorage("PIxuechao_remove");
                            if (event.name == "phase") return targets.some(target => target.isIn());
                            if (!event.source) return false;
                            if (name == "damageEnd") return event.source != event.player && !targets.includes(event.source);
                            return event.source.isIn() && targets.includes(event.source) && player.countCards("he");
                        },
                        direct: true,
                        async content(event, trigger, player) {
                            const targets = player.getStorage("PIxuechao_remove").sortBySeat();
                            if (trigger.name == "phase") {
                                for (const target of targets) {
                                    if (!target.isIn()) continue;
                                    target.line(player);
                                    const result = await player.judge().forResult();
                                    if (["red", "black"].includes(result.color)) {
                                        await target[result.color == "red" ? "recover" : "draw"]();
                                    }
                                }
                            } else {
                                if (event.triggername == "damageBegin3") {
                                    await trigger.source.gainPlayerCard(player, "he").set("prompt", "###血巢###是否获得" + get.translation(player) + "的一张牌？");
                                } else {
                                    player.removeSkill("PIxuechao_remove");
                                }
                            }
                        },
                        intro: {
                            name2: "巢",
                            markcount: () => 0,
                            content: "已获得$提供的“巢”标记",
                        },
                        markimage: "extension/瘟疫公司/image/card/PIxuechao_mark.png",
                    },
                },
            },
            PIhongfu: {
                locked: false,
                mod: {
                    maxHandcard(player, num) {
                        return num + game.countPlayer(target => target.hasMark("PIliran_mark"));
                    },
                },
                trigger: { player: "phaseJudgeBefore" },
                forced: true,
                content() {
                    trigger.cancel();
                    game.log(player, "跳过了", "#g判定阶段");
                },
                ai: {
                    effect: {
                        target(card) {
                            if (get.type(card) == "delay") return "zerotarget";
                        },
                    },
                },
                group: "PIhongfu_move",
                subSkill: {
                    move: {
                        trigger: { player: "phaseZhunbeiBegin" },
                        filter(event, player) {
                            return player.canMoveCard();
                        },
                        check(event, player) {
                            if (!player.canMoveCard(true)) return false;
                            return player.getHp() + player.countCards("hs", card => player.canSaveCard(card, player)) > 1;
                        },
                        prompt2: () => "失去1点体力，然后移动场上至多已损失体力值次的牌",
                        async content(event, trigger, player) {
                            await player.loseHp();
                            let num = player.getDamagedHp();
                            while (num > 0) {
                                num--;
                                const result = await player.moveCard().forResult();
                                if (!result.bool) break;
                            }
                        },
                    },
                },
            },
            //艾滋病
            PIxuechuan: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    if (!event.source || !event.source.isIn() || !event.player.isIn() || !event.source.canGanran()) return false;
                    return event.player.hasMark("PIliran_mark") && !event.source.hasMark("PIliran_mark");
                },
                check(event, player) {
                    return get.attitude(player, event.source) < 0;
                },
                logTarget: "source",
                async content(event, trigger, player) {
                    const { source, player: target } = trigger;
                    await source.addPIliranMark();
                    if (source.sameSexAs(target)) {
                        await source.chooseToDiscard("he", true);
                        await target.chooseToDiscard("he", true);
                    }
                    if (source.differentSexFrom(target)) await player.draw(2);
                },
            },
            PIbengmian: {
                trigger: { global: "useCard" },
                filter(event, player) {
                    if (player.getStorage("PIbengmian").includes(event.player)) return false;
                    return event.player.hasMark("PIliran_mark") && Array.isArray(event.respondTo) && event.respondTo[0] !== event.player;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseToDiscard(get.prompt2("PIbengmian", trigger.player), "he", { color: "red" })
                        .set("ai", card => {
                            const player = get.event().player,
                                target = get.event().getTrigger().player;
                            if (get.attitude(player, target) >= 0) return 0;
                            return 7 - get.value(card);
                        })
                        .set("logSkill", ["PIbengmian", trigger.player])
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    if (!player.storage.PIbengmian) {
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIbengmian);
                    }
                    const target = trigger.player;
                    player.markAuto("PIbengmian", [target]);
                    const result = await target.judge().forResult();
                    target.addSkill("PIbengmian_ban3");
                    target.markAuto("PIbengmian_ban3", [result.number]);
                    target.storage["PIbengmian_ban3"].sort((a, b) => a - b);
                    if (result.suit != "heart") {
                        trigger.targets.length = 0;
                        trigger.all_excluded = true;
                        game.log(target, "的", trigger.card, "被无效了");
                    }
                    if (result.color == "red") {
                        player.unmarkAuto("PIbengmian", [target]);
                        if ([result.card].someInD("d")) {
                            await player.gain(result.card, "gain2");
                            player.line(target);
                            if (target.hasCard(card => lib.filter.cardDiscardable(card, target), "h")) {
                                await target.chooseToDiscard("h", true);
                            }
                        }
                    }
                    if (result.color == "black") {
                        if (target.getHp() > 1) {
                            target.addTempSkill("PIbengmian_ban", { player: "phaseEnd" });
                            target.markAuto("PIbengmian_ban", [get.type2(result.card)]);
                        } else {
                            target.addSkill("PIbengmian_ban2");
                            target.markAuto("PIbengmian_ban2", [get.type2(result.card)]);
                        }
                    }
                },
                subSkill: {
                    ban: {
                        charlotte: true,
                        onremove: true,
                        markimage: "extension/瘟疫公司/image/card/PIbengmian_mark.png",
                        intro: {
                            content: ["不能使用或打出$牌", "<font color=#ff0000>艾</font>呀，梅事的，概率为淋，疣什么关系"].map(i => "<li>" + i).join("<br>"),
                        },
                        mod: {
                            cardEnabled2(card, player) {
                                if (player.getStorage("PIbengmian_ban").includes(get.type2(card))) return false;
                            },
                        },
                    },
                    ban2: {
                        charlotte: true,
                        onremove: true,
                        markimage: "extension/瘟疫公司/image/card/PIbengmian_mark.png",
                        intro: {
                            content: ["非锁定技失效", "不能使用或打出$牌", "<font color=#ff0000>艾</font>呀，梅事的，概率为淋，疣什么关系"].map(i => "<li>" + i).join("<br>"),
                        },
                        mod: {
                            cardEnabled2(card, player) {
                                if (player.getStorage("PIbengmian_ban2").includes(get.type2(card))) return false;
                            },
                        },
                        group: 'fengyin',
                    },
                    ban3: {
                        charlotte: true,
                        onremove: true,
                        markimage: "extension/瘟疫公司/image/card/PIbengmian_mark.png",
                        intro: {
                            content: ["不能使用$点的牌", "<font color=#ff0000>艾</font>呀，梅事的，概率为淋，疣什么关系"].map(i => "<li>" + i).join("<br>"),
                        },
                        mod: {
                            cardEnabled(card, player) {
                                if (player.getStorage("PIbengmian_ban3").includes(get.number(card))) return false;
                            },
                            cardSavable(card, player) {
                                if (player.getStorage("PIbengmian_ban3").includes(get.number(card))) return false;
                            },
                        },
                    },
                },
            },
            //梅毒
            PIxingchuan: {
                trigger: { global: "phaseJieshuBegin" },
                filter(event, player) {
                    const source = event.player;
                    if (!source.isIn() || player.isPISameClanFor(source)) return false;
                    if (source.getHistory("useCard", evt => evt.isPhaseUsing()).length > source.maxHp) return false;
                    return game.hasPlayer(target => {
                        if (!(source.canGanran() || source.countMark("PIxingchuan") < 6) && (target.canGanran() || target.countMark("PIxingchuan") < 6)) return false;
                        return !player.isPISameClanFor(target);
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2("PIxingchuan"), (card, player, target) => {
                            const source = get.event().getTrigger().player;
                            if (!(source.canGanran() || source.countMark("PIxingchuan") < 6) && (target.canGanran() || target.countMark("PIxingchuan") < 6)) return false;
                            return !player.isPISameClanFor(target);
                        })
                        .set("ai", target => {
                            const player = get.event().player;
                            if (get.attitude(player, target) >= 0) return 0;
                            return -get.attitude(player, target) + target.canGanran() + (target.countMark("PIxingchuan") < 6);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const source = trigger.player,
                        target = event.targets[0];
                    for (const i of [source, target].sortBySeat()) {
                        if (i.canGanran()) await i.addPIliranMark();
                        i.addSkill("PImeizhen_effect");
                        i.markAuto("PImeizhen_effect", [player]);
                        if (i.countMark("PIxingchuan") < 6) {
                            const next = game.createEvent("PIxingchuan_addMark");
                            next.player = i;
                            next.setContent(function () {
                                "step 0";
                                player.addMark("PIxingchuan", 1);
                                "step 1";
                                event.trigger("PImeizhen_addMark");
                            });
                            await next;
                        }
                    }
                    if (source.sameSexAs(target)) {
                        for (const i of [source, target].sortBySeat()) await i.chooseToDiscard("he", true);
                    }
                    if (source.differentSexFrom(target)) await player.draw(2);
                },
                intro: {
                    name: "艾呀，<font color=#ffc0cb>梅</font>事的，概率为淋，疣什么关系",
                    content: "mark",
                },
                markimage: "extension/瘟疫公司/image/card/PIxingchuan_mark.png",
            },
            PImeizhen: {
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => lib.skill.PImeizhen.filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return target.hasMark("PIliran_mark") && !target.getStorage("PImeizhen_effect").includes(player);
                },
                usable: 1,
                content() {
                    target.addSkill("PImeizhen_effect");
                    target.markAuto("PImeizhen_effect", [player]);
                },
                ai: {
                    order: 10,
                    result: { target: -1 },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        markimage: "extension/瘟疫公司/image/card/PImeizhen_mark.png",
                        intro: { content: "已成为$的寄托" },
                        trigger: { player: ["PImeizhen_addMark", "phaseBegin", "phaseJieshuBegin"] },
                        filter(event, player, name) {
                            return player.getStorage("PImeizhen_effect").some(i => i.isIn());
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            if (event.triggername !== "PImeizhen_addMark") {
                                const targets = player
                                    .getStorage("PImeizhen_effect")
                                    .filter(i => i.isIn())
                                    .sortBySeat();
                                for (const source of targets) {
                                    const result = await source
                                        .chooseBool(get.prompt("PImeizhen", player), "进行判定")
                                        .set("choice", get.attitude(source, player) < 0)
                                        .forResult();
                                    if (result.bool) {
                                        await source.logSkill("PImeizhen_effect", player);
                                        const result = await source.judge(() => -1).forResult();
                                        if (player.countMark("PIxingchuan") < 6) {
                                            player.addMark("PIxingchuan", 1);
                                            await event.trigger("PImeizhen_addMark");
                                        }
                                        if (result.color === "red") {
                                            if (get.position(result.card) === "d") await source.gain(result.card, "gain2");
                                        }
                                        if (result.color === "black") await source.discardPlayerCard(player, "he", true);
                                    }
                                }
                                return;
                            }
                            const targets = player.getStorage("PImeizhen_effect");
                            for (const target of targets) {
                                await target.logSkill("PImeizhen_effect", player);
                                const num = player.countMark("PIxingchuan");
                                if (num > 0) await target.draw();
                                if (num % 2 == 0 && player.hasCard(card => lib.filter.cardDiscardable(card, player), "he")) {
                                    await player.chooseToDiscard("he", true, num / 2);
                                }
                                if (num % 3 == 0) await player.loseHp();
                                if (num == 6) {
                                    player.removeMark("PIxingchuan", num - 1);
                                    await event.trigger("PImeizhen_addMark");
                                    await player.loseHp();
                                    await target.draw(3);
                                }
                            }
                        },
                    },
                },
            },
            //肺吸虫
            PIfeishi: {
                trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                getIndex(event, player) {
                    if (!event.getg) return false;
                    return game
                        .filterPlayer(target => {
                            if (
                                player.getRoundHistory("useSkill", evt => {
                                    return evt.skill == "PIfeishi" && evt.targets?.includes(target);
                                }).length >= 4
                            )
                                return false;
                            if (target === _status.currentPhase || !target.hasMark("PIliran_mark")) return false;
                            return event.getg(target) && event.getg(target).length;
                        })
                        .sortBySeat();
                },
                filter: (event, player, name, target) => event.getg && target,
                logTarget: (event, player, name, target) => target,
                forced: true,
                locked: false,
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    await target.chooseToDiscard("he", 1 + target.getDamagedHp(), true);
                    if (target.countMark("PIfeishi") < 4) target.addMark("PIfeishi", 1);
                },
                intro: { content: "mark" },
                markimage: "extension/瘟疫公司/image/card/PIfeishi_mark.png",
            },
            PIfeixue: {
                trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                getIndex(event, player) {
                    if (event.type != "discard" || event.getlx === false) return false;
                    return game
                        .filterPlayer(target => {
                            if (
                                player.getRoundHistory("useSkill", evt => {
                                    return evt.skill == "PIfeixue" && evt.targets?.includes(target);
                                }).length >= 4
                            )
                                return false;
                            if (target === _status.currentPhase || !target.hasMark("PIfeishi")) return false;
                            return event.getl(target) && (event.getl(target).cards2 || []).some(i => get.color(i, false) == "red" && get.position(i, true) == "d");
                        })
                        .sortBySeat();
                },
                filter: (event, player, name, target) => !(event.type != "discard" || event.getlx === false) && target,
                logTarget: (event, player, name, target) => target,
                prompt2(event, player, name, target) {
                    return "获得" + get.translation(event.getl(target).cards2.filter(i => get.color(i, false) == "red" && get.position(i, true) == "d"));
                },
                async content(event, trigger, player) {
                    await player.gain(trigger.getl(event.targets[0]).cards2.filter(i => get.color(i, false) == "red" && get.position(i, true) == "d"));
                },
                group: "PIfeixue_sha",
                subSkill: {
                    sha: {
                        trigger: { global: "phaseZhunbeiBegin" },
                        filter(event, player) {
                            return event.player.hasMark("PIfeishi");
                        },
                        async cost(event, trigger, player) {
                            const draws = Array.from({ length: trigger.player.countMark("PIfeishi") }).map((_, i) => get.cnNumber(i + 1) + "张");
                            let result = await player
                                .chooseControl(draws, "cancel2")
                                .set("ai", () => {
                                    const player = get.event().player,
                                        target = get.event().getTrigger().player;
                                    if (get.attitude(player, target) >= 0) return "cancel2";
                                    return Math.max(0, Math.min(target.countMark("PIfeishi"), target.countDiscardableCards(player, "he")) - 1);
                                })
                                .set("prompt", get.prompt("PIfeixue"))
                                .set("prompt2", "移去任意枚“肺噬”标记，弃置其等量的牌并视为对其使用一张病【杀】")
                                .forResult();
                            result.bool = result.control != "cancel2";
                            result.targets = [trigger.player];
                            result.cost_data = result.index + 1;
                            event.result = result;
                        },
                        async content(event, trigger, player) {
                            trigger.player.removeMark("PIfeishi", event.cost_data);
                            await player.discardPlayerCard(trigger.player, "he", event.cost_data, true);
                            const sha = new lib.element.VCard({ name: "sha", nature: "ill" });
                            if (player.canUse(sha, trigger.player, false)) {
                                await player.useCard(sha, trigger.player, false);
                            }
                        },
                    },
                },
            },
            //幽门螺杆菌
            PIfanwei: {
                global: "PIfanwei_global",
                trigger: { global: ["useCard", "gainAfter"] },
                filter(event, player) {
                    if (!event.player.hasMark("PIliran_mark")) return false;
                    if (
                        player.getRoundHistory("useSkill", evt => {
                            return evt.skill == "PIfanwei" && evt.targets[0] == event.player;
                        }).length >= 3
                    )
                        return false;
                    if (!event.player.countCards("h")) return false;
                    if (event.name == "gain") return event.PIfanwei;
                    return event.card.name == "tao" || event.card.name == "jiu";
                },
                logTarget: "player",
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                prompt2(event, player) {
                    return "令" + get.translation(event.player) + "随机弃置一张手牌" + (event.name == "gain" ? "" : "，若其弃置了" + get.translation(get.suit(event.card)) + "花色的牌，则" + get.translation(event.card) + "无效");
                },
                async content(event, trigger, player) {
                    const card = trigger.player.getCards("h").randomGet();
                    await trigger.player.discard(card);
                    if (trigger.name == "useCard" && get.suit(card, trigger.player) == get.suit(trigger.card)) {
                        trigger.targets.length = 0;
                        trigger.all_excluded = true;
                        game.log(trigger.card, "被无效了");
                    }
                },
                subSkill: {
                    global: {
                        trigger: { global: "gainBefore" },
                        filter: event => {
                            if (!(event.cards || []).length) return false;
                            if (event.getParent().name == "draw") return true;
                            return event.cards.some(card => get.position(card) == "c" || (!get.position(card) && card.original == "c"));
                        },
                        silent: true,
                        firstDo: true,
                        content() {
                            trigger.set("PIfanwei", trigger.cards.filter(card => get.position(card) == "c" || (!get.position(card) && card.original == "c")));
                        },
                    },
                },
            },
            PIweiyan: {
                trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                filter(event, player) {
                    const target = _status.currentPhase;
                    if (!target || !target.isIn() || !target.hasMark("PIliran_mark")) return false;
                    const history = target.getAllHistory("lose", evtx => {
                        if (evtx.type != "discard" || evtx.getlx === false) return false;
                        const evt = evtx.getl(target);
                        return evt && evt.hs && evt.hs.length;
                    });
                    return history.includes(event) && history.length > target.getHp();
                },
                forced: true,
                locked: false,
                logTarget: () => _status.currentPhase,
                async content(event, trigger, player) {
                    await _status.currentPhase.damage();
                },
            },
            //姜片虫
            PIchangxi: {
                enable: "phaseUse",
                filter(event, player) {
                    return player.countCards("h");
                },
                filterTarget(_, player, target) {
                    return target != player && target.hasMark("PIliran_mark") && !target.hasMark("PIchangxi_mark");
                },
                filterCard: true,
                position: "he",
                discard: false,
                lose: false,
                delay: false,
                content() {
                    player.addSkill("PIchangxi_clear");
                    player.markAuto("PIchangxi_clear", [target]);
                    target.addSkill("PIchangxi_mark");
                    target.addMark("PIchangxi_mark", 1);
                    player.give(cards, target).gaintag.add("PIchangxi_mark");
                },
                usable: 1,
                check(card) {
                    return 5 - get.value(card);
                },
                ai: {
                    order: 10,
                    result: { target: -1 },
                },
                subSkill: {
                    clear: {
                        charlotte: true,
                        onremove(player, skill) {
                            game.countPlayer(t => t.removeSkill("PIchangxi_mark"));
                            delete player.storage[skill];
                        },
                        trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                        filter(event, player) {
                            if (event.type !== "discard" || event.getlx === false) return false;
                            return game.hasPlayer(target => {
                                if (!target.hasMark("PIchangxi_mark")) return false;
                                const cards = target.getCards("h", card => card.hasGaintag("PIchangxi_mark"));
                                if (!cards.length) return false;
                                const evt = event.getl(target);
                                return evt?.hs?.some(card => cards.map(i => get.color(i)).includes(get.color(card, false)));
                            });
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            const cards = game
                                .filterPlayer(target => {
                                    if (!target.hasMark("PIchangxi_mark")) return false;
                                    const cards = target.getCards("h", card => card.hasGaintag("PIchangxi_mark"));
                                    if (!cards.length) return false;
                                    const evt = trigger.getl(target);
                                    return evt && evt.hs && evt.hs.some(card => cards.map(i => get.color(i)).includes(get.color(card, false)));
                                })
                                .reduce((list, target) => {
                                    const evt = trigger.getl(target);
                                    const cards = target.getCards("h", card => card.hasGaintag("PIchangxi_mark"));
                                    return list.addArray(evt.hs.filter(card => cards.map(i => get.color(i)).includes(get.color(card, false))));
                                }, []);
                            player.addSkill("PIchangxi_recover");
                            player.addMark("PIchangxi_recover", cards.length, false);
                            await player.gain(cards, "gain2");
                            if (player.countMark("PIchangxi_recover") >= player.getHp()) {
                                player.removeSkill("PIchangxi_recover");
                                await player.recover();
                            }
                        },
                    },
                    mark: {
                        charlotte: true,
                        onremove(player, skill) {
                            delete player.storage[skill];
                            player.removeGaintag(skill);
                        },
                        intro: { content: "mark" },
                        markimage: "extension/瘟疫公司/image/card/PIchangxi_mark.png",
                    },
                    recover: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: "已获得#张牌" },
                    },
                },
            },
            PIchanggeng: {
                trigger: { global: ["phaseDiscardBefore", "phaseEnd"] },
                filter(event, player) {
                    if (!event.player.hasMark("PIchangxi_mark")) return false;
                    const cards = event.player.getCards("h", card => card.hasGaintag("PIchangxi_mark"));
                    return (
                        event.player.countCards("h", card => {
                            return cards.map(i => get.color(i)).includes(get.color(card));
                        }) >= event.player.getHp()
                    );
                },
                forced: true,
                locked: false,
                logTarget: "player",
                content() {
                    trigger.player.loseHp();
                },
            },
            //弓形虫
            PIzhimang: {
                trigger: { source: "damageSource" },
                filter(event, player) {
                    const target = event.player;
                    if (!target.hasMark("PIliran_mark") || target.countMark("PIzhimang") >= 2 + Math.min(2, target.countMark('PIzhimang_add') + (target.getHp() === 1 ? 1 : 0))) return false;
                    return target.isDamaged();
                },
                prompt2(event, player) {
                    const target = event.player;
                    return "令" + get.translation(target) + "获得" + Math.min(event.num, 2 - target.countMark("PIzhimang")) + "枚“盲”标记";
                },
                logTarget: "player",
                content() {
                    const target = trigger.player;
                    if (target.getHp() === 1 && target.countMark('PIzhimang_add') < 2) {
                        target.addSkill('PIzhimang_add');
                        target.addMark('PIzhimang_add', 1, false);
                    }
                    target.addMark("PIzhimang", Math.min(trigger.num, 2 + Math.min(2, target.countMark('PIzhimang_add')) - target.countMark("PIzhimang")));
                },
                intro: {
                    name2: "盲",
                    content: "mark",
                },
                markimage: "extension/瘟疫公司/image/card/PIzhimang_mark.png",
                group: "PIzhimang_change",
                subSkill: {
                    add: {
                        charlotte: true,
                        markimage: 'extension/瘟疫公司/image/card/PIzhimang_add.png',
                        intro: { content: '“盲”标记上限+#' },
                    },
                    change: {
                        trigger: { global: "useCardToTarget" },
                        filter(event, player) {
                            if (event.getParent().PIzhimangED) return false;
                            if (!event.player.hasMark("PIzhimang") || event.targets.length != 1) return false;
                            if (event.target == player) return false;
                            return game.hasPlayer(target => {
                                if (target == player) return false;
                                if (get.type(event.card) != "delay") {
                                    return lib.filter.targetEnabled(event.card, event.player, target);
                                }
                                return target.canAddJudge(event.card);
                            });
                        },
                        prompt2(event, player) {
                            return "移去" + get.translation(event.player) + "的1枚“盲”标记，修改" + get.translation(event.card) + "的目标";
                        },
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const evt = trigger.getParent();
                            evt.PIzhimangED = true;
                            trigger.player.removeMark("PIzhimang", 1);
                            const target = game
                                .filterPlayer(target => {
                                    if (target == player) return false;
                                    if (get.type(trigger.card) != "delay") {
                                        return lib.filter.targetEnabled(trigger.card, trigger.player, target);
                                    }
                                    return target.canAddJudge(trigger.card);
                                })
                                .randomGet();
                            evt.targets.remove(trigger.target);
                            evt.triggeredTargets2.remove(trigger.target);
                            trigger.untrigger();
                            evt.targets.push(target);
                            trigger.player.line(target, "fire");
                            game.log(trigger.card, "的目标被改为", target);
                        },
                    },
                },
            },
            PIyiyan: {
                trigger: {
                    global: "useCardToPlayered",
                    target: "useCardToTargeted",
                },
                filter(event, player, name) {
                    switch (name) {
                        case "useCardToPlayered":
                            if (!event.target.hasMark("PIzhimang") || event.player == event.target) return false;
                            return event.target.countCards("he");
                        case "useCardToTargeted":
                            return event.player.hasMark("PIzhimang") && event.player.countCards("he");
                    }
                },
                check(event, player, name) {
                    const target = event[name == "useCardToPlayered" ? "target" : "player"];
                    return get.effect(target, { name: "shunshou" }, player, player) - (name == "useCardToPlayered" ? 0 : get.effect(player, event.card, target, player)) > 0;
                },
                logTarget(event, _, name) {
                    return event[name == "useCardToPlayered" ? "target" : "player"];
                },
                prompt2(event, _, name) {
                    const target = event[name == "useCardToPlayered" ? "target" : "player"],
                        num = get.cnNumber(target.countMark("PIzhimang"));
                    return "获得" + get.translation(target) + "的" + num + "张牌，令" + (name == "useCardToPlayered" ? "无法响应" + get.translation(event.card) : get.translation(event.card) + "对你无效") + "，然后移除" + get.translation(target) + "的1枚“盲”标记并摸" + num + "张牌";
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        num = target.countMark("PIzhimang");
                    await player.gainPlayerCard(target, "he", true, num);
                    if (event.triggername == "useCardToPlayered") {
                        trigger.getParent().directHit.add(target);
                        game.log(target, "无法响应", trigger.card);
                    } else {
                        trigger.getParent().excluded.add(player);
                        game.log(trigger.card, "对", player, "无效");
                    }
                    target.removeMark("PIzhimang", 1);
                    await player.draw(num);
                },
            },
            //双盘吸虫
            PIqingan: {
                trigger: { global: ["addPIliranMarkAfter", "recoverAfter"] },
                filter(event, player) {
                    if (!event.player.hasMark("PIliran_mark")) return false;
                    return event.name != "addPIliranMark" || event.player != player;
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: "player",
                *content(event, map) {
                    const player = map.player,
                        target = map.trigger.player;
                    const result = yield player.gainPlayerCard(target, "h", true, "visible");
                    if (!result || !result.bool) yield target.damage();
                },
            },
            PIqubao: {
                trigger: { player: ["phaseJieshuBegin", "damageEnd"] },
                filter(event, player) {
                    return game.hasPlayer(target => {
                        return target.hasMark("PIliran_mark") && target.hasCard(card => !target.getShownCards().includes(card), "h");
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2("PIqubao"), (card, player, target) => {
                            return target.hasMark("PIliran_mark") && target.hasCard(card => !target.getShownCards().includes(card), "h");
                        })
                        .set("ai", target => {
                            const player = get.player();
                            return get.effect(target, { name: "guohe_copy", position: "h" }, player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        num = target.isHealthy() ? 2 : 1;
                    const result = await player
                        .choosePlayerCard(target, "h", "visible", "展示其至多" + get.cnNumber(num) + "张手牌", [1, num], true)
                        .set("filterButton", button => {
                            const target = get.event().getParent().targets[0];
                            return !target.getShownCards().includes(button.link);
                        })
                        .set("ai", button => {
                            return (get.value(button.link) + 0.1) * (get.useful(button.link) + 0.1);
                        })
                        .forResult();
                    if (result.bool) {
                        const cards = result.links;
                        target.addShownCards(cards, "visible_PIqubao");
                        player.addTempSkill("PIqubao_effect", { player: "phaseBegin" });
                        player.markAuto("PIqubao_effect", cards);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            const cards = player.getStorage(skill).filter(i => ["h", "e", "j"].includes(get.position(i)));
                            delete player.storage[skill];
                            if (cards.length) {
                                const owners = cards
                                    .map(i => get.owner(i))
                                    .unique()
                                    .sortBySeat(player);
                                player.line(owners);
                                player.gain(cards, "give");
                                for (const i of owners) i.damage(1, player);
                            }
                        },
                        trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                        filter(event, player) {
                            if (event.name == "loseAsync" && event.type != "gain") return false;
                            return game.hasPlayer(target => {
                                const evt = event.getl(target);
                                if (!evt || !(evt.cards2 || []).some(i => player.getStorage("PIqubao_effect").includes(i))) return false;
                                const cards = evt.cards2.filter(i => player.getStorage("PIqubao_effect").includes(i));
                                return game.hasPlayer(source => {
                                    if (source == target) return false;
                                    return event.getg(source).some(i => cards.includes(i));
                                });
                            });
                        },
                        forced: true,
                        logTarget(event, player) {
                            return game
                                .filterPlayer(target => {
                                    const evt = event.getl(target);
                                    if (!evt || !(evt.cards2 || []).some(i => player.getStorage("PIqubao_effect").includes(i))) return false;
                                    const cards = evt.cards2.filter(i => player.getStorage("PIqubao_effect").includes(i));
                                    return game.hasPlayer(source => {
                                        if (source == target) return false;
                                        return event.getg(source).some(i => cards.includes(i));
                                    });
                                })
                                .sortBySeat();
                        },
                        async content(event, trigger, player) {
                            const targets = lib.skill.PIqubao_effect.logTarget(trigger, player);
                            for (const target of targets) {
                                const evt = trigger.getl(target);
                                const cards = evt.cards2.filter(i => player.getStorage("PIqubao_effect").includes(i));
                                player.unmarkAuto("PIqubao_effect", cards);
                                await target.addPIliranMark();
                            }
                        },
                    },
                },
            },
            //未知病原
            PIshenwen: {
                init() {
                    if (!_status.PIshenwen_list) {
                        _status.PIshenwen_list = Object.keys(lib.characterPack["P_and_A"])
                            .filter(character => {
                                if (character === "PI_fentianhuowu" || !(get.character(character).skills || []).length) return false;
                                return !lib.filter.characterDisabled2(character) && !lib.filter.characterDisabled(character);
                            })
                            .reduce((list, character) => {
                                return list.addArray(get.character(character).skills);
                            }, []);
                    }
                },
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                filter(event, player) {
                    if (!_status.PIshenwen_list.length) return false;
                    if ((player.additionalSkills.PIshenwen || []).length >= player.maxHp + player.countMark("PIxinyi")) return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                forced: true,
                locked: false,
                content() {
                    player.addAdditionalSkills(
                        "PIshenwen",
                        _status.PIshenwen_list.filter(skill => {
                            return !player.hasSkill(skill, null, false, false);
                        }).randomGets(Math.min(2, player.maxHp + player.countMark("PIxinyi") - (player.additionalSkills.PIshenwen || []).length)),
                        true
                    );
                },
                group: "PIshenwen_zhiheng",
                subSkill: {
                    zhiheng: {
                        trigger: { player: ["phaseBegin", "phaseEnd"] },
                        filter(event, player) {
                            return (player.additionalSkills.PIshenwen || []).length > 0;
                        },
                        async cost(event, trigger, player) {
                            const skills = player.additionalSkills.PIshenwen;
                            const result = await player
                                .chooseButton([
                                    "请选择失去任意个技能",
                                    [
                                        skills.map(skill => {
                                            return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + "】</div><div>" + lib.translate[skill + "_info"] + "</div></div>"];
                                        }),
                                        "textbutton",
                                    ],
                                ])
                                .set("selectButton", [1, skills.length])
                                .set("ai", () => 1)
                                .forResult();
                            event.result = result;
                            if (result.bool) event.result.cost_data = result.links;
                        },
                        async content(event, trigger, player) {
                            await player.changeSkills([], event.cost_data).set("$handle", (player, _, skills) => {
                                game.log(player, "失去了技能", ...skills.map(i => "#g【" + get.translation(i) + "】"));
                                player.removeSkill(skills);
                                let additionalSkills = player.additionalSkills.PIshenwen;
                                additionalSkills.removeArray(skills);
                                if (!additionalSkills.length) delete player.additionalSkills.PIshenwen;
                            });
                            await player.addAdditionalSkills(
                                "PIshenwen",
                                _status.PIshenwen_list.filter(skill => {
                                    return !player.hasSkill(skill, null, false, false);
                                }).randomGets(event.cost_data.length),
                                true
                            );
                            await player.draw(event.cost_data.length);
                        },
                    },
                },
            },
            PIxinyi: {
                trigger: { player: "damageEnd" },
                filter(event, player) {
                    return (player.additionalSkills.PIshenwen || []).length < player.maxHp + player.countMark("PIxinyi");
                },
                forced: true,
                content() {
                    player.addAdditionalSkills(
                        "PIshenwen",
                        _status.PIshenwen_list.filter(skill => {
                            return !player.hasSkill(skill, null, false, false);
                        }).randomGets(1),
                        true
                    );
                },
                group: "PIxinyi_die",
                subSkill: {
                    die: {
                        trigger: { global: "die" },
                        forced: true,
                        content() {
                            player.addMark("PIxinyi", 1, false);
                        },
                    },
                },
            },
            //狂犬病
            PIshenkong: {
                trigger: { player: "phaseBegin" },
                filter(event, player) {
                    return game.hasPlayer(i => i.hasMark("PIshenkong"));
                },
                forced: true,
                logTarget: () => game.filterPlayer(i => i.hasMark("PIshenkong")),
                async content(event, trigger, player) {
                    const targets = game.filterPlayer(i => i.hasMark("PIshenkong"));
                    let sum = 0;
                    for (const i of targets) {
                        sum += i.countMark("PIshenkong");
                        i.clearMark("PIshenkong");
                        await i.damage();
                    }
                    if (sum > 0) await player.draw(2 * sum);
                },
                markimage: "image/card/PIshenkong_mark.png",
                intro: {
                    name: "恐",
                    content: "mark",
                },
                global: "PIshenkong_range",
                subSkill: {
                    range: {
                        mod: {
                            targetInRange(card, player, target) {
                                if (target.hasMark("PIshenkong")) return true;
                            },
                        },
                    },
                },
            },
            PIzaokuang: {
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => {
                        return (
                            target.hasMark("PIliran_mark") &&
                            game.hasPlayer(current => {
                                if (current == target) return false;
                                return !player.isPISameClanFor(current);
                            })
                        );
                    });
                },
                filterTarget(card, player, target) {
                    if (!ui.selected.targets.length) return target.hasMark("PIliran_mark");
                    return !player.isPISameClanFor(target);
                },
                usable: 1,
                selectTarget: 2,
                multitarget: true,
                complexTarget: true,
                targetprompt: ["出牌者", "出牌目标"],
                async content(event, trigger, player) {
                    const user = event.targets[0],
                        aim = event.targets[1];
                    let str = "###躁狂###对" + get.translation(aim) + "使用一张",
                        result;
                    if (user.hasMark("PIshenkong")) str += "伤害值+1的";
                    str += "【杀】（无距离限制）或【决斗】";
                    if (user.hasMark("PIshenkong")) str += "，若对其造成了伤害，则令" + get.translation(aim) + "感染";
                    if (event.nodamage) result = { bool: false };
                    else
                        result = await user
                            .chooseToUse(function (card, player, event) {
                                if (get.name(card) != "sha") return false;
                                return lib.filter.targetEnabled.apply(this, arguments);
                            }, str)
                            .set("targetRequired", true)
                            .set("complexSelect", true)
                            .set("filterTarget", function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            })
                            .set("sourcex", aim)
                            .set("oncard", () => {
                                const evt = _status.event;
                                if (evt.player.hasMark("PIshenkong")) evt.baseDamage++;
                            })
                            .forResult();
                    if (result.bool) {
                        const goon = aim.hasHistory("damage", evt => evt.getParent(4) == event);
                        if (user.hasMark("PIshenkong") && goon) await aim.addPIliranMark();
                        const result2 = await player.chooseToDiscard("he", card => get.tag(card, "damage"), "是否弃置一张伤害牌并重复此流程？").forResult();
                        if (result2.bool) {
                            const next = game.createEvent("PIzaokuang_return");
                            next.player = player;
                            next.targets = event.targets;
                            if (!goon) next.set("nodamage", true);
                            next.setContent(lib.skill.PIzaokuang.content);
                            await next;
                        }
                    } else {
                        if (!user.hasMark("PIshenkong")) user.addMark("PIshenkong", 1);
                        await user.loseHp();
                    }
                },
                ai: {
                    order: 7,
                    result: { target: -1 },
                },
            },
            //丝状病毒
            PIxueyi: {
                trigger: { global: ["loseHpBegin", "damageEnd", "loseAfter", "loseAsyncAfter"] },
                filter(event, player, name, target) {
                    return _status.currentPhase === player && target?.isIn();
                },
                getIndex(event, player) {
                    return game.filterPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        if (event.name == "loseHp" || event.name == "damage") {
                            if (target != event.player) return false;
                            return event.name == "loseHp" || (event.source === player && target.countCards("h"));
                        }
                        const evt = event.getl(target);
                        return evt && evt.player == target && evt.hs?.some(card => get.color(card, target) == "red");
                    });
                },
                forced: true,
                logTarget: (event, player, name, target) => target,
                content() {
                    const target = event.targets[0];
                    if (trigger.name == "loseHp") trigger.num++;
                    else if (trigger.name == "damage") player.discardPlayerCard(target, "h", true);
                    else player.draw();
                },
            },
            PIxuere: {
                trigger: { player: "useCardToPlayer" },
                filter(event, player) {
                    const target = event.target;
                    if (!target.hasMark("PIliran_mark")) return false;
                    return !player.getStorage("PIxuere_used").includes(target);
                },
                check(event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.target;
                    if (!player.storage.PIxuere_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIxuere_used);
                    }
                    player.markAuto("PIxuere_used", [target]);
                    const card = get.cards(1, true)[0];
                    await player.showCards([card], get.translation(player) + "对" + get.translation(target) + "发动了【血热】");
                    const colors = [get.color(trigger.card), get.color(card)].filter(i => i == "red");
                    if (colors.length >= 1) {
                        await player.draw();
                        trigger.getParent().directHit.add(target);
                        game.log(target, "不可响应", trigger.card);
                    }
                    if (colors.length >= 2) {
                        await player.draw();
                        const map = trigger.customArgs,
                            id = target.playerid;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].extraDamage != "number") map[id].extraDamage = 0;
                        map[id].extraDamage++;
                        game.log(trigger.card, "对", target, "造成的伤害", "#y+1");
                    }
                },
            },
            PIfuzang: {
                unique: true,
                enable: "phaseUse",
                limited: true,
                filter(event, player) {
                    return game.hasPlayer(target => target.hasMark("PIliran_mark"));
                },
                filterTarget(card, player, target) {
                    return target.hasMark("PIliran_mark");
                },
                selectTarget: [-1, -2],
                multiline: true,
                skillAnimation: "epic",
                animationColor: "orange",
                contentBefore() {
                    player.awakenSkill("PIfuzang");
                },
                async content(event, trigger, player) {
                    const target = event.target,
                        num = target.getHp();
                    if (target.countCards("h")) await target.showHandcards();
                    if (num < 1) return;
                    const result = await target
                        .chooseToDiscard(target.getHp(), { color: "red" }, "弃置" + get.cnNumber(num) + "张红色牌" + (num < 3 ? "并失去1点体力" : "") + "，或将体力失去至1点", "he")
                        .set(
                            "ai",
                            card => {
                                const player = get.player();
                                if (player.getHp() <= 2) return 0;
                                return 1 / (get.value(card) || 0.5);
                            },
                            [num, Infinity]
                        )
                        .forResult();
                    if (result.bool) {
                        if ((result.cards || []).length < 3) await target.loseHp();
                    } else if (target.getHp() > 1) await target.loseHp(target.getHp() - 1);
                },
                async contentAfter(event, trigger, player) {
                    const result = await player
                        .chooseTarget((card, player, target) => {
                            return target.hasMark("PIliran_mark") && target.getHp() == 1;
                        }, "是否对一名体力值为1的感染角色造成1点伤害？")
                        .set("ai", target => {
                            const player = get.player();
                            return get.damageEffect(target, player, player);
                        })
                        .forResult();
                    if (result.bool) {
                        const i = result.targets[0];
                        player.line(i);
                        await i.damage();
                    }
                },
                markimage: "extension/瘟疫公司/image/card/PIfuzang_mark.png",
                ai: {
                    order: 9,
                    result: {
                        target: -1,
                        player: (player, target) => (player.hasUnknown() ? 0 : 1),
                    },
                },
            },
            //铁线虫
            PIniaoran: {
                trigger: { global: "phaseDiscardEnd" },
                filter(event, player) {
                    const target = event.player,
                        cards = event.cards;
                    if (!target.canGanran() || player.isPISameClanFor(target) || !player.inRange(target)) return false;
                    return cards && cards.length > 0 && cards.length <= player.getHp();
                },
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    event.result = await player
                        .chooseToDiscard("he", get.prompt2("PIniaoran", target))
                        .set("ai", card => {
                            const player = get.player(),
                                target = get.event().getTrigger().player;
                            return get.attitude(player, target) < 0 ? 7 - get.value(card) : 0;
                        })
                        .set("logSkill", ["PIniaoran", target])
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    let result;
                    if (target.hasSex("female")) result = { color: "black" };
                    else
                        result = await player
                            .judge(card => (get.color(card) == "red" ? 1 : -1))
                            .set("judge2", result => {
                                return !Boolean(result.bool);
                            })
                            .forResult();
                    if (result.color === "black") await target.addPIliranMark();
                },
            },
            PIponi: {
                trigger: { player: ["phaseJieshuBegin", "damageEnd"] },
                filter(event, player) {
                    return game.hasPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        return target.countCards("he");
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2("PIponi"), (card, player, target) => {
                            if (!target.hasMark("PIliran_mark")) return false;
                            return target.countCards("he");
                        })
                        .set("ai", target => {
                            const player = get.player();
                            return -get.attitude(player, target) + get.effect(target, { name: "guohe_copy", position: "e" }, player, player) + get.effect(target, { name: "shunshou_copy", position: "h" }, player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    let result;
                    if (!target.countCards("h")) result = { index: 0 };
                    else if (!target.countCards("e") || player.getHp() <= 0) result = { index: 1 };
                    else {
                        result = await player
                            .chooseControl()
                            .set("choiceList", ["弃置装备区里的至少" + get.cnNumber(player.getHp()) + "张牌（不足则全弃并失去1点体力）", "令获得你的" + get.cnNumber(Math.max(1, Math.min(2, player.getDamagedHp()))) + "张手牌，然后若你的手牌数不大于体力值，则其对你造成1点伤害"])
                            .set("ai", () => {
                                const player = get.player(),
                                    source = get.event().getParent().player;
                                const nums = [source.getHp(), Math.max(1, Math.min(2, source.getDamagedHp()))];
                                const eff1 = get.effect(player, { name: "guohe_copy", position: "e" }, player, player) * Math.min(nums[1], player.countDiscardableCards(player, "e")) + (nums[1] > player.countDiscardableCards(player, "e") ? get.effect(player, { name: "losehp", position: "e" }, player, player) : 0);
                                const eff2 = get.effect(player, { name: "shunshou_copy", position: "h" }, source, player) * Math.min(nums[2], player.countGainableCards(source, "h")) + (player.countCards("h") - Math.min(nums[2], player.countGainableCards(source, "h")) <= player.getHp() ? get.damageEffect(player, source, player) : 0);
                                return eff1 >= eff2 ? 0 : 1;
                            })
                            .forResult();
                    }
                    const index = result.index;
                    if (typeof index !== "number") return;
                    if (index == 0) {
                        const cards = target.getDiscardableCards(target, "e");
                        if (cards.length < player.getHp()) {
                            await target.discard(cards);
                            await target.loseHp();
                        } else {
                            await target.chooseToDiscard("e", player.getHp(), true);
                        }
                    } else {
                        await player.gainPlayerCard(target, "h", true, Math.max(1, Math.min(2, player.getDamagedHp())));
                        if (target.countCards("h") <= target.getHp()) {
                            player.line(target);
                            await target.damage();
                        }
                    }
                },
            },
            //水痘
            PIyipao: {
                trigger: { global: ["damageEnd", "loseHpEnd"] },
                filter(event, player) {
                    const target = event.player;
                    return target.isIn() && target.hasMark("PIshuizhen");
                },
                async cost(event, trigger, player) {
                    const draws = Array.from({ length: trigger.player.countMark("PIshuizhen") }).map((_, i) => get.cnNumber(i + 1) + "枚");
                    event.result = await player
                        .chooseControl(draws, "cancel2")
                        .set("ai", () => {
                            return get.event().getTrigger().player.countMark("PIshuizhen") - 1;
                        })
                        .set("prompt", get.prompt2("PIyipao"))
                        .forResult();
                    event.result.bool = event.result.control != "cancel2";
                    event.result.cost_data = event.result.index + 1;
                },
                round: 1,
                logTarget: "player",
                async content(event, trigger, player) {
                    const num = event.cost_data,
                        target = trigger.player;
                    target.removeMark("PIshuizhen", num);
                    await player.draw(num);
                    const targets = game.filterPlayer(current => {
                        return target.inRange(current) && current.canGanran();
                    });
                    if (targets.length > 0) {
                        const result = await player
                            .chooseTarget((card, player, target) => {
                                return get.event().targets.includes(target);
                            }, "溢疱：是否感染" + get.translation(target) + "攻击范围内的至多" + get.cnNumber(num) + "名角色？")
                            .set(
                                "ai",
                                target => {
                                    const player = get.player();
                                    return -get.attitude(player, target);
                                },
                                [1, num]
                            )
                            .set("targets", targets)
                            .forResult();
                        if (result.bool) {
                            const ts = result.targets.sortBySeat();
                            player.line(ts);
                            for (const i of ts) await i.addPIliranMark();
                        }
                    }
                },
                ai: { combo: "PIshuizhen" },
            },
            PIshuizhen: {
                trigger: {
                    global: ["useCardAfter", "loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                },
                getIndex(event, player) {
                    if (event.name == "useCard") return event.player.hasMark("PIliran_mark") && get.type(event.card) == "equip" ? [event.player] : [];
                    return game
                        .filterPlayer(target => {
                            if (!target.hasMark("PIliran_mark")) return false;
                            return event.getl(target)?.es?.length > 0;
                        })
                        .sortBySeat();
                },
                filter(event, player, name, target) {
                    if (!target?.isIn()) return false;
                    return event.name != "useCard" || target.countCards("h");
                },
                prompt2(event, player, name, target) {
                    const str = get.translation(target);
                    return event.name == "useCard" ? "弃置" + str + "一张手牌" : "令" + str + "失去1点体力";
                },
                check(event, player, name, target) {
                    return get.effect(target, event.name == "useCard" ? { name: "guohe_copy", position: "h" } : { name: "losehp" }, player, player) > 0;
                },
                logTarget: (event, player, name, target) => target,
                content() {
                    const target = event.targets[0];
                    if (trigger.name == "useCard") player.discardPlayerCard(target, "h", true);
                    else target.loseHp();
                },
                group: "PIshuizhen_shuizhen",
                intro: { content: "mark" },
                markimage: "extension/瘟疫公司/image/card/PIshuizhen_mark.png",
                subSkill: {
                    shuizhen: {
                        trigger: {
                            player: "useCardToPlayer",
                            global: "useCardAfter",
                        },
                        filter(event, player, name) {
                            return (
                                game.hasPlayer(target => {
                                    if (name !== "useCardAfter") return target == event.target && target.hasMark("PIliran_mark");
                                    return event.PIshuizhen?.[player.playerid]?.includes(target) && !target.hasHistory("damage", evt => evt?.card == event.card);
                                }) &&
                                (name !== "useCardAfter" || player.countCards("he", card => _status.connectMode || lib.filter.cardDiscardable(card, player)))
                            );
                        },
                        direct: true,
                        async content(event, trigger, player) {
                            const goon = event.triggername == "useCardAfter";
                            const targets = game
                                .filterPlayer(target => {
                                    if (event.triggername !== "useCardAfter") return target == trigger.target && target.hasMark("PIliran_mark");
                                    return trigger.PIshuizhen?.[player.playerid]?.includes(target) && !target.hasHistory("damage", evt => evt?.card == trigger.card);
                                })
                                .sortBySeat();
                            for (const target of targets) {
                                let result,
                                    str = "你可以进行一次判定，若结果为红色，该角色获得1枚“水疹”标记（一名角色至多拥有3枚“水疹”标记）并弃置其一张牌，若此牌结算完毕后并未对其造成伤害，你可弃置一张牌并再次对其进行【水疹】判定";
                                if (goon) {
                                    str = "弃置一张牌并再次对其进行【水疹】判定";
                                    result = await player
                                        .chooseToDiscard(get.prompt("PIshuizhen", target), str, "he")
                                        .set("ai", card => {
                                            const player = get.player(),
                                                target = get.event().target;
                                            return get.attitude(player, target) < 0 ? 7 - get.value(card) : 0;
                                        })
                                        .set("target", target)
                                        .set("logSkill", ["PIshuizhen", target])
                                        .forResult();
                                } else
                                    result = await player
                                        .chooseBool(get.prompt("PIshuizhen", target), str)
                                        .set("choice", get.attitude(player, target) < 0)
                                        .forResult();
                                if (result.bool) {
                                    if (!goon) {
                                        player.logSkill("PIshuizhen", target);
                                        const evt = trigger.getParent();
                                        if (!evt.PIshuizhen) evt.PIshuizhen = {};
                                        if (!evt.PIshuizhen[player.playerid]) evt.PIshuizhen[player.playerid] = [];
                                        evt.PIshuizhen[player.playerid].add(target);
                                    }
                                    const color = await player
                                        .judge(card => (get.color(card) == "red" ? -1 : 1))
                                        .set("judge2", result => {
                                            return !Boolean(result.bool);
                                        })
                                        .forResult("color");
                                    if (color == "red") {
                                        if (target.countMark("PIshuizhen") < 3) {
                                            target.addMark("PIshuizhen", 1);
                                        }
                                        await player.discardPlayerCard(target, "he", true);
                                    }
                                }
                            }
                        },
                    },
                },
            },
            //白喉
            PIkongchuan: {
                trigger: {
                    global: "roundStart",
                    player: "phaseBegin",
                },
                round: 1,
                async content(event, trigger, player) {
                    const cards = get.cards(game.countPlayer());
                    const next = player.chooseToMove("空传：将卡牌以任意顺序置于牌堆顶", true);
                    next.set("list", [["牌堆顶", cards]]);
                    next.set("processAI", list => {
                        let cards = list[0][1].slice();
                        cards.sort((a, b) => get.value(b) - get.value(a));
                        if (get.attitude(get.player(), get.event().getTrigger().player) <= 0) cards.reverse();
                        return [cards];
                    }).forResult();
                    const result = await next.forResult();
                    if (result.bool) {
                        const list = result.moved[0].slice(0);
                        while (list.length) {
                            ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
                        }
                        game.updateRoundNumber();
                        const numbers = cards
                            .map(i => get.number(i, false))
                            .sort((a, b) => a - b)
                            .unique();
                        const resultx = await player
                            .chooseControl(numbers)
                            .set("ai", () => {
                                return get.event().controls.randomGet();
                            })
                            .set("prompt", "空传：选择一个点数，本轮其他角色从牌堆获得此点数的牌后感染")
                            .forResult();
                        if (resultx.control) {
                            player.addTempSkill("PIkongchuan_effect", "roundStart");
                            player.markAuto("PIkongchuan_effect", [resultx.control]);
                            player.popup(resultx.control);
                            game.log(player, "选择了", "#y点数" + resultx.control);
                        }
                    }
                },
                subSkill: {
                    effect: {
                        global: "PIfanwei_global",
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIkongchuan_mark.png",
                        intro: {
                            markcount: () => 0,
                            content: "其他角色从牌堆获得点数为$的牌后感染",
                        },
                        trigger: { global: "gainAfter" },
                        filter(event, player) {
                            if (!event.PIfanwei || !event.player.canGanran()) return false;
                            return event.cards.some(i => event.PIfanwei.includes(i) && player.getStorage("PIkongchuan_effect").includes(get.number(i, false)));
                        },
                        forced: true,
                        logTarget: "player",
                        content() {
                            trigger.player.addPIliranMark();
                        },
                    },
                },
            },
            PIhoubi: {
                trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                filter(event, player) {
                    if (!event.getg) return false;
                    if (event.name == "gain") {
                        if (event.getParent().name == "draw" && event.getParent("phaseDraw").player == event.player) return false;
                    }
                    return game.hasPlayer(target => {
                        if (player.getStorage("PIhoubi_used").includes(target)) return false;
                        return target.hasMark("PIliran_mark") && event.getg(target).length;
                    });
                },
                direct: true,
                async content(event, trigger, player) {
                    const targets = game
                        .filterPlayer(target => {
                            if (player.getStorage("PIhoubi_used").includes(target)) return false;
                            return target.hasMark("PIliran_mark") && trigger.getg(target).length;
                        })
                        .sortBySeat();
                    for (const target of targets) {
                        const result = await player
                            .chooseBool(get.prompt2("PIhoubi", target))
                            .set("choice", get.attitude(player, target) < 0)
                            .forResult();
                        if (result.bool) {
                            player.logSkill("PIhoubi", target);
                            if (!player.storage.PIhoubi_used) {
                                player.when({ global: "roundStart" }).then(() => delete player.storage.PIhoubi_used);
                            }
                            const cards = trigger.getg(target);
                            player.markAuto("PIhoubi_used", [target]);
                            await target.showCards(cards, get.translation(player) + "对" + get.translation(target) + "发动了【喉痹】");
                            let indexs = ["一张", "两张", "三张", "背水！"],
                                choices = indexs.slice();
                            let str = get.translation(target),
                                choiceList = ["弃置" + str + get.cnNumber(cards.length) + "张牌，然后你摸一张牌<br>单选此项须弃置一张牌", "选择" + str + "本次获得的牌的一个类别，其下个出牌阶段不能使用此类别的牌<br>单选此项须弃置两张牌", "令" + str + "弃置" + get.translation(cards) + "并失去1点体力<br>单选此项须弃置三张牌", "背水！依次执行以上所有选项，然后本轮【喉痹】失效"];
                            for (let i = 0; i < 3; i++) {
                                if (player.countDiscardableCards(player, "he") < i + 1) {
                                    choices.remove(indexs[i]);
                                    choiceList[i] = '<span style="opacity:0.5">' + choiceList[i] + "</span>";
                                }
                            }
                            const resultx = await player
                                .chooseControl(choices)
                                .set("ai", () => {
                                    const controls = get.event().controls.slice();
                                    return ["一张", "背水！"].filter(i => controls.includes(i)).randomGet();
                                })
                                .set("choiceList", choiceList)
                                .set("prompt", "喉痹：请选择对" + str + "的审判")
                                .forResult();
                            if (resultx.control) {
                                if (resultx.index < 3) await player.chooseToDiscard("he", resultx.index + 1, true);
                                if (resultx.control == "一张" || resultx.control == "背水！") {
                                    await player.discardPlayerCard(target, cards.length, true);
                                    await player.draw();
                                }
                                if (resultx.control == "两张" || resultx.control == "背水！") {
                                    const types = cards
                                        .map(i => get.type2(i, false))
                                        .filter(type => {
                                            return !target.getStorage("PIhoubi_ban").includes(type);
                                        })
                                        .sort((a, b) => {
                                            return ["basic", "trick", "equip"].indexOf(a) - ["basic", "trick", "equip"].indexOf(b);
                                        })
                                        .unique();
                                    if (types.length) {
                                        const resulty = await player
                                            .chooseControl(types)
                                            .set("ai", () => 0)
                                            .set("prompt", "喉痹：请选择" + str + "下个出牌阶段不能使用的类别")
                                            .forResult();
                                        if (resulty.control) {
                                            player.popup(resulty.control);
                                            game.log(player, "选择了", "#y" + get.translation(resulty.control) + "牌");
                                            target.addSkill("PIhoubi_ban");
                                            target.markAuto("PIhoubi_ban", [resulty.control]);
                                            const evtx = trigger.getParent("phaseUse");
                                            target
                                                .when("phaseUseAfter")
                                                .assign({ firstDo: true })
                                                .filter(evt => evt != evtx)
                                                .then(() => player.removeSkill("PIhoubi_ban"));
                                        }
                                    }
                                }
                                if (resultx.control == "三张" || resultx.control == "背水！") {
                                    await target.discard(cards);
                                    await target.loseHp();
                                }
                                if (resultx.control == "背水！") {
                                    player.tempBanSkill("PIhoubi", "roundStart");
                                    break;
                                }
                            }
                        }
                    }
                },
                subSkill: {
                    ban: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIhoubi_mark.png",
                        intro: { content: "不能使用$牌" },
                        mod: {
                            cardEnabled(card, player) {
                                const storages = player.getStorage("PIhoubi_ban");
                                if (!player.isPhaseUsing() || storages.includes(_status.event.getParent("phaseUse"))) return;
                                if (storages.includes(get.type2(card))) return false;
                            },
                            cardSavable(card, player) {
                                const storages = player.getStorage("PIhoubi_ban");
                                if (!player.isPhaseUsing() || storages.includes(_status.event.getParent("phaseUse"))) return;
                                if (storages.includes(get.type2(card))) return false;
                            },
                        },
                    },
                },
            },
            //百日咳
            PIfeimo: {
                trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                filter(event, player) {
                    if (event.type != "discard" || event.getlx === false) return false;
                    return game.hasPlayer(target => {
                        if (!target.hasMark("PIliran_mark") || _status.currentPhase === target) return false;
                        if (!event.getl(target)?.cards2?.someInD("d")) return false;
                        return game.hasPlayer(current => {
                            return target.inRange(current) && !player.isPISameClanFor(current);
                        });
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2("PIfeimo"), (card, player, current) => {
                            if (player.isPISameClanFor(current)) return false;
                            const trigger = get.event().getTrigger();
                            return game.hasPlayer(target => {
                                if (!target.hasMark("PIliran_mark") || _status.currentPhase === target) return false;
                                if (!trigger.getl(target)?.cards2?.someInD("d")) return false;
                                return target.inRange(current);
                            });
                        })
                        .set("ai", target => {
                            const player = get.player(),
                                att = get.attitude(player, target);
                            if (att < 0) return -att * 100;
                            if (att == 0 || target.canGanran()) return 0;
                            const trigger = get.event().getTrigger();
                            const cards = game
                                .filterPlayer(current => {
                                    if (!current.hasMark("PIliran_mark") || _status.currentPhase === current) return false;
                                    if (!trigger.getl(current)?.cards2?.someInD("d")) return false;
                                    return current.inRange(target);
                                })
                                .reduce((list, current) => {
                                    return list.addArray(trigger.getl(current).cards2.filterInD("d"));
                                }, []);
                            return Math.max(...cards.map(card => get.value(card, target)));
                        })
                        .forResult();
                },
                round: 1,
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const cards = game
                        .filterPlayer(current => {
                            if (!current.hasMark("PIliran_mark") || _status.currentPhase === current) return false;
                            if (!trigger.getl(current)?.cards2?.someInD("d")) return false;
                            return current.inRange(target);
                        })
                        .reduce((list, current) => {
                            return list.addArray(trigger.getl(current).cards2.filterInD("d"));
                        }, []);
                    const result = await player.chooseButton(["飞沫：令" + get.translation(target) + "获得其中一张牌" + (target.canGanran() ? "，然后令其感染" : ""), cards], true).forResult();
                    if (result.bool) {
                        const current = game.findPlayer(current => {
                            if (!current.hasMark("PIliran_mark") || _status.currentPhase === current) return false;
                            if (!trigger.getl(current)?.cards2?.filterInD("d")?.includes(result.links[0])) return false;
                            return current.inRange(target) && current.hasMark("PIbaike") && current.countMark("PIbaike") <= 10;
                        });
                        await target.gain(result.links, "gain2");
                        if (target.canGanran()) await target.addPIliranMark();
                        if (current && player.hasSkill("PIbaike") && player.storage["PIfeimo_roundcount"]) {
                            player.logSkill("PIbaike", current);
                            delete player.storage["PIfeimo_roundcount"];
                            player.unmarkSkill("PIfeimo_roundcount");
                            game.log("本次发动", "#g【飞沫】", "不计入次数");
                        }
                    }
                },
            },
            PIbaike: {
                limit: 100,
                trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                filter(event, player, name, target) {
                    if (event.type != "discard" || event.getlx === false) return false;
                    return target?.isIn();
                },
                getIndex(event, player) {
                    if (event.type != "discard" || event.getlx === false) return [];
                    return game
                        .filterPlayer(target => {
                            if (!target.hasMark("PIliran_mark") || target.countMark("PIbaike") >= lib.skill.PIbaike.limit) return false;
                            return event.getl(target)?.hs?.length;
                        })
                        .sortBySeat();
                },
                forced: true,
                logTarget: (event, player, name, target) => target,
                content() {
                    const target = event.targets[0];
                    target.addMark("PIbaike", Math.min(lib.skill.PIbaike.limit - target.countMark("PIbaike"), trigger.getl(target).hs.length));
                    if (target.countMark("PIbaike") >= lib.skill.PIbaike.limit) {
                        target.clearMark("PIbaike");
                        player.draw(4);
                    }
                },
                markimage: "extension/瘟疫公司/image/card/PIbaike_mark.png",
                intro: {
                    name2: "咳",
                    content: "mark",
                },
                group: ["PIbaike_effect1", "PIbaike_effect2", "PIbaike_effect3", "PIbaike_effect4"],
                subSkill: {
                    effect1: {
                        trigger: { global: "useCardAfter" },
                        filter(event, player) {
                            if (_status.currentPhase !== player) return false;
                            return event.player.countMark("PIbaike") >= 11 && event.player.countMark("PIbaike") <= 30;
                        },
                        forced: true,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const target = trigger.player,
                                str = get.translation(target);
                            await target.chooseToDiscard("he", true);
                            if (Math.max(target.countCards("h"), target.getHistory("useCard").length) > target.maxHp) {
                                const resultx = await player
                                    .chooseBool("是否令" + str + "将手牌数弃至体力上限？", "若弃牌数不大于其体力值，则你可令其失去1点体力")
                                    .set("choice", get.attitude(player, target) < 0)
                                    .forResult();
                                if (!resultx.bool) return;
                                let num = 0;
                                if (target.countCards("h") > target.maxHp) {
                                    const result = await target.chooseToDiscard(target.countCards("h") - target.maxHp, true).forResult();
                                    if (result.bool && result.cards?.length) num += result.cards.length;
                                }
                                if (num <= target.getHp()) {
                                    const resulty = await player
                                        .chooseBool("是否令" + str + "失去1点体力？")
                                        .set("choice", get.effect(target, { name: "losehp" }, target, player) >= 0)
                                        .forResult();
                                    if (resulty.bool) await target.loseHp();
                                }
                            }
                        },
                    },
                    effect2: {
                        trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                        filter(event, player) {
                            if (!event.getg) return false;
                            if (event.name == "gain") {
                                if (event.getParent().name == "draw" && event.getParent("phaseDraw").player == event.player) return false;
                            }
                            return game.hasPlayer(target => {
                                if (!event.getg(target).length || !target.countCards("h")) return false;
                                return target.countMark("PIbaike") >= 31 && target.countMark("PIbaike") <= 80;
                            });
                        },
                        direct: true,
                        async content(event, trigger, player) {
                            const targets = game
                                .filterPlayer(target => {
                                    if (!trigger.getg(target).length || !target.countCards("h")) return false;
                                    return target.countMark("PIbaike") >= 31 && target.countMark("PIbaike") <= 80;
                                })
                                .sortBySeat();
                            for (const target of targets) {
                                player.logSkill("PIbaike_effect2", target);
                                const str = get.translation(target);
                                await target.chooseToDiscard("he", true, (cardx, player) => {
                                    let suits = [],
                                        cards = player.getCards("h"),
                                        map = {},
                                        max = -Infinity;
                                    for (const card of cards) {
                                        const suit = get.suit(card, player);
                                        if (!map[suit]) map[suit] = 0;
                                        map[suit]++;
                                        if (map[suit] > max) max = map[suit];
                                    }
                                    for (const i in map) {
                                        if (map[i] == max) suits.push(i);
                                    }
                                    return suits.includes(get.suit(cardx));
                                });
                                if (target.countCards("h") > target.getHp()) {
                                    const result = await player
                                        .chooseBool("是否令" + str + "执行一个手牌上限-1的弃牌阶段？")
                                        .set("choice", get.attitude(player, target) < 0)
                                        .forResult();
                                    if (result.bool) {
                                        target.addSkill("PIbaike_discard");
                                        await target.phaseDiscard();
                                        target.removeSkill("PIbaike_discard");
                                    }
                                }
                            }
                        },
                    },
                    discard: {
                        mod: {
                            maxHandcard(player, num) {
                                return num - 1;
                            },
                        },
                    },
                    effect3: {
                        trigger: { global: "phaseEnd" },
                        filter(event, player) {
                            if (!(event.player.countMark("PIbaike") >= 31 && event.player.countMark("PIbaike") <= 80)) return false;
                            return (
                                event.player
                                    .getHistory("lose", evt => {
                                        return evt.type == "discard" && evt.hs.length;
                                    })
                                    .reduce((sum, evt) => {
                                        return sum + evt.hs.length;
                                    }) <= event.player.maxHp ||
                                event.player.getHistory("gain", evt => {
                                    return evt.getParent().name == "draw";
                                }) >= event.player.maxHp
                            );
                        },
                        forced: true,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            await trigger.player.damage();
                        },
                    },
                    effect4: {
                        trigger: { global: "phaseDrawBegin2" },
                        filter(event, player) {
                            return !event.numFixed && event.player.countMark("PIbaike") >= 81;
                        },
                        forced: true,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            const result = await target.chooseBool("是否少摸一张牌并令本回合手牌上限+1？").set("choice", player.needsToDiscard(-3)).forResult();
                            if (result.bool) {
                                trigger.num--;
                                target.addTempSkill("PIbaike_hand");
                                target.addMark("PIbaike_hand", 1, false);
                            } else target.chat("拒绝");
                        },
                    },
                    hand: {
                        mark: true,
                        markimage: "image/card/handcard.png",
                        intro: { content: "手牌上限+#" },
                        charlotte: true,
                        onremove: true,
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark("PIbaike_hand");
                            },
                        },
                    },
                },
            },
            //麻疹
            PIqirong: {
                trigger: { global: ["loseAfter", "loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"] },
                filter(event, player) {
                    return game.hasPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        if (!event.getl(target)?.es?.length) return false;
                        return game.hasPlayer(current => {
                            if (current == target) return target.countCards("h");
                            return target.inRange(current) && current.canGanran();
                        });
                    });
                },
                direct: true,
                async content(event, trigger, player) {
                    const targets = game
                        .filterPlayer(target => {
                            if (!target.hasMark("PIliran_mark")) return false;
                            if (!trigger.getl(target)?.es?.length) return false;
                            return game.hasPlayer(current => {
                                if (current == target) return target.countCards("h");
                                return target.inRange(current) && current.canGanran();
                            });
                        })
                        .sortBySeat();
                    for (const target of targets) {
                        const str = get.translation(target),
                            num = trigger.getl(target).es.length;
                        const result = await player
                            .chooseTarget(
                                get.prompt("PIqirong", target),
                                (card, player, target) => {
                                    const source = get.event().target;
                                    if (target == source) return target.countCards("h");
                                    return source.inRange(target) && target.canGanran();
                                },
                                "令" + str + "攻击范围内的一名角色感染，或弃置" + str + get.cnNumber(num) + "张手牌"
                            )
                            .set("ai", target => {
                                const source = get.event().target;
                                return -get.attitude(get.player(), target) * (source == target ? 1 : 10000);
                            })
                            .set("target", target)
                            .forResult();
                        if (result.bool) {
                            const aim = result.targets[0];
                            player.logSkill("PIqirong", target, false);
                            player[target == aim ? "line" : "line2"](target == aim ? target : [target, aim]);
                            if (target == aim) {
                                let sum = 0;
                                const resultx = await player.discardPlayerCard(target, "h", num, true).forResult();
                                if (result.bool && result.cards?.length) sum += result.cards.length;
                                if (sum >= target.getHp()) await target.loseHp();
                            } else {
                                await aim.addPIliranMark();
                            }
                        }
                    }
                },
            },
            PIduchuang: {
                trigger: { global: "useCardAfter" },
                filter(event, player) {
                    if (get.type(event.card) != "equip" || !event.player.hasMark("PIliran_mark")) return false;
                    return event.player.countVCards("e") && !player.getStorage("PIduchuang_used").includes(event.player);
                },
                logTarget: "player",
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                async content(event, trigger, player) {
                    if (!player.storage.PIduchuang_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIduchuang_used);
                    }
                    const target = trigger.player;
                    player.markAuto("PIduchuang_used", [target]);
                    player.addTempSkill("PIduchuang_unequip");
                    const cards = get.cards(target.countVCards("e"), true);
                    let dialog = ["毒疮：是否对" + get.translation(target) + "使用一张伤害类卡牌？"];
                    dialog.push('<div class="text center">牌堆顶的牌</div>');
                    dialog.push(cards);
                    if (player.countCards("h") > 0) {
                        dialog.push('<div class="text center">你的手牌</div>');
                        dialog.push(player.getCards("h"));
                    }
                    const result = await player
                        .chooseButton(dialog)
                        .set("filterButton", button => {
                            const player = get.player(),
                                target = get.event().getTrigger().player,
                                card = button.link;
                            if (!get.tag(card, "damage")) return false;
                            return player.canUse(card, target, false);
                        })
                        .set("ai", button => {
                            const player = get.player(),
                                target = get.event().getTrigger().player,
                                card = button.link;
                            return get.effect(target, card, player, player);
                        })
                        .forResult();
                    if (result.bool) {
                        const card = result.links[0];
                        if (player.canUse(card, target, false)) {
                            await player.useCard(card, target, false).set("oncard", () => {
                                _status.event.card.PIduchuang = true;
                            });
                        }
                    }
                    const num = player
                        .getHistory("sourceDamage", evt => {
                            return evt.getParent("PIduchuang") == event;
                        })
                        .reduce((sum, evt) => sum + evt.num, 0);
                    if (!num) await player.draw(2);
                    else if (target.countDiscardableCards(player, "e")) {
                        await player.discardPlayerCard(target, "e", num + 1, true);
                    }
                },
                subSkill: {
                    unequip: {
                        charlotte: true,
                        ai: {
                            unequip: true,
                            unequip_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (tag == "unequip_ai") {
                                    const evt = _status.event;
                                    return evt && evt.name == "chooseButton" && evt.player == player && evt.getParent().name == "PIduchuang";
                                }
                                return arg?.card?.PIduchang;
                            },
                        },
                    },
                },
            },
            //结核
            PIbaisi: {
                trigger: { global: "phaseUseBegin" },
                filter(event, player) {
                    if (!event.player.hasMark("PIliran_mark") || player.countMark("PIbaisi_used") >= 4) return false;
                    return player.hasCard(card => _status.connectMode || lib.filter.cardDiscardable(card, player), "he");
                },
                popup: false,
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    event.result = await player
                        .chooseToDiscard(get.prompt2("PIbaisi", target), "he", [1, target.countCards("he")])
                        .set("ai", card => {
                            const player = get.player(),
                                target = get.event().getTrigger().player;
                            if (get.attitude(player, target) >= 0) return false;
                            return player.countCards("he") - ui.selected.cards.length > 1 ? 7 - get.value(card) : 0;
                        })
                        .set("complexCard", true)
                        .set("logSkill", ["PIbaisi", target])
                        .forResult();
                },
                async content(event, trigger, player) {
                    if (!player.storage.PIbaisi_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIbaisi_used);
                    }
                    player.addMark("PIbaisi_used", 1, false);
                    const target = trigger.player,
                        num = event.cards.length;
                    const cards = await player.choosePlayerCard(target, "白死：请选择" + get.translation(target) + "的" + get.cnNumber(num) + "张牌", "he", event.cards.length, true).forResult("cards");
                    if (!cards?.length) return;
                    const [card] = await player.chooseCard("白死：展示一张牌，令" + get.translation(target) + "进行选择", "he", true).forResult("cards");
                    if (!card) return;
                    let result,
                        discards = cards.filter(i => get.color(i) == get.color(card) && lib.filter.cardDiscardable(i, target));
                    if (!discards.length) result = { index: 1 };
                    else
                        result = await target
                            .chooseControl()
                            .set("choiceList", ["弃置" + get.translation(discards), "受到" + get.translation(player) + "对你造成的1点伤害，然后获得1枚“核”"])
                            .set("ai", () => {
                                const player = get.player(),
                                    cards = get.event().cards;
                                if (player.getHp() <= 2 && !cards.some(i => player.canSaveCard(i, player))) return 0;
                                if (cards.length > 2) return 1;
                                return get.rand(0, 1);
                            })
                            .set("cards", discards)
                            .forResult();
                    const index = result.index;
                    if (typeof index == "number") {
                        if (index == 0) await target.discard(discards);
                        else {
                            await target.damage();
                            if (target.countMark("PIbaisi") < 4 && target.countMark("PIbaisi_temp") < 2) {
                                target.addMark("PIbaisi", 1);
                                target.addTempSkill("PIbaisi_temp");
                                target.addMark("PIbaisi_temp", 1);
                            }
                        }
                    }
                },
                ai: { combo: "PIfeilao" },
                subSkill: {
                    temp: {
                        charlotte: true,
                        onremove: true,
                    },
                },
                markimage: "extension/瘟疫公司/image/card/PIbaisi_mark.png",
                intro: {
                    name: "结核",
                    content: "mark",
                },
            },
            PIfeilao: {
                trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                filter(event, player) {
                    if (event.type != "discard" || event.getlx === false) return false;
                    return game.hasPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        if (!event.getl(target)?.cards2?.length) return false;
                        return Math.max(2, event.getl(target).cards2.length) >= target.countMark("PIbaisi");
                    });
                },
                direct: true,
                async content(event, trigger, player) {
                    const targets = game
                        .filterPlayer(target => {
                            if (!target.hasMark("PIliran_mark")) return false;
                            if (!trigger.getl(target)?.cards2?.length) return false;
                            return Math.max(2, trigger.getl(target).cards2.length) >= target.countMark("PIbaisi");
                        })
                        .sortBySeat();
                    for (const target of targets) {
                        const draws = Array.from({ length: target.countMark("PIbaisi") }).map((_, i) => get.cnNumber(i + 1) + "点");
                        const result = await player
                            .chooseControl(draws, "cancel2")
                            .set("prompt", get.prompt("PIfeilao", target))
                            .set("prompt2", "移去" + get.translation(target) + "任意枚“核”标记，令其失去等量体力")
                            .set("ai", () => {
                                const player = get.player(),
                                    target = get.event().target;
                                if (get.attitude(player, target) < 0 && get.effect(target, { name: "losehp" }, player, player) > 0) return get.cnNumber(target.countMark("PIbaisi")) + "点";
                                return "cancel2";
                            })
                            .set("target", target)
                            .forResult();
                        if (result.control != "cancel2") {
                            player.logSkill("PIfeilao", target);
                            const num = draws.indexOf(result.control) + 1;
                            await target.removeMark("PIbaisi", num);
                            await target.loseHp(num);
                        }
                    }
                },
                group: "PIfeilao_gain",
                global: "PIfeilao_hand",
                ai: { combo: "PIbaisi" },
                subSkill: {
                    gain: {
                        trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                        filter(event, player) {
                            if (!event.getg) return false;
                            if (event.name == "gain") {
                                if (event.getParent().name == "draw" && event.getParent("phaseDraw").player == event.player) return false;
                            }
                            return game.hasPlayer(target => {
                                if (!(target.countMark("PIbaisi") < 4 && target.countMark("PIbaisi_temp") < 2)) return false;
                                return target.hasMark("PIliran_mark") && event.getg(target).length;
                            });
                        },
                        forced: true,
                        logTarget(event, player) {
                            return game
                                .filterPlayer(target => {
                                    if (!(target.countMark("PIbaisi") < 4 && target.countMark("PIbaisi_temp") < 2)) return false;
                                    return target.hasMark("PIliran_mark") && event.getg(target).length;
                                })
                                .sortBySeat();
                        },
                        content() {
                            for (const target of event.targets) {
                                target.addMark("PIbaisi", 1);
                                target.addTempSkill("PIbaisi_temp");
                                target.addMark("PIbaisi_temp", 1);
                            }
                        },
                    },
                    hand: {
                        mod: {
                            maxHandcard(player, num) {
                                if (
                                    game.hasPlayer(target => {
                                        return target.hasSkill("PIfeilao", null, null, false);
                                    })
                                )
                                    return num - player.countMark("PIbaisi");
                            },
                        },
                    },
                },
            },
            //伤寒
            PIgaoshao: {
                trigger: {
                    global: ["recoverAfter", "gainAfter", "loseAsyncAfter"],
                },
                filter(event, player) {
                    if (
                        !player.hasCard(card => {
                            if (get.position(card) == "h" && _status.connectMode) return true;
                            return get.color(card) == "red" && lib.filter.cardDiscardable(card, player);
                        }, "he")
                    )
                        return false;
                    return game.hasPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        if (event.name == "recover") return target.isHealthy();
                        return event.getg && event.getg(target).length > target.getHp();
                    });
                },
                direct: true,
                async content(event, trigger, player) {
                    const targets = game
                        .filterPlayer(target => {
                            if (!target.hasMark("PIliran_mark")) return false;
                            if (trigger.name == "recover") return target.isHealthy();
                            return trigger.getg && trigger.getg(target).length > target.getHp();
                        })
                        .sortBySeat();
                    for (const target of targets) {
                        if (!target.isIn()) continue;
                        const result = await player
                            .chooseToDiscard(get.prompt2("PIgaoshao", target), "he", { color: "red" }, "弃置一张红色牌，令" + get.translation(target) + "失去1点体力")
                            .set("ai", card => {
                                const player = get.player(),
                                    target = get.event().target;
                                return get.effect(target, { name: "losehp" }, player, player) / (get.value(card) || 0.5);
                            })
                            .set("target", target)
                            .set("logSkill", ["PIgaoshao", target])
                            .forResult();
                        if (result.bool) {
                            await target.loseHp();
                        }
                    }
                },
            },
            PIfuxie: {
                trigger: { global: "phaseBegin" },
                filter(event, player) {
                    if (!event.player.getHp()) return false;
                    return event.player.hasMark("PIliran_mark") && event.player.countCards("h") > event.player.getHp();
                },
                logTarget: "player",
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                async content(event, trigger, player) {
                    let num = 0,
                        target = trigger.player;
                    const result = await target.chooseToDiscard(target.countCards("h") - target.getHp(), "h", true).forResult();
                    if (result.bool && result.cards?.length) num += result.cards.length;
                    if (num >= Math.max(2, target.getDamagedHp())) {
                        await target.damage();
                        let current = target.getNext();
                        if (current.canGanran()) {
                            const result = await player
                                .chooseBool("腹泻：是否令" + get.translation(current) + "感染？")
                                .set("choice", get.attitude(player, current) < 0)
                                .forResult();
                            if (result.bool) {
                                player.line(current);
                                current.damage();
                            }
                        }
                    }
                },
            },
            //登革热
            PIwenre: {
                trigger: {
                    player: "useCardToPlayer",
                    source: "damageSource",
                    global: "damageEnd",
                },
                filter(event, player, name) {
                    const evtx = event.getParent("useCard");
                    if (
                        !player.hasHistory("lose", evt => {
                            if (evt.getParent() != evtx) return false;
                            return Object.keys(evt.gaintag_map).some(i => {
                                return evt.gaintag_map[i].includes("PIwenre_marktext");
                            });
                        })
                    )
                        return false;
                    const target = event[event.name !== "damage" ? "target" : "player"];
                    if (!target.hasMark("PIliran_mark")) return false;
                    if (name == "damageSource" && !target.countCards("h")) return false;
                    return event.name == "damage" || get.color(event.card) == "black";
                },
                prompt2(event, player, name) {
                    const target = event[event.name !== "damage" ? "target" : "player"];
                    if (event.name != "damage") return "令" + get.translation(target) + "不可响应" + get.translation(event.card);
                    if (name == "damageSource") return "获得" + get.translation(target) + "的一张手牌，若获得了红色牌，则你回复1点体力";
                    return "进行一次判定，若判定结果为红色，若" + get.translation(target) + "未/已装备装备牌，其弃置一张手牌/装备区的牌；若结果为黑色，你摸一张牌";
                },
                check(event, player) {
                    const target = event[event.name !== "damage" ? "target" : "player"];
                    return get.attitude(player, target) < 0;
                },
                logTarget(event, player) {
                    return event[event.name !== "damage" ? "target" : "player"];
                },
                async content(event, trigger, player) {
                    const name = event.triggername;
                    const target = trigger[trigger.name !== "damage" ? "target" : "player"];
                    if (trigger.name !== "damage") {
                        trigger.getParent().directHit.add(target);
                        game.log(target, "不可响应", trigger.card);
                    } else if (name == "damageSource") {
                        const result = await player.gainPlayerCard(target, "h", true).forResult();
                        if (
                            result.bool &&
                            result.cards?.some(i => {
                                return get.color(i) == "red";
                            })
                        ) {
                            await player.recover();
                        }
                    } else {
                        const result = await player.judge().forResult();
                        if (result.color == "red") {
                            await target.chooseToDiscard(true, target.countCards("e") ? "e" : "h");
                        }
                        if (result.color == "black") {
                            await player.draw();
                        }
                    }
                },
                group: "PIwenre_mark",
                subSkill: {
                    mark: {
                        trigger: {
                            global: "phaseBefore",
                            player: "enterGame",
                        },
                        filter(event, player) {
                            if (!player.countCards("h")) return false;
                            return event.name != "phase" || game.phaseNumber == 0;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.addGaintag(player.getCards("h"), "PIwenre_marktext");
                        },
                    },
                    marktext: {},
                },
            },
            PIqingu: {
                trigger: {
                    global: ["damageBegin2", "damageBegin4"],
                },
                filter(event, player, name) {
                    const target = event[name == "damageBegin2" ? "source" : "player"];
                    if (!target?.hasMark("PIliran_mark")) return false;
                    const storage = player.storage.PIqingu_used || {};
                    return !storage[target.playerid] || storage[target.playerid] < 2;
                },
                logTarget(event, player, name) {
                    return event[name == "damageBegin2" ? "source" : "player"];
                },
                check(event, player, name) {
                    const target = event[name == "damageBegin2" ? "source" : "player"];
                    return get.attitude(player, target) < 0;
                },
                prompt2(event, player, name) {
                    const target = event[name == "damageBegin2" ? "source" : "player"];
                    let str = "令" + get.translation(target) + "弃置至少" + get.cnNumber(Math.max(1, event.num)) + "张牌，否则";
                    if (name == "damageBegin2") return str + "此伤害-1";
                    return str + "你可以弃置" + get.cnNumber(Math.max(1, event.num)) + "张牌并令其失去1点体力";
                },
                async content(event, trigger, player) {
                    const name = event.triggername,
                        num = Math.max(1, trigger.num);
                    const target = trigger[name == "damageBegin2" ? "source" : "player"];
                    if (!player.storage.PIqingu_used) {
                        player.storage.PIqingu_used = {};
                        player.when({ global: "roundStart" }).then(() => {
                            delete player.storage.PIqingu_used;
                        });
                    }
                    if (!player.storage.PIqingu_used[target.playerid]) {
                        player.storage.PIqingu_used[target.playerid] = 0;
                    }
                    player.storage.PIqingu_used[target.playerid]++;
                    const result = await target.chooseToDiscard(num, "he").forResult();
                    if (!result.bool) {
                        if (name == "damageBegin2") {
                            trigger.num--;
                        } else {
                            const result = await player
                                .chooseToDiscard(num, "he", "是否弃置" + get.cnNumber(num) + "张牌并令" + get.translation(target) + "失去1点体力？")
                                .set("ai", card => {
                                    const player = get.player(),
                                        target = get.event().target;
                                    return get.effect(target, { name: "losehp" }, player, player) / (get.value(card) || 0.5);
                                })
                                .set("target", target)
                                .forResult();
                            if (result.bool) {
                                await target.loseHp();
                            }
                        }
                    }
                },
            },
            //西尼罗
            PIwenmei: {
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                filter(event, player) {
                    if (
                        !game.hasPlayer(target => {
                            return !player.isPISameClanFor(target);
                        })
                    )
                        return false;
                    return event.name != "phase" || game.phaseNumber == 0;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt("PIwenmei"), "令一名非同族角色获得“蚊”标记并感染该角色", (card, player, target) => {
                            return !player.isPISameClanFor(target);
                        })
                        .set("ai", () => {
                            return 1 + Math.random();
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    target.addMark("PIwenmei", 1);
                    if (target.canGanran()) await target.addPIliranMark();
                },
                markimage: "extension/瘟疫公司/image/card/PIwenmei_mark.png",
                intro: {
                    name2: "蚊",
                    content: "mark",
                },
                group: "PIwenmei_damage",
                subSkill: {
                    damage: {
                        trigger: {
                            global: ["damageSource", "damageEnd"],
                        },
                        filter(event, player, name) {
                            if (name == "damageSource") {
                                if (!event.source?.hasMark("PIwenmei")) return false;
                                return event.source !== event.player && event.player.canGanran();
                            }
                            return event.player.isIn() && event.player.hasMark("PIwenmei");
                        },
                        forced: true,
                        logTarget: "player",
                        content() {
                            const target = trigger.player;
                            if (event.triggername == "damageSource") {
                                target.addPIliranMark();
                            } else {
                                target.clearMark("PIwenmei");
                            }
                        },
                    },
                },
            },
            PInaore: {
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        return player.canCompare(target);
                    });
                },
                filterTarget(card, player, target) {
                    if (!target.hasMark("PIliran_mark")) return false;
                    return player.canCompare(target);
                },
                usable: 1,
                prompt: "与一名感染角色拼点",
                async content(event, trigger, player) {
                    const target = event.target;
                    const result = await player.chooseToCompare(target).forResult();
                    if (result.bool) {
                        const suit = get.suit(result.card1, player),
                            num = Math.max(1, target.getDamagedHp());
                        const resultx = await target
                            .chooseToDiscard(
                                "he",
                                (card, player) => {
                                    return get.suit(card) == get.event().suit;
                                },
                                num,
                                "弃置" + get.cnNumber(num) + "张" + get.translation(suit) + "牌，或失去1点体力"
                            )
                            .set("ai", target => {
                                return 5 - get.value(card);
                            })
                            .set("suit", suit)
                            .forResult();
                        if (!resultx.bool) {
                            await target.loseHp();
                        }
                    } else {
                        await player.draw(2);
                    }
                },
                ai: {
                    order: 1,
                    result: { target: -1 },
                },
                group: "PInaore_add",
                subSkill: {
                    add: {
                        trigger: {
                            player: "compare",
                            target: "compare",
                        },
                        filter(event, player) {
                            if (
                                get.suit(
                                    event.lose_list.find(list => {
                                        return list[0] == player;
                                    })[1],
                                    player
                                ) !== "red"
                            )
                                return false;
                            return event.player !== player || !event.iwhile;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            const sum = trigger.lose_list
                                .filter(list => {
                                    return list[0] !== player;
                                })
                                .map(list => {
                                    return list[0];
                                })
                                .reduce((num, target) => {
                                    return num + Math.max(2, target.getHp() - player.getHp());
                                }, 0);
                            trigger[trigger.player == player ? "num1" : "num2"] += sum;
                            if (trigger[trigger.player == player ? "num1" : "num2"] > 13) {
                                trigger[trigger.player == player ? "num1" : "num2"] = 13;
                            }
                            game.log(player, "的拼点牌点数", "#g+" + sum);
                        },
                    },
                },
            },
            //疟原虫
            PIziyang: {
                trigger: {
                    player: "useCardAfter",
                    global: "recoverAfter",
                },
                getIndex(event, player) {
                    return game.filterPlayer(current => {
                        if (!current.countCards("h")) return false;
                        if (event.name == "recover") return current == event.player && current.hasMark("PIliran_mark");
                        return event.targets
                            ?.filter(target => {
                                if (
                                    player.hasHistory("sourceDamage", evt => {
                                        return evt.player == target && evt.card == event.card;
                                    })
                                )
                                    return false;
                                return !player.isPISameClanFor(target);
                            })
                            .includes(current);
                    });
                },
                filter(event, player, name, target) {
                    return target?.isIn();
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                prompt2() {
                    return "选择其一张手牌称为“滋”";
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const result = await player.choosePlayerCard(target, "h", true).forResult();
                    if (result.bool && result.cards?.length) {
                        target.addGaintag(result.cards, "PIziyang_mark");
                    }
                },
                mark: true,
                intro: {
                    mark(dialog, storage, player) {
                        if (!player.isUnderControl(true)) return "这是属于" + get.translation(player) + "的私密";
                        let targets = game
                            .filterPlayer(target => {
                                return target.hasCard(card => {
                                    return card.hasGaintag("PIziyang_mark");
                                }, "h");
                            })
                            .sortBySeat(player);
                        if (targets.length) {
                            for (const target of targets) {
                                dialog.addText(get.translation(target));
                                dialog.addSmall(
                                    target.getCards("h", card => {
                                        return card.hasGaintag("PIziyang_mark");
                                    })
                                );
                            }
                        } else return "暂无滋养卡牌";
                    },
                },
                group: "PIziyang_gain",
                subSkill: {
                    gain: {
                        trigger: {
                            global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter"],
                        },
                        filter(event, player) {
                            if (event.name == "cardsDiscard") {
                                const evtx = event.getParent();
                                if (evtx.name != "orderingDiscard") return false;
                                const evtx2 = evtx.relatedEvent || evtx.getParent();
                                if (
                                    game.getGlobalHistory("everything", evtx3 => {
                                        if (evtx3.name !== "useCard") return false;
                                        return (evtx2.relatedEvent || evtx2.getParent()) == (evtx3.relatedEvent || evtx3.getParent());
                                    }).length
                                )
                                    return false;
                                return game.getGlobalHistory("everything", evtx3 => {
                                    if (evtx3.name !== "lose") return false;
                                    const evtx4 = evtx3.relatedEvent || evtx3.getParent();
                                    if (evtx2 != evtx4) return false;
                                    return Object.keys(evtx3.gaintag_map).some(i => {
                                        return evtx3.gaintag_map[i].includes("PIziyang_mark");
                                    });
                                }).length;
                            } else if (event.name == "lose") {
                                if (event.position != ui.discardPile) return false;
                                return Object.keys(event.gaintag_map).some(i => {
                                    return event.gaintag_map[i].includes("PIziyang_mark");
                                });
                            } else
                                return game.getGlobalHistory("lose", evt => {
                                    if (evt.getParent() != event || evt.position != ui.discardPile) return false;
                                    return Object.keys(evt.gaintag_map).some(i => {
                                        return evt.gaintag_map[i].includes("PIziyang_mark");
                                    });
                                }).length;
                        },
                        forced: true,
                        content() {
                            let cards = [];
                            if (trigger.name == "cardsDiscard") {
                                const evtx = trigger.getParent();
                                const evtx2 = evtx.relatedEvent || evtx.getParent();
                                game.getGlobalHistory("everything", evtx3 => {
                                    if (evtx3.name !== "lose") return false;
                                    const evtx4 = evtx3.relatedEvent || evtx3.getParent();
                                    if (evtx2 != evtx4) return false;
                                    for (const card of evtx3.hs) {
                                        if (get.position(card, true) != "d") continue;
                                        const i = card.cardid;
                                        if (evtx3.gaintag_map[i] && evtx3.gaintag_map[i].includes("PIziyang_mark")) cards.push(card);
                                    }
                                }).length;
                            } else if (trigger.name == "lose") {
                                for (const card of trigger.hs) {
                                    if (get.position(card, true) != "d") continue;
                                    const i = card.cardid;
                                    if (trigger.gaintag_map[i] && trigger.gaintag_map[i].includes("PIziyang_mark")) cards.push(card);
                                }
                            } else
                                return game.getGlobalHistory("everything", evt => {
                                    if (evt.name !== "lose") return false;
                                    if (evt.getParent() != trigger || evt.position != ui.discardPile) return false;
                                    for (const card of evt.hs) {
                                        if (get.position(card, true) != "d") continue;
                                        const i = card.cardid;
                                        if (evt.gaintag_map[i] && evt.gaintag_map[i].includes("PIziyang_mark")) cards.push(card);
                                    }
                                }).length;
                            if (cards.length) {
                                player.gain(cards, "gain2");
                            }
                        },
                    },
                },
            },
            PInveji: {
                trigger: {
                    global: "useCard",
                },
                filter(event, player) {
                    const target = event.player;
                    if (player.getStorage("PInveji_used").includes(target)) return false;
                    if (!target.hasMark("PIliran_mark")) return false;
                    return target.hasHistory("lose", evt => {
                        if (evt.getParent() != event) return false;
                        return Object.keys(evt.gaintag_map).some(i => {
                            return evt.gaintag_map[i].includes("PIziyang_mark");
                        });
                    });
                },
                logTarget: "player",
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                async content(event, trigger, player) {
                    const color = get.color(trigger.card);
                    const target = trigger.player;
                    if (!player.storage.PInveji_used) {
                        player.when({ global: "roundStart" }).then(() => {
                            delete player.storage.PInveji_used;
                        });
                    }
                    player.markAuto("PInveji_used", [target]);
                    const color2 = await player.judge().forResult("color");
                    if (color == color2) {
                        const result = await player
                            .chooseToDiscard({ color: color2 }, "疟疾：是否弃置一张" + get.translation(color2) + "牌并令此牌无效？", "he")
                            .set("ai", card => {
                                const player = get.player(),
                                    event = get.event().getTrigger();
                                if (
                                    ((event, player) => {
                                        let effect = 0;
                                        if (event.card.name == "wuxie" || event.card.name == "shan") {
                                            if (get.attitude(player, event.player) < -1) effect = -1;
                                        } else if (event.targets && event.targets.length) {
                                            for (let i = 0; i < event.targets.length; i++) {
                                                effect += get.effect(event.targets[i], event.card, event.player, player);
                                            }
                                        }
                                        if (effect < 0) {
                                            if (event.card.name == "sha") {
                                                let target = event.targets[0];
                                                if (target == player) return !player.countCards("h", "shan");
                                                else return target.hp == 1 || (target.countCards("h") <= 2 && target.hp <= 2);
                                            } else return true;
                                        }
                                        return false;
                                    })(event, player)
                                ) {
                                    return 7 - get.value(card);
                                }
                                return 0;
                            })
                            .forResult();
                        if (result.bool) {
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                            game.log(trigger.card, "被无效了");
                            await game.delayx();
                        }
                    }
                    if (color2 == "red") {
                        await target.loseHp();
                    }
                    if (color2 == "black") {
                        await target.chooseToDiscard("he", 2, true);
                    }
                    if (color !== color2) {
                        await player.draw();
                    }
                },
            },
            //淋病
            PIxingdu: {
                trigger: {
                    global: "damageEnd",
                },
                filter(event, player) {
                    if (!player.countCards("he")) return false;
                    if (!event.source?.isIn() || !event.player.isIn()) return false;
                    if (event.source.sex == event.player.sex) return false;
                    return [event.source, event.player].every(target => {
                        return !player.isPISameClanFor(target);
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCardTarget({
                            prompt: get.prompt2("PIxingdu"),
                            filterCard(card, player) {
                                if (!lib.filter.cardDiscardable(card, player)) return false;
                                return ["red", "black"].includes(get.color(card));
                            },
                            filterTarget(cardx, player, target) {
                                if (!ui.selected.cards.length) return false;
                                const event = get.event().getTrigger();
                                if (![event.source, event.player].includes(target)) return false;
                                if (target.hasMark("PIliran_mark") && !target.countCards("he")) return false;
                                const card = ui.selected.cards[0];
                                return (get.color(card) == "red") == ["male", "double"].includes(target.sex);
                            },
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                return -get.attitude(player, target);
                            },
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const cards = event.cards;
                    const target = event.targets[0];
                    await player.discard(cards);
                    if (target.canGanran()) {
                        await target.addPIliranMark();
                    } else if (target.hasMark("PIliran_mark")) {
                        await player.discardPlayerCard(target, "he", true);
                    }
                },
            },
            PIkuiyin: {
                trigger: {
                    global: "phaseJieshuBegin",
                },
                filter(event, player) {
                    const target = event.player;
                    if (!target.hasMark("PIliran_mark")) return false;
                    return target.countCards("h");
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseToDiscard("he", get.prompt2("PIkuiyin", trigger.player))
                        .set("ai", card => {
                            const player = get.player(),
                                target = get.event().getTrigger().player;
                            return get.effect(target, { name: "guohe_copy", position: "h" }, player, player);
                        })
                        .set("logSkill", ["PIkuiyin", trigger.player])
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const result = await player.discardPlayerCard(target, "he", true).forResult();
                    if (result.bool && result.cards?.length) {
                        const color = get.color(result.cards[0], target);
                        if (get.color(event.cards[0], player) == color) {
                            await player.draw();
                        }
                        if (["red", "black"].includes(color)) {
                            if ((color == "red") !== ["male", "double"].includes(target.sex)) {
                                const resultx = await player.chooseBool("是否令" + get.translation(target) + "继续执行后续效果？").forResult();
                                if (resultx.bool) {
                                    const resulty = await target
                                        .chooseToDiscard(
                                            "h",
                                            (card, player) => {
                                                return get.color(card) !== get.event().color;
                                            },
                                            "弃置一张非" + get.translation(color) + "色手牌，或失去1点体力"
                                        )
                                        .set("ai", card => {
                                            const player = get.player();
                                            return -get.effect(player, { name: "losehp" }, player, player) / (get.value(card) || 0.5);
                                        })
                                        .set("color", color)
                                        .forResult();
                                    if (!resulty.bool) {
                                        await target.loseHp();
                                        if (!target.hasMark(event.name)) target.addMark(event.name, 1);
                                    }
                                }
                            }
                        }
                    }
                },
                group: "PIkuiyin_effect",
                global: "PIkuiyin_global",
                markimage: "extension/瘟疫公司/image/card/PIkuiyin_mark.png",
                intro: { content: "艾呀，梅事的，概率为<font color=#7FFFD4>淋</font>，疣什么关系" },
                subSkill: {
                    global: {
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark("PIkuiyin");
                            },
                        },
                    },
                    effect: {
                        trigger: { global: ["loseHpEnd", "loseAfter", "loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"] },
                        filter(event, player) {
                            const target = _status.currentPhase;
                            if (!target?.isIn()) return false;
                            const evt = event.getParent("phaseDiscard", true) || event.getParent("phaseJieshu", true);
                            if (!evt || evt.player !== target) return false;
                            if (event.name === "loseHp") return event.player === target;
                            return event.getl(target)?.cards2?.some(i => get.color(i, target) === "red");
                        },
                        forced: true,
                        locked: false,
                        logTarget: () => _status.currentPhase,
                        content() {
                            player.draw(1 + (trigger.name === "loseHp"));
                        },
                    },
                },
            },
            //管圆线虫
            PIluya: {
                trigger: { player: "phaseJieshuBegin" },
                filter(event, player) {
                    return game.hasPlayer(target => {
                        return target.hasMark("PIliran_mark");
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt("PIluya"),
                            (card, player, target) => {
                                return target.hasMark("PIliran_mark");
                            },
                            "选择一名感染角色"
                        )
                        .set("ai", target => {
                            const player = get.player();
                            return -get.attitude(player, target);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.addSkill("PIluya_effect");
                    player.storage["PIluya_effect"][target.playerid] = [target, trigger.getParent()];
                    player.markAuto("PIluya_effect");
                },
                group: "PIluya_remove",
                markimage: "extension/瘟疫公司/image/card/PIluya_mark.png",
                intro: { content: "mark" },
                subSkill: {
                    effect: {
                        charlotte: true,
                        init(player) {
                            player.storage["PIluya_effect"] = player.storage["PIluya_effect"] || {};
                        },
                        onremove: true,
                        intro: {
                            markcount(storage = {}) {
                                return Object.keys(storage).length;
                            },
                            content(storage = {}, player) {
                                const targets = Object.values(storage)
                                    .map(i => i[0])
                                    .sortBySeat(player);
                                return "已指定" + get.translation(targets) + "为目标";
                            },
                        },
                        markimage: "extension/瘟疫公司/image/card/PIluya_control.png",
                        trigger: { player: "phaseEnd" },
                        filter(event, player) {
                            const storage = player.storage["PIluya_effect"] || {};
                            return Object.values(storage).map(i => i[1]) !== event;
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        content() {
                            for (const i in player.storage["PIluya_effect"]) {
                                if (player.storage["PIluya_effect"][i][1] !== trigger) {
                                    delete player.storage["PIluya_effect"][i];
                                }
                            }
                            if (!Object.keys(player.storage["PIluya_effect"]).length) {
                                player.removeSkill("PIluya_effect");
                            } else player.markSkill("PIluya_effect");
                        },
                        group: "PIluya_mark",
                    },
                    mark: {
                        charlotte: true,
                        trigger: { global: ["useCard", "damageSource"] },
                        filter(event, player) {
                            const target = event[event.name == "useCard" ? "player" : "source"];
                            if (!target?.isIn() || target.countMark("PIluya") >= target.maxHp) return false;
                            const storage = player.storage["PIluya_effect"] || {};
                            return Object.values(storage)
                                .map(i => i[0])
                                .includes(target);
                        },
                        forced: true,
                        logTarget(event, player) {
                            return event[event.name == "useCard" ? "player" : "source"];
                        },
                        content() {
                            const target = event.targets[0];
                            target.addMark("PIluya", Math.min(target.maxHp - target.countMark("PIluya"), trigger.num || 1));
                        },
                    },
                    remove: {
                        trigger: { global: ["PIluya_markAfter", "damageEnd", "loseHpEnd", "recoverEnd", "gainMaxHpEnd", "loseMaxHpEnd"] },
                        filter(event, player) {
                            const target = event.name == "PIluya_mark" ? event.targets[0] : event.player;
                            return target.countMark("PIluya") > target.getHp();
                        },
                        logTarget(event, player) {
                            return event.name == "PIluya_mark" ? event.targets[0] : event.player;
                        },
                        prompt2(event, player) {
                            const target = event.name == "PIluya_mark" ? event.targets[0] : event.player;
                            if (_status.currentPhase === target) return "结束" + get.translation(target) + "回合";
                            return "令" + get.translation(target) + "跳过下个出牌阶段";
                        },
                        check(event, player) {
                            const target = event.name == "PIluya_mark" ? event.targets[0] : event.player;
                            return get.attitude(player, target) < 0;
                        },
                        content() {
                            const target = trigger.name == "PIluya_mark" ? trigger.targets[0] : trigger.player;
                            target.removeMark("PIluya", target.getHp());
                            if (_status.currentPhase === target) {
                                const evt = event.getParent("phase", true);
                                if (evt) {
                                    game.log(target, "结束了回合");
                                    evt.finish();
                                }
                                for (const phase of lib.phaseName) {
                                    const evtx = event.getParent(phase, true);
                                    if (evtx?.name == phase) evtx.skipped = true;
                                }
                            } else {
                                target.skip("phaseUse");
                                target.addTempSkill("PIluya_skip", { player: "phaseUseSkipped" });
                            }
                        },
                    },
                    skip: {
                        mark: true,
                        charlotte: true,
                        intro: { content: "跳过下个的出牌阶段" },
                    },
                },
            },
            PInaozu: {
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        return target.countMark("PIluya") > target.getHp();
                    });
                },
                filterTarget(card, player, target) {
                    if (!target.hasMark("PIliran_mark")) return false;
                    return target.countMark("PIluya") > target.getHp();
                },
                async content(event, trigger, player) {
                    const target = event.target,
                        num2 = target.countMark("PIluya");
                    target.clearMark("PIluya");
                    await player.gainPlayerCard(target, "h", Math.max(1, target.getDamagedHp()));
                    const num = Math.min(target.maxHp, Math.abs(target.getHp() - num2));
                    if (num > 0) {
                        const result = await target
                            .chooseToDiscard(num, "he", "弃置" + get.cnNumber(num) + "张牌或失去" + num + "点体力")
                            .set("ai", card => {
                                if (get.event().num > 3 || target.hasSkillTag("noturn") || target.isTurnedOver() || ((get.name(card) == "tao" || get.name(card) == "jiu") && lib.filter.cardSavable(card, target, target))) return -1;
                                if (target.hp <= get.event().num) {
                                    if (
                                        get.event().num < target.getEnemies().length &&
                                        target.hasCard(cardx => {
                                            return (get.name(cardx) == "tao" || get.name(cardx) == "jiu") && lib.filter.cardSavable(cardx, target, target);
                                        }, "hs")
                                    )
                                        return 7 - get.value(card);
                                    return -1;
                                }
                                return 24 - 5 * get.event().num - 2 * Math.min(4, target.hp) - get.value(card);
                            })
                            .set("num", num)
                            .forResult();
                        if (!result.bool) {
                            target.addTempSkill("PInaozu_effect");
                            await target.loseHp(num);
                        }
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { player: "dying" },
                        filter(event, player) {
                            return event.reason?.getParent().name == "PInaozu";
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        content() {
                            player.addTempSkill("PInaozu_ban", { player: "phaseBegin" });
                        },
                    },
                    ban: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PInaozu_mark.png",
                        intro: { content: "不能使用手牌" },
                        mod: {
                            cardEnabled(card, player) {
                                let hs = player.getCards("h"),
                                    cards = [card];
                                if (Array.isArray(card.cards)) cards.addArray(card.cards);
                                if (cards.containsSome(...hs)) return false;
                            },
                            cardSavable(card, player) {
                                let hs = player.getCards("h"),
                                    cards = [card];
                                if (Array.isArray(card.cards)) cards.addArray(card.cards);
                                if (cards.containsSome(...hs)) return false;
                            },
                        },
                    },
                },
            },
            //禽流感
            PIniaomei: {
                trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                filter(event, player, name, target) {
                    return target?.isIn();
                },
                getIndex(event, player) {
                    if (!event.getl || !event.getg) return [];
                    let ids = [],
                        cards = event.getl(player).cards2.slice();
                    player.getHistory("lose", evt => {
                        if (event != evt.getParent()) return false;
                        ids.addArray(Object.keys(evt.gaintag_map).filter(i => evt.gaintag_map[i].includes("PIniaomei_mark")));
                    });
                    cards = cards.filter(card => ids.includes(card.cardid));
                    return game
                        .filterPlayer(target => {
                            if (target === player) return false;
                            return event.getg(target).some(card => {
                                return cards.includes(card);
                            });
                        })
                        .sortBySeat();
                },
                forced: true,
                locked: false,
                logTarget(event, player, name, target) {
                    return target;
                },
                async content(event, trigger, player) {
                    let ids = [],
                        cards = trigger.getl(player).cards2.slice(),
                        target = event.targets[0];
                    player.getHistory("lose", evt => {
                        if (trigger != evt.getParent()) return false;
                        ids.addArray(Object.keys(evt.gaintag_map).filter(i => evt.gaintag_map[i].includes("PIniaomei_mark")));
                    });
                    cards = cards.filter(card => ids.includes(card.cardid) && trigger.getg(target).includes(card));
                    const result = await target.judge().forResult();
                    const color = result.color;
                    if (color) {
                        const colors = cards.map(card => get.color(card, player)).unique();
                        if (colors.includes(color) && target.canGanran()) {
                            await target.addPIliranMark();
                        }
                        if (color == "black") await target.chooseToDiscard("he", true);
                        if (color == "red") await player.draw(2);
                    }
                },
                mod: {
                    aiValue(player, card, num) {
                        if (get.itemtype(card) == "card") return num * 1.01;
                    },
                    aiUseful(player, card, num) {
                        if (get.itemtype(card) == "card") return num * 0.99;
                    },
                },
                group: ["PIniaomei_init", "PIniaomei_give"],
                subSkill: {
                    mark: {},
                    init: {
                        trigger: {
                            global: "phaseBefore",
                            player: "enterGame",
                        },
                        filter(event, player) {
                            if (!player.countCards("h")) return false;
                            return event.name !== "phase" || game.phaseNumber === 0;
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.addGaintag(player.getCards("h"), "PIniaomei_mark");
                        },
                    },
                    give: {
                        enable: "phaseUse",
                        trigger: { player: "damageEnd" },
                        filter(event, player) {
                            if (
                                !game.hasPlayer(target => {
                                    return !player.isPISameClanFor(target);
                                })
                            )
                                return false;
                            return player.hasCard(card => card.hasGaintag("PIniaomei_mark"), "h");
                        },
                        filterCard(card, player) {
                            return card.hasGaintag("PIniaomei_mark");
                        },
                        filterTarget(card, player, target) {
                            return !player.isPISameClanFor(target);
                        },
                        position: "h",
                        check(card) {
                            return 7 - get.value(card);
                        },
                        prompt: "将一张“鸟”交给一名非同族角色",
                        async cost(event, trigger, player) {
                            const info = lib.skill.PIniaomei.subSkill.give;
                            event.result = await player
                                .chooseCardTarget({
                                    prompt: get.prompt("PIniaomei_give"),
                                    prompt2: info.prompt,
                                    filterCard: info.filterCard,
                                    filterTarget: info.filterTarget,
                                    position: info.position,
                                    ai1: info.check,
                                    ai2(target) {
                                        const player = get.player();
                                        return -get.attitude(player, target);
                                    },
                                })
                                .forResult();
                        },
                        round: 1,
                        lose: false,
                        discard: false,
                        delay: false,
                        async content(event, trigger, player) {
                            await player.give(event.cards, event.targets[0]);
                        },
                    },
                },
            },
            PIfeishuai: {
                trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                filter(event, player, name, target) {
                    return target?.isIn();
                },
                getIndex(event, player) {
                    if (!event.getg) return [];
                    return game
                        .filterPlayer(target => {
                            if (target.isHealthy() || !target.hasMark("PIliran_mark")) return false;
                            return _status.currentPhase !== player && event.getg(target).length >= 2;
                        })
                        .sortBySeat();
                },
                forced: true,
                locked: false,
                logTarget(event, player, name, target) {
                    return target;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        num = Math.max(1, target.getDamagedHp());
                    const result = await target
                        .chooseToDiscard(num, { color: "red" }, "he")
                        .set("ai", card => {
                            return 4 - get.value(card);
                        })
                        .set("prompt", "弃置" + get.cnNumber(num) + "张红色牌，或令自己下回合手牌上限-" + num + "，或受到1点伤害")
                        .forResult();
                    if (!result.bool) {
                        const result2 = await target
                            .chooseControl()
                            .set("choiceList", ["令自己下回合手牌上限-" + num, "受到1点伤害"])
                            .set("ai", () => 0)
                            .forResult();
                        if (result2.index == 0) {
                            target.addTempSkill("PIfeishuai_hand", { player: "phaseEnd" });
                            target.addMark("PIfeishuai_hand", 2, false);
                        } else {
                            await target.damage();
                        }
                    }
                    if (num > target.getHp()) {
                        const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                        if (player.canUse(card, target, false)) await player.useCard(card, target, false);
                    }
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        onremove: true,
                        intro: {
                            markcount(storage = 0) {
                                return storage === 0 ? 0 : -storage;
                            },
                            content: "手牌上限-#",
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark("PIfeishuai_hand");
                            },
                        },
                        markimage: "extension/瘟疫公司/image/card/PIfeishuai_mark.png",
                    },
                },
            },
            //西班牙牢大
            PIsiji: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    const target = event.player;
                    if (player.getStorage("PIsiji_used").includes(target)) return false;
                    if (!target.countDiscardableCards(player, "he")) return false;
                    return (
                        !player.isPISameClanFor(target) &&
                        target.hasMark("PIliran_mark") &&
                        game.hasPlayer(targetx => {
                            if (![target.getNext(), target.getPrevious()].includes(targetx)) return false;
                            return !player.isPISameClanFor(targetx) && targetx.countDiscardableCards(player, "he");
                        })
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2("PIsiji", trigger.player), (card, player, target) => {
                            const event = get.event().getTrigger();
                            if (![event.player.getNext(), event.player.getPrevious()].includes(target)) return false;
                            return !player.isPISameClanFor(target) && target.countDiscardableCards(player, "he");
                        })
                        .set("ai", target => {
                            const player = get.player(),
                                event = get.event().getTrigger();
                            return get.effect(target, { name: "guohe_copy2" }, player, player) - get.effect(event.player, { name: "guohe_copy2" }, player, player);
                        })
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    player.logSkill("PIsiji", trigger.player, false);
                    player.line2([trigger.player, event.targets[0]]);
                    [trigger.player, event.targets[0]].forEach(i => i.chat("What can I say?"));
                    if (!player.storage.PIsiji_used) {
                        player.when({ global: "roundStart" }).then(() => {
                            delete player.storage.PIsiji_used;
                        });
                    }
                    player.markAuto("PIsiji_used", [trigger.player]);
                    await game.delayx();
                    const targets = [trigger.player, event.targets[0]].sortBySeat(),
                        colors = [];
                    for (const i of targets) {
                        const result = await player.discardPlayerCard(i, "he", true).forResult();
                        if (result?.bool && result.cards?.length) colors.push(get.color(result.cards[0], i));
                    }
                    if (colors.length == 2 && colors[0] == colors[1]) {
                        const color = colors[0];
                        if (["red", "black"].includes(color)) {
                            const next = await player.chooseTarget((card, player, target) => {
                                if (!get.event().targets?.includes(target)) return false;
                                return get.event().color === "black" || target.canGanran() || (target.hasMark("PIliran_mark") && target.countDiscardableCards(player, "he"));
                            });
                            next.set("color", color);
                            next.set("targets", targets);
                            next.set("ai", target => {
                                const player = get.player(),
                                    color = get.event().color;
                                if (color == "black") return get.damageEffect(target, player, player);
                                if (target.canGanran()) return -get.attitude(player, target);
                                return get.effect(target, { name: "guohe_copy2" }, player, player);
                            });
                            next.set("prompt", color === "black" ? "对其中一名角色造成1点伤害" : "选择其中一名角色，若其可感染则令其感染，若其已感染则弃置其一张牌");
                            const result2 = await next.forResult();
                            if (result2.bool) {
                                const target = result2.targets[0];
                                player.line(target);
                                target.chat("Mamba out!");
                                if (color === "black") await target.damage();
                                else {
                                    if (target.canGanran()) await target.addPIliranMark();
                                    else if (target.hasMark("PIliran_mark") && target.countDiscardableCards(player, "he")) {
                                        await player.discardPlayerCard(target, "he", true);
                                    }
                                }
                            }
                        }
                    } else {
                        await player.draw(2);
                    }
                },
            },
            PIeli: {
                trigger: { source: "damageSource" },
                filter(event, player) {
                    if (_status.currentPhase !== player) return false;
                    return event.player.hasMark("PIliran_mark") && player.countMark("PIeli") < 5;
                },
                logTarget: "player",
                forced: true,
                content() {
                    player.addMark("PIeli", 1);
                },
                markimage: "extension/瘟疫公司/image/card/PIeli_mark.png",
                intro: {
                    name2: "恶",
                    content: "mark",
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == "sha") return num + player.countMark("PIeli");
                    },
                },
                group: "PIeli_add",
                subSkill: {
                    add: {
                        trigger: { player: "useCard2" },
                        filter(event, player) {
                            if (!event.card || get.info(event.card).allowMultiple === false || !player.hasMark("PIeli")) return false;
                            if (!event.targets || event.targets.length !== 1 || !event.targets[0].hasMark("PIliran_mark")) return false;
                            return game.hasPlayer(target => {
                                if (!target.hasMark("PIliran_mark") || event.targets.includes(target)) return false;
                                return lib.filter.targetEnabled2(event.card, player, target) && lib.filter.targetInRange(event.card, player, target);
                            });
                        },
                        round: 1,
                        async cost(event, trigger, player) {
                            const num = player.countMark("PIeli");
                            event.result = await player
                                .chooseTarget(
                                    get.prompt("PIeli"),
                                    "肘击至多" + get.cnNumber(num) + "名感染角色，令这些角色成为" + get.translation(trigger.card) + "的额外目标",
                                    (card, player, target) => {
                                        const evt = get.event().getTrigger();
                                        if (!target.hasMark("PIliran_mark") || evt.targets.includes(target)) return false;
                                        return lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                    },
                                    [1, num]
                                )
                                .set("ai", target => {
                                    const player = get.player();
                                    return get.effect(target, get.event().getTrigger().card, player, player);
                                })
                                .forResult();
                        },
                        locked: true,
                        content() {
                            player.chat("Man!");
                            const targets = event.targets.sortBySeat();
                            trigger.targets.addArray(targets);
                            player.removeMark("PIeli", targets.length);
                            game.log(targets, "成为了", trigger.card, "的额外目标");
                        },
                    },
                },
            },
            //猩猩流感
            PIjiqun: {
                trigger: { player: ["phaseJieshuBegin", "damageEnd"] },
                filter(event, player) {
                    if (!player.hasMark("PIjiqun_low")) return false;
                    return ["low", "level"].reduce((sum, mark) => sum + player.countMark("PIjiqun_" + mark), 0) <= 9;
                },
                forced: true,
                getIndex(event, player) {
                    return event.name === "damage" ? event.num : 1;
                },
                content() {
                    player.removeMark("PIjiqun_low", 1);
                    player.addMark("PIjiqun_level", 1);
                },
                group: ["PIjiqun_init", "PIjiqun_gain"],
                subSkill: {
                    init: {
                        trigger: {
                            global: ["phaseBefore", "phaseBegin"],
                            player: "enterGame",
                        },
                        filter(event, player, name) {
                            if (!player.maxHp) return false;
                            if (["low", "level"].reduce((sum, mark) => sum + player.countMark("PIjiqun_" + mark), 0) >= 9) return false;
                            return name !== "phaseBefore" || game.phaseNumber === 0;
                        },
                        forced: true,
                        content() {
                            player.addMark("PIjiqun_low", Math.min(player.maxHp, 9 - ["low", "level"].reduce((sum, mark) => sum + player.countMark("PIjiqun_" + mark), 0)));
                        },
                    },
                    low: {
                        markimage: "extension/瘟疫公司/image/card/PIjiqun_low_mark.png",
                        intro: { content: "mark" },
                    },
                    level: {
                        markimage: "extension/瘟疫公司/image/card/PIjiqun_level_mark.png",
                        intro: { content: "mark" },
                    },
                    gain: {
                        trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                        filter(event, player) {
                            if (event.type != "discard" || event.getlx === false) return false;
                            if (["low", "level"].reduce((sum, mark) => sum + player.countMark("PIjiqun_" + mark), 0) >= 9) return false;
                            return game.hasPlayer(target => {
                                if (target === player) return false;
                                return event.getl(target)?.cards2?.some(card => get.type(card, false) === "equip");
                            });
                        },
                        forced: true,
                        content() {
                            player.addMark("PIjiqun_low", 1);
                            if (player.storage.PIjiqun) player.draw();
                        },
                    },
                },
            },
            PIzhiqi: {
                unique: true,
                trigger: { player: "phaseBegin" },
                filter(event, player) {
                    return player.countMark("PIjiqun_level") > player.getHp();
                },
                juexingji: true,
                forced: true,
                skillAnimation: true,
                animationColor: "fire",
                async content(event, trigger, player) {
                    player.awakenSkill("PIzhiqi");
                    if (player.isDamaged()) await player.recoverTo(player.maxHp);
                    if (player.countCards("h") < player.maxHp) await player.drawTo(player.maxHp);
                    if (player.countCards("j")) await player.discard(player.getCards("j"));
                    const targets = game.filterPlayer(target => target.getHp() <= player.getHp() && target.canGanran());
                    if (targets.length) {
                        player.line(targets);
                        for (const i of targets) await i.addPIliranMark();
                    }
                    player.storage.PIjiqun = true;
                    game.log(player, "修改了技能", "【集群】");
                    await player.addSkills("PIzhiyuan");
                },
                derivation: "PIzhiyuan",
            },
            PIzhiyuan: {
                trigger: {
                    player: "useCardToPlayered",
                    global: "phaseBegin",
                },
                filter(event, player) {
                    if (!player.hasMark("PIjiqun_level")) return false;
                    return event[event.name == "phase" ? "player" : "target"].hasMark("PIliran_mark");
                },
                logTarget(event, player) {
                    return event[event.name == "phase" ? "player" : "target"];
                },
                check(event, player) {
                    const target = event[event.name == "phase" ? "player" : "target"];
                    return get.attitude(player, target) < 0;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.removeMark("PIjiqun_level", 1);
                    const result = await target.chooseToGive(player, "he").forResult();
                    if (!result.bool) {
                        if (trigger.name === "phase") await target.damage();
                        else trigger.getParent().directHit.add(target);
                    }
                    if (trigger.name === "useCardToPlayered") {
                        player
                            .when("useCardAfter")
                            .filter(evt => evt === trigger.getParent())
                            .then(() => {
                                if (player.hasHistory("sourceDamage", evt => evt.card === trigger.card && evt.player === target)) {
                                    player.line(target);
                                    player.gainPlayerCard(target, "he", true).forResult();
                                } else event.finish();
                            })
                            .then(() => {
                                if (!result?.bool || !result.cards?.length) target.damage();
                            })
                            .vars({ target: target });
                    }
                },
            },
            //包虫
            PIjiqiu: {
                trigger: { global: ["gainAfter", "loseAsyncAfter", "recoverEnd"] },
                filter(event, player, name, target) {
                    return target?.isIn();
                },
                getIndex(event, player) {
                    return game.filterPlayer(target => {
                        if (!target.hasMark("PIliran_mark") || target.countMark("PIjiqiu") >= 5) return false;
                        if (event.name === "recover") return target === event.player;
                        if (_status.currentPhase === target || !event.getg) return false;
                        return event.getg(target)?.length > 0;
                    });
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                prompt2(event, player, name, target) {
                    return "令" + get.translation(target) + "获得" + (1 + (event.name === "recover")) + "枚“棘球”标记";
                },
                check(event, player, name, target) {
                    return get.attitude(player, target) < 0;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    target.addMark("PIjiqiu", Math.min(5 - player.countMark("PIjiqiu"), 1 + (trigger.name === "recover")));
                    if (target.countMark("PIjiqiu") >= 4) {
                        await player.gainPlayerCard(target, "he");
                    }
                },
                markimage: "extension/瘟疫公司/image/card/PIjiqiu_mark.png",
                intro: { content: "mark" },
                group: "PIjiqiu_hit",
                subSkill: {
                    hit: {
                        trigger: { player: "useCard" },
                        filter(event, player) {
                            return game.hasPlayer(target => target.countMark("PIjiqiu") >= 4);
                        },
                        forced: true,
                        locked: false,
                        logTarget(event, player) {
                            return game.filterPlayer(target => target.countMark("PIjiqiu") >= 4);
                        },
                        content() {
                            trigger.directHit.addArray(game.filterPlayer(target => target.countMark("PIjiqiu") >= 4));
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return arg?.target && arg.target.countMark("PIjiqiu") >= 4;
                            },
                        },
                    },
                },
            },
            PIchongai: {
                trigger: { source: "damageBegin1" },
                logTarget: "player",
                forced: true,
                locked: false,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    if (target.countMark("PIjiqiu") >= 3) {
                        trigger.num++;
                    }
                    if (target.hasMark("PIjiqiu")) {
                        const num = Math.max(1, trigger.num),
                            str = get.translation(target);
                        const result = await player
                            .chooseBool("是否移去其" + num + "枚“棘球”标记？", ["弃置" + str + "的一张牌", "视为对" + str + "使用一张无距离和次数限制的病【杀】", "对" + str + "造成1点伤害"][Math.min(3, num) - 1] + (num > target.countMark("PIjiqiu") ? "，然后" + str + "失去1点体力" : ""))
                            .set(
                                "choice",
                                (() => {
                                    if (num == 1) return get.effect(target, { name: "guohe_copy2" }, player, player) > 0;
                                    if (num == 2) {
                                        const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                                        return player.canUse(card, target, false) && get.effect(target, card, player, player) > 0;
                                    }
                                    return get.damageEffect(target, player, player) > 0;
                                })()
                            )
                            .forResult();
                        if (result.bool) {
                            const numx = target.countMark("PIjiqiu");
                            target.removeMark("PIjiqiu", Math.min(num, numx));
                            if (num == 1) await player.discardPlayerCard(target, "he", true);
                            else if (num == 2) {
                                const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                                if (player.canUse(card, target, false)) await player.useCard(card, target, false);
                            } else await target.damage();
                            if (target.countMark("PIjiqiu") < num) await target.loseHp();
                        }
                    }
                    if (target.countMark('PIjiqiu') < 5) target.addMark('PIjiqiu', 1);
                },
            },
            //变形虫
            PIshinao: {
                trigger: { player: "useCardToPlayered" },
                filter(event, player) {
                    const target = event.target;
                    if (!target.hasMark("PIliran_mark") || player.getStorage("PIshinao_used").includes(target)) return false;
                    return target.countCards("h") && player.isDamaged();
                },
                logTarget: "target",
                check(event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.target;
                    if (!player.storage.PIshinao_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIshinao_used);
                    }
                    player.markAuto("PIshinao_used", [target]);
                    const num = player.getDamagedHp(),
                        cards = target.getDiscardableCards(target, "h").filter(card => get.suit(card) === get.suit(trigger.card));
                    if (cards.length > 0) {
                        if (num < cards.length) await target.chooseToDiscard("h", true, num, { suit: get.suit(trigger.card) });
                        else await target.discard(cards);
                    }
                    const goon1 = target.countCards("h") <= player.countCards("h");
                    const goon2 = target.countCards("h") >= player.countCards("h");
                    if (goon1) {
                        const result = await player.gainPlayerCard(target, "he").forResult();
                        if (result?.bool && result.cards?.length) await player.recover();
                    }
                    if (goon2) {
                        await target.loseHp();
                    }
                },
            },
            PIbianxing: {
                mod: {
                    playerEnabled(card, player, target) {
                        if (card?.storage?.PIbianxing && !target.hasMark("PIliran_mark")) return false;
                    },
                },
                enable: "phaseUse",
                filter(event, player) {
                    return get
                        .inpileVCardList(info => {
                            const name = info[2];
                            return get.type(name) === "basic" || get.type(name) === "trick";
                        })
                        .some(card => {
                            return player.hasCard(cardx => {
                                const cardxx = { name: card[2], nature: card[3], storage: { PIbianxing: true }, cards: [cardx] };
                                return event.filterCard(cardxx, player, event) && player.hasUseTarget(cardxx, true, true);
                            }, "hes");
                        });
                },
                usable: 1,
                locked: false,
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList(info => {
                                const name = info[2];
                                return get.type(name) === "basic" || get.type(name) === "trick";
                            })
                            .filter(card => {
                                return player.hasCard(cardx => {
                                    const cardxx = { name: card[2], nature: card[3], storage: { PIbianxing: true }, cards: [cardx] };
                                    return event.filterCard(cardxx, player, event) && player.hasUseTarget(cardxx, true, true);
                                }, "hes");
                            });
                        return ui.create.dialog("变形", [list, "vcard"], "hidden");
                    },
                    check(button) {
                        const player = get.player();
                        return player.getUseValue({ name: button.link[2], nature: button.link[3], storage: { PIbianxing: true } });
                    },
                    backup(links, player) {
                        return {
                            filterCard: true,
                            position: "hes",
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                                storage: { PIbianxing: true },
                            },
                            selectTarget: 1,
                        };
                    },
                    prompt(links) {
                        const name = links[0][2],
                            nature = links[0][3];
                        return "将一张牌当作" + (get.translation(nature) || "") + get.translation(name) + "对一名感染角色使用";
                    },
                },
                ai: {
                    fireAttack: true,
                    skillTagFilter(player) {
                        if (!player.isPhaseUsing() || player.getStat("skill").PIbianxing || !player.countCards("hes")) return false;
                    },
                    order(item, player) {
                        let max = 0,
                            names = get
                                .inpileVCardList(info => {
                                    const name = info[2];
                                    return get.type(name) === "basic" || get.type(name) === "trick";
                                })
                                .filter(card => {
                                    player.hasCard(cardx => {
                                        const cardxx = { name: card[2], nature: card[3], storage: { PIbianxing: true }, cards: [cardx] };
                                        return player.hasUseTarget(cardxx);
                                    }, "hes");
                                });
                        names = names.map(namex => {
                            return { name: namex[2], nature: namex[3] };
                        });
                        names.forEach(card => {
                            if (player.getUseValue(card) > 0) {
                                const temp = get.order(card);
                                if (temp > max) max = temp;
                            }
                        });
                        if (max > 0) max += 0.3;
                        return max;
                    },
                    result: { player: 1 },
                },
                subSkill: { backup: {} },
            },
            //脊髓灰质炎
            PItanhuan: {
                trigger: { global: ["damageBegin1", "damageBegin2"] },
                filter(event, player, name) {
                    const goon = name.slice("damageBegin".length) == "1";
                    const target = event[goon ? "source" : "player"];
                    if (!target?.isIn() || player.getStorage("PItanhuan_used").includes(target)) return false;
                    if (goon && !player.countDiscardableCards(player, "he")) return false;
                    return target.hasMark("PIliran_mark");
                },
                logTarget(event, player, name) {
                    return event[name.slice("damageBegin".length) == "1" ? "source" : "player"];
                },
                prompt2(event, player, name) {
                    const goon = name.slice("damageBegin".length) == "1";
                    const target = event[goon ? "source" : "player"],
                        str = get.translation(target);
                    if (goon) {
                        const num = event.num,
                            strx = event.player === player && target.hasEnabledSlot() ? "，然后你可以失去1点体力并废除" + str + "的一个随机装备栏" : "";
                        if (num == 1) return "弃置一张牌并防止此伤害" + strx;
                        return "弃置一张牌令此伤害-1，或弃置" + get.cnNumber(num) + "张牌并防止此伤害" + strx;
                    }
                    const num = Math.max(target.getDamagedHp(), 1);
                    return "令" + str + "弃置" + get.cnNumber(num) + "张牌或令此伤害+1" + (event.source === player ? "，然后你可以失去1点体力并令其翻面" : "");
                },
                check(event, player, name) {
                    return get.attitude(player, event[name.slice("damageBegin".length) == "1" ? "source" : "player"]) < 0;
                },
                async content(event, trigger, player) {
                    const goon = event.triggername.slice("damageBegin".length) == "1";
                    const target = event.targets[0],
                        str = get.translation(target);
                    if (!player.storage.PItanhuan_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PItanhuan_used);
                    }
                    player.markAuto("PItanhuan_used", [target]);
                    if (goon) {
                        const num = trigger.num,
                            strx = trigger.player === player && target.hasEnabledSlot() ? "，然后你可以失去1点体力并废除" + str + "的一个随机装备栏" : "";
                        const prompt = num == 1 ? "弃置一张牌并防止此伤害" : "弃置一张牌令此伤害-1，或弃置" + get.cnNumber(num) + "张牌并防止此伤害";
                        const result = await player
                            .chooseToDiscard(true, "he", prompt + strx)
                            .set("filterOk", () => {
                                return get.event().selectCard.includes(ui.selected.cards.length);
                            })
                            .set("selectCard", [1, num])
                            .forResult();
                        if (result?.bool && result.cards?.length) {
                            if (result.cards.length === num) trigger.cancel();
                            else trigger.num--;
                        }
                        if (trigger.player === player && target.hasEnabledSlot()) {
                            const resultx = await player
                                .chooseBool("是否失去1点体力并废除" + str + "的一个随机装备栏？")
                                .set("choice", get.attitude(player, target) < 0 && player.getHp() > 1)
                                .forResult();
                            if (resultx.bool) {
                                player.line(target);
                                await player.loseHp();
                                const numx = [1, 2, 3, 4, 5].filter(numx => target.hasEnabledSlot("equip" + numx)).randomGet();
                                if (numx) await target.disableEquip("equip" + numx);
                            }
                        }
                    } else {
                        const num = Math.max(trigger.num, 1);
                        const result = await target.chooseToDiscard("he", "弃置" + get.cnNumber(num) + "张牌，或令此伤害+1", num).forResult();
                        if (!result.bool) trigger.num++;
                        if (trigger.source === player) {
                            const resultx = await player
                                .chooseBool("是否失去1点体力并令" + str + "翻面？")
                                .set("choice", get.attitude(player, target) * (target.isTurnedOver() ? 1 : -1) > 0)
                                .forResult();
                            if (resultx.bool) {
                                player.line(target);
                                await player.loseHp();
                                await target.turnOver();
                            }
                        }
                    }
                },
            },
            PIliwei: {
                trigger: { player: "useCardToPlayered" },
                filter(event, player) {
                    if (player.countMark("PIliwei_used") >= 2) return false;
                    return event.target.isDamaged() && event.target.hasMark("PIliran_mark");
                },
                logTarget: "target",
                check(event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                async content(event, trigger, player) {
                    if (!player.storage.PIliwei_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIliwei_used);
                    }
                    player.addMark("PIliwei_used", 1, false);
                    const target = trigger.target,
                        num = Math.max(1, target.getDamagedHp());
                    await player.draw(num);
                    const result = await player.chooseToDiscard("是否弃置" + get.cnNumber(num) + "张牌并令其无法响应此牌？", num, "he").forResult();
                    if (result.bool) trigger.getParent().directHit.add(target);
                    player.addTempSkill("PIliwei_effect");
                    player.markAuto("PIliwei_effect", [[target, trigger.getParent()]]);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        trigger: { global: "dying" },
                        filter(event, player) {
                            const evt = event.getParent(),
                                evtx = event.getParent(3);
                            if (!evt || evt.name !== "damage" || !evtx || evtx.name !== "useCard") return false;
                            return player.getStorage("PIliwei_effect").some(list => {
                                return list[0] === event.player && list[1] === evtx;
                            });
                        },
                        forced: true,
                        logTarget: "player",
                        content() {
                            const target = trigger.player;
                            const numx = [1, 2, 3, 4, 5].filter(numx => target.hasEnabledSlot("equip" + numx)).randomGet();
                            if (numx) target.disableEquip("equip" + numx);
                            player.recover();
                            if (player.countCards("h") < target.maxHp) player.drawTo(target.maxHp);
                        },
                    },
                },
            },
            //钩虫鞭虫×勾八虫√（bushi
            PIyanshi: {
                trigger: { global: "phaseDrawBegin" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark") && event.player.isDamaged();
                },
                popup: false,
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    event.result = await player.gainPlayerCard(target, "he").set("prompt", get.prompt("PIyanshi", target)).set("logSkill", ["PIyanshi", target]).forResult();
                },
                async content(event, trigger, player) {
                    let result,
                        target = trigger.player,
                        num = target.getHp() - 1;
                    if (trigger.numFixed) result = { index: 1 };
                    else
                        result = await target
                            .chooseControl()
                            .set("choiceList", ["本阶段少摸一张牌", "令本回合手牌上限改为" + num])
                            .set("ai", () => {
                                const player = get.player(),
                                    num = player.getHp() - 1;
                                const cards = player.getCards("h", card => !player.hasUseTarget(card, true, true) || player.getUseValue(card) <= 0);
                                if (cards.length + get.event().getTrigger().num <= num) return 1;
                                return player.countCards("h") < 3 ? 0 : 1;
                            })
                            .forResult();
                    if (result.index == 0) trigger.num--;
                    else {
                        target.addTempSkill("PIyanshi_effect");
                        target.storage.PIyanshi_effect = num;
                        target.markSkill("PIyanshi_effect");
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: "手牌上限为#" },
                        markimage: "extension/瘟疫公司/image/card/PIyanshi_mark.png",
                        mod: {
                            maxHandcardBase(player) {
                                return player.storage.PIyanshi_effect;
                            },
                        },
                    },
                },
            },
            PIliji: {
                trigger: { global: "phaseUseBefore" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark") && event.player.countCards("h") >= event.player.getHp();
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: "player",
                async content(event, trigger, player) {
                    const target = trigger.player;
                    await target.phaseDiscard();
                    if (target.isHealthy()) await target.loseHp();
                    else {
                        const current = target.getNext();
                        const goon1 = player.isDamaged(),
                            goon2 = current.canGanran() || current.hasMark("PIliran_mark");
                        if (goon1 || goon2) {
                            let result;
                            if (!goon1) result = { index: 1 };
                            else if (!goon2) result = { index: 0 };
                            else {
                                result = await player
                                    .chooseControl()
                                    .set("choiceList", ["回复1点体力", current.canGanran() ? "令" + get.translation(current) + "感染" : "摸一张牌"])
                                    .set("ai", () => {
                                        const player = get.player(),
                                            current = get.event().current;
                                        return current.canGanran() && get.attitude(player, current) < 0 ? 1 : 0;
                                    })
                                    .set("current", current)
                                    .forResult();
                                if (result.index == 0) await player.recover();
                                else {
                                    if (current.canGanran()) await current.addPIliranMark();
                                    else await player.draw();
                                }
                            }
                        }
                    }
                },
            },
            //黄曲霉菌
            PIfuhua: {
                trigger: { player: ["phaseJieshuBegin", "damageEnd"] },
                filter(event, player) {
                    return game.hasPlayer(target => target.hasMark("PIliran_mark") && target.countCards("h") >= Math.max(1, target.getHp()));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt("PIfuhua"),
                            (card, player, target) => {
                                return target.hasMark("PIliran_mark") && target.countCards("h") >= Math.max(1, target.getHp());
                            },
                            "选择一名手牌数不小于其体力值的感染角色，将其一张手牌标记为“腐”"
                        )
                        .set("ai", target => {
                            const player = get.player();
                            return get.effect(target, { name: "shunshou_copy", position: "h" }, player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const result = await player.choosePlayerCard(target, "h", true).forResult();
                    if (result.bool && result.cards?.length) {
                        target.addGaintag(result.cards, "PIfuhua_mark");
                    }
                },
                mark: true,
                intro: {
                    mark(dialog, storage, player) {
                        if (!player.isUnderControl(true)) return "这是属于" + get.translation(player) + "的私密";
                        let targets = game
                            .filterPlayer(target => {
                                return target.hasCard(card => {
                                    return card.hasGaintag("PIfuhua_mark");
                                }, "h");
                            })
                            .sortBySeat(player);
                        if (targets.length) {
                            for (const target of targets) {
                                dialog.addText(get.translation(target));
                                dialog.addSmall(
                                    target.getCards("h", card => {
                                        return card.hasGaintag("PIfuhua_mark");
                                    })
                                );
                            }
                        } else return "场上暂无角色有“腐”";
                    },
                },
                global: "PIfuhua_hand",
                group: "PIfuhua_discard",
                subSkill: {
                    tag: {},
                    hand: {
                        mod: {
                            maxHandcard(player, num) {
                                if (
                                    !player.hasCard(card => {
                                        return card.hasGaintag("PIfuhua_mark");
                                    }, "h")
                                )
                                    return;
                                return (
                                    num -
                                    Math.max(
                                        1,
                                        game.countPlayer2(target => target.hasSkill("PIfuhua"))
                                    )
                                );
                            },
                        },
                    },
                    discard: {
                        trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                        filter(event, player, name, target) {
                            if (event.type !== "discard" || event.getlx === false) return false;
                            return target?.countCards("he");
                        },
                        getIndex(event, player) {
                            if (event.type !== "discard" || event.getlx === false) return false;
                            return game.filterPlayer(target => {
                                if (event.name === "lose") {
                                    if (target !== event.player) return false;
                                    return Object.keys(event.gaintag_map).some(i => event.gaintag_map[i].includes("PIfuhua_mark"));
                                }
                                return target.hasHistory("lose", evt => {
                                    if (event != evt.getParent()) return false;
                                    return Object.keys(evt.gaintag_map).some(i => evt.gaintag_map[i].includes("PIfuhua_mark"));
                                });
                            });
                        },
                        logTarget(event, player, name, target) {
                            return target;
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            const target = event.targets[0];
                            const result = await player.discardPlayerCard(target, "he", true).forResult();
                            if (result?.bool && result.cards?.length) {
                                const card = result.cards[0];
                                switch (get.type2(card, target)) {
                                    case "basic":
                                        const resultx = await player.chooseCard("he", "是否重铸一张牌？", lib.filter.cardRecastable).forResult();
                                        if (resultx?.bool && resultx.cards?.length) await player.recast(resultx.cards);
                                        break;
                                    case "trick":
                                        await player.draw(2);
                                        break;
                                    case "equip":
                                        const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                                        if (player.canUse(card, target, false)) await player.useCard(card, target, false);
                                        break;
                                }
                            }
                        },
                    },
                },
            },
            PImeibian: {
                trigger: { global: "useCardToPlayer" },
                filter(event, player) {
                    if (!event.isFirstTarget || event.targets.includes(player)) return false;
                    const source = event.player;
                    if (!source.hasMark("PIliran_mark")) return false;
                    return source.hasHistory("lose", evt => {
                        if (evt.getParent() !== event.getParent()) return false;
                        return Object.keys(evt.gaintag_map).some(i => evt.gaintag_map[i].includes("PIfuhua_mark"));
                    });
                },
                check(event, player) {
                    let eff = event.targets.reduce((sum, t) => sum + get.effect(t, event.card, player, player), 0);
                    let targets = game.filterPlayer(target => {
                        const evt = event.getParent();
                        return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target) && get.effect(target, event.card, player, player) > 0;
                    }),
                        limit = Math.max(1, event.player.getDamagedHp());
                    if (targets.length && !["equip", "delay"].includes(get.type(event.card))) {
                        targets.sort((a, b) => get.effect(b, event.card, player, player) - get.effect(a, event.card, player, player));
                        targets = targets.slice(0, limit);
                        eff += targets.reduce((sum, t) => sum + get.effect(t, event.card, player, player), 0);
                    }
                    if (event.targets.slice().concat(targets).includes(event.player)) {
                        eff += get.effect(event.player, { name: "losehp" }, player, player);
                        eff += Math.min(event.player.countCards("h"), limit) * get.effect(event.player, { name: "guohe_copy", position: "h" }, event.player, player);
                    }
                    return eff > event.targets.reduce((sum, t) => sum + get.effect(t, event.card, event.player, player), 0);
                },
                logTarget: "player",
                async content(event, trigger, player) {
                    const origin = event.targets[0];
                    trigger.player = player;
                    trigger.getParent().player = player;
                    game.log(trigger.card, "的使用者变更为", player);
                    const targets = game.filterPlayer(target => {
                        const evt = trigger.getParent();
                        return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                    }),
                        limit = Math.max(1, origin.getDamagedHp());
                    if (targets.length && !["equip", "delay"].includes(get.type(trigger.card))) {
                        const result = await player
                            .chooseTarget(
                                "是否为" + get.translation(trigger.card) + "增加至多" + get.cnNumber(limit) + "个目标？",
                                (card, player, target) => {
                                    return get.event().targets.includes(target);
                                },
                                [1, limit]
                            )
                            .set("targets", targets)
                            .set("ai", target => {
                                const player = get.player(),
                                    trigger = get.event().getTrigger().getParent();
                                return get.effect(target, trigger.card, player, player);
                            })
                            .forResult();
                        if (result.bool) {
                            const targetx = result.targets.sortBySeat();
                            trigger.targets.addArray(targetx);
                            trigger.getParent().targets.addArray(targetx);
                            trigger.getParent().triggeredTargets1.addArray(targetx);
                            game.log(trigger.card, "增加了目标", targetx);
                        }
                    }
                    if (trigger.targets.includes(origin)) {
                        await origin.loseHp();
                        await origin.chooseToDiscard("h", limit, true);
                    }
                },
            },
            //猪流感
            PIshicun: {
                trigger: { source: "damageSource" },
                filter(event, player) {
                    return (
                        event.player.hasMark("PIliran_mark") &&
                        event.player.isIn() &&
                        game.hasPlayer(target => {
                            return target.canGanran() && target.countCards("h") < player.countCards("h");
                        })
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2("PIshicun", trigger.player), (card, player, target) => {
                            return target.canGanran() && target.countCards("h") < player.countCards("h");
                        })
                        .set("ai", target => {
                            const player = get.player();
                            return -get.attitude(player, target) + 1;
                        })
                        .forResult();
                },
                popup: false,
                frequent: true,
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.logSkill("PIshicun", [trigger.player, target], false);
                    player.line2([trigger.player, target]);
                    await target.addPIliranMark();
                    if (trigger.player.countCards("h") < player.countCards("h")) {
                        const result = await player.chooseBool("是否摸一张牌？").set("frequentSkill", "PIshicun").forResult();
                        if (result?.bool) await player.draw();
                    }
                },
            },
            PIqishuai: {
                enable: "phaseUse",
                filterCard(card, player) {
                    const num = player.storage.PIqishuai;
                    return typeof num === "number" && lib.filter.cardDiscardable(card, player) && get.number(card) >= num;
                },
                selectCard() {
                    const num = get.player().storage.PIqishuai;
                    return typeof num === "number" ? [0, 1] : -1;
                },
                position: "he",
                check(card) {
                    return 7 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return target.hasMark("PIliran_mark");
                },
                selectTarget: [0, 1],
                filterOk() {
                    return ["cards", "targets"].reduce((sum, item) => sum + ui.selected[item].length, 0) === 1;
                },
                prompt() {
                    const num = get.player().storage.PIqishuai;
                    return typeof num === "number" ? "选择一名感染角色或弃置一张牌" : "选择一名感染角色";
                },
                usable: 1,
                async content(event, trigger, player) {
                    if (event.target) {
                        const target = event.target;
                        player.addSkill("PIqishuai_effect");
                        player.markAuto("PIqishuai_effect", [target]);
                    }
                    if (event.cards?.length) {
                        const num = player.storage.PIqishuai;
                        delete player.storage.PIqishuai;
                        player.unmarkSkill("PIqishuai");
                        await player.draw(num);
                        if (
                            game.hasPlayer(target => {
                                return ["basic", "trick", "equip"].concat(lib.suit).some(effect => target.hasSkill("PIqishuai_" + effect));
                            })
                        ) {
                            const result = await player
                                .chooseTarget("是否清除一名角色的全部【器衰】效果并令其失去等量体力？", (card, player, target) => {
                                    return ["basic", "trick", "equip"].concat(lib.suit).some(effect => target.hasSkill("PIqishuai_" + effect));
                                })
                                .set("ai", target => {
                                    const player = get.player();
                                    return (
                                        get.effect(target, { name: "losehp" }, player, player) *
                                        ["basic", "trick", "equip"].concat(lib.suit).filter(effect => {
                                            return target.hasSkill("PIqishuai_" + effect);
                                        }).length
                                    );
                                })
                                .forResult();
                            if (result.bool) {
                                const target = result.targets[0];
                                const skills = ["basic", "trick", "equip"]
                                    .concat(lib.suit)
                                    .filter(effect => {
                                        return target.hasSkill("PIqishuai_" + effect);
                                    })
                                    .map(effect => "PIqishuai_" + effect);
                                player.line(target);
                                target.removeSkill(skills);
                                await target.loseHp(skills.length);
                            }
                        }
                    }
                },
                markimage: "extension/瘟疫公司/image/card/PIqishuai_mark.png",
                intro: { content: "当前记录点数为#" },
                ai: {
                    order: 9,
                    result: {
                        player: 1,
                        target: -1,
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_effect.png",
                        intro: { content: "使用牌指定$为目标时判定并为其施加负面效果" },
                        trigger: { player: "useCardToPlayer" },
                        filter(event, player) {
                            return player.getStorage("PIqishuai_effect").includes(event.target);
                        },
                        logTarget: "target",
                        forced: true,
                        async content(event, trigger, player) {
                            const num = player.storage.PIqishuai;
                            const result = await player
                                .judge(card => {
                                    const num = get.event().getParent("PIqishuai_effect").player.storage.PIqishuai;
                                    return !num || get.number(card) > num ? 1 : -1;
                                })
                                .forResult();
                            player.storage.PIqishuai = result.number;
                            player.markSkill("PIqishuai");
                            if (!num || result.number > num) {
                                if (lib.suit.includes(result.suit)) trigger.target.addSkill("PIqishuai_" + result.suit);
                                const type = get.type(result.card, player);
                                if (["basic", "trick", "equip"].includes(type)) trigger.target.addSkill("PIqishuai_" + type);
                            }
                        },
                    },
                    heart: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_heart.png",
                        intro: {
                            name: "器衰 - 红桃",
                            content: "回复体力时，取消之",
                        },
                        trigger: { player: "recoverBefore" },
                        forced: true,
                        content() {
                            trigger.cancel();
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, "recover")) return "zeroplayertarget";
                                },
                            },
                        },
                    },
                    diamond: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_diamond.png",
                        intro: {
                            name: "器衰 - 方片",
                            content: "于摸牌阶段外获得牌后，受到1点伤害",
                        },
                        trigger: {
                            player: "gainAfter",
                            global: "loseAsyncAfter",
                        },
                        filter(event, player) {
                            if (event.getParent("phaseDraw").name === "phaseDraw") return false;
                            return event.getg && event.getg(player).length;
                        },
                        forced: true,
                        content() {
                            player.damage();
                        },
                        ai: {
                            nogain: true,
                            skillTagFilter(player) {
                                if (get.damageEffect(player, player, player) > 0) return false;
                                if (!(_status.event.getParent("phaseDraw")?.name === "phaseDraw")) return false;
                            },
                        },
                    },
                    spade: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_spade.png",
                        intro: {
                            name: "器衰 - 黑桃",
                            content: "跳过下个摸牌阶段",
                        },
                        trigger: { player: "phaseDrawBefore" },
                        forced: true,
                        content() {
                            trigger.cancel();
                            player.removeSkill(event.name);
                        },
                    },
                    club: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_club.png",
                        intro: {
                            name: "器衰 - 梅花",
                            content: "手牌上限-已损失体力值",
                        },
                        trigger: { player: "phaseAfter" },
                        forced: true,
                        popup: false,
                        content() {
                            player.removeSkill(event.name);
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.getDamagedHp();
                            },
                        },
                    },
                    basic: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_basic.png",
                        intro: {
                            name: "器衰 - 基本",
                            content: "造成伤害后，弃置伤害值张牌",
                        },
                        trigger: { source: "damageSource" },
                        forced: true,
                        content() {
                            player.chooseToDiscard("he", trigger.num, true);
                        },
                    },
                    trick: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_trick.png",
                        intro: {
                            name: "器衰 - 锦囊",
                            content: "使用牌后，本回合不能使用或打出此类别的手牌",
                        },
                        trigger: { player: "useCardAfter" },
                        filter(event, player) {
                            return !player.getStorage("PIqishuai_ban").includes(get.type2(event.card));
                        },
                        forced: true,
                        content() {
                            player.addTempSkill("PIqishuai_ban");
                            player.markAuto("PIqishuai_ban", [get.type2(trigger.card)]);
                        },
                    },
                    ban: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            cardEnabled2(card, player) {
                                if (get.position(card) == "h" && player.getStorage("PIqishuai_ban").includes(get.type2(card))) return false;
                            },
                        },
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_ban.png",
                        intro: { content: "不能使用或打出$牌" },
                    },
                    equip: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIqishuai_equip.png",
                        intro: {
                            name: "器衰 - 装备",
                            content: "失去装备区的牌后，废除对应装备栏",
                        },
                        mod: {
                            aiValue(player, card, num) {
                                if (get.position(card) === "e") return num + 100;
                            },
                            aiUseful(player, card, num) {
                                if (get.position(card) === "e") return num / 114514;
                            },
                        },
                        trigger: {
                            player: "loseAfter",
                            global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
                        },
                        filter(event, player) {
                            const evt = event.getl(player);
                            return evt?.es?.some(card => get.subtypes(card).some(slot => player.hasEnabledSlot(slot)));
                        },
                        forced: true,
                        content() {
                            const evt = trigger.getl(player);
                            const cards = evt.es.filter(card => get.subtypes(card).some(slot => player.hasEnabledSlot(slot)));
                            for (const card of cards) {
                                for (const slot of get.subtypes(card)) {
                                    player.disableEquip(slot);
                                }
                            }
                        },
                    },
                },
            },
            //圣诞蠕虫
            PIchongli: {
                enable: "phaseUse",
                filter(event, player) {
                    const count = player.getStat("skill").PIchongli;
                    if ((count || 0) >= player.getHp()) return false;
                    return player.countCards("he") > 0;
                },
                filterCard: true,
                position: "he",
                filterTarget(card, player, target) {
                    return !target.isPISameClanFor(player);
                },
                discard: false,
                lose: false,
                delay: false,
                check(card) {
                    return 7 - get.value(card);
                },
                async content(event, trigger, player) {
                    const cards = event.cards,
                        target = event.target;
                    await player.give(cards, target);
                    if (target.canGanran()) await target.addPIliranMark();
                    if (get.color(cards[0], player) === "red") {
                        const result = await player.chooseBool("是否令" + get.translation(target) + "摸一张牌并复原武将牌？").forResult();
                        if (result?.bool) {
                            await target.draw();
                            if (target.isLinked()) await target.link(false);
                            if (target.isTurnedOver()) await target.turnOver(false);
                        }
                    }
                    if (get.color(cards[0], player) === "black" && target.countVCards("j")) {
                        const result = await player.chooseBool("是否令" + get.translation(target) + "获得其判定区的一张牌？").forResult();
                        if (result?.bool) await target.gainPlayerCard(target, "j", true);
                    }
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
            },
            PIshengan: {
                enable: "phaseUse",
                filter(event, player) {
                    const count = player.getStat("skill").PIshengan;
                    return (count || 0) < player.getHp() && player.countCards("hes", { color: "red" });
                },
                filterCard: { color: "red" },
                position: "hes",
                viewAs: { name: "lebu" },
                prompt: "将一张红色牌当作【乐不思蜀】对一名感染角色使用",
                check(card) {
                    return 7 - get.value(card);
                },
                locked: false,
                mod: {
                    playerEnabled(card, player, target) {
                        if (_status.event.skill === "PIshengan" && _status.event.player === player && !target.hasMark("PIliran_mark")) return false;
                    },
                },
                subfrequent: ["effect"],
                group: "PIshengan_effect",
                subSkill: {
                    effect: {
                        trigger: { global: ["phaseUseSkipped", "phaseUseCancelled"] },
                        filter(event, player) {
                            return event.player.hasMark("PIliran_mark") && event.player.isDamaged();
                        },
                        frequent: true,
                        prompt2: () => "令其回复1点体力，你执行一个额外的出牌阶段，然后选择令其将手牌数补至上限或令其跳过下个弃牌阶段",
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            await player.phaseUse();
                            if (target.isIn() && (target.countCards("h") < target.maxHp || !target.skipList.includes("phaseDiscard"))) {
                                let result,
                                    str = get.translation(target);
                                if (target.countCards("h") >= target.maxHp) result = { index: 1 };
                                else if (target.skipList.includes("phaseDiscard")) result = { index: 0 };
                                else
                                    result = await player
                                        .chooseControl()
                                        .set("choiceList", ["令" + str + "摸" + get.cnNumber(target.maxHp - target.countCards("h")) + "张牌", "令" + str + "跳过下个弃牌阶段"])
                                        .set("ai", () => {
                                            const player = get.player(),
                                                target = get.event().getTrigger().player;
                                            return target.maxHp - target.countCards("h") - target.getHandcardLimit() >= target.needsToDiscard() ? 0 : 1;
                                        })
                                        .forResult();
                                if (result.index === 0) await target.drawTo(target.maxHp);
                                else {
                                    target.skip("phaseDiscard");
                                    game.log(target, "跳过了下个", "#y弃牌阶段");
                                }
                            }
                        },
                    },
                },
            },
            PIxingshi: {
                unique: true,
                trigger: { player: "phaseBegin" },
                filter(event, player) {
                    return (
                        game
                            .filterPlayer(target => {
                                return !target.isPISameClanFor(player);
                            })
                            .every(target => {
                                return target.hasMark("PIliran_mark");
                            }) &&
                        !game.hasPlayer2(current => {
                            return !current.isPISameClanFor(player) && (current.isDamaged() || !current.isAlive());
                        })
                    );
                },
                juexingji: true,
                skillAnimation: true,
                animationColor: "wood",
                logTarget(event, player) {
                    return [player].concat(
                        game.filterPlayer(target => {
                            return !target.isPISameClanFor(player) && target.hasMark("PIliran_mark");
                        })
                    );
                },
                forced: true,
                content() {
                    game.over(event.targets.includes(game.me));
                },
                global: "PIxingshi_ai",
                subSkill: {
                    ai: {
                        //符合条件的都休战！
                        ai: {
                            effect: {
                                player(card, player, target, current) {
                                    if (
                                        _status.PIxingshi_check ||
                                        !(function () {
                                            return game.hasPlayer(target => {
                                                if (!target.hasSkill("PIxingshi") || player.isPISameClanFor(target)) return false;
                                                return (
                                                    game.hasPlayer(current => {
                                                        return !current.isPISameClanFor(target) && (current.hasMark("PIliran_mark") || current.canGanran());
                                                    }) &&
                                                    !game.hasPlayer2(current => {
                                                        return !current.isPISameClanFor(target) && /*(current.isDamaged()&&!(current.isDying()&&current.hp===0&&current.maxHp===1))||*/ !current.isAlive();
                                                    })
                                                );
                                            });
                                        })()
                                    )
                                        return;
                                    const targets = game
                                        .filterPlayer(target => {
                                            return target.hasSkill("PIxingshi") && !player.isPISameClanFor(target);
                                        })
                                        .reduce((list, source) => {
                                            return list.addArray(lib.skill.PIxingshi.logTarget(null, source));
                                        }, []);
                                    if (!targets.includes(target)) return;
                                    if (get.tag(card, "recover")) return 10;
                                    _status.PIxingshi_check = true;
                                    let effect = get.effect(target, card, player, player);
                                    delete _status.PIxingshi_check;
                                    if (effect < 0) return "zeroplayertarget";
                                },
                            },
                        },
                    },
                },
            },
            //吧主焚天火舞
            PIwenjiang: {
                unique: true,
                limit: true,
                trigger: { global: "dieBefore" },
                filter(event, player) {
                    return !player.isPISameClanFor(event.player);
                },
                check(event, player) {
                    return player.hasSkill("PIjishi") || get.attitude(player, event.player) > 0;
                },
                logTarget: "player",
                skillAnimation: true,
                animationColor: "fire",
                async content(event, trigger, player) {
                    trigger.cancel();
                    const target = trigger.player,
                        source = trigger.source;
                    player.awakenSkill(event.name);
                    if (!_status.characterlist) lib.skill.pingjian.initList();
                    const names = _status.characterlist
                        .filter(name => {
                            return Object.keys(lib.characterPack["P_and_A"])
                                .filter(character => {
                                    return character !== "PI_fentianhuowu" && get.character(character).skills?.length;
                                })
                                .includes(name);
                        })
                        .randomGets(game.countPlayer(targetx => player.isPISameClanFor(targetx)));
                    if (names.length) {
                        const dialog = ["请选择令" + get.translation(target) + "替换的武将", [names, "character"]];
                        const resultx = await player
                            .chooseButton(dialog, true)
                            .set("ai", button => {
                                return get.rank(button.link, true);
                            })
                            .forResult();
                        if (resultx.bool) {
                            let result,
                                name = resultx.links[0];
                            if (target.name2 !== undefined) {
                                result = await target.chooseControl(target.name1, target.name2).set("prompt", "请选择要更换的武将牌").forResult();
                            } else result = { control: target.name1 };
                            await target.reinitCharacter(result.control, name);
                            if (target.hasMark("PIliran_mark")) await target.removePIliranMark();
                            const skills = target.getSkills().filter(skill => skill.indexOf("PI") === 0 && get.info(skill)?.charlotte);
                            if (skills.length) target.removeSkill(skills);
                            if (target.countCards("h") < target.maxHp) await target.drawTo(target.maxHp);
                            if (target.hp < target.maxHp) await target.recoverTo(target.maxHp);
                            player.restoreSkill(event.name);
                            if ((source && player.isPISameClanFor(source)) || game.countPlayer(i => i.hasClan("瘟疫公司")) <= Math.sign(player.maxHp / 2)) player.restoreSkill(event.name);
                        }
                    }
                },
            },
            PIyixing: {
                trigger: { global: ["dying", "dieAfter"] },
                filter(event, player) {
                    if (player.isPISameClanFor(event.player)) return false;
                    return event.name === "die" || event.player.countCards("he");
                },
                logTarget: "player",
                prompt2(event, player) {
                    const target = event.player;
                    const targets = game.filterPlayer(targetx => player.isPISameClanFor(targetx));
                    if (event.name === "die") {
                        let str = "令" + get.translation(targets) + (targets.length > 1 ? "各" : "") + "摸两张牌";
                        if (event.source?.isIn() && player.isPISameClanFor(event.source)) {
                            str += "，然后你可以选择一项：1.令" + get.translation(event.source) + "摸一张牌并于此回合结束后执行一个额外回合；2.令" + get.translation(event.source) + "增加1点体力上限";
                            if (player.hasSkill("PIjishi") && player !== event.source) str += "。然后你可以与其各摸一张牌";
                        }
                        return str;
                    }
                    return "弃置" + get.translation(target) + get.cnNumber(targets.length) + "张牌";
                },
                check(event, player) {
                    const target = event.player;
                    if (event.name === "dying") return get.effect(target, { name: "guohe_copy2" }, player, player) > 0;
                    if (player.hasSkill("PIjishi")) return true;
                    const targets = game.filterPlayer(targetx => player.isPISameClanFor(targetx));
                    let eff = targets.reduce((sum, target) => sum + get.effect(target, { name: "draw" }, player, player) * 2, 0);
                    if (event.source?.isIn() && player.isPISameClanFor(event.source)) {
                        eff += Math.max(0, get.recoverEffect(event.source, player, player), get.effect(event.source, { name: "draw" }, player, player));
                        if (player.hasSkill("PIjishi") && player !== event.source) {
                            eff += Math.max(
                                0,
                                [player, event.source].reduce((sum, target) => sum + get.effect(target, { name: "draw" }, player, player), 0)
                            );
                        }
                    }
                    return eff > 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const targets = game.filterPlayer(targetx => player.isPISameClanFor(targetx));
                    if (trigger.name === "dying") await player.discardPlayerCard(target, targets.length, "he", true);
                    else {
                        await game.asyncDraw(targets, 2);
                        await game.delayx();
                        const source = trigger.source;
                        if (source?.isIn() && player.isPISameClanFor(source)) {
                            const str = get.translation(source);
                            const result = await player
                                .chooseControl()
                                .set("choiceList", ["令" + str + "摸一张牌，且于本回合结束时执行一个额外回合", "令" + str + "增加1点体力上限"])
                                .set("ai", () => 0)
                                .forResult();
                            if (result.index === 0) {
                                await source.draw();
                                source.insertPhase();
                            } else await source.gainMaxHp();
                            if (player.hasSkill("PIjishi") && player !== source) {
                                const list = [player, source];
                                const resultx = await player.chooseBool("是否和" + str + "各摸一张牌？").forResult();
                                if (resultx.bool) {
                                    player.logSkill("PIjishi", source);
                                    await game.asyncDraw(list);
                                    await game.delayx();
                                }
                            }
                        }
                    }
                },
            },
            PIjishi: {
                zhuSkill: true,
                trigger: { global: "logSkill" },
                filter(event, player) {
                    if (player.countMark("PIjishi_used") >= game.countPlayer(targetx => player.isPISameClanFor(targetx))) return false;
                    if (event.player === player || !player.isPISameClanFor(event.player)) return false;
                    return event.sourceSkill || event.skill === "PIliran";
                },
                logTarget: "player",
                prompt2(event, player) {
                    return "与" + get.translation(event.player) + "各摸一张牌";
                },
                async content(event, trigger, player) {
                    player.addTempSkill("PIjishi_used", "roundStart");
                    player.addMark("PIjishi_used", 1, false);
                    await game.asyncDraw([player, trigger.player]);
                    await game.delayx();
                },
                init() {
                    if (_status._PIjishi_win) return;
                    _status._PIjishi_win = true;
                    const PI_OriginWin = game.over;
                    game.over = function (result, bool) {
                        if (result === true) {
                            const source = game.me._trueMe || game.me;
                            if (
                                game.hasPlayer(target => {
                                    return target.hasSkill("PIjishi") && target.isPISameClanFor(source);
                                }) &&
                                game.hasPlayer(target => !target.isPISameClanFor(source))
                            ) {
                                game.over(false);
                                return;
                            }
                        } else if (result === false) {
                            const source = game.me._trueMe || game.me;
                            if (
                                game.hasPlayer(target => {
                                    return target.hasSkill("PIjishi") && target.isPISameClanFor(source);
                                }) &&
                                !game.hasPlayer(target => !target.isPISameClanFor(source))
                            ) {
                                game.over(true);
                                return;
                            }
                        }
                        PI_OriginWin.apply(this, arguments);
                    };
                },
                group: "PIjishi_win",
                global: "PIjishi_ai",
                subSkill: {
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                    win: {
                        trigger: { global: ["dieAfter", "useSkillAfter", "logSkill"] },
                        filter(event, player) {
                            return game.players.every(target => player.isPISameClanFor(target));
                        },
                        forced: true,
                        skillAnimation: true,
                        animationColor: "fire",
                        content() {
                            game.over(true);
                        },
                    },
                    ai: {
                        //符合条件的都休战！
                        ai: {
                            effect: {
                                player(card, player, target, current) {
                                    if (
                                        _status.PIjishi_check ||
                                        !game.hasPlayer(targetx => {
                                            return targetx.hasSkill("PIjishi") && player.isPISameClanFor(targetx);
                                        })
                                    )
                                        return;
                                    const targets = game
                                        .filterPlayer(targetx => {
                                            return targetx.hasSkill("PIjishi") && player.isPISameClanFor(targetx);
                                        })
                                        .reduce((list, source) => {
                                            return list.addArray(game.filterPlayer(targetx => targetx.isPISameClanFor(source)));
                                        }, []);
                                    if (!targets.includes(target)) return;
                                    _status.PIjishi_check = true;
                                    let effect = get.effect(target, card, player, player);
                                    delete _status.PIjishi_check;
                                    if (effect < 0) return "zeroplayertarget";
                                },
                            },
                        },
                    },
                },
            },
            //尼帕病毒
            PIkangre: {
                trigger: { player: "damageEnd" },
                filter(event, player) {
                    if (!game.hasPlayer(t => lib.skill.PIkangre.filterTargetx(null, player, t))) return false;
                    return event.hasNature("fire") || (event.card && get.color(event.card) === "red");
                },
                filterTargetx(card, player, target) {
                    if (target === player) return false;
                    return target.canGanran() || target.hasMark("PIliran_mark");
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), lib.skill.PIkangre.filterTargetx)
                        .set("ai", target => {
                            const player = get.player();
                            return target.hasMark("PIliran_mark") ? get.effect(player, { name: "draw" }, player, player) : -get.attitude(player, target) * 10;
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    if (target.canGanran()) await target.addPIliranMark();
                    else await player.draw();
                },
            },
            PInaoyan: {
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(t => lib.skill.PInaoyan.filterTarget(null, player, t));
                },
                filterTarget(card, player, target) {
                    return target.hasMark("PIliran_mark") && target.countCards("h");
                },
                usable: 1,
                async content(event, trigger, player) {
                    const target = event.target;
                    let result;
                    if (target.getHp() > 0 && target.getDiscardableCards(player, "h").some(card => get.color(card) === "red")) {
                        result = await player
                            .discardPlayerCard(target, "h", "visible", [1, target.getHp()], true)
                            .set("filterButton", button => {
                                if (get.color(button.link) !== "red") return false;
                                return lib.filter.canBeDiscarded(button.link, get.player(), get.event().getParent().target);
                            })
                            .forResult();
                    } else await player.viewHandcards(target);
                    if (target.countCards("h", { color: "black" }) > target.countCards("h", { color: "red" })) {
                        player.line(target);
                        await target.loseHp();
                    }
                    if (result?.bool && result.cards?.length) {
                        let types = result.cards.map(i => get.type2(i, target)).unique();
                        types.sort((a, b) => {
                            return result.cards.filter(i => get.type2(i, target) === b).length - result.cards.filter(i => get.type2(i, target) === a).length;
                        });
                        if (
                            types.length === 1 ||
                            result.cards.filter(i => {
                                return get.type2(i, target) === types[0];
                            }).length >
                            result.cards.filter(i => {
                                return get.type2(i, target) === types[1];
                            }).length
                        ) {
                            types = [types[0]];
                            player.line(target);
                            target.addTempSkill("PInaoyan_effect");
                            target.markAuto("PInaoyan_effect", types);
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return -target.countCards("h") - Math.min(target.countCards("h"), target.getHp());
                        },
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: "不能使用或打出$牌" },
                        mod: {
                            cardEnabled2(card, player) {
                                if (player.getStorage("PInaoyan_effect").includes(get.type2(card))) return false;
                            },
                        },
                        markimage: "extension/瘟疫公司/image/card/PInaoyan_mark.png",
                    },
                },
            },
            //念珠菌
            PIzhijun: {
                enable: "phaseUse",
                filter(event, player) {
                    const count = player.getStat("skill").PIzhijun;
                    return (count || 0) < player.getHp() && game.hasPlayer(t => lib.skill.PIzhijun.filterTarget(null, player, t));
                },
                filterTarget(card, player, target) {
                    return target.getExpansions("PIzhijun").length;
                },
                filterCard(card, player) {
                    if (!ui.selected.targets.length) return false;
                    return get.name(card) === "sha" && player.canUse(card, ui.selected.targets[0], false);
                },
                position: "hs",
                selectCard: [0, 1],
                complexCard: true,
                filterOk() { },
                check(card) {
                    const player = get.player(),
                        target = ui.selected.targets[0];
                    return get.effect(target, card, player, player);
                },
                filterOk() {
                    if (!ui.selected.targets?.length) return false;
                    const player = get.player(),
                        target = ui.selected.targets[0],
                        cardx = target.getExpansions("PIzhijun")[0];
                    return player.canUse(cardx, target, false) ^ ui.selected.cards?.length;
                },
                prompt: "请选择一名有“菌丝”的角色（若你无法对其使用其“菌丝”，则请再选择一张可以对其使用的【杀】）",
                async content(event, trigger, player) {
                    const target = event.target,
                        cardx = !event.cards?.length ? target.getExpansions("PIzhijun")[0] : event.cards[0];
                    await player.useCard(target, cardx, false);
                },
                ai: {
                    order: 9,
                    result: {
                        player(player, target) {
                            const card = target.getExpansions("PIzhijun")[0];
                            return player.canUse(card, target, false)
                                ? get.effect(target, card, player, player)
                                : (() => {
                                    let effs = player
                                        .getCards("hs", cardx => {
                                            return get.name(cardx) === "sha" && player.canUse(cardx, target, false);
                                        })
                                        .map(cardx => get.effect(target, cardx, player, player))
                                        .concat([0]);
                                    return effs.sort((a, b) => b - a)[0];
                                })();
                        },
                    },
                },
                markimage: "extension/瘟疫公司/image/card/PIzhijun_mark.png",
                intro: {
                    name: "菌丝",
                    content: "expansion",
                    markcount: "expansion",
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: "PIzhijun_put",
                subSkill: {
                    put: {
                        trigger: { player: "useCardAfter" },
                        filter(event, player) {
                            if (
                                get.type(event.card) === "delay" ||
                                !event.cards?.someInD() ||
                                player.hasHistory("sourceDamage", evt => {
                                    return evt.card === event.card;
                                })
                            )
                                return false;
                            if (!player.isPhaseUsing() || player.countMark("PIzhijun_used") >= player.getHp()) return false;
                            return event.targets?.some(i => i.hasMark("PIliran_mark") && !i.getExpansions("PIzhijun").length);
                        },
                        async cost(event, trigger, player) {
                            const cards = trigger.cards.filterInD();
                            event.result = await player
                                .chooseTarget(
                                    get.prompt("PIzhijun"),
                                    (card, player, target) => {
                                        const targets = get.event().getTrigger().targets;
                                        return targets.includes(target) && target.hasMark("PIliran_mark") && !target.getExpansions("PIzhijun").length;
                                    },
                                    "将" + get.translation(cards) + (cards.length > 1 ? "中的一张牌" : "") + "置于一名没有“菌丝”的已感染目标角色的武将牌上"
                                )
                                .set("ai", target => {
                                    const player = get.player(),
                                        cards = get.event().getTrigger().cards.filterInD();
                                    const getEff = (card, target) => {
                                        return player.canUse(card, target, false)
                                            ? get.effect(target, card, player, player)
                                            : (() => {
                                                let effs = player
                                                    .getCards("hs", cardx => {
                                                        return get.name(cardx) === "sha" && player.canUse(cardx, target, false);
                                                    })
                                                    .map(cardx => get.effect(target, cardx, player, player))
                                                    .concat([0]);
                                                return effs.sort((a, b) => b - a)[0];
                                            })();
                                    };
                                    return cards.slice().sort((a, b) => getEff(b, target) - getEff(a, target))[0];
                                })
                                .forResult();
                        },
                        async content(event, trigger, player) {
                            player.addTempSkill("PIzhijun_used", "phaseUseAfter");
                            player.addMark("PIzhijun_used", 1, false);
                            const target = event.targets[0],
                                cards = trigger.cards.filterInD();
                            const result =
                                cards.length > 1
                                    ? await player
                                        .chooseButton(["将" + get.translation(cards) + (cards.length > 1 ? "中的一张牌" : "") + "置于" + get.translation(target) + "的武将牌上", cards], true)
                                        .set("ai", button => {
                                            const player = get.player(),
                                                target = get.event().getParent().targets[0],
                                                card = button.link;
                                            return player.canUse(card, target, false) ? get.effect(target, card, player, player) : -get.value(card);
                                        })
                                        .forResult()
                                    : { bool: true, links: cards };
                            if (result?.bool && result.links?.length) {
                                player.$give(result.links, target, false);
                                const next = target.addToExpansion(result.links);
                                next.gaintag.add("PIzhijun");
                                await next;
                            }
                        },
                    },
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                },
            },
            PIkuimo: {
                trigger: {
                    global: ["addPIliranMarkAfter", "loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                },
                filter(event, player, name, target) {
                    return target && (target.isHealthy() || target.countCards("he"));
                },
                getIndex(event, player) {
                    return game
                        .filterPlayer(target => {
                            if (event.name === "addPIliranMark") return target === event.player;
                            if (event.name == "lose" && event.getlx !== false) {
                                if (target !== event.player) return false;
                                return Object.keys(event.gaintag_map).some(i => event.gaintag_map[i].includes("PIzhijun"));
                            }
                            return game.getGlobalHistory("cardMove", evt => {
                                if (evt.name != "lose" || event != evt.getParent() || evt.player !== target) return false;
                                return Object.keys(evt.gaintag_map).some(i => evt.gaintag_map[i].includes("PIzhijun"));
                            }).length;
                        })
                        .sortBySeat();
                },
                logTarget: (event, player, name, target) => target,
                prompt2(event, player, name, target) {
                    const str = get.translation(target);
                    return target.isHealthy() ? "对" + str + "造成1点伤害" : "弃置" + str + "一张牌";
                },
                check(event, player, name, target) {
                    return (target.isHealthy() ? get.damageEffect(target, player, player) : get.effect(target, { name: "guohe_copy2" }, player, player)) > 0;
                },
                content() {
                    const target = event.targets[0];
                    if (target.isHealthy()) target.damage();
                    else player.discardPlayerCard(target, "he", true);
                },
            },
            //克雅氏病
            PIkunhuo: {
                trigger: { target: "useCardToTargeted" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark") && !player.getStorage("kunhuo_used").includes(event.player);
                },
                logTarget: "player",
                check(event, player) {
                    return get.effect(player, event.card, event.player, player) < 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    if (!player.storage.kunhuo_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.stroage.kunhuo_used);
                    }
                    player.markAuto("kunhuo_used", [target]);
                    const { card, suit, color } = await player.judge().forResult();
                    if (suit === get.suit(trigger.card)) {
                        trigger.getParent().excluded.add(player);
                        game.log(trigger.card, "对", player, "无效");
                    }
                    if (color === get.color(trigger.card)) {
                        const resultx = await player.discardPlayerCard(target, "he", "是否弃置" + get.translation(target) + "一张牌并摸一张牌？").forResult();
                        if (resultx?.bool && resultx.cards?.length) await player.draw();
                    } else {
                        const type = get.type2(card);
                        const resultx = await target
                            .chooseToDiscard(
                                "he",
                                (card, player) => {
                                    return get.type2(card) === get.event().type;
                                },
                                "弃置一张" + get.translation(type) + "牌，或本回合不能使用或打出" + get.translation(type) + "牌"
                            )
                            .set("ai", card => {
                                const player = get.player(),
                                    type = get.event().type;
                                return player.countCards("hs", card => get.type2(card) === type && player.hasValueTarget(card, true, true)) > 1 ? 1 / (get.value(card) || 0.5) : 0;
                            })
                            .set("type", type)
                            .forResult();
                        if (!resultx?.bool) {
                            target.addTempSkill("PIkunhuo_ban");
                            target.markAuto("PIkunhuo_ban", [type]);
                        }
                    }
                },
                subSkill: {
                    ban: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            cardEnabled2(card, player) {
                                if (player.getStorage("PIkunhuo_ban").includes(get.type2(card))) return false;
                            },
                        },
                        markimage: "extension/瘟疫公司/image/card/PIkunhuo_mark.png",
                        intro: { content: "不能使用或打出$牌" },
                    },
                },
            },
            PImianluan: {
                trigger: { global: ["recoverEnd", "useCardToPlayered"] },
                filter(event, player) {
                    if (!event.player.countCards("h")) return false;
                    if (event.name !== "recover" && event.target !== event.player) return false;
                    return event.player.hasMark("PIliran_mark") && !player.getStorage("PImianluan_used").includes(event.player);
                },
                logTarget: "player",
                check(event, player) {
                    return get.effect(player, event.card, event.player, player) < 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    if (!player.storage.PImianluan_used) {
                        player.when({ global: "roundStart" }).then(() => delete player.stroage.PImianluan_used);
                    }
                    player.markAuto("PImianluan_used", [target]);
                    const result = await player
                        .choosePlayerCard(target, "h", "visible")
                        .set("filterButton", button => {
                            const card = button.link,
                                player = get.player(),
                                target = get.event().getTrigger().player;
                            return get.tag(card, "damage") > 0.5 && player.canUse(card, target, false);
                        })
                        .set(
                            "prompt",
                            (() => {
                                const str = get.translation(target),
                                    hp = target.getHp();
                                return "免乱：是否对" + str + '使用其中一张伤害牌？<br><div class="text left">' + ["若选择使用，则" + str + "响应前需弃置" + get.cnNumber(hp) + "张牌，否则其不可响应此牌", "若不选择使用，则你可以弃置两张牌并失去1点体力，令" + str + "非锁定技失效直到其下个回合开始"].map(str => "<li>" + str).join("<br>") + "</div>";
                            })()
                        )
                        .set("ai", button => {
                            const card = button.link,
                                player = get.player(),
                                target = get.event().getTrigger().player;
                            return get.effect(target, card, player, player);
                        })
                        .forResult();
                    if (result?.bool && result.cards?.length) {
                        const useEvent = player.useCard(result.cards[0], target, false);
                        target
                            .when(["chooseToUseBegin", "chooseToRespondBegin"])
                            .filter(evt => {
                                if (evt.responded || !target.getHp()) return false;
                                return Array.isArray(evt.respondTo) && evt.respondTo[1] === useEvent.card;
                            })
                            .then(() => {
                                const [num, card] = [player.getHp(), trigger.respondTo[1]];
                                player.chooseToDiscard("弃置" + get.cnNumber(num) + "张牌，否则不能响应" + get.translation(card), "he", num).forResult();
                            })
                            .then(() => {
                                if (!result?.bool) {
                                    trigger.untrigger();
                                    trigger.set("responded", true);
                                    trigger.result = { bool: false };
                                }
                            });
                        await useEvent;
                    } else {
                        const result = await player
                            .chooseToDiscard(2, "he", "是否弃置两张牌并失去1点体力，令" + get.translation(target) + "非锁定技失效直到其下个回合开始")
                            .set("ai", card => {
                                const player = get.player(),
                                    target = get.event().getTrigger().player;
                                return player.getHp() > 2 ? 7 - get.value(card) : 0;
                            })
                            .forResult();
                        if (result.bool) {
                            await player.loseHp();
                            target.addTempSkill("PImianluan_ban", { player: "phaseBegin" });
                        }
                    }
                },
                subSkill: {
                    ban: {
                        inherit: "fengyin",
                        markimage: "extension/瘟疫公司/image/card/PImianluan_mark.png",
                    },
                },
            },
            //阔口罐病毒
            PIkanghan: {
                inherit: "PIkangre",
                filter(event, player) {
                    if (!game.hasPlayer(t => lib.skill.PIkangre.filterTargetx(null, player, t))) return false;
                    return event.hasNature("ice") || (event.card && get.color(event.card) === "black");
                },
            },
            PIshizhi: {
                trigger: { global: ["damageBegin1", "damageBegin2"] },
                filter(event, player, name) {
                    const num = parseInt(name.slice("damageBegin".length));
                    const target = event[num == 1 ? "source" : "player"];
                    if (!target?.isIn() || !target.hasMark("PIliran_mark")) return false;
                    return (num == 1 ? target : player).countCards("he") > 1;
                },
                popup: false,
                async cost(event, trigger, player) {
                    const num = parseInt(event.triggername.slice("damageBegin".length)),
                        discarder = num == 1 ? target : player;
                    const target = trigger[num == 1 ? "source" : "player"],
                        list = ["PIshizhi", target];
                    let keys = [2, "he"];
                    if (discarder !== player) keys.push(discarder);
                    event.result = await player[discarder !== player ? "discardPlayerCard" : "chooseToDiscard"](...keys)
                        .set(
                            "prompt2",
                            (() => {
                                return "弃置" + get.translation(discarder) + "的两张牌，令即将对" + get.translation(trigger.player) + "造成的伤害+1";
                            })()
                        )
                        .set("prompt", get.prompt(...list))
                        .set("logSkill", list)
                        .forResult();
                },
                async content(event, trigger, player) {
                    trigger.num++;
                    const target = trigger[parseInt(event.triggername.slice("damageBegin".length)) == 1 ? "source" : "player"];
                    if (!target.hasMark("PIshizhi")) target.addMark("PIshizhi", 1);
                },
                markimage: "extension/瘟疫公司/image/card/PIshizhi_mark.png",
                intro: { content: "mark" },
                global: "PIshizhi_zhixi",
                group: ["PIshizhi_effect", "PIshizhi_draw"],
                subSkill: {
                    zhixi: {
                        mod: (() => {
                            let mod = {
                                cardEnabled(card, player) {
                                    if (!game.hasPlayer(source => source.hasSkill("PIshizhi"))) return;
                                    if (!player.hasMark("PIshizhi") || get.type2(card) !== "trick") return;
                                    if (
                                        player.getHistory("useCard", evt => {
                                            return get.type2(evt.card) === "trick";
                                        }).length >= Math.min(3, player.getHp())
                                    )
                                        return false;
                                },
                            };
                            mod.cardSavable = mod.cardEnabled;
                            return mod;
                        })(),
                    },
                    effect: {
                        trigger: { global: "useCard" },
                        filter(event, player) {
                            if (get.type2(event.card) !== "trick" || !event.player.hasMark("PIshizhi")) return false;
                            return player.hasCard(card => _status.connectMode || lib.filter.cardDiscardable(card, player), "he");
                        },
                        async cost(event, trigger, player) {
                            const list = ["PIshizhi", trigger.player];
                            event.result = await player
                                .chooseToDiscard(get.prompt(...list), "he")
                                .set("ai", card => {
                                    const player = get.player(),
                                        trigger = get.event().getTrigger();
                                    return lib.skill.sbkanpo.subSkill.kanpo.check(trigger, player) ? 7 - get.value(card) : 0;
                                })
                                .set("logSkill", list)
                                .set("prompt2", "弃置一张牌，然后其弃置一张牌，令" + get.translation(trigger.card) + "无效")
                                .forResult();
                        },
                        popup: false,
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            await target.chooseToDiscard("he", true);
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                            game.log(trigger.card, "被无效了");
                            const card = get.autoViewAs({ name: "sha" }, trigger.cards || []);
                            if (target.hasUseTarget(card)) {
                                await target.chooseUseTarget(card, true, false).set("cards", trigger.cards || []);
                            }
                        },
                    },
                    draw: {
                        trigger: { global: ["loseAfter", "loseAsyncAfter"] },
                        filter(event, player) {
                            if (event.type != "discard" || event.getlx === false) return false;
                            return game.hasPlayer(target => {
                                if (!target.hasMark("PIshizhi")) return false;
                                return event.getl?.(target)?.cards2?.some(card => get.type2(card, target) === "trick");
                            });
                        },
                        forced: true,
                        popup: false,
                        logTarget(event, player) {
                            return game
                                .filterPlayer(target => {
                                    if (!target.hasMark("PIshizhi")) return false;
                                    return event.getl?.(target)?.cards2?.some(card => get.type2(card, target) === "trick");
                                })
                                .sortBySeat();
                        },
                        content() {
                            player.draw(
                                event.targets.reduce((sum, target) => {
                                    return sum + trigger.getl(target).cards2.filter(card => get.type2(card, target) === "trick").length;
                                }, 0)
                            );
                        },
                    },
                },
            },
            //猩红热
            PIrongxue: {
                trigger: { global: "recoverBegin" },
                filter(event, player) {
                    const target = event.player;
                    if (
                        !target.hasMark("PIliran_mark") ||
                        !player.hasCard(card => {
                            if (get.position(card) === "h" && _status.connectMode) return true;
                            return lib.filter.cardDiscardable(card, player);
                        }, "he")
                    )
                        return false;
                    return lib.suit.some(suit => {
                        return Array.from({ length: 13 })
                            .map((_, i) => i + 1)
                            .some(number => {
                                return player.canUse(new lib.element.VCard({ name: "sha", nature: "ill", suit, number }), target, false);
                            });
                    });
                },
                async cost(event, trigger, player) {
                    const list = ["PIrongxue", trigger.player];
                    event.result = await player
                        .chooseToDiscard(get.prompt2(...list), "he")
                        .set("ai", card => {
                            const player = get.player(),
                                target = get.event().getTrigger().player;
                            return lib.suit.some(suit => {
                                return Array.from({ length: 13 })
                                    .map((_, i) => i + 1)
                                    .some(number => {
                                        const card = new lib.element.VCard({ name: "sha", nature: "ill", suit, number });
                                        return player.canUse(card, target, false) && get.effect(target, card, player, player) > 0;
                                    });
                            })
                                ? 7 - get.value(card)
                                : 0;
                        })
                        .set("logSkill", list)
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        str = get.translation(target);
                    const result = await player
                        .chooseButton(
                            [
                                "请选择你对" + get.translation(target) + "使用的病【杀】的花色和点数",
                                [
                                    lib.suit
                                        .slice()
                                        .reverse()
                                        .map(i => [i, get.translation(i)]),
                                    "tdnodes",
                                ],
                                [Array.from({ length: 13 }).map((_, i) => [i + 1, get.strNumber(i + 1)]), "tdnodes"],
                            ],
                            2,
                            true
                        )
                        .set("filterButton", button => {
                            const player = get.player(),
                                target = get.event().getTrigger().player;
                            const type = typeof button.link;
                            if (!ui.selected.buttons.length) {
                                if (type === "string") {
                                    return Array.from({ length: 13 })
                                        .map((_, i) => i + 1)
                                        .some(number => {
                                            return player.canUse(new lib.element.VCard({ name: "sha", nature: "ill", suit: button.link, number }), target, false);
                                        });
                                }
                                return lib.suit.some(suit => {
                                    return player.canUse(new lib.element.VCard({ name: "sha", nature: "ill", suit, number: button.link }), target, false);
                                });
                            }
                            if (type === typeof ui.selected.buttons[0].link) return false;
                            const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                            card[type === "number" ? "suit" : "number"] = ui.selected.buttons[0].link;
                            card[type === "number" ? "number" : "suit"] = button.link;
                            return player.canUse(card, target, false);
                        })
                        .set("ai", button => {
                            const map = get.event().map;
                            if (!ui.selected.buttons.length) return map[button.link] ? 1 + Math.random() : 0;
                            return map[ui.selected.buttons[0].link].includes(button.link) ? 1 + Math.random() : 0;
                        })
                        .set(
                            "map",
                            lib.suit.reduce((map, suit) => {
                                for (const number of Array.from({ length: 13 }).map((_, i) => i + 1)) {
                                    const card = new lib.element.VCard({ name: "sha", nature: "ill", suit, number });
                                    if (player.canUse(card, target, false) && get.effect(target, card, player, player) > 0) {
                                        if (!map[suit]) map[suit] = [];
                                        map[suit].add(number);
                                    }
                                }
                                return map;
                            }, {})
                        )
                        .forResult();
                    if (result?.bool && result.links?.length === 2) {
                        if (typeof result.links[0] === "number") result.links.reverse();
                        const [suit, number] = result.links;
                        const card = new lib.element.VCard({ name: "sha", nature: "ill", suit, number });
                        if (player.canUse(card, target, false)) {
                            await player.useCard(card, target, false);
                            if (
                                player.hasHistory("sourceDamage", evt => {
                                    return evt.player === target && evt.getParent(event.name) === event;
                                }) &&
                                target.isIn()
                            ) {
                                let choices = ["取消回复"],
                                    choiceList = ["取消" + str + "本次的体力回复"];
                                if (target.countCards("h")) {
                                    choices.push("得牌回血");
                                    choiceList.push("获得" + str + "一张手牌并回复1点体力，若你获得了其红色牌，则你摸一张牌");
                                    if (_status.currentPhase === player || target.getHp() > player.getHp()) {
                                        choices.push("背水！");
                                        choiceList.push("执行以上两项");
                                    }
                                }
                                choices.push("cancel2");
                                const resultx = await player
                                    .chooseControl(choices)
                                    .set("choiceList", choiceList)
                                    .set("ai", () => {
                                        const player = get.player(),
                                            target = get.event().getTrigger().player;
                                        if (get.attitude(player, target) > 0) return "cancel2";
                                        const eff1 = -get.recoverEffect(target, get.event().getTrigger().source || target, player);
                                        const eff2 = get.effect(target, { name: "shunshou_copy", position: "h" }, player, player) + get.recoverEffect(player, player, player);
                                        if (eff1 >= 0 && eff2 >= 0 && get.event().controls.includes("背水！")) return "背水";
                                        return eff1 >= eff2 ? 0 : 1;
                                    })
                                    .set("prompt", "是否选择一项执行？")
                                    .forResult();
                                if (resultx.control !== "cancel2") {
                                    player.popup(resultx.control);
                                    game.log(player, "选择了", "#y" + resultx.control);
                                    player.line(target);
                                    if (result.index !== 1) {
                                        game.log(target, "的回复被取消了");
                                        trigger.cancel();
                                    }
                                    if (result.index !== 0) {
                                        const result = await player.gainPlayerCard(target, "h", true).forResult();
                                        const draw = result?.bool && result.cards?.some(card => get.color(card, target) === "red");
                                        await player.recover();
                                        if (draw) await player.draw();
                                    }
                                }
                            }
                        }
                    }
                },
            },
            PIdandu: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    if (!event.player.hasMark("PIliran_mark")) return false;
                    return event.source === player && event.card && typeof get.number(event.card) === "number";
                },
                round: 1,
                logTarget: "player",
                async content(event, trigger, player) {
                    player.addSkill("PIdandu_source");
                    const target = trigger.player,
                        number = get.number(trigger.card);
                    target.addSkill(["PIdandu_effectcount", "PIdandu_effect"]);
                    target.addMark("PIdandu_effectcount", 1, false);
                    if (!target.storage["PIdandu_effect"][player.playerid]) {
                        target.storage["PIdandu_effect"][player.playerid] = [player];
                    }
                    target.storage["PIdandu_effect"][player.playerid].add(number - target.getHp());
                    target.storage["PIdandu_effect"][player.playerid].add(number + target.getHp());
                    target.markSkill("PIdandu_effect");
                    if (player.hasMark("PIdandu") && get.color(trigger.card) === "red") await player.draw();
                },
                derivation: ["PIdandu_2", "PIdandu_3"],
                subSkill: {
                    effectcount: {
                        charlotte: true,
                        onremvoe: true,
                        trigger: { player: "phaseAfter" },
                        forced: true,
                        popup: false,
                        content() {
                            player.removeMark(event.name, 1, false);
                            if (!player.hasMark(event.name)) {
                                player.removeSkill([event.name, "PIdandu_effect"]);
                            }
                        },
                    },
                    effect: {
                        charlotte: true,
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = {};
                        },
                        intro: {
                            markcount(storage = {}) {
                                return Object.keys(storage).reduce((sum, id) => sum + (storage[id].length - 1), 0);
                            },
                            content(storage) {
                                const numbers = Object.keys(storage)
                                    .reduce((list, id) => {
                                        return list.addArray(storage[id].slice(1));
                                    }, [])
                                    .unique()
                                    .sort((a, b) => a - b);
                                const targets = Object.values(storage)
                                    .map(list => list[0])
                                    .filter(target => target.countMark("PIdandu") > 1);
                                let list = ["使用点数范围为" + numbers[0] + "至" + numbers[numbers.length - 1] + "之间的牌后，弃置一张牌"];
                                if (targets.length) {
                                    for (const target of targets) {
                                        const number = storage[id]
                                            .slice(1)
                                            .unique()
                                            .sort((a, b) => a - b);
                                        list.push("使用点数范围为" + number[0] + "至" + number[number.length - 1] + "的牌指定" + get.translation(target) + "为目标后，其可以弃置一张与此牌类别相同的牌并令此牌对其无效");
                                    }
                                }
                                return list.map(str => "<li>" + str).join("<br>");
                            },
                        },
                        onremove: true,
                        markimage: "extension/瘟疫公司/image/card/PIdandu_mark.png",
                    },
                    source: {
                        charlotte: true,
                        trigger: { global: ["useCardToPlayered", "phaseEnd", "useCardAfter"] },
                        filter(event, player, name) {
                            const target = event.player,
                                storage = target.storage["PIdandu_effect"];
                            if (!storage?.[player.playerid]) return false;
                            const number = storage[player.playerid]
                                .slice(1)
                                .unique()
                                .sort((a, b) => a - b);
                            if (event.name === "phase") {
                                return (
                                    target.getHistory("useCard", evt => {
                                        const num = get.number(evt.card);
                                        return typeof num === "number" && number[number.length - 1] >= num && number[0] <= num;
                                    }).length > target.maxHp
                                );
                            }
                            if (
                                !(() => {
                                    if (name === "useCardAfter") return target.countCards("he");
                                    return (
                                        event.target === player &&
                                        player.countMark("PIdandu") >= 2 &&
                                        player.hasCard(card => {
                                            if (get.position(card) === "h" && _status.connectMode) return true;
                                            return get.type2(card) === get.type2(event.card) && lib.filter.cardDiscardable(card, player);
                                        }, "he")
                                    );
                                })()
                            )
                                return false;
                            const num = get.number(event.card);
                            return typeof num === "number" && number[number.length - 1] >= num && number[0] <= num;
                        },
                        async cost(event, trigger, player) {
                            let target = trigger.player,
                                list = [event.name.slice(0, -"_cost".length), target];
                            if (trigger.name === "phase") {
                                event.result = await player
                                    .chooseBool(get.prompt(...list))
                                    .set(
                                        "prompt2",
                                        (() => {
                                            return "将【丹毒】升级至" + (player.countMark("PIdandu") + 2) + "级，令" + get.translation(target) + "的【丹毒】效果延长一回合";
                                        })()
                                    )
                                    .set("choice", get.attitude(player, target) <= 0)
                                    .forResult();
                            } else if (event.triggername === "useCardAfter") {
                                event.result = { bool: true };
                            } else {
                                event.result = await player
                                    .chooseToDiscard(
                                        get.prompt(...list),
                                        "he",
                                        (card, player) => {
                                            return get.type2(card) === get.type2(get.event().getTrigger().card);
                                        },
                                        "弃置一张" + get.translation(get.type2(trigger.card)) + "牌，令" + get.translation(trigger.card) + "对你无效"
                                    )
                                    .set("ai", card => {
                                        const trigger = get.event().getTrigger(),
                                            effect = get.effect(player, trigger.card, trigger.player, player);
                                        return effect >= 0 ? 0 : 7 - get.value(card);
                                    })
                                    .forResult();
                            }
                        },
                        popup: false,
                        async content(event, trigger, player) {
                            if (trigger.name === "phase" || event.triggername === "useCard") {
                                const target = trigger.player;
                                player.logSkill(event.name, target);
                                if (trigger.name === "phase") {
                                    player.addMark("PIdandu", 1, false);
                                    player.popup("丹毒");
                                    game.log(player, "升级了技能", "#g【丹毒】");
                                    target.addMark("PIdandu_effectcount", 1, false);
                                    game.log(target, "的", "#g【丹毒】", "效果", "#y延长一回合");
                                } else {
                                    const result = await target.chooseToDiscard("he", true).forResult();
                                    if (result?.bool && result.cards?.some(card => get.color(card, target) === "black")) {
                                        if (player.hasMark("PIdandu")) await player.draw();
                                    }
                                }
                            } else {
                                trigger.getParent().excluded.add(player);
                                game.log(trigger.card, "对", player, "无效");
                            }
                        },
                    },
                },
            },
            //炭疽
            PIjiaju: {
                trigger: { global: "useCardAfter" },
                filter(event, player) {
                    const target = event.player;
                    if (target.isPISameClanFor(player)) return false;
                    const [goon, bool] = [target.isDamaged() && target.canGanran(), !target.hasMark("PIliran_mark") && target.countCards("he")];
                    if (!goon && !bool) return false;
                    return target.isIn() && player.inRange(target) && get.type(event.card) === "equip";
                },
                logTarget: "player",
                prompt2(event, player) {
                    const target = event.player,
                        str = get.translation(target);
                    let list = [];
                    if (target.isDamaged() && target.canGanran()) list.push(" 令" + str + "感染并摸一张牌，若获得了黑色牌，则你可以视为对" + str + "使用一张【杀】");
                    if (!target.hasMark("PIliran_mark") && target.countCards("he")) list.push("弃置" + str + "一张牌，若弃置了黑色牌，则你可以对" + str + "造成1点伤害");
                    return list.join("，且");
                },
                check(event, player) {
                    const target = event.player,
                        att = get.attitude(player, target);
                    if (att > 0) return false;
                    return target.isDamaged() || get.effect(target, { name: "guohe_copy2" }, player, player) > 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        str = get.translation(target);
                    const [goon, bool] = [target.isDamaged() && target.canGanran(), !target.hasMark("PIliran_mark") && target.countCards("he")];
                    if (goon) {
                        if (target.canGanran()) await target.addPIliranMark();
                        const result = await player.draw().forResult();
                        if (Array.isArray(result) && result.some(card => get.color(card) === "black")) {
                            const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                            if (player.canUse(card, target, false)) {
                                const resultt = await player
                                    .chooseBool("是否视为对" + str + "使用一张病【杀】？")
                                    .set("choice", get.effect(target, card, player, player) > 0)
                                    .forResult();
                                if (resultt?.bool) await player.useCard(card, target, false);
                            }
                        }
                    }
                    if (target.isIn() && bool) {
                        const resultx = await player.discardPlayerCard(target, "he", true).forResult();
                        if (target.isIn() && resultx?.bool && resultx.cards?.some(card => get.color(card, target) === "black")) {
                            const resulty = await player
                                .chooseBool("是否对" + str + "造成1点伤害？")
                                .set("choice", get.damageEffect(target, player, player) > 0)
                                .forResult();
                            if (resulty?.bool) {
                                player.line(target);
                                await target.damage();
                            }
                        }
                    }
                },
            },
            PIbaixue: {
                trigger: { global: "phaseEnd" },
                filter(event, player) {
                    const target = event.player;
                    return target.hasMark("PIliran_mark") && target.hasMark("PIbaixue_count");
                },
                logTarget: "player",
                prompt2(event, player) {
                    const target = event.player,
                        num = target.countMark("PIbaixue_count"),
                        count = game.getGlobalHistory("changeHp", evt => evt.getParent().name === "recover" && evt.player === target);
                    return "令其弃置" + get.cnNumber(count) + "张红色牌或失去1点体力。然后若其手牌中均为黑色牌，则你可以对其造成1点伤害。然后若其体力值小于等于" + num + "，则其失去" + num + "点体力";
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        num = target.countMark("PIbaixue_count"),
                        count = game.getGlobalHistory("changeHp", evt => evt.getParent().name === "recover" && evt.player === target);
                    const result = await target
                        .chooseToDiscard("he", count, { color: "red" }, "弃置" + get.cnNumber(count) + "张红色牌或失去1点体力")
                        .set("ai", card => {
                            if (card.name === "tao") return -10;
                            const player = get.player(),
                                hp = player.getHp();
                            if (card.name === "jiu" && hp === 1) return -10;
                            return get.unuseful(card) + 2.5 * (5 - hp);
                        })
                        .forResult();
                    if (!result?.bool) await target.loseHp();
                    if (target.getCards("h").every(card => get.color(card) === "black")) {
                        const resultx = await player
                            .chooseBool("是否对" + get.translation(target) + "造成1点伤害？")
                            .set("choice", get.damageEffect(target, player, player) > 0)
                            .forResult();
                        if (resultx?.bool) {
                            player.line(target);
                            await target.damage();
                        }
                    }
                    if (num >= target.getHp()) await target.loseHp(num);
                },
                global: "PIbaixue_load",
                group: "PIbaixue_shenfen",
                subSkill: {
                    load: {
                        trigger: { player: "recoverAfter" },
                        filter(event, player) {
                            return (
                                game
                                    .getGlobalHistory("changeHp", evt => evt.getParent().name === "recover")
                                    .map(evt => evt.getParent())
                                    .indexOf(event) === 0
                            );
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        content() {
                            player.addTempSkill("PIbaixue_count");
                            player.storage["PIbaixue_count"] = player.getHp();
                        },
                    },
                    count: {
                        charlotte: true,
                        onremove: true,
                    },
                    shenfen: {
                        trigger: {
                            player: "phaseEnd",
                            source: "dieAfter",
                        },
                        filter(event, player) {
                            if (event.name === "die" && !event.player.hasMark("PIliran_mark")) return false;
                            if (player.countMark("PIbaixue_used") >= player.getHp()) return false;
                            return game.hasPlayer(target => {
                                if (!target.hasMark("PIliran_mark")) return false;
                                return game.getGlobalHistory("changeHp", evt => evt.getParent().name === "loseHp").length > 0 || target.hasHistory("lose", evt => evt.cards2.some(i => get.color(i, target) === "black"));
                            });
                        },
                        logTarget(event, player) {
                            return game
                                .filterPlayer(target => {
                                    if (!target.hasMark("PIliran_mark")) return false;
                                    return game.getGlobalHistory("changeHp", evt => evt.getParent().name === "loseHp").length > 0 || target.hasHistory("lose", evt => evt.cards2.some(i => get.color(i, target) === "black"));
                                })
                                .sortBySeat();
                        },
                        prompt2(event, player) {
                            return (
                                "对" +
                                get.translation(
                                    game
                                        .filterPlayer(target => {
                                            if (!target.hasMark("PIliran_mark")) return false;
                                            return target.hasHistory("lose", evt => evt.cards2.some(i => get.color(i, target) === "black"));
                                        })
                                        .sortBySeat()
                                ) +
                                "各造成1点伤害"
                            );
                        },
                        check(event, player) {
                            return (
                                game
                                    .filterPlayer(target => {
                                        if (!target.hasMark("PIliran_mark")) return false;
                                        return target.hasHistory("lose", evt => evt.cards2.some(i => get.color(i, target) === "black"));
                                    })
                                    .reduce((sum, target) => sum + get.damageEffect(target, player, player)) > 0
                            );
                        },
                        content() {
                            if (!player.storage.PIbaixue_used) {
                                player.when({ global: "roundStart" }).then(() => delete player.storage.PIbaixue_used);
                            }
                            player.addMark("PIbaixue_used", 1, false);
                            for (const i of event.targets) i.damage();
                        },
                    },
                },
            },
            //卟啉症
            PIxueyou: {
                trigger: { global: "changeHpBegin" },
                filter(event, player) {
                    if (
                        !player.hasCard(card => {
                            if (get.position(card) === "h" && _status.connectMode) return true;
                            return lib.filter.cardDiscardable(card, player);
                        }, "he")
                    )
                        return false;
                    return event.player.hasMark("PIliran_mark") && event.num;
                },
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        list = ["PIxueyou", target];
                    event.result = await player
                        .chooseToDiscard(get.prompt2(...list), "he")
                        .set("ai", card => {
                            return get.event().goon ? lib.skill.zhiheng.check(card) : 0;
                        })
                        .set(
                            "goon",
                            (() => {
                                if (trigger.num > 0) return get.recoverEffect(target, trigger.getParent().source, player) < 0;
                                return _status.currentPhase !== player || target.countCards("h", { color: "red" }) < target.getHp();
                            })()
                        )
                        .set("logSkill", list)
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        result = await target
                            .judge(card => {
                                return get.color(card) === "red" ? -5 : 2;
                            })
                            .set("judge2", result => (result.bool === false ? true : false))
                            .forResult();
                    if (result.bool === false) {
                        const str = get.translation(target);
                        const resultx = await player
                            .chooseBool(trigger.num > 0 ? "是否取消" + str + "本次的体力增加？" : "是否摸一张牌？")
                            .set(
                                "choice",
                                (() => {
                                    return trigger.num > 0 ? get.recoverEffect(target, trigger.getParent().source, player) < 0 : get.effect(player, { name: "draw" }, player, player) > 0;
                                })()
                            )
                            .forResult();
                        if (resultx.bool) {
                            if (trigger.num > 0) {
                                trigger.cancel();
                                player.line(target);
                                game.log(target, "本次的体力增加被取消了");
                            } else await player.draw();
                        }
                        if (_status.currentPhase === player && target.countCards("h", { color: "red" }) >= target.getHp() && !player.hasSkill("PIxueyou_used")) {
                            const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                            if (player.canUse(card, target, false)) {
                                const result = await player
                                    .chooseBool("是否视为对" + str + "使用一张不可响应的病【杀】？")
                                    .set(
                                        "choice",
                                        (() => {
                                            return get.effect(target, card, player, player) > 0;
                                        })()
                                    )
                                    .forResult();
                                if (result.bool) {
                                    player.addTempSkill("PIxueyou_used");
                                    await player.useCard(card, target, false).set("oncard", () => {
                                        const event = _status.event;
                                        event.directHit.addArray(game.players);
                                        game.log(event.card, "不可被响应");
                                    });
                                }
                            }
                        }
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg?.card?.name === "sha" && _status.event?.getParent()?.name === "PIxueyou";
                    },
                },
                subSkill: { used: { charlotte: true } },
            },
            PIxueai: {
                trigger: { global: "judge" },
                filter(event, player) {
                    if (!event.player.hasMark("PIliran_mark") || event?.fixedResult?.color) return false;
                    if (Math.min(event.player.getHp(), ui.cardPile.childNodes.length) + player.countCards("h") === 0) return false;
                    return get.color(event.player.judging[0], event.player) === "black";
                },
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        list = ["PIxueai", target],
                        num = Math.min(target.getHp(), ui.cardPile.childNodes.length);
                    let cardsx;
                    if (num) {
                        cardsx = get.cards(num, true).map(card => {
                            const cardx = ui.create.card();
                            cardx.init(get.cardInfo(card));
                            cardx.preCard = card;
                            return cardx;
                        });
                        if (cardsx.length) player.directgains(cardsx, null, "PIxueai_tag");
                    }
                    let {
                        result: { bool, cards },
                    } = await player
                        .chooseCard(
                            get.translation(target) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，" + get.prompt(...list),
                            card => {
                                const player = get.player();
                                const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
                                if (mod2 != "unchanged") return mod2;
                                const mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
                                if (mod != "unchanged") return mod;
                                return true;
                            },
                            "hs"
                        )
                        .set("ai", card => {
                            const player = get.player(),
                                trigger = get.event().getTrigger(),
                                judging = get.event().judging;
                            const result = trigger.judge(card) - trigger.judge(judging);
                            const attitude = get.attitude(player, trigger.player);
                            if (attitude === 0 || result === 0) return 0;
                            return result * get.sgn(attitude) - get.value(card) / 2;
                        })
                        .set("judging", trigger.player.judging[0]);
                    cardsx = player.getCards("s", card => card.hasGaintag("PIxueai_tag"));
                    if (cardsx?.length) {
                        if (bool && cards?.length) cards = cards.map(card => (cardsx.includes(card) ? card.preCard : card));
                        if (player.isOnline2()) {
                            player.send(
                                (cards, player) => {
                                    cards.forEach(i => i.delete());
                                    if (player === game.me) ui.updatehl();
                                },
                                cardsx,
                                player
                            );
                        }
                        cardsx.forEach(i => i.delete());
                        if (player === game.me) ui.updatehl();
                    }
                    event.result = { bool, cards };
                },
                popup: false,
                async content(event, trigger, player) {
                    player.addExpose(0.2);
                    const cards = event.cards,
                        [card] = cards,
                        target = trigger.player;
                    await player.respond(cards, event.name, "highlight", "noOrdering");
                    if (target.judging[0].clone) {
                        target.judging[0].clone.classList.remove("thrownhighlight");
                        game.broadcast(card => {
                            if (card.clone) card.clone.classList.remove("thrownhighlight");
                        }, target.judging[0]);
                        game.addVideo("deletenode", player, get.cardsInfo([target.judging[0].clone]));
                    }
                    await player.gain(target.judging[0], "gain2");
                    target.judging[0] = card;
                    trigger.orderingCards.addArray(cards);
                    game.log(target, "的判定牌改为", card);
                    await game.delay(2);
                    if (get.color(card, player) === "red") {
                        target
                            .when("judgeEnd")
                            .filter(evt => {
                                return evt === trigger && get.position(evt.result.card, true) == "o";
                            })
                            .then(() => {
                                var card = (event.card = trigger.result.card);
                                source.chooseBool("是否将" + get.translation(card) + "标记为“血癌”令" + get.translation(player) + "获得之？").set(
                                    "choice",
                                    (() => {
                                        return get.attitude(source, player) < 0;
                                    })()
                                );
                            })
                            .then(() => {
                                if (result.bool) {
                                    source.line(player);
                                    player.gain(card, "gain2").gaintag.add("PIxueai_mark");
                                }
                            })
                            .vars({ source: player });
                    }
                },
                ai: {
                    rejudge: true,
                    tag: { rejudge: 0.5 },
                },
                mark: true,
                markimage: "extension/瘟疫公司/image/card/PIxueai_view.png",
                intro: {
                    mark(dialog, storage, player) {
                        if (!player.isUnderControl(true)) return "这是属于" + get.translation(player) + "的私密";
                        let targets = game
                            .filterPlayer(target => {
                                return target.hasCard(card => {
                                    return card.hasGaintag("PIxueai_mark");
                                }, "h");
                            })
                            .sortBySeat(player);
                        if (targets.length) {
                            for (const target of targets) {
                                dialog.addText(get.translation(target));
                                dialog.addSmall(
                                    target.getCards("h", card => {
                                        return card.hasGaintag("PIxueai_mark");
                                    })
                                );
                            }
                        } else return "暂无滋养卡牌";
                    },
                },
                group: "PIxueai_effect",
                global: "PUxueai_mark",
                subSkill: {
                    tag: {
                        mod: (() => {
                            let mod = {
                                cardEnabled(card, player) {
                                    let cards = [card];
                                    if (card.cards) cards.addArray(card.cards);
                                    if (cards.some(i => i.hasGaintag("PIxueai_mark"))) return false;
                                },
                            };
                            mod.cardSavable = mod.cardEnabled;
                            return mod;
                        })(),
                    },
                    mark: {},
                    effect: {
                        trigger: { global: ["phaseBegin", "phaseEnd"] },
                        filter(event, player) {
                            const target = event.player;
                            return target.hasCard(card => card.hasGaintag("PIxueai_mark") && lib.filter.cardDiscardable(card, target), "h");
                        },
                        logTarget: "player",
                        async cost(event, trigger, player) {
                            const target = trigger.player,
                                name = event.triggername,
                                str = get.translation(target);
                            event.result =
                                name === "phaseBegin"
                                    ? await player
                                        .chooseBool(get.prompt("PIxueai", target))
                                        .set(
                                            "prompt2",
                                            (() => {
                                                return "令" + str + "弃置所有“血癌”牌，若弃置牌数大于等于其体力值，则其失去max(1,abs(弃置牌数-其体力值))点体力。若其因此进入濒死状态，其减1点体力上限";
                                            })()
                                        )
                                        .set("choice", get.attitude(player, target) < 0)
                                        .forResult()
                                    : { bool: true };
                        },
                        async content(event, trigger, player) {
                            player.addTempSkill("PIxueai_buff");
                            const target = trigger.player,
                                name = event.triggername;
                            const cards = target.getCards("h", card => card.hasGaintag("PIxueai_mark") && lib.filter.cardDiscardable(card, target));
                            await target.discard(cards);
                            if (cards.length >= target.getHp()) await target.loseHp(Math.max(1, Math.abs(cards.length - target.getHp())));
                        },
                    },
                    buff: {
                        charlotte: true,
                        trigger: { global: "dying" },
                        filter(event, player) {
                            if (!(event.getParent(2)?.name === "loseHp")) return false;
                            const evt = event.getParent(3);
                            if (!(evt?.name === "PIxueai_effect" && evt.player === player && evt.targets[0] === event.player)) return false;
                            return evt.triggername === "phaseBegin" || event.player.countCards("h");
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            player.line(target);
                            if (trigger.triggername === "phaseBegin") await target.loseMaxHp();
                            else {
                                await player.viewHandcards(target);
                                if (target.hasCard(card => get.color(card) === "red" && !card.hasGaintag("PIxueai_mark"), "h")) {
                                    const result = await player
                                        .choosePlayerCard(target, "h", true)
                                        .set("filterButton", button => {
                                            const card = button.link;
                                            return get.color(card) === "red" && !card.hasGaintag("PIxueai_mark");
                                        })
                                        .set("prompt", "标记" + get.translation(target) + "一张红色手牌为“血癌”")
                                        .set("ai", button => {
                                            const card = button.link,
                                                owner = get.owner(card);
                                            return get.value(card, owner) - get.useful(card, owner);
                                        })
                                        .forResult();
                                    if (result?.bool && result.cards?.length) {
                                        target.addGaintag(result.cards, "PIxueai_mark");
                                    }
                                }
                            }
                        },
                    },
                },
            },
            //链球菌
            PIfeiyan: {
                trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                getIndex(event, player) {
                    if (!event.getg) return false;
                    if (event.name == "gain") {
                        if (event.getParent().name == "draw" && event.getParent("phaseDraw").player == event.player) return false;
                    }
                    return game
                        .filterPlayer(target => {
                            if (!target.hasMark("PIliran_mark") || !target.countCards("h")) return false;
                            return target.hasMark("PIliran_mark") && event.getg(target).length;
                        })
                        .sortBySeat();
                },
                filter(event, player, name, target) {
                    const map = player.storage.PIfeiyan_used || {};
                    return target?.isIn() && (map[target.playerid] || 0) < 2;
                },
                logTarget: (event, player, name, target) => target,
                check(event, player, name, target) {
                    return get.attitude(player, event.player) < 0;
                },
                async content(event, trigger, player) {
                    const [target] = event.targets,
                        id = target.playerid;
                    if (!player.storage.PIfeiyan_used) {
                        player.storage.PIfeiyan_used = {};
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIfeiyan_used);
                    }
                    if (!player.storage.PIfeiyan_used[id]) player.storage.PIfeiyan_used[id] = 0;
                    player.storage.PIfeiyan_used[id]++;
                    const result = await player.choosePlayerCard(target, "h", [1, Math.max(1, target.getDamagedHp())], true).forResult();
                    if (result?.bool && result.cards?.length) {
                        const cards = result.cards,
                            num = cards.filter(card => get.color(card) === "red").length;
                        const black = cards.filter(card => get.color(card) === "black");
                        await target.showCards(cards, get.translation(player) + "展示的牌");
                        const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                        if (num >= black.length && player.canUse(card, target, false)) {
                            const resultx = await player
                                .chooseToDiscard("he", "是否弃置一张牌，视为对" + get.translation(target) + "使用一张病【杀】？")
                                .set("ai", card => {
                                    const player = get.player(),
                                        [target] = get.event().getParent().targets,
                                        cardx = get.event().card;
                                    return get.effect(target, cardx, player, player) > 0 ? 7 - get.value(card) : 0;
                                })
                                .set("card", card)
                                .forResult();
                            if (resultx.bool) await player.useCard(card, target, false);
                        }
                        if (num >= target.getHp() && target.isIn()) {
                            player.line(target);
                            await target.damage();
                        }
                        if (
                            target.isIn() &&
                            black.some(card => {
                                return get.owner(card) === target && get.position(card) === "h" && lib.filter.canBeDiscarded(card, player, target);
                            })
                        ) {
                            const discards = black.filter(card => {
                                return get.owner(card) === target && get.position(card) === "h" && lib.filter.canBeDiscarded(card, player, target);
                            });
                            const resulty = await player
                                .chooseBool("是否弃置" + get.translation(discards) + "？")
                                .set(
                                    "choice",
                                    (() => {
                                        return get.effect(target, { name: "guohe_copy", position: "h" }, player, player) > 0;
                                    })()
                                )
                                .forResult();
                            if (resulty.bool) {
                                player.line(target);
                                await target.discard(discards).set("discarder", player);
                            }
                        }
                    }
                },
            },
            PIniangnong: {
                trigger: {
                    source: "damageSource",
                    global: "loseHpEnd",
                },
                filter(event, player) {
                    const target = event.player;
                    if (!target.isIn() || !target.hasMark("PIliran_mark") || !target.countCards("he")) return false;
                    const map = player.storage.PIniangnong_used || {};
                    return map[target.playerid] || 0 < 1;
                },
                logTarget: "player",
                check(event, player) {
                    return get.effect(event.player, { name: "guohe_copy2" }, player, player) > 0;
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        id = target.playerid;
                    if (!player.storage.PIniangnong_used) {
                        player.storage.PIniangnong_used = {};
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIniangnong_used);
                    }
                    if (!player.storage.PIniangnong_used[id]) player.storage.PIniangnong_used[id] = 0;
                    player.storage.PIniangnong_used[id]++;
                    const resultx = await player.discardPlayerCard(target, "he", Math.max(1, target.getDamagedHp()), true).forResult();
                    if (
                        resultx?.bool &&
                        resultx.cards?.some(card => {
                            return get.tag(card, "damage") && get.position(card, true) === "d" && player.canUse(card, target, false);
                        })
                    ) {
                        const result = await player
                            .chooseButton(
                                [
                                    '<div class="text center">酿脓：请选择其中一张伤害牌对' + get.translation(target) + "使用</div>",
                                    resultx.cards.filter(card => {
                                        return get.tag(card, "damage") && get.position(card, true) === "d" && player.canUse(card, target, false);
                                    }),
                                ],
                                true
                            )
                            .set("ai", button => {
                                const player = get.player(),
                                    [target] = get.event().getParent().targets,
                                    card = button.link;
                                return get.effect(target, card, player, player);
                            })
                            .forResult();
                        if (result?.bool && result.links?.length) {
                            const [card] = result.links;
                            await player.useCard(card, target, false);
                            if (!target.hasHistory("damage", evt => evt.getParent(event.name) === event)) {
                                if (get.position(card, true) === "d") await player.gain(card, "gain2");
                            }
                        }
                    }
                },
            },
            //伊藤诚
            PIyudu: {
                trigger: { global: ["damageSource", "damageEnd"] },
                filter(event, player, name) {
                    if (!event.source?.isIn() || !event.player?.isIn()) return false;
                    const from = get.info("PIyudu").logTarget(event, player, name);
                    const map = player.storage.PIyudu_used || {};
                    if (map[from.playerid] || 0 >= 2) return false;
                    if (!from.hasMark("PIliran_mark")) return false;
                    if (!from.hasSex("male") && name === "damageSource") return false;
                    if (!from.hasSex("female") && name === "damageEnd") return false;
                    const to = event[name === "damageSource" ? "player" : "source"];
                    if (to.hasMark("PIliran_mark")) return false;
                },
                logTarget(event, player, name) {
                    return event[name === "damageSource" ? "source" : "player"];
                },
                line: false,
                forced: true,
                locked: false,
                async content(event, trigger, player) {
                    const from = event.targets[0],
                        id = from.playerid;
                    if (!player.storage.PIyudu_used) {
                        player.storage.PIyudu_used = {};
                        player.when({ global: "roundStart" }).then(() => delete player.storage.PIyudu_used);
                    }
                    if (!player.storage.PIyudu_used[id]) player.storage.PIyudu_used[id] = 0;
                    player.storage.PIyudu_used[id]++;
                    const to = trigger[event.triggername === "damageSource" ? "player" : "source"];
                    player.line2([from, to]);
                    await game.delayx();
                    if (!ui.cardPile.childNodes.length && ui.discardPile.childNodes.length) game.washCard();
                    if (ui.cardPile.childNodes.length) {
                        const card = game.cardsGotoOrdering(Array.from(ui.cardPile.childNodes).randomGets(1)).cards[0];
                        await player.showCards([card], get.translation(player) + "发动了【欲毒】");
                        if (get.color(card) === "red") {
                            await to.addPIliranMark();
                            await to.loseHp();
                        }
                        if (get.color(card) === "black") {
                            const result = await player
                                .chooseControl("获得", "给予", "cancel2")
                                .set("ai", () => {
                                    const { player, card } = get.event(),
                                        target = get.event().getParent().targets[0];
                                    const map = {
                                        获得: get.value(card) + get.effect(player, { name: "draw" }, player, player),
                                        给予: get.value(card) * get.sgn(get.attitude(player, target)) + get.effect(player, { name: "draw" }, player, player) * 2,
                                        cancel2: 0,
                                    };
                                    return get
                                        .event()
                                        .controls.slice()
                                        .sort((a, b) => map[b] - map[a])[0];
                                })
                                .set(
                                    "prompt",
                                    (() => {
                                        const str = [get.translation(from), get.translation(card)];
                                        return "获得" + str[1] + "然后你摸一张牌，或令" + str[0] + "获得" + str[1] + "然后你摸两张牌";
                                    })()
                                )
                                .set("card", card)
                                .forResult();
                            if (result.control !== "cancel2") {
                                if (result.control === "获得") {
                                    await player.gain(card, "gain2");
                                    await player.draw();
                                } else {
                                    player.line(from);
                                    await from.gain(card, "gain2");
                                    await player.draw(2);
                                }
                            }
                        }
                        if (get.suit(card) === "club" && from.countMark(event.name) < 3) {
                            player.line(from);
                            from.addMark(event.name, Math.min(3 - from.countMark(event.name), 1 + (event.triggername === "damageEnd")));
                        }
                    } else game.over();
                },
                markimage: "extension/瘟疫公司/image/card/PIyudu_mark.png",
                intro: { content: "艾呀，梅事的，概率为淋，<font color=#00ff00>疣</font>什么关系" },
            },
            PIxingliu: {
                trigger: { global: "useCardAfter" },
                filter(event, player) {
                    if (!event.player.hasMark("PIyudu") || event.player.hasHistory("sourceDamage", evt => evt.card === event.card)) return false;
                    return event.targets?.some(i => i !== event.player);
                },
                check(event, player) {
                    return get.effect(event.player, { name: "losehp" }, player, player) + get.effect(event.player, { name: "guohe_copy2" }, player, player) * (event.player.countMark("PIyudu") - 1) > 0;
                },
                logTarget: "player",
                prompt2(event, player) {
                    return "移去" + get.translation(event.player) + "的1枚“欲毒”标记并令其失去1点体力，然后你弃置其剩余“欲毒”标记数张牌";
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    target.removeMark("PIyudu", 1);
                    await target.loseHp();
                    const num = target.countMark("PIyudu");
                    if (num > 0) await player.discardPlayerCard(target, "he", num, true);
                },
                mark: true,
                markimage: "extension/瘟疫公司/image/card/PIxingliu_mark.png",
                intro: {
                    mark(dialog, storage, player) {
                        if (!player.isUnderControl(true)) return "这是属于" + get.translation(player) + "的私密";
                        let targets = game
                            .filterPlayer(target => {
                                if (!target.hasMark("PIyudu")) return false;
                                return target.hasCard({ suit: "club" }, "h");
                            })
                            .sortBySeat(player);
                        if (targets.length) {
                            for (const target of targets) {
                                dialog.addText(get.translation(target));
                                dialog.addSmall(target.getCards("h", { suit: "club" }));
                            }
                        } else return "暂无拥有梅花手牌的诚哥★😡";
                    },
                },
                group: "PIxingliu_add",
                subSkill: {
                    add: {
                        trigger: { global: "useCardToPlayer" },
                        filter(event, player) {
                            if (!event.player.hasMark("PIyudu") || event.player.countMark("PIyudu") >= 3) return false;
                            return get.color(event.card) === "black" && event.player === event.target;
                        },
                        logTarget: "player",
                        forced: true,
                        locked: false,
                    },
                },
            },
            //乳酸菌醋酸菌
            PIsuanshi: {
                trigger: {
                    global: "phaseJieshuBegin",
                    player: "damageEnd",
                },
                filter(event, player) {
                    const target = get.info("PIsuanshi").logTarget(event, player);
                    if (!target?.isIn()) return false;
                    return target.hasMark("PIliran_mark") && target.countCards("h");
                },
                logTarget(event, player) {
                    return event[event.name === "damage" ? "source" : "player"];
                },
                check(event, player) {
                    const target = get.info("PIsuanshi").logTarget(event, player);
                    return get.attitude(player, target) <= 0;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        cards = target.getCards("h");
                    if (!cards.some(c => get.color(c) === "red")) await player.viewHandcards(target);
                    else {
                        const result = await player
                            .chooseButton(["酸蚀：请选择其中一张红色牌标记为“糖”", cards], true)
                            .set("filterButton", button => get.color(button.link) === "red")
                            .set("ai", button => {
                                const card = button.link;
                                return get.value(card) * get.useful(card);
                            })
                            .forResult();
                        if (result.bool) target.addGaintag(result.links, "PIsuanshi_mark");
                    }
                },
                group: "PIsuanshi_effect",
                subSkill: {
                    mark: {},
                    effect: {
                        trigger: { global: "useCard" },
                        filter(event, player) {
                            return event.player.hasHistory("lose", evt => {
                                if (evt.getParent() !== event) return false;
                                return Object.values(evt.gaintag_map).flat().includes("PIsuanshi_mark");
                            });
                        },
                        forced: true,
                        locked: false,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const result = await player.judge().forResult();
                            if (result.color === "red") {
                                await player.draw();
                                player
                                    .when({ global: "useCardAfter" })
                                    .filter(evt => evt === trigger)
                                    .then(() => {
                                        const history = trigger.player.getHistory("lose", evt => evt.getParent() === trigger);
                                        const ids = history.reduce((list, evt) => {
                                            for (const i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes("PIsuanshi_mark")) list.push(i);
                                            }
                                            return list;
                                        }, []);
                                        const cards = (trigger.cards || []).filter(c => ids.includes(c.cardid)).filterInD("od");
                                        if (cards.length) player.gain(cards, "gain2");
                                    });
                            }
                            if (result.color === "black") {
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                game.log(trigger.card, "被无效了");
                                await player.discardPlayerCard(trigger.player, "he", true);
                            }
                        },
                    },
                },
            },
            PIquchi: {
                trigger: { global: ["useCardToPlayered", "useCardAfter"] },
                filter(event, player, name) {
                    if (!event.player.hasMark("PIliran_mark") || event.player.isHealthy()) return false;
                    if (name === "useCardToPlayered") return event.target === event.player;
                    return event.player.hasHistory("lose", evt => {
                        if (evt.getParent() !== event) return false;
                        return Object.values(evt.gaintag_map).flat().includes("PIsuanshi_mark");
                    });
                },
                forced: true,
                locked: false,
                logTarget: "player",
                content() {
                    trigger.player.addMark("PIquchi", 1);
                },
                markimage: "extension/瘟疫公司/image/card/PIquchi_mark.png",
                intro: { content: "mark" },
                global: ["PIquchi_discard", "PIquchi_damage"],
                subSkill: {
                    discard: {
                        trigger: { player: "useCardAfter" },
                        filter(event, player) {
                            return player.hasMark("PIquchi");
                        },
                        forced: true,
                        locked: false,
                        content() {
                            player.chooseToDiscard("he", true, Math.min(3, player.countMark("PIquchi")));
                        },
                    },
                    damage: {
                        trigger: { source: "damageBegin1" },
                        filter(event, player) {
                            return player.hasMark("PIquchi") && event.card?.name === "sha";
                        },
                        prompt2(event, player) {
                            return "令此伤害-1并失去1点体力，直到你的下回合结束前不能使用【杀】，然后移去1枚“龋齿”标记";
                        },
                        check(event, player) {
                            return get.damageEffect(event.player, player, player, event.nature) < 0;
                        },
                        async content(event, trigger, player) {
                            trigger.num--;
                            await player.loseHp();
                            player.addSkill("PIquchi_ban");
                            player.markAuto("PIquchi_ban", event.getParent("phase"));
                            player.removeMark("PIquchi");
                        },
                    },
                    ban: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            cardEnabled(card) {
                                if (card.name === "sha") return false;
                            },
                            cardSavable(card) {
                                if (card.name === "sha") return false;
                            },
                        },
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIquchi_ban.png",
                        intro: {
                            markcount: () => 0,
                            content: "不能使用【杀】",
                        },
                        trigger: { player: "phaseEnd" },
                        filter(event, player) {
                            return !player.getStorage("PIquchi_ban").includes(event);
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.removeSkill(event.name);
                        },
                    },
                },
            },
            //麻风
            PIjiangsuo: {
                trigger: { source: "damageSource" },
                filter(event, player) {
                    if (!(event.player.isIn() && !player.isPISameClanFor(event.player))) return false;
                    return !player.getStorage("PIjiangsuo_round").includes(event.player) && event.player.isDamaged() && event.player.countCards("he");
                },
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        list = ["PIjiangsuo", target];
                    const next = player.discardPlayerCard(target, "he", [1, target.getDamagedHp()]);
                    next.prompt = get.prompt2(...list);
                    next.logSkill = list;
                    event.result = await next.forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        num = target.getDamagedHp();
                    player.addTempSkill("PIjiangsuo_round", "roundStart");
                    player.markAuto("PIjiangsuo_round", [target]);
                    if (
                        target.hasMark("PIliran_mark") &&
                        game.hasPlayer(target => {
                            return player.canGanran(target);
                        }) &&
                        num >= target.countCards("h")
                    ) {
                        const result = await player
                            .chooseTarget(
                                "僵缩：请感染一名角色",
                                (card, player, target) => {
                                    return player.canGanran(target);
                                },
                                true
                            )
                            .set("ai", target => {
                                const player = get.player();
                                return -get.attitude(player, target);
                            })
                            .forResult();
                        if (result?.bool && result.targets?.length) {
                            player.line(result.targets);
                            await result.targets[0].addPIliranMark();
                        }
                    }
                    if (num >= target.getHp()) {
                        target.addSkill("PIjiangsuo_effect");
                        target.addMark("PIjiangsuo_effect", 1, false);
                        target.markAuto("PIjiangsuo_effectx", event.getParent("phase"));
                    }
                },
                subSkill: {
                    round: {
                        charlotte: true,
                        onremove: true,
                    },
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            delete player.storage[skill];
                            delete player.storage[skill + "x"];
                        },
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIjiangsuo_effect.png",
                        intro: {
                            content: ["手牌上限-#", "摸牌阶段少摸#张牌", "受到瘟疫公司角色造成的伤害后失去#点体力"].map(str => "<li>" + str).join("<br>"),
                        },
                        trigger: { player: ["damageEnd", "phaseDrawBegin2"] },
                        filter(event, player) {
                            if (!player.hasMark("PIjiangsuo_effect")) return false;
                            if (event.name === "phaseDraw") return !event.numFixed;
                            if (!event.source?.isIn()) return false;
                            return event.source.hasClan("瘟疫公司");
                        },
                        forced: true,
                        content() {
                            const num = player.countMark("PIjiangsuo_effect");
                            if (trigger.name === "damage") {
                                player.logSkill(event.name);
                                player.loseHp(num);
                            } else trigger.num -= num;
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark("PIjiangsuo_effect");
                            },
                        },
                        group: "PIjiangsuo_effectx",
                    },
                    effectx: {
                        charlotte: true,
                        trigger: { player: "phaseEnd" },
                        filter(event, player) {
                            return !player.getStorage("PIjiangsuo_effectx").includes(event);
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.removeSkill("PIjiangsuo_effect");
                        },
                    },
                },
            },
            PIguqi: {
                trigger: {
                    global: ["useCardToTargeted", "loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                },
                getIndex(event, player) {
                    if (event.name === "useCardToTargeted") return [event.target];
                    return game.filterPlayer(target => event.getl?.(target)?.es?.length > 0);
                },
                filter(event, player, name, target) {
                    if (!target?.hasMark("PIliran_mark")) return false;
                    if (event.name === "useCardToTargeted") {
                        if (event.player !== player || event.getParent().directHit.includes(target)) return false;
                        return target.isDamaged() && target.countCards("e") <= player.getHp();
                    }
                    if (_status.currentPhase === target) return false;
                    return target.getHp() > 0 && target.countCards("he");
                },
                forced: true,
                logTarget(event, player, name, target) {
                    return target;
                },
                async content(event, trigger, player) {
                    const [target] = event.targets;
                    if (trigger.name === "useCardToTargeted") {
                        trigger.getParent().directHit.add(target);
                        game.log(target, "不可响应", trigger.card);
                    } else {
                        await player.discardPlayerCard(target, "he", target.getHp() > 0);
                        const evt = trigger.getl(target);
                        const types = evt.es.reduce((list, card) => {
                            const VEquip = evt.vcard_map.get(card);
                            if (VEquip?.name) {
                                for (const i of get.subtypes(VEquip?.name)) list.push(i);
                            }
                            return list;
                        }, []);
                        if (types.length) await target.disableEquip(types);
                        const num = target.countDisabledSlot();
                        if (num > 0) await player.draw(num);
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg?.target) return false;
                        return arg.target.hasMark("PIliran_mark") && arg.target.isDamaged() && arg.target.countCards("e") <= player.getHp();
                    },
                },
            },
            //支原体衣原体
            PIjieniao: {
                trigger: { global: "phaseDiscardBefore" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark") && event.player.countCards("h");
                },
                async cost(event, trigger, player) {
                    const list = [event.skill, trigger.player];
                    event.result = await player
                        .discardPlayerCard(trigger.player, "he", "visible")
                        .set("prompt", get.prompt2(...list))
                        .set("logSkill", list)
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    player.addTempSkill("PIjieniao_effect");
                    const target = trigger.player,
                        [card] = event.cards,
                        suit = get.suit(card, target);
                    player.storage["PIjieniao_effect"][target.playerid] = player.storage["PIjieniao_effect"][target.playerid] || [];
                    player.storage["PIjieniao_effect"][target.playerid].add(suit);
                    const next = target.getNext();
                    if (next.canGanran()) {
                        player.line(next);
                        await next.addPIliranMark();
                    }
                },
                subSkill: {
                    effect: {
                        init(player, skill) {
                            player.storage[skill] = player.storage[skill] || {};
                        },
                        charlotte: true,
                        onremove: true,
                        trigger: { global: ["loseAfter", "loseAsyncAfter", "phaseDiscardAfter"] },
                        getIndex(event, player) {
                            if (event.name === "phaseDiscard") return [event.player];
                            return game.filterPlayer(target => event.getl?.(target)?.cards2?.length);
                        },
                        filter(event, player, name, target) {
                            if (!target?.isIn() || player.storage["PIjieniao_effect"][target.playerid]) return false;
                            if (event.name === "phaseDiscard")
                                return !target.hasHistory("lose", evt => {
                                    if (evt.getParent("PIjieniao_cost", true)) return false;
                                    return evt.type === "discard" && evt.getParent("phaseDiscard") === event;
                                });
                            const evt = event.getParent("phaseDiscard", true);
                            if (!evt || evt.player !== target) return false;
                            return event.getl(target).cards2.some(card => player.storage["PIjieniao_effect"][target.playerid].includes(get.suit(card, target)));
                        },
                        forced: true,
                        logTarget: (event, player, name, target) => target,
                        async content(event, trigger, player) {
                            const target = event.targets[0];
                            if (trigger.name === "phaseDiscard") {
                                if (target.hasSex("male")) await target.loseHp();
                                if (target.hasSex("female")) await player.draw(Math.max(1, target.getDamagedHp()));
                            } else await target.damage();
                        },
                    },
                },
            },
            PIshayan: {
                trigger: { global: "phaseUseBefore" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark") && event.player.countCards("h");
                },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark") && event.player.countCards("h");
                },
                async cost(event, trigger, player) {
                    const list = [event.skill, trigger.player];
                    event.result = await player
                        .discardPlayerCard(trigger.player, "he", "visible")
                        .set("prompt", get.prompt2(...list))
                        .set("logSkill", list)
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const { card, number } = await player.judge().forResult();
                    const cards = target.getCards("h", c => get.number(c) === number);
                    if (cards.length) {
                        target.addSkill("PIshayan_buff");
                        target.addGaintag(cards, "PIshayan_buff");
                    } else {
                        if (get.position(card, true) === "d") await player.gain(card, "gain2");
                    }
                    target.addTempSkill("PIshayan_effect", { player: "phaseBegin" });
                    target.storage["PIshayan_effect"][player.playerid] = target.storage["PIshayan_effect"][player.playerid] || [];
                    target.storage["PIshayan_effect"][player.playerid].add(number);
                },
                subSkill: {
                    buff: {
                        charlotte: true,
                        mod: {
                            cardEnabled2(card) {
                                if ([card].concat(card.cards || []).some(i => i.hasGaintag("PIshayan_buff"))) return false;
                            },
                        },
                    },
                    effect: {
                        init(player, skill) {
                            player.storage[skill] = player.storage[skill] || {};
                        },
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIshayan_mark.png",
                        intro: {
                            content(storage = {}, player) {
                                if (!Object.keys(storage).some(id => storage[id].length)) return "你拥有健康的眼睛！";
                                const hp = Math.max(1, player.getDamagedHp());
                                return Object.keys(storage)
                                    .filter(id => storage[id].length)
                                    .map(id => {
                                        const target = (_status.connectMode ? lib.playerOL : game.playerMap)[id];
                                        const numbers = storage[id].slice().sort((a, b) => a - b);
                                        return "成为点数为" + (numbers[0] - 2 * hp) + "到" + (numbers[numbers.length - 1] + 2 * hp) + "的牌的目标后，" + get.translation(target) + "弃置你一张牌";
                                    })
                                    .join("<br>");
                            },
                        },
                        charlotte: true,
                        onremove: true,
                        trigger: { target: "useCardToTargeted" },
                        getIndex(event, player) {
                            const skill = "PIshayan_effect",
                                storage = player.storage[skill];
                            return Object.keys(storage)
                                .filter(id => storage[id].length)
                                .map(id => (_status.connectMode ? lib.playerOL : game.playerMap)[id])
                                .sortBySeat();
                        },
                        filter(event, player, name, target) {
                            if (!target?.isIn() || !player.countDiscardableCards(target, "he")) return false;
                            const number = get.number(event.card);
                            if (typeof number !== "number") return false;
                            const skill = "PIshayan_effect",
                                storage = player.storage[skill];
                            const id = target.playerid,
                                numbers = storage[id].slice().sort((a, b) => a - b);
                            const hp = Math.max(1, player.getDamagedHp());
                            return number >= numbers[0] - 2 * hp && number <= numbers[numbers.length - 1] + 2 * hp;
                        },
                        forced: true,
                        popup: false,
                        async content(event, trigger, player) {
                            const target = event.indexedData;
                            target.logSkill(event.name, player);
                            await target.discardPlayerCard(player, "he", true);
                        },
                    },
                },
            },
            //立克次氏体
            PIyangbing: {
                trigger: {
                    source: "damageSource",
                    global: ["loseAfter", "loseAsyncAfter"],
                },
                getIndex(event, player) {
                    if (event.name === "damage") return [event.player];
                    return game.filterPlayer(target => event.getl?.(target)?.cards2?.length);
                },
                filter(event, player, name, target) {
                    if (!target?.isIn()) return false;
                    if (event.name === "damage") return !player.isPISameClanFor(target) && target.countCards("h");
                    if (event.type !== "discard" || event.getlx === false) return false;
                    if (!(event.getParent("PIyangbing", true) || event.getParent("PIyangbing_effect", true))) return false;
                    const cards = event.getl(target).cards2;
                    if (cards.some(card => get.position(card, true) === "d" && get.color(card, target) === "red")) return true;
                    if (!cards.some(card => get.type2(card, target) === "equip")) return false;
                    return game.hasPlayer(current => {
                        if (!current.canGanran() || [player, target].includes(current)) return false;
                        return [player, target].some(i => [i.getNext(), i.getPrevious()].includes(current));
                    });
                },
                async cost(event, trigger, player) {
                    const target = event.indexedData;
                    if (trigger.name === "damage") {
                        const list = ["PIyangbing", target];
                        event.result = await player
                            .discardPlayerCard(target, "h", get.prompt(...list))
                            .set("logSkill", list)
                            .forResult();
                        event.result.skill_popup = false;
                    } else event.result = { bool: true, target: target };
                },
                async content(event, trigger, player) {
                    const target = event.indexedData;
                    if (trigger.name === "damage") {
                        const [card] = event.cards,
                            suit = get.suit(card, target),
                            color = get.color(card, target);
                        const { result } = await target
                            .chooseToDiscard("he", (card, player) => {
                                return get.suit(card) !== get.event().suit;
                            })
                            .set("ai", card => {
                                return 8 - get.value(card);
                            })
                            .set("prompt", "弃置一张非" + get.translation(suit) + "张牌，否则于回合结束时弃置所有" + get.translation(color) + "手牌")
                            .set("suit", suit);
                        if (!result?.bool) {
                            target.addTempSkill("PIyangbing_effect", { player: "phaseAfter" });
                            target.markAuto("PIyangbing_effect", [color]);
                        }
                    } else {
                        const cards = trigger.getl(target).cards2;
                        const gains = cards.filter(card => get.position(card, true) === "d" && get.color(card, target) === "red");
                        if (gains.length) await player.gain(gains, "gain2");
                        if (
                            cards.some(card => get.type2(card, target) === "equip") &&
                            game.hasPlayer(current => {
                                if (!current.canGanran() || [player, target].includes(current)) return false;
                                return [player, target].some(i => [i.getNext(), i.getPrevious()].includes(current));
                            })
                        ) {
                            const result = await player
                                .chooseTarget((card, player, current) => {
                                    const target = get.event().target;
                                    if (!current.canGanran() || [player, target].includes(current)) return false;
                                    return [player, target].some(i => [i.getNext(), i.getPrevious()].includes(current));
                                }, "是否感染一名你与" + get.translation(target) + "以外的相邻角色？")
                                .set("ai", target => {
                                    return -get.attitude(get.player(), target);
                                })
                                .set("target", target)
                                .forResult();
                            if (result?.bool && result.targets?.length) {
                                const [current] = result.targets;
                                player.line(current);
                                await current.addPIliranMark();
                            }
                        }
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        markimage: "extension/瘟疫公司/image/card/PIyangbing_effect.png",
                        intro: { content: "回合结束时弃置所有$手牌" },
                        trigger: { player: "phaseEnd" },
                        forced: true,
                        popup: false,
                        content() {
                            const colors = player.getStorage(event.name);
                            player.removeSkill(event.name);
                            const cards = player.getDiscardableCards(player, "h", card => colors.includes(get.color(card)));
                            if (cards.length) player.discard(cards);
                        },
                    },
                },
            },
            PIkoure: {
                trigger: { player: ["useCard", "damageEnd"] },
                filter(event, player) {
                    if ((event.name === "useCard") !== (player === _status.currentPhase)) return false;
                    if (event.name === "useCard") return get.info("PIkoure").logTarget(event, player).length;
                    const target = event.source;
                    if (!(target?.isIn() && get.info("PIkoure").logTarget(event, player).includes(target))) return false;
                    return target.countCards("h") >= player.getHp() || player.canUse(new lib.element.VCard({ name: "sha", nature: "ill" }), target, false);
                },
                logTarget(event, player) {
                    return game.filterPlayer(target => {
                        if (!target.hasMark("PIliran_mark")) return false;
                        if (event.name === "useCard") return target.countCards("h") < player.getHp();
                        return target === event.source;
                    });
                },
                forced: true,
                content() {
                    const targets = event.targets;
                    if (trigger.name === "useCard") {
                        trigger.directHit.addArray(targets);
                        game.log(targets, "不可响应", trigger.card);
                    } else {
                        const [target] = targets;
                        if (target.countCards("h") >= player.getHp()) target.damage();
                        else {
                            const card = new lib.element.VCard({ name: "sha", nature: "ill" });
                            if (player.canUse(card, target, false)) player.useCard(card, target, false);
                        }
                    }
                },
                ai: {
                    directHit_ai: true,
                    maixie_defend: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg?.target) return false;
                        const filter = card => !ui.selected.cards.includes(card) && !card.cards?.includes(card);
                        return arg.target.hasMark("PIliran_mark") && arg.target.countCards("h", filter) >= arg.target.getHp();
                    },
                    effect: {
                        target(card, player, target) {
                            const filter = card => !ui.selected.cards.includes(card) && !card.cards?.includes(card);
                            if (!player.hasMark("PIliran_mark") || player.countCards("h", filter) < player.getHp()) return;
                            if (player.hasSkillTag("jueqing", false, target)) return [1, -1.5];
                            if (target.hasFriend() && get.tag(card, "damage")) return [1, 0, 0, -0.7];
                        },
                    },
                },
            },
            //铃病毒
            PIlingran: {
                trigger: { global: ["linkAfter", "turnOverAfter"] },
                filter(event, player) {
                    if (player.isPISameClanFor(event.player)) return false;
                    const func = event.name === "link" ? "isLinked" : "isTurnedOver";
                    return event.player[func] || event.player.countMark("PIlingran") < player.maxHp;
                },
                forced: true,
                locked: false,
                logTarget: "player",
                content() {
                    const target = trigger.player;
                    if (target[trigger.name === "link" ? "isLinked" : "isTurnedOver"]) {
                        if (target.hasMark("PIliran_mark")) target.chooseToDiscard(Math.max(1, player.getDamagedHp()), "he", true);
                        else if (target.canGanran()) target.addPIliranMark();
                    } else {
                        target.addMark("PIlingran", 1);
                        player.draw();
                    }
                },
                intro: {
                    name2: "怨",
                    content: "mark",
                },
                markimage: "extension/瘟疫公司/image/card/PIgenshin.png", //怨深[doge]
            },
            PIyuanzu: {
                mark: true,
                markimage: "extension/瘟疫公司/image/card/PIyuanzu_false_mark.png",
                intro: {
                    content(storage) {
                        return (
                            (() => {
                                if (storage) return "当你受到感染角色对你造成的伤害时，若当前回合角色为你/当前回合角色不为你，则你可以防止此伤害/令伤害来源武将牌翻面。";
                                return "当你对感染角色造成伤害时，若当前回合角色为你/当前回合角色不为你，则你可以令此伤害+[1]/令受伤角色横置武将牌。";
                            })() + "然后你令其获得[1]枚“怨”标记。若你的体力值小于其体力值，则本次技能流程执行中的[ ]数值+1。"
                        );
                    },
                },
                zhuanhuanji: true,
                $zhuanhuanji(skill, player) {
                    lib.skill[skill].markimage = `extension/瘟疫公司/image/card/PIyuanzu_${Boolean(player.storage[skill])}_mark.png`;
                    if (player.marks[skill]) (player.marks[skill].text ? player.marks[skill].text : player.marks[skill]).setBackgroundImage(lib.skill[skill].markimage);
                },
                trigger: {
                    source: "damageBegin2",
                    player: "damageBegin3",
                },
                filter(event, player, name) {
                    const target = lib.skill.PIyuanzu.logTarget(event, player, name);
                    if (!target?.isIn() || !target.hasMark("PIliran_mark")) return false;
                    return !(name === "damageBegin2" && _status.currentPhase !== player) || !target.isLinked();
                },
                prompt2(event, player, name) {
                    return lib.skill.PIyuanzu.intro.content(player.storage?.PIyuanzu);
                },
                check(event, player, name) {
                    const goon = _status.currentPhase === player;
                    const target = lib.skill.PIyuanzu.logTarget(event, player, name);
                    if (name === "damageBegin2") return (goon ? get.damageEffect(target, player, player, event.nature) : get.effect(target, { name: "tiesuo" }, player, player)) > 0;
                    return goon ? get.damageEffect(player, target, player, event.nature) < 0 : !target.isTurnedOver() === Math.sign(Math.sign(get.attitude(player, target)) - 0.5) < 0;
                },
                logTarget: (event, player, name) => event[["player", "source"][parseInt(name.slice(-1)) - 2]],
                content() {
                    player.changeZhuanhuanji(event.name);
                    const [target] = event.targets,
                        goon = _status.currentPhase === player,
                        num = 1 + (target.getHp() > player.getHp());
                    if (event.triggername === "damageBegin2") {
                        if (goon) trigger.num += num;
                        else target.link(true);
                    } else {
                        if (goon) trigger.cancel();
                        else target.turnOver();
                    }
                    if (target.countMark("PIlingran") < player.maxHp) target.addMark("PIlingran", Math.min(2, player.maxHp - target.countMark("PIlingran")));
                },
            },
            PIxincu: {
                trigger: { global: ["dying", "dyingAfter"] },
                filter(event, player, name) {
                    if (!event.player.hasMark("PIliran_mark")) return false;
                    return name !== "dying" || game.hasPlayer(target => target.hasMark("PIliran_mark") && !target.isLinked());
                },
                forced: true,
                logTarget: "player",
                async content(event, trigger, player) {
                    if (event.triggername === "dying") {
                        const result = await player
                            .chooseTarget(
                                [1, Math.max(1, player.getDamagedHp())],
                                (card, player, target) => {
                                    return target.hasMark("PIliran_mark") && !target.isLinked();
                                },
                                "心猝：选择横置至多" + get.cnNumber(Math.max(1, player.getDamagedHp())) + "名感染角色",
                                true
                            )
                            .set("ai", target => {
                                const player = get.player();
                                return get.effect(target, { name: "tiesuo" }, player, player);
                            })
                            .forResult();
                        if (result?.bool && result.targets?.length) {
                            const targets = result.targets.sortBySeat();
                            player.line(targets);
                            for (const i of targets) await i.link(true);
                        }
                    } else await trigger.player.turnOver();
                    if (_status.currentPhase === player) await trigger.player.damage();
                },
                group: "PIxincu_qj",
                subSkill: {
                    qj: {
                        //致敬传奇城市鹰郡
                        trigger: { global: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
                        filter(event, player) {
                            return event.player.hasMark("PIlingran");
                        },
                        forced: true,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const target = trigger.player,
                                num = target.countMark("PIlingran");
                            target.clearMark("PIlingran");
                            await player.gainPlayerCard(target, "he", num, true);
                            if (target.countCards("h") <= player.countCards("h")) {
                                const sha = new lib.element.VCard({ name: "sha", nature: "ill" });
                                if (player.canUse(sha, target, false)) await player.useCard(sha, target, false).set("oncard", () => get.event().player.chat("这是报应！"));
                            }
                        },
                    },
                },
            },
            //汉坦病毒
            PIfeizhong: {
                trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                getIndex(event, player) {
                    return game.filterPlayer(target => (event.getg?.(target) ?? []).length > 0).sortBySeat();
                },
                filter(event, player, name, target) {
                    if (!target?.isIn() || _status.currentPhase === target) return false;
                    return target.hasMark("PIliran_mark") && target.countCards("h");
                },
                logTarget: (event, player, name, target) => target,
                check(event, player, name, target) {
                    return get.attitude(player, target) < 0;
                },
                round: 1,
                async content(event, trigger, player) {
                    const target = event.indexedData;
                    const result = await player.choosePlayerCard(target, "h", true).forResult();
                    if (result?.bool && result.cards?.length) {
                        player.addSkill("PIfeizhong_attack");
                        await player.showCards(result.cards, get.translation(player) + "对" + get.translation(target) + "发动了【" + get.translation(event.name) + "】");
                        target.addTempSkill("PIfeizhong_effect", { player: "phaseEnd" });
                        target.markAuto("PIfeizhong_effect", result.cards);
                    }
                },
                subSkill: {
                    attack: {
                        charlotte: true,
                        trigger: { global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"] },
                        getIndex(event, player) {
                            return game.filterPlayer(target => (event.getl?.(target)?.hs ?? []).length > 0);
                        },
                        filter(event, player, name, target) {
                            if (!target?.isIn()) return false;
                            const storage = target.getStorage("PIfeizhong_effect");
                            return event.getl(target).hs.some(card => {
                                return storage.some(cardx => {
                                    return ["type2", "name", "color", "number"].some(item => get[item](cardx) === get[item](card));
                                });
                            });
                        },
                        forced: true,
                        logTarget: (event, player, name, target) => target,
                        async content(event, trigger, player) {
                            const target = event.indexedData;
                            const cards = trigger.getl(target).hs,
                                storage = target.getStorage("PIfeizhong_effect");
                            const items = ["type2", "name", "color", "number"].filter(item => {
                                return cards.some(card => storage.some(cardx => get[item](cardx) === get[item](card)));
                            });
                            for (const item of items) {
                                switch (item) {
                                    case "type2":
                                        const sha = new lib.element.VCard({ name: "sha", nature: "ill" });
                                        if (player.canUse(sha, target, false)) await player.useCard(sha, target, false);
                                        break;
                                    case "name":
                                        player.line(target);
                                        await target.damage();
                                        break;
                                    case "color":
                                        await player.draw();
                                        break;
                                    case "number":
                                        player.line(target);
                                        await player.discardPlayerCard(target, "he", true);
                                        break;
                                }
                            }
                        },
                    },
                    effect: {
                        charlotte: true,
                        onremove: true,
                        intro: {
                            mark(dialog, content = []) {
                                if (content.length > 0) dialog.addSmall(content);
                                else return "暂无卡牌";
                            },
                        },
                        mod: {
                            cardEnabled2(card, player) {
                                if (
                                    player.getStorage("PIfeizhong_effect").some(cardx => {
                                        return get.color(cardx, player) === get.color(cardx);
                                    })
                                )
                                    return false;
                            },
                        },
                    },
                },
            },
            PIshenshuai: {
                trigger: { global: "phaseJieshuBegin" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark");
                },
                forced: true,
                locked: false,
                logTarget: "player",
                async content(event, trigger, player) {
                    const target = trigger.player,
                        num = target.getHistory("lose", evt => evt.type === "discard" && evt.getParent("phaseDiscard", true)).reduce((sum, evt) => sum + evt.cards2.length, 0);
                    if (!num) {
                        if (target.maxHp > 0) await target.chooseToDiscard(target.maxHp, "h", true);
                        await target.loseHp();
                    }
                    if (num >= target.getHp()) await target.damage();
                    if (num <= target.getHp() && num > 0) await player.draw(num);
                },
            },
            PIdiaozang: {
                limited: true,
                enable: "phaseUse",
                filter(event, player) {
                    return game.hasPlayer(target => get.info("PIdiaozang").filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return target.hasMark("PIliran_mark") && target.maxHp > 0;
                },
                skillAnimation: true,
                animationColor: "fire",
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    const target = event.target;
                    await target.draw(target.maxHp);
                    let num = Math.max(2, Math.abs(target.countCards("h") - target.maxHp));
                    while (num > 0) {
                        num--;
                        const result = await player
                            .judge()
                            .set("callback", () => {
                                if (event.judgeResult.color === "black") {
                                    player.addSkill("PIdiaozang_effect");
                                    if (get.position(card, true) === "o") player.gain(card, "gain2").gaintag.add("PIdiaozang_effect");
                                    player.draw().gaintag.add("PIdiaozang_effect");
                                }
                            })
                            .forResult();
                        if (result.color === "red") {
                            player.addSkill("PIdiaozang_effect");
                            const next = player.gainPlayerCard(target, "he", true);
                            next.gaintag.add("PIdiaozang_effect");
                            await next;
                        }
                    }
                    await target.phaseDiscard();
                    await target.phaseJieshu();
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return player.hasUnknown() ? 0 : -Math.max(2, target.countCards("h"));
                        },
                    },
                },
                markimage: "extension/瘟疫公司/image/card/PIdiao_mark.png",
                subSkill: {
                    effect: {
                        charlotte: true,
                        mod: {
                            mod: {
                                ignoredHandcard(card) {
                                    if (card.hasGaintag("PIdiaozang_effect")) return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name === "phaseDiscard" && card.hasGaintag("PIdiaozang_effect")) return false;
                                },
                                cardUsable(card, player) {
                                    if (!card.cards || card.cards.length !== 1) return;
                                    if (card.cards[0].hasGaintag("PIdiaozang_effect")) return Infinity;
                                },
                            },
                        },
                        trigger: { player: "useCard0" },
                        filter(event, player) {
                            if (event.addCount === false) return false;
                            return player.hasHistory("lose", evt => {
                                if (evt.getParent() !== event) return false;
                                return Object.values(evt.gaintag_map).flat().includes("PIdiaozang_effect");
                            });
                        },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.addCount = false;
                            trigger.player.getStat().card[trigger.card.name]--;
                        },
                    },
                },
            },
            //拉沙病毒
            PIganshuai: {
                trigger: { global: "recoverEnd" },
                filter(event, player) {
                    const target = event.player;
                    return target.hasMark("PIliran_mark") && !player.getStorage("PIganshuai_used").includes(target);
                },
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    const result = await player
                        .chooseControl(
                            (() => {
                                let list = ["摸牌"];
                                if (target.countDiscardableCards(target, "he")) list.push("弃牌");
                                return list;
                            })(),
                            "cancel2"
                        )
                        .set("ai", () => {
                            const player = get.player(),
                                target = get.event().getTrigger().player,
                                num = Math.max(1, target.getDamagedHp()) + 1;
                            const sha = new lib.element.VCard({ name: "sha", nature: "ill" });
                            const map = {
                                摸牌: (() => {
                                    let eff = get.effect(player, { name: "draw" }, player, player) * num;
                                    if (player.countCards("h") + num > target.countCards("h")) {
                                        if (player.canUse(sha, target, false)) eff += get.effect(target, sha, player, player) * num;
                                    }
                                    return eff;
                                })(),
                                弃牌: (() => {
                                    const num2 = Math.min(target.countDiscardableCards(target, "he"), num);
                                    let eff = get.effect(target, { name: "guohe_copy2" }, player, player) * num2;
                                    const filter = card =>
                                        !target
                                            .getDiscardableCards(target, "he")
                                            .slice()
                                            .sort((a, b) => get.value(a) - get.value(b))
                                            .slice(0, num2)
                                            .includes(card);
                                    if (player.countCards("h", filter) + num > target.countCards("h", filter)) {
                                        if (player.canUse(sha, target, false)) eff += get.effect(target, sha, player, player) * num;
                                    }
                                    return eff;
                                })(),
                                cancel2: 0,
                            };
                            return get
                                .event()
                                .controls.slice()
                                .sort((a, b) => map[b] || 0 - map[a] || 0)[0];
                        })
                        .set("prompt", get.prompt2("PIganshuai", target))
                        .forResult();
                    const control = result.control;
                    event.result = { bool: typeof control === "string" && control !== "cancel2", cost_data: control };
                },
                logTarget: "player",
                async content(event, trigger, player) {
                    const target = trigger.player,
                        num = Math.max(1, target.getDamagedHp());
                    player.addTempSkill("PIganshuai_used", "roundStart");
                    player.markAuto("PIganshuai_used", [target]);
                    if (event.cost_data === "摸牌") await player.draw(num + 1);
                    else await target.chooseToDiscard([num + 1, Infinity], "he", true);
                    if (target.countCards("h") < player.countCards("h")) {
                        const sha = new lib.element.VCard({ name: "sha", nature: "ill", storage: { PIganshuai: num } });
                        if (player.canUse(sha, target, false)) {
                            await player.useCard(sha, target, false).set("oncard", () => {
                                const event = get.event(),
                                    num = event.card.storage.PIganshuai;
                                event.effectCount += num;
                                game.log(event.card, "额外结算", "#y" + num, "次");
                            });
                        }
                    }
                },
                subSkill: {
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                },
            },
            PIxuekui: {
                trigger: { global: "loseHpEnd" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark");
                },
                forced: true,
                logTarget: "player",
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const num = player.getRoundHistory("useSkill", evt => evt.skill === "PIxuekui" && evt.targets[0] === target).length;
                    const result = await target
                        .chooseToGive(player, "he", { color: "red" })
                        .set("ai", card => {
                            const { player, target } = get.event();
                            return -get.damageEffect(player, target, player) - get.value(card);
                        })
                        .set("prompt", "交给" + get.translation(player) + "一张红色牌，或受到其对你造成的" + num + "点伤害")
                        .forResult();
                    if (!result?.bool) await target.damage(num);
                },
            },
            PIbengzang: {
                limited: true,
                enable: "phaseUse",
                filter(event, player) {
                    return player.hasCard(card => get.info("PIbengzang").filterCard(card, player), "he") && game.hasPlayer(target => target.hasMark("PIliran_mark"));
                },
                filterCard(card, player) {
                    return lib.filter.cardDiscardable(card, player) && get.color(card) === "red";
                },
                position: "he",
                selectCard: [1, Infinity],
                check(card) {
                    return 8 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return target.hasMark("PIliran_mark");
                },
                selectTarget: () => ui.selected.cards.length,
                complexSelect: true,
                multiline: true,
                multitarget: true,
                skillAnimation: true,
                animationColor: "fire",
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    const targets = event.targets.sortBySeat();
                    const result = await player.judge().forResult();
                    for (const target of targets) {
                        if (result.color === "red") {
                            const next = target.recover();
                            delete next.filterStop;
                            next.setContent(async function (event, trigger, player) {
                                const num = event.num;
                                if (num > 0) {
                                    game.broadcastAll(player => {
                                        if (lib.config.background_audio) game.playAudio("effect", "recover");
                                        if (lib.config.animation && !lib.config.low_performance) player.$recover();
                                    }, player);
                                    player.$damagepop(num, "wood");
                                    game.log(player, "视为回复了" + get.cnNumber(num) + "点体力");
                                    const next = player.changeHp(num, false);
                                    next.setContent(async function (event, trigger, player) {
                                        game.getGlobalHistory().changeHp.push(event);
                                        await event.trigger("changeHp");
                                    });
                                    await next;
                                } else event._triggered = null;
                            });
                            await next;
                        }
                        if (result.color === "black") target.addTempSkill("PIbengzang_ban");
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return player.hasUnknown() ? 0 : -1;
                        },
                    },
                },
                markimage: "extension/瘟疫公司/image/card/PIbengzang_mark.png",
                subSkill: {
                    ban: {
                        charlotte: true,
                        mod: {
                            cardEnabled2(card) {
                                if (get.position(card) === "h") return false;
                            },
                        },
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIbengzang_effect.png",
                        intro: { conteot: "不能使用或打出手牌" },
                        trigger: { global: "phaseEnd" },
                        filter(event, player) {
                            return player.isHealthy() || player.countDiscardableCards(player, "h");
                        },
                        forced: true,
                        popup: false,
                        content() {
                            if (player.isHealthy()) player.loseHp();
                            else player.chooseToDiscard(Math.max(1, player.getDamagedHp()), "h", true);
                        },
                    },
                },
            },
            //创伤弧菌
            PIchuangran: {
                trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
                filter(event, player) {
                    return game.hasPlayer(target => {
                        if (target.isHealthy()) return false;
                        if (event.name === "phaseZhunbei") return target.canGanran();
                        return target.hasMark("PIliran_mark") && player.canUse(new lib.element.VCard({ name: "sha", nature: "ill" }), target, false);
                    });
                },
                async cost(event, trigger, player) {
                    let str = lib.translate[event.skill + "_info"].split("①").join("").split("②"),
                        name = trigger.name;
                    event.result = await player
                        .chooseTarget(
                            get.prompt(event.skill),
                            (card, player, target) => {
                                if (target.isHealthy()) return false;
                                if (get.event().triggerName === "phaseZhunbei") return target.canGanran();
                                return target.hasMark("PIliran_mark") && player.canUse(new lib.element.VCard({ name: "sha", nature: "ill" }), target, false);
                            },
                            str[name === "phaseZhunbei" ? 0 : 1]
                        )
                        .set("triggerName", name)
                        .set("ai", target => {
                            const { player, triggerName } = get.event();
                            if (triggerName === "phaseZhunbei") return -get.attitude(player, target);
                            return get.effect(target, new lib.element.VCard({ name: "sha", nature: "ill" }), player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    if (trigger.name === "phaseZhunbei") await target.addPIliranMark();
                    else {
                        const next = player.useCard(new lib.element.VCard({ name: "sha", nature: "ill" }), target, false);
                        await next;
                        if (player.hasHistory("sourceDamage", evt => evt.getParent(next.name) === next)) {
                            if (game.hasPlayer(current => current.canGanran() && [target.getNext(), target.getPrevious()].includes(current))) {
                                const result = await player
                                    .chooseTarget((card, player, current) => {
                                        const target = get.event().target;
                                        return current.canGanran() && [target.getNext(), target.getPrevious()].includes(current);
                                    }, "是否感染" + get.translation(target) + "邻位的一名角色？")
                                    .set("target", target)
                                    .set("ai", target => {
                                        const player = get.player();
                                        return -get.attitude(player, target);
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    player.line(result.targets);
                                    await result.targets[0].addPIliranMark();
                                }
                            }
                        }
                    }
                },
            },
            PIshangyan: {
                trigger: { player: "useCardToPlayered" },
                filter(event, player) {
                    if (event.getParent(2).name === "PIshangyan_effect") return false;
                    if (!event.target.hasMark("PIliran_mark") || !(get.tag(event.card, "damage") >= 0.5)) return false;
                    const trigger = event.getParent();
                    return game.hasPlayer(target => {
                        if (trigger.targets.includes(target) || target.isHealthy() || !target.hasMark("PIliran_mark")) return false;
                        return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                    });
                },
                async cost(event, trigger, player) {
                    const result = await player
                        .chooseTarget(
                            get.prompt2(event.skill, trigger.target),
                            (card, player, target) => {
                                const trigger = get.event().getTrigger();
                                if (trigger.targets.includes(target) || target.isHealthy() || !target.hasMark("PIliran_mark")) return false;
                                return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                            },
                            [1, Infinity]
                        )
                        .set("ai", target => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return get.effect(target, trigger.card, trigger.player, player);
                        })
                        .forResult();
                    if (result?.bool && result.targets?.length) {
                        event.result = {
                            bool: true,
                            cost_data: result.targets.sortBySeat(),
                        };
                    } else event.result = { bool: false };
                },
                logTarget: "target",
                async content(event, trigger, player) {
                    await game.delayx();
                    const targets = event.cost_data,
                        target = trigger.target;
                    player.line(targets);
                    trigger.targets.addArray(targets);
                    trigger.getParent().targets.addArray(targets);
                    game.log(targets, "成为了", trigger.card, "的额外目标");
                    if (target.getHp() >= player.getHp()) await target.chooseToDiscard("he", true);
                    if (target.getHp() <= player.getHp()) await player.draw();
                    player.addTempSkill(event.name + "_effect");
                    player.markAuto(event.name + "_effect", [trigger.card]);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        trigger: { global: "useCardAfter" },
                        filter(event, player) {
                            if (!player.getStorage("PIshangyan_effect").includes(event.card)) return false;
                            const targets = event.targets,
                                card = get.copy(event.card);
                            return Array.isArray(targets) && targets.every(i => i.countCards("h") < player.countCards("h")) && targets.some(i => player.canUse(card, i, false));
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget(get.prompt2(event.skill, trigger.target), (card, player, target) => {
                                    const trigger = get.event().getTrigger();
                                    return trigger.targets.includes(target) && player.canUse(get.copy(trigger.card), target, false);
                                })
                                .set("ai", target => {
                                    const player = get.player(),
                                        trigger = get.event().getTrigger();
                                    return get.effect(target, get.copy(trigger.card), trigger.player, player);
                                })
                                .forResult();
                        },
                        content() {
                            player.useCard(get.copy(trigger.card), event.targets, false);
                        },
                    },
                },
            },
            //黄热病
            PIhuangdan: {
                trigger: { global: "recoverBefore" },
                filter(event, player) {
                    return event.player.hasMark("PIliran_mark");
                },
                direct: true,
                async content(event, trigger, player) {
                    const target = trigger.player,
                        skill = event.name,
                        list = [skill, target];
                    const red = target.countCards("h", { color: "red" }) > target.countCards("h", { color: "black" });
                    const black = !target.countCards("h") || target.countCards("h", { color: "red" }) < target.countCards("h", { color: "black" });
                    if (red) {
                        player.logSkill(...list);
                        trigger.num--;
                        await player.draw();
                    }
                    if (black) {
                        const num = target.getDamagedHp() + 1,
                            str = get.cnNumber(num);
                        const result = await player
                            .chooseToDiscard(get.prompt(...list))
                            .set("selectCard", [0, num])
                            .set("filterOk", () => {
                                return get.event().selectCard.includes(ui.selected.cards.length);
                            })
                            .set("prompt2", "摸" + str + "张牌或弃置" + str + "张牌，视为对" + get.translation(target) + "使用病【杀】")
                            .set("logSkill", list)
                            .forResult();
                        if (result?.bool) {
                            if (!result.cards?.length) await player.draw(num);
                            const sha = new lib.element.VCard({ name: "sha", nature: "ill" });
                            if (player.canUse(sha, target, false)) await player.useCard(sha, target, false);
                        }
                    }
                },
            },
            PIjieyan: {
                trigger: { global: "damageBefore" },
                filter(event, player) {
                    return event.source?.isIn() && event.source.hasMark("PIliran_mark");
                },
                check(event, player) {
                    return get.attitude(player, event.source) < 0;
                },
                logTarget: "source",
                prompt2(event, player) {
                    const num = event.num;
                    if (num > 1) return "令其弃置伤害值张牌，否则其造成大于1点的伤害改为1点直到其回合结束";
                    return "你可以令其弃置一张伤害牌（若其弃置了红色牌，则你获得之并摸一张牌），否则其失去1点体力";
                },
                async content(event, trigger, player) {
                    const source = trigger.source;
                    if (trigger.num > 1) {
                        const result = await source.chooseToDiscard(trigger.num, "he").forResult();
                        if (!result?.bool) source.addTempSkill("PIjieyan_damage", { player: "phaseAfter" });
                    }
                    if (trigger.num === 1) {
                        const result = await source.chooseToDiscard("he", card => get.tag(card, "damage") >= 0.5).forResult();
                        if (result?.bool) {
                            if (result.cards?.some(card => get.color(card) === "red")) {
                                const cards = result.cards?.filter(card => get.position(card) === "d" && get.color(card) === "red");
                                if (cards.length) await player.gain(cards, "gain2");
                                await player.draw();
                            }
                        } else await source.loseHp();
                    }
                },
                subSkill: {
                    damage: {
                        charlotte: true,
                        mark: true,
                        markimage: "extension/瘟疫公司/image/card/PIjieyan_mark.png",
                        intro: { content: "造成大于1的伤害改为1" },
                        trigger: { source: "damageBegin4" },
                        filter(event, player) {
                            return event.num > 1;
                        },
                        forced: true,
                        content() {
                            trigger.num = 1;
                        },
                    },
                },
            },
            //腺鼠疫
            PIheili: {
                trigger: {
                    player: "useCardToPlayered",
                    target: "useCardToTargeted",
                },
                filter(event, player) {
                    if (event.player === event.target || get.color(event.card) !== "black") return false;
                    return event.player === player ? event.target.canGanran() : game.hasPlayer(i => i !== player && i.canGanran());
                },
                async cost(event, trigger, player) {
                    if (trigger.player === player) {
                        event.result = await player
                            .chooseBool(get.prompt(event.skill, trigger.target), "感染" + get.translation(trigger.target))
                            .set("choice", get.attitude(player, trigger.target) < 0)
                            .forResult();
                        event.result.targets = [trigger.target];
                    } else {
                        event.result = await player
                            .chooseTarget(get.prompt(event.skill), "感染一名其他角色", (card, player, target) => {
                                return target.canGanran();
                            })
                            .set("ai", target => get.attitude(get.player(), target) < 0)
                            .forResult();
                    }
                },
                async content(event, trigger, player) {
                    await event.targets[0].addPIliranMark();
                },
            },
            PIhuayi: {
                trigger: { global: "phaseUseBegin" },
                filter(event, player) {
                    if (!event.player.hasMark("PIliran_mark") || player.countMark("PIhuayi_used") >= player.getHp()) return false;
                    return player.hasCard(card => {
                        if (get.position(card) === "h" && _status.connectMode) return true;
                        return lib.filter.cardDiscardable(card, player);
                    }, "he");
                },
                async cost(event, trigger, player) {
                    const target = trigger.player,
                        list = [event.skill, target];
                    event.result = await player
                        .chooseToDiscard(get.prompt2(...list), { color: "black" }, "he")
                        .set("ai", card => {
                            const {
                                player,
                                logSkill: [skill, target],
                            } = get.event();
                            return get.effect(target, new lib.element.VCard({ name: "sha" }), player, player) > 0 ? 7 - get.value(card) : 0;
                        })
                        .set("logSkill", list)
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    player.addTempSkill("PIhuayi_used", "roundStart");
                    player.addMark("PIhuayi_used", 1, false);
                    const target = trigger.player;
                    const result = await player.judge().forResult();
                    if (result.color === "red") {
                        player.removeMark("PIhuayi_used", 1, false);
                        if (get.position(result.card) === "d") await player.gain(result.card, "gain2");
                        await player.draw();
                    }
                    if (result.color === "black") {
                        let directHit = false;
                        const sha = new lib.element.VCard({ name: "sha", nature: "ill" });
                        const result = await target
                            .chooseCard(
                                "he",
                                (card, player) => {
                                    const color = get.color(card);
                                    if (!["red", "black"].includes(color)) return false;
                                    return color !== "red" || lib.filter.cardDiscardable(card, player);
                                },
                                "交给" + get.translation(player) + "一张黑色牌或弃置一张红色牌，否则失去1点体力" + (player.canUse(sha, target, false) ? "且不可响应" + get.translation(sha) : "")
                            )
                            .set("ai", card => {
                                const {
                                    player,
                                    list: [source, sha],
                                } = get.event();
                                return -get.effect(player, { name: "losehp" }, player, player) - (source.canUse(sha, player, false) ? get.effect(player, sha, source, player) : 0) - get.value(card);
                            })
                            .set("list", [player, sha])
                            .forResult();
                        if (result?.bool && result.cards?.length) {
                            const [card] = result.cards;
                            if (get.color(card) === "red") await target.discard([card]);
                            else await target.give([card], player);
                        } else {
                            await player.loseHp();
                            directHit = true;
                        }
                        if (player.canUse(sha, target, false)) {
                            const next = player.useCard(sha, target, false);
                            if (directHit) {
                                next.set("oncard", () => {
                                    const event = get.event();
                                    event.directHit.addArray(event.targets);
                                });
                            }
                            await next;
                        }
                    }
                },
                subSkill: {
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                },
            },
            PImoyi: {
                trigger: { source: "damageEnd" },
                filter(event, player) {
                    if (_status.currentPhase === player || !event.card || event.card.name !== "sha") return false;
                    return (
                        event.player.isIn() &&
                        event.player.hasMark("PIliran_mark") &&
                        game.hasPlayer(target => {
                            if (![event.player.getNext(), event.player.getPrevious()].includes(target)) return false;
                            return target.hasMark("PIliran_mark") && player.canUse(get.autoViewAs(event.card, [event.cards ?? []]), target, false);
                        })
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt2(event.skill),
                            (card, player, target) => {
                                const event = get.event().getTrigger();
                                if (![event.player.getNext(), event.player.getPrevious()].includes(target)) return false;
                                return target.hasMark("PIliran_mark") && player.canUse(get.autoViewAs(event.card, [event.cards ?? []]), target, false);
                            },
                            [1, 2]
                        )
                        .set("ai", target => {
                            const player = get.player(),
                                event = get.event().getTrigger();
                            return get.effect(target, get.autoViewAs(event.card, [event.cards ?? []]), player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    await player.loseHp(targets.length);
                    player.addTempSkill("PImoyi_effect");
                    await player.useCard(get.autoViewAs(trigger.card, [trigger.cards ?? []]), targets, false);
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { global: ["dying", "die"] },
                        filter(event, player) {
                            const evt = event.getParent("PImoyi");
                            if (!evt || evt.player !== player) return false;
                            return event.player.hasMark("PIliran_mark") && event.player.hasCard({ color: "black" }, "he");
                        },
                        async cost(event, trigger, player) {
                            if (trigger.name === "dying") event.result = { bool: true };
                            else {
                                const target = trigger.player;
                                event.result = await player
                                    .chooseBool(get.prompt(event.skill, target), "失去2点体力，获得其所有黑色牌")
                                    .set(
                                        "choice",
                                        (() => {
                                            return get.effect(player, { name: "losehp" }, player, player) * 2 < target.getCards("he", { color: "black" }).reduce((sum, card) => sum + get.value(card), 0);
                                        })()
                                    )
                                    .forResult();
                            }
                        },
                        logTarget: "player",
                        async content(event, trigger, player) {
                            if (trigger.name === "dying") await player.chooseDrawRecover(2, true);
                            else {
                                const target = trigger.player;
                                await player.loseHp(2);
                                await player.gain(target.getCards("he", { color: "black" }), target, "giveAuto");
                            }
                        },
                    },
                },
            },
            //雅典大瘟疫
            PIliaoyi: {
                trigger: {
                    player: 'PIhunji',
                    global: 'roundStart',
                },
                filter(event, player) {
                    return game.hasPlayer(target => target !== player);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.skill), lib.filter.notMe).set('ai', target => {
                        const player = get.player(), group = get.mode() === 'guozhan' ? 'identity' : 'group';
                        const groups = [target[group], target.getNext()[group]];
                        return game.countPlayer(i => {
                            if (groups.includes(i[group])) {
                                if (i.canGanran()) return -get.attitude(player, i);
                                else if (i.hasMark('PIliran_mark')) return get.effect(i, { name: 'guohe_copy2' }, i, player) + get.effect(player, { name: 'draw' }, player, player);
                                else return 0;
                            }
                            return 0;
                        });
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0], group = get.mode() === 'guozhan' ? 'identity' : 'group';
                    const groups = [target[group], target.getNext()[group]], targets = game.filterPlayer(i => groups.includes(i[group]));
                    player.line(targets);
                    for (const i of targets) {
                        if (i.canGanran()) await i.addPIliranMark();
                        else if (i.hasMark('PIliran_mark')) {
                            await i.chooseToDiscard('he', true);
                            await player.draw();
                        }
                    }
                },
                ai: { expose: 0.2 },
            },
            PIreli: {
                trigger: { global: ['gainAfter', 'loseAsyncAfter'] },
                getIndex(event, player) {
                    return game.filterPlayer(target => {
                        if (!target.hasMark('PIliran_mark') || _status.currentPhase === target) return false;
                        return event.getg(target).some(i => get.owner(i) === target && get.position(i) === target);
                    });
                },
                logTarget: (event, player, name, target) => target,
                check(event, player, name, target) {
                    return get.attitude(player, target) < 0;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0], cards = trigger.getg(target).filter(i => get.owner(i) === target && get.position(i) === target);
                    const videoId = lib.status.videoId++;
                    game.broadcastAll((player, target, id, cards) => {
                        if (player !== game.me) return;
                        const dialog = ui.create.dialog(`${get.translation(target)}获得的手牌`, cards);
                        dialog.videoId = id;
                    }, player, target, videoId, cards);
                    const time = get.utc();
                    game.addVideo('showCards', player, [`${get.translation(target)}获得的手牌`, get.cardsInfo(cards)]);
                    await game.delay(2.5);
                    let result, choice = [], choiceList = [];
                    if (cards.some(i => get.tag(i, 'damage') >= 0.5) && player.canUse(new lib.element.VCard({ name: i.name, nature: i.nature }), target, false)) {
                        choice.push('伤害牌');
                    }
                    if (target.countCards('h') > target.getHp() || cards.every(i => lib.filter.cardDiscardable(i, target, 'PIreli'))) {
                        choice.push('弃置牌');
                    }
                    if (choice.length > 0) {
                        if (choice.length > 1) {
                            game.broadcastAll((player, id) => {
                                const dialog = get.idDialog(id);
                                if (player === game.me && !_status.auto) {
                                    dialog.content.childNodes[0].textContent = `${get.translation('PIreli')}：请选择一项`;
                                }
                            }, player, videoId);
                            result = await player.chooseControl(choice).set('ai', () => {
                                const { player, target, cards } = get.event();
                                const eff1 = Math.max.apply(cards.filter(i => {
                                    return get.tag(i, 'damage') >= 0.5 && player.canUse(new lib.element.VCard({ name: i.name, nature: i.nature }), target, false);
                                }).map(i => get.effect(target, new lib.element.VCard({ name: i.name, nature: i.nature }), player, player)));
                                const eff2 = Math.max(...(() => {
                                    let list = [];
                                    if (target.countCards('h') > target.getHp()) list.push(get.effect(target, { name: 'guohe_copy', position: 'h' }, target, player) * (target.countCards('h') - target.getHp()));
                                    if (cards.every(i => lib.filter.cardDiscardable(i, target, 'PIreli'))) list.push(cards.reduce((sum, i) => sum + get.value(i), 0));
                                    return list;
                                })());
                                return eff2 >= eff1 ? 1 : 0;
                            }).set('target', target).set('cards', cards).forResult();
                        }
                        else result = { control: choice[0] };
                        if (result?.control) {
                            switch (result.control) {
                                case '伤害牌':
                                    game.broadcastAll((player, target, id) => {
                                        const dialog = get.idDialog(id);
                                        if (player === game.me && !_status.auto) {
                                            dialog.content.childNodes[0].textContent = `选择一张伤害牌，视为对${get.translation(target)}使用之。若其手牌数大于体力其体力值，则其不可响应且此牌结算完毕后你获得选择的牌`;
                                        }
                                    }, player, target, videoId);
                                    result = await player.chooseButton(true).set('filterTarget', button => {
                                        const { player, target } = get.event(), i = button.link, goon = target.countCards('h') > target.getHp();
                                        const vcard = new lib.element.VCard({ name: i.name, nature: i.nature, storage: { PIreli: goon } });
                                        return player.canUse(vcard, target, false);
                                    }).set('ai', button => {
                                        const { player, target } = get.event(), i = button.link, goon = target.countCards('h') > target.getHp();
                                        const vcard = new lib.element.VCard({ name: i.name, nature: i.nature, storage: { PIreli: goon } });
                                        return get.effect(target, vcard, player, player) + (goon ? get.value(i) : 0);
                                    }).set('target', target).set('dialog', videoId).forResult();
                                    const time2 = 1000 - (get.utc() - time);
                                    if (time2 > 0) await game.delay(0, time2);
                                    game.broadcastAll('closeDialog', videoId);
                                    if (result?.bool && result?.links?.length) {
                                        const i = result.links[0], goon = target.countCards('h') > target.getHp();
                                        const vcard = new lib.element.VCard({ name: i.name, nature: i.nature, storage: { PIreli: goon } });
                                        if (player.canUse(vcard, target, false)) {
                                            const next = player.useCard(vcard, target, false);
                                            next.oncard = function () {
                                                const trigger = get.event();
                                                if (trigger.card?.storage?.PIreli) {
                                                    trigger.directHit.addArray(game.players);
                                                    game.log(trigger.card, '不可被响应');
                                                }
                                            };
                                            await next;
                                            if (goon && get.owner(i) === target && get.position(i) === 'h') await player.gain(i, target, 'giveAuto');
                                        }
                                    }
                                    break;
                                case '弃置牌':
                                    const time3 = 1000 - (get.utc() - time);
                                    if (time3 > 0) await game.delay(0, time3);
                                    game.broadcastAll('closeDialog', videoId);
                                    choice = [];
                                    if (target.countCards('h') > target.getHp()) {
                                        choice.push('弃至体力值');
                                        choiceList.push(`弃置${get.cnNumber(target.countCards('h') - target.getHp())}张手牌`);
                                    }
                                    if (cards.every(i => lib.filter.cardDiscardable(i, target, 'PIreli'))) {
                                        choice.push('弃置获得牌');
                                        choiceList.push(`弃置${get.translation(cards)}`);
                                    }
                                    if (choice.length > 0) {
                                        result = {};
                                        if (choice.length > 1) {
                                            result = await target.chooseControl(choice).set('ai', () => {
                                                const { player, cards } = get.event();
                                                const eff1 = get.effect(player, { name: 'guohe_copy', position: 'h' }, player, player) * (player.countCards('h') - player.getHp());
                                                const eff2 = cards.reduce((sum, i) => sum - get.value(i), 0);
                                                return eff2 >= eff1 ? 1 : 0;
                                            }).set('choiceList', choiceList).set('cards', cards).forResult();
                                        }
                                        else result = { control: choice[0] };
                                        if (result?.control) {
                                            let discards;
                                            switch (result.control) {
                                                case '弃至体力值':
                                                    discards = await target.chooseToDiscard('h', target.countCards('h') - target.getHp(), true);
                                                    break;
                                                case '弃置获得牌':
                                                    discards = cards;
                                                    await target.discard(cards);
                                                    break;
                                            }
                                            if (Array.isArray(discards) && discards.length > 1) await target.loseHp();
                                        }
                                    }
                                    break;
                            }
                            return;
                        }
                    }
                    const time2 = 1000 - (get.utc() - time);
                    if (time2 > 0) await game.delay(0, time2);
                    game.broadcastAll('closeDialog', videoId);
                },
                ai: {
                    expose: 0.2,
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg?.card?.storage?.PIreli;
                    },
                },
            },
            PIhunji: {
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.getHp() > 0 && game.hasPlayer(target => target.hasMark('PIliran_mark') && target.getHp() === 1);
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                        return target.hasMark('PIliran_mark') && target.getHp() === 1;
                    }, [1, player.getHp()]).set('ai', target => {
                        return -get.attitude(get.player(), target);
                    }).forResult();
                },
                async content(event, trigger, player) {
                    let count = 0;
                    const targets = event.targets.sortBySeat();
                    for (const target of targets) {
                        const result = await target.chooseToUse(`是否对距离最小且不与${get.translation(player)}同族的角色使用一张伤害牌？`, function (card) {
                            if (!(get.tag(card, 'damage') >= 0.5)) return false;
                            return lib.filter.filterCard.apply(this, arguments);
                        }, function (card, player, target) {
                            if (target.isPISameClanFor(get.event().source)) return false;
                            const dist = get.distance(player, target);
                            if (dist > 1 && game.hasPlayer(current => current !== player && get.distance(player, current) < dist)) return false;
                            return lib.filter.filterTarget.apply(this, arguments);
                        }
                        ).set('ai2', function () {
                            return get.effect_use.apply(this, arguments) + get.event().effect;
                        }).set('source', player).set('effect', (() => {
                            let eff = 0, cards = target.getDiscardableCards(target, 'e');
                            if (cards.length > 0) {
                                eff += get.effect(target, { name: 'guohe_copy', position: 'e' }, target, target) * cards.length;
                                if (cards.length >= 2) eff += get.effect(target, { name: 'losehp' }, target, target);
                            }
                            if (player.canUse(new lib.element.VCard({ name: 'sha', nature: 'ill' }), target, false)) {
                                eff += get.effect(target, new lib.element.VCard({ name: 'sha', nature: 'ill' }), player, target);
                            }
                            return eff;
                        })()).set('addCount', false).forResult();
                        if (!result?.bool || !target.hasHistory('sourceDamage', evt => evt.getParent().type === 'card' && evt.getParent(4) === event)) {
                            count++;
                            const cards = target.getDiscardableCards(target, 'e'), card = new lib.element.VCard({ name: 'sha', nature: 'ill' });
                            if (cards.length > 0) {
                                await target.discard(cards);
                                if (cards.length >= 2) await target.loseHp();
                            }
                            if (player.canUse(card, target, false)) await player.useCard(card, target, false);
                        }
                    }
                    if (count >= Math.ceil(game.countPlayer(i => !i.hasMark('PIliran_mark')) / 2)) await event.trigger('PIhunji');
                },
            },
            //彩虹猫病毒
            PIcairan: {
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    if (event.player.isPISameClanFor(player)) return false;
                    return player.countMark('PIcairan_round') < player.getHp();
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    player.addTempSkill('PIcairan_round', 'roundStart');
                    player.addMark('PIcairan_round', 1, false);
                    const source = trigger.player;
                    const result = await player.judge().forResult();
                    if (result.color === 'red') {
                        if (source.canGanran()) await source.addPIliranMark();
                        else if (source.hasMark('PIliran_mark')) await source.chooseToGive(player, 'h', true, `${get.translation(event.name)}：交给${get.translation(player)}一张牌喵`);
                    }
                    if (result.suit === 'heart') {
                        trigger.getParent().excluded.add(player);
                        game.log(trigger.card, '对', player, '无效');
                    }
                    if (result.color === 'black') {
                        await player.discardPlayerCard(source, 'he', true);
                        await player.draw();
                    }
                },
                subSkill: {
                    round: {
                        charlotte: true,
                        onremove: true,
                    },
                },
            },
            PImengmiao: {
                trigger: {
                    player: 'phaseJieshuBegin',
                    global: 'phaseEnd',
                },
                filter(event, player) {
                    if (event.name === 'phase' && !event.player.getStorage('PImengmiao_ban').includes(player)) return false;
                    if (event.name === 'phaseJieshu' && !player.hasCard(card => {
                        if (_status.connectMode && get.position(card) === 'h') return true;
                        return get.tag(card, 'damage') >= 0.5;
                    }, 'he')) return false;
                    return !event.player.hasHistory('damage') && game.hasPlayer(target => {
                        if (event.name === 'phaseJieshu') return target.hasMark('PIliran_mark') && target.getHp() <= player.getHp();
                        return target !== player && !player.getStorage('PImengmiao_round').includes(target);
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseCardTarget({
                        prompt: get.prompt2(event.skill),
                        filterTarget(card, player, target) {
                            if (get.event().phaseJieshu) return target.hasMark('PIliran_mark') && target.getHp() <= player.getHp();
                            return target !== player && !player.getStorage('PImengmiao_round').includes(target);
                        },
                        filterCard(card, player) {
                            return !get.event().phaseJieshu && get.tag(card, 'damage') >= 0.5 && lib.filter.cardDiscardable(card, player, 'PImengmiao');
                        },
                        selectCard() {
                            return get.event().phaseJieshu ? -1 : 1;
                        },
                        position: 'he',
                        ai1(card) {
                            return 7 - get.value(card);
                        },
                        ai2(target) {
                            return -get.attitude(player, target) * (target.countCards('hs') + 1);
                        },
                        phaseJieshu: trigger.name === 'phaseJieshu',
                    }).forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    if (event.cards?.length) await player.discard(event.cards);
                    player.addTempSkill('PImengmiao_round', 'roundStart');
                    player.markAuto('PImengmiao_round', [target]);
                    target.addTempSkill('PImengmiao_ban', { player: 'phaseAfter' });
                    target.markAuto('PImengmiao_ban', [player]);
                },
                subSkill: {
                    round: {
                        charlotte: true,
                        onremove: true,
                        intro: { content: '本轮已对$发动过此技能' },
                    },
                    ban: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        markimage: 'extension/瘟疫公司/image/card/PImengmiao_mark.png',
                        intro: {
                            markcount: () => 0,
                            content: '回合内不能使用伤害牌',
                        },
                        mod: {
                            cardEnabled(card, player) {
                                if (_status.currentPhase === player && get.tag(card, 'damage') >= 0.5) return false;
                            },
                            cardSavable(card, player) {
                                if (_status.currentPhase === player && get.tag(card, 'damage') >= 0.5) return false;
                            },
                        },
                    },
                },
            },
            //鼻病毒
            PIganmao: {
                trigger: { global: 'roundStart' },
                frequent: true,
                async content(event, trigger, player) {
                    const result = await player.judge().set("callback", function () {
                        if (get.position(card, true) === 'o') player.gain(card, 'gain2');
                    }).forResult();
                    player.addTempSkill('PIganmao_effect', 'roundStart');
                    player.markAuto('PIganmao_effect', [result.suit]);
                    player.storage['PIganmao_effect'].sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                    player.addTip('PIganmao_effect', ['PIganmao_effect', ...player.storage['PIganmao_effect']].map(i => get.translation(i)).join(''));
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove(player, skill) {
                            player.removeTip(skill);
                            delete player.storage[skill];
                        },
                        markimage: 'extension/瘟疫公司/image/card/PIganmao_mark.png',
                        intro: { content: '$型流感已开始传播' },
                        trigger: { global: 'gainAfter' },
                        global: 'PIfanwei_global',
                        filter(event, player) {
                            if (!event.player.canGanran() && !event.player.hasMark('PIliran_mark')) return false;
                            return Array.isArray(event.PIfanwei) && event.cards.some(card => event.PIfanwei.includes(card) && player.getStorage('PIganmao_effect').includes(get.suit(card, false)));
                        },
                        forced: true,
                        logTarget: 'player',
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            if (target.canGanran()) await target.addPIliranMark();
                            else if (target.hasMark('PIliran_mark')) await player.draw();
                        },
                    },
                },
            },
            PIkesou: {
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return event.player.isIn() && event.player.hasMark('PIliran_mark');
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const result = await player.judge().set("callback", function () {
                        if (get.position(card, true) === 'o') player.gain(card, 'gain2');
                    }).forResult();
                    player.addSkill('PIkesou_effect');
                    player.storage['PIkesou_effect'][target.playerid] ??= [];
                    player.markSkill('PIkesou_effect');
                    player.storage['PIkesou_effect'][target.playerid].push([trigger.getParent('phase'), result.suit]);
                    const targets = Object.keys(player.storage['PIkesou_effect']).map(id => (_status.connectMode ? lib.playerOL : game.playerMap)[id]);
                    player.addTip('PIkesou_effect', targets.map(target => {
                        let suits = player.storage['PIkesou_effect'][target.playerid].map(i => i[1]).unique().sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                        return [target, ...suits].map(i => get.translation(i)).join('');
                    }).join('<br>'));
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] ??= {};
                        },
                        onremove(player, skill) {
                            player.removeTip(skill);
                            delete player.storage[skill];
                        },
                        markimage: 'extension/瘟疫公司/image/card/PIkesou_mark.png',
                        intro: {
                            markcount: (storage = {}) => Object.keys(storage).length,
                            content(storage = {}, player) {
                                if (!Object.keys(storage).length) return '暂时没人咳嗽233';
                                const targets = Object.keys(storage).map(id => (_status.connectMode ? lib.playerOL : game.playerMap)[id]).sortBySeat(player);
                                return targets.map(target => {
                                    let suits = player.storage['PIkesou_effect'][target.playerid].map(i => i[1]).unique().sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                                    return [target, ...suits].map(i => get.translation(i)).join('');
                                }).join('<br>');
                            },
                        },
                        trigger: { global: 'useCardAfter' },
                        filter(event, player) {
                            const target = event.player;
                            if (!player.storage['PIkesou_effect'][target.playerid]) return false;
                            return player.storage['PIkesou_effect'][target.playerid].map(i => i[1]).includes(get.suit(event.card));
                        },
                        forced: true,
                        logTarget: 'player',
                        async content(event, trigger, player) {
                            const target = trigger.player, result = await target.chooseToDiscard('he', true).forResult();
                            if (result?.bool && result.cards?.some(card => player.storage['PIkesou_effect'][target.playerid].map(i => i[1]).includes(get.suit(card, player)))) {
                                await player.draw();
                            }
                        },
                        group: 'PIkesou_clear',
                    },
                    clear: {
                        charlotte: true,
                        trigger: { player: 'phaseAfter' },
                        silent: true,
                        async content(event, trigger, player) {
                            for (const id in player.storage['PIkesou_effect']) {
                                player.storage['PIkesou_effect'][id] = player.storage['PIkesou_effect'][id].filter(list => list[0] !== trigger);
                                if (!player.storage['PIkesou_effect'][id].length) delete player.storage['PIkesou_effect'][id];
                            }
                            if (!Object.keys(player.storage['PIkesou_effect']).length) player.removeSkill('PIkesou_effect');
                            else {
                                player.markSkill('PIkesou_effect');
                                const targets = Object.keys(player.storage['PIkesou_effect']).map(id => (_status.connectMode ? lib.playerOL : game.playerMap)[id]);
                                player.addTip('PIkesou_effect', targets.map(target => {
                                    let suits = player.storage['PIkesou_effect'][target.playerid].map(i => i[1]).unique().sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                                    return [target, ...suits].map(i => get.translation(i)).join('');
                                }).join('<br>'));
                            }
                        },
                    },
                },
            },
            //蛔虫
            PIchangji: {
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    if (lib.suit.every(suit => player.hasCard({ suit: suit }, 'h'))) return false;
                    return event.player.hasMark('PIliran_mark') && player.countMark('PIchangji_round') < player.getHp();
                },
                async cost(event, trigger, player) {
                    let suits = [...lib.suit].reverse();
                    suits.removeArray(player.getCards('h').map(card => get.suit(card)));
                    const result = await player.chooseControl(suits, 'cancel2').set('ai', () => {
                        const player = get.player(), target = get.event().getTrigger().player;
                        return get.attitude(player, target) >= 0 ? 'cancel2' : get.event().controls().slice(0, -1).randomGet();
                    }).set('prompt', get.prompt2(event.skill, trigger.player)).forResult();
                    event.result = {
                        bool: result.control && result.control !== 'cancel2',
                        cost_data: result.control,
                    };
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    player.addTempSkill('PIchangji_round', 'roundStart');
                    player.addMark('PIchangji_round', 1, false);
                    player.addTempSkill('PIchangji_effect');
                    player.storage['PIchangji_effect'][event.cost_data] = trigger.player;
                    player.addTip('PIchangji_effect', Object.keys(player.storage['PIchangji_effect']).map(suit => {
                        return [player.storage['PIchangji_effect'][suit], suit].map(i => get.translation(i)).join('：');
                    }));
                },
                subSkill: {
                    round: {
                        charlotte: true,
                        onremove: true,
                    },
                    effect: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] ??= {};
                        },
                        onremove(player, skill) {
                            player.removeTip(skill);
                            delete player.storage[skill];
                        },
                        mark: true,
                        markimage: 'extension/瘟疫公司/image/card/PIchangji_mark.png',
                        intro: {
                            content(storage = {}) {
                                if (!Object.keys(storage).length) return '暂未钻入某人的肠';
                                return Object.keys(storage).map(suit => {
                                    return get.translation(suit) + '：' + get.translation(storage[suit]);
                                }).join('<br>');
                            },
                        },
                        trigger: { global: ['gainAfter', 'loseAfter'] },
                        filter(event, player) {
                            const storage = player.storage['PIchangji_effect'], target = event.player;
                            if (event.name === 'gain') return Array.isArray(event.PIfanwei) && Object.values(storage).includes(target);
                            if (event.type !== 'discard') return false;
                            return Object.keys(storage).some(suit => storage[suit] === target && event.getl(target).cards2.some(i => get.suit(i, target) === suit && get.position(i) === 'd'));
                        },
                        forced: true,
                        logTarget: 'player',
                        async content(event, trigger, player) {
                            const storage = player.storage['PIchangji_effect'], target = trigger.player;
                            if (trigger.name === 'gain') await player.gainPlayerCard(target, 'he', true);
                            else {
                                let gains = Object.keys(storage).reduce((list, suit) => {
                                    if (storage[suit] === target) list.addArray(trigger.getl(target).cards2.some(i => get.suit(i, target) === suit));
                                    return list;
                                }, []).filterInD('d');
                                if (gains.length > 0) await player.gain(gains, 'gain2');
                            }
                        },
                        group: 'PIchangji_clear',
                        global: 'PIfanwei_global',
                    },
                    clear: {
                        charlotte: true,
                        trigger: {
                            player: 'gainEnd',
                            global: 'loseAsyncEnd',
                        },
                        getIndex(event, player) {
                            const storage = player.storage['PIchangji_effect'], cards = event.getg(player);
                            return Object.keys(storage).filter(suit => cards.map(i => get.suit(i, false)).includes(suit));
                        },
                        silent: true,
                        async content(event, trigger, player) {
                            const suit = event.indexedData, skill = 'PIchangji_effect';
                            delete player.storage[skill][suit];
                            if (Object.keys(player.storage[skill]).length > 0) {
                                player.addTip(skill, Object.keys(player.storage[skill]).map(suit => [player.storage[skill][suit], suit].map(i => get.translation(i)).join('：')));
                            }
                            else player.removeSkill(skill);
                        },
                    },
                },
            },
            PIzuanchang: {
                trigger: { global: 'phaseUseEnd' },
                filter(event, player) {
                    let target = event.player, num = 0;
                    if (!target.hasMark('PIliran_mark')) return false;
                    player.getHistory('gain', evt => {
                        num += evt.getl(target).cards2.filter(card => evt.getg(player).includes(card)).length;
                    });
                    if (num === 0 && player.getCards('h').map(i => get.suit(i)).some(suit => {
                        return player.getCards('h', { suit: suit }).every(card => lib.filter.cardDiscardable(card, player, 'PIzuanchang'));
                    }) && player.canUse(new lib.element.VCard({ name: 'sha', nature: 'ill' }), target, false)) return true;
                    return num >= target.getHp() || num >= player.getHp();
                },
                direct: true,
                async content(event, trigger, player) {
                    let target = trigger.player, skill = event.name, num = 0;
                    player.getHistory('gain', evt => {
                        num += evt.getl(target).cards2.filter(card => evt.getg(player).includes(card)).length;
                    });
                    if (num === 0 && player.canUse(new lib.element.VCard({ name: 'sha', nature: 'ill' }), target, false)) {
                        let suits = player.getCards('h').map(i => get.suit(i)).filter(suit => {
                            return player.getCards('h', { suit: suit }).every(card => lib.filter.cardDiscardable(card, player, skill));
                        });
                        if (suits.length > 0) {
                            const result = await player.chooseControl(suits, 'cancel2').set('target', target).set('ai', () => {
                                const { player, target, controls } = get.event(), sha = new lib.element.VCard({ name: 'sha', nature: 'ill', storage: { PIzuanchang: true } });
                                const getNum = function (suit) {
                                    if (suit === 'cancel2') return 0;
                                    return get.effect(target, sha, player, player) - player.getCards('h', { suit: suit }).reduce((sum, card) => sum + get.value(card), 0);
                                };
                                return controls.slice().sort((a, b) => getNum(b) - getNum(a))[0];
                            }).set('prompt', get.prompt(skill)).set('prompt2', `弃置一种花色的所有手牌，视为对${get.translation(target)}使用一张无距离次数限制且不可被响应的病【杀】`).forResult();
                            if (result?.control && result.control !== 'cancel2') {
                                player.logSkill(skill, target);
                                const suit = result.control, sha = new lib.element.VCard({ name: 'sha', nature: 'ill' });
                                await player.discard(player.getDiscardableCards(player, 'h', { suit: suit }));
                                if (player.canUse(sha, target, false)) {
                                    const next = player.useCard(sha, target, false);
                                    next.set('oncard', () => {
                                        const event = get.event();
                                        event.directHit.addArray(event.targets);
                                        game.log(event.card, '不可被响应');
                                    });
                                    await next;
                                }
                            }
                        }
                    }
                    if (num >= target.getHp()) {
                        player.logSkill(skill, target);
                        await target.loseHp();
                        target.addSkill(`${skill}_hand`);
                        target.addMark(`${skill}_hand`, 1, false);
                    }
                    if (num >= player.getHp()) {
                        player.logSkill(skill, target);
                        await player.recover();
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg?.card?.storage?.PIzuanchang;
                    },
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        onremove: true,
                        markimage: 'image/card/handcard.png',
                        intro: { content: '手牌上限-#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num - player.countMark('PIzuanchang_hand');
                            },
                        },
                    },
                },
            },
            //彩蚴吸虫
            PIshihong: {
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    const target = event.player;
                    if ((player.storage['PIshihong_round']?.[target.playerid] ?? 0) >= 2) return false;
                    return target.hasMark('PIliran_mark') && target.hasCard(card => !get.is.shownCard(card), 'h');
                },
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    event.result = await player.choosePlayerCard(target, 'h', get.prompt2(event.skill, target)).set('filterButton', button => {
                        return !get.is.shownCard(button.link);
                    }).set('ai', button => {
                        const player = get.player(), card = button.link, target = get.owner(card);
                        if (!button.classList.contains('.button.card') && get.type(card) === 'basic') return 1;
                        return -get.attitude(player, target);
                    }).forResult();
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player, cards = event.cards, card = cards[0];
                    player.addTempSkill('PIshihong_round', 'roundStart');
                    player.storage['PIshihong_round'][target.playerid] ??= 0;
                    player.storage['PIshihong_round'][target.playerid]++;
                    await target.addShownCards(cards, `visible_${event.name}`);
                    await player.showCards(cards, `${get.translation(target)}被明置的牌`);
                    switch (get.type2(card)) {
                        case 'basic':
                            await player.draw();
                            break;
                        case 'trick':
                            const targets = game.filterPlayer(current => {
                                return !current.hasMark('PIliran_mark') && [current.getNext(), current.getPrevious()].includes(target);
                            });
                            if (targets.length > 0) {
                                const result = await player.chooseTarget((card, player, target) => {
                                    return get.event().targets.includes(target);
                                }, `是否令${get.translation(target)}的未感染的一名邻位角色获得${get.translation(card)}并令其感染？`).set('ai', target => {
                                    const player = get.player(), att = get.attitude(player, target);
                                    if (!target.canGanran()) return att * get.value(card, target);
                                    return -att / Math.max(1, get.value(card, target));
                                }).set('targets', targets).set('card', card).forResult();
                                if (result?.bool && result.targets?.length) {
                                    const current = result.targets[0];
                                    player.line2([target, current]);
                                    await game.delayx();
                                    const next = current.gain(card, target, 'give');
                                    next.giver = player;
                                    await next;
                                }
                            }
                            else {
                                trigger.getParent().excluded.add(player);
                                game.log(trigger.card, '对', player, '无效');
                            }
                            break;
                        case 'equip':
                            await player.discardPlayerCard(target, 'he', true).set('filterButton', button => !get.is.shownCard(button.link));
                            target.addTempSkill(`${event.name}_effect`);
                            break;
                    }
                },
                subSkill: {
                    round: {
                        charlotte: true,
                        onremove: true,
                    },
                    effect: {
                        charlotte: true,
                        mark: true,
                        markimage: 'extension/瘟疫公司/image/card/PIqietong_mark.jpg',
                        intro: { content: '不能使用、打出、弃置明置牌' },
                        mod: {
                            cardEnabled(card) {
                                if (get.is.shownCard(card)) return false;
                            },
                            cardSavable(card) {
                                if (get.is.shownCard(card)) return false;
                            },
                            cardRespondable(card) {
                                if (get.is.shownCard(card)) return false;
                            },
                            cardDiscardable(card) {
                                if (get.is.shownCard(card)) return false;
                            },
                        },
                    },
                },
            },
            PIqietong: {
                trigger: { global: 'phaseBegin' },
                filter(event, player) {
                    return event.player.hasMark('PIliran_mark') && event.player.hasCard(card => get.is.shownCard(card), 'h');
                },
                async cost(event, trigger, player) {
                    const target = trigger.player, next = player.gainPlayerCard(target, 'he', [1, 2]);
                    next.set('prompt', get.prompt2(event.skill, target));
                    next.logSkill = [event.skill, target];
                    event.result = await next.forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    await target.damage();
                    if (target.isIn() && event.cards.length === 2) {
                        const same = event.cards.map(i => get.color(i, target)).unique().length === 1;
                        if (same) {
                            const sha = new lib.element.VCard({ name: 'sha', nature: 'ill' });
                            if (player.canUse(sha, target, false)) await player.useCard(sha, target, false);
                        }
                        else target.addTempSkill('PIqietong_view');
                    }
                },
                subSkill: {
                    view: {
                        charlotte: true,
                        mark: true,
                        markimage: 'extension/瘟疫公司/image/card/PIqietong_mark.jpg',
                        intro: { content: '手牌对所有其他角色可见' },
                        global: 'PIqietong_global',
                    },
                    global: {
                        ai: {
                            viewHandcard: true,
                            skillTagFilter(player, tag, arg) {
                                if (player === arg || !arg.hasSkill('PIqietong_view')) return false;
                            },
                        },
                    },
                },
            },
        },
        dynamicTranslate: {
            PIyanmie: player => "「血雾弥漫」<br/><li>当感染角色濒死结算结束后，你可以对另一名感染角色造成1点伤害。" + (player.storage.PIyizhi_fail ? "你对感染角色造成的伤害+X（X为你已损失的体力值）。</li>" : ""),
            PIshenwen(player) {
                return lib.translate.PIshenwen_info.slice(0, -1) + "，当前可获得的技能上限数为" + parseFloat(player.maxHp + player.countMark("PIxinyi")) + "）";
            },
            PIjiqun(player) {
                let info = lib.translate.PIjiqun_info;
                if (player.storage.PIjiqun) info = info.slice(0, -"。</li>".length) + "，然后你摸一张牌。</li>";
                return info;
            },
            PIdandu(player) {
                return ["PIdandu", "PIdandu_2", "PIdandu_3"].map(effect => {
                    return lib.translate[effect + "_info"];
                })[player.countMark("PIdandu")];
            },
            PIyuanzu(player, skill) {
                const storage = player.storage[skill];
                let str = "「咒怨缠身」<br/><li>转换技。";
                if (!storage) str += '<span class="bluetext">';
                str += "阳：当你对感染角色造成伤害时，若当前回合角色为你/当前回合角色不为你，则你可以令此伤害+[1]/令受伤角色横置武将牌。";
                if (!storage) str += "</span>";
                if (storage) str += '<span class="bluetext">';
                str += "阴：当你受到感染角色对你造成的伤害时，若当前回合角色为你/当前回合角色不为你，则你可以防止此伤害/令伤害来源武将牌翻面。然后你令其获得[1]枚“怨”标记。";
                if (storage) str += "</span>";
                return str + "若你的体力值小于其体力值，则本次技能流程执行中的[ ]数值+1。</li>";
            },
        },
        translate: {
            basic_pathogene: "基础病原体",
            special_pathogene: "特殊病原体",
            story_pathogene: "剧情病原体",
            reality_pathogene: "现实病原体",
            master_pathogene: "主宰病原体",
            antibodies: "抗体",
            PIliran: "罹染",
            PIliran_info: "「苦难开头」<br/><li>宗族技，锁定技，〈每轮开始时/当你造成伤害后〉，你感染〈一名角色/受伤角色〉；你不能被感染；当你感染一名角色后，你摸两张牌；你对感染角色使用牌无距离限制；当你回复体力后，你令一名瘟疫公司角色摸一张牌。</li>",
            "#ext:瘟疫公司/audio/skill/PIliran1": "红泡感染声",
            PIliran_enter: "临渊",
            PIliran_enter_info: "「瘟疠降世」<br/><li>锁定技，当你进场时，播放此语音。</li>",
            "#ext:瘟疫公司/audio/skill/PIliran_enter1": "生化警报声",
            PIliran_damageSource: "疾漪",
            PIliran_damageSource_info: "「疾痛源泉」<br/><li>锁定技，你造成伤害后，播放此语音。</li>",
            "#ext:瘟疫公司/audio/skill/PIliran_damageSource1": "男性咳嗽声",
            "#ext:瘟疫公司/audio/skill/PIliran_damageSource2": "女性咳嗽声",
            PIliran_dying: "殓宣",
            PIliran_dying_info: "「寂亡预礼」<br/><li>锁定技，你造成伤害令受伤角色进入濒死状态后，播放此语音。</li>",
            "#ext:瘟疫公司/audio/skill/PIliran_dying1": "救护车笛声",
            "#ext:瘟疫公司/audio/skill/PIliran_dying2": "濒死咽气声",
            "#ext:瘟疫公司/audio/skill/PIliran_dying3": "女人恸哭声",
            PIliran_dieAfter: "讣悼",
            PIliran_dieAfter_info: "「魂归瘴疠」<br/><li>锁定技，你杀死一名角色后，播放此语音。</li>",
            "#ext:瘟疫公司/audio/skill/PIliran_dieAfter1": "心电停止声",
            "#ext:瘟疫公司/audio/skill/PIliran_dieAfter2": "教堂丧钟声",
            PIliran_die: "冢谒",
            PIliran_die_info: "「死荫幽谷」<br/><li>锁定技，一名其他角色死亡后，若场上阵亡角色数不小于存活角色数，播放此语音。</li>",
            "#ext:瘟疫公司/audio/skill/PIliran_die1": "黑死病童谣",
            "#ext:瘟疫公司/audio/skill/PIliran_die2": "群鸦环绕声",
            PIliran_recover: "疫悸",
            PIliran_recover_info: "「疴烬复燃」<br/><li>锁定技，当你回复体力后，播放此语音。</li>",
            "#ext:瘟疫公司/audio/skill/PIliran_recover1": "黄泡加成声",
            PIxiangangaoneng: "腺苷高能",
            PIxiangangaoneng_info: "锁定技，你的初始手牌改为八张牌。",
            PIsesubaofa: "色素爆发",
            PIsesubaofa_info: "锁定技，你回复体力后/获得感染角色的牌后，你有50%几率摸一张牌。",
            PIjisudaixie: "急速代谢",
            PIjisudaixie_info: "锁定技，你感染一名角色后，你有50%几率摸一张牌。",
            PIcuihuakaiguan: "催化开关",
            PIcuihuakaiguan: "锁定技，每轮限两次，当你受到伤害后，你摸等量伤害值的牌（至少为2至多为5）。",
            PIdaixiejiechi: "代谢劫持",
            PIdaixiejiechi_info: "锁定技，你回复体力后/感染一名角色后，你有1/3概率弃置一张牌",
            PIludiqinhe: "陆地亲和",
            PIludiqinhe_info: "锁定技，当你对其他角色造成伤害时，若受伤者与你距离等于1，你有10%几率感染一名其他角色。",
            PIdaqiqinhe: "大气亲和",
            PIdaqiqinhe_info: "锁定技，当你对其他角色造成伤害时，若受伤者与你距离大于1，你有10%几率感染一名其他角色。",
            PIhaiyangqinhe: "海洋亲和",
            PIhaiyangqinhe_info: "锁定技，当你失去体力时，你有10%几率随机感染一名其他角色。",
            PIzhenyayizhi: "镇压抑制",
            PIzhenyayizhi_info: "锁定技，一名角色结束后，若其与同族角色相邻或与感染角色相邻，你有30%几率令其感染。",
            PIbentuqinhe: "本土亲和",
            PIbentuqinhe_info: "锁定技，准备阶段，你将手牌补至零号病人的手牌数。",
            PInaiganshihan: "耐干适旱",
            PInaiganshihan_info: "锁定技，当你受到火焰伤害时，你有50%几率令此伤害-1,25%几率防止之。",
            PIxishiqinshui: "喜湿亲水",
            PIxishiqinshui_info: "锁定技，当你受到寒冰伤害或失去体力时，你有50%几率防止之。",
            PInongcunshengcun: "农村生存",
            PInongcunshengcun_info: "锁定技，当你受到手牌数不大于你的非同族角色的伤害后，你有50%几率摸一张牌。",
            PIchengshishengcun: "城市生存",
            PIchengshishengcun_info: "锁定技，当你受到手牌数不小于你的非同族角色的伤害后，你有50%几率摸一张牌。",
            PIjiduanshengwu: "极端生物",
            PIjiduanshengwu_info: "锁定技，当你受到火焰，寒冰伤害或失去体力时/你受到非同族角色的伤害后，你有20%几率防止之/摸一张牌。",
            PIdaerwenlun: "达尔文论",
            PIdaerwenlun_info: "锁定技，摸牌阶段，你有40%几率多摸一张牌。",
            PIshenchuangxueshuo: "神创学说",
            PIshenchuangxueshuo_info: "锁定技，摸牌阶段，你有40%几率少摸一张牌。",
            PImoniyichuan: "模拟遗传",
            PImoniyichuan_info: "锁定技,游戏开始时，你加1点体力上限并将体力值回复至体力上限。",
            PIjianxingyanghua: "碱性氧化",
            PIjianxingyanghua_info: "锁定技，摸牌阶段/游戏开始时，你有25%几率从牌堆中获得一张装备牌，然后少摸一张牌/你减1点体力上限。",
            PIjianxingshuijie: "碱性水解",
            PIjianxingshuijie_info: "锁定技，摸牌阶段/游戏开始时，你有25%几率从牌堆中获得一张锦囊牌，然后少摸一张牌/你减1点体力上限。",
            PIdianliluoxuan: "电离螺旋",
            PIdianliluoxuan_info: "锁定技，弃牌阶段后，若你弃置了牌，你有摸两张牌。",
            PIkuasunxiufu: "跨损修复",
            PIkuasunxiufu_info: "锁定技，你的手牌上限至少为你的体力上限。",
            PIjingtaizhengzhuang: "静态症状",
            PIjingtaizhengzhuang_info: "锁定技，你的伤害牌不计入手牌上限，游戏开始时，你减1点体力上限。",
            PIbinglixiuting: "病理休停",
            PIbinglixiuting_info: "锁定技，你的装备牌不计入手牌上限，游戏开始时，你减1点体力上限。",
            PIfanshizhihou: "反式滞后",
            PIfanshizhihou_info: "锁定技，你的锦囊牌不计入手牌上限，游戏开始时，你减1点体力上限。",
            PIwuyaokeyi: "无药可医",
            PIwuyaokeyi_info: '<span class="firetext">锁定技，当你受到伤害或失去体力时，防止之。</span>',
            PIwuweibuzhi: "无为不治",
            PIwuweibuzhi_info: '<span class="firetext">锁定技，当你成为非同族角色使用牌的目标时/使用牌指定非同族角色为目标时，取消此目标/其不可响应。</span>',
            PIwuqiongwujin: "无穷无尽",
            PIwuqiongwujin_info: '<span class="firetext">出牌阶段，你可以摸一张牌。</span>',
            PIjisubaofa: "极速爆发",
            PIjisubaofa_info: '<span class="firetext">锁定技，当你进入游戏时，你感染所有其他非同族角色。</span>',
            PIxingyunmoshi: "幸运模式",
            PIxingyunmoshi_info: '<span class="firetext">锁定技，游戏开始时，你随机获得五个“瘟疫与疾苦”系列角色的技能。</span>',
            PIsuijimoshi: "随机模式",
            PIsuijimoshi_info: '<span class="firetext">锁定技，游戏开始时，你托管。</span>',
            PIshuangchongshentou: "双重渗透",
            PIshuangchongshentou_info: '<span class="firetext">锁定技，你使用牌对感染角色额外结算一次。</span>',
            PI_bacteria: "细菌",
            PIjunbi: "菌壁",
            PIjunbi_info: "「应激装甲」<br/><li>结束阶段，若你没有护甲，你可以获得已损失体力值点护甲（至多因此将护甲值增加至3）。你的手牌上限+X（X为你的护甲值）。当你扣减护甲后，你可以选择一项：1.摸两张牌；2.感染一名角色。</li>",
            PInaiyao: "耐药",
            PInaiyao_info: "「适应抗性」<br/><li>锁定技，当你进入濒死时，你记录伤害渠道对应的牌名；每回合限一次，当你成为与记录牌名有相同的牌的目标后，你可以令此牌对你无效，然后若当前回合角色已感染，你摸一张牌。</li>",
            PInaiyao_append: '<span class="pathogen-append">最常见的瘟疫病原体，潜力不可估量</span>',
            PI_virus: "病毒",
            PItubian: "突变",
            PItubian_info: "「物竞天择」<br/><li>摸牌阶段，你可以：展示手牌，多摸4-X张牌（X为其中的类别数）。然后若你的手牌唯一最多，你感染一名角色。</li>",
            PIfuzhi: "复制",
            PIfuzhi_info: "「三生万物」<br/><li>出牌阶段限三次，你可以判定，若结果不小于X+3，你复制一张未以此法复制过的手牌（若处于弃牌堆则于洗牌时销毁）（X为感染角色数）。结束阶段，若你的体力不为最大，你可以执行一个额外的摸牌阶段，然后执行一个额外的出牌阶段。</li>",
            PIfuzhi_append: '<span class="pathogen-append">一个能够迅速突变和极其难控制的病原体</span>',
            PI_fungus: "真菌",
            PIbaoya: "孢芽",
            PIbaoya_info: "「蓄势待发」<br/><li>锁定技，当你使用牌后，若此牌未造成伤害且你的「孢子」数小于8，你获得1枚「孢子」：你每有1枚此标记，则你的攻击范围和你的手牌上限+1。</li>",
            PIpenfa: "喷发",
            PIpenfa_info: "「天女散花」<br/><li>出牌阶段限一次，或当你受到伤害后，你可以移除任意枚「孢子」，然后选择一项：1.摸等量的牌；2.对等量的感染角色各造成1点伤害。</li>",
            PIpenfa_append: '<span class="pathogen-append">真菌孢子很难在没有特殊能力下传播到远距离</span>',
            PI_parasite: "寄生虫",
            PIjifu: "寄附",
            PIjifu_info: "「择木而欺」<br/><li>锁定技，首轮开始时，你感染一名角色：其〈回复体力/一次得到多张牌〉后，你〈回复等量体力/获得其一张牌〉。</li>",
            PIzidan: "子诞",
            PIzidan_info: "「择主而噬」<br/><li>限定技，当你进入濒死时，你可以回复体力至1点，令一名感染角色获得〖虫卵〗直到你回复所有体力，然后本巡你防止受到的所有伤害。</li>",
            PIzidan_append: '<span class="pathogen-append">隐于市井的复杂寄生生物</span>',
            PIchongluan: "虫卵",
            PIchongluan_info: "「魔虫破壳」<br/><li>锁定技，回合结束时，你弃置一张牌并失去1点体力，然后若令你获得此技能的角色存活，你令其回复1点体力；当你死亡时，令你获得此技能的角色获得你所有牌并回复3点体力。</li>",
            PI_prion: "朊毒体",
            PIsiluan: "思乱",
            PIsiluan_info: "「错误吟唱」<br/><li>当感染角色于其回合内使用前X张非装备牌时，你可以弃置一张牌，为此牌重新指定目标（X为其已损失体力值且至少为1）。此牌造成伤害后，你摸两张牌。</li>",
            PIshenwei: "神萎",
            PIshenwei_info: "「法力衰弱」<br/><li>锁定技，当〈感染角色/你对感染角色〉造成伤害时，若其手牌或体力最少，其〈造成的伤害-1/弃置一张牌〉。</li>",
            PIshenwei_append: '<span class="pathogen-append">一种隐藏在大脑内、缓慢、微妙、且极为复杂的病原体</span>',
            PI_nanovirus: "纳米病毒",
            PIlanjie: "拦截",
            PIlanjie_info: "「命令执行」<br/><li>锁定技，非同族角色每轮使用牌首次指定你为目标后，其选择一项：1.令此牌对你无效，然后令你摸两张牌；2.感染，然后令你获得此牌。</li>",
            PIguozai: "过载",
            PIguozai_info: "「协议关闭」<br/><li>限定技，出牌阶段，若有半数（向上取整）角色已感染，你可以：将手牌补至体力上限，感染其余角色，回复所有体力。然后直到你下次扣减体力：当你使用即时牌时，你可令任意名感染角色成为额外目标；结束阶段，你摸感染角色数张牌。</li>",
            PIguozai_append: '<span class="pathogen-append">这是一种难以控制、内部设有自毁开关、纳米级的人造病毒</span>',
            PI_biologicalweapon: "生物武器",
            PIyizhi: "抑制",
            PIyizhi_mark: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIyizhi_mark.png>",
            PIyizhi_info: "「屏气凝神」<br/><li>使命技：你造成或受到伤害时，你的体力值小于存活人数。成功：此伤害-1，摸两张牌，移出任意张手牌为可如手牌般使用或打出的「积」，复原此技能。失败：当其他角色死亡时，你获得所有「积」，废除判定区，加1点体力上限，修改〖湮灭〗。</li>",
            PIyanmie: "湮灭",
            PIyanmie_rewrite: "湮灭·改",
            PIyanmie_info: "「血雾弥漫」<br/><li>当感染角色濒死结算结束后，若伤害来源为你，则你可以对另一名感染角色造成1点伤害。</li>",
            PIyanmie_rewrite_info: "「血雾弥漫」<br/><li>当感染角色濒死结算结束后，若伤害来源为你，则你可以对另一名感染角色造成1点伤害。你对感染角色造成的伤害+X（X为你已损失的体力值）。</li>",
            PIyanmie_append: '<span class="pathogen-append">极为致命的病原体，所到之处，尸横遍野</span>',
            PI_neurax: "神经蠕虫",
            PIjingkong: "精控",
            PIjingkong_info: "「伪神权能」<br/><li>每轮限X次（X为你的体力上限）。①感染角色出牌阶段开始前，你可以选择一项：1.以其视角使用其一张手牌（可不使用），然后你弃置两张牌。2.若其他角色均已受伤且你未受伤，则你失去1点体力；若其拥有“虫神”标记，则令其交给你一张牌；然后令其获得1枚“虫神”标记，将此阶段改为由你操控。然后其本轮进入“混乱”状态。②感染角色使用牌指定自己为目标后，你可令此牌对其无效，然后其交给你一张牌。</li>",
            PIchongji: "虫机",
            PIchongji_info: "「赞颂吾名」<br/><li>①出牌阶段限一次，你可以交给一名非同族角色角色一张牌并令其感染，然后若场上的感染角色大于非同族未感染角色数，则你可以对其造成1点伤害。其于回合内使用首张单目标牌指定目标后，感染目标角色。②你的手牌上限+2X（X为场上的“虫神”标记数）。</li>",
            PIzisha: "自杀",
            PIzisha_info: "「天国捷径」<br/><li>当其他角色因〖精控〗而使用即时牌时，你可以令其成为额外目标且不可响应此牌。若其拥有“虫神”标记，则你观看其手牌，然后其交给你一张牌。</li>",
            PIzisha_append: '<span class="pathogen-append">钻进大脑的精神控制生物</span>',
            PI_necroa: "丧尸病毒",
            PIsusheng: "苏生",
            PIsusheng_info: "「厌氧复苏」<br/><li>每名角色限一次，非同族角色进入濒死状态时，你可以令其将体力回复至1点，其感染并获得1枚“尸”标记 ，然后其视为对另一名你指定的其他角色使用一张【杀】，若此【杀】造成伤害，其回复1点体力，然后你与其各摸两张牌。</li>",
            PIliushi: "流尸",
            PIliushi_info: "「浮尸千里」<br/><li>①出牌阶段限一次，你可以选择一名攻击范围内的角色，若如此做，你视为对从其下家至你的上家依次使用【杀】直至你本次以此法造成伤害或本次已执行Y+1遍此流程（Y为场上拥有“尸”标记的角色数）。②结束阶段，你可以令任意名拥有“尸”标记的角色各失去1点体力，然后你可以对至多等量名感染角色各造成1点伤害。</li>",
            PIshichao: "尸潮",
            PIshichao_info: "「尸如潮水」<br/><li>锁定技。①你使用【杀】的次数+Y。②结束阶段，你从弃牌堆获得X张【杀】（X为场上已死亡的非同族角色数）。③当你或拥有“尸”标记的角色对感染角色造成伤害后，若伤害来源的体力值大于等于感染角色的体力值，则你令感染角色获得1枚“尸”标记。</li>",
            PIshichao_append: '<span class="pathogen-append">尚未被归类，初期报告显示，它们具有超速再生能力</span>',
            PI_pestilence: "鼠疫",
            PIhengxuan: "横痃",
            PIhengxuan_info: "「淋巴肿大」<br/><li>感染角色受到伤害后，你可以令一名与其相邻的角色感染（若其已感染，则你失去1点体力，对其发动【黑死】）。</li>",
            PIheisi: "黑死",
            PIheisi_buff: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIheisi_buff.png>",
            PIheisi_info: "「鼠疫肆虐」<br/><li>感染角色的回合开始和回合结束时，你可以弃置一张黑色牌，然后展示其至多X张手牌（X为其已损失体力值且至少为1）。其需选择一项：1.将其中的黑色牌交给你（你使用这些牌不计次数且这些牌不计入手牌上限）；2.弃置其中的红色牌并受到你对其造成的1点伤害。其进行选择之前，你可选择是否与其各失去1点体力，然后你摸X张牌，若如此做，其执行所有项。</li>",
            PIheisi_append: '<span class="pathogen-append">隐藏数世纪并夺走两亿条无辜生命的可怕病菌</span>',
            PI_smallpox: "天花",
            PIpinxue: "贫血",
            PIpinxue_info: "「朱颜失色」<br/><li>锁定技，感染角色回复体力或失去体力后，若该角色为/不为当前回合角色，则其弃置一张牌且本回合手牌上限-1/你摸一张牌且其下个回合摸牌阶段摸牌数-1。</li>",
            PIhuaiju: "坏疽",
            PIhuaiju_info: "「恶疹尸疽」<br/><li>①其他角色失去体力后，你感染一名角色。②当你使用牌指定已受伤的感染角色为目标后，若其已损失体力值：≥1，你摸一张牌；≥2，你弃置其一张牌；≥你的体力值，你可令其不可响应你的牌。③感染角色死亡后，你可令其相邻的非与你同族的角色各失去1点体力（未受伤的角色改为失去2点体力）</li>",
            PIhuaiju_append: '<span class="pathogen-append">人类史上最致命的疾病之一',
            PI_staphylococcusaureus: "金葡菌",
            PIlieran: "烈染",
            PIlieran_info: "「烈性感染」<br/><li>锁定技，一名角色受到伤害后，若其处于你的攻击范围内且其未感染，则令其感染。</li>",
            PIhuanong: "化脓",
            PIhuanong_info: "「脓血裂伤」<br/><li>每轮每名角色限两次，当你对感染角色造成伤害后或使用【杀】指定感染己受伤角色为目标后，你可以展示其X张手牌(X为其已损失体力值且至少为1)，若你展示的牌有黑色牌，你可以弃置之；若你展示的牌有红色牌，你可以获得之或改为摸Y张牌(Y为你展示的红色牌数量)。</li>",
            PIhuanong_append: '<span class="pathogen-append">常见引起食物中毒和伤口感染的致病菌</span>',
            PI_cholera: "霍乱",
            PItuoshui: "脱水",
            PItuoshui_info: "「内境紊乱」<br/><li>锁定技，感染角色失去黑色牌后，若其失去的黑色牌数不小于其体力值，则你令其失去1点体力，然后你摸一张牌。</li>",
            PIlansi: "蓝死",
            PIlansi_mark: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIlansi_mark.png>",
            PIlansi_info: "「一泻千里」<br/><li>感染角色的弃牌阶段结束时，若其本阶段弃置了黑色牌，则你可以选择其中至多X张牌标记为“泻”，然后将这些牌以任意顺序置于牌堆顶或牌堆底；其他非同族角色获得“泻”后，你令其感染，且其本回合手牌上限-X（X为此时其手牌中“泻”的数量）。</li>",
            PIlansi_append: '<span class="pathogen-append">一项全球性威胁的一种急性腹泻感染</span>',
            PI_sparganum: "裂头蚴",
            PIshejiu: "蛇酒",
            PIshejiu_mark: "脑裂",
            PIshejiu_info: "「病从口入」<br/><li>锁定技。①非同族角色使用【酒】后，其进行判定，若结果为黑色，则其感染并获得“脑裂”标记。②拥有“脑裂”标记的角色使用【酒】时，或其造成超过1点伤害后，其失去1点体力，然后弃置X-1张牌（X为造成的伤害数，若不为造成伤害则不执行此项）。</li>",
            PInaolie: "脑裂",
            PInaolie_info: "「头疼欲裂」<br/><li>出牌阶段限一次，你可以观看一名感染角色手牌，令其获得“脑裂”标记，然后令其保留手牌点数为[奇/偶]的点数并弃置未保留的牌，然后你选择一个颜色，获得其此颜色的所有牌并对其造成1点伤害，若其未拥有此颜色的牌或你无法获得其所有此颜色的手牌，则你额外对其造成1点伤害；若其死亡，则此技能视为未发动。</li>",
            PInaolie_append: '<span class="pathogen-append">裂头蚴病的病症危害巨大且不易解药</span>',
            PI_tetanus: "破伤风",
            PIpofeng: "破风",
            PIpofeng_info: "「毒风入侵」<br/><li>锁定技，当非同族未/感染角色受到大于/不小于1点的普通或火焰伤害后，令其感染且其获得X枚“风”标记（X为伤害值，若伤害来源为你则改为获得2X+1枚“风”标记），然后若其拥有至少Y个“风”标记，则其移除所有的“风”标记并减1点体力上限（Y为7-其体力上限）。</li>",
            PIzhijing: "肢痉",
            PIzhijing_info: "「挛肢僵痉」<br/><li>感染角色出牌阶段开始时，其可选择令你废除其一个装备栏，然后其移除2枚“风”标记，你选择摸Y+1张牌或弃置其Y+1张牌，视为对其使用一张病【杀】（Y为其“风”标记数且至少为1）。</li>",
            PIzhijing_append: '<span class="pathogen-append">常和创伤相关联的一种特异性感染致病菌</span>',
            PI_clonorchis: "肝吸虫",
            PIganshi: "肝蚀",
            PIganshi_info: "「肝叶蚕食」<br/><li>锁定技，感染角色回复体力时，其需弃置X+1张手牌且你获得其中一张牌，否则取消此次回复，然后其获得“肝蚀”标记，你回复1点体力（X为其已损失的体力值）。</li>",
            PIganying: "肝硬",
            PIganying_info: "「肝肿硬化」<br/><li>当拥有“肝蚀”标记的角色回复体力前，你可以选择一项：1.获得该角色一张牌并摸一张牌；2.视为对该角色使用一张病【杀】；你使用【杀】对拥有“肝蚀”的角色造成伤害时，你可以选择一项：①获得该角色至多两张牌；②令其失去1点体力。</li>",
            PIganying_append: '<span class="pathogen-append">华支睾吸虫病的危害性主要是患者的肝脏受损</span>',
            PI_schistosoma: "血吸虫",
            PIyishui: "疫水",
            PIyishui_info: "「诅咒之水」<br/><li>①每轮限三次，非同族角色的回合开始时，你可以展示牌堆顶的一张牌并选择一名非同族角色。若其未感染，则你令其获得此牌并感染并获得1枚“蚴”标记；否则你令一名角色获得此牌。然后直到其回合结束前，当其使用一张与此牌颜色相同的牌时，其获得1枚“蚴”标记；其回合结束时，将“蚴”标记补充至3。②一名角色至多拥有3枚“蚴”标记。③若一名角色拥有3枚“蚴”标记，则其手牌上限-1。④一名拥有“蚴”标记的角色进入濒死状态后，你移去其所有“蚴”标记，然后令其失去1点体力。</li>",
            PIqinzang: "侵脏",
            PIqinzang_info: "「瘟神行径」<br/><li>①当你对一名角色造成伤害后，或受到一名角色造成的伤害后，若其拥有“蚴”标记，则你根据其“蚴”标记数执行以下项：≥1，你回复1点体力；≥2，你可以获得其至多两张牌。然后你移动其1个“蚴”标记至令一名感染角色（若无可移动目标则改为移去其1个“蚴”标记）。②当你移去或移动“蚴”标记后，你摸一张牌。</li>",
            PIqinzang_append: '<span class="pathogen-append">在亚非地区水域流行的瘟神，其危害影响深远</span>',
            PI_shadowplague: "暗影瘟疫",
            PIkuangnu: "狂怒",
            PIkuangnu_info: "「殷红狂怒」<br/><li>①当你造成伤害时，你可以弃置一张红色牌（若受伤角色未感染则无需弃牌），然后令此伤害+1。②当你造成大于1的伤害后，你回复X点体力（X为你已损失的体力值的一半且X向上取整）。③当你因击杀角色执行奖惩时（限摸牌弃牌），若场上感染角色数不小于未感染角色数，则：若执行奖励，则该奖励翻倍；若执行惩罚，则你取消之并摸两张牌。</li>",
            PIxuechao: "血巢",
            PIxuechao_info: "「结巢自居」<br/><li>结束阶段，若场上的“巢”标记数小于3，则你可以弃置一半手牌（向下取整）并令一名没有“巢”的其他角色获得1个“巢”标记，然后令其获得以下效果直到其移去“巢”标记：①其回合开始时，你令其进行一次判定，若判定结果为红色/黑色，则你回复1点体力/摸一张牌；②当你对其造成伤害时，你可以获得其一张牌；③当其受到除你以外的其他角色造成的伤害时，其失去“巢”标记。</li>",
            PIhongfu: "红蝠",
            PIhongfu_info: "「红翼蝠王」<br/><li>①准备阶段，你可以失去1点体力，然后移动X次场上的牌（X为你已损失的体力值）。②你始终跳过判定阶段。③你的手牌上限+Y（Y为场上已感染的角色数）。</li>",
            PIhongfu_append: '<span class="pathogen-append">感知型诱变病原体，激发宿主嗜血欲望</span>',
            PI_aids: "艾滋病",
            PIxuechuan: "血传",
            PIxuechuan_info: "「血液传播」<br/><li>当一名感染角色受到伤害后，若此伤害存在来源且来源未感染，则你可以令其感染，然后若伤害来源和受伤角色为同性/异性，则这两名角色各弃置一张牌/你摸两张牌。</li>",
            PIbengmian: "崩免",
            PIbengmian_info: "「免疫崩解」<br/><li>每轮每名角色限一次，一名感染角色使用牌响应其之外角色的牌时，你可以弃置一张红色牌，令其进行判定（其不能使用与判定点数相同的手牌），若判定结果：不为红桃，则此牌无效；红色，你获得判定牌，其弃置一张牌，且你本轮可以继续对其发动此技能；黑色，其非锁定技失效且不可使用或打出与判定牌类别相同的牌直至其回合结束（若其体力值小于等于1，则去除时间限制）。</li>",
            PIbengmian_append: '<span class="pathogen-append">削弱免疫系统，使患者更容易患上疾病并减少其抵抗力</span>',
            PI_syphilis: "梅毒",
            PIxingchuan: "性传",
            PIxingchuan_info: "「花疮柳斑」<br/><li>一名非同族角色的结束阶段，若其本回合出牌阶段使用的牌数小于等于其体力上限，则你可以选择一名不为其的非同族角色，你令这两名角色感染并获得1枚“梅”标记（至多6枚）并获得【梅疹】效果，然后若这两名角色：同性，各弃置一张牌；异性，你摸两张牌。</li>",
            PImeizhen: "梅疹",
            PImeizhen_info: "「恶斑狼疮」<br/><li>出牌阶段限一次，你可以选择一名感染角色，令其获得以下效果：①其回合/结束阶段开始时，你可以令其进行判定，然后其获得1枚“梅”标记（至多6枚），若判定结果为红色/黑色，则你获得判定牌/弃置其一张牌。②当其获得或失去“梅”标记后，若其的“梅”标记数：大于0，你摸一张牌；为2的倍数，其弃置标记数一半张牌；为3的倍数，其失去1点体力；为6，其失去“梅”标记至1个，然后其失去1点体力，你摸三张牌。</li>",
            PImeizhen_append: '<span class="pathogen-append">令人生畏的一种性传播疾病</span>',
            PI_paragonimus: "肺吸虫",
            PIfeishi: "肺噬",
            PIfeishi_info: "「肺片穿孔」<br/><li>每轮每名角色限四次，一名感染角色于其回合外获得牌后，其须弃置X+1张牌（X为其已损失体力值），然后获得1枚“肺噬”标记（一名角色至多拥有4枚“肺噬”）。</li>",
            PIfeixue: "肺血",
            PIfeixue_info: "「肺咳痰血」<br/><li>①每轮每名角色限四次，拥有“肺噬”标记的角色于其回合外弃置牌后，你可以获得其中的红色牌。②拥有“肺噬”标记的角色的准备阶段，你可以移去其任意枚“肺噬”标记，弃置其等量的牌并视为对其使用一张病【杀】。</li>",
            PIfeixue_append: '<span class="pathogen-append">在人体组织中游走或定居时能对脏器造成的机械性损害</span>',
            PI_helicobacterpylori: "幽门螺杆菌",
            PIfanwei: "反胃",
            PIfanwei_info: "「胃返口吐」<br/><li>每轮每名角色限三次，感染角色于其回合内使用【桃】【酒】时或从牌堆获得牌后，你可令其随机弃置一张手牌，若其因使用【桃】【酒】时而弃置牌且此牌与该【桃】【酒】花色相同，则无效之。</li>",
            PIweiyan: "胃炎",
            PIweiyan_info: "「胃壁溃疡」<br/><li>感染角色于其回合内弃置手牌后，若其本局游戏的弃牌次数大于其体力值，则你对该角色造成1点伤害。</li>",
            PIweiyan_append: '<span class="pathogen-append">慢性活动性胃炎、消化性溃疡、胃黏膜和胃癌的主要致病因素</span>',
            PI_fasciolopsis: "姜片虫",
            PIchangxi: "肠吸",
            PIchangxi_info: "「吸肠汲养」<br/><li>出牌阶段限一次，你可以交给一名感染角色一张手牌并令其和此牌获得“肠吸”标记，直到你的下个回合开始，其弃置与“肠吸”牌颜色相同的手牌后，你获得之，然后若你以此法获得的牌数大于等于你的体力值，则你回复1点体力。</li>",
            PIchanggeng: "肠梗",
            PIchanggeng_info: "「肠道梗阻」<br/><li>拥有“肠吸”标记的角色的弃牌阶段开始前和回合结束时，若其手牌中与“肠吸”牌颜色相同的手牌数不小于其体力值，则令其失去1点体力。</li>",
            PIchanggeng_append: '<span class="pathogen-append">姜片虫数多发生感染时常有腹泻与便秘交替出现，甚至肠梗阻</span>',
            PI_toxoplasma: "弓形虫",
            PIzhimang: "致盲",
            PIzhimang_info: "「瞽盲朦膄」<br/><li>①当你对感染角色造成伤害后，若该角色已受伤，则你可令其获得X枚“盲”标记（X为伤害值，一名角色至多拥有2枚“盲”标记，若其体力值为1，则其可额外至多拥有1枚“盲”标记，至多+2）。②拥有“盲”标记的角色使用牌指定唯一其他角色为目标时，你可以移除其1枚“盲”标记，然后将此目标改为随机其他角色。</li>",
            PIyiyan: "翳眼",
            PIyiyan_info: "「瞳炎疾明」<br/><li>拥有“盲”标记的角色使用牌指定你为目标后/成为除其以外的角色使用牌的目标后，你可获得其Y张牌并令此牌对你无效/令其无法响应此牌。然后你移除其1枚“盲”标记并摸Y张牌（Y为其拥有的“盲”标记数）。</li>",
            PIyiyan_append: '<span class="pathogen-append">由刚地弓形虫所引起的人畜共患病，可引发神经疾病</span>',
            PI_distome: "双盘吸虫",
            PIqingan: "侵肝",
            PIqingan_info: "「食肝伤明」<br/><li>一名其他角色感染后/感染角色回复体力后，你可以观看其手牌并获得其中一张牌（若无法获得则改为对其造成1点伤害）。</li>",
            PIqubao: "趋曝",
            visible_PIqubao: "invisbile",
            PIqubao_info: "「光彩夺目」<br/><li>结束阶段/当你受到伤害后，你可以观看一名存在暗置手牌的感染角色的手牌并明置其至多X张牌（X为1，若其未受伤则X+1），若此牌于你的下个回合开始前被除其之外的角色获得，则你令该角色感染，否则你获得之并对其造成1点伤害。</li>",
            PIqubao_append: '<span class="pathogen-append">自然界最神秘的寄生生物之一</span>',
            PI_unknownpathogen: "未知病原",
            PIshenwen: "神瘟",
            PIshenwen_info: "「神罚天疫」<br/><li>①游戏开始时，你随机获得两个“瘟疫与疾苦”系列角色的技能。②回合开始时和回合结束时，你可以移除任意因【神瘟】和【新疫】获得的技能，然后随机获得等量“瘟疫与疾苦”系列角色的技能并摸等量的牌。（你因【神瘟】和【新疫】拥有的技能数不能超过你的体力上限）</li>",
            PIxinyi: "新疫",
            PIxinyi_info: "「亚种突变」<br/><li>锁定技。①当你受到伤害后，你获得一个“瘟疫与疾苦”系列角色的技能。②其他角色死亡后，你因【神瘟】和【新疫】拥有的技能数上限+1。</li>",
            PIxinyi_append: '<span class="pathogen-append">每个人都有自己最喜爱的技能和角色，可惜您在这里没有选择的余地，手气可好了吧</span>',
            PI_rabies: "狂犬病",
            PIzaokuang: "躁狂",
            PIzaokuang_info: "「焦躁不安」<br/><li>出牌阶段限一次，你可以选择一名感染角色A并令其选择一项：①对一名由你指定的另一名非同族角色B使用一张【杀】（无距离限制）或【决斗】，若A拥有“恐”标记，则此牌造成的伤害+1，若A拥有“恐”标记且B受到了此牌造成的伤害，则你令B感染。然后你可以弃置一张伤害性牌重复此流程（若B本次未以此法受到过伤害则本次重复流程无法执行选项①）；②获得1枚“恐”标记并失去1点体力。</li>",
            PIshenkong: "神恐",
            PIshenkong_info: "「心神不宁」<br/><li>锁定技。①拥有“恐”标记的角色视为在所有角色攻击范围内（每名角色至多获得1枚“恐”标记）。②回合开始时，你移除场上所有“恐”标记并对被移去标记的角色各造成1点伤害，然后你摸2X牌（X为你本次移去的标记数）。</li>",
            PIshenkong_append: '<span class="pathogen-append">一旦出现临床症状，狂犬病几乎一定致命</span>',
            PI_filovirus: "丝状病毒",
            PIxueyi: "血疫",
            PIxueyi_info: "「化脏之毒」<br/><li>锁定技，你的回合内，当感染角色失去体力时/受到你对其造成的伤害后/弃置红色手牌后，此数值+1/你弃置其一张手牌/你摸一张牌。</li>",
            PIxuere: "血热",
            PIxuere_info: "「血热潮红」<br/><li>每轮每名角色限一次，当你使用牌指定感染角色时，你可以展示牌堆顶一张牌并与此牌颜色进行比较，若这两张牌中至少有一张牌为红色，你摸一张牌且该角色无法响应此牌；若至少有两张牌为红色，你摸一张牌且此牌对其造成的伤害+1。</li>",
            PIfuzang: "腐脏",
            PIfuzang_info: "「尸脏血融」<br/><li>限定技，出牌阶段，你可以令所有感染角色依次选择执行一项：①弃置X张红色牌，若X小于3则额外失去1点体力（X为其体力值）；②将体力失去至1点。所有角色执行完毕后，你可以对一名体力值为1的感染角色造成1点伤害。</li>",
            PIfuzang_append: '<span class="pathogen-append">一种少见但及其严重的疾病，它往往是十分致命的</span>',
            PI_gordius: "铁线虫",
            PIniaoran: "尿染",
            PIniaoran_info: "「尿道感染」<br/><li>当你攻击范围内的非同族可感染角色的弃牌阶段结束时，若其本阶段弃置了牌且弃置牌数不大于你的体力值，则你可以弃置一张牌并你进行一次判定，若判定结果为黑色，则你令其感染（若该角色为女性则跳过判定操作，直接令其感染）。</li>",
            PIponi: "迫溺",
            PIponi_info: "「破体浸水」<br/><li>结束阶段或当你受到伤害后，你可以选择一名感染角色并选择一项：1.令其弃置其装备区内至少X张牌（X为你的体力值，若其装备区牌数不足X则全部弃置并失去1点体力）；2.获得其Y张手牌（Y为你已损失的体力值且至少为1，至多为2），然后若其手牌数不大于其体力值，你对其造成1点伤害。</li>",
            PIponi_append: '<span class="pathogen-append">铁线虫偶然感染人体所引起一种较为罕见的寄生虫病</span>',
            PI_varicella: "水痘",
            PIyipao: "溢疱",
            PIyipao_info: "「毒液渗透」<br/><li>每轮限一次，当拥有“水疹”标记的角色受到伤害或失去体力后，你可以移除其身上任意个“水疹”标记并摸等量张牌，然后选择其攻击范围内等量名角色感染。</li>",
            PIshuizhen: "水疹",
            PIshuizhen_info: "「红斑漫痧」<br/><li>①拥有“水疹”标记的角色使用装备牌后，你可以弃置其一张手牌。②拥有“水疹”标记的角色失去装备区的牌后，你可以令其失去1点体力。③当你使用牌指定感染角色为目标时，你可以进行一次判定，若结果为红色，该角色获得1枚“水疹”标记（一名角色至多拥有3枚“水疹”标记）并弃置其一张牌，若此牌结算完毕后并未对其造成伤害，你可弃置一张牌并再次对其进行【水疹③】的判定。</li>",
            PIshuizhen_append: '<span class="pathogen-append">由水痘带状疱疹病毒初次感染引起的急性传染病</span>',
            PI_diphtheria: "白喉",
            PIkongchuan: "空传",
            PIkongchuan_info: "「空气传播」<br/><li>每轮限一次，每轮开始/回合开始时，你可以观看牌堆顶X张牌（X为全场人数）并可以以任意顺序置于牌堆顶，然后你选择其中一个点数，本轮其他角色于牌堆中获得与此牌点数相同的手牌后，其感染。</li>",
            PIhoubi: "喉痹",
            PIhoubi_info: "「见血封喉」<br/><li>每轮每名角色限一次，当感染角色于其摸牌阶段外获得牌后，你可令其展示其获得的牌，然后你选择一项（若所选项有对应的序号则你执行所选项前须弃置序号数张牌，手牌数不足序号数不能选择对应项）：①你弃置其等量的牌然后摸一张牌；②你选择其中一种类别的牌并令其下回合出牌阶段无法使用与此类型相同的手牌；③其弃置本次获得的牌并失去1点体力；背水：本轮【喉痹】失效。</li>",
            PIhoubi_append: '<span class="pathogen-append">由白喉杆菌引起的急性呼吸道传染病</span>',
            PI_pertussis: "百日咳",
            PIfeimo: "飞沫",
            PIfeimo_info: "「飞沫传播」<br/><li>每轮限一次，感染角色于其回合外弃置牌后，你可将其中一张牌交给一名其攻击范围内的一名其他非同族角色，并令其感染。</li>",
            PIbaike: "百咳",
            PIbaike_info: "「长咳久喘」<br/><li>" + (() => {
                return ["锁定技，感染角色弃置手牌后，其获得等量枚“咳”标记（一名角色至多拥有100个“咳”标记）；根据X的数量视为拥有以下效果（X为其拥有的“咳”标记）:", "①X∈[1,10]：因其触发的【飞沫】不计入使用次数。", "②X∈[11,30]：当其回合内使用牌后，其弃置一张牌，然后若其手牌数或本回合使用的牌数大于其体力上限，则你可令其将手牌数弃至其体力上限，然后若弃牌数不大于其体力值，你可以令其失去1点体力。", "③X∈[31,80]：其于摸牌阶段外获得牌后，其弃置手牌中数量最多的花色的一张牌，然后若其手牌数不小于其体力值，则你可令其执行一个手牌上限-1的弃牌阶段。其回合结束时，若其本回合弃置的手牌数不大于其体力上限或其本回合摸牌次数不小于其体力值，则你对其造成1点伤害；", "④X∈[81,100]：其摸牌阶段开始时，可以少摸一张牌令其本回合手牌上限+1。当X=100时，其移去所有“咳”标记，然后你摸四张牌。"].join("<br>");
            })() +
                "</li>",
            PIbaike_append: '<span class="pathogen-append">由百日咳杆菌引起的急性呼吸道传染病</span>',
            PI_measles: "麻疹",
            PIqirong: "气溶",
            PIqirong_info: "「瘴气弥漫」<br/><li>感染角色失去装备区的牌后，你可以选择一项：①令其攻击范围内的一名其他角色感染；②弃置其失去牌数的手牌，若弃置的牌数不小于其体力值，其失去1点体力。</li>",
            PIduchuang: "毒疮",
            PIduchuang_info: "「麻痘浮肿」<br/><li>每轮每名角色限一次，感染角色使用装备牌后，你可以观看牌堆顶X张牌（X为其装备区的牌数），然后你可以从这些牌或你的手牌中选择一张伤害性牌对其使用之（无距离和次数限制且无视其防具），若你选择使用且此牌造成伤害，则你可以弃置其装备区X+1张牌（X为此伤害值），否则你摸两张牌。</li>",
            PIduchuang_append: '<span class="pathogen-append">儿童最常见的急性呼吸道传染病之一</span>',
            PI_tuberculosis: "结核",
            PIfeilao: "肺痨",
            PIfeilao_info: "「白核瓒肺」<br/><li>①感染角色于其摸牌阶段外获得牌后，其获得1枚“结核”标记。②手牌上限-X（X为其拥有的“结核”标记数）。③当其一次性弃置不少于max(X,2)张牌后，你可以移除其任意枚“结核”标记并令其失去等量体力。</li>",
            PIbaisi: "白死",
            PIbaisi_info: "「白骨嶙峋」<br/><li>每轮限四次，感染角色的出牌阶段开始时，你可以弃置任意张牌并选择该角色等量张牌，然后你展示一张牌并令其选择一项：①弃置这些牌中与此牌颜色相同的牌；②受到你对其造成的1点伤害并获得1枚“结核”标记（一名角色至多拥有4枚“结核”标记，一名角色每轮至多获得2枚“结核”标记）。</li>",
            PIbaisi_append: '<span class="pathogen-append">至今已经感染全球约有四分之一的人口的致命细菌',
            PI_typhoid: "伤寒",
            PIgaoshao: "高烧",
            PIgaoshao_info: "「高温热病」<br/><li>感染角色回复体力至体力上限后，或感染角色一次性获得超过其体力值的手牌后，你可以弃置一张红色牌，令其失去1点体力。</li>",
            PIfuxie: "腹泻",
            PIfuxie_info: "「河鱼腹疾」<br/><li>感染角色回合开始时，若其手牌数大于其体力值，你可以令其弃置至X张牌（X为其体力值），若其弃置的牌数大于其已损失的体力值（至少为2），其失去一点体力，然后你可以感染其下家角色。</li>",
            PIfuxie_append: '<span class="pathogen-append">由伤寒沙门氏菌引起的可危及生命的感染</span>',
            PI_dengue: "登革热",
            PIwenre: "蚊热",
            PIwenre_marktext: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIwenre_mark.png>",
            PIwenre_info: "「萃血毒吻」<br/><li>①游戏开始时，你将起始手牌标记为“蚊”。②当你使用“蚊”对非同族角色造成伤害后，你可以获得其一张手牌，若此牌为红色，则你回复1点体力。③当你使用黑色的“蚊”指定非同族角色时，你可令此牌不可被其响应。④当感染角色受到“蚊”造成的伤害后，你可以进行一次判定，若结果为红色，若其未/已装备装备牌，其弃置一张手牌/装备区的牌；若结果为黑色，你摸一张牌。</li>",
            PIqingu: "侵骨",
            PIqingu_info: "每轮每名角色限两次，当感染角色造成/受到伤害时，你可以令其弃置至少X张牌（X为伤害值，且X至少为1），否则此伤害-1/你可以弃置X张牌并令其失去1点体力。",
            PIqingu_append: '<span class="pathogen-append">是登革热病毒引起、伊蚊传播的一种急性传染病</span>',
            PI_westnilevirus: "西尼罗病毒",
            PIwenmei: "蚊媒",
            PIwenmei_info: "「蚊虫媒介」<br/><li>①游戏开始时，你可以令一名非同族角色获得“蚊”标记并令其感染。②拥有“蚊”标记的角色对其他角色造成伤害后，你令受伤角色感染。③拥有“蚊”标记的角色受到伤害后，你令其失去“蚊”标记。</li>",
            PInaore: "脑热",
            PInaore_info: "「神炎炙脑」<br/><li>①出牌阶段限一次，你可以与一名感染角色拼点，若你赢，该角色选择弃置X张与你的拼点牌花色相同的张牌（X为其已损失的体力值且至少为1）或失去1点体力；②若你没赢，你摸两张牌。②当你使用红色拼点牌时，此牌点数+Y（Y为你与其的体力值之差且至少为2）。</li>",
            PInaore_append: '<span class="pathogen-append">可以导致人类罹患神经系统疾病甚至死亡</span>',
            PI_plasmodium: "疟原虫",
            PIziyang: "滋养",
            PIziyang_mark: "invisible",
            PIziyang_info: "「夺血掠养」<br/><li>①当你使用牌指定非同族角色结算完毕后，若你未因此牌对其造成过伤害；或当一名感染角色回复体力后。你可以选择其一张手牌标记为“滋”（仅你可见）。②“滋”不因使用进入弃牌堆后，你获得之。</li>",
            PInveji: "疟疾",
            PInveji_info: "「寒摆热胀」<br/><li>每轮每名角色限一次，当感染角色使用牌时，若此牌对应的实体牌中包含“滋”，则你可以进行一次判定，若判定结果：与此牌颜色相同，你可弃置一张与此牌颜色相同的牌并令此牌无效；为红色，其失去1点体力；为黑色，其需弃置两张牌；与此牌颜色不同，你摸一张牌。</li>",
            PInveji_append: '<span class="pathogen-append">通过某些类型的蚊子传播给人类的疾病</span>',
            PI_gonorrhea: "淋病",
            PIxingdu: "性毒",
            PIxingdu_info: "「欲迷秽身」<br/><li>一名角色受到伤害后，若伤害来源与该角色异性且双方均为非同族角色，你可以弃置一张红/黑色牌令男性与双性/女性与无性方感染，若其已感染则改为弃置其一张牌。</li>",
            PIkuiyin: "溃阴",
            PIkuiyin_info: "「性乱损阴」<br/><li>感染角色的结束阶段，你可以弃置一张牌并弃置其一张手牌，若你与其弃置的牌颜色相同，则你摸一张牌；若该角色为男性与双性/女性与无性且该角色弃置的牌为黑/红色，你可令其选择一项：①弃置一张与此牌颜色不同的的一张手牌；②失去1点体力，获得“溃阴”标记（拥有“溃阴”标记的角色手牌上限-1，其于其弃牌阶段或结束阶段失去红色牌/体力后，你摸一/两张牌）。</li>",
            PIkuiyin_append: '<span class="pathogen-append">一种古老而又常见的性病</span>',
            PI_angiostrongylus: "管圆线虫",
            PIluya: "颅压",
            PIluya_info: "「颅内高压」<br/><li>①结束阶段，你可以选择一名感染角色，直到你的下个回合结束，其使用牌或造成伤害后，其获得等量“颅压”标记。②一名角色的“颅压”标记数大于其体力值后，你可以移去其体力值数的“颅压”标记，然后若此时处于其回合内/外，则结束此回合/跳过其下个出牌阶段。</li>",
            PInaozu: "脑卒",
            PInaozu_info: "「脑风淤血 」<br/><li>出牌阶段限一次，你可以选择一名“颅压”标记数大于其体力值的一名感染角色，移除其拥有的所有“颅压”的标记，然后你可以获得其X张手牌（X为其已损失体力值且X至少为1）。然后其选择弃置Y张牌或失去Y点体力（Y为其“颅压”标记数与其体力值之差且Y至多为其体力上限），若其因此进入濒死状态，则其不能使用手牌直到其下回合开始。</li>",
            PInaozu_append: '<span class="pathogen-append">较常见的一种蠕虫蚴移行症，是一种人畜共患病</span>',
            PI_avianinfluenza: "禽流感",
            PIniaomei: "鸟媒",
            PIniaomei_mark: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIniaomei_mark.png>",
            PIniaomei_info: "「禽鸟媒介」<br/><li>①游戏开始时，你将你的手牌标记为“鸟”。②每轮限一次，出牌阶段或当你受到伤害后，你可以将一张“鸟”交给一名非同族角色。③其他角色获得你的“鸟”后，你令其进行一次判定，若判定颜色为：其获得你的“鸟”中的颜色，你令其感染；黑色，其弃置一张牌；红色，你摸两张牌。</li>",
            PIfeishuai: "肺衰",
            PIfeishuai_info: "「纤肺水肿」<br/><li>已感染已受伤角色于其回合外一次性获得至少两张牌后，你令其选择一项：①下回合手牌上限-X；②弃置X张红色牌；③受到1点伤害（X为其已损失的体力值且X至少为1）。若X大于其体力值，则你视为对其使用一张病【杀】。</li>",
            PIfeishuai_append: '<span class="pathogen-append">是由禽流感病毒引起的传染病</span>',
            PI_spanishinfluenza: "西班牙流感",
            PIsiji: "肆疾",
            PIsiji_info: "「灾祸波及」<br/><li>每轮每名角色限一次，非同族感染角色受到伤害后，你可以弃置其与与其相邻的一名非同族角色的各一张牌，然后若这两张牌的颜色：相同且为红色，你令其中一名角色感染或弃置其中一名感染角色的一张牌；相同且为黑色，你对其中一名角色造成1点伤害；不相同，你摸两张牌。</li>",
            PIeli: "恶疠",
            PIeli_info: "「流疫侵身」<br/><li>锁定技。①当你于回合内对感染角色造成伤害后，你获得1枚“恶”标记（至多拥有5枚）。②你使用【杀】的次数上限+X（X为你拥有的“恶”标记数）。③每轮限一次，当你使用牌时，若此牌仅指定唯一角色且该角色已感染，则你可以移去任意枚“恶”标记并令等量感染角色成为此牌的额外目标。</li>",
            PIeli_append: '<span class="pathogen-append">西班牙型流行性感冒是人类历史上最致命的传染病</span>',
            PI_simianflu: "猩猩流感",
            PIjiqun: "集群",
            PIjiqun_low: "低级猩猩",
            PIjiqun_level: "高智猩猩",
            PIjiqun_info: "「野性聚唤」<br/><li>锁定技。①游戏开始时/回合开始时，你获得X枚“低级猩猩”（X为你的体力上限，你至多拥有9枚“猩猩”）。②其他角色弃置装备牌后，你获得1枚“低级猩猩”。③当你受到1点伤害后/结束阶段，你移去1枚“低级猩猩”并获得1枚“高智猩猩”。</li>",
            PIzhiqi: "智启",
            PIzhiqi_info: "「激神觉智」<br/><li>觉醒技，回合开始时，若你的“高智猩猩”数时大于你的体力值，则你将体力值回复至体力上限，将手牌数摸至体力上限，弃置判定区所有牌，感染场上所有体力值不大于你的角色，修改【集群】并获得【殖猿】。</li>",
            PIzhiqi_append: '<span class="pathogen-append">基因修改，增加猩猩智力，但未经人体测试</span>',
            PIzhiyuan: "殖猿",
            PIzhiyuan_info: "「强猩野掠」<br/><li>①当你使用牌指定感染角色为目标后，你可以移去1枚“高智猩猩”并令其选择一项：1.交给你一张牌；2.无法响应此牌。若此牌造成伤害，你获得该角色一张牌（若无法获得改为对其造成1点伤害）。②感染角色的回合开始时，你可以移除1枚“高智猩猩”并令其选择一项：1.交给你一张牌；2.受到你对其造成的1点伤害。</li>",
            PI_echinococcus: "包虫",
            PIjiqiu: "棘球",
            PIjiqiu_info: "「蛊疫积毒」<br/><li>①感染角色回复体力/于其回合外获得牌后，你可以令其获得2/1枚“棘球”标记（“棘球”标记上限为5），然后若其拥有至少4枚“棘球”标记，则你可以获得其一张牌。②至少4枚“棘球”标记的角色无法响应你使用的牌。</li>",
            PIchongai: "虫癌",
            PIchongai_info: "「囊裂散毒」<br/><li>当你对拥有“棘球”标记的角色造成伤害时，你依次执行：①若其拥有的“棘球”标记数不小于3，则此伤害+1；②你可以移去其X枚“棘球”标记并执行以下项目（X为伤害值且至少为1）：X为1，你弃置其一张牌；X为2，你视为对其使用一张无距离和次数限制的病【杀】；X大于等于3，你对其造成1点伤害；X大于其剩余的“棘球”标记数，其失去1点体力。③其获得1枚“棘球”标记。</li>",
            PIchongai_append: '<span class="pathogen-append">细粒棘球绦虫的幼虫感染人体所致的疾病</span>',
            PI_amoeba: "变形虫",
            PIshinao: "食脑",
            PIshinao_info: "「噬脑吸髓」<br/><li>每轮每名角色限一次，当你使用牌指定感染角色为目标后，若你已受伤，则你可令其弃置X张与此牌花色相同的手牌（X为你已损失的体力值），然后若其手牌数：小于等于你，你可以获得其一张牌并回复1点体力；大于等于你，其失去1点体力。</li>",
            PIbianxing: "变形",
            PIbianxing_info: "「幻变化形」<br/><li>出牌阶段限一次，你可以将一张牌当作任意基本牌或普通锦囊牌对一名感染角色使用。</li>",
            PIbianxing_append: '<span class="pathogen-append">少数种类偶尔会侵入动物机体</span>',
            PI_poliomyelitis: "脊髓灰质炎",
            PItanhuan: "瘫痪",
            PItanhuan_info: "「半身不遂」<br/><li>每轮每名角色限一次：①感染角色造成伤害时，你可以弃置一张牌并令此伤害-1或弃置等同于伤害值的牌（至少为1）并防止此伤害，然后若受伤角色为你，则你可以失去1点体力并令其将武将牌翻面；②感染角色受到伤害时，你可以令其选择弃置X张牌（X为其已损失体力值且X至少为1）或令此伤害+1，然后或伤害来源为你，则你可以失去1点体力并令其随机废除一个装备栏。</li>",
            PIliwei: "力萎",
            PIliwei_info: "「残神肢废」<br/><li>每轮限两次，当你使用牌指定感染角色为目标后，你可以摸X张牌。然后你可以弃置X张牌并令其不可响应此牌。若其受到此牌造成的伤害进入濒死状态，则你随机废除其一个装备栏，回复1点体力，将手牌数摸至其体力上限。</li>",
            PIliwei_append: '<span class="pathogen-append">由病毒侵入血液循环系统引起的急性传染病，易感婴幼儿</span>',
            PI_ancylostomatrichuris: "钩虫鞭虫",
            PIyanshi: "厌食",
            PIyanshi_info: "「食欲减退」<br/><li>已受伤感染角色的摸牌阶段开始时，你可以获得其一张牌，然后令其选择一项：①少摸一张牌；②本回合手牌上限改为X-1（X为其当前体力值）。</li>",
            PIliji: "痢疾",
            PIliji_info: "「肠泻虫痢」<br/><li>感染角色的出牌阶段开始前，若其手牌数大于等于其体力值，则你可以弃置两张牌并令其执行一个弃牌阶段，然后若该角色：未受伤，其失去1点体力；已受伤，你选择回复1点体力或感染其下家（若其下家已感染则改为摸一张牌）。</li>",
            PIliji_append: '<span class="pathogen-append">导致患者出现贫血及与贫血相关的症状</span>',
            PI_aspergillus: "黄曲霉菌",
            PIfuhua: "腐化",
            PIfuhua_mark: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIfuhua_mark.png>",
            PIfuhua_info: "「腐化分解」<br/><li>①结束阶段或当你受到伤害后，你可以选择一名手牌数不小于其体力值的感染角色，标记其一张手牌为“腐”（对你可见）。②拥有“腐”的角色的手牌上限-1。③一名角色因弃置失去“腐”后，你弃置其一张牌，若此牌为：基本牌，你可以重铸一张牌；锦囊牌；你摸两张牌；装备牌，你视为对其使用一张病【杀】。</li>",
            PImeibian: "霉变",
            PImeibian_info: "「毒霉传孢」<br/><li>感染角色使用“腐”指定第一个目标时，若目标角色未包含你，则你可以将此牌的使用者该为你，然后你可以为此牌增加至多X个目标。若此牌目标包含其，则其失去1点体力并弃置X张牌（X为发动此技能时其已损失体力值且X至少为1）。</li>",
            PImeibian_append: '<span class="pathogen-append">广泛存在于食物中的剧毒微生物</span>',
            PI_swineflu: "猪流感",
            PIshicun: "适村",
            PIshicun_info: "「农村适应」<br/><li>当你对感染角色造成伤害后，你可以感染一名手牌数小于你的可感染角色，然后若受伤角色的手牌数不大于你，则你可以摸一张牌。</li>",
            PIqishuai: "器衰",
            PIqishuai_info: "「脏统衰竭」<br/><li>出牌阶段限一次，你可以：①选择一名感染角色，获得以下效果：当你对其使用牌时，你进行一次判定并记录判定点数（覆盖之前的【器衰】记录），若不存在上次的【器衰】判定点数或此次判定点数大于上次的【器衰】判定点数，则根据判定牌的花色和类别令其获得对应效果————" + (() => {
                return ["红桃：其回复体力时，取消之", "方片：其于摸牌阶段外获得牌后，受到1点伤害", "黑桃：其跳过下个摸牌阶段", "梅花：其下回合手牌上限-其已损失体力值", "基本：其造成伤害后，弃置伤害值张牌", "锦囊：其使用牌后，本回合不能使用或打出此类别的手牌", "装备：其失去装备区的牌后，废除对应装备栏"].join("；");
            })() + "。②弃置一张大于等于【器衰】已记录点数的牌并摸【器衰】记录点数的牌，清除【器衰】点数记录，然后你可以选择一名拥有【器衰】效果的角色，清除其拥有的所有【器衰】效果并令其失去等量体力。</li>",
            PIqishuai_append: '<span class="pathogen-append">新变异的甲型流感病毒，与西班牙流感存在相似序列</span>',
            PI_neurie: "圣诞蠕虫",
            PIchongli: "虫礼",
            PIchongli_info: "「天赐福礼」<br/><li>出牌阶段限X次（X为你的体力值），你可以将一张牌交给一名非同族角色，若其未感染，则令其感染；若你交给其红色牌，则你可以令其摸一张牌并复原武将牌；若你交给其黑色牌，则你可以令其获得其判定区的一张牌。</li>",
            PIshengan: "圣安",
            PIshengan_info: "「颂爱福音」<br/><li>①出牌阶段限X次（X为你的体力值），你可以将一张红色牌当作【乐不思蜀】对感染角色使用。②一名感染角色跳过出牌阶段后，你可以令其回复1点体力，且你执行一个额外的出牌阶段，然后你令其将手牌数摸至体力上限或令其跳过下个弃牌阶段。</li>",
            PIxingshi: "幸世",
            PIxingshi_info: "「恒歌福国」<br/><li>觉醒技，回合开始时，若场上所有非同族角色均感染，且没有已受伤或已死亡的非同族角色，则你和所有非同族角色获得游戏胜利。</li>",
            PIxingshi_append: '<span class="pathogen-append">用欢乐与幸福感染全世界的奇迹</span>',
            PI_fentianhuowu: "焚天火舞",
            PIwenjiang: "瘟降",
            PIwenjiang_info: "「瘟神降世」<br/><li>限定技，非同族角色死亡前，你可以取消之，然后观看随机X张“瘟疫与疾苦”系列角色的武将牌并选择其中一张替换其武将牌（X为场上的同族角色数），然后令其将手牌数摸至体力上限，将体力值回复至体力上限。若其为同族角色击杀或场上病原体武将数不大于你体力上限的一半（向上取整），则你重置此技能。</li>",
            PIyixing: "疫行",
            PIyixing_info: "「流疫重染」<br/><li>①感染角色进入濒死状态时，你可以弃置其X张牌（X为场上的同族角色数）；②感染角色死亡后，你可以场上所有同族角色各摸两张牌。若其为同族角色A杀死，则你选择一项：1.令A摸一张牌并于此回合结束后执行一个额外回合；2.令A增加1点体力上限。然后若你拥有【疾世】且A不为你，则你可以与A各摸一张牌。</li>",
            PIjishi: "疾世",
            PIjishi_info: "「灭世之疾」<br/><li>主公技，锁定技。①与你同族的角色的胜利条件改为场上所有非同族角色死亡。②每轮限X次（X为场上的同族角色数），其他角色发动【罹染】后，你可以与其各摸一张牌。</li>",
            PIjishi_append: '<span class="pathogen-append">欢迎莅临瘟疫公司，博士</span>',
            PI_nipahvirus: "尼帕病毒",
            PIkangre: "抗热",
            PIkangre_info: "「适温热浪」<br/><li>当你受到火属性伤害或红色牌造成的伤害后，你可以选择一名其他角色，若其未感染，则令其感染；若其已感染，则你摸一张牌。</li>",
            PInaoyan: "脑炎",
            PInaoyan_info: "「急性脑炎」<br/><li>出牌阶段限一次，你可以观看一名感染角色的手牌并弃置其中至多X张红色牌（X为其体力值）。然后若其黑色手牌数大于红色手牌数，则令其失去1点体力。然后其本回合不能使用或打出本次弃置牌中唯一最多类型的牌。</li>",
            PInaoyan_append: '<span class="pathogen-append">有史以来最致命的尼帕病毒大爆发</span>',
            PI_candida: "念珠菌",
            PIzhijun: "植菌",
            PIzhijun_info: "「菌丝侵体」<br/><li>出牌阶段每项各限X次（X为你的体力值）：①当你使用非延时锦囊牌结算完毕后，若此牌未造成伤害，则你可以将此牌对应的实体牌置于其中一名已感染目标角色的武将牌上，称为“菌丝”（每名角色至多拥有一张“菌丝”）。②你可以将一名角色武将牌上的“菌丝”对其使用（无距离和次数限制），若无法使用则改为你可以对其使用一张无距离和次数限制的【杀】。</li>",
            PIkuimo: "溃膜",
            PIkuimo_info: "「黏膜溃殇」<br/><li>当一名角色感染后，或一名感染角色失去“菌丝”后，若其未受伤，你可以对其造成1点伤害；若其已受伤，你可以弃置其一张牌。</li>",
            PIkuimo_append: '<span class="pathogen-append">白色念珠菌引起的一种真菌病</span>',
            PI_creutzfeldtjacobdisease: "克雅氏病",
            PIkunhuo: "困惑",
            PIkunhuo_info: "「迷思困惘」<br/><li>每轮每名角色限一次，当你成为感染角色使用牌的目标后，你可以进行判定，若判定结果与此牌：花色相同，此牌对你无效；颜色相同，你可以弃置其一张牌并摸一张牌；颜色不同，其选择一项：①弃置一张与判定牌类别相同的牌；②本回合不能使用或打出与判定牌类别相同的牌。</li>",
            PImianluan: "免乱",
            PImianluan_info: "「免疫紊乱」<br/><li>每轮每名角色限一次，感染角色回复体力后或使用牌指定自己为目标后，你可以观看其手牌，然后可以你选择一项：①对其使用其中一张伤害牌（无距离和次数限制，其响应此牌前需弃置X张牌，否则其不可响应此牌，X为其体力值）；②弃置两张牌并失去1点体力，令其非锁定技失效直到其下个回合开始。</li>",
            PImianluan_append: '<span class="pathogen-append">蛋白质异常折叠催生的朊病毒新式变种</span>',
            PI_pithovirus: "阔口罐病毒",
            PIkanghan: "抗寒",
            PIkanghan_info: "「耐风寒流」<br/><li>当你受到冰属性伤害或黑色牌造成的伤害后，你可以选择一名其他角色，若其未感染，则令其感染；若其已感染，则你摸一张牌。</li>",
            PIshizhi: "失智",
            PIshizhi_info: "「退智丧理」<br/><li>①感染角色造成/受到伤害时，你可以弃置其/自己两张牌，令此伤害+1并令其获得“失智”标记。②有“失智”标记的角色使用锦囊牌时，你可以弃置一张牌，然后其弃置一张牌，令此牌无效，然后其将此牌改为【杀】使用。③有“失智”标记的角色每回合至多使用X张锦囊牌（X为其体力值且至多为3）。④有“失智”标记的角色弃置锦囊牌后，你摸等量的牌。</li>",
            PIshizhi_append: '<span class="pathogen-append">基因结构比智人更古老，它能把人类带回旧石器时代</span>',
            PI_scarletfever: "猩红热",
            PIrongxue: "溶血",
            PIrongxue_info: "「破血裂红」<br/><li>感染角色回复体力时，你可以弃置一张牌，视为对其使用一张病【杀】（无距离和次数限制，花色和点数由你指定）。若此【杀】对其造成伤害，则你可以选择一项：①取消其本次体力回复；②获得其一张手牌并回复1点体力，若你获得了其红色牌，则你摸一张牌；③背水！当前回合角色为你或其体力值大于你。</li>",
            PIdandu: "丹毒",
            PIdandu_info: "「淋巴恶炎」<br/><li>每轮限一次，感染角色受到你使用有点数的牌对其造成的伤害后，令范围为{此牌点数±其当前体力值}，你可以令其获得以下效果直到其下个回合结束：①其使用范围内点数的牌后，其弃置一张牌。②其回合结束时，若其本回合使用范围内点数的牌数大于其体力上限，则你可以升级【丹毒】并令此效果再延长一回合。</li>",
            PIdandu_2: "丹毒·改",
            PIdandu_2_info: "「淋巴恶炎」<br/><li>每轮限一次，感染角色受到你使用有点数的牌对其造成的伤害后，令范围为{此牌点数±其当前体力值}，你可以令其获得以下效果直到其下个回合结束：①其使用范围内点数的牌后，其弃置一张牌，若其弃置了黑色牌，则你摸一张牌。②其回合结束时，若其本回合使用范围内点数的牌数大于其体力上限，则你可以升级【丹毒】并令此效果再延长一回合。</li>",
            PIdandu_3: "丹毒·极",
            PIdandu_3_info: "「淋巴恶炎」<br/><li>每轮限一次，感染角色受到你使用有点数的牌对其造成的伤害后，令范围为{此牌点数±其当前体力值}，你可以令其获得以下效果直到其下个回合结束：①其使用范围内点数的牌后，其弃置一张牌，若其弃置了黑色牌，则你摸一张牌。②其使用范围内点数的牌指定你为目标后，你可以弃置一张与此牌类别相同的牌并令此牌对你无效。</li>",
            PIdandu_append: '<span class="pathogen-append">在侵入部位及其周围组织引起炎性和化脓性变化</span>',
            PI_anthrax: "炭疽",
            PIjiaju: "痂疽",
            PIjiaju_info: "「焦脓黑疽」<br/><li>当你攻击范围的非同族角色使用装备牌后，若其：已受伤，你可以感染其并摸一张牌，若你摸到了黑色牌，则你可以视为对其使用一张病【杀】；未感染，你可以弃置其一张牌，若弃置了其黑色牌，则你可以对其造成1点伤害。</li>",
            PIbaixue: "败血",
            PIbaixue_info: "「血毒侵染」<br/><li>①每轮限X次（X为你的体力值），回合结束时或你杀死一名感染角色后，你可以对场上本回合所有失去过体力或黑色牌的感染角色各造成1点伤害。②感染角色的回合结束时，若其本回合回复过体力，则你令其选择弃置Y张红色牌或失去1点体力（Y为其本回合回复体力的次数）；然后若其手牌均为黑色，则你可以对其造成1点伤害；然后若Z大于等于其体力值，则其失去Z点体力（Z为其本回合首次回复体力后的体力值）。</li>",
            PIbaixue_append: '<span class="pathogen-append">炭疽杆菌曾被帝国主义作为致死战剂之一',
            PI_porphyria: "卟啉症",
            PIxueyou: "血友",
            PIxueyou_info: "「阻凝血结」<br/><li>感染角色的体力增加/减少时，你可以弃置一张牌并令其进行判定，若判定结果为红色，则取消此增加/你摸一张牌，然后若本回合角色为你且其红色手牌数不小于X（X为其体力值），则你可以视为对其使用一张无距离和次数限制且不可被响应的病【杀】（每回合限一次）。</li>",
            PIxueai: "血癌",
            PIxueai_tag: "牌堆顶",
            PIxueai_mark: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIxueai_mark.png>",
            PIxueai_info: "「恶增血瘤」<br/><li>①感染角色的黑色判定牌生效前，你可以打出一张手牌或牌堆顶X张牌（X为其体力值）替换之。若你打出了红色牌，则你可以令其于判定牌生效后将判定牌标记为“血癌”令其获得（你可查看其他角色的“血癌”牌）且其不能使用此牌。②有“血癌”牌的角色的{回合开始}/{回合结束}时，你{可以}/{须}令其弃置所有“血癌”牌，若其弃置的牌数大于等于其体力值，则令其失去max(1,abs(弃置牌数-X))点体力。若其因此进入濒死状态，则{其减1点体力上限}/{你观看其手牌并标记其一张红色手牌为“血癌”牌}。</li>",
            PIxueai_append: '<span class="pathogen-append">卟啉症的患者的悲惨命运被怀疑是吸血鬼故事的起源</span>',
            PI_streptococcus: "链球菌",
            PIfeiyan: "肺炎",
            PIfeiyan_info: "「菌肺伤炎」<br/><li>每轮每名角色限两次，感染角色于摸牌阶段外获得牌后，你可以展示其至多X张牌（X为其已损失体力值且至少为1），然后若其中的红色牌数量：不小于其中的黑色牌数量，你可以弃置一张牌，视为对其使用一张病【杀】；不小于其体力值，你对其造成1点伤害。然后你可以弃置其中的黑色牌。</li>",
            PIniangnong: "酿脓",
            PIniangnong_info: "「化脓伤裂」<br/><li>每轮每名角色限一次，当你对感染角色造成伤害后或感染角色失去体力后，你可以弃置其X张牌（X为其已损失体力值且至少为1），然后你选择其中一张伤害类牌对其使用，若此牌未对其造成伤害，则你获得此牌。</li>",
            PIniangnong_append: '<span class="pathogen-append">能引起各种化脓性炎症以及链球菌变态反应性疾病的球菌</span>',
            PI_papillomavirus: "乳头瘤病毒",
            PIyudu: "欲毒",
            PIyudu_info: "「滥纵情毒」<br/><li>每轮每名角色限两次，当已感染男性角色/已感染女性角色对未感染角色造成伤害后/受到未感染角色对其造成的伤害后，你随机亮出牌堆的一张牌。若此牌为红色，则受伤角色/伤害来源感染并失去1点体力。若此牌为黑色，则你可以获得之然后摸一张牌，或交给其然后摸两张牌。若此牌为梅花，则其获得1/2枚“欲毒”标记（一名角色至多拥有3枚“欲毒”标记）。</li>",
            PIxingliu: "性瘤",
            PIxingliu_info: "「尖锐湿疹」<br/><li>①拥有“欲毒”标记的角色使用黑色牌指定自己为目标时，其获得1枚“欲毒”标记。②拥有“欲毒”标记的角色使用指定了除其以外的角色的牌结算完毕后，若其未因此牌造成过伤害，则你可以移去其1枚“欲毒”标记并令其失去1点体力，然后你弃置其X张牌（X为其剩余的“欲毒”标记数）。</li>",
            PIxingliu_append: '<span class="pathogen-append">众人谈性色变的病原体，他的存在还与癌症诱发因素有关</span>',
            PI_lactobacillusacetobacter: "乳酸菌醋酸菌",
            PIsuanshi: "酸蚀",
            PIsuanshi_mark: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIsuanshi_mark.png>",
            PIsuanshi_info: "「解糖成酸」<br/><li>①感染角色的结束阶段/感染角色对你造成伤害后，你可以观看其手牌并选择其中一张红色牌标记为“糖”。②一名角色使用“糖”时，你进行一次判定，若判定结果为红色，则你摸一张牌，此牌结算完毕后你获得此“糖”；若判定结果为黑色，则你令此牌无效，然后弃置其一张牌。</li>",
            PIquchi: "龋齿",
            PIquchi_info: "「酸化侵龋」<br/><li>①已受伤感染角色使用牌指定自己为目标后/使用“糖”结算完毕后，你令其获得1枚“龋齿”标记。②拥有“龋齿”标记的角色使用牌结算完毕后，其弃置X张牌（X为其拥有的“龋齿”标记且至多为3）。③拥有“龋齿”标记的角色使用【杀】造成伤害时，其可以令伤害-1并失去1点体力，直到其下回合结束前不能使用【杀】，然后其移去1枚“龋齿”标记。</li>",
            PIquchi_append: '<span class="pathogen-append">附着在牙齿表面，是导致诱发龋齿病的元凶之一',
            PI_leprosy: "麻风",
            PIjiangsuo: "僵缩",
            PIjiangsuo_info: "「神麻筋萎」<br/><li>每轮每名角色限一次，当你对非同族角色造成伤害后，你可以弃置其至多X张牌（X为其已损失体力值）。然后若该角色已感染且X：不小于其手牌数，你感染一名角色；不小于其体力值，其手牌上限-1、摸牌阶段少摸一张牌、受到瘟疫公司角色造成的伤害后失去1点体力直到其下回合结束。</li>",
            PIguqi: "骨畸",
            PIguqi_info: "「摧节异骨」<br/><li>锁定技。①感染角色于其回合外失去装备牌后，你弃置其Y张牌（Y为其体力值），然后废除其本次失去的装备的副类别对应的装备栏，然后你摸Z张牌（Z为其废除的装备栏数）。②感染角色成为你使用牌的目标后，若其已受伤且其装备区牌数不大于你的体力值，则其不可响应此牌。</li>",
            PIguqi_append: '<span class="pathogen-append">它悄然吞噬肌肤与神经，终将鲜活的生命拖入残缺与孤寂的深渊</span>',
            PI_mycoplasmachlamydia: "支原体衣原体",
            PIjieniao: "解脲",
            PIjieniao_info: "「隐疾阴患」<br/><li>感染角色的弃牌阶段开始前，你可以观看其手牌并弃置其一张牌，其于本阶段弃置与此牌花色相同的牌后，你对其造成1点伤害并感染其下家；若其本阶段未因此技能外弃置过牌且其为男性/女性，则你令其失去1点体力/你摸X张牌（X为其已损失体力值且至少为1）。</li>",
            PIshayan: "沙眼",
            PIshayan_buff: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIshayan_mark.png>",
            PIshayan_info: "「瘢染目痕」<br/><li>感染角色的出牌阶段开始前，你可以观看其手牌并弃置其一张牌，然后你进行一次判定，若其手牌中有与判定点数相同的牌，则其不能使用这些牌；否则你获得判定牌。直到其下个回合开始，其成为点数为本次拼点点数±2X的牌的目标后，你弃置其一张牌（X为其已损失体力值且至少为1）。</li>",
            PIshayan_append: '<span class="pathogen-append">悄无声息地侵袭泌尿生殖系统甚至眼睛，造成难以挽回的后果</span>',
            PI_rickettsia: "立克次氏体",
            PIyangbing: "恙病",
            PIyangbing_info: "「毒虫之啮」<br/><li>当你对非同族角色造成伤害后，你可以弃置其一张手牌，其选择弃置一张与此牌花色不同的牌或于自己下个回合结束时弃置所有与此牌颜色相同的手牌，若其弃置了红色牌/装备牌，则你获得之/可以感染一名你与其相邻的其他角色。</li>",
            PIkoure: "寇热",
            PIkoure_info: "「红瘟热毒」<br/><li>锁定技。①你的回合内，手牌数大于等于体力值的感染角色不能响应你使用的牌。②你的回合外，手牌数大于等于你/小于你的体力值的感染角色对你造成伤害后，你对其造成1点伤害/视为对其使用一张病【杀】。</li>",
            PIkoure_append: '<span class="pathogen-append">通过节肢动物隐匿传播，引发高热、皮疹多器官损伤，严重时可致命的病原</span>',
            PI_ringvirus: "铃病毒",
            PIlingran: "灵染",
            PIlingran_info: "「怨灵回响」<br/><li>①非同族角色武将牌翻至背面后或横置后，你令其感染，若其已感染则改为令其弃置X张牌（X为你已损失的体力值且至少为1）。②非同族角色武将牌翻至正面后或重置后，你令其获得1枚“怨”标记并摸一张牌（一名角色拥有的“怨”标记数至多为你的体力上限）</li>",
            PIyuanzu: "怨诅",
            PIyuanzu_info: "「咒怨缠身」<br/><li>转换技。阳：当你对感染角色造成伤害时，若当前回合角色为你/当前回合角色不为你，则你可以令此伤害+[1]/令受伤角色横置武将牌。阴：当你受到感染角色对你造成的伤害时，若当前回合角色为你/当前回合角色不为你，则你可以防止此伤害/令伤害来源武将牌翻面。然后你令其获得[1]枚“怨”标记。若你的体力值小于其体力值，则本次技能流程执行中的[ ]数值+1。</li>",
            PIxincu: "心猝",
            PIxincu_info: "「怨魇悸心」<br/><li>锁定技。①拥有“怨”标记的角色准备/结束阶段，你移除其所有“怨”标记，获得其等量张牌。然后若其手牌数不大于你，则你视为对其使用了一张病【杀】。②感染角色进入/脱离濒死状态时，你横置场上至多X名感染角色/该角色武将牌翻面。然后若当前回合角色为你，则你对其造成1点伤害。</li>",
            PIxincu_append: '<span class="pathogen-append">在来到现实世界后，突变为了转移性人类癌症病毒</span>',
            PI_hantavirus: "汉坦病毒",
            PIfeizhong: "肺肿",
            PIfeizhong_info: "「肺壅气逆」<br/><li>每轮限一次，感染角色于回合外获得牌后，你可以展示其一张牌。若如此做，直到其下个回合结束，其不能使用或打出与展示牌颜色相同的牌，其失去与展示牌类别/牌名/颜色/点数相同的牌后，你视为对其使用一张病【杀】/你对其造成1点伤害/你摸一张牌/你弃置其一张牌。</li>",
            PIshenshuai: "肾衰",
            PIshenshuai_info: "「毒败肾枯」<br/><li>感染角色的结束阶段，若其本回合于弃牌阶段弃置的牌数：为0，你令其弃置体力上限张手牌，然后其失去1点体力；大于等于其体力值，你对其造成1点伤害；小于等于其体力值，你摸等量的牌</li>",
            PIdiaozang: "凋脏",
            PIdiaozang_effect: "<img style=width:40px src=" + lib.assetURL + "extension/瘟疫公司/image/card/PIdiaozang_effect.png>",
            PIdiaozang_info: "「脏凋腑亡」<br/><li>限定技，出牌阶段，你可以令一名感染角色摸其体力上限张牌，然后你进行X次判定（X为其手牌数与体力值之差且至少为2），若判定结果为：红色，你获得其一张牌；黑色，你获得判定牌并摸一张牌（因此判定获得的牌不计入手牌上限且无任何次数限制）。然后其执行一个弃牌阶段和结束阶段。</li>",
            PIdiaozang_append: '<span class="pathogen-append">汉坦病毒所过之处，尽是脏腑的衰败，病患的绝望与疫景的疮痍</span>',
            PI_lassavirus: "拉沙病毒",
            PIganshuai: "肝衰",
            PIganshuai_info: "「毒肝渐枯」<br/><li>每轮每名角色限一次，感染角色回复体力后，你可以选择摸X+1张牌或者令其弃置至少X+1张牌。然后若你的手牌数大于其，则你视为对其使用一张额外结算X次的病【杀】（X为其已损失的体力值且至少为1）。</li>",
            PIxuekui: "血溃",
            PIxuekui_info: "「疫血交伤」<br/><li>锁定技，感染角色失去体力后，其选择一项：①交给你一张红色牌；②你对其造成Y点伤害（Y为你本轮对其发动此技能的次数）。</li>",
            PIbengzang: "崩脏",
            PIbengzang_info: "「俱脏尽衰」<br/><li>限定技，出牌阶段，你可以弃置任意张红色牌并选择等量感染角色。然后你进行一次判定，若判定结果为：红色，这些角色依次视为回复过1点体力；黑色，这些角色本回合不能使用或打出手牌。本回合结束时，这些角色中未受伤的角色失去1点体力，已受伤的角色弃置X张手牌（X为其已损失的体力值且至少为1）。</li>",
            PIbengzang_append: '<span class="pathogen-append">存于西非的致命瘟疫，从血液逐渐侵蚀各个器官系统，最终夺走鲜活的生命</span>',
            PI_vibriovulnificus: "创伤弧菌",
            PIchuangran: "创染",
            PIchuangran_info: "「创血伤染」<br/><li>①准备阶段，你可以感染一名已受伤角色。②结束阶段，你可以选择一名已受伤已感染角色，视为对其使用一张无距离和次数限制的病【杀】。若此【杀】造成了伤害，你可以感染其相邻的一名角色。</li>",
            PIshangyan: "伤炎",
            PIshangyan_info: "「裂疮俱炎」<br/><li>当你不因此技能使用伤害牌指定感染角色为目标后，你可以令任意名已受伤的感染角色为成为此牌的额外目标。若其体力值大于等于你，其弃置一张牌；若其体力值小于等于你，你摸一张牌。此牌结算完毕后，若所有目标角色的手牌数均小于你，则你可以选择其中一名目标角色，再次对其结算此牌。</li>",
            PIshangyan_append: '<span class="pathogen-append">人类感染疾病之三大弧菌之一，是一种截肢率和死亡率双高的致命细菌</span>',
            PI_yellowfever_ab: "黄热病",
            PI_yellowfever: "黄热病毒&寨卡病毒",
            PIhuangdan: "黄疸",
            PIhuangdan_info: "「血胆面黄」<br/><li>感染角色回复体力前，若其：红色手牌数大于等于黑色手牌数，则回复值-1，你摸一张牌；红色手牌数小于黑色手牌数或没有手牌，你可以摸X张牌或弃置X张牌，视为对其使用一张病【杀】（X为其已损失的体力值+1）</li>",
            PIjieyan: "骱炎",
            PIjieyan_info: "「骨痛热肿」<br/><li>感染角色造成伤害前，若此伤害值：大于1，你可以令其弃置伤害值张牌，否则其造成大于1点的伤害改为1点直到其回合结束。等于1，你可以令其弃置一张伤害牌（若其弃置了红色牌，则你获得之并摸一张牌），否则其失去1点体力。</li>",
            PIjieyan_append: '<span class="pathogen-append">一种长期威胁欧洲殖民者的疾病</span>',
            PI_bubonicplague: "腺鼠疫",
            PIheili: "黑疠",
            PIheili_info: "「瘀黑腺染」<br/><li>当你成为其他角色使用黑色牌的目标后/使用黑色牌指定其他角色为目标后，你可以感染一名其他角色/感染目标角色。</li>",
            PIhuayi: "花疫",
            PIhuayi_info: "「凋零玫瑰」<br/><li>每轮限X次（X为你的体力值），感染角色的出牌阶段开始时，你可以弃置一张黑色牌进行判定，若判定结果为红色，此次不计入发动次数，你获得判定牌并摸一张牌；若判定结果为黑色，你视为对其使用一张病【杀】，其响应之前选择一项：①交给你一张黑色牌或弃置一张红色牌；②失去1点体力且不可响应此牌。</li>",
            PImoyi: "殁殪",
            PImoyi_info: "「尸骸蔽路」<br/><li>当你于回合外使用【杀】对感染角色造成伤害后，你可以失去至多2点体力，对其相邻等量感染角色再次结算此牌，此牌结算过程中：①感染角色进入濒死状态时，你摸两张牌或回复1点体力；②感染角色死亡时，你可以失去2点体力，获得其所有黑色牌。</li>",
            PImoyi_append: '<span class="pathogen-append">它化作死神，在鸦群的注视下，将人命如麦草般收割，使墓堆上长绕着凋零的玫瑰</span>',
            PI_athenianplague: '雅典大瘟疫',
            PIliaoyi: '潦痬',
            PIliaoyi_info: '「瘀黑腺染」<br/><li>每轮开始时，你可以选择一名其他角色，然后场上所有与其和其下家势力相同的角色依次执行：若其未感染，则令其感染；若其已感染，则其弃置一张牌，你摸一张牌。</li>',
            PIreli: '热痢',
            PIreli_info: '「焚腑灼腹」<br/><li>感染角色于其回合外获得手牌后，你可以观看这些牌，然后选择一项：①选择其中一张伤害牌并视为对其使用之，若其手牌数大于其体力值，则其不可响应此牌且此牌结算完毕后你获得选择的牌；②令其选择将手牌数弃置至其体力值或弃置本次获得的手牌，若其因此弃置了至少两张牌，则其失去1点体力。</li>',
            PIhunji: '殙殛',
            PIhunji_info: '「力竭终焉」<br/><li>结束阶段，你可以选择至多X名体力值为1的已感染角色（X为你的体力值），这些角色依次选择一项：①除非对距离最小的且不与你同族的角色使用一张伤害牌并造成伤害，否则执行选项②；②弃置装备区的所有牌（若因此弃置至少两张牌，则其失去1点体力），你视为对其使用一张病【杀】。若执行选项②的角色数不小于Y，则你可以发动【潦痬】（Y为场上未感染角色数的一半，向上取整）。</li>',
            PIhunji_append: '<span class="pathogen-append">它如地狱使者，踞于恶泉之源，吹起地狱的焚风，化人间骸骨作炼狱焦土</span>',
            PI_nyancatvirus: '彩虹猫病毒',
            PIcairan: '彩染',
            PIcairan_info: '「猫猫审判」<br/><li>每轮限X次（X为你的体力值）喵，当你成为非同族角色使用牌的目标后喵，你可以进行一次判定喵，若结果为红色喵，你可以感染使用者喵，若使用者已感染喵，则其需交给你一张牌喵；若结果为红桃，此牌对你无效喵；若结果为黑色喵，你弃置其一张牌并摸一张牌喵。</li>',
            PImengmiao: '萌喵',
            PImengmiao_info: '「猫猫感化」<br/><li>结束阶段喵，若你本回合未造成过伤害喵，你可以选择一名体力值不大于你的感染角色喵，令其下个回合不能使用伤害牌喵，若其下个回合结束时其于此回合未造成过伤害喵，则你可以弃置一张伤害牌喵，选择一名本轮内未成为过此技能的目标的其他角色并重复此流程喵。</li>',
            PImengmiao_append: '<span class="pathogen-append">你的电脑已经被彩虹猫病毒废了。现在一起来欣赏彩虹猫吧</span>',
            PI_rhinovirus: '鼻病毒',
            PIganmao: '感冒',
            PIganmao_info: '「风夜寒灯」<br/><li>每轮开始时，你可以进行判定并获得判定牌，本轮有角色使用与判定牌花色相同的牌时，若其可感染/已感染，则令其感染/你摸一张牌。</li>',
            PIkesou: '咳嗽',
            PIkesou_info: '「寒声碎玉」<br/><li>当你对已感染角色造成伤害后，你可以进行判定并获得判定牌，其于你的下个回合结束前使用与判定牌花色相同的牌后，其弃置一张牌，若此牌花色与判定花色相同，则你摸一张牌。</li>',
            PIkesou_append: '<span class="pathogen-append">在成人主要引起普通感冒等上呼吸道感染，还能引起支气管炎和支气管肺炎</span>',
            PI_ascaris: '蛔虫',
            PIchangji: '肠汲',
            PIchangji_info: '「吸营窃液」<br/><li>每轮限X次（X为你的体力值），感染角色的回合开始时，你可以选择一个手牌中未拥有的花色。该角色从牌堆中获得牌后/弃置此花色的牌后，你获得其一张牌/你获得之，直到本回合结束或你获得了此花色的牌。</li>',
            PIzuanchang: '钻肠',
            PIzuanchang_info: '「断肠缠绕」<br/><li>感染角色出牌阶段结束时，若你本回合内获得该角色的牌数：为0，你可以弃置手牌中一种花色的所有牌并视为对其使用一张无距离次数限制且不可响应的病【杀】；大于等于其体力值，你令其失去1点体力且手牌上限-1；大于等于你的体力值，你回复1点体力。</li>',
            PIzuanchang_append: '<span class="pathogen-append">人体最常见的消化道寄生虫之一</span>',
            PI_leucochloridium: '彩蚴吸虫',
            PIshihong: '蚀虹',
            visible_PIshihong: 'invisible',
            PIshihong_info: '「虹膜侵蚀」<br/><li>每轮每名角色限两次，当你成为感染角色使用牌的目标后，你可以明置其一张手牌，若此牌为：基本牌，你摸一张牌；锦囊牌：你可将此牌交给一名与其邻位且感染角色并感染其（若邻位无可感染角色则改为令此牌对你无效）；装备牌，你弃置其一张未明置的牌且其本回合不能使用、打出和弃置明置的牌。</li>',
            PIqietong: '窃瞳',
            PIqietong_info: '「夺见剥光」<br/><li>感染角色回合开始时，若其拥有因明置牌，你可以获得其至多两张牌并对其造成1点伤害，若你获得了两张牌且这两张牌颜色相同/不同，则你视为对其使用一张病【杀】/其本回合手牌对所有其他角色可见。</li>',
            PIqietong_append: '<span class="pathogen-append">以操控宿主自杀来繁衍自身的恐怖寄生虫</span>',
            //PI_info:'「」<br/><li></li>',
            //PI_append:'<span class="pathogen-append"></span>',
        },
    };
    for (var i in P_and_A.character) {
        P_and_A.character[i][4] ??= [];
        if (lib.device || lib.node) P_and_A.character[i][4].add("ext:瘟疫公司/image/character/" + i + ".jpg");
        else P_and_A.character[i][4].add("db:extension-瘟疫公司-image-character:" + i + ".jpg");
    }
    lib.config.all.characters.push("P_and_A");
    if (!lib.config.characters.includes("P_and_A")) lib.config.characters.remove("P_and_A");
    lib.translate["P_and_A_character_config"] = "瘟疫与疾苦";
    return P_and_A;
};

export default packs;
