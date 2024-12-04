
const TVLS = [
    {
        id: "bake", 
        name: "化物語", 
        jp: "bakemonogatari", 
        time: "2009-07", 
        post: "https://img.cycimg.me/pic/cover/l/64/7c/1671_vQ2W9.jpg"
    }, {
        id: "nise", 
        name: "偽物語", 
        jp: "nisemonogatari", 
        time: "2012-01", 
        post: "https://img.cycimg.me/pic/cover/l/8e/28/23161_y2AEb.jpg"
    }, {
        id: "nekokuro", 
        name: "猫物語(黑)", 
        jp: "nekomonogatari(kuro)", 
        time: "2012-01", 
        post: "https://img.cycimg.me/pic/cover/l/f1/d6/56117_o7a7a.jpg"
    }, {
        id: "nekoshiro", 
        name: "猫物語(白)", 
        jp: "nekomonogatari(shiro)", 
        time: "2013-07", 
        post: "https://tx-free-imgs.acfun.cn/oyKU6Wes2M-aEJFB3-YNBRvm-Ejmaui-niENZf.png"
    }, {
        id: "kabu", 
        name: "傾物語", 
        jp: "kabukimonogatari", 
        time: "2013-07", 
        post: "https://tx-free-imgs.acfun.cn/UyyOrw7JJD-EneaIb-qeuima-Y7zANb-Ivauai.png"
    }, {
        id: "otori", 
        name: "囮物語", 
        jp: " otorimonogatari", 
        time: "2013-07", 
        post: "https://tx-free-imgs.acfun.cn/JUBMxI9MIJ-MRR7bm-7vua6n-RNNRJf-jUfQvm.png"
    }, {
        id: "oni", 
        name: "鬼物語", 
        jp: "onimonogatari", 
        time: "2013-07", 
        post: "https://tx-free-imgs.acfun.cn/LGmqP7I1XT-i22y6f-aeemma-yYN3Mj-qMNrEj.png"
    }, {
        id: "koi", 
        name: "恋物語", 
        jp: "koimonogatari", 
        time: "2013-07", 
        post: "https://tx-free-imgs.acfun.cn/HguSpnwR0P-nqeeIj-qyMVji-MriuQz-YnMfqe.png"
    }, {
        id: "hana", 
        name: "花物語", 
        jp: "hanamonogatari", 
        time: "2014-08", 
        post: "https://tx-free-imgs.acfun.cn/8rfaW5lCwW-InYFzi-22QZ7j-fAJbUv-3EBFJz.png"
    }, {
        id: "tsuki", 
        name: "憑物語", 
        jp: "tsukimonogatari", 
        time: "2014-12", 
        post: "https://tx-free-imgs.acfun.cn/X37mGkfW5X-zea2Ij-IVZvQn-Uzye6b-RZjqAn.png"
    }, {
        id: "owari", 
        name: "終物語", 
        jp: "owarimonogatari", 
        time: "2015-10", 
        post: "https://img.cycimg.me/pic/cover/l/b0/4d/138829_QtBqr.jpg"
    }, {
        id: "kizu", 
        name: "傷物語", 
        jp: "kizumonogatari", 
        time: "2016-01", 
        post: "https://img.cycimg.me/pic/cover/l/bf/9c/7707_4370B.jpg"
    }, {
        id: "koyomi", 
        name: "暦物語", 
        jp: "koyomimonogatari", 
        time: "2016-01", 
        post: "https://img.cycimg.me/pic/cover/l/23/f8/146104_lFg3g.jpg"
    }, {
        id: "owarige", 
        name: "終物語・下", 
        jp: "owarimonogatari", 
        time: "2016-01", 
        post: "https://img.cycimg.me/pic/cover/l/53/29/175596_3cC5H.jpg"
    }, {
        id: "zoku", 
        name: "続・終物語", 
        jp: "zoku-owarimonogatari", 
        time: "2016-01", 
        post: "https://img.cycimg.me/pic/cover/l/3a/7f/233926_V09ek.jpg"
    }, 
];

