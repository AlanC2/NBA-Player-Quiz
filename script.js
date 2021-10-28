 $(".Curry").slideUp();
 $(".Magic").slideUp();
 $(".James").slideUp();
 $(".Pj").slideUp();
 let Quizcounter = 0;
 $(".B1").click(function() {
     let height = $("#height").val();
     console.log(height);
     let position = $("#position").val();
     console.log(position);
     $("#answer").text("height:" + " " + height + "position:" + " " + position);
     Quizcounter = Quizcounter + 1;
     $("#Quizcounter").text("Amount of times taken:" + "" + Quizcounter);
     if (height <= 80 && "Guard" === position) {
         $(".Curry").slideDown();
         $(".Magic").slideUp();
         $(".James").slideUp();
         $(".Pj").slideUp();
         $(".picAnswer").slideUp();
     }
     if (height > 80 && "Guard" === position) {
         $(".Magic").slideDown();
         $(".Curry").slideUp();
         $(".James").slideUp();
         $(".Pj").slideUp();
         $(".picAnswer").slideUp();
     }
     if (height <= 80 && "Forward" === position) {
         $(".James").slideDown();
         $(".Magic").slideUp();
         $(".Curry").slideUp();
         $(".Pj").slideUp();
         $(".picAnswer").slideUp();
     }
     if (height > 80 && "Forward" === position) {
         $(".Pj").slideDown();
         $(".Magic").slideUp();
         $(".James").slideUp();
         $(".Curry").slideUp();
         $(".picAnswer").slideUp();
     }
 });