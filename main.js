// console.log("hello")
// first method
document.addEventListener('DOMContentLoaded', function () {
    const btnColor = document.getElementById("change-color-btn");
    const divColor = document.getElementById("color-box");
    // console.log(btnColor)
    function getRandomColor() {
        return '#' + Math.random().toString(16).slice(-6);
    }

    btnColor.addEventListener('click', function () {
        var x = divColor.style.backgroundColor = getRandomColor()
        // btnColor.style.color = x;//Chalenge
       
})

})

// seconde method

// document.addEventListener('DOMContentLoaded', function () {
//     const btnColor = document.getElementById("change-color-btn");
//     const divColor = document.getElementById("color-box");
//     // console.log(btnColor)
//     function getRandomColor() {
//         return '#' + Math.random().toString(16).slice(-6);
//     }

//     btnColor.onclick = function () {
//         divColor.style.backgroundColor = getRandomColor()
//     }
// })

// third method

// const btnColor = document.getElementById("change-color-btn");
// const divColor = document.getElementById("color-box");
// function getRandomColor() {
//   return "#" + Math.random().toString(16).slice(-6);
// }

// function changeColor() {
//     divColor.style.backgroundColor = getRandomColor();
// }
