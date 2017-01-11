// first alert
alert("Welcome! Please make sure your browser is maximized and dev tools closed to begin, as "
	+ "I am still learning responsivness " +
	"¯/_(ツ)_/¯");

//***********************************
// empty object to hold tree specs -->
//***********************************
var treeSpecs =  {};


//***********************************
//collect and store user input
//***********************************
function buttonClick() {
	treeSpecs.height = document.getElementById("height-input").value;
	treeSpecs.character = document.getElementById("character-used").value;
	if (checkInput()){
		console.log(treeSpecs);
		growTree(treeSpecs);
	}
};


//***********************************
//loop through user inputs
//***********************************
function growTree(treeSpecsArg) {
	for (var i = 0; i < treeSpecsArg.height; i++) {
		var output = " ".repeat(treeSpecsArg.height - i - 1)
		output += treeSpecsArg.character.repeat(i * 2 + 1)
		console.log(output);
	}
};


//***********************************
// alert for empty input fields
//***********************************
function checkInput() {
  if (document.getElementById("height-input").value === "" || document.getElementById("character-used").value === "") {
    alert("Both feilds must have a value");
    return false;
  } else {
    return true;
  }
};


//***********************************
// listen for button click and return keypresses
//***********************************

//event listener for button click
document.getElementById("button").addEventListener("click" || "keypress", buttonClick);

//event listener for return on height line
document.getElementById("height-input").addEventListener("keypress",
	function(e) {
		if (e.key == "Enter") {
			buttonClick();
		}
	});

//event listener for return on character line
document.getElementById("character-used").addEventListener("keypress",
	function(e) {
		if (e.key == "Enter") {
			buttonClick();
		}
	});
