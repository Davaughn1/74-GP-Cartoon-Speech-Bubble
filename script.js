$(".ask").click(function() {
    let question = $(".speech").val();
    $(".speech-bubble").text(question);
    // Add your code below:
    console.log("<h1>"+question+"</h1>");
$(".history").append("<h1>"+question+"</h1>");

});