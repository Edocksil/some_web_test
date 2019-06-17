var pageLoad = function () {
    'use strict';
    var poem = document.getElementById('virsh');

    function crXMLHttpRequest() {//возможность делать http запросы
        var res = false;
        if (window.XMLHttpRequest) {
            res = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            if (new ActiveXObject('Microsoft.XMLHTTP')) {
                res = new ActiveXObject('Microsoft.XMLHTTP');
            } else if (new ActiveXObject('Msxml2.XMLHTTP')) {
                res = new ActiveXObject('Msxml2.XMLHTTP');
            } else {
                res = false;
                alert('Неможливо відправити запит!');
            }
        }
        return res;
    }

    var request = crXMLHttpRequest();
    poem.onclick = function () {
        //запрос для txt файла
        request.open('GET', 'extra(AJAX)/virsh.txt', false);
        request.send();
        if (request.status != 200) {//выводим ошибки
            alert(request.status + ': ' + request.statusText);
        } else {
            //выводим полученную поэму
            document.getElementById('answer').innerHTML = '<p id="poem">' + request.responseText.replace(/\n/g, '<br />') + '</p>';
        }
    };
};
//запускаем скрипт при загрузке страцицы
if (window.addEventListener) {
    window.addEventListener('load', pageLoad);
} else {
    window.attachEvent('onload', pageLoad);
}