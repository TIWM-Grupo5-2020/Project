$( document ).ready(function() {

    $(".sub-items").click(function(e){
        e.preventDefault();

        if( $(".sub-items").hasClass("sel")){
            $(".sub-items").removeClass("sel");
            $(this).addClass("sel");
        }
        else{
            $(".sub-items").removeClass("sel");
            $(this).addClass("sel");
        }
    });

    $(".filter-g-item").click(function(e){
        e.preventDefault();

        if( $(".filter-g-item").hasClass("sel")){
            $(".filter-g-item").removeClass("sel");
            $(this).addClass("sel");
        }
        else{
            $(".filter-g-item").removeClass("sel");
            $(this).addClass("sel");
        }
    });

});