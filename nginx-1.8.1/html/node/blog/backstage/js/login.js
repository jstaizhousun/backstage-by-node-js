$(function () {
    $.ajax({
        url: 'http://localhost:3000/admin/get',
        type: 'GET',
        success: function (data) {
            console.log(data);
            $('#login').on('click', function () {
                var userData;
                $.each(data, function (i, val) {
                    if ($('#username').val() == val.username) {
                        if ($('#pwd').val() == val.password) {
                            location.href = 'http://localhost:3000/index.html';
                            userData = val;
                            sessionStorage.setItem('userData', JSON.stringify(userData));
                        }
                    }
                })
                if(userData){
                    location.href = 'http://localhost/node/blog/backstage/';
                }else{
                    alert("用户名/密码错误")
                }
            });
            $('#reset').on('click',function(){
                $('#username').val('');
                $('#pwd').val('')
            })
        }
    })
})