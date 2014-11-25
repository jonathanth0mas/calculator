var USMensSize = document.getElementById("USMensSize");

var USWomensSize = document.getElementById("USWomensSize");



var menSizeButton = document.getElementById("menSize");
menSizeButton.addEventListener("click", function(){
	console.log("button clicked!");
	USMensSize.value= USMensSize.value - 0.5;

})



var womenSizeButton = document.getElementById("womenSize");
womenSizeButton.addEventListener("click", function(){
	console.log("button clicked!");
	USWomensSize.value= USWomensSize.value - 0.5;
})





