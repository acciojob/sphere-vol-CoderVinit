function volume_sphere() {
    //Write your code here
	let radiusInput = document.getElementById("radius").value;
    let radius = parseFloat(radiusInput);

    // Get the output field
    let volumeField = document.getElementById("volume");

    // Validate the input (must be a non-negative number)
    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN"; // Display NaN for invalid input
    }

    // Calculate the volume of the sphere: V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places and display result
    volumeField.value = volume.toFixed(4);

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
