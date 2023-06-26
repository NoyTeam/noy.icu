/* https://obfuscator.io/
* "Options Preset" = Default
* "Seed" = <random number>
* "Target" = Browser No-Eval
* "String Array Encoding" = RC4, Base64
* "Unicode Escape Sequence" = true
*/

// 尽量保证兼容性，避免使用 ES6 语法
// 混淆后的代码请单独保存到一个随机的 js 文件中，再在 HTML 中引用
// 混淆文本可一定程度防止关键词主动扫描，爬虫等

var textList = {
    'Title-Text': 'NoyAcg 魔法陣地址',
    'h1-Text': 'NoyAcg',
    'a-Text': 'https://noy1.top',
    'Web-Text': '轉到網頁版',
    'Client-Text': 'Android',
    'Tips1-Text': '⭐建議閣下收藏本頁以防止迷路',
    'Tips2-Text': '❗傳送 Email 加入召喚列表: <a href="mailto:finder@noy.asia" class="email">finder@noy.asia</a>',
    'Tips3-Text': '❗訂閱 RSS 地址: <a href="https://noy1.top/atom.xml" class="email">https://noy1.top/atom.xml</a>',
};
var urlList = {
    'a-URL': 'https://noy1.top',
    'Forum-URL': 'https://forum.noy.asia/d/146-android-app-248'
};


// urlList
for (var url in urlList) {
    var u = document.getElementById(url);
    if (u) {
        u.href = urlList[url];
    }
}

// textList
for (var text in textList) {
    var t = document.getElementById(text);
    if (t) {
        t.innerHTML = textList[text];
    }
}

document.getElementById("logo").src = `./image/${Math.floor(Math.random() * 4) + 1}.webp`;