/**chat action Script**/
$(function () {
    load("../assets/js/jquery-inline-popup-rtl.js");
    $(".chatbtn").click(function () {
        $(".carddiv").css("display", "flex");
        $(".firstcard").fadeIn();
        $(this).addClass("active_notification");
    });

    $(".showpopchat").click(function () {
        if ((screen.width >= 768)) {
            $(".carddiv").css("width", "50%");
            $(".sendfield").css("display", "flex");
            $(".firstcard").css("width", "50%");
            $(".popchat").fadeIn();
            $(".purple").css("width", "200%");
            $(".showpopchat").removeClass("highlight");
            $(this).toggleClass("highlight");
            $(".purple .la-close").css("left", "5px");
        }
    });
    $(".purple .la-close").click(function () {
        if ($(".popchat").css('display') == 'block') {
            $(".popchat").css("display", "none");
            $(".carddiv").css("width", "25%");
            $(".firstcard").css("width", "100%");
            $(".purple").css("width", "100%");
            $(".showpopchat").removeClass("highlight");


        }
        else {
            $(".carddiv").css("display", "none");
            $("a.chatbtn").removeClass("active_notification");
        }

    });
    $(".showpopchat").click(function () {
        if ((screen.width < 768)) {
            $(".carddiv").css("width", "100%");
            $(".sendfield").css("display", "flex");
            $(".firstcard").css("display", "none");
            $(".popchat").css("width", "100%");
            $(".popchat").css("top", "0");
            $(".popchat").fadeIn();
            $(".showpopchat").removeClass("highlight");
            $(this).toggleClass("highlight");
            $(".card-header2").css("display", "block");
        }
    });
    $(".purple2 .fa-times").click(function () {
        if ($(".popchat").css('display') == 'block') {
            $(".popchat").css("display", "none");
            $(".firstcard").css("display", "block");
            $(".showpopchat").removeClass("highlight");

        }
        else {
            $(".carddiv").css("display", "none");
            $("a.chatbtn").removeClass("active_notification");
        }
    });

    
    setTimeout(function(){ initInlinePopup(); }, 3000);
    
});

function load(file){
    debugger
var src=document.createElement("script");
src.setAttribute("type","text/javascript");
src.setAttribute("src",file);
document.getElementsByTagName("head")[0].appendChild(src);


}


/**Header Script**/

$(function () {

    $(".right-arrow").click(function () {
        $("div .top-icons").toggleClass("show-icons");
        $(".right-arrow").toggleClass("la-rotate");
        $(".right-arrow").toggleClass("left-arrow");
        $(".la-angle-right").toggleClass("pl-2");

    });

});



//**Boxes List and grid view**//

$(function () {
    $(".grid_system").click(function () {
        $(".boxes").addClass("full");
    });
    $(".system_1").click(function () {
        $(".boxes").removeClass("full");
    });
});



$(function () {
    $(window).resize(function () {
        if (window.innerWidth < 719) {
            $('.boxes').removeClass('full');
            $('.grid_system').removeClass('active');
            $('.system_1').addClass('active');
        }
    });
});



//**Tooltip initialize**//

$(function () {
    $('[data-toggle-second="tooltip"]').tooltip();
});

//**Help Split Script*//

$(function () {
    $(".help").click(function () {
        $(".split").toggleClass("appear");
        $(".panel-left").resizable({
            resizeHeight: false,
            handleSelector: ".splitter",
        });
    });
    $(".help2").click(function () {
        $(".split").toggleClass("appear");

    });

    $(".exit").click(function () {
        $(".split").toggleClass("appear");
    });
    $(".full-screen").click(function () {
        window.open("help.html", "help");
        $(".split").toggleClass("appear");
    })

});

//**Password show**//


