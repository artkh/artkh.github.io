$(function () {
    var $form = $('.form'),
        $email = '',
        $login = '',
        $password = '',
        $emailVal, $loginVal,
        $passwordVal, err = [];

    if ($form.find('#email').length) {
        $email = $form.find('#email');
        $emailVal = $email.val();
    } else {
        $emailVal = 'no fields with this id are found';
    }
    if ($form.find('#login').length) {
        $login = $form.find('#login');
        $loginVal = $login.val();
    } else {
        $loginVal = 'no fields with this id are found';
    }
    if ($form.find('#password').length) {
        $password = $form.find('#password');
        $passwordVal = $password.val();
    } else {
        $passwordVal = 'no fields with this id are found';
    }

    function validate(el) {
        if (el != '') {
            if (el.val() === '') {
                el.parent().removeClass('filled');
                if (el.prop('required')) {
                    el.parent().addClass('error');
                    !err.includes(el.prop('id')) ? err.push(el.prop('id')) : console.log('already there');
                }
            } else {
                el.parent().addClass('filled');
                if (el.prop('required')) {
                    el.parent().removeClass('error');
                    err = err.filter(item => item !== el.prop('id'));
                }
            }
        }
        // console.log(err);
    }
    $form.find('input').each(function () {
        $(this).on('blur', function () {
            validate($(this));
        });
    });

    $form.on('submit', function (e) {

        $(this).find('input').each(function () {
            validate($(this));
        });

        if (err.length == 0) {
            $form.submit();
            // $.ajax({
            //     type: $form.attr('method'),
            //     url: $form.attr('action'),
            //     data: $form.serialize(),
            //     success: function(response) {
            //         $('body').addClass('success-sent');
            //         $('.success').fadeIn();
            //         $form.find('input, textarea').each(function(){
            //             $(this).val('').parent().removeClass('filled');
            //         });
            //         $form.find('.select-items').each(function(){
            //             $(this).find(':first-child').click()
            //         });
            //         $('.success>.btn').on('click', function(){
            //             $('body').removeClass('success-sent');
            //             $('.success').fadeOut();
            //             return false;
            //         });
            //
            //         //console.log('success');
            //         console.log(response);
            //     }
            // })
        }

        e.preventDefault();
    });
});