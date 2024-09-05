$(document).ready(function(){
    $("#products").hide();
    $("#form").hide();
    
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

});

