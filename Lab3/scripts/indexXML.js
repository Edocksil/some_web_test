var pageLoad = function () {
    'use strict';
    var getXML = document.getElementById('getAIMS');

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
    getXML.onclick = function () {
        //запрос для xml файла
        request.open('GET', './extra(AJAX)/aims.xml', false);
        request.send();
        if (request.status != 200) {//выводим ошибки
            alert(request.status + ': ' + request.statusText);
        } else {
            var i,
                //создаём тамблицу для полученных данных
                xmlDoc = request.responseXML,
                table = '<tr><th>Постулат</th><th>Опис</th></tr>',
                x = xmlDoc.getElementsByTagName('aim');
            for (i = 0; i < x.length; i++) {
                table += '<tr><td>' + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
            }
            document.getElementById('getAIMS').style.visibility = 'hidden';
            document.getElementById('forXml').innerHTML = table;//выводим таблицу
        }
    };
};
    //запускаем скрипт при загрузке страцицы
    if (window.addEventListener) {
        window.addEventListener('load', pageLoad);
    } else {
        window.attachEvent('onload', pageLoad);
    }
