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
    })
    $("#flexRadioDefault2").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").show();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").hide();
    })
    $("#flexRadioDefault3").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").show();
        $("#metales").hide();
        $("#electronicos").hide();
    })
    $("#flexRadioDefault4").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").show();
        $("#electronicos").hide();
    })
    $("#flexRadioDefault5").click(function () {
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").show();
    })

    $("#btn-enviar").click(function () {
        //Revisar los select
        console.log("oal")

        console.log($("#flexRadioDefault1:checked").val())
        if ($("#flexRadioDefault1:checked").val() != undefined) {
            if ($("#flexRadioDefault2:checked").val() != undefined) {
                if ($("#flexRadioDefault3:checked").val() != undefined) {
                    if ($("#flexRadioDefault4:checked").val() != undefined) {
                        if ($("#flexRadioDefault5:checked").val() != undefined) {
                        }else{
                            alert("Electronicos no puede estar vacío")
                        }
                    }else{
                        alert("Metales no puede estar vacío")
                    }
                }else{
                    alert("Vidrio no puede estar vacío")
                }
            }else{
                alert("Papel no puede estar vacío")
            }
        }else{
            alert("Plastico no puede estar vacío")
        }

        //Revisar los input
        if ($("#input-nombre").val().length > 0) {
            if ($("#input-correo").val().length > 0) {
                if ($("#input-direccion").val().length > 0) {
                    if ($("#floatingTextarea").val().length > 0) {
                        alert("Se guardó yupi!")
                    }else{
                        alert("Comentarios no puede estar vacío")
                    }
                }else{
                    alert("Direccion no puede estar vacío")
                }
            }else{
                alert("Correo no puede estar vacío")
            }
        }else{
            alert("Nombre no puede estar vacío")
        }
    })

});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }