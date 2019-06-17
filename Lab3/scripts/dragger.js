function dropHandler(ev){
    ev.stopPropagation();
    ev.preventDefault();
    var file = ev.dataTransfer.files[0];
    showInfo(file);
    if ( file.type.match(/image\/(jpeg|jpg|png|gif)/))  showThumbnail(file);
}
function showThumbnail(data){
    var reader = new FileReader();
    reader.addEventListener('load', function(event){
        var zz = document.getElementById("thumbnails-zone");
        var p = new Image();
        p.classList.add('small');
        p.src = URL.createObjectURL( data);
        zz.appendChild(p);
    });
    reader.readAsDataURL(data);
}
function dragOverHandler(ev){
    ev.stopPropagation();
    ev.preventDefault();
}

function showInfo(data){
    console.log(data);
    var di = document.getElementById("drop-info");
    di.classList.remove("hidden");
    di.innerHTML = "";
    document.getElementById("thumbnails-zone").innerHTML = "";
    di.innerText = "File name:"+data.name+"\r\n" + "File type:"+data.type+'\r\n' +"File size:"+data.size+"byte"+'\r\n';

}