window.onload = function () {
  // Sample macro data (replace with your data fetching logic)
  const macroData = {
    protein: { goal: 116, intake: 100 }, // Replace with actual values
    carbs: { goal: 200, intake: 180 },
    fat: { goal: 50, intake: 45 },
    sugar: { goal: 25, intake: 20 },
    calories: { goal: 2000, intake: 1850 },
  };

  // Function to calculate percentage based on goal and intake
  function calculatePercentage(goal, intake) {
    return Math.min(100, Math.round((intake / goal) * 100)); // Ensure max 100%
  }

  function createRadialProgressBar(canvasId, value, maxValue, color) {
    const ctx = document.getElementById(canvasId).getContext("2d");
    const percentage = Math.min(100, Math.round((value / maxValue) * 100));

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        //labels: [`${percentage}%`], // Label for progress
        datasets: [
          {
            label: "Progress",
            data: [percentage, 0], // Progress value, no remaining space (full circle)
            backgroundColor: [color], // Adjust color (single color for full circle)
            borderColor: [color], // Adjust color (single color for full circle)
            borderWidth: 1,
          },
        ],
      },
      options: {
        circumference: (context) => {
          const progress = context.chart.data.datasets[0].data[0];
          return (progress / 100) * 360; // Calculate circumference based on percentage
        },
      },
    });
  }

  const macroCanvasIds = [
    "protein-bar",
    "carbs-bar",
    "fat-bar",
    "sugar-bar",
    "calories-bar",
  ];

  function getMacroName(canvasId) {
    // Split the canvas ID by hyphens and destructure the first element (first word)
    const [macroName] = canvasId.split("-");
    return macroName;
  }

  macroCanvasIds.forEach((canvasId) => {
    const macroName = getMacroName(canvasId);
    console.log(macroName);
    console.log(macroData[macroName]);
    const color = "rgba(197, 145, 237, 1)";
    createRadialProgressBar(
      canvasId,
      macroData[macroName].intake,
      macroData[macroName].goal,
      color
    );
  });
};
