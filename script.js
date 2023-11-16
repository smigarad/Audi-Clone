function toogleContent(contentID){
    var allContent = document.getElementsByClassName("links");
    var overlay  = document.getElementById("overlay");
    var collabsable_links = document.getElementById("collapsable-links");
    for(var i = 0; i < allContent.length; i++){
        if(allContent[i].id === contentID){
            if(allContent[i].style.display === "none" || allContent[i].style.display === ""){
                allContent[i].style.display = "flex";
                overlay.style.display = "block";
                collabsable_links.style.borderTop = "1px solid black";
            //     make it black

            } else {
                allContent[i].style.display = "none";
                overlay.style.display = "none";
                collabsable_links.style.borderTop = "none";
            }
        } else {
            allContent[i].style.display = "none";
        }
    }
}

function closeContent(){
    var allContent = document.getElementsByClassName("links");
    var overlay  = document.getElementById("overlay");

    for(var i = 0; i < allContent.length; i++){
        allContent[i].style.display = "none";
        overlay.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    var overlay = document.getElementById("overlay");
    overlay.addEventListener("click", closeContent);
}
);