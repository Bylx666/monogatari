
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
        src: "https://7ry7ipj57p.senhewenhua.com:11451/cache/5YyW54mp6K+tLTAxLm1wNA==.mp4?verify=1733228248-%2BbQSBcu3cGPPmV604iG84Nip7yqI%2FsF96r%2FFHWLQ280%3D"
    }, {
        name: "黑仪螃蟹II", 
        char: "hitaki", 
        jp: ["ひたぎ", "クラブ", "其の贰"], 
        src: "https://zzhxwp3j4a.senhewenhua.com:11451/cache/5YyW54mp6K+tLTAyLm1wNA==.mp4?verify=1733228551-H5E6uSzbVuEEWtVqy3O551x%2FA5yTa5SQEzNv0YBtYB8%3D"
    }, {
        name: "真宵蜗牛I", 
        char: "mayoi", 
        jp: ["まよい", "マイマイ", "其の壹"], 
        src: "https://sgfh0yzbfi.senhewenhua.com:11451/cache/5YyW54mp6K+tLTAzLm1wNA==.mp4?verify=1733229917-BE6yqVPqEJVcS0wsSt8waYqU1uAj2C7ETyTrgJSMsWc%3D"
    }, {
        name: "真宵蜗牛II", 
        char: "mayoi", 
        jp: ["まよい", "マイマイ", "其の贰"], 
        src: "https://h6edvys2eo.senhewenhua.com:11451/cache/5YyW54mp6K+tLTA0Lm1wNA==.mp4?verify=1733230151-7JUgm0mUio0BzVskkF3eLcwFsh9yOv1WWcSGUohZ0VM%3D"
    }, {
        name: "真宵蜗牛III", 
        char: "mayoi", 
        jp: ["まよい", "マイマイ", "其の参"], 
        src: "https://mn0r4qedgu.senhewenhua.com:11451/cache/5YyW54mp6K+tLTA1Lm1wNA==.mp4?verify=1733230238-i%2BHS2yJNvth1QRA%2BqsnZvinF0xTU2Xly%2BDJrHwLGEt4%3D"
    }, {
        name: "骏河猴子I", 
        char: "suruga", 
        jp: ["するが", "モンキー", "其の壹"], 
        src: "https://18uy0vnk1a.senhewenhua.com:11451/cache/5YyW54mp6K+tLTA2Lm1wNA==.mp4?verify=1733231733-wj5e3Cdk9ABedE8s0thswuqa5gPF6NY6GFJk5X5Xa6g%3D"
    }, {
        name: "骏河猴子II", 
        char: "suruga", 
        jp: ["するが", "モンキー", "其の贰"], 
        src: "https://k67yjxcopp.senhewenhua.com:11451/cache/5YyW54mp6K+tLTA3Lm1wNA==.mp4?verify=1733231962-L2byK16e%2BGANWDDnUaph0kTx4o3Nltwtb7ATWwE%2B%2FK0%3D"
    }, {
        name: "骏河猴子III", 
        char: "suruga", 
        jp: ["するが", "モンキー", "其の参"], 
        src: "https://iu3j32nmdy.senhewenhua.com:11451/cache/5YyW54mp6K+tLTA4Lm1wNA==.mp4?verify=1733232034-A20VUwVsBsHHtLNb1WpdcLsKpojiULRO98KZiUY9U1k%3D"
    }, {
        name: "抚子与蛇I", 
        char: "nadeko", 
        jp: ["なでこ", "スネイク", "其の壹"], 
        src: "https://hbqrhg0n2b.senhewenhua.com:11451/cache/5YyW54mp6K+tLTA5Lm1wNA==.mp4?verify=1733232120-AVSpMHe%2BgJXW3UxzidpS3gSHxTGDwF7%2BkvnwrgfSw1U%3D"
    }, {
        name: "抚子与蛇II", 
        char: "nadeko", 
        jp: ["なでこ", "スネイク", "其の贰"], 
        src: "https://gwz6jhamt9.senhewenhua.com:11451/cache/5YyW54mp6K+tLTEwLm1wNA==.mp4?verify=1733232311-3wMNKq9FHQ9xTTbxb%2Bb%2BnrMHKZ%2BVWSnsFJ6e%2F87%2Bf5o%3D"
    }, {
        name: "羽川与猫I", 
        jp: ["つばさ", "キャット", "其の壹"], 
        src: "https://4w35j9d1ea.senhewenhua.com:11451/cache/5YyW54mp6K+tLTExLm1wNA==.mp4?verify=1733232435-MG7PSQTgOGB0xjvt4vj226SYa2fpO7Fzo5Z9hwA5B4Q%3D"
    }, {
        name: "羽川与猫II", 
        jp: ["つばさ", "キャット", "其の贰"], 
        src: "https://77yhhtx84r.senhewenhua.com:11451/cache/5YyW54mp6K+tLTEyLm1wNA==.mp4?verify=1733232585-3lFVV5YrZnZjVH6CeymBlO4DIcZXsJKTZD%2BowFuHw%2BM%3D"
    }, {
        name: "羽川与猫III", 
        jp: ["つばさ", "キャット", "其の参"], 
        src: "https://ukhr9qu9gz.senhewenhua.com:11451/cache/5YyW54mp6K+tLTEzLm1wNA==.mp4?verify=1733232699-a8HbTTXsb3VzAwR0LI03DG4gsRENO69QtplwsXqXAtY%3D"
    }, {
        name: "羽川与猫IV", 
        jp: ["つばさ", "キャット", "其の肆"], 
        src: "https://7ynbl4aia3.senhewenhua.com:11451/cache/5YyW54mp6K+tLTE0Lm1wNA==.mp4?verify=1733232989-7QPTnU8EiJ2GjEM%2BxyA4RPcdiiWG2ys%2FwxoVoEsNOUA%3D"
    }, {
        name: "羽川与猫V", 
        jp: ["つばさ", "キャット", "其の伍"], 
        src: "https://bin1tr9fmh.senhewenhua.com:11451/cache/5YyW54mp6K+tLTE1Lm1wNA==.mp4?verify=1733233062-OMXS1v3xD5f5lo%2FNiv5TO5k4WInxOsBqab6t9QF8iSs%3D"
    }]
};

const CHAR_COLOR = {
    hitaki: "rgb(150 67 77)", 
    shinobu: "#F4954E", 
    mayoi: "rgb(179 197 103)", 
    suruga: "#D77C4C", 
    nadeko: "#BF383A"
};
const CHAR_COLOR_BG = {
    shinobu: "#FFEC7A", 
    mayoi: "rgb(243 207 199)", 
    nadeko: "#fff"
};
