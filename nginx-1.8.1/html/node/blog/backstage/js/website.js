$(function () {
    //根据数据加载页面
    $.ajax({
        url: "http://localhost:3000/systemset/get",
        type: "GET",
        success: function (data, textStatus, jqXHR) {
            var data = data[0];
            $('#websiteName').val(data.websiteName);
            $('#websiteDomain').val(data.websiteDomain);
            $('#bufferTime').val(data.bufferTime);
            $('#maxFileUpload').val(data.maxFileUpload);
            $('#fileType').val(data.fileType);
            $('#IndexTitle').val(data.IndexTitle);
            $('#MetaKeyWord').val(data.MetaKeyWord);
            $('#MetaCharactor').val(data.MetaCharactor);
            $('#CopyrightInfo').val(data.CopyrightInfo);
        }
    })
    //确认按钮点击
    $('#websitSure').on('click', function () {
        var data = {
            'websiteName': $('#websiteName').val(),
            'websiteDomain': $('#websiteDomain').val(),
            'bufferTime': $('#bufferTime').val(),
            'maxFileUpload': $('#maxFileUpload').val(),
            'fileType': $('#fileType').val(),
            'IndexTitle': $('#IndexTitle').val(),
            'MetaKeyWord': $('#MetaKeyWord').val(),
            'MetaCharactor': $('#MetaCharactor').val(),
            'CopyrightInfo': $('#CopyrightInfo').val(),
        }
        var params = JSON.stringify(data);
        //发起请求
        $.ajax({
            url: "http://localhost:3000/systemset/post/website",
            data: params,
            type: "POST",
            success: function (data, textStatus, jqXHR) {

            }
        })
        //重载页面
        loadInner('#website');
    })
})
