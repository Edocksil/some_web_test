var pageLoad = function () {
    'use strict';
    function crXMLHttpRequest() {//http запросы в старых и современных браузерах
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
    var classTable = document.getElementById('classTable'),
        request3 = crXMLHttpRequest();
    classTable.onclick = function () {
        //запрос для json файла
        request3.open('GET', 'extra(AJAX)/classesSCP.json', false);
        request3.send();
        if (request3.status != 200) {//выводим ошибки
            alert(request3.status + ': ' + request3.statusText);
        } else {
            var i = 0,
                JSONDoc = JSON.parse(request3.responseText),
                table = '<tr>';
            for (name in JSONDoc) {
                table += '<th>' + name + '</th>';
            }
            table += '</tr>';
            for (name in JSONDoc['Клас']) {
                table += '<tr><td>' + JSONDoc['Клас'][name] + '</td><td>' + JSONDoc['Опис'][name] + '</td><tr>';//создаём таблицу для полученных данных
                i++;
            }
            classTable.style.visibility = 'hidden';
            document.getElementById('forJson').innerHTML = table;//выводим результат
        }
    };
    uploadYourMedal();//загрузка картинки
};
function uploadYourMedal() {
    'use strict';
    images.onchange = function () {
        //при получении ссылки на картинку меняем её размер и вывдим
        var medal = document.getElementById('forImage');
        medal.innerHTML = '';
        var fileType = this.files[0].type;//тип файла
        if (fileType.indexOf('image') != -1) {//проверяем картинка это или нет
            var medalPic = new Image();
            medalPic.src = URL.createObjectURL(images.files[0]);
            medalPic.style.width = 150 + 'px';//задаём размер картинки
            medalPic.style.height = 150 + 'px';
            medalPic.style.marginTop = 10 + 'px';
            medal.appendChild(medalPic);//выводим
        } else {
            alert('Це не фото!')
        }
    };
}
//запускаем скрип при загрузке страницы
if (window.addEventListener) {
    window.addEventListener('load', pageLoad);
} else {//для ІЕ
    window.attachEvent('onload', pageLoad);
}




