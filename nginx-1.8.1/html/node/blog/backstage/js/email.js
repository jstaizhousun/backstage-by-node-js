$(function () {
    //根据数据加载页面
    $.ajax({
        url: "http://localhost:3000/systemset/get",
        type: "GET",
        success: function (data, textStatus, jqXHR) {
            var data = data[0];
            console.log(data.SMTPserver);
            $('#SMTPserver').val(data.SMTPserver);
            $('#SMTPport').val(data.SMTPport);
            $('#SenderMailbox').val(data.SenderMailbox);
            $('#SenderPetName').val(data.SenderPetName);
            $('#MailboxPW').val(data.MailboxPW);
        }
    })
    //确认按钮点击
    $('#emailSure').on('click', function () {
        var data = {
            'SMTPserver': $('#SMTPserver').val(),
            'SMTPport': $('#SMTPport').val(),
            'SenderMailbox': $('#SenderMailbox').val(),
            'SenderPetName': $('#SenderPetName').val(),
            'MailboxPW': $('#MailboxPW').val(),
        }
        var params = JSON.stringify(data);
        //发起请求
        $.ajax({
            url: "http://localhost:3000/systemset/post/email",
            data: params,
            type: "POST",
            success: function (data, textStatus, jqXHR) {

            }
        })
        //重载页面
        loadInner('#email');
    })
})
