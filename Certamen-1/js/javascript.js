let Tipo = undefined;
let Subtipo = undefined
$(document).ready(function () {
    $("#products").hide();
    $("#form").hide();
    $("#plastico").hide();
    $("#papel").hide();
    $("#vidrio").hide();
    $("#metales").hide();
    $("#electronicos").hide();
    $("#subtipo").hide();


    $("#select-h").click(function () {
        $("#homepage").show();
        $("#products").hide();
        $("#form").hide();
    });

    $("#select-p").click(function () {
        $("#homepage").hide();
        $("#products").show();
        $("#form").hide();

    });

    $("#select-f").click(function () {
        $("#homepage").hide();
        $("#products").hide();
        $("#form").show();

    });




    $("#flexRadioDefault1").click(function () {
        $("#subtipo").show();
        $("#plastico").show();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").hide();
        Tipo = "plastico"
        Subtipo = undefined

    })
    $("#flexRadioDefault2").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").show();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").hide();
        Tipo = "papel"
        Subtipo = undefined

    })
    $("#flexRadioDefault3").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").show();
        $("#metales").hide();
        $("#electronicos").hide();
        Tipo = "vidrio"
        Subtipo = undefined

    })
    $("#flexRadioDefault4").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").show();
        $("#electronicos").hide();
        Tipo = "metales"
        Subtipo = undefined

    })
    $("#flexRadioDefault5").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").show();
        Tipo = "electronicos"
        Subtipo = undefined

    })



    $("#btn-enviar").click(function () {
        //Revisar los select
        if (Tipo != undefined) {
            if (Subtipo != undefined) {

                //Revisar los input
                if ($("#input-nombre").val().length > 0) {
                    if ($("#input-correo").val().length > 0 && isEmail($("#input-correo").val()) == true) {
                        if ($("#input-direccion").val().length > 0) {
                            if ($("#floatingTextarea").val().length > 0) {
                                alert("Se guardó yupi!")
                            } else {
                                alert("Comentarios no puede estar vacío")
                            }
                        } else {
                            alert("Direccion no puede estar vacío")
                        }
                    } else {
                        alert("Correo invalido")
                    }
                } else {
                    alert("Nombre no puede estar vacío")
                }
            } else {
                alert("Subtipo no puede estar vacío")
            }
        } else {
            alert("Tipo no puede estar vacío")
        }


    })

});

function isEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function agregar(e) {
    Subtipo = e
}
