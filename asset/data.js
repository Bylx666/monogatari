
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
        id: "kabuki", 
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
        id: "owarizoku", 
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
        char: "hitagi", 
        src: "5YyW54mp6K+tLTAxLm1wNA=="
    }, {
        name: "黑仪螃蟹II", 
        char: "hitagi", 
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
        char: "hitagi", 
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
    }], 
    nekokuro: [{
        name: "翼的家庭I", 
        jp: ["つばさ", "ファミリー", "其の壹"], 
        char: "tsubasa", 
        src: "54yr54mp6K+t77yI6buR77yJLTAxLm1wNA==", 
    }, {
        name: "翼的家庭II", 
        jp: ["つばさ", "ファミリー", "其の贰"], 
        char: "tsubasa", 
        src: "54yr54mp6K+t77yI6buR77yJLTAyLm1wNA==", 
    }, {
        name: "翼的家庭III", 
        jp: ["つばさ", "ファミリー", "其の参"], 
        char: "tsubasa", 
        src: "54yr54mp6K+t77yI6buR77yJLTAzLm1wNA==", 
    }, {
        name: "翼的家庭IV", 
        jp: ["つばさ", "ファミリー", "其の肆"], 
        char: "tsubasa", 
        src: "54yr54mp6K+t77yI6buR77yJLTA0Lm1wNA==", 
    }],
    nekoshiro: [{
        name: "羽川与虎I", 
        jp: ["つばさ", "タイガー", "其の壹"], 
        char: "tsubasa", 
        src: "54yr54mp6K+tICjnmb0pLTAxLm1wNA==", 
    }, {
        name: "羽川与虎II", 
        jp: ["つばさ", "タイガー", "其の贰"], 
        char: "tsubasa", 
        src: "54yr54mp6K+tICjnmb0pLTAyLm1wNA==", 
    }, {
        name: "羽川与虎III", 
        jp: ["つばさ", "タイガー", "其の参"], 
        char: "tsubasa", 
        src: "54yr54mp6K+tICjnmb0pLTAzLm1wNA==", 
    }, {
        name: "羽川与虎IV", 
        jp: ["つばさ", "タイガー", "其の肆"], 
        char: "tsubasa", 
        src: "54yr54mp6K+tICjnmb0pLTA0Lm1wNA==", 
    }, {
        name: "羽川与虎V", 
        jp: ["つばさ", "タイガー", "其の伍"], 
        char: "tsubasa", 
        src: "54yr54mp6K+tICjnmb0pLTA1Lm1wNA==", 
    }, ], 
    kabuki: [{
        name: "真宵僵尸I", 
        jp: ["まよい", "キョンシー", "其の壹"], 
        char: "mayoi", 
        src: "5YC+54mp6K+tLTAxLm1wNA==", 
    }, {
        name: "真宵僵尸II", 
        jp: ["まよい", "キョンシー", "其の贰"], 
        char: "mayoi", 
        src: "5YC+54mp6K+tLTAyLm1wNA==", 
    }, {
        name: "真宵僵尸III", 
        jp: ["まよい", "キョンシー", "其の参"], 
        char: "mayoi", 
        src: "5YC+54mp6K+tLTAzLm1wNA==", 
    }, {
        name: "真宵僵尸IV", 
        jp: ["まよい", "キョンシー", "其の肆"], 
        char: "mayoi", 
        src: "5YC+54mp6K+tLTA0Lm1wNA==", 
    }], 
    otori: [{
        name: "抚子美杜莎I", 
        jp: ["なでこ", "メドゥーサ", "其の壹"], 
        char: "nadeko", 
        src: "5Zuu54mp6K+tLTAxLm1wNA==", 
    }, {
        name: "抚子美杜莎II", 
        jp: ["なでこ", "メドゥーサ", "其の贰"], 
        char: "nadeko", 
        src: "5Zuu54mp6K+tLTAyLm1wNA==", 
    }, {
        name: "抚子美杜莎III", 
        jp: ["なでこ", "メドゥーサ", "其の参"], 
        char: "nadeko", 
        src: "5Zuu54mp6K+tLTAzLm1wNA==", 
    }, {
        name: "抚子美杜莎IV", 
        jp: ["なでこ", "メドゥーサ", "其の肆"], 
        char: "nadeko", 
        src: "5Zuu54mp6K+tLTA0Lm1wNA==", 
    }], 
    oni: [{
        name: "忍与时间I", 
        jp: ["しのぶ", "タイム", "其の壹"], 
        char: "shinobu", 
        src: "6ay854mp6K+tLTAxLm1wNA==", 
    }, {
        name: "忍与时间II", 
        jp: ["しのぶ", "タイム", "其の贰"], 
        char: "shinobu", 
        src: "6ay854mp6K+tLTAyLm1wNA==", 
    }, {
        name: "忍与时间III", 
        jp: ["しのぶ", "タイム", "其の参"], 
        char: "shinobu", 
        src: "6ay854mp6K+tLTAzLm1wNA==", 
    }, {
        name: "忍与时间IV", 
        jp: ["しのぶ", "タイム", "其の肆"], 
        char: "shinobu", 
        src: "6ay854mp6K+tLTA0Lm1wNA==", 
    }], 
    koi: [{
        name: "黑仪结局I", 
        jp: ["ひたぎ", "エンド", "其の壹"], 
        char: "hitagi", 
        src: "5oGL54mp6K+tLTAxLm1wNA==", 
    }, {
        name: "黑仪结局II", 
        jp: ["ひたぎ", "エンド", "其の贰"], 
        char: "hitagi", 
        src: "5oGL54mp6K+tLTAyLm1wNA==", 
    }, {
        name: "黑仪结局III", 
        jp: ["ひたぎ", "エンド", "其の参"], 
        char: "hitagi", 
        src: "5oGL54mp6K+tLTAzLm1wNA==", 
    }, {
        name: "黑仪结局IV", 
        jp: ["ひたぎ", "エンド", "其の肆"], 
        char: "hitagi", 
        src: "5oGL54mp6K+tLTA0Lm1wNA==", 
    }, {
        name: "黑仪结局V", 
        jp: ["ひたぎ", "エンド", "其の伍"], 
        char: "hitagi", 
        src: "5oGL54mp6K+tLTA1Lm1wNA==", 
    }, {
        name: "黑仪结局VI", 
        jp: ["ひたぎ", "エンド", "其の陸"], 
        char: "hitagi", 
        src: "5oGL54mp6K+tLTA2Lm1wNA==", 
    }], 
    hana: [{
        name: "骏河恶魔I", 
        jp: ["するが", "デビル", "其の壹"], 
        char: "suruga", 
        src: "6Iqx54mp6K+tLTAxLm1wNA==", 
    }, {
        name: "骏河恶魔II", 
        jp: ["するが", "デビル", "其の贰"], 
        char: "suruga", 
        src: "6Iqx54mp6K+tLTAyLm1wNA==", 
    }, {
        name: "骏河恶魔III", 
        jp: ["するが", "デビル", "其の参"], 
        char: "suruga", 
        src: "6Iqx54mp6K+tLTAzLm1wNA==", 
    }, {
        name: "骏河恶魔IV", 
        jp: ["するが", "デビル", "其の肆"], 
        char: "suruga", 
        src: "6Iqx54mp6K+tLTA0Lm1wNA==", 
    }, {
        name: "骏河恶魔V", 
        jp: ["するが", "デビル", "其の伍"], 
        char: "suruga", 
        src: "6Iqx54mp6K+tLTA1Lm1wNA==", 
    }], 
    tsuki: [{
        name: "余接人偶I", 
        jp: ["よつぎ", "ドール", "其の壹"], 
        char: "yotsugi", 
        src: "5Yet54mp6K+tLTAxLm1wNA==", 
    }, {
        name: "余接人偶II", 
        jp: ["よつぎ", "ドール", "其の贰"], 
        char: "yotsugi", 
        src: "5Yet54mp6K+tLTAyLm1wNA==", 
    }, {
        name: "余接人偶III", 
        jp: ["よつぎ", "ドール", "其の参"], 
        char: "yotsugi", 
        src: "5Yet54mp6K+tLTAzLm1wNA==", 
    }, {
        name: "余接人偶IV", 
        jp: ["よつぎ", "ドール", "其の肆"], 
        char: "yotsugi", 
        src: "5Yet54mp6K+tLTA0Lm1wNA==", 
    }], 
    owari: [{
        name: "扇与方程I", 
        jp: ["おうぎ", "フォーミュラ", "其の壹"], 
        char: "ougi", 
        src: "57uI54mp6K+tLTAxLm1wNA==", 
    }, {
        name: "扇与方程II", 
        jp: ["おうぎ", "フォーミュラ", "其の贰"], 
        char: "ougi", 
        src: "57uI54mp6K+tLTAyLm1wNA==", 
    }, {
        name: "育与谜题I", 
        jp: ["そだち", "リドル", "其の壹"], 
        char: "sodachi", 
        src: "57uI54mp6K+tLTAzLm1wNA==", 
    }, {
        name: "育与谜题II", 
        jp: ["そだち", "リドル", "其の贰"], 
        char: "sodachi", 
        src: "57uI54mp6K+tLTA0Lm1wNA==", 
    }, {
        name: "育的迷失I", 
        jp: ["そだち", "ロスト", "其の壹"], 
        char: "sodachi", 
        src: "57uI54mp6K+tLTA1Lm1wNA==", 
    }, {
        name: "育的迷失II", 
        jp: ["そだち", "ロスト", "其の贰"], 
        char: "sodachi", 
        src: "57uI54mp6K+tLTA2Lm1wNA==", 
    }, {
        name: "育的迷失III", 
        jp: ["そだち", "ロスト", "其の参"], 
        char: "sodachi", 
        src: "57uI54mp6K+tLTA3Lm1wNA==", 
    }, {
        name: "忍的来信I", 
        jp: ["しのぶ", "メイル", "其の壹"], 
        char: "shinobu", 
        src: "57uI54mp6K+tLTA4Lm1wNA==", 
    }, {
        name: "忍的来信II", 
        jp: ["しのぶ", "メイル", "其の贰"], 
        char: "shinobu", 
        src: "57uI54mp6K+tLTA5Lm1wNA==", 
    }, {
        name: "忍的来信III", 
        jp: ["しのぶ", "メイル", "其の参"], 
        char: "shinobu", 
        src: "57uI54mp6K+tLTEwLm1wNA==", 
    }, {
        name: "忍的来信IV", 
        jp: ["しのぶ", "メイル", "其の肆"], 
        char: "shinobu", 
        src: "57uI54mp6K+tLTExLm1wNA==", 
    }, {
        name: "忍的来信V", 
        jp: ["しのぶ", "メイル", "其の伍"], 
        char: "shinobu", 
        src: "57uI54mp6K+tLTEyLm1wNA==", 
    }, {
        name: "忍的来信VI", 
        jp: ["しのぶ", "メイル", "其の陸"], 
        char: "shinobu", 
        src: "57uI54mp6K+tLTEzLm1wNA==", 
    }], 
    owarige: [{
        name: "真宵地狱I", 
        jp: ["まよい", "ヘル", "其の壹"], 
        char: "mayoi", 
        src: "57uI54mp6K+t77yI5LiL77yJLTAxLm1wNA=="
    }, {
        name: "真宵地狱II", 
        jp: ["まよい", "ヘル", "其の贰"], 
        char: "mayoi", 
        src: "57uI54mp6K+t77yI5LiL77yJLTAyLm1wNA=="
    }, {
        name: "黑仪约会I", 
        jp: ["ひたぎ", "ランデブー", "其の壹"], 
        char: "hitagi", 
        src: "57uI54mp6K+t77yI5LiL77yJLTAzLm1wNA=="
    }, {
        name: "黑仪约会II", 
        jp: ["ひたぎ", "ランデブー", "其の贰"], 
        char: "hitagi", 
        src: "57uI54mp6K+t77yI5LiL77yJLTA0Lm1wNA=="
    }, {
        name: "扇与黑暗I", 
        jp: ["おうぎ", "ダーク", "其の壹"], 
        char: "ougi", 
        src: "57uI54mp6K+t77yI5LiL77yJLTA1Lm1wNA=="
    }, {
        name: "扇与黑暗II", 
        jp: ["おうぎ", "ダーク", "其の贰"], 
        char: "ougi", 
        src: "57uI54mp6K+t77yI5LiL77yJLTA2Lm1wNA=="
    }, {
        name: "扇与黑暗III", 
        jp: ["おうぎ", "ダーク", "其の参"], 
        char: "ougi", 
        src: "57uI54mp6K+t77yI5LiL77yJLTA3Lm1wNA=="
    }], 
    owarizoku: [{
        name: "续・终物语", 
        jp: ["続", "終", "monogatari"], 
        char: "koyomi", 
        src: "57utwrfnu4jnianor60ubXA0"
    }], 
    kizu: [{
        name: "铁血篇", 
        jp: ["傷物語", "鉄血篇", "monogatari"], 
        char: "koyomi", 
        src: "5Lyk54mp6K+tSSDpk4HooYDnr4cubXA0"
    }, {
        name: "热血篇", 
        jp: ["傷物語", "熱血篇", "monogatari"], 
        char: "koyomi", 
        src: "5Lyk54mp6K+tSUkg54Ot6KGA56+HLm1wNA=="
    }, {
        name: "冷血篇", 
        jp: ["傷物語", "冷血篇", "monogatari"], 
        char: "koyomi", 
        src: "5Lyk54mp6K+tSUlJIOWGt+ihgOevhy5tcDQ="
    }], 
    koyomi: [{
        name: "历与石", 
        jp: ["こよみ", "ストーン", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTAxLm1wNA=="
    }, {
        name: "历与花", 
        jp: ["こよみ", "フラワー", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTAyLm1wNA=="
    }, {
        name: "历与沙", 
        jp: ["こよみ", "サンド", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTAzLm1wNA=="
    }, {
        name: "历与水", 
        jp: ["こよみ", "ウォータ", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTA0Lm1wNA=="
    }, {
        name: "历与风", 
        jp: ["こよみ", "ウィンド", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTA1Lm1wNA=="
    }, {
        name: "历与树", 
        jp: ["こよみ", "ツリー", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTA2Lm1wNA=="
    }, {
        name: "历与茶", 
        jp: ["こよみ", "ティー", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTA3Lm1wNA=="
    }, {
        name: "历与山", 
        jp: ["こよみ", "マウンテン", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTA4Lm1wNA=="
    }, {
        name: "历与环", 
        jp: ["こよみ", "トーラス", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTA5Lm1wNA=="
    }, {
        name: "历与种", 
        jp: ["こよみ", "シード", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTEwLm1wNA=="
    }, {
        name: "历与无", 
        jp: ["こよみ", "ナッシング", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTExLm1wNA=="
    }, {
        name: "历与死", 
        jp: ["こよみ", "デッド", "monogatari"], 
        char: "koyomi", 
        src: "5Y6G54mp6K+tLTEyLm1wNA=="
    }]
};

const CHAR_COLOR = {
    hitagi: "#8F5985", 
    shinobu: "#F4954E", 
    mayoi: "rgb(179 197 103)", 
    suruga: "#D77C4C", 
    nadeko: "#BF383A", 
    tsubasa: "#F8D0E2", 
    karen: "#333", 
    tsukihi: "#9DC1A9", 
    yotsugi: "#7AD9D4", 
    ougi: "#999", 
    sodachi: "#B1DBA6", 
    koyomi: "#888"
};
const CHAR_COLOR_BG = {
    shinobu: "#FFEC7A", 
    mayoi: "rgb(243 207 199)", 
    nadeko: "#fff", 
    karen: "#F8D166", 
    tsukihi: "#E2D48E", 
    yotsugi: "#FBAE80", 
    sodachi: "#fff", 
    koyomi: "#fff"
};
