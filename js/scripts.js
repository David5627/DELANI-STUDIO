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
        $("#fari").toggle();
        $(".daudi").show();
});
});


  $(document) .ready(function(event){
      $("#myForm").submit(function(){
        var name = $("input#will").val();
      var email = $("input#eva").val();
      var infor =$("textarea#eve").val();
      if ($("input#will").val() && $("input#eva").val()){
          alert(name + " we have received your message. Thank you for reaching out to us.");


      }else {
          alert("please enter your credential below.eg name and email.")
      }
      event.preventDefault();
  });
  });

  function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "40px";
    x.style.width = "32px";
  }