const TVMETA = {
    bake: [{
        name: "黑仪螃蟹I", 
        jp: ["ひたぎ", "クラブ", "其の壹"], 
        char: "hitaki", 
        src: "5YyW54mp6K+tLTAxLm1wNA=="
    }, {
        name: "黑仪螃蟹II", 
        char: "hitaki", 
        jp: ["ひたぎ", "クラブ", "其の贰"], 
        src: "5YyW54mp6K+tLTAyLm1wNA=="
    }, {
        name: "真宵蜗牛I", 
        char: "mayoi", 
        jp: ["まよい", "マイマイ", "其の壹"], 
        src: "5YyW54mp6K+tLTAzLm1wNA=="
    }, {
        name: "真宵蜗牛II", 
        char: "mayoi", 
        jp: ["まよい", "マイマイ", "其の贰"], 
        src: "5YyW54mp6K+tLTA0Lm1wNA=="
    }, {
        name: "真宵蜗牛III", 
        char: "mayoi", 
        jp: ["まよい", "マイマイ", "其の参"], 
        src: "5YyW54mp6K+tLTA1Lm1wNA=="
    }, {
        name: "骏河猴子I", 
        char: "suruga", 
        jp: ["するが", "モンキー", "其の壹"], 
        src: "5YyW54mp6K+tLTA2Lm1wNA=="
    }, {
        name: "骏河猴子II", 
        char: "suruga", 
        jp: ["するが", "モンキー", "其の贰"], 
        src: "5YyW54mp6K+tLTA3Lm1wNA=="
    }, {
        name: "骏河猴子III", 
        char: "suruga", 
        jp: ["するが", "モンキー", "其の参"], 
        src: "5YyW54mp6K+tLTA4Lm1wNA=="
    }, {
        name: "抚子与蛇I", 
        char: "nadeko", 
        jp: ["なでこ", "スネイク", "其の壹"], 
        src: "5YyW54mp6K+tLTA5Lm1wNA=="
    }, {
        name: "抚子与蛇II", 
        char: "nadeko", 
        jp: ["なでこ", "スネイク", "其の贰"], 
        src: "5YyW54mp6K+tLTEwLm1wNA=="
    }, {
        name: "羽川与猫I", 
        char: "tsubasa", 
        jp: ["つばさ", "キャット", "其の壹"], 
        src: "5YyW54mp6K+tLTExLm1wNA=="
    }, {
        name: "羽川与猫II", 
        char: "hitaki", 
        jp: ["つばさ", "キャット", "其の贰"], 
        src: "5YyW54mp6K+tLTEyLm1wNA=="
    }, {
        name: "羽川与猫III", 
        char: "tsubasa", 
        jp: ["つばさ", "キャット", "其の参"], 
        src: "5YyW54mp6K+tLTEzLm1wNA=="
    }, {
        name: "羽川与猫IV", 
        char: "tsubasa", 
        jp: ["つばさ", "キャット", "其の肆"], 
        src: "5YyW54mp6K+tLTE0Lm1wNA=="
    }, {
        name: "羽川与猫V", 
        char: "tsubasa", 
        jp: ["つばさ", "キャット", "其の伍"], 
        src: "5YyW54mp6K+tLTE1Lm1wNA=="
    }], 
    nise: [{
        name: "火怜蜜蜂I", 
        jp: ["かれん", "ビー", "其の壹"], 
        char: "karen", 
        src: "5Lyq54mp6K+tLTAxLm1wNA=="
    }, {
        name: "火怜蜜蜂II", 
        jp: ["かれん", "ビー", "其の贰"], 
        char: "karen", 
        src: "5Lyq54mp6K+tLTAyLm1wNA=="
    }, {
        name: "火怜蜜蜂III", 
        jp: ["かれん", "ビー", "其の参"], 
        char: "karen", 
        src: "5Lyq54mp6K+tLTAzLm1wNA=="
    }, {
        name: "火怜蜜蜂IV", 
        jp: ["かれん", "ビー", "其の肆"], 
        char: "karen", 
        src: "5Lyq54mp6K+tLTA0Lm1wNA=="
    }, {
        name: "火怜蜜蜂V", 
        jp: ["かれん", "ビー", "其の伍"], 
        char: "karen", 
        src: "5Lyq54mp6K+tLTA1Lm1wNA=="
    }, {
        name: "火怜蜜蜂VI", 
        jp: ["かれん", "ビー", "其の陸"], 
        char: "karen", 
        src: "5Lyq54mp6K+tLTA2Lm1wNA=="
    }, {
        name: "火怜蜜蜂VII", 
        jp: ["かれん", "ビー", "其の漆"], 
        char: "karen", 
        src: "5Lyq54mp6K+tLTA3Lm1wNA=="
    }, {
        name: "月火凤凰I", 
        jp: ["つきひ", "フェニックス", "其の壹"], 
        char: "tsukihi", 
        src: "5Lyq54mp6K+tLTA4Lm1wNA=="
    }, {
        name: "月火凤凰II", 
        jp: ["つきひ", "フェニックス", "其の贰"], 
        char: "tsukihi", 
        src: "5Lyq54mp6K+tLTA5Lm1wNA=="
    }, {
        name: "月火凤凰III", 
        jp: ["つきひ", "フェニックス", "其の参"], 
        char: "tsukihi", 
        src: "5Lyq54mp6K+tLTEwLm1wNA=="
    }, {
        name: "月火凤凰IV", 
        jp: ["つきひ", "フェニックス", "其の肆"], 
        char: "tsukihi", 
        src: "5Lyq54mp6K+tLTExLm1wNA=="
    }, ]
};

const CHAR_COLOR = {
    hitaki: "#8F5985", 
    shinobu: "#F4954E", 
    mayoi: "rgb(179 197 103)", 
    suruga: "#D77C4C", 
    nadeko: "#BF383A", 
    tsubasa: "#F8D0E2", 
    karen: "#333", 
    tsukihi: "#9DC1A9"
};
const CHAR_COLOR_BG = {
    shinobu: "#FFEC7A", 
    mayoi: "rgb(243 207 199)", 
    nadeko: "#fff", 
    karen: "#F8D166", 
    tsukihi: "#E2D48E"
};
