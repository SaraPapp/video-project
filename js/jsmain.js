$(document).ready(function(){
console.log("hello");
    $(".js-modal-btn").each(function(){
        if ($(this).hasClass("js-video-vimeo")){
            $(this).modalVideo({channel:'vimeo'});
        } else {
            $(this).modalVideo();
        }
    });
});