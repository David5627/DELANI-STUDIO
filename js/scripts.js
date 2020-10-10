$(document).ready(function(){
    $(".zana").click(function(){
        $(".zana").hide();
        $("#mirza").show();
    });
    $("#mirza").click(function(){
        $("#mirza").hide();
        $(".zana").show();
    });
})
$(document).ready(function(){
    $(".Nush").click(function(){
        $(".Nush").hide();
        $("#Naz").show();
    });
    $("#Naz").click(function(){
        $("#Naz").hide();
        $(".Nush").show();
});
});

$(document).ready(function(){
    $(".daudi").click(function(){
        $(".daudi").hide();
        $("#fari").show();
    });
    $("#fari").click(function(){
        $("#fari").hide();
        $(".daudi").show();
});
});


  $(document) .ready(function(){
      $("#myForm").submit(function(event){
        var name = $("input#will").val();
      var email = $("input#eva").val();
      var infor =$("textarea#eve").val();
      if ($("input#will").val() && $("input#eva").val()){
          alert(name + " thank you for your concern we have recieved your message.Click okay to fill the form.");


      }else {
          alert("please enter your credential below.eg name and email.")
      }
      event.preventDefault();
  });
  });
