let MobileNavShown = false 

// http://142.44.143.209:30120/players.json

// http://54.37.245.190:30112/players.json
// http://54.37.245.190:30112/dynamic.json

    // $.getJSON("https://jsonp.afeld.me/?url=http://54.37.245.190:30112/dynamic.json", function(data){
    //     console.log("test", data)
    // })

// fetch("http://54.37.245.190:30112/dynamic.json", {
//     method: "no-cors",
// }).then(function(data) {
//     console.log(data)
// })

$(document).ready(function () {
    $("#join-btn").hover(function() {
        setTimeout(() => { // Wait till the button has expanded
            if (!$('#join-btn').is(":hover")) return
            $("#join-btn").html("JOIN NOW")
        }, 100);
    }, function() {
        $("#join-btn").html('<i class="fas fa-sign-in-alt"></i>')
    })

    $('.dropdown').click(function(){
        $('.dropdown-menu').toggleClass('show');
    });
})

function ShowMobileNav() {
    if ( MobileNavShown ) {
        MobileNavShown = false
        $("#mobile-nav").animate({ top: "-=200%" })
    } else {
        MobileNavShown = true
        $("#mobile-nav").animate({ top: "+=0%" })
    }
}

function LoadSocial(type) {
    if ( type == "tiktok" ) {
        window.open('https://www.tiktok.com/@hiveroleplay', '_blank'); return false;
    } else if ( type == "youtube" ) {
        window.open('https://www.youtube.com/channel/UChak6JHU9Or-w0Kbl4x27tg/featured', '_blank'); return false;
    } else if ( type == "discord" ) {
        window.open('https://discord.gg/hive-rp', '_blank'); return false;
    } else if ( type == "twitter" ) {
        window.open('https://twitter.com/hiverp_', '_blank'); return false;
    }
}