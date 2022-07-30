function main(){
    function showContent(){
        $('.tabsContent').slideUp(200)
        let getDisplay = $(this).find('.tabsContent').css('display')
        if(getDisplay==='block'){
            $(this).find('.tabsContent').slideUp(200)
        }
        else{
            $(this).find('.tabsContent').slideDown(200)
        }
    }
    $('.tabs').click(showContent)
}
$(document).ready(main)