$(document).ready(function () {
    $("#show_hide_pass a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_pass input').attr("type") == "text") {
            $('#show_hide_pass input').attr('type', 'password');
            $('#show_hide_pass i').addClass("fa-eye-slash");
            $('#show_hide_pass i').removeClass("fa-eye");
        } else if ($('#show_hide_pass input').attr("type") == "password") {
            $('#show_hide_pass input').attr('type', 'text');
            $('#show_hide_pass i').removeClass("fa-eye-slash");
            $('#show_hide_pass i').addClass("fa-eye");
        }
    });

});



//**for 2 input file**//

$(document).ready(function () {
    var init_upload = $("#upload-attach").text();
    $('#upload').change(function (e) {
        var fileName = e.target.files[0].name;
        $("#upload-attach").html("<span>" + fileName + "<span>");
        if ($("#delete_sig").hasClass("d-none")) {
            $("#delete_sig").removeClass("d-none");
            $("#delete_sig").addClass("d-flex");
        }
        var add_val = $("#upload").val();
    });
    $("#delete_sig").click(function () {
        $("#upload").val("");
        $("#upload-attach").html("<span>" + init_upload + "<span>");
        $(this).addClass("d-none");
        $(this).removeClass("d-flex");
    });

});


$(document).ready(function () {
    var init_upload2 = $("#upload-attach2").text();
    $('#upload2').change(function (e) {
        var fileName2 = e.target.files[0].name;
        $("#upload-attach2").html("<span>" + fileName2 + "<span>");
        if ($("#delete_sig2").hasClass("d-none")) {
            $("#delete_sig2").removeClass("d-none");
            $("#delete_sig2").addClass("d-flex");
        }
        var add_val = $("#upload2").val();
    });
    $("#delete_sig2").click(function () {
        $("#upload2").val("");
        $("#upload-attach2").html("<span>" + init_upload2 + "<span>");
        $('#delete_sig2').addClass("d-none");
        $('#delete_sig2').removeClass("d-flex");
    });

});

//**sort and filter and search scripts**//

$(document).ready(function () {
    $('.filter-target').click(function () {
        $('.filter-box.filter').slideToggle('fast');
        $('.sort-target').removeClass("active");
        $('.search-target').removeClass("active");
        $(this).toggleClass("active");
        $('.filter-box.sort').hide();
        $('.filter-box.search').hide();

    });
    $('.sort-target').click(function () {
        $('.filter-box.sort').slideToggle('fast');
        $('.filter-target').removeClass("active");
        $(this).toggleClass("active");
        $('.filter-box.filter').hide();
        $('.filter-box.search').hide();
    });
    $('.search-target').click(function () {
        $('.filter-box.search').slideToggle('fast');
        $('.sort-target').removeClass("active");
        $('.filter-target').removeClass("active");
        $(this).toggleClass("active");
        $('.filter-box.filter').hide();
        $('.filter-box.sort').hide();

    });
});

//**full screen for transaction chat at mobile scripts**//

$(document).ready(function () {
    $('.full-screen-icon.la-expand').click(function () {
        $('.note-section').css('width', '100%');
        $('.chat-section').hide();
        $('.full-screen-icon.fa-compress').css('display', 'inline-block');
        $(this).hide();
    });
    $('.full-screen-icon.fa-compress').click(function () {
        $('.note-section').css('width', 'inhirit');
        $('.chat-section').show();
        $('.full-screen-icon.la-expand').css('display', 'inline-block');
        $(this).hide();
    });
});

//**Tree Script**//

