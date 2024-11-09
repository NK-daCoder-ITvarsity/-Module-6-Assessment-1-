const calculateBtn = document.getElementById("calculate-btn");

const calculateCarbon = () => {
    const distance = document.getElementById('distance').value;
    // simple emission factor
    const result = distance * 0.21; 
    document.getElementById('carbonResult').textContent = `Estimated Carbon Emission: ${result.toFixed(2)} kg CO₂`;
}

calculateBtn.addEventListener("click", calculateCarbon)