$(document).ready(function () {
    $("#founders-list").html("")
    $.each(StaffData, function(rankK, rank) {
        $.each(rank, function(userK, user) {
            let socials = ""
            if ( user.twitter !== "" ) socials = socials + `<a id="team-social" href="${user.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>`
            if ( user.twitch !== "" ) socials = socials + `<a id="team-social" href="${user.twitch}" target="_blank"><i class="fab fa-twitch"></i></a>`

            $("#" + rankK + "-list").append(`
                <div id="user">
                    <div id="user-img"> <img src="${user.img}"></div>
                    <div id="user-name">${user.name}</div>
                    <div id="user-title">${user.title}</div>
                    <div id="user-socials">${socials}</div>
                </div>`
            )
        })
    })
})