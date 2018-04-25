$(function(){



    initMenuSwiper();

    loadBanners();
    lodNavs();
    loadMustBuys();
    loadCvs();
    loadMainShow();
})


function initTopSwiper(){

    var swiper = new Swiper("#topSwiper", {
        loop: true,
        pagination:".swiper-pagination",
        autoplay: 4000
    })
}


function initMenuSwiper(){

    var swiper = new Swiper("#swiperMenu", {
        slidesPerView: 3
    })
}

function loadBanners() {
    $.getJSON('/home/', function (data) {
        // console.log(data);
        // console.log(data['banner_data']);
        // console.log(data['banner_data'].length);
        for (var i=0; i<data['banner_data'].length; i++){
            var $slide = $('<div class="swiper-slide"></div>');
            var $slide_a = $('<a href="#"></a>');
            var $slide_a_img = $('<img src="">');
            $slide_a_img.attr('src', data['banner_data'][i]['img']);
            $slide_a_img.appendTo($slide_a);
            $slide_a.appendTo($slide);
            $slide.appendTo('.swiper-wrapper');
        }
        initTopSwiper();
    })

}

function lodNavs() {
    $.getJSON('/home/', function (data) {
        // console.log(data['nav_data']);
        var $nav_container = $('#nav_container'); // 这是ul
        for(var i=0; i<data['nav_data'].length; i++){
            var $li = $('<li></li>');
            var $img = $('<img src="">');
            var $span = $('<span></span>');

            $span.html(data['nav_data'][i]['name']);
            $img.attr('src', data['nav_data'][i]['img']);
            $img.appendTo($li);
            $span.appendTo($li);

            $li.appendTo($nav_container);
        }


    })
}

// 有毛病 li一直变div
function loadMustBuys() {
    $.getJSON('/home/', function (data) {
        // console.log(data['mustbuy_data']);
        $mustbut_ul = $('#must_buy_container');
        $swiperMenu = $('#swiperMenu');
        for (var i=0; i<data['mustbuy_data'].length; i++){
            // var $li = $('<li class="swiper-slide"></li>');
            var $li1 = $('<li></li>');
            $li1.attr('class', 'swiper-slide');
            // console.log($li1);
            var $img1 = $('<img src="">');
            $img1.attr('src',data['mustbuy_data'][i]['img']);
            $img1.appendTo($li1);
            $li1.appendTo($mustbut_ul);
            $mustbut_ul.appendTo($swiperMenu);
        }

    })
}

function loadCvs() {

    $.getJSON('/home/', function (data) {
        // console.log(data['axfshop_data'][0]);
        // console.log(data['axfshop_data'][1]);

        // 获取闪购超市
        var $h2 = $('#cvsH2');
        var $a = $('<a href="#"></a>');
        var $img = $('<img src="">');
        $img.attr('src', data['axfshop_data'][0]['img']);
        $img.appendTo($a);
        $a.appendTo($h2);

        // 获取热销榜，新品尝鲜

        var $fieldset = $('fieldset');
        for (var i=1; i<3; i++){
            var $a1_3 = $('<a href="#"></a>');
            var $img1_3 = $('<img src="">');
            $img1_3.attr('src', data['axfshop_data'][i]['img']);
            $img1_3.appendTo($a1_3);
            $a1_3.appendTo($fieldset);
        }

        // 获取横排四个 牛奶面包等

        var $ul3_7 = $('#ul3_7');
        for (var i=3; i<7; i++){
            var $li3_7 = $('<li></li>');
            var $span3_7 = $('<span></span>');
            var $a3_7 = $('<a href="#"></a>');
            var $img3_7 = $('<img src="">');
            $img3_7.attr('src', data['axfshop_data'][i]['img']);
            $span3_7.html(data['axfshop_data'][i]['name']);
            $img3_7.appendTo($a3_7);
            $span3_7.appendTo($a3_7);
            $a3_7.appendTo($li3_7);
            $li3_7.appendTo($ul3_7);
        }

        // 插入2*2

        var $ol7_11 = $('#ol7_11');
        for(var i=7; i<11; i++){
            var $li7_11 = $('<li></li>');
            var $a7_11 = $('<a href="#"></a>');
            var $img7_11 = $('<img src="">');
            $img7_11.attr('src', data['axfshop_data'][i]['img']);
            $img7_11.appendTo($a7_11);
            $a7_11.appendTo($li7_11);
            $li7_11.appendTo($ol7_11);
        }
    })
}

function loadMainShow() {
    $.getJSON('/home/', function (data) {
        // console.log(data['mainshow_data']);
        var $mainInfo = $('.mainInfo');
        for (var i=0; i<data['mainshow_data'].length;i++){
            var $section = $('<section></section>');
            var $h3 = $('<h3></h3>');
            var $h3_span = $('<span></span>');
            var $h3_a = $('<a href="#"></a>');
            var $div = $('<div></div>');
            var $div_a = $('<a></a>');
            var $div_a_img = $('<img src="" alt="">');
            var $ul = $('<ul></ul>');

            $h3.html(data['mainshow_data'][i]['name']);
            $h3_a.html('更多');
            $h3_span.appendTo($h3);
            $h3_a.appendTo($h3);
            $h3.appendTo($section);

            $div_a_img.attr('src',data['mainshow_data'][i]['img']);
            $div_a_img.appendTo($div_a);
            $div_a.appendTo($div);

            for (var j=1; j<4; j++){
                var $ul_li = $('<li></li>');
                var $ul_li_a = $('<a href="#"></a>');
                var $ul_li_button = $('<button></button>');
                var $ul_li_button_span = $('<span></span>');
                var $ul_li_a_img = $('<img src="" alt="">');
                var $ul_li_a_p = $('<p></p>');
                var $ul_li_a_span = $('<span></span>');
                var $ul_li_a_s = $('<s></s>');

                $ul_li_button_span.html('+');
                $ul_li_button_span.appendTo($ul_li_button);

                $ul_li_a_p.attr('class', 'description');
                $ul_li_a_p.html(data['mainshow_data'][i]['longname'+j]);
                $ul_li_a_img.attr('src',data['mainshow_data'][i]['img'+j]);
                $ul_li_a_img.attr('alt',data['mainshow_data'][i]['longname'+j]);
                $ul_li_a_span.html('￥'+data['mainshow_data'][i]['price'+j]);
                $ul_li_a_s.html('￥'+data['mainshow_data'][i]['marketprice'+j]);

                $ul_li_a_img.appendTo($ul_li_a);
                $ul_li_a_p.appendTo($ul_li_a);
                $ul_li_a_span.appendTo($ul_li_a);
                $ul_li_a_s.appendTo($ul_li_a);

                $ul_li_a.appendTo($ul_li);
                $ul_li_button.appendTo($ul_li);

                $ul_li.appendTo($ul);
            }
            $h3.appendTo($section);
            $div.appendTo($section);
            $ul.appendTo($section);

            $section.appendTo($mainInfo);


        }


    })
}