class Div {
    constructor(tag = "div") { this.d = document.createElement(tag) }
    under(e) {
        e.append(this.d);
        return this;
    }
    style(s) {
        this.d.style.cssText = s;
        return this;
    }
    append(e) {
        this.d.append(e);
        return this;
    }
    id(s) {
        this.d.id = s;
        return this;
    }
    cls(s) {
        this.d.className = s;
        return this;
    }
    text(s) {
        this.d.textContent = s;
        return this;
    }
    html(s) {
        this.d.innerHTML = s;
        return this;
    }
    rawattr(a, b) {
        this.d.setAttribute(a, b);
        return this;
    }
    al(e, f) {
        this.d.addEventListener(e, f);
        return this;
    }
    rl(e, f) {
        this.d.removeEventListener(e, f);
        return this;
    }
    once(e, f) {
        let that = this;
        that.al(e, function ff(ev) {
            f(ev);
            that.rl(e, ff);
        });
        return this;
    }
    rm() {
        this.d.remove();
    }
}

let d = t=> new Div(t);

function init_enter_anim() {
    function show(name, bangumi_name, bangumi_name_en, content_title, content_subtitle) {
        let url = suf=> `url(/asset/enter-anim/${name}${suf}.png) alpha 0/cover`;
        $bangumi_name.text("");
        for (let s of bangumi_name) d("span").text(s).under($bangumi_name);
        $bangumi_name_en.text(bangumi_name_en);
        $content_title.text(content_title[0]).append(d("space").d).append(content_title[1]);
        $content_subtitle.text(content_subtitle);

        $deco1.style(`-webkit-mask: ${url(1)};mask: ${url(1)};`);
        $deco2.style(`-webkit-mask: ${url(2)};mask: ${url(2)};`);
        $shinobu.style(`-webkit-mask: ${url("")};mask: ${url("")};`);

        onresize();
        window.addEventListener("resize", onresize);
        fullmask.under(document.body);
        $d.under(document.body);
    }

    function onresize() {
        let s = window.innerWidth / 1000;
        $d.style("transform:translate(-50%, -50%) scale("+ s +")");
    }

    function fadeout() {
        $d.d.style.animation = "fade-in 0.1s reverse";
        window.removeEventListener("resize", onresize);
        $d.once("animationend", ()=> {$d.rm(); fullmask.rm();});
    }

    let $d = d().id("enter-anim").al("animationend", ()=> {
        $d.d.style.animation = "none";
    }).al("pointerdown", fadeout);
    d("circ").under($d);

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    $d.append(svg);
    svg.innerHTML = '<defs><mask id="enter-anim-mask"><circle r="400" cx="400" cy="400"/></mask></defs></svg>';

    let $bangumi_name = d("h2").under($d);
    d("hrr").under($d);
    let $bangumi_name_en = d("en").under($d);

    let $deco1 = d("deco1").under($d);
    let $deco2 = d("deco2").under($d);

    let $content = d("cont").under($d);
    let $content_title = d("h3").under($content);
    let $content_subtitle = d("h4").under($content);
    let $shinobu = d("snb").under($content);

    return { show };
}

function init_route() {
    const PAGES = {
        home: page_home, 
        tv: page_tv, 
    };
    const MAIN = d("main").under(document.body);
    
    function go(to, pushstate) {
        let pagename = to.split("/").filter(s=> s)[0] || "home";
        let page = PAGES[pagename];
        if (!page) return;
        if (typeof page === "function") page = PAGES[pagename] = page();
        if (pushstate) history.pushState(0, "", to);
        MAIN.text("").append(page);
        if (page.ongo) page.ongo();
    }

    go(document.location.pathname);
    window.addEventListener("popstate", ()=> go(document.location.pathname));
    return { go };
}

