debugger;
$(".submit").click(function () {
  let inpValue = $(".inp").val();
  if (inpValue && inpValue != "") {
    let content =
      "<div class=' avag bi bi-check red-color d-flex align-items-center justify-content-between  data-mdb-attribute.' style='height: 50px;border-bottom: 0.5px solid black;'> " +
      "<div class='mko' style=' margin-left:20px'>" +
      "<p class='arm'>" +
      inpValue +
      "<p/>" +
      "</div> " +
      "<div class='close d-flex justify-content-center  d-flex align-items-center ' style='width: 50px;height: 50px;cursor: pointer: '>" +
      "x" +
      "</div>";
    ("</div>");

    $(".inp").val("");

    $(".todo-parent").append(content);
  } else {
    alert("");
  }
});
$(".close").on("click", function () {});
$(document).on("click", ".close", function () {
  console.log("element - ", $(this).parent());
  $(this).parent().attr("style", "display:none !important");
});
avag = false;
$(document).on("click", ".arm", function () {
  if (avag === false) {
    $(".arm").attr("style", "text-decoration-line : line-through ");
    avag = true;
  } else {
    $(".arm").attr("style", "text-decoration-line : none");
    avag = false;
  }
});
