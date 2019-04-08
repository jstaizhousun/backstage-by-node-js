
//toggle按钮

//闭合二级菜单
$('.erji').css('display', 'none');
// nav收缩展开
$('.nav-item>a').on('click', function () {
    if (!$('.nav').hasClass('nav-mini')) {
        if ($(this).next().css('display') == "none") {
            //展开未展开
            $(this).next('ul').slideDown(300);
            $(this).parent().siblings().children('ul').slideUp(300);
            $(this).parent().siblings().children('a').children('.myicon').removeClass("nav-more2").addClass('nav-more');
            $(this).children('i').eq(1).removeClass("nav-more").addClass('nav-more2')
        } else {
            //收缩已展开
            $(this).next('ul').slideUp(300);
            $(this).children('i').eq(1).removeClass("nav-more2").addClass('nav-more');
        }
    }
});
//nav-mini切换
$('#mini').on('click', function () {
    if (!$('.nav').hasClass('nav-mini')) {
        // $('.nav-item.nav-show').removeClass('nav-show');
        //$('.nav-item').children('ul').removeAttr('style');
        $('.nav').addClass('nav-mini');
        $('#minifont').css('display', 'none');

    } else {
        $('.nav').removeClass('nav-mini');
        setTimeout(function () {
            $('#minifont').css('display', 'inline');
        }, 200)
    }
});
//页面样式
var userData = JSON.parse(sessionStorage.getItem('userData'));
$('#usersN').html(userData.username);
//加载函数
function loadInner(sId) {
    var sId = window.location.hash;
    var path, pathJS;
    switch (sId) {
        case '#articleList':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 内容系统 </span>
                    <span> / </span>
                    <span> 文章列表 </span>
                `);
            path = 'html/articleList.html';
            pathJS = 'js/articleList.js'
            break;
        case '#classify':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 内容系统 </span>
                    <span> / </span>
                    <span> 文章分类 </span>
                `);
            path = 'html/classify.html';
            pathJS = 'js/classify.js'
            break;
        case '#comment':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 内容系统 </span>
                    <span> / </span>
                    <span> 评论 </span>
                `);
            path = 'html/comment.html';
            pathJS = 'js/comment.js'
            break;
        case '#userlist':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 用户 </span>
                    <span> / </span>
                    <span> 用户列表 </span>
                `);
            path = 'html/userlist.html';
            pathJS = 'js/userlist.js'
            break;
        case '#adminlist':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 用户 </span>
                    <span> / </span>
                    <span> 管理员列表 </span>
                `);
            path = 'html/adminlist.html';
            pathJS = 'js/adminlist.js'
            break;
        case '#rolelist':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 用户 </span>
                    <span> / </span>
                    <span> 角色 </span>
                `);
            path = 'html/rolelist.html';
            pathJS = 'js/rolelist.js'
            break;
        case '#website':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 系统设置 </span>
                    <span> / </span>
                    <span> 网站设置 </span>
                `);
            path = 'html/website.html';
            pathJS = 'js/website.js'
            break;
        case '#email':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 系统设置 </span>
                    <span> / </span>
                    <span> 邮箱设置 </span>
                `);
            path = 'html/email.html';
            pathJS = 'js/email.js'
            break;
        case '#userinfo':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 系统设置 </span>
                    <span> / </span>
                    <span> 用户信息 </span>
                `);
            path = 'html/userinfo.html';
            pathJS = 'js/userinfo.js'
            break;
        case '#password':
            $('#top_nav_select').html(`
                    <span class="zhuye"> 主页 </span>
                    <span> / </span>
                    <span> 系统设置 </span>
                    <span> / </span>
                    <span> 修改密码 </span>
                `);
            path = 'html/password.html';
            pathJS = 'js/password.js'
            break;
    };
    //加载对应内容
    $('#main').load(path, function () {
        $('#JSwenjian').html(`<script src="` + pathJS + `"></script>`);
    });
};
//页面切换设置
$('#erjiMenu').on('click', 'li', function () {
    //获取ID的值
    var sId = $(this).attr('id');
    //设置锚点
    window.location.hash = sId;
    loadInner(sId);
});
$('.erjiMenu2').on('click', 'li', function () {
    //获取ID的值
    var sId = $(this).attr('id');
    //设置锚点
    window.location.hash = sId;
    loadInner(sId);
});

//filter

//statusfilter
function statusFilter(status, i) {
    switch (status) {
        case 'true':
            return '已发布';
            break;
        case 'false':
            $('.articleFabu').eq(i).css('background-color', 'rgb(255,0,0)');
            $('.adminFabu').eq(i).css('background-color', 'rgb(255,0,0)');
            return '未发布';
            break;
    }
}

//sexfilter
function sexFilter(sex) {
    switch (sex) {
        case '0':
            return '男';
            break;
        case '1':
            return '女';
            break;
    }
}