$(function () {
    $('.custom-tree li.list-group-item:not(.has-sub)').click(function () {
        if (!$(this).hasClass('selected')) {
            $('.custom-tree li.list-group-item:not(.has-sub)').removeClass('selected');
            $('.custom-tree .panel-title.dark-color').removeClass('selected');
            $('.custom-tree .panel-default>.panel-heading .panel-title.dark-color a').removeClass('active');
            $(this).addClass('selected');

            var treeOpenedParents = $('.custom-tree .panel-default>.panel-heading .panel-title.dark-color a:not(.collapsed)');
            for (i = 0; i < treeOpenedParents.length; i++) {
                if ($(treeOpenedParents[i]).parent().parent().parent().find('.selected').html()) {
                    $(treeOpenedParents[i]).addClass('active');
                }
            }
        }
        else {
            $('.custom-tree li.list-group-item:not(.has-sub)').removeClass('selected');
            $('.custom-tree .panel-title.dark-color').removeClass('selected');
            $('.custom-tree .panel-default>.panel-heading .panel-title.dark-color a').removeClass('active');
        }
    });
    $('.custom-tree .panel-title.dark-color label').click(function () {
        if (!$(this).parent().parent().hasClass('selected')) {
            $('.custom-tree li.list-group-item:not(.has-sub)').removeClass('selected');
            $('.custom-tree .panel-title.dark-color').removeClass('selected');
            $('.custom-tree .panel-default>.panel-heading .panel-title.dark-color a').removeClass('active');
            $(this).parent().parent().addClass('selected');

            var treeOpenedParents = $('.custom-tree .panel-default>.panel-heading .panel-title.dark-color a:not(.collapsed)');
            for (i = 0; i < treeOpenedParents.length; i++) {
                if ($(treeOpenedParents[i]).parent().parent().parent().find('.selected').html()) {
                    $(treeOpenedParents[i]).addClass('active');
                }
            }
        }
        else {
            $('.custom-tree li.list-group-item:not(.has-sub)').removeClass('selected');
            $('.custom-tree .panel-title.dark-color').removeClass('selected');
            $('.custom-tree .panel-default>.panel-heading .panel-title.dark-color a').removeClass('active');
        }
    });

    $('#saveTreeValue').click(function () {
        $('#treeValueName').val($('.custom-tree .selected').find('label .department-name').text());
        $('#treeValueNumber').val($('.custom-tree .selected').find('label .department-number').text());
    });
    $('.filter-target').click(function () {
        $('.filter-box.filter').slideToggle('fast');
        $(this).toggleClass("active");
    });
});

//**pop up permissions script**//
function initInlinePopup(){
    $("#ip-container").inlinePopup({
        itemSelector: ".article",
        closeinnerelem: "X"
    });
}

//**Chart script**//

$(window).on("load", function () {

    Morris.Bar({
        element: 'bar-chart',
        data: [{
            y: 'القسم 1',
            a: 650,
            b: 550,
            c: 350,
            d: 560,
            e: 560,
            f: 650,
            g: 500,
            h: 420
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        labels: ['المعاملات الصادرة', 'مسودة الخطاب المنشأة', 'مسودة الخطاب المحالة', 'المعاملات الواردة المنشأة', 'المعاملات الواردة المحالة',
            'المعاملات الداخلية المنشأة', 'المعاملات الداخلية المحالة', 'المعاملات المتأخرة'],
        barGap: 20,
        barSizeRatio: 0.70,
        smooth: true,
        gridLineColor: '#e3e3e3',
        numLines: 5,
        gridtextSize: 14,
        fillOpacity: 0.4,
        resize: true,
        barColors: ['#387AC5', '#8FE1A1', '#C3C538', '#C56E38', '#E1D38F', '#8D38C5', '#E73232', '#4A38C5']
    });
});


$(function () {
    $('#report_type').change(function () {
        if ($(this).val() == 'management') {
            $('.management-section').show();
            $('.employee-section').hide();
        }
        else if ($(this).val() == 'employee') {
            $('.management-section').hide();
            $('.employee-section').show();
        }
    });
});

//**Checkbox in report hide and show**//

$(function () {
    $('.hide_trigger').hide();
    $('.trigger').change(function () {
        var hide_triggerId = $(this).attr("data-trigger");
        if ($(this).is(':checked')) {
            $("#" + hide_triggerId).fadeIn();
        } else {
            $("#" + hide_triggerId).fadeOut();
        }
    });
});

//**autosize textarea **//
autosize(document.querySelectorAll('textarea'));
//**other important js link *//



