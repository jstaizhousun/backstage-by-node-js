$(function () {
    var data2 = JSON.parse(sessionStorage.getItem('userData'));
    $.ajax({
        url: 'http://localhost:3000/admin/get',
        type: 'GET',
        success: function (data) {
            var userData;
            $.each(data, function (i, val) {
                if (val.id == data2.id) {
                     userData = val;
                }
            })
            console.log(userData.password);
            $('#sure_cun').on('click', function () {
                if ($('#now_pwd').val() == userData.password) {
                    if ($('#new_pwd').val() == $('#sure_new_pwd').val()) {
                        var data = {
                            'id': userData.id,
                            'pwd': $('#new_pwd').val()
                        }
                        var params = JSON.stringify(data);
                        $.ajax({
                            url: 'http://localhost:3000/admin/post/pwd',
                            type: 'POST',
                            data: params,
                            success: function (data) {
                            }
                        })
                        alert('保存成功');
                    } else {
                        alert('两次输入的密码不一致')
                    }
                } else {
                    alert('当前密码不正确')
                }
            })
        }
    })


})