function page_home() {
    const TVLS = [
        {
            id: "bake", 
            name: "化物语", 
            jp: "bakemonogatari", 
            time: "2009-07", 
            post: ""
        }, {
            id: "nise", 
            name: "偽物語", 
            jp: "nisemonogatari", 
            time: "2012-01", 
            post: ""
        }, {
            id: "nekokuro", 
            name: "猫物語(黑)", 
            jp: "nekomonogatari(kuro)", 
            time: "2012-01", 
            post: ""
        }, {
            id: "nekoshiro", 
            name: "猫物語(白)", 
            jp: "nekomonogatari(shiro)", 
            time: "2013-07", 
            post: ""
        }, {
            id: "kabu", 
            name: "傾物語", 
            jp: "kabukimonogatari", 
            time: "2013-07", 
            post: ""
        }, {
            id: "otori", 
            name: "囮物語", 
            jp: " otorimonogatari", 
            time: "2013-07", 
            post: ""
        }, {
            id: "oni", 
            name: "鬼物語", 
            jp: "onimonogatari", 
            time: "2013-07", 
            post: ""
        }, {
            id: "koi", 
            name: "恋物語", 
            jp: "koimonogatari", 
            time: "2013-07", 
            post: ""
        }, {
            id: "hana", 
            name: "花物語", 
            jp: "hanamonogatari", 
            time: "2014-08", 
            post: ""
        }, {
            id: "tsuki", 
            name: "憑物語", 
            jp: "tsukimonogatari", 
            time: "2014-12", 
            post: ""
        }, {
            id: "owari", 
            name: "終物語", 
            jp: "owarimonogatari", 
            time: "2015-10", 
            post: ""
        }, {
            id: "kizu", 
            name: "傷物語", 
            jp: "kizumonogatari", 
            time: "2016-01", 
            post: ""
        }, {
            id: "koyomi", 
            name: "暦物語", 
            jp: "koyomimonogatari", 
            time: "2016-01", 
            post: ""
        }, {
            id: "owarige", 
            name: "終物語・下", 
            jp: "owarimonogatari", 
            time: "2016-01", 
            post: ""
        }, {
            id: "zoku", 
            name: "続・終物語", 
            jp: "zoku-owarimonogatari", 
            time: "2016-01", 
            post: ""
        }, 
    ];
    const TIMELS = [
        "化物语", "傷物語", "偽物語", "猫物語(黑)", "猫物語(白)", "傾物語", "囮物語", 
        "鬼物語", "恋物語", "花物語", "憑物語", "終物語", "暦物語", "終物語・下", "続・終物語"
    ];

    function create_tv_div(o) {
        let $d = d().under($page);
        d("play").cls("btn").html("&#xe6a1;").under($d).al("click", ()=> {
            route.go("/tv/"+ o.id, true);
        });
        d("name").text(o.name).under($d);
        d("time").text(o.time).under($d);
    }

    let $page = d().id("home");
    d("h1").text("物语系列").append(d("jp").text("〈物語〉シリーズ").d).under($page);

    d("h2").text("TV(播出顺序)").under($page);
    for (let o of TVLS) create_tv_div(o);

    d("h2").text("TV(剧情顺序)").under($page);
    for (let s of TIMELS) create_tv_div(TVLS.find(({name})=> name === s));
    d("p").html("参考: 文鹏HARUI: <a target='_blank' href='https://www.bilibili.com/opus/542848166447753194'>你所不知道的物语——2021.07物语系列完全指南萌新篇&进阶篇</a>").under($page);

    d("h2").text("OST").under($page);
    d("p").text("todo...").under($page);

    d("p").text("本网站只收集网络资源,无广告无盈利项目\n本站任何行为与物语系列制作组无关\n本站收集资源均为转载,侵权请联系Q2822448396删除").under($page);
    return $page.d;
}

function page_tv() {
    let $page = d().id("tv");
    $page.d.ongo = ()=> {
        enter_anim.show("shinobu", "終物語", "MONOGATARI FINAL SEASON", ["しのぶ", "メイル"], "其ノ肆");
        console.log(location.pathname);
    };
    return $page.d;
}

const fullmask = d("fullmask");
const enter_anim = init_enter_anim();

const route = init_route();
