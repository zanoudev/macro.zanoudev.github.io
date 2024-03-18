function drawChart(data) {
  console.log("hello from weightChart");

  // Extract dates and weights from the provided data
  const weightHistory = data.weightHistory || []; // Handle potential empty data

  // Check if weightHistory is truly empty (no entries)
  if (!weightHistory.length) {
    // Handle empty data situation (e.g., display a message)
    console.warn("No weight history data found!");
    return; // Exit the function if no data
  }

  const dates = weightHistory.map((entry) => entry.date);
  const weights = weightHistory.map((entry) => entry.weight);

  // Create a Chart.js configuration object
  const ctx = document.querySelector(".weight-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line", // Line chart type
    data: {
      labels: dates, // Use extracted dates for labels
      datasets: [
        {
          label: "Weight (kg)",
          data: weights, // Use extracted weights for data points
          backgroundColor: "rgba(54, 162, 235, 0.2)", // Optional: Set background color with transparency
          borderColor: "rgba(54, 162, 235, 1)", // Optional: Set border color
          borderWidth: 1, // Optional: Set border width
        },
      ],
    },
  });
}
