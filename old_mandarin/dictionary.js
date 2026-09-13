// Real vocabulary dictionary.
// Maps toneless pinyin -> array of { hanzi, english }
window.DICTIONARY = {
  // ---- Pronouns ----
  "wo":     [ { hanzi: "我", english: "I / me" } ],
  "ni":     [ { hanzi: "你", english: "you" } ],
  "ta":     [
    { hanzi: "他", english: "he / him" },
    { hanzi: "她", english: "she / her" },
    { hanzi: "它", english: "it" }
  ],
  "tamen":  [
    { hanzi: "他们", english: "they / them (masc. or mixed)" },
    { hanzi: "她们", english: "they / them (female)" },
    { hanzi: "它们", english: "they / them (non-human)" }
  ],
  "women":  [ { hanzi: "我们", english: "we / us" } ],
  "renlei": [ { hanzi: "人类", english: "humans / humanity" } ],
  "ren":    [ { hanzi: "人", english: "person / people" } ],
  "shei":   [ { hanzi: "谁", english: "who" } ],
  "ziji":   [ { hanzi: "自己", english: "oneself / yourself" } ],
  "qita":   [ { hanzi: "其他", english: "other / others" } ],

  // ---- Nouns ----
  "yali":       [ { hanzi: "压力", english: "pressure" } ],
  "shijie":     [ { hanzi: "世界", english: "world" } ],
  "taiyang":    [ { hanzi: "太阳", english: "the Sun" } ],
  "yangguang":  [ { hanzi: "阳光", english: "sunlight / sun-rays" } ],
  "shengming":  [ { hanzi: "生命", english: "life" } ],
  "dongzhiwu":  [ { hanzi: "动植物", english: "plant and animal" } ],
  "dongtai":    [ { hanzi: "动态", english: "animation / movement" } ],
  "xingtai":    [ { hanzi: "形态", english: "form / morphology" } ],
  "xingshi":    [ { hanzi: "形式", english: "form / format" } ],
  "guocheng":   [ { hanzi: "过程", english: "process" } ],
  "yizhi":      [
    { hanzi: "意志", english: "will / intention" },
    { hanzi: "一直", english: "always / continuously" }
  ],
  "xingge":     [ { hanzi: "性格", english: "character / personality" } ],
  "zhongxin":   [ { hanzi: "中心", english: "center" } ],
  "renxing":    [ { hanzi: "人性", english: "humanity / human nature" } ],
  "jinqian":    [ { hanzi: "金钱", english: "money" } ],
  "cailiao":    [ { hanzi: "材料", english: "materials" } ],
  "jihua":      [ { hanzi: "计划", english: "planning / plan" } ],
  "yuanze":     [ { hanzi: "原则", english: "principle" } ],
  "zibenzhuyi": [ { hanzi: "资本主义", english: "capitalism" } ],
  "zhenli":     [ { hanzi: "真理", english: "truth" } ],
  "zhiliang":   [ { hanzi: "质量", english: "quality / mass" } ],
  "shenxue":    [ { hanzi: "神学", english: "theology" } ],
  "fangshi":    [ { hanzi: "方式", english: "way / manner" } ],
  "dongxi":     [ { hanzi: "东西", english: "thing" } ],
  "huimie":     [ { hanzi: "毁灭", english: "destruction" } ],

  // ---- Verbs ----
  "shi":       [ { hanzi: "是", english: "is / am / are" } ],
  "bianhua":   [ { hanzi: "变化", english: "to change" } ],
  "shuo":      [ { hanzi: "说", english: "to say / speak" } ],
  "zuo":       [ { hanzi: "做", english: "to do" } ],
  "jiao":      [ { hanzi: "叫", english: "to tell / order" } ],
  "hui":       [ { hanzi: "会", english: "will / shall (future)" } ],
  "zuoyong":   [ { hanzi: "作用", english: "to act upon" } ],
  "xianxian":  [ { hanzi: "显现", english: "to manifest" } ],
  "baohan":    [ { hanzi: "包含", english: "to contain" } ],
  "shixing":   [ { hanzi: "施行", english: "to enact / carry out" } ],
  "huiying":   [ { hanzi: "回应", english: "to respond" } ],
  "gaibian":   [ { hanzi: "改变", english: "to change / alter" } ],
  "gongcun":   [ { hanzi: "共存", english: "to co-exist" } ],
  "zaoshou":   [ { hanzi: "遭受", english: "to suffer / receive" } ],
  "duikang":   [ { hanzi: "对抗", english: "to resist / oppose" } ],
  "xuyao":     [ { hanzi: "需要", english: "to need" } ],
  "miandui":   [ { hanzi: "面对", english: "to face" } ],
  "baohu":     [ { hanzi: "保护", english: "to protect" } ],
  "renwei":    [ { hanzi: "认为", english: "to believe / think" } ],
  "fanji":     [ { hanzi: "反击", english: "to fight back" } ],
  "zhuiqiu":   [ { hanzi: "追求", english: "to chase / pursue" } ],
  "lijie":     [ { hanzi: "理解", english: "to understand" } ],
  "jieshi":    [ { hanzi: "揭示", english: "to uncover / reveal" } ],
  "chengzhang":[ { hanzi: "成长", english: "to grow" } ],
  "liaojie":   [ { hanzi: "了解", english: "to understand / know" } ],
  "qi":        [ { hanzi: "骑", english: "to straddle / ride" } ],
  "xiang":     [
    { hanzi: "想", english: "to want / think" },
    { hanzi: "向", english: "toward" }
  ],
  "meng":      [ { hanzi: "梦", english: "to dream" } ],
  "gan":       [ { hanzi: "干", english: "to do (colloquial)" } ],

  // ---- Adjectives / Adverbs ----
  "buduan":  [ { hanzi: "不断", english: "constantly" } ],
  "zhi":     [
    { hanzi: "只", english: "only" },
    { hanzi: "之", english: "of (literary)" }
  ],
  "ye":      [ { hanzi: "也", english: "also" } ],
  "hen":     [ { hanzi: "很", english: "very" } ],
  "chun":    [ { hanzi: "蠢", english: "dumb / stupid" } ],
  "zhen":    [ { hanzi: "真", english: "really / true" } ],
  "faner":   [ { hanzi: "反而", english: "instead / on the contrary" } ],
  "zhujian": [ { hanzi: "逐渐", english: "gradually" } ],
  "bixu":    [ { hanzi: "必须", english: "must" } ],
  "weiyi":   [ { hanzi: "唯一", english: "only / sole" } ],
  "suoyou":  [ { hanzi: "所有", english: "all" } ],
  "yi":      [
    { hanzi: "一", english: "one" },
    { hanzi: "以", english: "using / by means of" }
  ],
  "ge":      [ { hanzi: "个", english: "(measure word)" } ],

  // ---- Grammar / Function Words ----
  "de":       [ { hanzi: "的", english: "of / possessive particle" } ],
  "zai":      [ { hanzi: "在", english: "at / in / -ing" } ],
  "yinwei":   [ { hanzi: "因为", english: "because" } ],
  "fouze":    [ { hanzi: "否则", english: "otherwise" } ],
  "dan":      [ { hanzi: "但", english: "but" } ],
  "youyu":    [ { hanzi: "由于", english: "due to" } ],
  "er":       [ { hanzi: "而", english: "and / thus" } ],
  "zuowei":   [ { hanzi: "作为", english: "as" } ],
  "wei":      [ { hanzi: "为", english: "for" } ],
  "tongguo":  [ { hanzi: "通过", english: "through / by means of" } ],
  "jingyou":  [ { hanzi: "经由", english: "via" } ],
  "bei":      [ { hanzi: "被", english: "(passive marker)" } ],
  "bingqie":  [ { hanzi: "并且", english: "moreover / and" } ],
  "huozhe":   [ { hanzi: "或者", english: "or" } ],
  "ruguo":    [ { hanzi: "如果", english: "if" } ],
  "suoyi":    [ { hanzi: "所以", english: "therefore" } ],
  "weile":    [ { hanzi: "为了", english: "in order to" } ],
  "guanyu":   [ { hanzi: "关于", english: "regarding" } ],
  "suizhe":   [ { hanzi: "随着", english: "as / along with" } ],
  "dang":     [ { hanzi: "当", english: "when" } ],
  "shihou":   [ { hanzi: "时候", english: "time / moment" } ],
  "zhong":    [
    { hanzi: "中", english: "middle / within" },
    { hanzi: "种", english: "kind / type" }
  ],
  "zhizhong": [ { hanzi: "之中", english: "within" } ],
  "zhishang": [ { hanzi: "之上", english: "atop / above" } ],
  "haoxiang": [ { hanzi: "好像", english: "as if / seem" } ],
  "na":       [ { hanzi: "那", english: "that" } ],
  "zhe":      [ { hanzi: "这", english: "this" } ],
  "jiu":      [ { hanzi: "就", english: "then / just" } ],
  "ma":       [ { hanzi: "吗", english: "(question particle)" } ],
  "shenme":   [ { hanzi: "什么", english: "what" } ],
  "weishenme":[ { hanzi: "为什么", english: "why" } ],
  "jier":     [ { hanzi: "继而", english: "and then / in turn" } ],
  "haiyou":   [ { hanzi: "还有", english: "and also" } ],
  "dao":      [ { hanzi: "到", english: "to arrive / unto" } ],

  // ---- Time / Quantity ----
  "xie":    [ { hanzi: "些", english: "some" } ],
  "you":    [ { hanzi: "有", english: "to have / there is" } ],
  "laizi":  [ { hanzi: "来自", english: "to come from" } ]
};