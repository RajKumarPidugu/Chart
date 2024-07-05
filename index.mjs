import "./style.css";
import { Chart } from "chart.js/auto";

/**
 * Fetches bar chart data from the API.
 * @returns {Promise<Object>} A promise that resolves to the chart data.
 */
const fetchBarData = async () => {
    const apiUrl = "https://django-dev.aakscience.com/candidate_test/fronted";
    try {
        showLoadingSpinner();
        const startTime = performance.now(); // Measure start time
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const results = await response.json();
        const data = processData(results);

        const endTime = performance.now(); // Measure end time
        console.log(`Data fetched in ${(endTime - startTime).toFixed(2)} ms`); // Log fetch duration

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it further up the call stack
    } finally {
        hideLoadingSpinner();
    }
};

/**
 * Processes the API response into a usable format for the chart.
 * @param {Object} results - The raw data from the API response.
 * @returns {Object} The processed data.
 */
const processData = (results) => {
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

    return data;
};

/**
 * Creates and renders the bar chart.
 * @param {Object} data - The data to be displayed on the chart.
 */
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
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
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

/**
 * Main function to fetch data and create the chart.
 */
const main = async () => {
    try {
        const data = await fetchBarData();
        createBarChart(data);
    } catch (error) {
        console.error('Error in main function:', error);
        displayErrorMessage();
    }
};

/**
 * Displays an error message to the user.
 */
const displayErrorMessage = () => {
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.innerHTML = '<p>Failed to load data. Please try again later.</p>';
    }
};

/**
 * Shows a loading spinner.
 */
const showLoadingSpinner = () => {
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.innerHTML = '<div class="spinner"></div>';
    }
};

/**
 * Hides the loading spinner.
 */
const hideLoadingSpinner = () => {
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.innerHTML = '<canvas id="barChart"></canvas>';
    }
};

// Run the main function
main();
