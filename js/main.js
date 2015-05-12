/**
 * Created by Antiockus on 5/8/15.
 */
$(document).ready(function(){

    $('img').on('click',function(){
        var a = $(this).attr('src');
       $('.preview').css({'display':'block',
                    'visibility' : 'visible',
                    'background-image': 'url('+ a + ')',
                    'background-size':'cover'
       });

    });

    $('.preview').on('click',function(){
        $('.preview').css({
            'display':'none',
            'visibility':'hidden'
        });
    });


});