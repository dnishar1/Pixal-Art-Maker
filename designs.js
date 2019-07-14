const element = document.getElementById('pixelCanvas')
let color = $("#colorPicker"); // Select color input
let inputHeight = $("#inputHeight");
let inputWidth = $("#inputWidth");

$('#submit').click(function(inputSubmit){
    inputSubmit.preventDefault();
    makeGrid();
});
// When size is submitted by the user, call makeGrid()

/**
 * A grid should appear when
 * users submit width and height
 * Width and Height variables are created and used
 */
function makeGrid() {

// Your code goes here!
    element.innerHTML = '';
    let h = inputHeight.val();
    let w = inputWidth.val();
    let events = function(pixelArt){
        pixelArt.addEventListener(function(){
            pixelArt.style.backgroundColor = color.val();
        });
    }

    for (let i = 0; i < h; i++) {
        let r = element.insertRow(i);
        for (let j = 0; j < w; j++) {
            let pixelArt = r.insertCell(j);
            pixelArt.addEventListener('click', function() {
                events(pixelArt);
            });
        }
    }

}
