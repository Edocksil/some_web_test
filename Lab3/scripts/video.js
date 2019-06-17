// showVideo();
function showVideo() {
    progressBar();
    // show(null);
    $.ajax({
        url: "src/media/scpVideo.MP4",
        crossDomain: true,
        contentType: "video/mp4",
        success: function (data) {
            show(data);
        }
    })
}

function show(data) {
    document.getElementById("showV").classList.add("hidden");
    document.getElementById("prog").classList.add("hidden");
    document.getElementById("vid").classList.remove("hidden");

}

function progressBar() {
    var pr = document.getElementById("prog");
    setTimeout(function () {
        pr.value = pr.value + 1;
        if (pr.value === 100) show(); else
            progressBar();
    }, Math.random() * 88);
}