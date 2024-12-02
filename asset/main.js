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
}

let d = t=> new Div(t);

function init_enter_anim() {
    const OBJ = {
        shinobu: {
            bangumi_name: "終物語", 
            bangumi_name_en: "MONOGATARI FINAL SEASON", 
            content_title: ["しのぶ", "メイル"],
            content_subtitle: "其ノ肆",
        }
    };

    function show(name) {
        let url = suf=> `url(/asset/enter-anim/${name}${suf}.png) alpha 0/cover`;
        let o = OBJ[name];
        if (!o) return;
        $bangumi_name.text("");
        for (let s of o.bangumi_name) d("span").text(s).under($bangumi_name);
        $bangumi_name_en.text(o.bangumi_name_en);
        $content_title.text(o.content_title[0]).append(d("space").d).append(o.content_title[1]);
        $content_subtitle.text(o.content_subtitle);

        $deco1.style(`-webkit-mask: ${url(1)};mask: ${url(1)};`);
        $deco2.style(`-webkit-mask: ${url(2)};mask: ${url(2)};`);
        $shinobu.style(`-webkit-mask: ${url("")};mask: ${url("")};`);
    }

    function onresize() {
        let s = window.innerWidth / $d.d.clientWidth;
        $d.style("transform:translate(-50%, -50%) scale("+ s +")");
    }

    let $d = d().id("enter-anim").under(document.body);
    d("circ").under($d);

    let $bangumi_name = d("h2").under($d);
    d("hrr").under($d);
    let $bangumi_name_en = d("en").under($d);

    let $deco1 = d("deco1").under($d);
    let $deco2 = d("deco2").under($d);

    let $content = d("cont").under($d);
    let $content_title = d("h3").under($content);
    let $content_subtitle = d("h4").under($content);
    let $shinobu = d("snb").under($content);
    
    onresize();
    window.addEventListener("resize", onresize);

    return { show };
}

const enter_anim = init_enter_anim();
enter_anim.show("shinobu");

// d();
