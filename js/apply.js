$(document).ready(function () {
    $(".apply-btn").hover(function() {
        setTimeout(() => { // Wait till the button has expanded
            if (!$('.apply-btn').is(":hover")) return
            $(".apply-btn").html("APPLY")
        }, 100);
    }, function() {
        $(".apply-btn").html('<i class="fas fa-file-signature"></i>')
    })
})