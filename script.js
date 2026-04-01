function calculateMarks() {
    // 1. Read values from input fields
    // We use parseFloat to ensure the inputs are treated as numbers
    const m1 = parseFloat(document.getElementById('mark1').value);
    const m2 = parseFloat(document.getElementById('mark2').value);
    const m3 = parseFloat(document.getElementById('mark3').value);

    // Basic Validation: Ensure all fields are filled
    if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
        alert("Please enter valid marks for all three subjects.");
        return;
    }

    // 2. Compute total
    const total = m1 + m2 + m3;

    // 3. Compute average
    const average = total / 3;

    // 4. Display result on the webpage
    document.getElementById('totalText').innerText = "Total = " + total;
    document.getElementById('averageText').innerText = "Average = " + average.toFixed(1);
}
