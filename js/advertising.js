function load(name) {
    let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}





// ==========================================




/* new style */
var web_url_domain = document.domain;
var page_url = window.location.href;
var title_a = web_url_domain + " 5G影院-午夜伴侣";

var title_change = $("title");
title_change.append(title_a);

var logodomain_a = "<a href=\"/\" title=\"5G影院\">" + web_url_domain + " 5G在线视频</a>";

var logo_domain = $(".logodomain");
logo_domain.html(logodomain_a);





function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请手动进行添加");
        }
    }
}

//Collection

/* Top ENd */
$(document).ready(function () {
    $(".f_h").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });
    $(".header .a_n").click(function () {
        $(".menu").slideToggle();
        $(".menu").toggleClass("on");
    });
    //
    $(".tc_xw .bd ul li").mouseenter(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
    $(".fh_top, .a_fh").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });
    //
    var clipboard = new ClipboardJS('.share_btn');
    clipboard.on('success', function (e) {
        alert("已复制本页网址，粘贴发送给好友请提醒他们用浏览器打开本站");
        e.clearSelection();
    });
    clipboard.on('error', function (e) {
        alert("您的浏览器无法使用复制按钮，请手动复制地址栏网址再分享给好友，请提醒他们用浏览器打开本站");
        e.clearSelection();
    });
    //
    // let theme = $.cookie('theme')
    // if (theme) {
    //   if (theme === 'dark') {
    //     $('body').addClass('darktheme')
    //   } else {
    //     $('body').removeClass('darktheme')
    //   }
    // } else {
    //   $.cookie('theme', 'light', 100)
    // }
    // let changeTheme = () => {
    //   let theme = $.cookie('theme')
    //   if (theme) {
    //     if (theme === 'dark') {
    //       $.cookie('theme', 'light', 100)
    //       $('body').removeClass('darktheme')
    //     } else {
    //       $.cookie('theme', 'dark', 100)
    //       $('body').addClass('darktheme')
    //     }
    //   }
    // }
    // $(".a_ld").click(changeTheme);
    //

    /* ads */
    var Bannersilde = $(".pc_ban");
    var Bannersilde_M1 = $(".m1");
    var Bannersilde_M2 = $(".m2");
    var Bannersilde_M3 = $(".m3");
    var Playerbottom_b = $(".p1");
    var PcRightside = $(".tc_gg");
    var BannerGg = $(".bannergg");
    var PlayerBottom = $(".playerbottom");
    var MobileBottom = $(".sj_gg");
    //
    var Topbanner_PC_1 = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', '77JS_com_Topbanner_PC', {'event_category' : 'adbanner_PC','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";   //PC顶部1
    var Topbanner_PC_2 = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', 'X999_club_Topbanner_PC', {'event_category' : 'adbanner_PC','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";   //PC顶部2
    var Topbanner_M_1 = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', '77JS_com_Topbanner_M', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";   //M顶部1
    var Topbanner_M_2 = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', '77JS_com_Topbanner_M', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";   //M顶部2
    //以下为新增位置
    var Midbanner_M_1 = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', '77JS_com_Topbanner_M', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";//手机端首页中部上
    var Midbanner_M_2 = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', '77JS_com_Topbanner_M', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";//手机端首页中部下
    var Midbanner_M_3 = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', '77JS_com_Topbanner_M', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";
    var Playerbottom = "<div class=\"swiper-slide\" style=\"background:url() no-repeat center / cover;\"><a href=\"/\" onClick=\"gtag('event', '77JS_com_Topbanner_M', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"></a></div>";//手机端播放器下
    //
    var PcRightSide_1 = "<a href=\"/\" onClick=\"gtag('event', '77JS_com_PcRightSide', {'event_category' : 'adbanner_PC','event_label' : 'img_click'})\" target=\"_blank\"><img class=\"lazyload\" src=\"/static/jsui/img/a1.gif\" data-original=\"\"></a>";
    //
    var Banner_PC_1 = "<a href=\"/\" onClick=\"gtag('event', '77JS_com_Banner_PC', {'event_category' : 'adbanner_PC','event_label' : 'img_click'})\" target=\"_blank\"><img class=\"lazyload\" src=\"/static/jsui/img/g_g.gif\" data-original=\"\"></a>";
    var Banner_PC_2 = "<a href=\"/\" onClick=\"gtag('event', 'X999_club_Banner_PC', {'event_category' : 'adbanner_PC','event_label' : 'img_click'})\" target=\"_blank\"><img class=\"lazyload\" src=\"/static/jsui/img/g_g.gif\" data-original=\"\"></a>";
    //
    var PlayerBottom_PC_1 = "<a href=\"/\" onClick=\"gtag('event', '77JS_com_PlayerBottom_PC', {'event_category' : 'adbanner_PC','event_label' : 'img_click'})\" target=\"_blank\"><img class=\"lazyload\" src=\"/static/jsui/img/g_g3.gif\" data-original=\"\"></a>";
    var PlayerBottom_M_1 = "<a href=\"/\" onClick=\"gtag('event', '77JS_com_PlayerBottom_M', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"><img class=\"lazyload\" src=\"/static/jsui/img/g_g3.gif\" data-original=\"\"></a>";
    //
    var MobileBottom_1 = "<a href=\"/\" onClick=\"gtag('event', '77JS_com_MobileBottom', {'event_category' : 'adbanner_M','event_label' : 'img_click'})\" target=\"_blank\"><img class=\"lazyload\" src=\"/static/jsui/img/g_g4.gif\" data-original=\"\"></a>";
    //
    var Topbanner_PC_Arr = [Topbanner_PC_1, Topbanner_PC_2];
    var Topbanner_M_Arr = [Topbanner_M_1, Topbanner_M_2];
    //
    var PcRightside_Arr = [PcRightSide_1];
    //
    var BannerGg_Arr = [Banner_PC_1, Banner_PC_2];
    //
    var PlayerBottom_PC_Arr = [PlayerBottom_PC_1];
    var PlayerBottom_M_Arr = [PlayerBottom_M_1];
    //w
    var MobileBottom_Arr = [MobileBottom_1];
    //
    var Topbanner_PC = parseInt(Math.random() * (Topbanner_PC_Arr.length));
    var Topbanner_M = parseInt(Math.random() * (Topbanner_M_Arr.length));
    var Topbanner_PC_ads = Topbanner_PC_Arr[Topbanner_PC];
    var Topbanner_M_ads = Topbanner_M_Arr[Topbanner_M];
    //顶部通栏
    var PcRightSide_PC = parseInt(Math.random() * (PcRightside_Arr.length));
    var PcRightSide_ads = PcRightside_Arr[PcRightSide_PC];
    //PC右侧块状
    var BannerGg_PC = parseInt(Math.random() * (BannerGg_Arr.length));
    var BannerGg_ads = BannerGg_Arr[BannerGg_PC];
    //PC_banner
    var PlayerBottom_PC = parseInt(Math.random() * (PlayerBottom_PC_Arr.length));
    var PlayerBottom_M = parseInt(Math.random() * (PlayerBottom_M_Arr.length));
    var PlayerBottom_PC_ads = PlayerBottom_PC_Arr[PlayerBottom_PC];
    var PlayerBottom_M_ads = PlayerBottom_M_Arr[PlayerBottom_M];
    //播放器下方
    var MobileBottom_M = parseInt(Math.random() * (MobileBottom_Arr.length));
    var MobileBottom_ads = MobileBottom_Arr[MobileBottom_M];
    //移动端通用下方
    /* Native ads pc */
    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
    const infos = [//此处设置PC原生广告内容610x416
        {
            id: 1,
            title: '',
            url: "",
            img: ""
        },
        
    ]
    let res = []
    let infoCount = infos.length
    for (let i = 0; i < infoCount; i++) {
        let idx = infoCount - i
        let randomIdx = randomNum(0, idx - 1)
        let nowInfo = infos.splice(randomIdx, 1)
        res.push(nowInfo[0])
    }

    let bigAd = res[0]
    let bigAdEle = document.getElementsByClassName('tc_tj')[0]
    bigAdEle.innerHTML = `<a href="${bigAd.url}" target="_blank"><img class="lazyload" src="/static/jsui/img/start.gif" data-original="${bigAd.img}">
<div class="b_t">${bigAd.title}<span>广告</span>
</div></a>`

    let smallAdEle = document.getElementsByClassName('tc_nr_list')[0]
    for (let i = 1; i < res.length; i++) {
        info = res[i]
        let item = document.createElement('li')
        item.innerHTML = `<div class="t_p"><a href="${info.url}" target="_blank"><img class="lazyload" src="/static/jsui/img/start.gif" data-original="${info.img}"></a></div>
    <div class="w_z">
      <h3><a href="${info.url}" target="_blank">${info.title}</a></h3>
      <span>广告</span>
    </div>
    <div class="clear"></div>`
        smallAdEle.append(item)
    }
   
});

window.onload = function () {
    var vd = $(".sp_nr .s_p .v_d").height();
    $(".sp_nr .s_p .v_h").height(vd / 2);
}

$(function () {
    $("img.lazyload").lazyload({
        threshold: 200,
        effect: "fadeIn",
        container: $("body")
    });
});

$("#shadeico").click(function () {
    $("#shade").hide();
})
