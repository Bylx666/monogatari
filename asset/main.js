
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
    attr(a, b) {
        this.d[a] = b;
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
    function show(name, bangumi_name, bangumi_name_en, content_title) {
        let url = suf=> `url(/asset/enter-anim/${name}${suf}.png) alpha 0/cover`;
        $bangumi_name.text("");
        for (let s of bangumi_name) d("span").text(s).under($bangumi_name);
        $bangumi_name_en.text(bangumi_name_en);
        $content_title.text("");
        for (let i = 0; i < 2; ++i) d("span").text(content_title[i]).under($content_title);
        $content_subtitle.text(content_title[2]);

        $deco1.style(`-webkit-mask: ${url(1)};mask: ${url(1)};`);
        $deco2.style(`-webkit-mask: ${url(2)};mask: ${url(2)};`);
        $shinobu.style(`-webkit-mask: ${url("")};mask: ${url("")};`);

        onresize();
        window.addEventListener("resize", onresize);
        fullmask.d.style.animation = $d.d.style.animation = "fade-in 0.1s";
        fullmask.under(document.body);
        $d.under(document.body);
        $d.d.style.setProperty("--clr", CHAR_COLOR[name]);
        $d.d.style.setProperty("--bg", CHAR_COLOR_BG[name] || "#111");
    }

    function onresize() {
        let s = window.innerWidth / 1000;
        $d.style("transform:translate(-50%, -50%) scale("+ s +")");
    }

    function fadeout() {
        fullmask.d.style.animation = $d.d.style.animation = "fade-in 0.1s reverse";
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
        if (current_page && current_page.onleave) current_page.onleave();
        current_page = page;
        if (page.ongo) page.ongo();
    }

    let current_page = null;
    
    go(document.location.pathname);
    window.addEventListener("popstate", ()=> go(document.location.pathname));
    return { go };
}

function page_home() {
    const TIMELS = [
        "化物語", "傷物語", "偽物語", "猫物語(黑)", "猫物語(白)", "傾物語", "囮物語", 
        "鬼物語", "恋物語", "花物語", "憑物語", "終物語", "暦物語", "終物語・下", "続・終物語"
    ];

    function create_tv_div(o) {
        let $d = d().under($page);
        d("ico").cls("btn").html("&#xe6a1;").under($d).al("click", ()=> {
            route.go("/tv/"+ o.id, true);
        });
        d("name").text(o.name).under($d);

        let cover = new Image();
        d("ico").html("&#xe861;").under($d).append(d("ext").append(cover).d)
            // 真图像懒加载
            .once("pointerenter", ()=> cover.src = o.post);
        d("ico").html("&#xe851;").under($d).append(d("ext").text(o.jp).d);
        d("time").text(o.time).under($d);
    }

    let $page = d().id("home");
    d("h1").text("物语系列").append(d("jp").text("〈物語〉シリーズ").d).under($page);

    d("h2").text("TV(播出顺序)").under($page);
    for (let o of TVLS) create_tv_div(o);

    d("h2").text("TV(剧情顺序)").under($page);
    for (let s of TIMELS) create_tv_div(TVLS.find(({name})=> name === s));
    d("p").html("参考: 文鹏HARUI\n<a target='_blank' href='https://www.bilibili.com/opus/542848166447753194'>你所不知道的物语——2021.07物语系列完全指南萌新篇&进阶篇</a>").under($page);

    d("p").text("本网站只收集网络资源,无广告无盈利项目\n本站任何行为与物语系列制作组无关\n本站收集资源均为转载,侵权请联系Q2822448396删除").under($page);

    d("bg").under($page);
    return $page.d;
}

