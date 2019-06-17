$(document).ready(function () {
    var cntr = 0;
    var time = 25;
    $.fn.shake = function (time, step) {//визначена мною функція для "тряски" об*єктом
        if (!step) {
            step = 4;
        }
        this.animate({top: "-=" + step}, time / 4);
        this.animate({top: "+=" + (2 * step)}, time / 2);
        this.animate({top: "-=" + step}, time / 4);
        return $(this);
    };
    $.fn.jump = function (height, time) {// визначена мною функція для стрибків об*єктів
        this.animate({top: "-=" + height}, time / 2);
        this.animate({top: "+=" + height}, time / 2);
        return $(this);
    };
    var ufo_animation = function () {//анімація літаючої тарілки
        $(".ufo").animate({left: "+=350"}, 5000);
        var cntr = 0;
        var shaking = function () {
            if (cntr != 49) {
                $(".ufo").shake(50);
                cntr++;
                setTimeout(shaking, 60);
            }
        };
        shaking();//"тряска
        setTimeout(function () {
            $(".ufo").animate({left: "+=500", opacity: "0"}, 1500);
            $(".ufo").animate({left: "0", opacity: "1"}, "fast");
        }, 3000);
        setTimeout(ufo_animation, 12000);
    };
    var eyes_animation = function () {//анімація бігаючих очей
        if (cntr === 0) {
            $(".pupil").animate({left: "-=120"}, 300);
        } else {
            $(".pupil").animate({left: "+=120"}, 300);
        }
        cntr = (cntr + 1) % 2;
        setTimeout(eyes_animation, 2500);
    };
    var alien_animation = function () {//анімація зелених чоловічків
        $(".alien").animate({left: "+=150", opacity: "0"}, 2000)
            .animate({left: "+=300"}, 500)
            .animate({left: "+=150", opacity: "1"}, 2000);
        $(".alien:nth-child(2)").jump(50,500);
        $(".alien:nth-child(1), .alien:nth-child(3)").delay(500).jump(50, 500);
        $(".alien:nth-child(2)").delay(500).animate({left: "-=150", opacity: "0"}, 2000);
        $(".alien:nth-child(1), .alien:nth-child(3)").animate({left: "-=150", opacity: "0"}, 2000);
        $(".alien").animate({left: "-=300"}, 500)
            .animate({left: "-=150", opacity: "1"}, 2000);
        setTimeout(alien_animation, 13000);
    };
    $("#new-joke").click(function () {//вмикання-вимикання анімації
        $(this).html("Анимация включена");
        eyes_animation();
        ufo_animation();
        alien_animation();
        $("#new-joke").hide();
    });
});