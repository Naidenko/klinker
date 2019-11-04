$(function() {
    $.validator.addMethod("minlenghtphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 10;
        },
        "Минимум {0} символов");
    $.validator.addMethod("requiredphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 1;
        },
        "Обязательное поле");

    $("#phone").mask("+7(999)999-99-99", {showMaskOnFocus: false, showMaskOnHover: false});
    $(".popup__form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone:  {
                requiredphone: true,
                minlenghtphone: 10
            }
        },
        messages: {
            name: {
                required: "Обязательное поле",
                minlength: jQuery.validator.format("Минимум {0} символа")
            }
        }
    });
});