function page_tv() {
    const SRCLINK = '<p>片源:<a target="_blank" href="https://www.cyc-anime.net/">次元城动画</a></p>';
    
    function render_episodes() {
        let meta = TVMETA[season], o;

        $ls.text("");
        $b1.under($panel).cls(episodes_delta > 0? "btn": "hide");
        $b2.under($panel).cls(meta[episodes_delta * 6 + 6]? "btn": "hide");

        let begin = episodes_delta * 6;
        for (let i = begin; (o = meta[i]) && i < begin + 6; ++i) {
            let epstr = "第"+ (i+1) +"集";
            d().text(epstr).under($ls).cls(i === episode? "act": "").append(
                d("info").html(`<h4>${seasonname} ${epstr}</h4><ss>${o.name}</ss>`+ SRCLINK)
                    .al("click", e=> e.stopPropagation()).d
            ).al("click", ()=> goto_episode(i));
        }
    }

    function render_tools() {
        let tohome = ()=> d("p").html("<a>回到首页</a>").al("click", ()=> route.go("/home", true)).d;
        let info = ()=> d("info").al("click", e=> e.stopPropagation());
        $ls.text("");
        $b1.rm();
        $b2.rm();
        d().text("信息").under($ls).append(info().html(
            `<h4>终物语 第${episode+1}集</h4><ss>${TVMETA[season][episode].name}</ss>`
        ).append(tohome()).d);
        d().text("上一集").under($ls)
            .append(info().html("<h4>快捷键</h4><ss>↑</ss>").append(tohome()).d)
            .al("click", ()=> goto_episode(episode - 1));
        d().text("下一集").under($ls)
            .append(info().html("<h4>快捷键</h4><ss>↓</ss>").append(tohome()).d)
            .al("click", ()=> goto_episode(episode + 1));
        d().text("回放5秒").under($ls)
            .append(info().html("<h4>快捷键</h4><ss>←</ss>").append(tohome()).d)
            .al("click", ()=> delta_seek(-5));
        d().text("快进5秒").under($ls)
            .append(info().html("<h4>快捷键</h4><ss>→</ss>").append(tohome()).d)
            .al("click", ()=> delta_seek(5));
        d().text("回放0.1秒").under($ls)
            .append(info().html("<h4>快捷键</h4><ss>,</ss>").append(tohome()).d)
            .al("click", ()=> delta_seek(-0.1, true));
        d().text("快进0.1秒").under($ls)
            .append(info().html("<h4>快捷键</h4><ss>.</ss>").append(tohome()).d)
            .al("click", ()=> delta_seek(0.1, true));
    }

    function delta_seek(sec, pause) {
        if (pause && !vd.paused) vd.pause();
        vd.currentTime += sec;
    }

    function goto_episode(i, dontpushstate) {
        let obj = TVMETA[season][i];
        if (!obj) return;
        episode = i;
        get_cyc(obj.src);
        render_episodes();
        if (!dontpushstate) history.pushState(null, "", `/tv/${season}/${episode}`);
        enter_anim.show(obj.char, seasonname, "MONOGATARI SERIES", obj.jp);
    }

    function keydn(e) {
        e.preventDefault();
        if (e.repeat) return;
        let k = e.key.toLowerCase();
        switch (k) {
            case "arrowleft":
                delta_seek(-5);
                break;
            case "arrowright":
                delta_seek(5);
                break;
            case "arrowup":
                goto_episode(episode - 1);
                break;
            case "arrowdown":
                goto_episode(episode + 1);
                break;
            case ",":
                delta_seek(-0.1, true);
                break;
            case ".":
                delta_seek(0.1, true);
                break;
            case " ":
                vd.paused? vd.play(): vd.pause();
                break;
        }
    }

    function get_cyc(u) {
        vd.pause();
        let ifr = d("iframe").style("display:none").under(document.body)
            .attr("src", `/api/cyc?url=${window.encodeURIComponent(u)}`)
            .al("load", ()=> {
                let cycsrc = ifr.contentWindow.document.querySelector("video");
                if (cycsrc) vd.src = cycsrc.src;
                ifr.remove();
                ifr = null;
            }).d;
    }

    let $page = d().id("tv");
    let vd = d("video").rawattr("controls", "").attr("src", "/test.MOV")
        .under($page).al("ended", ()=> goto_episode(episode + 1)).d;
    
    let $panel = d("panel").under($page);
    d("ico").under($page).html("&#xe851;").al("click", ()=> {
        panel_show = !panel_show;
        $panel.cls(panel_show? "": "hide");
    });
    let panel_show = true;

    let $hdr = d("header").under($panel);
    d().text("选集").under($hdr).al("click", render_episodes);
    d().text("工具").under($hdr).al("click", render_tools);

    let $ls = d("ls").under($panel);
    let $b1 = d("ico").html("&#xe83d;").cls("btn").under($panel).al("click", ()=> {
        if (episodes_delta > 0) render_episodes(--episodes_delta);
    });
    let $b2 = d("ico").html("&#xe840;").cls("btn").under($panel).al("click", ()=> {
        if (TVMETA[season][episodes_delta * 6 + 6]) render_episodes(++episodes_delta);
    });

    let season = "bake", episode = 0, seasonname = "化物語";
    let episodes_delta = 0;

    $page.d.ongo = ()=> {
        let path = location.pathname.split("/").filter(s=>s);
        season = path[1] || "bake";
        episode = parseInt(path[2]) || 0;
        episodes_delta = 0 | episode / 6;

        let sn = TVLS.find(({id})=> id === season);
        seasonname = sn? sn.name: "化物語";
        goto_episode(episode, true);

        window.addEventListener("keydown", keydn);
    };
    $page.d.onleave = ()=> {
        window.removeEventListener("keydown", keydn);
    };

    return $page.d;
}

const fullmask = d("fullmask").al("animationend", ()=> fullmask.d.style.animation = "none");
const enter_anim = init_enter_anim();

const route = init_route();
