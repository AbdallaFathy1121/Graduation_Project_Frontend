window.onload = function(){

    // Init AOS
    AOS.init();

    //////////////////////////////////

    let sky   = document.querySelector('#img-bg'),
    elemEleven   = document.querySelector('#cover');
    sky.addEventListener('mousemove',function(e){
        var pageX = e.clientX - window.innerWidth/2,
            pageY = e.clientY - window.innerHeight/2;
        elemEleven.style.transform = 'translateX(' + -(pageX/350) + '%) translateY(' + -(pageY/350) +  '%)';
    });

    //////////////////////////////////
    // Add Role

    var role_1 = "Patient";
    var role_2 = "Doctor";

    $(".login .types .type").on('click', function(){
        $(".login .types .type").each(function(){
            $(this).removeClass("active_type");
        });
        $(this).addClass("active_type");

        if($(this).hasClass("type_1")) {
            $(".login form #role").val(role_1);
        } 
        else if($(this).hasClass("type_2")) {
            $(".login form #role").val(role_2);
        }
    });

};