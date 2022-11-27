
    $(".account .tabs li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
      });
  //Historical For Modle
      $(".account .tabs .Modle").click(function(){
        $(".account .pages .page").removeClass("active");
        $(".account .pages .Modle").addClass("active");
      });
  //Dashboard
  
      $(".account .tabs .dashboard").click(function(){
        $(".account .pages .page").removeClass("active");
        $(".account .pages .dashboard").addClass("active");
      });
  //historical For Hardware 
      $(".account .tabs .hardware").click(function(){
        $(".account .pages .page").removeClass("active");
        $(".account .pages .hardware").addClass("active");
      });
  
     