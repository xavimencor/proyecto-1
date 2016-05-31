$(document).ready(function(){
    $(".num").click(function(){
        var numero = $(this).val(); 
        $("#edit1").val($("#edit1").val()+ numero);
     });
});

$("#limp").click(function(){
    $("#edit1").val("");
})

$("#mm").click(function(){
    m1 = parseFloat($("#edit1").val());
    $("#edit1").val(m1 * -1);
})

$("#porce").click(function(){
    p1 =parseFloat($("#edit1").val());
    $("#edit1").val(p1 / 100);
})

$(".op").click(function(){
    n1=parseFloat($("#edit1").val());
    $("#edit1").val("");
    op1 = $(this).val();
    
});

$("#np").click(function(){
    var c = $("#edit1").val().indexOf(".");
    if (c==-1){
        $("#edit1").val($("#edit1").val()+".");
    }    
});

$("#resul").click(function(){
    if (op1=="/"){
        var n2=parseFloat($("#edit1").val());
        $("#edit1").val(n1/n2);
    }else
    if (op1=="*"){
        var n2=parseFloat($("#edit1").val());
        $("#edit1").val(n1*n2);
    }else
    if (op1=="+"){
        var n2=parseFloat($("#edit1").val());
        $("#edit1").val(n1+n2);
    } else
    if (op1=="-"){
        var n2=parseFloat($("#edit1").val());
        $("#edit1").val(n1-n2);
    }    
});
