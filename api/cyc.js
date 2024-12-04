
const https = require("https");

module.exports = (req, res)=> {
    if (!req.query || !req.query.url) return;
    https.request({
        method: "GET", 
        host: "player.cycanime.com", 
        path: `/?url=https://cdn01.senhewenhua.com:11451/${req.query.url}.mp4`, 
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "cross-site"
        }
    }, get=> {
        let s = "";
        get.on("data", c=> s += c);
        get.on("end", ()=> {
            s = s.substring(0, 13) + "<base href='https://player.cycanime.com/'>" + s.substring(13);
            res.end(s);
        });
    }).end();
};
