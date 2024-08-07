# Chart
Candidate Test Documentation:
User Story:
As a developer, I want to test and document my code for fetching and displaying data using Chart.js, ensuring it performs optimally and meets all requirements.

Task 1: Implement and Test ‘fetchBarData’ function
Process: 
Worked on JavaScript code. Mainly used the ‘fetch()’ API to retrieve data from the specified URL. 
Handled Potential errors which occurred during the fetch operation and logged them to the command prompt for debugging.
Example:
Implemented the ‘fetchBarData’ function, ensures the accurate retrieval and processes all the data from the API.
Testing:
Validated the functions by checking cmd logs for fetched data and error messages while checking errors with the API.

Task 2: Implement and Test ‘createBarChart’ function
Process:
Developed a JavaScript code which mainly used Chart.js. To create a bar chart based on the data fetched in Task 1, created it. 
Verified the chart renders properly on the web page and handled scenarios where the canvas element is missing.
Example:
Implemented the ‘createBarChart’ function to initialize Chart.js with data and options.
Properly ensured the displays in the chart on a designated canvas element.
Testing:
Verified the functionality by viewing the web page and confirmed that the chart appears as expected.
Checked for any JavaScript errors in the browser console.

Task 3: Optimize JavaScript and CSS
Process:
Improved the performance of JavaScript and CSS files by minimizing their size through techniques like compression.
Example:
Used automated tools to minify and compress JavaScript and CSS files.
Reduced their download times and enhanced overall application speed.


Testing:
Tested optimized files in the browser to maintain the functionality while providing performance metrics in network and loading times.

Task 4: Monitor Performance and Refine
Process:
Continuously monitored application performance using browser developer tools.
Analyzed metrics which are related to network requests, JavaScript execution and rendering times.
Example:
Used Chrome DevTools to profile JavaScript performance, monitored network requests and evaluated page load times. 
Made some adjustments to the code and checked configurations based on the performance data.
Testing:
Implemented refinements based on the performance insights and tested again for the application behavior.
Document findings and adjustments during the optimization process.

Short Description for Each Code:
1) package.json
This file defines the project's metadata, dependencies, and scripts. It includes the project name, version, description, entry point, scripts for starting and building the project, and lists both development and runtime dependencies. It ensures all necessary packages are installed for development and production environments.

2) parcel-cache
This configuration file customizes Parcel's behavior to optimize build performance. It specifies transformers, optimizers, packagers, and validators for HTML, JavaScript, and CSS files, enabling features like tree shaking and minification, which improve the efficiency and performance of the build process.

3) index.html
This HTML file sets up the basic structure of the web page. It includes a <canvas> element for rendering the chart, links to the CSS file for styling, and a script tag to load the JavaScript module. It also ensures proper layout and inclusion of necessary resources for the web page.

4) index.mjs
This JavaScript module fetches bar chart data from an API, processes it, and renders it using Chart.js. It includes functions for data fetching, processing, chart creation, and displaying a loading spinner. The main function orchestrates these tasks, ensuring the chart is displayed correctly or showing an error message if data fetching fails.

5) style.css
This CSS file styles the HTML elements to create a responsive and visually appealing layout. It includes styles for the body, header, footer, main content, and canvas element, as well as animations for the loading spinner and fade-in effect. The styling ensures a polished and professional appearance for the web page.