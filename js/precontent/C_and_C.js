import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
lib.init.css(lib.assetURL + "extension/瘟疫公司/js/precontent", "CI_title");

const packs = function () {
    var C_and_C = {
        name: "C_and_C",
        connect: true,
        characterSort: {
            C_and_C: {
                working_cell: ['CI_ganglioneure', 'CI_thrombocytes', 'CI_basophil', 'CI_eosinophil', "CI_erythrocyte", "CI_neutrophil", "CI_macrophages", "CI_dendriticcell", "CI_regulatorytcell", "CI_cytotoxictcell", "CI_helpertcell"],
            },
        },
        character: {
            CI_erythrocyte: ["female", "CI_cure", 3, ["CIyangjie", "CIzhuanyang"], ["clan:解药公司"]],
            CI_neutrophil: ["male", "CI_cure", 4, ["CIzhencheng", "CIbaotun"], ["clan:解药公司"]],
            CI_macrophages: ["female", "CI_cure", 4, ["CIbaozang", "CIqunshi"], ["clan:解药公司"]],
            CI_dendriticcell: ["male", "CI_cure", 3, ["CIkangdi", "CIchengji"], ["clan:解药公司"]],
            CI_regulatorytcell: ["female", "CI_cure", 3, ["CIbaokang", "CIyikong"], ["clan:解药公司"]],
            CI_cytotoxictcell: ["male", "CI_cure", 4, ["CIbaomao", "CIchuanba"], ["clan:解药公司"]],
            CI_helpertcell: ["male", "CI_cure", 3, ["CIbaoji", "CIyukang"], ["clan:解药公司"]],
            CI_eosinophil: ['female', 'CI_cure', 4, ['CIciji', 'CIsuanbao'], ['clan:解药公司']],
            CI_basophil: ['male', 'CI_cure', 3, ['CIbaomin', 'CIjianyan'], ['clan:解药公司']],
            CI_thrombocytes: ['female', 'CI_cure', 3, ['CIzhixue', 'CIningxue'], ['clan:解药公司']],
            CI_ganglioneure: ['male', 'CI_cure', 3, ['CIzhishi', 'CIhuisi', 'CIshentong'], ['clan:解药公司']],
        },
        characterIntro: {
            CI_erythrocyte: '——画师：清水茜<br>——红细胞是脊椎动物体内通过血液运送氧气的最主要的媒介<br><a class="cure" href="https://www.yixue.com/%E7%BA%A2%E7%BB%86%E8%83%9E" target="_blank">红细胞</a>（英语：Erythrocytes）也称红血球，是血液中数量最多的一种血细胞，同时也是脊椎动物体内通过血液运送氧气的最主要的媒介。红细胞在常规化验英文常缩写成RBC。在所有的脊椎动物及若干无脊椎动物，其血红素（无脊椎动物也有时是蚯蚓红血朊）包含在特定的细胞中来进行其机能活动，这种血球称为红细胞。其它的血细胞，如白血球，则是免疫细胞。红细胞中含有血红蛋白，因而使血液呈红色。血红蛋白能和空气中的氧结合，因此红细胞能通过血红蛋白将吸入肺泡中的氧运送给组织，而组织中新陈代谢产生的二氧化碳也通过红细胞运到肺部并被排出体外。血红蛋白更易和一氧化碳相合，当空气中一氧化碳和含量增高时，可引起一氧化碳中毒。红细胞和血红蛋白的数量减少到一定程度时，称为贫血。红细胞大量被破坏可引起溶血性黄疸。红细胞描述：多，小而圆，中央着色较浅，无核。人类的红细胞是双面凹的圆饼状。边缘较厚，而中间较薄，就好像是一个甜甜圈一样，只是当中没有一个洞而已。这种形状可以最大限度的从周围摄取氧气。同时它还具有柔韧性，这使得它可以通过毛细血管，并释放氧分子，直径通常是6μm～8μm。由于这种特别的形状而且体积比较小，所以表面积对体积的比值较大，使氧气以及二氧化碳能够快速地渗透细胞内外。红细胞的细胞膜含有特别的多醣类以及蛋白质，但是这种结构因人而异，这些结构是构成血型的基本要素。成人体内大约有2～3×1013个红细胞（女性大约为4～5百万/立方毫米血液，男性为5～6百万/立方毫米血液）。女性比男性少的原因，是因为生理出血造成的现象。另外睾丸酮也具有刺激红细胞生成激素制造红细胞的功能。在人的红细胞内所含的血红蛋白占血球总量的30％以上，是血液中最通常的一种血细胞，在干重9％时，占94％，随着氧分压的变化与氧结合或游离，但它的解离曲线和纯血红素的溶液不同，在氧分压低的组织，红细胞具有放出多量氧的能力。另外，在红细胞内，存在有碳酸脱氢酶，在将二氧化碳转化为碳酸氢离子的可逆反应中起触媒作用。因此红细胞运送血液二氧化碳的能力很强。在人及其他哺乳动物中，成熟的红细胞是无核的。这意味着它们失去了DNA。红细胞也没有线粒体，它们通过葡萄糖合成能量。成熟的哺乳类红细胞是双凹盘状，如此可增加其表面积，使物质更容易通过其细胞膜。',
            CI_neutrophil: '——中性粒细胞能吞噬和杀灭细菌，参与炎症反应，是第二道免疫防线不可缺少的部分<br><a class="cure" href="https://www.yixue.com/%E4%B8%AD%E6%80%A7%E7%B2%92%E7%BB%86%E8%83%9E" target="_blank">中性粒细胞</a>（英语：Neutrophilicgranulocyte）在瑞氏（Wright）染色血涂片中，胞质呈无色或极浅的淡红色，有许多弥散分布的细小的（0.2～0.4微米）浅红或浅紫色的特有颗粒。细胞核呈杆状或2～5分叶状，叶与叶间有细丝相连。其颗粒表面有一层膜包裹，可分1～4型，颗粒中含髓过氧化物酶（Myeloperoxidase）、酸性磷酸酶、吞噬素（Phagocytin）、溶菌酶、β葡糖苷酸酶、碱性磷酸酶等。中性粒细胞具趋化作用、吞噬作用和杀菌作用。绝大部分的粒细胞属中性粒细胞。每微升血液中约有4500个中性粒细胞。由于这些细胞的细胞核的形态特殊，又称为多形核白细胞。中性粒细胞在血管内停留的时间平均只有6-8小时，它们很快穿过血管壁进入组织发挥作用，而且进入组织后不再返回血液中来。在血管中的中性粒细胞，约有一半随血流循环，通常作白细胞计数只反映了这部分中性粒细胞的情况；另一半则附着在小血管壁上。同时，在骨髓中尚贮备了约两万五千亿个成熟中性粒细胞,在机体需要时可立即动员大量这部分粒细胞进入循环血流。中性粒细胞来源于骨髓的造血干细胞，在骨髓中分化发育后，进入血液或组织。在骨髓、血液和结缔组织的分布数量比是28：1：25，成年人血液中中性粒细胞的数量约占白细胞总数的55％一70％。中性粒细胞属多形核白细胞的一种，由于其数量在粒细胞中最多，因此有人将多形核白细胞指中性粒细胞。',
            CI_macrophages: '——巨噬细胞是自体重要的免疫细胞，具有抗感染、抗肿瘤和免疫调节等重要作用<br><a class="cure" href="https://www.yixue.com/%E5%B7%A8%E5%99%AC%E7%BB%86%E8%83%9E" target="_blank">巨噬细胞</a>（英语：Macrophage）词源：希腊语 makros = large = 巨大 phagein=eat=吞噬 ）一般为圆形或椭圆形，功能活跃时，可呈多突形。细胞核圆形或椭圆形，染色较深。细胞质较丰富，功能活跃时内含有许多颗粒或空泡。具有变形运动和吞噬能力。组织细胞或巨噬细胞：有吞噬能力，细胞形状不一，亦为多突起的星形细胞，注意与成纤维细胞的区别在于：细胞质中含有吞噬的台盼蓝颗粒。细胞质染色较深，细胞轮廓较明显。细胞核较小，圆形或卵圆形，染色较深，核内的结构看不清。单核-巨噬细胞包括骨髓中的前单核细胞、外周血中的单核细胞、以及组织内的巨噬细胞(Mφ)。Mφ来源于血液中的单核细胞，而单核细胞又来源于骨髓中的前体细胞。单核-巨噬细胞是自体重要的免疫细胞，具有抗感染、抗肿瘤和免疫调节等重要作用。当单核细胞经血管的内皮细胞层进入一已受损的组织时（这过程被称为白血球外渗作用），它经过一连串转变以成为巨噬细胞。单核细胞会因化学趋向性而被化学物质的刺激吸引至受损处，这些刺激包括受伤细胞、病原体、由肥大细胞和嗜碱性细胞所释放的组织胺，以及由已于该处的巨噬细胞释出的细胞因子。在某些地方，如睾丸，巨噬细胞已被证实会透过增殖以移殖于此。与寿命较短的嗜中性细胞不同，其寿命可达数个月至数年不等。由游出血管的单核细胞衍变而成的细胞。体积较大，形状不规则，常伸出短而钝的突起，作变形运动，能吞噬死亡的细胞和侵入体内的细菌，形成吞噬体，在免疫反应中起重要作用。在疏松结缔组织内固定的巨噬细胞又称组织细胞，常沿胶原纤维散在分布。 形态多样可变，常有伪足； 核小深染，较圆，偏心位，核仁不明显； 胞质丰富，嗜酸性，含空泡和异物颗粒。表面有皱褶、小泡、微绒毛；胞质有初、次级溶酶体、吞噬体、吞饮小泡和残余体；膜附近有许多微管微丝。巨噬细胞有趋化性定向运动：沿着某些化学物质的浓度梯度进行定向移动，聚集到释放这些物质的病变部位。吞噬作用：伸出伪足包围细菌、衰老细胞等，进而摄入胞质内形成吞噬体或吞饮小泡。与初级溶酶体融合，形成次级溶酶体后被溶酶体酶消化分解。侵入人体的细菌、病霉或异物，及人体产生的衰老、损伤细胞和坏死组织等，均需经吞噬细胞吞噬、消化，予以清除。所以，吞噬细胞又被誉为“人体健康的卫士”。巨噬细胞从形态上可分为大吞噬细胞和小吞噬细胞两类。大吞噬细胞包括单核细胞和巨噬细胞。单核细胞占白细胞总数的 3～8％，是血液中最大的细胞，直径为14～20微米左右，圆形或卵圆形。细胞内有许多细小的嗜天青颗粒，此即溶酶体，内含过氧化物酶、酸性磷酸酶、非特异性酯酶和溶菌酶等。寿命可长达75天左右。单核细胞渗出血管，进入组织和器官后，可进一步分化发育成巨噬细胞，成为机体内吞噬能力最强的细胞。巨噬细胞可以是固定不动的，也可以用变形虫样运动的方式移动。固定和游走的巨噬细胞是同一细胞的不同阶段，两者可以互变，其形态也随功能状态和所在的位置而变化。巨噬细胞在不同组织中的名称不同：在肺里称“肺巨噬细胞”；在神经系统里称为“小神经胶质细胞”；在骨里则称为“破骨细胞”。单核细胞和巨噬细胞都能消灭侵入机体的细菌、吞噬异物颗粒、消除体内衰老、损伤的细胞和变性的细胞间质、杀伤肿瘤细胞，并参与免疫反应。小吞噬细胞由中性粒细胞和嗜酸性粒细胞组成，以中性粒细胞为主。',
            CI_dendriticcell: '——它是功能最强的专职抗原递呈细胞，能高效地摄取处理和递呈抗原并激活细胞<br><a class="cure" href="https://www.yixue.com/%E6%A0%91%E7%AA%81%E7%8A%B6%E7%BB%86%E8%83%9E" target="_blank">树突状细胞</a>（英语：Dendritic Cells, DC）是由美国学者Steinman于1973年发现的，是目前所知的功能最强的抗原提呈细胞，因其成熟时伸出许多树突样或伪足样突起而得名。树突状细胞是机体功能最强的专职抗原递呈细胞(Antigen Presenting Cells, APC)，它能高效地摄取、加工处理和递呈抗原，未成熟DC具有较强的迁移能力，成熟DC能有效激活初始型T细胞，处于启动、调控、并维持免疫应答的中心环节。它们通常少量分布于与外界接触的皮膜(黏膜)部位，主要为皮肤(在皮肤上的，称为朗格汉斯细胞［注：Paul Langerhans (1847-1888), German Anatomist］)，和内层的鼻子、肺、胃与肠的内层。 血液中也可发现他们的未成熟型式。他们被活化时，会移至淋巴组织中与T细胞与B细胞互相作用，以刺激与控制适当的免疫反应。在一段成长过程中他们长出树枝状的突起，原文dendrite来自希腊文的Dentrites（关于树的），因此本文译为树突状的细胞。然而，这些并不与神经元有特殊的关联，虽然其也有相似的部位。未成熟的树突状细胞也叫做隐匿性细胞，不若树枝状的突起，它们具有大量的、细胞质的菌幕。人树突状细胞起源于造血干细胞(hemopoieticstemcell)。DC的来源有两条途径：①髓样干细胞在GM-CSF的刺激下分化为DC，称为髓样DC(myeloid dendritic cells，MDC)，也称DCl，与单核细胞和粒细胞有共同的前体细胞；②来源于淋巴样干细胞，称为淋巴样DC(Lymophiod dendritic cells，LDC)或浆细胞样DC(plasmacytoid dendritic cells，piX；)，即DC2，与T细胞和NK细胞有共同的前体细胞。树突状细胞(DC)尽管数量不足外周血单个核细胞的1%，但表面具有丰富的抗原递呈分子(MHC-Ⅰ和MHC-Ⅱ)、共刺激因子(CD80/B7-1、CD86/B7-2、CD40、CD40L等)和粘附因子(ICAM-1、ICAM-2、ICAM-3、LFA-1、LFA-3等)，是功能强大的专职抗原递呈细胞(APC)。DC自身具有免疫刺激能力，是目前发现的惟一能激活未致敏的初始型T细胞的APC。人体内大部分DC处于非成熟状态，表达低水平的共刺激因子和粘附因子，体外激发同种混合淋巴细胞增殖反应的能力较低，但未成熟DC具有极强的抗原吞噬能力，在摄取抗原(包括体外加工)或受到某些因素刺激时即分化为成熟DC，而成熟的DC表达高水平的共刺激因子和粘附因子。DC在成熟的过程中，由接触抗原的外周组织迁移进入次级淋巴器官，与T细胞接触并激发免疫应答。DC作为目前发现的功能最强的APC，能够诱导特异性的细胞毒性T淋巴细胞(Cytotoxic T Lymphocyte，CTL)生成。近年来研究表明,应用肿瘤相关抗原或抗原多肽体外冲击致敏DC，回输或免疫接种于载瘤宿主，可诱发特异性CTL的抗肿瘤免疫反应。DC与肿瘤的发生、发展有着密切关系，大部分实体瘤内浸润的DC数量多则患者预后好。有效的抗肿瘤免疫反应的核心是产生以CD8+ T细胞为主体的细胞免疫应答，这也是DC作为免疫治疗手段的基础。DC抗肿瘤的机制如下：①DC可以高表达MHC-Ⅰ类和MHC-Ⅱ类分子，MHC分子与其捕获加工的肿瘤抗原结合，形成肽-MHC分子复合物，并递呈给T细胞，从而启动MHC-I类限制性CTL反应和MHC-Ⅱ类限制性的CD4+ Thl反应。同时，DC还通过其高表达的共刺激分子(CD80/B7-1、CD86/B7-2、CD40等)提供T细胞活化所必须的第二信号，启动了免疫应答。②DC与T细胞结合可大量分泌IL-12、IL-18激活T细胞增殖，诱导CTL生成，主导Th1型免疫应答，利于肿瘤清除；激活穿孔素P颗粒酶B和FasL/Fas介导的途径增强NK细胞毒作用；③DC分泌趋化因子(Chemotactic Cytokines， CCK)专一趋化初始型T细胞促进T细胞聚集，增强了T细胞的激发。保持效应T细胞在肿瘤部位长期存在，可能通过释放某些抗血管生成物质(如IL-12、IFN-γ)及前血管生成因子而影响肿瘤血管的形成。上述CCK进一步以正反馈旁分泌的方式活化DC，上调IL-12及CD80、CD86的表达；同时DC 也直接向CD8+T细胞呈递抗原肽，在活化的CD4+ T细胞辅助下使CD8+ T细胞活化，CD4+ 和CD8+T细胞还可以进一步通过分泌细胞因子或直接杀伤，增强机体抗肿瘤免疫应答。',
            CI_regulatorytcell: '——抑制免疫反应引发的炎症并维持自身免疫耐受的抑制性细胞<br><a class="cure" href="https://www.yixue.com/%E8%B0%83%E8%8A%82%E6%80%A7T%E7%BB%86%E8%83%9E" target="_blank">调节性T细胞</a>（英语：Regulatory T Cells，简称Tregs）是一类控制体内自身免疫反应性的T细胞亚群，早期亦称做suppressor T cells。调节性T细胞可分为天然产生的自然调节性T细胞（n T-regs）和诱导产生的适应性调节性T细胞(a T-regs或i T-regs)，如Th3、Tr1，另外尚有CD8 Treg、NKT细胞等，与自身免疫性疾病的发生关系密切，其异常表达可导致自身免疫性疾病。其中Tr1细胞分泌IL-10；Th3细胞分泌TGF-β；调节性T细胞（Regulatory T cells）是维持机体免疫耐受的重要因素之一，它由胸腺产生后输出至外周，并通过主动调节的方式抑制存在于正常机体内潜在的自身反应性T细胞的活化与增殖，从而调节机体的免疫力。调节性T细胞（Regulatory T cells）是维持机体免疫耐受的重要因素之一，它由胸腺产生后输出至外周，并通过主动调节的方式抑制存在于正常机体内潜在的自身反应性T细胞的活化与增殖，从而调节机体的免疫力，如防止自身免疫性疾病的发生。CD4* CD25’/FOXP3*细胞的数量减少或功能异常均有可能导致自身免疫病的发生，一些自身免疫性疾病如多发性硬化症、活动性类风湿关节炎、I型糖尿病等调节性T细胞的数量和功能均会发生变化。在许多恶性疾病如肺、胰腺和乳腺癌等已经发现调节性T细胞明显增高。调节性T细胞也阻断抗肿瘤免疫反应从而导致死亡率上升，也可用于骨髓移植术前术后的跟踪。',
            CI_cytotoxictcell: '——释放化学物质，直接诱导异常细胞凋亡坏死的特异性细胞毒效应细胞<br><a class="cure" href="https://www.yixue.com/%E7%BB%86%E8%83%9E%E6%AF%92%E6%80%A7T%E7%BB%86%E8%83%9E" target="_blank">细胞毒性T淋巴细胞</a>（英语：Cytotoxic T Cell TC或Cytotoxic T Lymphocyte，CTL），是白细胞的亚部，为一种特异T细胞，专门分泌各种细胞因子参与免疫作用。对某些病毒、肿瘤细胞等抗原物质具有杀伤作用，与自然杀伤细胞构成机体抗病毒、抗肿瘤免疫的重要防线。细胞毒性T淋巴细胞又称杀伤性T淋巴细胞，是机体抗肿瘤机制的重要环节，也是肿瘤免疫过继疗法主要效应细胞之一。',
            CI_helpertcell: '——指挥免疫细胞活化分化参与免疫应答的协助性细胞<br><a class="cure" href="https://www.yixue.com/%E8%BE%85%E5%8A%A9%E6%80%A7T%E7%BB%86%E8%83%9E" target="_blank">辅助性T细胞</a>（英语：Helper T Cell）是一种T细胞（白细胞的一种），它的表面有抗原接受器，可以辨识抗原呈献细胞的MHC Class II 分子呈献的抗原片段。辅助T细胞在免疫反应中扮演中间过程的角色：它可以增生扩散来激活其它类型的产生直接免疫反应的免疫细胞。辅助T细胞的主要表面标志是CD4。TH一旦受到抗原刺激，TH细胞就增殖和分化成活化TH细胞（Effector TH）和记忆TH（Memory TH）细胞。活化TH细胞分泌细胞因子、蛋白质或缩氨酸用来调控其它的免疫细胞；最通常是白介素（Lnterleukin），这可以使得B细胞分化成浆细胞。记忆TH细胞对第一次接触的抗原进行特化，这可以在被称为“二次免疫应答”中起作用。通过与MHCII（主要组织相容性复合体，Major Histocompatibility Complex)递呈的多肽抗原反应被激活。MHCII在抗原递呈细胞（Antigen Presenting Cells, APCs)表面表达。一旦激活，可以分泌细胞因子，调节或者协助免疫反应。T细胞调控或“辅助”其它淋巴细胞发挥功能。它们是已知的HIV病毒的目标细胞，在艾滋病发病时会急剧减少。',
            CI_eosinophil: '——在免疫反应中释放的阳离子蛋白对寄生虫有专门的杀灭作用<br><a class="cure" href="https://www.yixue.com/%E5%97%9C%E9%85%B8%E6%80%A7%E7%B2%92%E7%BB%86%E8%83%9E" target="_blank">嗜酸性粒细胞</a>（英语：Eosinophil）细胞呈圆形，直径13-15μm。胞质内充满粗大、整齐、均匀、紧密，排列的砖红色或鲜红色嗜酸性颗粒，遮光性强。细胞核的形状与嗜中性白细胞相似，通常有2-3叶，呈眼镜状，深紫色。嗜酸性粒细胞容易破碎，颗粒可分散于细胞周围。嗜酸性粒细胞占白细胞总数的0.5%-5%；其绝对值为0-0.7×10^9/L。血液中嗜酸性粒细胞的数目有明显的昼夜周期性波动，清晨细胞数减少，午夜时细胞数增多。这种细胞数的周期性变化是与肾上腺皮质释放糖皮质激素量的昼夜波动有关的。当血液中皮质激素浓度增高时，嗜酸性粒细胞数减少；而当皮质激素浓度降低时，细胞数增加。嗜酸性粒细胞的胞质内含有较大的、椭圆形的嗜酸性颗粒。这类白细胞也具有吞噬功能。限制嗜碱性粒细胞在速发性过敏反应中的作用。当嗜碱性粒细胞被激活时，释放出趋化因子，使嗜酸性粒细胞聚集到同一局部，并从三个面限制嗜碱性粒细胞的活性：一是嗜酸性粒细胞可产生前列腺素E使嗜碱性粒细胞合成释放生物活性物质的过程受到抑制；二是嗜酸性粒细胞可吞噬嗜碱性粒细胞所排出的颗粒，使其中含有生物活性物质不能发挥作用；三是嗜酸性粒细胞能释放组胺酶等酶类，破坏嗜碱性粒细胞所释放的组胺等活性物质；参与对寄生虫的免疫反应。在对蠕虫的免疫反应中，嗜酸性粒细胞有重要的作用。这类粒细胞的细胞膜上分布有免疫球蛋白Fc片断和补体C3的受体。在已经对这种蠕虫具有免疫性的动物体内，产生了特异性的免疫球蛋白IgE。蠕虫经过特异性IgE和C3的调理作用后，嗜酸性粒细胞可借助于细胞表现的Fc受体和C3受体粘着于蠕虫上，并且利用细胞溶酶体内所含的过多氧化物酶等酶类损伤蠕虫体。在有寄生虫感染、过敏反应等情况时，常伴有嗜酸性粒细胞增多。',
            CI_basophil: '——在先天性免疫系统的一部分里占比最稀有的粒细胞<br><a class="cure" href="https://www.yixue.com/%E5%97%9C%E7%A2%B1%E6%80%A7%E7%B2%92%E7%BB%86%E8%83%9E" target="_blank">嗜碱性粒细胞</a>（英语：Basophil）这类细胞的颗粒内含有组织胺、肝素和过敏性慢反应物质等。肝素有抗凝血作用，组织胺可改变毛细血管的通透性。过敏性慢反应物质是一种脂类分子，能引起平滑肌收缩。机体发生过敏反应与这些物质有关。嗜碱性细胞在结缔组织和粘膜上皮内时，称肥大细胞，其结构和功能与嗜碱性细胞相似。嗜碱性粒细胞(B)的突出特点是胞质内含粗大、大小分布不均、染成蓝紫色的嗜碱性颗粒。颗粒可覆盖在细胞核上，因之细胞核虽亦呈分叶状，但常不清楚。嗜碱性颗粒的特点与肥大细胞的颗粒相似，但两种细胞的关系尚待研究。',
            CI_thrombocytes: '——血小板在机体出血凝血过程中起重要作用<br><a class="cure" href="https://www.yixue.com/%E8%A1%80%E5%B0%8F%E6%9D%BF" target="_blank">血小板</a>（英语：thrombocytes）是哺乳动物血液中的有形成分之一。形状不规则，比红细胞和白细胞小得多，无细胞核，成年人血液中血小板数量为100~300×1000000000个/L，它有质膜，没有细胞核结构，一般呈圆形，体积小于红细胞和白细胞。血小板在长期内被看作是血液中的无功能的细胞碎片。血小板具有特定的形态结构和生化组成，在正常血液中有较恒定的数量（如人的血小板数为每立方毫米～30万），在止血、伤口愈合、炎症反应、血栓形成及器官移植排斥等生理和病理过程中有重要作用。血小板只存在于哺乳动物血液中。血小板的功能主要是促进止血和加速凝血，同时血小板还有维护毛细血管壁完整性的功能。 血小板在止血和凝血过程中，具有形成血栓，堵塞创口，释放与凝血有关的各种因子等功能。在小血管破裂处，血小板聚集成血小板栓，堵住破裂口，并释放肾上腺素, 5-羟色胺等具有收缩血管作用的物质，是促进血液凝固的重要因子之一。 血小板还有营养和支持毛细血管内皮细胞的作用，使毛细血管的脆性减少。血小板数量、质量异常可引起出血性疾病。数量减少见于血小板减少性紫癜，脾功能亢进，再生障碍性贫血和白血病等症。数量增多见于原发性血小板增多症、真性红细胞增多症等病症。质量异常可见于血小板无力症。20世纪60年代以来已确证血小板有吞噬病毒、细菌和其他颗粒物的功能。血小板因能吞噬病毒而引人注目，在血小板内没有核遗传物质，被血小板吞噬的病毒将失去增殖的可能。临床上也见到患病毒性疾病时总出现血小板减少症。因此血小板有可能与皮肤, 粘膜和白细胞一样是构成机体对抗病毒的一道防线。',
            CI_ganglioneure: '——脑神经细胞构成的中枢神经系统是人体神经系统的最主体部分<br><a class="cure" href="https://www.yixue.com/%E7%A5%9E%E7%BB%8F%E7%BB%86%E8%83%9E" target="_blank">脑细胞</a>（英语：ganglioneure）是构成脑的多种细胞的通称。脑细胞主要包括神经元和神经胶质细胞。神经元（Neuron）是一种高度特化的细胞，是神经系统的基本结构和功能单位之一，它具有感受刺激和传导兴奋的功能。神经元是高等动物神经系统的结构单位和功能单位。神经系统中含有大量的神经元，据估计，人类中枢神经系统中约含1000亿个神经元，仅大脑皮层中就约有140亿。虽然神经元形态与功能多种多样，但结构上大致都可分成胞体（Soma）和突起（Neurite）两部分。突起又分树突（Dendrite）和轴突（Axon）两种。轴突往往很长，由细胞的轴丘（Axon Hillock）分出，其直径均匀，开始一段称为始段，离开细胞体若干距离后始获得髓鞘，成为神经纤维。习惯上把神经纤维分为有髓纤维与无髓纤维两种，实际上所谓无髓纤维也有一薄层髓鞘，并非完全无髓鞘。胞体的大小差异很大，小的直径仅5～6μm，大的可达100μm以上。突起的形态、数量和长短也很不相同。树突多呈树状分支，它可接受刺激并将冲动传向胞体；轴突呈细索状，末端常有分支，称轴突终末（Axon Terminal），轴突将冲动从胞体传向终末。通常一个神经元有一个至多个树突，但轴突只有一条。神经元的胞体越大，其轴突越长。神经元按照用途分为三种：输入神经，传出神经, 和连体神经。神经元的基本功能是通过接受、整合、传导和输出信息实现信息交换。神经元是脑的主要成分，神经元群通过各个神经元的信息交换，实现脑的分析功能，进而实现样本的交换产出。产出的样本通过联结路径点亮丘觉产生意识。信息的接受和传导在眼的视网膜上有感光细胞能接受光的刺激，在鼻粘膜上有嗅觉细胞能接受气味的变化，在味蕾中有能接受化学物质刺激的味觉细胞等，这些细胞都属于神经细胞。神经元的细胞结构包括细胞体和突起两个部分，突起可分为树突和轴突。神经元是神经系统的基本单位结构和功能单位。我们周围的各种信息就是通过这些神经元获取并传递的。',
            //CI_:'——<br>',
            //a:'<a class="cure" href=""></a>'
        },
        characterTitle: {
            CI_erythrocyte: '<span class="cure-title" style="font-size: 20px">运氧赤流</span>',
            CI_neutrophil: '<span class="cure-title" style="font-size: 20px">抗病白游</span>',
            CI_macrophages: '<span class="cure-title" style="font-size: 20px">噬群清衰</span>',
            CI_dendriticcell: '<span class="cure-title" style="font-size: 20px">病讯枢使</span>',
            CI_regulatorytcell: '<span class="cure-title" style="font-size: 20px">阻乱之使</span>',
            CI_cytotoxictcell: '<span class="cure-title" style="font-size: 20px">剿病之刃</span>',
            CI_helpertcell: '<span class="cure-title" style="font-size: 20px">免谋之司</span>',
            CI_eosinophil: '<span class="cure-title" style="font-size: 20px">嗜酸血防</span>',
            CI_basophil: '<span class="cure-title" style="font-size: 20px">嗜碱血巡</span>',
            CI_thrombocytes: '<span class="cure-title" style="font-size: 20px">愈血止伤</span>',
            CI_ganglioneure: '<span class="cure-title" style="font-size: 20px">御高极权</span>',
            //CI_:'<span class="cure-title" style="font-size: 20px"></span>',
        },
        perfectPair: {
            CI_erythrocyte: ["CI_neutrophil"],
            CI_macrophages: ["CI_dendriticcell"],
        },
        skill: {
            //红细胞
            CIyangjie: {
                trigger: {
                    player: "gainAfter",
                    global: "loseAsyncAfter",
                },
                filter(event, player) {
                    if (!player.countCards("h")) return false;
                    return (event.getg?.(player)?.length ?? 0) >= 1 + (_status.currentPhase === player);
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard(get.prompt(event.skill), "将一张手牌置于武将牌上，称为“氧”")
                        .set("ai", card => {
                            return 7 - get.value(card);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const next = player.addToExpansion(event.cards, player, "giveAuto");
                    next.gaintag.add(event.name);
                    await next;
                },
                marktext: "氧",
                intro: {
                    name2: "氧",
                    markcount: "expansion",
                    content: "expansion",
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                locked: false,
                mod: {
                    maxHandcard(player, num) {
                        return num + player.getExpansions("CIyangjie").length;
                    },
                },
            },
            CIzhuanyang: {
                enable: "phaseUse",
                trigger: { player: "damageEnd" },
                filter(event, player) {
                    return player.getExpansions("CIyangjie").length > 0 && game.hasPlayer(target => target !== player);
                },
                filterTarget: lib.filter.notMe,
                prompt: "将一张“氧”交给一名其他角色，然后该角色摸两张牌。若你交给其的“氧”为红色/红桃，其摸一张牌/回复1点体力，然后该角色交给你一张牌",
                async cost(event, trigger, player) {
                    const info = get.info(event.skill);
                    event.result = await player
                        .chooseTarget(get.prompt(event.skill), info.prompt, lib.filter.notMe)
                        .set("ai", target => {
                            const player = get.player();
                            return get.effect(target, "CIzhuanyang", player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.target ?? (event.targets ?? [])[0];
                    if (!target?.isIn()) return;
                    if (!trigger) await game.delayx();
                    const cards = player.getExpansions("CIyangjie");
                    const result =
                        cards.length > 1
                            ? await player
                                .chooseButton([get.translation(event.name) + "：选择令" + get.translation(target) + "获得的“氧”", cards], true)
                                .set("target", target)
                                .set("ai", button => {
                                    const { player, target } = get.event(),
                                        card = button.link;
                                    const att = Math.sign(get.attitude(player, target));
                                    const wuzhong = get.effect(target, { name: "wuzhong" }, player, player);
                                    return att * get.value(card, target) + wuzhong + (get.color(card, false) === "red" ? get.effect(target, { name: "draw" }, player, player) : 0) + (get.suit(card, false) === "heart" ? get.recoverEffect(target, player, player) : 0);
                                })
                                .forResult()
                            : { bool: true, links: cards };
                    if (result?.bool && result.links?.length) {
                        const [card] = result.links;
                        await player.give(result.links, target);
                        await target.draw(2);
                        if (get.color(card, false) === "red") await target.draw();
                        if (get.suit(card, false) === "heart") await target.recover();
                        await target.chooseToGive(player, "he", true);
                    }
                },
                ai: {
                    order: 10,
                    combo: "CIyangjie",
                    player(player, target) {
                        const att = Math.sign(get.attitude(player, target));
                        const wuzhong = get.effect(target, { name: "wuzhong" }, player, player);
                        return Math.max(
                            ...player.getExpansions("CIyangjie").map(card => {
                                return att * get.value(card, target) + wuzhong + (get.color(card, false) === "red" ? get.effect(target, { name: "draw" }, player, player) : 0) + (get.suit(card, false) === "heart" ? get.recoverEffect(target, player, player) : 0);
                            })
                        );
                    },
                },
            },
            //中性粒细胞
            CIzhencheng: {
                enable: "phaseUse",
                trigger: { player: "damageEnd" },
                filter(event, player) {
                    if (event.name === "chooseToUse" && player.hasSkill("CIzhengcheng_used")) return false;
                    return game.hasPlayer(target => get.info("CIzhencheng").filterTarget(null, player, target));
                },
                filterTarget(card, player, target) {
                    return target !== player && target.countCards("h");
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), get.info(event.skill).filterTarget)
                        .set("ai", target => {
                            const player = get.player();
                            return get.effect(target, "CIzhencheng", player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.target || event.targets[0],
                        evt = event.getParent(2);
                    if (evt.name === "chooseToUse" && evt.type === "phase") player.addTempSkill(event.name + "_used", "phaseUseAfter");
                    await player.viewHandcards(target);
                    let choice = [],
                        choiceList = [],
                        str = get.translation(target);
                    if (game.hasPlayer(i => ![player, target].includes(i))) {
                        choice.push("观看手牌");
                        choiceList.push("令另一名其他角色观看" + str + "的手牌");
                    }
                    choice.push("展示手牌");
                    choiceList.push("展示" + str + "一个类别的手牌，然后弃置其中一张牌");
                    const control = await player
                        .chooseControl(choice, "cancel2")
                        .set("choiceList", choiceList)
                        .set("ai", () => {
                            const { player, target } = get.event();
                            return get.effect(target, { name: "guohe_copy", position: "h" }, player, player) > 0 ? 1 : 0;
                        })
                        .set("prompt", get.translation(event.name) + "：请选择一项")
                        .set("target", target)
                        .forResult("control");
                    if (control && control !== "cancel2") {
                        switch (control) {
                            case "观看手牌":
                                const result = await player
                                    .chooseTarget(
                                        (card, player, target) => {
                                            return ![player, get.event().target].includes(target);
                                        },
                                        get.translation(event.name) + "：令另一名其他角色观看" + str + "的手牌",
                                        true
                                    )
                                    .set("ai", target => {
                                        const { player, target: source } = get.event();
                                        return get.effect(source, "gongxin", target, player);
                                    })
                                    .set("target", target)
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    const source = result.targets[0];
                                    player.line2([source, target]);
                                    await game.delayx();
                                    await source.viewHandcards(target);
                                }
                                break;
                            case "展示手牌":
                                let type = lib.inpile.map(i => get.type2(i)).unique();
                                let types = target
                                    .getCards("h")
                                    .map(i => get.type2(i))
                                    .unique();
                                types.sort((a, b) => type.indexOf(b) - type.indexOf(a)).reverse();
                                const choice =
                                    types.length > 1
                                        ? await player
                                            .chooseControl(types)
                                            .set("target", target)
                                            .set("ai", () => {
                                                const { player, target, controls } = get.event();
                                                let types = controls.slice();
                                                return types.sort((a, b) => target.countCards("h", i => get.type2(i) === b) - target.countCards("h", i => get.type2(i) === a))[0];
                                            })
                                            .set("prompt", get.translation(event.name) + "：展示" + str + "一个类别的手牌，然后弃置其中一张牌")
                                            .forResult("control")
                                        : types[0];
                                if (choice) {
                                    let cards = target.getCards("h", i => get.type2(i) === choice);
                                    if (cards.length > 0) {
                                        await target.showCards(cards, get.translation(target) + "的" + get.translation(choice) + "牌");
                                        cards = cards.filter(card => lib.filter.canBeDiscarded(card, player, target));
                                        if (cards.length > 0) {
                                            const res =
                                                cards.length > 1
                                                    ? await player
                                                        .chooseButton([get.translation(event.name) + "：弃置" + str + "其中的一张牌", cards], true)
                                                        .set("ai", button => {
                                                            const { player, target } = get.event(),
                                                                att = get.attitude(player, target);
                                                            return -get.value(button.link) * Math.sign(att - 0.5);
                                                        })
                                                        .set("target", target)
                                                        .forResult()
                                                    : { bool: true, links: cards };
                                            if (res?.bool && res.links?.length) {
                                                const next = target.discard(res.links);
                                                next.discarder = player;
                                                await next;
                                            }
                                        }
                                    }
                                }
                                break;
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: { target: -1 },
                },
                subSkill: {
                    used: { charlotte: true },
                },
            },
            CIbaotun: {
                trigger: { player: ["phaseJieshuBegin", "damageEnd"] },
                async content(event, trigger, player) {
                    const num = Math.max(1, player.getDamagedHp());
                    await player.draw(num);
                    const targets = (
                        trigger.name === "phaseJieshu"
                            ? game
                                .getGlobalHistory("everything", evt => {
                                    return evt.name === "showCards";
                                })
                                .map(evt => evt.player)
                            : [trigger.player]
                    )
                        .unique()
                        .sortBySeat();
                    if (
                        player.countCards("hes", card => {
                            return game.checkMod(card, player, "unchanged", "cardEnabled2", player);
                        }) >= num &&
                        ["sha", "juedou"].some(name => player.hasUseTarget(get.autoViewAs({ name: name, storage: { CIbaotun: targets } }, "unsure")))
                    ) {
                        const names = ["sha", "juedou"].filter(name => player.hasUseTarget(get.autoViewAs({ name: name, storage: { CIbaotun: targets } }, "unsure")));
                        const choice =
                            names.length > 1
                                ? await player
                                    .chooseControl(names)
                                    .set("targets", targets)
                                    .set("ai", () => {
                                        const { player, targets, controls } = get.event();
                                        const getNum = name => {
                                            const card = get.autoViewAs({ name: name, storage: { CIbaotun: targets } }, "unsure");
                                            return player.getUseValue(card);
                                        };
                                        return controls.slice().sort((a, b) => getNum(b) - getNum(a))[0];
                                    })
                                    .set("prompt", "请选择你要转化的牌")
                                    .set("prompt2", "可对" + get.translation(targets) + "使用")
                                    .forResult("control")
                                : names[0];
                        if (choice) {
                            game.broadcastAll(
                                (num, name, targets) => {
                                    lib.skill.CIbaotun_backup.selectCard = num;
                                    lib.skill.CIbaotun_backup.viewAs = {
                                        name: name,
                                        storage: { CIbaotun: targets },
                                    };
                                },
                                num,
                                choice,
                                targets
                            );
                            const next = player.chooseToUse();
                            next.set("openskilldialog", get.translation(event.name) + "：将" + get.cnNumber(num) + "张牌当作【" + get.translation(choice) + "】使用");
                            next.set("norestore", true);
                            next.set("_backupevent", "CIbaotun_backup");
                            next.set("custom", {
                                add: {},
                                replace: { window() { } },
                            });
                            next.backup("CIbaotun_backup");
                            next.set("addCount", false);
                            next.set("forced", true);
                            next.set("oncard", () => {
                                const event = get.event(),
                                    player = event.player;
                                player.addTempSkill("CIbaotun_effect");
                                if (Array.isArray(event.cards) && event.cards.length > 0) {
                                    for (const target of [...game.players, ...game.dead]) {
                                        if (target === player) continue;
                                        const id = target.playerid,
                                            map = event.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (event.card.name === "sha") map[id].shanRequired = event.cards.length;
                                        else {
                                            if (!map[id].shaReq) map[id].shaReq = {};
                                            map[id].shaReq[id] = event.cards.length;
                                        }
                                    }
                                }
                            });
                            await next;
                        }
                    }
                },
                locked: false,
                mod: {
                    playerEnabled(card, player, target) {
                        if (Array.isArray(card.storage?.CIbaotun) && !card.storage?.CIbaotun.includes(target)) return false;
                    },
                },
                subSkill: {
                    backup: {
                        filterCard: card => get.itemtype(card) === "card",
                        check: card => 7 - get.value(card),
                        position: "hes",
                        pop: false,
                    },
                    effect: {
                        charlotte: true,
                        trigger: { source: "damageSource" },
                        filter(event, player) {
                            return event.card?.storage?.CIbaotun && event.player.isIn() && get.info("CIzhencheng").filterTarget(null, player, event.player);
                        },
                        forced: true,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const target = (event.target = trigger.player);
                            await get.info("CIzhencheng").content(event, trigger, player);
                            await player.gainPlayerCard(target, "he", true);
                        },
                    },
                },
            },
            //巨噬细胞
            CIbaozang: {
                trigger: { global: ["dying", "dieAfter"] },
                filter(event, player) {
                    const target = event.player;
                    if (!player.inRange(target)) return false;
                    if (event.name === "dying") return target.hasCard(card => !card.isKnownBy(player) && lib.filter.canBeGained(card, player, target), "he");
                    return player.isDamaged();
                },
                forced: true,
                logTarget: "player",
                async content(event, trigger, player) {
                    const target = trigger.player;
                    if (trigger.name === "damage") {
                        await player.gainPlayerCard(target, "he", true);
                        await player.draw();
                    } else {
                        await player.recover();
                        await player.draw(2);
                        if (trigger.source === player && [target.getNext(), target.getPrevious()].includes(player)) {
                            await player.gainMaxHp();
                        }
                    }
                },
            },
            CIqunshi: {
                trigger: { player: "useCardToPlayer" },
                filter(event, player) {
                    if (event.card.name !== "sha" || !event.isFirstTarget) return false;
                    const trigger = event.getParent();
                    return game.hasPlayer(target => {
                        if (trigger.targets.includes(target) || [player, ...trigger.targets].every(i => ![i.getNext(), i.getPrevious()].includes(target))) return false;
                        return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt2(event.skill, trigger.target),
                            (card, player, target) => {
                                const trigger = get.event().getTrigger();
                                if (trigger.targets.includes(target) || [player, ...trigger.targets].every(i => ![i.getNext(), i.getPrevious()].includes(target))) return false;
                                return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                            },
                            [1, player.getHp()]
                        )
                        .set("ai", target => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return get.effect(target, trigger.card, trigger.player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets.sortBySeat();
                    trigger.targets.addArray(targets);
                    trigger.getParent().targets.addArray(targets);
                    game.log(targets, "成为了", trigger.card, "的额外目标");
                    player.addTempSkill(event.name + "_effect");
                    player.markAuto(event.name + "_effect", [trigger.card]);
                },
                locked: false,
                mod: {
                    attackRange(player, num) {
                        return num + player.getHp();
                    },
                    cardUsable(card, player) {
                        const color = get.color(card);
                        if (card.name === "sha" && ["red", "unsure"].includes(color)) return Infinity;
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        trigger: { source: "damageSource" },
                        filter(event, player) {
                            if (!event.card || !player.getStorage("CIqunshi_effect").includes(event.card)) return false;
                            const target = event.player;
                            return target.isIn() && target.countCards("h") && target.getHp() > 0;
                        },
                        logTarget: "player",
                        async cost(event, trigger, player) {
                            const target = trigger.player,
                                num = target.getHp();
                            event.result = await player
                                .choosePlayerCard(get.prompt(event.skill), "展示" + get.translation(target) + "的至多张手牌", target, "h", [1, num])
                                .set("ai", () => {
                                    const { player, target } = get.event();
                                    return get.attitude(player, target) > 0 ? 0 : 1 + Math.random();
                                })
                                .set("target", target)
                                .forResult();
                        },
                        content() {
                            player.showCards(event.cards, get.translation(player) + "展示");
                        },
                    },
                },
            },
            //树突状细胞
            CIkangdi: {
                trigger: { global: "damageEnd" },
                filter(event, player) {
                    if (
                        !player.hasCard(card => {
                            if (get.position(card) === "h" && _status.connectMode) return true;
                            return lib.filter.cardDiscardable(card, player);
                        }, "h")
                    )
                        return false;
                    return event.player.isIn() && event.player.countCards("h") && !player.storage.CIkangdi_round?.[event.player.playerid]?.includes("see");
                },
                logTarget: "player",
                async cost(event, trigger, player) {
                    let str = lib.translate[event.skill + "_info"].split("①")[1].split("②")[0];
                    event.result = await player
                        .chooseToDiscard(get.prompt(event.skill, trigger.player), "he")
                        .set("ai", card => {
                            const { player, target } = get.event();
                            if (get.attitude(player, target) >= 0) return 0;
                            return player.hasCard(cardx => cardx !== card, "h") ? 7 - get.value(card) : 0;
                        })
                        .set("chooseonly", true)
                        .set("target", trigger.player)
                        .set("prompt2", str)
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = trigger.player;
                    player.addTempSkill("CIkangdi_round", "roundStart");
                    player.storage["CIkangdi_round"][target.playerid] ??= ["again"];
                    player.storage["CIkangdi_round"][target.playerid].add("see");
                    await player.discard(event.cards);
                    if (!player.countCards("h")) await player.viewHandcards(target);
                    else {
                        const ts = target.getCards("h"),
                            hs = player.getCards("h");
                        const next = player.chooseToMove("是否交换任意张牌");
                        next.set("list", [
                            [get.translation(target) + "的部分手牌", ts],
                            ["你的手牌", hs],
                        ]);
                        next.set("filterMove", (from, to, moved) => typeof to !== "number");
                        next.set("processAI", function (list) {
                            if (_status.event.max) {
                                let gain = list[0][1].sort((a, b) => player.getUseValue(b, null, true) - player.getUseValue(a, null, true));
                                let give = list[1][1].sort((a, b) => get.value(a, player) - get.value(b, player));
                                for (let i of gain) {
                                    if (get.value(i, player) < get.value(give[0], player)) continue;
                                    let j = give.shift();
                                    list[0][1].remove(i);
                                    list[0][1].push(j);
                                    list[1][1].remove(j);
                                    list[1][1].push(i);
                                    if (!give.length) break;
                                }
                            }
                            return [list[0][1], list[1][1]];
                        });
                        const result = await next.forResult();
                        if (result?.bool && result.moved?.length > 0) {
                            const moved = result.moved;
                            let cards1 = [],
                                cards2 = [];
                            for (const i of result.moved[0]) {
                                if (!ts.includes(i)) cards1.push(i);
                            }
                            for (const i of result.moved[1]) {
                                if (!hs.includes(i)) cards2.push(i);
                            }
                            if (cards1.length) await player.swapHandcards(target, cards1, cards2);
                        }
                    }
                },
                group: "CIkangdi_damage",
                subSkill: {
                    damage: {
                        trigger: { player: "damageEnd" },
                        filter(event, player) {
                            if (!event.source?.isIn() || event.source === player) return false;
                            return event.source.countCards("h") && !player.storage.CIkangdi_round?.[event.source.playerid]?.includes("you");
                        },
                        check(event, player) {
                            return get.attitude(player, event.source) < 0;
                        },
                        prompt2: event => "展示" + get.translation(event.source) + "的手牌",
                        logTarget: "source",
                        content() {
                            const target = trigger.source;
                            player.addTempSkill("CIkangdi_round", "roundStart");
                            player.storage["CIkangdi_round"][target.playerid] ??= ["again"];
                            player.storage["CIkangdi_round"][target.playerid].add("see");
                            target.showHandcards(get.translation(player) + "对" + get.translation(target) + "发动了【" + get.translation(event.name) + "】");
                        },
                    },
                    round: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] ??= {};
                        },
                        onremove: true,
                    },
                },
            },
            CIchengji: {
                trigger: {
                    player: "loseAfter",
                    global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
                },
                filter(event, player) {
                    const cards = event.getl?.(player)?.cards2 ?? [];
                    let suits = cards.map(i => get.suit(i, false)).filter(suit => suit !== "spade" || game.hasPlayer(target => target !== player && (suit === "club" || target.countCards("he"))));
                    return cards.length > player.getHp() && lib.suit.containsSome(...suit);
                },
                async cost(event, trigger, player) {
                    const cards = trigger.getl(player).cards2;
                    let suits = cards
                        .map(i => get.suit(i, false))
                        .filter(suit => suit !== "spade" || game.hasPlayer(target => target !== player && (suit === "club" || target.countCards("he"))))
                        .unique();
                    suits.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                    const control = await player
                        .chooseControl(suits, "cancel2")
                        .set("ai", () => {
                            const { player, cards, controls } = get.event();
                            const map = {
                                cancel2: 0,
                                heart: get.recoverEffect(player, player, player),
                                diamond: get.effect(player, { name: "draw" }, player, player) * cards.filter(i => get.suit(i, false) === "diamond").length,
                                spade: (() => {
                                    const num = cards.filter(i => get.suit(i, false) === "spade").length;
                                    Math.max(
                                        ...game
                                            .filterPlayer(target => target !== player)
                                            .map(target => {
                                                const eff = get.effect(target, { name: "guohe_copy2" }, player, player);
                                                return get.effect(target, { name: "losehp" }, player, player) + eff * Math.sqrt(num, target.countDiscardableCards(player, "he"));
                                            })
                                    );
                                })(),
                                club: Math.max(
                                    ...game
                                        .filterPlayer(target => target !== player)
                                        .map(target => {
                                            const att = Math.sign(get.attitude(player, target));
                                            return cards.filter(i => get.suit(i, false) === "club").reduce((sum, card) => sum + get.value(card, target), 0) * att;
                                        })
                                ),
                            };
                            return controls.slice().sort((a, b) => map[b] - map[a])[0];
                        })
                        .set("prompt", get.prompt2(event.skill))
                        .set("cards", cards)
                        .forResult("control");
                    event.result = { bool: control && control !== "cancel2", cost_data: control };
                },
                async content(event, trigger, player) {
                    let suit = event.cost_data,
                        cards = trigger.getl(player).cards2.filter(i => get.suit(i, false) === suit);
                    switch (suit) {
                        case "heart":
                            const next = player.chooseToMove("将红桃牌以任意顺序置于牌堆顶或牌堆底", true);
                            next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
                            next.processAI = list => {
                                let player = get.player(),
                                    cards = list[0][1],
                                    att = get.sgn(get.attitude(player, target));
                                let target = get.event().getTrigger().name == "phaseZhunbei" ? player : player.next;
                                let top = [],
                                    judges = target.getCards("j"),
                                    stopped = false;
                                if (player !== target || !target.hasWuxie()) {
                                    for (let i = 0; i < judges.length; i++) {
                                        let judge = get.judge(judges[i]);
                                        cards.sort((a, b) => (judge(b) - judge(a)) * att);
                                        if (judge(cards[0]) * att < 0) {
                                            stopped = true;
                                            break;
                                        } else top.unshift(cards.shift());
                                    }
                                }
                                let bottom;
                                if (!stopped) {
                                    cards.sort((a, b) => (get.value(b, player) - get.value(a, player)) * att);
                                    while (cards.length) {
                                        if (get.value(cards[0], player) <= 5 == att > 0) break;
                                        top.unshift(cards.shift());
                                    }
                                }
                                bottom = cards;
                                return [top, bottom];
                            };
                            const result = await next.forResult();
                            if (result?.bool && result.moved?.length > 0) {
                                let top = result.moved[0],
                                    bottom = result.moved[1];
                                top.reverse();
                                for (let i = 0; i < top.length; i++) ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                for (i = 0; i < bottom.length; i++) ui.cardPile.appendChild(bottom[i]);
                                game.addCardKnower(top, player);
                                game.addCardKnower(bottom, player);
                                player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
                                game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶，将" + get.cnNumber(bottom.length) + "张牌置于牌堆底");
                                game.updateRoundNumber();
                                await game.delayx();
                            }
                            await player.recover();
                            break;
                        case "diamond":
                            await player.draw(cards.length);
                            break;
                        case "spade":
                            const resu = await player
                                .chooseTarget(
                                    "令一名其他角色弃置" + get.cnNumber(cards.length) + "张牌，然后失去1点体力",
                                    (card, player, target) => {
                                        return target !== player && target.countCards("h");
                                    },
                                    true
                                )
                                .set("ai", target => {
                                    const { player, cards } = get.event(),
                                        eff = get.effect(target, { name: "guohe_copy2" }, player, player);
                                    return get.effect(target, { name: "losehp" }, player, player) + eff * Math.sqrt(cards.length, target.countDiscardableCards(player, "he"));
                                })
                                .set("cards", cards)
                                .forResult();
                            if (resu?.bool && resu.targets?.length) {
                                const target = resu.targets[0];
                                player.line(target);
                                await player.discardPlayerCard(target, cards.length, "he", true);
                                await target.loseHp();
                            }
                            break;
                        case "club":
                            cards = cards.filterInD("od");
                            if (cards.length > 0) {
                                const res = await player
                                    .chooseTarget("将" + get.translation(cards) + "交给一名其他角色", true, lib.filter.notMe)
                                    .set("ai", target => {
                                        const { player, cards } = get.event(),
                                            att = Math.sign(get.attitude(player, target));
                                        return cards.filter(i => get.suit(i, false) === "club").reduce((sum, card) => sum + get.value(card, target), 0) * att;
                                    })
                                    .set("cards", cards)
                                    .forResult();
                                if (res?.bool && res.targets?.length) {
                                    const target = res.targets[0];
                                    player.line(target);
                                    await target.gain(cards, "gain2");
                                }
                            }
                            break;
                    }
                },
            },
            //调节T细胞
            CIbaokang: {
                trigger: { global: "useCardToTargeted" },
                filter(event, player) {
                    if (player.countMark("CIbaokang_used") >= player.getHp() + player.countMark("CIyikong")) return false;
                    return event.card.name === "sha" && Array.isArray(event.getParent().cards) && event.getParent().cards.length > 0;
                },
                logTarget: "target",
                check(event, player) {
                    return get.attitude(player, event.target) > 0;
                },
                async content(event, trigger, player) {
                    player.addTempSkill("CIbaokang_used", "roundStart");
                    player.addMark("CIbaokang_used", 1, false);
                    player.addTempSkill("CIbaokang_effect");
                    player.markAuto("CIbaokang_effect", [trigger.getParent()]);
                    const target = trigger.target,
                        str = get.translation(target);
                    let cards = get.cards(player.getHp() + 1, true);
                    const result = await player
                        .chooseButton(["请选择一张牌令" + str + "获得", cards], true)
                        .set("ai", button => {
                            return get.value(button.link);
                        })
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        cards.removeArray(result.links);
                        const next = target.gain(result.links, "gain2");
                        next.giver = player;
                        await next;
                        if (target !== player && result.links.some(i => get.color(i, false) !== "red")) {
                            target.addShownCards(
                                result.links.filter(i => get.color(i, false) !== "red"),
                                "visible_CIbaokang"
                            );
                        }
                        if (cards.length > 0) {
                            const result2 = await player
                                .chooseButton(["选择获得一张牌", cards], true)
                                .set("ai", button => {
                                    return get.value(button.link);
                                })
                                .forResult();
                            if (result2?.bool && result2.links?.length) {
                                await player.gain(result2.links, "gain2");
                            }
                        }
                    }
                },
                subSkill: {
                    used: {
                        charlotte: true,
                        onremove: true,
                    },
                    effect: {
                        charlotte: true,
                        onremove: true,
                        trigger: { global: "useCardAfter" },
                        filter(event, player) {
                            if (!player.getStorage("CIbaokang_effect").includes(event)) return false;
                            return (
                                event.player?.isIn() &&
                                player.countCards("he", card => {
                                    if (get.position(card) === "h" && _status.connectMode) return true;
                                    return lib.filter.cardDiscardable(card, player);
                                }) >= 2
                            );
                        },
                        async cost(event, trigger, player) {
                            const target = trigger.player,
                                list = [event.skill, target];
                            event.result = await player
                                .chooseToDiscard(2, "he", get.prompt(...list))
                                .set("ai", card => {
                                    const {
                                        player,
                                        logSkill: [skill, target],
                                    } = get.event();
                                    return get.damageEffect(target, player, player) - get.value(card);
                                })
                                .set("prompt2", "弃置两张牌，对" + get.translation(target) + "造成1点伤害")
                                .set("logSkill", list)
                                .forResult();
                        },
                        popup: false,
                        async content(event, trigger, player) {
                            const target = trigger.player,
                                str = get.translation(target);
                            await target.damage();
                            if (target.isIn() && (player.storage["CIyikong_effect"]?.[target.playerid] || 0) > 0) {
                                const result = await player
                                    .chooseBool("是否失去1点体力，令" + str + "翻面？")
                                    .set(
                                        "choice",
                                        (() => {
                                            const att = get.attitude(player, target);
                                            if (target.hasSkillTag("noturn") || att === 0) return false;
                                            return (att > 0) ^ !target.isTurnedOver();
                                        })()
                                    )
                                    .forResult();
                                if (result?.bool) {
                                    player.line(target);
                                    await target.turnOver();
                                }
                            }
                        },
                    },
                },
            },
            CIyikong: {
                enable: "phaseUse",
                usable: 1,
                filterTarget: lib.filter.notMe,
                async content(event, trigger, player) {
                    const target = event.target;
                    player.addSkill("CIyikong_effect");
                    player.storage["CIyikong_effect"][target.playerid] ??= 0;
                    player.storage["CIyikong_effect"][target.playerid]++;
                    player.markSkill("CIyikong_effect");
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return !player.storage["CIyikong_effect"]?.[target.playerid] ? -3 : -1;
                        },
                    },
                },
                intro: { content: "【胞抗】发动次数+#" },
                subSkill: {
                    effect: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] ??= {};
                        },
                        onremove: true,
                        markimage: "extension/瘟疫公司/image/card/CIbaokang_mark.png",
                        intro: {
                            markcount(storage = {}) {
                                return Object.values(storage).reduce((sum, num) => sum + num, 0);
                            },
                            content(storage = {}, player) {
                                const targets = Object.keys(storage)
                                    .map(id => (_status.connectMode ? lib.playerOL : game.playerMap)[id])
                                    .sortBySeat(player);
                                return [targets.map(i => get.translation(i) + "下" + storage[i.playerid] + "次").join("、"), "使用【杀】指定目标后，你令其选择一项：①弃置手牌中与此【杀】花色相同的所有牌；", "②令此【杀】无效且其不可使用与此【杀】花色不同的牌直到其下回合开始。", "若此【杀】造成了伤害，则你令【胞抗】的发动次数+1（至多加3）"].join("");
                            },
                        },
                        trigger: { global: "useCardToPlayered" },
                        filter(event, player) {
                            if (!event.isFirstTarget) return false;
                            return player.storage["CIyikong_effect"]?.[event.player.playerid];
                        },
                        forced: true,
                        logTarget: "player",
                        async content(event, trigger, player) {
                            const target = trigger.player,
                                suit = get.suit(trigger.suit);
                            player.storage[event.name][target.playerid]--;
                            if (!player.storage[event.name][target.playerid]) delete player.storage[event.name][target.playerid];
                            player[get.info(event.name).intro.markcount(player.storage[event.name]) > 0 ? "markSkill" : "removeSkill"](event.name);
                            const cards = target.getDiscardableCards(target, "h", card => get.suit(card) === suit);
                            const str = "弃置" + get.translation(cards) + "，或令" + get.translation(trigger.card) + "无效且不可使用非" + get.translation(suit) + "牌直到下回合开始";
                            const result =
                                cards.length > 0
                                    ? await target
                                        .chooseBool(str)
                                        .set(
                                            "choice",
                                            (() => {
                                                return trigger.targets.reduce((sum, target) => sum + get.effect(target, trigger.card, player, player), 0) - cards.reduce((sum, card) => sum + get.value(card), 0) > 0;
                                            })()
                                        )
                                        .forResult()
                                    : { bool: false };
                            if (result?.bool) await target.discard(cards);
                            else {
                                trigger.getParent().excluded.addArray(game.filterPlayer2());
                                game.log(trigger.card, "被无效了");
                                target.addTempSkill("CIyikong_ban", { player: "phaseBegin" });
                                target.markAuto("CIyikong_ban", [suit]);
                                target.storage["CIyikong_ban"].sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                                target.addTip(
                                    "CIyikong_ban",
                                    ["CIyikong", ...target.storage["CIyikong_ban"]].map(str => get.translation(str))
                                );
                            }
                            player
                                .when("useCardAfter")
                                .filter(evt => {
                                    if (player.countMark("CIyikong") >= 3) return false;
                                    return evt === trigger.getParent() && game.hasPlayer2(i => i.hasHistory("damage", evt2 => evt2.card === trigger.card));
                                })
                                .then(() => player.addMark("CIyikong", 1, false));
                        },
                    },
                    ban: {
                        charlotte: true,
                        onremove(player, skill) {
                            delete player.storage[skill];
                            player.removeTip(skill);
                        },
                        intro: {
                            content(storage = []) {
                                if (!storage.length) return "无效果";
                                return "不能使用" + (storage.length > 1 ? "" : "非" + get.translation(storage)) + "牌";
                            },
                        },
                        mod: {
                            cardUsable(card, player) {
                                const storage = player.storage["CIyikong_ban"];
                                if (!storage.length) return;
                                if (storage.length > 1 || get.suit(card) !== storage[0]) return false;
                            },
                            cardSavable(card, player) {
                                const storage = player.storage["CIyikong_ban"];
                                if (!storage.length) return;
                                if (storage.length > 1 || get.suit(card) !== storage[0]) return false;
                            },
                        },
                    },
                },
            },
            //杀手T细胞
            CIbaomao: {
                trigger: { source: "damageBegin1" },
                filter(event, player) {
                    if (event.card.name !== "sha") return false;
                    const target = event.player;
                    return target.hasCard(card => get.is.shownCard(card), "h");
                },
                init() {
                    game.addGlobalSkill("CIbaomao_effect");
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { global: "showCardsEnd" },
                        filter(event, player) {
                            return get.itemtype(event.cards) === "cards" && event.cards.some(i => get.position(i) === "h");
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        async content(event, trigger, player) {
                            game.broadcastAll(cards => {
                                cards.forEach(card => card.addGaintag("CIbaomao_tag"));
                            }, trigger.cards);
                        },
                    },
                    tag: {},
                },
            },
            CIchuanba: {
                trigger: { player: "useCardToPlayered" },
                filter(event, player) {
                    const { card, target } = event;
                    if (event.card.name !== "sha" || event.getParent().directHit.includes(target)) return false;
                    return player.countCards("h", i => get.suit(card) === get.suit(i)) > target.getHp();
                },
                forced: true,
                logTarget: "target",
                async content(event, trigger, player) {
                    trigger.getParent().directHit.add(trigger.target);
                    game.log(trigger.target, "不可响应", trigger.card);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg?.target || !arg?.card) return false;
                        const filter = card => !ui.selected.cards.includes(card) && !card.cards?.includes(card);
                        return player.countCards("h", i => filter(i) && get.suit(arg.card) === get.suit(i)) > arg.target.getHp();
                    },
                },
            },
            //辅助T细胞
            CIbaoji: {
                trigger: { player: "damageEnd" },
                enable: "phaseUse",
                filter(event, player) {
                    if (player.getHp() <= 0 || !game.hasPlayer(i => i !== player)) return false;
                    return event.name === "damage" || !player.getStat().skill.CIbaoji;
                },
                check(event, player) {
                    return lib.skill.CIbaoji.ai.result.player(player) > 0;
                },
                usable: Infinity, //方便重置
                async content(event, trigger, player) {
                    player.addTempSkill("CIbaoji_buff");
                    let cards = get.cards(player.getHp(), true);
                    await player.chooseControl("ok").set("dialog", ["牌堆顶的牌", cards]);
                    const suits = [...player.getCards("h"), ...cards]
                        .map(i => get.suit(i))
                        .unique()
                        .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                    const suit =
                        suits.length > 1
                            ? await player
                                .chooseControl(suits)
                                .set("ai", () => get.event().controls.randomGet())
                                .set("dialog", [get.translation(event.name) + "：请选择你要分配的花色", cards, "hidden"])
                                .forResult("control")
                            : { control: suits[0] };
                    if (suit) {
                        player.popup(suit);
                        game.log(player, "选择了", "#g" + get.translation(suit));
                        cards = cards.filter(card => get.suit(card) === suit);
                        //分配牌堆顶的牌
                        let map = new Map([]);
                        if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
                        while (cards.length > 0) {
                            const result = await player
                                .chooseButtonTarget({
                                    createDialog: ["请选择你要分配的牌和目标", cards],
                                    selectButton: [1, Infinity],
                                    filterTarget: lib.filter.notMe,
                                    ai1(button) {
                                        if (ui.selected.buttons.length > 0) return false;
                                        return Math.max(...game.filterPlayer(target => target !== player).map(target => get.attitude(get.player(), target) * get.value(button.link)));
                                    },
                                    ai2(target) {
                                        return get.attitude(get.player(), target) * ui.selected.buttons.reduce((sum, i) => sum + get.value(i.link), 0);
                                    },
                                    forced: true,
                                })
                                .forResult();
                            const {
                                bool,
                                links,
                                targets: [target],
                            } = result;
                            if (bool) {
                                cards.removeArray(links);
                                map.set(target, [...(map.get(target) || []), ...links]);
                            } else break;
                        }
                        if (_status.connectMode) {
                            game.broadcastAll(() => {
                                delete _status.noclearcountdown;
                                game.stopCountChoose();
                            });
                        }
                        let list = Array.from(map.entries());
                        player.line(list.map(i => i[0]));
                        await game
                            .loseAsync({
                                gain_list: list,
                                player: player,
                                cards: list.map(i => i[1]).flat(),
                                giver: player,
                                animate: "gain2",
                                gaintag: ["CIbaoji_effect"],
                            })
                            .setContent("gaincardMultiple");
                        //分配自己的手牌
                        map = new Map([]);
                        cards = player.getCards("h", card => get.suit(card) === suit);
                        if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
                        while (cards.length > 0) {
                            const result = await player
                                .chooseCardTarget({
                                    prompt: "请选择你要分配的牌和目标",
                                    selectCard: [1, Infinity],
                                    filterCard: card => get.event("cards").includes(card),
                                    filterTarget: lib.filter.notMe,
                                    ai1(card) {
                                        if (ui.selected.cards.length > 0) return false;
                                        return Math.max(...game.filterPlayer(target => target !== player).map(target => get.attitude(get.player(), target) * get.value(card)));
                                    },
                                    ai2(target) {
                                        return get.attitude(get.player(), target) * ui.selected.cards.reduce((sum, i) => sum + get.value(i), 0);
                                    },
                                    forced: true,
                                })
                                .set("cards", cards)
                                .forResult();
                            const {
                                bool,
                                cards: links,
                                targets: [target],
                            } = result;
                            if (bool) {
                                cards.removeArray(links);
                                map.set(target, [...(map.get(target) || []), ...links]);
                            } else break;
                        }
                        if (_status.connectMode) {
                            game.broadcastAll(() => {
                                delete _status.noclearcountdown;
                                game.stopCountChoose();
                            });
                        }
                        list = Array.from(map.entries());
                        player.line(list.map(i => i[0]));
                        await game
                            .loseAsync({
                                gain_list: list,
                                player: player,
                                cards: list.map(i => i[1]).flat(),
                                giver: player,
                                animate: "giveAuto",
                                gaintag: ["CIbaoji_effect"],
                            })
                            .setContent("gaincardMultiple");
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return game.hasPlayer(target => target !== player && get.attitude(player, target) > 0);
                        },
                    },
                },
                init() {
                    game.addGlobalSkill("CIbaoji_effect");
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mod: {
                            cardUsable(card) {
                                if (get.number(card) === "unsure" || card.cards?.every(card => card.hasGaintag("CIbaoji_effect"))) return Infinity;
                            },
                        },
                        trigger: { player: "useCard0" },
                        filter(event, player) {
                            if (event.addCount === false) return false;
                            return player.hasHistory("lose", evt => {
                                if (evt.getParent() !== event) return false;
                                return Object.values(evt.gaintag_map).flat().includes("CIbaoji_effect");
                            });
                        },
                        content() {
                            trigger.addCount = false;
                            player.stat[player.stat.length - 1].card[trigger.card.name] > 0 && player.stat[player.stat.length - 1].card[trigger.card.name]--;
                        },
                    },
                    buff: {
                        charlotte: true,
                        trigger: { global: "loseAsyncAfter" },
                        filter(event, player) {
                            if (player.countCards("h") > 0 || !event.getl?.(player)?.hs?.length) return false;
                            return event.getParent().name === "CIbaoji" && event.getParent().player === player;
                        },
                        forced: true,
                        popup: false,
                        content() {
                            player.drawTo(player.maxHp);
                        },
                    },
                },
            },
            CIyukang: {
                trigger: {
                    player: "loseAfter",
                    global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
                },
                filter(event, player) {
                    const hp = player.getHp();
                    if (!((event.getl?.(player)?.hs ?? []).length > hp || (event.getg?.(player) ?? []).length > hp)) return false;
                    return game.hasPlayer(target => {
                        if (target === player) return false;
                        return game.hasPlayer(current => {
                            if (current === target || current === player) return false;
                            return target.canUse(new lib.element.VCard({ name: "sha" }), current, false);
                        });
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(
                            get.prompt2(event.skill),
                            (card, player, target) => {
                                if (target === player) return false;
                                const source = ui.selected.targets[0];
                                if (!source) {
                                    return game.hasPlayer(current => {
                                        if (current === target || current === player) return false;
                                        return target.canUse(new lib.element.VCard({ name: "sha" }), current, false);
                                    });
                                }
                                return source.canUse(new lib.element.VCard({ name: "sha" }), target, false);
                            },
                            2
                        )
                        .set("complexTarget", true)
                        .set("ai", target => {
                            const player = get.player(),
                                card = new lib.element.VCard({ name: "sha" }),
                                source = ui.selected.targets[0];
                            if (!source) {
                                return Math.max(
                                    ...game
                                        .filterPlayer(current => {
                                            if (current === target || current === player) return false;
                                            return target.canUse(card, current, false);
                                        })
                                        .map(current => get.effect(current, card, target, player) * Math.sign(get.effect(current, card, target, target)))
                                );
                            }
                            return get.effect(target, card, source, player) * Math.sign(get.effect(target, card, source, target));
                        })
                        .forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    player.logSkill(event.name, event.targets);
                    player.line2(event.targets);
                    await game.delayx();
                    const [from, to] = event.targets;
                    const result = await from
                        .chooseBool("是否视为对" + get.translation(to) + "使用一张无距离和次数限制的【杀】？")
                        .set(
                            "choice",
                            (() => {
                                return get.effect(to, new lib.element.VCard({ name: "sha" }), from, from) > 0;
                            })()
                        )
                        .forResult();
                    if (result?.bool) {
                        const next = from.useCard(new lib.element.VCard({ name: "sha" }), to, false);
                        await next;
                        if (
                            game.hasPlayer2(target => {
                                return target.hasHistory("damage", evt => evt.getParent(next.name) === next);
                            })
                        )
                            await from.draw();
                    }
                },
            },
            //嗜酸粒细胞
            CIciji: {
                trigger: { global: ['gainAfter', 'loseAsyncAfter'] },
                getIndex(event, player) {
                    let froms = [];
                    let tos = game.filterPlayer(target => {
                        if (target === player) return false;
                        const cards = event.getg(target);
                        const currents = game.filterPlayer(current => {
                            if (current === player) return false;
                            return event.getl(current).cards2.containsSome(...cards);
                        });
                        froms.addArray(currents);
                        return currents.length > 0;
                    });
                    return [...froms, ...tos].unique().sortBySeat();
                },
                direct: true,
                async content(event, trigger, player) {
                    let target = event.indexedData, skill = event.name, choice = [], choiceList = [], sha = new lib.element.VCard({ name: 'sha' });
                    if (player.countDiscardableCards(player, 'he', { color: 'red' }) > 0 && player.canUse(sha, target, false)) {
                        choice.push('弃牌');
                        choiceList.push(`弃置一张红色牌，视为对${get.translation(target)}使用一张【杀】。若其手牌数大于你，则其不可响应此牌`);
                    }
                    choice.push(...['判定', 'cancel2']);
                    choiceList.push(`进行一次判定，若判定结果为红色，则你获得判定牌并对${get.translation(target)}造成1点伤害`);
                    const result = await player.chooseControl(choice).set('ai', () => {
                        const { player, target, controls } = get.event();
                        const getNum = function (choice) {
                            switch (choice) {
                                case '弃牌':
                                    return get.effect(target, new lib.element.VCard({ name: 'sha', storage: { CIciji: true } }), player, player) - Math.min(...player.getDiscardableCards(player, 'he', { color: 'red' }).map(card => get.value(card)));
                                case '判定':
                                    return get.damageEffect(target, player, player) / 2;
                                case 'cancel2':
                                    return 0;
                            }
                        };
                        return controls.slice().sort((a, b) => getNum(b) - getNum(a))[0];
                    }).set('prompt', get.prompt(skill, target)).set('target', target).forResult();
                    if (result?.control && result.control !== 'cancel2') {
                        player.addTempSkill('CIciji_effect');
                        switch (result.control) {
                            case '弃牌':
                                const next = player.chooseToDiscard('he', true, { color: 'red' });
                                next.logSkill = [skill, target];
                                await next;
                                if (player.canUse(sha, target, false)) {
                                    const next2 = player.useCard(sha, target, false);
                                    if (target.countCards('h') > player.countCards('h')) {
                                        next.set('oncard', () => {
                                            const event = get.event();
                                            event.directHit.addArray(event.targets);
                                            game.log(event.card, '不可被响应');
                                        });
                                    }
                                    await next2;
                                }
                                break;
                            case '判定':
                                const result2 = await player.judge(card => {
                                    return get.color(card) === 'red' ? 4 : -2;
                                }).set('judge2', result => result.bool).forResult();
                                if (result2?.bool) {
                                    if (get.position(result2.card) === 'd') await player.gain(result2.card, 'gain2');
                                    await target.damage();
                                }
                                break;
                        }
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg?.card?.storage?.CIciji && arg.target && arg.target.countCards('h') > player.countCards('h');
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        trigger: { source: 'damageSource' },
                        filter(event, player) {
                            const target = event.player;
                            if (!target.isIn()) return false;
                            const evt = event.getParent('CIciji', true);
                            if (!evt || evt.player !== player || evt.indexedData !== target) return false;
                            return evt._trigger.getg(target).some(i => get.position(i) === 'h' && get.owner(i) === target && lib.filter.cardDiscardable(i, target, 'CIciji_effect'));
                        },
                        prompt2(event, player) {
                            return `令${get.translation(event.player)}弃置本次获得的牌`;
                        },
                        logTarget: 'player',
                        async content(event, trigger, player) {
                            const target = trigger.player, evt = trigger._trigger;
                            await target.discard(evt.getg(target).filter(i => get.position(i) === 'h' && get.owner(i) === target && lib.filter.cardDiscardable(i, target, event.name)));
                        },
                    },
                },
            },
            CIsuanbao: {
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    return event.player.getHp() > player.getHp();
                },
                check(event, player) {
                    const target = event.player;
                    if (get.attitude(player, target) >= 0 || get.damageEffect(target, player, player) <= 0) return false;
                    if (target.hasSkillTag('filterDamage', null, {
                        player: player,
                        card: event.card,
                    })) return false;
                    return player.hp + player.countCards('hs', card => player.canSaveCard(card, player)) > 1;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    player.addTempSkill('CIsuanbao_after');
                    player.markAuto('CIsuanbao_after', [[trigger, trigger.player]]);
                    await player.loseHp();
                    trigger.num += player.getDamagedHp();
                },
                subSkill: {
                    after: {
                        charlotte: true,
                        onremove: true,
                        trigger: { global: 'damageEnd' },
                        filter(event, player) {
                            if (!player.hasCard(card => {
                                if (_status.connectMode && get.position(card) === 'h') return true;
                                return get.color(card) === 'red' && lib.filter.cardDiscardable(card, player, 'CIsuanbao_after');
                            }, 'he')) return false;
                            return player.getStorage('CIsuanbao_after').some(i => i[0] === event && i[1].isIn() && i[1].getHp() > player.getHp());
                        },
                        direct: true,
                        async content(event, trigger, player) {
                            const target = player.getStorage(event.name).find(i => i[0] === trigger)[1];
                            const result = await player.chooseToDiscard('he', { color: 'red' }).set('ai', card => {
                                const { player, target } = get.event();
                                return get.damageEffect(target, player, player) - get.value(card);
                            }).set('prompt', `是否弃置一张红色牌，对${get.translation(target)}造成1点伤害`).set('target', target).forResult();
                            if (result?.bool) {
                                player.line(target);
                                await target.damage();
                            }
                        },
                    },
                },
            },
            //嗜碱粒细胞
            CIbaomin: {
                trigger: { global: 'damageEnd' },
                filter(event, player) {
                    const target = event.player;
                    return target.isIn() && target.getHp() > 0 && ![player, ...player.getStorage('CIbaomian_round')].includes(target);
                },
                async cost(event, trigger, player) {
                    const target = trigger.player;
                    event.result = await player.choosePlayerCard(target, 'h', get.prompt2(event.skill, target), [1, target.getHp()]).set('ai', () => 1 + Math.random()).forResult();
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player, cards = event.cards;
                    player.addTempSkill('CIbaomian_round', 'roundStart');
                    player.markAuto('CIbaomian_round', [target]);
                    await player.showCards(cards, `${get.translation(player)}发动了【${get.translation(event.name)}】`);
                    const num = event.num = cards.filter(i => get.color(i) === 'red').length + target.getShownCards().filter(i => get.color(i) === 'red').length;
                    if (num > 0) await player.draw();
                    if (player.hasCard(card => get.tag(card, 'damage') >= 0.5, 'h') && game.hasPlayer(i => i !== player)) {
                        const result = await player.chooseCardTarget({
                            prompt: `${get.translation(event.name)}：将一张伤害类手牌交给一名其他角色`,
                            filterCard(card, player) {
                                return get.tag(card, 'damage') >= 0.5;
                            },
                            filterTarget: lib.filter.notMe,
                            ai1(card) {
                                const player = get.player();
                                return Math.max(...game.filterPlayer(i => i !== player).map(i => Math.sign(get.attitude(player, i)) * get.value(card)));
                            },
                            ai2(target) {
                                const player = get.player(), card = ui.selected.cards[0];
                                return Math.sign(get.attitude(player, target)) * get.value(card);
                            },
                        }).forResult();
                        if (result?.bool && result.cards?.length && result.targets?.length) {
                            const current = result.targets[0];
                            await player.give(result.cards, current);
                            current.addTempSkill('CIbaomin_effect');
                            const result2 = await current.chooseToUse(function (card, player, event) {
                                if (get.itemtype(card) !== 'card' || !get.event().cards.includes(card)) return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            }, `${get.translation(event.name)}：是否对${get.translation(target)}使用${get.translation(result.cards)}？`).set('filterTarget', function (card, player, target) {
                                const sourcex = get.event().sourcex;
                                if (target !== sourcex && !ui.selected.targets.includes(sourcex)) return false;
                                return lib.filter.targetEnabled.apply(this, arguments);
                            }).set('targetRequired', true).set('complexSelect', true).set('complexTarget', true).set('cards', result.cards).set('sourcex', target).forResult();
                            if (!result2?.bool) await player.draw();
                        }
                    }
                },
                subSkill: {
                    round: {
                        charlotte: true,
                        onremove: true,
                    },
                    effect: {
                        charlotte: true,
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            const evt = event.getParent(2);
                            return evt.name === 'CIbaomin' && evt.num > evt.player.getHp();
                        },
                        silent: true,
                        async content(event, trigger, player) {
                            trigger.directHit.addArray(game.players);
                            game.log(trigger.card, '不可被响应');
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                const evt = get.event();
                                return evt.name === 'chooseToUse' && evt.getParent().name === 'CIbaomin' && evt.getParent().num > evt.getParent().player.getHp();
                            },
                        },
                    },
                },
            },
            CIjianyan: {
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    if (!player.hasCard(card => {
                        if (_status.connectMode && get.position(card) === 'h') return true;
                        return lib.filter.cardDiscardable(card, player, 'CIjianyan_cost');
                    }, 'he')) return false;
                    return event.source?.isIn() && event.source !== player;
                },
                async cost(event, trigger, player) {
                    const target = trigger.source, list = [event.skill, target];
                    const next = player.chooseToDiscard(get.prompt2(...list), 'he', [1, Infinity]);
                    next.logSkill = list;
                    next.ai = function (card) {
                        const player = get.player(), source = get.event().getTrigger().source;
                        if (get.attitude(player, source) >= 0) return 0;
                        const sha = new lib.element.VCard({ name: 'sha' }), nosha = !player.canUse(sha, source, false) || get.effect(source, sha, player, player) <= 0;
                        if (_status.currentPhase !== source && nosha) return 0;
                        if (get.color(card) === 'black') {
                            if (!nosha) return (ui.selected.cards.filter(i => get.color(i) === 'sha').length < 3 ? 10 : 7) - get.value(card);
                        }
                        if (ui.selected.cards.length >= source.countCards('h', card => !get.is.shownCard(card))) return 0;
                        return 7 - get.value(card);
                    };
                    event.result = await next.forResult();
                },
                popup: false,
                async content(event, trigger, player) {
                    const target = trigger.source, cards = event.cards;
                    const result = await player.choosePlayerCard(target, 'h', cards.length, true).set('filterButton', button => {
                        return !get.is.shownCard(button.link);
                    }).forResult();
                    if (result?.bool) {
                        await target.addShownCards(cards, `visible_${event.name}`);
                        await player.showCards(cards, `${get.translation(target)}被明置的牌`);
                        target.addTempSkill(`${event.name}_effect`);
                    }
                    const sha = new lib.element.VCard({ name: 'sha' });
                    if (player.canUse(sha, target, false)) {
                        const next = player.useCard(sha, target, false);
                        next.oncard = function () {
                            const trigger = get.event(), event = trigger.getParent();
                            trigger.baseDamage += Math.min(2, event.cards.filter(i => get.color(i, event.player) === 'black').length);
                        };
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mark: true,
                        markimage: 'extension/瘟疫公司/image/card/CIjianyan_mark',
                        intro: { content: '不能使用或打出明置牌' },
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
                        },
                    },
                },
            },
            //血小板
            CIzhixue: {
                trigger: { global: ['damageEnd', 'phaseBegin'] },
                filter(event, player) {
                    if (event.name === 'phase' && event.player.isHealthy()) return false;
                    return event.player === player || event.player.countCards('he') > 0;
                },
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    const target = trigger.player;
                    if (target !== player) await player.chooseToGive(target, 'he', true);
                    const result = await target.judge().forResult();
                    if (result.color === 'red') await target.recover();
                    if (result.color === 'black') {
                        const goon = _status.currentPhase === target;
                        target[goon ? 'addTempSkill' : 'addSkill'](`${event.name}_${goon ? 'hand' : 'damage'}`);
                        target.addMark(`${event.name}_${goon ? 'hand' : 'damage'}`, 1, false);
                    }
                },
                subSkill: {
                    hand: {
                        charlotte: true,
                        onremove: true,
                        markimage: 'image/card/handcard.png',
                        intro: { content: '手牌上限+#' },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.countMark('CIzhixue_hand');
                            },
                        },
                    },
                    damage: {
                        charlotte: true,
                        onremove: true,
                        markimage: 'extension/瘟疫公司/image/card/CIzhixue_mark',
                        intro: { content: '下#次受到的非属性伤害-1' },
                        trigger: { player: 'damageBegin3' },
                        filter(event, player) {
                            return !event.hasNature() && player.hasMark('CIzhixue_damage');
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            trigger.num--;
                            player.removeMark(event.name, 1, false);
                            if (!player.hasMark(event.name)) player.removeSkill(event.name);
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (player.hasSkillTag('jueqing', false, target) || player._CIzhixue_temp) return;
                                    if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
                                    if (get.tag(card, 'damage') && (game.hasNature(card) || (card.name === 'sha' && player.hasSkill('zhuque_skill')))) {
                                        if (get.attitude(player, target) > 0 && target.hp > 1) return 'zeroplayertarget';
                                        if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
                                            if (card.name === 'sha') return;
                                            player._CIzhixue_temp = true;
                                            let sha = false, num = player.countCards('h', card => {
                                                if (card.name == 'sha') {
                                                    if (sha) return false;
                                                    else sha = true;
                                                }
                                                return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                            });
                                            delete player._CIzhixue_temp;
                                            if (player.hasSkillTag('damage')) num++;
                                            if (num < 2) {
                                                let enemies = player.getEnemies();
                                                if (!(enemies.length === 1 && enemies[0] === target && player.needsToDiscard())) return 'zeroplayertarget';
                                            }
                                        }
                                    }
                                },
                            },
                        },
                    },
                },
            },
            CIningxue: {
                trigger: { global: 'phaseDiscardEnd' },
                filter(event, player) {
                    if (event.player === player || !player.getRoundHistory('useSkill', evt => {
                        return evt.skill === 'CIzhixue' && evt.targets?.includes(event.player);
                    }).length) return false;
                    let cards = [];
                    game.getGlobalHistory('cardMove', evt => {
                        if (evt.name === 'cardsDiscard' && evt.getParent('phaseDiscard') === event) cards.addArray(evt.cards.filterInD('d'));
                    });
                    game.countPlayer2(current => {
                        current.getHistory('lose', evt => {
                            if (evt.type === 'discard' && evt.getParent('phaseDiscard') === event) cards.addArray(evt.cards.filterInD('d'));
                        });
                    });
                    return cards.length;
                },
                async cost(event, trigger, player) {
                    let cards = [];
                    game.getGlobalHistory('cardMove', evt => {
                        if (evt.name == 'cardsDiscard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards.filterInD('d'));
                    });
                    game.countPlayer2(current => {
                        current.getHistory('lose', evt => {
                            if (evt.type === 'discard' && evt.getParent('phaseDiscard') === event) cards.addArray(evt.cards.filterInD('d'));
                        });
                    });
                    const result = await player.chooseButton([get.prompt2(event.skill), cards], [1, Infinity]).set('ai', button => {
                        return get.value(button.link);
                    }).set('filterButton', button => {
                        return !ui.selected.buttons.some(but => get.color(but.link) === get.color(button.link));
                    }).setHiddenSkill(event.skill);
                    event.result = {
                        bool: result?.bool,
                        cards: result?.links ?? [],
                    };
                },
                async content(event, trigger, player) {
                    await player.gain(event.cards, 'gain2');
                },
                ai: { combo: 'CIzhixue' },
            },
            //脑细胞
            CIzhishi: {
                trigger: { player: 'phaseDrawBegin1' },
                filter(event, player) {
                    return !event.numFixed;
                },
                check(event, player) {
                    const cards = player.getCards('h');
                    return cards.map(i => get.type2(i)).unique().length + cards.map(i => get.suit(i)).unique().length >= 3;
                },
                async content(event, trigger, player) {
                    trigger.changeToZero();
                    const hs = player.getCards('h');
                    let cards = await game.cardsGotoOrdering(get.cards(hs.map(i => get.type2(i)).unique().length + hs.map(i => get.suit(i)).unique().length)).forResult('cards');
                    const videoId = lib.status.videoId++;
                    game.broadcastAll((player, id, cards) => {
                        if (player !== game.me) return;
                        const dialog = ui.create.dialog(`${get.translation(player)}发动了【智识】`, cards);
                        dialog.videoId = id;
                    }, player, videoId, cards);
                    const time = get.utc();
                    game.addVideo('showCards', player, [`${get.translation(player)}发动了【智识】`, get.cardsInfo(cards)]);
                    await game.delay(2.5);
                    const choice = cards.map(i => get.color(i)).unique();
                    let result;
                    if (choice.length > 1) {
                        game.broadcastAll((player, id) => {
                            const dialog = get.idDialog(id);
                            if (player === game.me && !_status.auto) dialog.content.childNodes[0].textContent = `智识：选择获得一种颜色的牌`;
                        }, player, videoId);
                        result = await player.chooseControl(choice).set('ai', () => {
                            const { player, cards, controls } = get.event();
                            const getNum = function (color) {
                                return cards.reduce((sum, card) => {
                                    if (get.color(card) === color) sum + get.value(card);
                                    return sum;
                                }, 0);
                            };
                            return controls.slice().sort((a, b) => getNum(b) - getNum(a))[0];
                        }).set('cards', cards).forResult();
                    }
                    else result = { control: choice[0] };
                    const time2 = 1000 - (get.utc() - time);
                    if (time2 > 0) await game.delay(0, time2);
                    game.broadcastAll('closeDialog', videoId);
                    if (result?.control) {
                        const color = result.control, gains = cards.filter(card => get.color(card) === color);
                        if (gains.length > 0) {
                            cards.removeArray(gains);
                            await player.gain(gains, 'gain2');
                        }
                        if (cards.length > player.getHp()) player.skip('phaseDiscard');
                    }
                },
            },
            CIhuisi: {
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    return event.target !== player && player.canCompare(event.target, null, true);
                },
                check(event, player) {
                    if (get.effect(event.target, 'tianyi', player, player)) return true;
                    if (get.type(event.card) === 'basic') return event.targets.reduce((sum, i) => sum + get.effect(i, event.card, player, player), 0) > 0;
                    return game.hasPlayer(i => i !== player && !event.targets.includes(i) && lib.filter.targetEnabled2(event.card, player, i) && lib.filter.targetInRange(event.card, player, i));
                },
                prompt2(event, player) {
                    return lib.translate['CIhuishi_info'].split('②')[0].slice(1);
                },
                logTarget: 'target',
                async content(event, trigger, player) {
                    const target = trigger.target;
                    const result = player.canCompare(trigger.target) ? await player.chooseToCompare(target).forResult() : { bool: true };
                    if (result?.bool) {
                        const evt = trigger.getParent();
                        if (evt.addCount !== false) {
                            evt.addCount = false;
                            if (player.getStat('card')[evt.card.name] > 0) {
                                player.getStat('card')[evt.card.name]--;
                                game.log(evt.card, '不计入次数限制');
                            }
                        }
                        if (get.type(evt.card) === 'basic') {
                            evt.effectCount++;
                            game.log(evt.card, '额外结算一次');
                        }
                        else {
                            const result2 = await player.chooseTarget(`是否为${get.translation(trigger.card)}增加一个其他角色为额外目标？`, (card, player, target) => {
                                const evt = get.event().getTrigger().getParent();
                                return target !== player && !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                            }).set('ai', target => {
                                return get.effect(target, _status.event.getTrigger().card, _status.event.player);
                            }).forResult();
                            if (result2?.bool && result2.targets?.length) {
                                const targets = result2.targets;
                                player.line(targets, evt.card.nature);
                                evt.targets.addArray(targets);
                                game.log(targets, '成为了', evt.card, '的额外目标');
                            }
                        }
                    }
                },
                group: 'CIhuisi_defend',
                subSkill: {
                    defend: {
                        trigger: { target: 'useCardToTargeted' },
                        filter(event, player) {
                            if (_status.currentPhase === player) return false;
                            return event.player !== player && player.canCompare(event.player, null, true);
                        },
                        check(event, player) {
                            return get.effect(player, event.card, event.player, player) < 0;
                        },
                        prompt2(event, player) {
                            return lib.translate['CIhuishi_info'].split('②')[1];
                        },
                        logTarget: 'player',
                        async content(event, trigger, player) {
                            const target = trigger.player;
                            const result = player.canCompare(trigger.target) ? await player.chooseToCompare(target).forResult() : { bool: true };
                            if (result?.bool) {
                                const evt = trigger.getParent();
                                evt.excluded.add(player);
                                game.log(evt.card, '对', player, '无效');
                            }
                            else {
                                const skipList = ['phaseDraw', 'phaseUse'].removeArray(player.skipList);
                                if (skipList.length > 0) {
                                    const choice = skipList.length > 1 ? await player.chooseControl(skipList).set('ai', () => {
                                        const player = get.player();
                                        return player.hasCard(card => player.hasValueTarget(card), 'hs') ? 'phaseDraw' : 'phaseUse';
                                    }).set('prompt', '请选择下次跳过的阶段').forResult('control') : skipList[0];
                                    if (choice) {
                                        player.skip(choice);
                                        game.log(player, '跳过了', `#y${get.translation(choice)}`);
                                    }
                                }
                                if (['phaseDraw', 'phaseUse'].every(i => player.skipList.includes(i))) player.tempBanSkill('CIhuishi', 'roundStart');
                            }
                        },
                    },
                },
            },
            CIshentong: {
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return player.getHistory('skipped').length > 0;
                },
                async cost(event, trigger, player) {
                    let given_map = {}, targets = [], skipList = player.getHistory('skipped').slice();
                    while (skipList.length > 0) {
                        const func = function (given_map) {
                            game.countPlayer(target => {
                                if (given_map[target.playerid]) target.prompt(given_map[target.playerid].map(i => get.translation(i)).join('<br>'));
                            });
                        };
                        if (event.player === game.me) func(given_map);
                        else if (event.isOnline()) player.send(func, given_map);
                        const result = await player.chooseButtonTarget({
                            createDialog: [
                                get.prompt2(event.skill),
                                [skipList.map(i => [i, get.translation(i)]), 'tdnodes'],
                            ],
                            filterTarget: lib.filter.notMe,
                            ai1(button) {
                                const { player, map } = get.event(), skip = button.link;
                                return Math.max(...game.filterPlayer(i => i !== player).map(target => get.attitude(player, target) * (map[skip] || 0)));
                            },
                            ai2(target) {
                                const { player, map } = get.event(), skip = ui.selected.buttons[0].link;
                                return get.attitude(player, target) * (map[skip] || 0);
                            },
                            map: {
                                phaseZhunbei: 1,
                                phaseJudge: 1,
                                phaseDraw: 3,
                                phaseUse: 2,
                                phaseDiscard: -2,
                                phaseJieshu: 1,
                            },
                        }).forResult();
                        if (result?.bool && result.links?.length && result.targets?.length) {
                            const target = result.targets[0], cards = result.links;
                            targets.add(target);
                            given_map[target.playerid] ??= [];
                            skipList.removeArray(cards);
                            given_map[target.playerid].addArray(cards);
                        }
                        else break;
                    }
                    event.result = {
                        bool: !!Object.keys(given_map).length,
                        targets: targets.sortBySeat(),
                        cost_data: given_map,
                    };
                },
                async content(event, trigger, player) {
                    const { cost_data: map, targets } = event;
                    for (const target of targets) {
                        target.addSkill(`${event.name}_effect`);
                        target.markAuto(`${event.name}_effect`, map[target.playerid]);
                    }
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        onremove: true,
                        markimage: 'extension/瘟疫公司/image/card/CIshentong_mark',
                        intro: { content: '下个回合开始时执行$' },
                        trigger: { player: 'phaseBegin' },
                        forced: true,
                        async content(event, trigger, player) {
                            const skipLists = player.getStorage(event.name);
                            player.removeSkill(event.name);
                            for (const skipList of skipLists) {
                                const next = player[skipList]();
                                event.next.remove(next);
                                trigger.next.push(next);
                            }
                        },
                    },
                },
            },
        },
        dynamicTranslate: {},
        translate: {
            working_cell: "工作细胞",
            CI_erythrocyte: "红细胞",
            CIyangjie: "氧结",
            CIyangjie_info: "「循血结氧」<br/><li>①当你获得牌后，若你本次获得的牌数不少于两张或当前回合角色不为你，你可以将一张手牌称为“氧”置于武将牌上。②你的手牌上限+X（X你武将牌上的“氧”数）。</li>",
            CIzhuanyang: "转氧",
            CIzhuanyang_info: "「输氧转送」<br/><li>出牌阶段或你受到伤害后，你可以将一张“氧”交给一名其他角色，然后该角色摸两张牌。若你交给其的“氧”为红色/红桃，其摸一张牌/回复1点体力，然后该角色交给你一张牌。</li>",
            CIzhuanyang_append: '<span class="cure-append">红细胞是脊椎动物体内通过血液运送氧气的最主要的媒介</span>',
            CI_neutrophil: "中性粒细胞",
            CIzhencheng: "侦呈",
            CIzhencheng_info: "「免疫监视」<br/><li>出牌阶段限一次或你受到伤害时，你可以观看一名其他角色的手牌，然后你可以选择一项：①令另一名其他角色观看其手牌；②展示其中一种类型的所有牌，然后弃置其中一张牌。</li>",
            CIbaotun: "胞吞",
            CIbaotun_info: "「胞噬吞饮」<br/><li>结束阶段/当你受到伤害后，你可以摸X张牌（X为你已损失体力值且至少为1），然后你将等量张牌当【杀】或【决斗】对本回合展示过牌的角色/伤害来源使用，其需使用等量张【闪】或打出等量张【杀】响应。此牌造成伤害后，你对其发动一次【侦呈】，然后获得其一张牌。</li>",
            CIbaotun_append: '<span class="cure-append">中性粒细胞能吞噬和杀灭细菌，参与炎症反应，是第二道免疫防线不可缺少的部分</span>',
            CI_macrophages: "巨噬细胞",
            CIbaozang: "胞葬",
            CIbaozang_info: "「免疫自稳」<br/><li>锁定技。①当你攻击范围内的角色进入濒死状态时，你获得其一张牌并摸一张牌。②当你攻击范围内的角色死亡后，你回复1点体力并摸两张牌，若该角色被你杀死且与你相邻，则你增加1点体力上限。</li>",
            CIqunshi: "群噬",
            CIqunshi_info: "「溶群化酶」<br/><li>①当你使用【杀】指定目标时，可以额外指定你的邻位角色与目标角色的邻位角色为目标（你以此法指定的目标数不能超过X，X为你的体力值）；此【杀】造成伤害后，你可以展示受伤角色至多Y张手牌（Y为其体力值）。②你的攻击范围+X；你使用红色的【杀】无次数限制。</li>",
            CIqunshi_append: '<span class="cure-append">巨噬细胞是自体重要的免疫细胞，具有抗感染、抗肿瘤和免疫调节等重要作用</span>',
            CI_dendriticcell: "树突状细胞",
            CIkangdi: "抗递",
            CIkangdi_info: "「抗原呈递」<br/><li>每轮每项各限一次。①其他角色受到伤害后，你可以弃置一张牌并观看其手牌，然后你可以选择任意张手牌与其任意张手牌交换。②当你受到伤害后，你可以展示伤害来源的手牌。</li>",
            CIchengji: "呈激",
            CIchengji_info: "「抗信激活」<br/><li>当你一次性失去超过体力值张牌后，你可以选择其中一张牌的花色，根据花色执行对应效果：红桃，你将其中的红桃牌以任意顺序置于牌堆顶或牌堆底，然后回复1点体力；方片，你摸其中方片牌数量的牌；黑桃，你弃置一名其他角色等同其中黑桃牌数量的牌，然后其失去1点体力；梅花，你将其中的梅花牌交给一名其他角色。</li>",
            CIchengji_append: '<span class="cure-append">它是功能最强的专职抗原递呈细胞，能高效地摄取处理和递呈抗原并激活细胞</span>',
            CI_regulatorytcell: "调节Ｔ细胞",
            CIbaokang: "胞抗",
            visible_CIbaokang: "invisible",
            CIbaokang_info: "「白介屏障」<br/><li>每轮限X次，一名角色成为实体【杀】的目标后，你可以观看牌堆顶X+1张牌（X为你的体力值），将其中一张牌交给其（若其不为你且交给其的牌不为红色，则明置此牌），然后你获得剩下的一张牌。此牌结算完毕后，你可以弃置两张牌对此【杀】的使用者造成1点伤害，若该角色为【抑控】所选择的角色，则你可以失去1点体力令其武将牌翻面。</li>",
            CIyikong: "抑控",
            CIyikong_info: "「免疫抑制」<br/><li>出牌阶段限一次，你可以选择一名其他角色，令其获得以下效果：其使用的下一张【杀】指定目标后，你令其选择一项：①弃置手牌中与此【杀】花色相同的所有牌；②令此【杀】无效且其不可使用与此【杀】花色不同的牌直到其下回合开始。若此【杀】造成了伤害，则你令【胞抗】的发动次数+1（至多加3）。</li>",
            CIyikong_append: '<span class="cure-append">抑制免疫反应引发的炎症并维持自身免疫耐受的抑制性细胞</span>',
            CI_cytotoxictcell: "杀手Ｔ细胞",
            CIbaomao: "胞锚",
            CIbaomao_info: "「识抗溶靶」<br/><li>锁定技，你使用【杀】对手牌区有明置牌和展示牌的角色造成的伤害+1。</li>",
            CIchuanba: "穿靶",
            CIchuanba_info: "「特异免疫」<br/><li>锁定技，当你使用【杀】指定目标后，若你手牌中与此【杀】花色相同的牌数大于目标角色的体力值，则令其不可响应此牌。</li>",
            CIchuanba_append: '<span class="cure-append">释放化学物质，直接诱导异常细胞凋亡坏死的特异性细胞毒效应细胞</span>',
            CI_helpertcell: "辅助Ｔ细胞",
            CIbaoji: "胞激",
            CIbaoji_info: "「极性协令」<br/><li>出牌阶段限一次或当你受到伤害后，你可以观看牌堆顶X张牌（X为你的体力值），然后你选择一种花色，从这些牌与你的手牌中将所有与该花色相同的牌任意分配给其他角色，这些角色使用这些牌无任何次数限制。若你因此失去了所有手牌，则你将手牌补至体力上限。</li>",
            CIyukang: "阈抗",
            CIyukang_info: "「免疫活化」<br/><li>当你一次性获得或失去超过X张手牌后，你可以选择两名其他角色A与B，A选择是否视为对B使用了一张不计距离和次数限制【杀】，若此【杀】造成了伤害，则A摸一张牌。</li>",
            CIyukang_append: '<span class="cure-append">指挥免疫细胞活化分化参与免疫应答的协助性细胞</span>',
            CI_eosinophil: '嗜酸粒细胞',
            CIciji: '刺寄',
            CIciji_info: '「抗虫血清」<br/><li>一名其他角色获得另一名其他角色的牌后，你可以选择一项：1.弃置一张红色牌，视为对其使用了一张无距离次数限制的【杀】（若该角色手牌数大于你，则此【杀】不可被响应）；2.进行一次判定，若结果为红色，则你获得此判定牌并对其造成1点伤害。其因【刺寄】受到伤害后，你可以弃置其获得的牌。</li>',
            CIsuanbao: '酸爆',
            CIsuanbao_info: '「血酸暴伤」<br/><li>当你对体力值大于你的角色造成伤害时，你可以失去1点体力并令此伤害+X（X为你已损失的体力值）。此伤害结算完成后，若其体力值仍大于你，则你可以弃置一张红色牌并对其造成1点伤害。</li>',
            CIsuanbao_append: '<span class="cure-append">在免疫反应中释放的阳离子蛋白对寄生虫有专门的杀灭作用</span>',
            CI_basophil: '嗜碱粒细胞',
            CIbaomin: '爆敏',
            CIbaomin_info: '「速敏炎上」<br/><li>每轮每名角色限一次，其他角色受到伤害后，你可以展示其体力值张手牌，然后你摸X张牌（X为展示牌与其明置牌中红色牌的数量和）。然后你将一张伤害手牌交给一名其他角色，获得牌的角色可对其使用此牌（无距离次数限制，若X大于你的体力值，则此牌不可被响应），否则你摸一张牌。</li>',
            CIjianyan: '碱炎',
            visible_CIjianyan: 'invisible',
            CIjianyan_info: '「血碱炎促」<br/><li>当你受到其他角色对你造成的伤害后，你可以弃置任意张牌并明置其等量张手牌，且其本回合不能使用或打出明置的牌。然后视为对其使用了一张伤害基数+Y的杀（Y为你弃置的黑色牌数量，至多为2）。</li>',
            CIjianyan_append: '<span class="cure-append">在先天性免疫系统的一部分里占比最稀有的粒细胞</span>',
            CI_thrombocytes: '血小板',
            CIzhixue: '止血',
            CIzhixue_info: '「愈伤始生」<br/><li>一名角色受到伤害后/已受伤角色的回合开始时，你可以交给其一张牌（若其为你则跳过此步骤），令其进行判定，若判定结果为：红色，其回复1点体力；黑色，若当前回合角色为你/不为你，则其本回合手牌上限+1/下次受到的非属性伤害-1。</li>',
            CIningxue: '凝血',
            CIningxue_info: '「痂结护创」<br/><li>其他角色的弃牌阶段结束时，若你本轮对其发动过【止血】，你可以获得本阶段进入弃牌阶段颜色不同的牌各一张。</li>',
            CIningxue_append: '<span class="cure-append">血小板在机体出血凝血过程中起重要作用</span>',
            CI_ganglioneure: '脑细胞',
            CIzhishi: '智识',
            CIzhishi_info: '「神思观澜」<br/><li>摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶X+Y张牌（X为你手牌的类别数，Y为你手牌的花色数），选择获得其中一种颜色的所有牌。若剩余牌数大于你的体力值，则你跳过下个弃牌阶段。</li>',
            CIhuisi: '慧思',
            CIhuisi_info: '「谋汇决智」<br/><li>①当你使用基本牌或普通锦囊牌指定一名其他角色为目标后，你可以与其拼点（若其无法拼点则视为你赢）：若你赢，此牌不计入次数限制，且若此牌为基本牌/锦囊牌，则此牌额外结算一次/你可以为此牌增加一个其他角色为额外目标。②当你于回合外成为其他角色使用牌的目标后，你可以与其拼点（若其无法拼点则视为你赢）：若你赢，此牌对你无效；若你没赢，你选择跳过下个摸牌阶段或出牌阶段，若两个阶段均被跳过，则此技能于本轮失效。</li>',
            CIshentong: '神通',
            CIshentong_info: '「神经调递」<br/><li>回合结束时，你可以将你本回合跳过的阶段分配给任意其他角色，令这些角色于其下个回合开始时执行之。</li>',
            CIshentong_append: '<span class="cure-append">脑神经细胞构成的中枢神经系统是人体神经系统的最主体部分</span>',
            //CI_info:'「」<br/><li></li>',
            //CI_append:'<span class="cure-append"></span>'
        },
    };
    for (var i in C_and_C.character) {
        C_and_C.character[i][4] ??= [];
        if (lib.device || lib.node) C_and_C.character[i][4].add("ext:瘟疫公司/image/character/" + i + ".jpg");
        else C_and_C.character[i][4].add("db:extension-瘟疫公司-image-character:" + i + ".jpg");
    }
    lib.config.all.characters.push("C_and_C");
    if (!lib.config.characters.includes("C_and_C")) lib.config.characters.remove("C_and_C");
    lib.translate["C_and_C_character_config"] = "细胞与医疗";
    return C_and_C;
};

export default packs;
