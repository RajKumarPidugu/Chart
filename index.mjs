import "./styles.css";
import { Chart } from "chart.js/auto";
const fetchBarData = async () => {
    try {
        const startTime = performance.now(); // Measure start time

        const response = await fetch("https://django-dev.aakscience.com/candidate_test/fronted");

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const results = await response.json();
        const res = results["0"]["2024"]; // Adjust based on actual API response structure
        const data = {};

        Object.keys(res).forEach((year) => {
            Object.keys(res[year]).forEach((month) => {
                Object.keys(res[year][month]).forEach((date) => {
                    Object.keys(res[year][month][date]).forEach((label) => {
                        data[label] = res[year][month][date][label];
                    });
                });
            });
        });

        const endTime = performance.now(); // Measure end time
        console.log(`Data fetched in ${(endTime - startTime).toFixed(2)} ms`); // Log fetch duration

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it further up the call stack
    }
};
const createBarChart = (data = {}) => {
    const ctx = document.getElementById("barChart");
    if (!ctx) {
        console.error('Canvas element not found');
        return;
    }

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(data),
            datasets: [
                {
                    label: "Number of items",
                    data: Object.values(data),
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};

const main = async () => {
    try {
        const data = await fetchBarData();
        createBarChart(data);
    } catch (error) {
        console.error('Error in main function:', error);
    }
};

main();