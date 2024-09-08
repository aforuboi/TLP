$(document).ready(function(){
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




    $("#flexRadioDefault1").click(function(){
        $("#subtipo").show();
        $("#plastico").show();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").hide();
    })
    $("#flexRadioDefault2").click(function(){
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").show();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").hide();
    })
    $("#flexRadioDefault3").click(function(){
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").show();
        $("#metales").hide();
        $("#electronicos").hide();
    })
    $("#flexRadioDefault4").click(function(){
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").show();
        $("#electronicos").hide();
    })
    $("#flexRadioDefault5").click(function(){
        $("#subtipo").show();
        $("#plastico").hide();
        $("#papel").hide();
        $("#vidrio").hide();
        $("#metales").hide();
        $("#electronicos").show();
    })

    $("#btn-enviar").click(function(){
        //Revisar los select

        //Revisar los input
        console.log($("#input-nombre").val())
        console.log($("#input-correo").val())
        console.log($("#input-direccion").val())
        console.log($("#floatingTextarea").val())

        if($("#floatingTextarea").val()==null){
            alert("npoo")
        }
    })

});

