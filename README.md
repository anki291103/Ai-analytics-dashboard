# AI-Powered Analytics Dashboard

✨ **Live Demo:** [Click Here to View Live Dashboard](https://ai-analytics-dashboard-iz2u.vercel.app/) ✨
*(Please replace `YOUR_LIVE_DEMO_URL_HERE` with your actual deployed Vercel/Netlify URL)*

---

## Project Overview

This project is a sophisticated, AI-powered analytics dashboard, meticulously crafted for "ADmyBRAND Insights," a fictional digital marketing agency platform. Designed with a strong emphasis on a visually stunning and intuitive user interface, this dashboard transforms raw marketing data into actionable intelligence. It empowers agencies with dynamic insights, predictive capabilities, and efficient data management tools, demonstrating a cutting-edge approach to problem-solving in digital analytics.

Built from the ground up, this dashboard showcases a modern development workflow, heavily leveraging AI coding assistants for rapid development and enhanced code quality, while prioritizing a polished user experience.

## Key Features Implemented

### Core Analytics & Data Visualization
* **Dynamic Metric Cards:** Prominently displays key performance indicators (KPIs) such as Total Sales (Revenue), Active Users, and Overall Growth (%), with dynamic percentage change indicators.
* **Interactive Charts (Minimum 3 Types):** Provides diverse visual representations of data:
    * **Sales Over Time & Prediction (Line Chart):** Visualizes historical sales trends with an overlaid AI-powered future sales prediction line. Anomalous data points are visually highlighted.
    * **Users by Category (Bar Chart):** Illustrates user distribution and engagement across different product categories.
    * **Sales by Category (Pie Chart):** Shows the proportional contribution of each product category to overall sales.
* **Comprehensive Data Tables:** Dedicated "Users" and "Products" views in the sidebar offer detailed tabular data with:
    * **Filtering:** An integrated search bar for quick data retrieval by relevant attributes.
    * **Sorting:** Clickable table headers enable ascending or descending order sorting on various columns.
    * **Pagination:** Controls for efficient navigation through large datasets, displaying data in manageable chunks.
* **Advanced Filters:** A versatile filter bar allows users to narrow down data by specific date ranges (e.g., "Last 7 days," "Last 30 days," "Last 3 months," specific months like "May 2025," "June 2025") and product categories.

### AI-Powered Integrations
* **AI-Powered Sales Prediction:** Utilizes a simplified linear regression model to forecast future sales trends, providing forward-looking insights directly on the sales chart.
* **AI-Powered Anomaly Detection:** Employs a statistical method (rolling Z-score) to automatically identify and visually flag unusual spikes or drops in sales data, prompting further investigation.
* **Natural Language Querying (NLP) / Smart Search:** A central search bar allows users to interact with the dashboard using plain English queries (e.g., "show sales last 30 days," "are there any anomalies?," "users in electronics"), which dynamically adjusts filters and generates contextual insights.
* **AI-Generated Insights & Actionable Recommendations:** The `InsightsBox` dynamically provides intelligent textual summaries of data trends, highlights detected anomalies, and, crucially, suggests actionable recommendations with clickable buttons (e.g., "Consider launching a flash sale," "Investigate anomaly," "Plan inventory review").
* **Simulated Real-time Updates:** Data automatically refreshes at set intervals with newly generated mock data, creating a dynamic, live analytics experience, complete with a pause/resume toggle for user control.
* **Drill-Down Interactivity:** Clicking on data points in charts (line graph dots, bar chart bars) triggers a modal (`DetailModal`) displaying granular, context-specific information related to the selected data.

### UI/UX & Technical Excellence
* **Modern Design System:** A meticulously crafted UI using **Tailwind CSS** for a clean, flat, and contemporary aesthetic. Features consistent use of custom color palettes, modern typography (Inter font), and an 8px-grid based spacing system.
* **Beautiful Visual Hierarchy:** Clear information architecture, intuitive navigation through a collapsing sidebar for mobile, and strategic use of visual weight to prioritize key information.
* **Smooth Animations & Micro-interactions:** Subtle `hover` effects, `scale` transitions on cards and buttons, smooth modal entrance animations, and animated placeholder content (`SkeletonLoader`) create a highly engaging and responsive user experience.
* **Beautiful Loading Skeletons:** Implemented for all major data-displaying components (metric cards, charts, tables) to enhance perceived performance during data loading or filtering.
* **Responsive Design:** Fully adaptive layout ensures a flawless viewing and interaction experience across desktop, tablet, and mobile devices, featuring a dynamic sidebar.
* **Dark/Light Mode Toggle:** A user-friendly toggle in the header allows seamless switching between light and dark themes.
* **Dashboard Customization:** A settings panel enables users to toggle the visibility of individual chart widgets on the overview page.
* **Robust Component Architecture:** The codebase is structured with highly modular, reusable, and well-defined React components, promoting maintainability and scalability.
* **Type Safety:** Developed entirely with **TypeScript** for strong type checking, reducing bugs, and improving developer experience.
* **Efficient Data Handling:** Extensive use of React's `useMemo` hook ensures optimized data filtering, sorting, aggregation, and rendering performance.

## Technologies Used

* **Frontend Framework:** React
* **Build Tool:** Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Charting Library:** Recharts
* **Icons:** React Icons (`react-icons/fa`)
* **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`, `useRef`)
* **Deployment (Recommended):** Vercel / Netlify

## How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```
    *(Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.)*
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  Open your browser to `http://localhost:5173` (or the address shown in your terminal).

## Project Structure

The project follows a clean and logical structure for maintainability and clear separation of concerns:

src/
├── components/         # Reusable UI components (e.g., Card, Header, Sidebar, SkeletonLoader, Charts, Modal)
├── data/               # Mock data files (dashboardData.ts, usersData.ts, productsData.ts)
├── pages/              # Main application pages (Dashboard.tsx)
├── utils/              # Utility functions and constants (aiUtils.ts, nlpUtils.ts, constants.ts, dataGenerators.ts)
├── views/              # Specific view components for sidebar navigation (UsersView, ProductsView)
├── App.tsx             # Main application entry point
├── main.tsx            # React DOM rendering setup
└── index.css           # Global styles, Tailwind directives, and custom animations


## Future Improvements (Ideas if Time Permitted)

* Integrating with a live backend API for actual data fetching and database persistence.
* More advanced time-series prediction models (e.g., Holt-Winters for seasonality, Prophet).
* Implementing more granular anomaly detection models capable of identifying deviations per category or platform.
* Full drag-and-drop customization for dashboard widgets.
* User authentication and role-based access control.
* Export functionality (PDF/CSV) for generating reports.
* Adding unit and integration tests for core logic and components.

---

## AI Usage Report

During the development of this AI-Powered Analytics Dashboard, I extensively leveraged several cutting-edge AI coding assistants to accelerate development, improve code quality, and solve complex problems. My primary tools included **Google Gemini Advanced**, **GitHub Copilot**, and occasionally **ChatGPT-4**.

**Key Use Cases & Sample Prompts:**

* **Initial Project Setup & Boilerplate Generation:**
    * **Prompt (Gemini):** "Set up a new React project with Vite, TypeScript, and Tailwind CSS. Include basic configurations for dark mode, a responsive header with a search bar, and a collapsible sidebar with navigation links."
    * **Outcome:** Rapidly established the entire project structure, core configuration files (`tailwind.config.js`), and initial layout components, significantly compressing the setup phase.

* **Algorithm Implementation for AI Features:**
    * **Prompt (Gemini):** "Provide a JavaScript implementation for a simplified linear regression model suitable for time-series sales prediction, ensuring it accounts for dates and numerical values."
    * **Prompt (ChatGPT):** "Explain a basic statistical method for anomaly detection (like Z-score) and show how to apply it to a series of numerical data in JavaScript, providing the formula and a code example."
    * **Outcome:** Helped in quickly drafting the core logic for `predictSalesTrend` and `detectSalesAnomalies` functions in `aiUtils.ts`, allowing more focus on integration.

* **UI/CSS Generation & Refinement with Tailwind CSS:**
    * **Prompt (Copilot):** "Generate Tailwind CSS classes for a modern, rounded card with a subtle hover lift effect, increased shadow intensity, and consistent styling for both light and dark modes."
    * **Prompt (Gemini):** "How can I create a purely Tailwind CSS-based custom toggle switch visually, using CSS pseudo-elements for the thumb, suitable for a dark/light mode theme?"
    * **Outcome:** Expedited the styling of various components like `Card`, `FilterBar` selects, `InsightsBox` variants, and `DashboardSettings` toggles, directly contributing to the "Beautiful UI Design" requirement.

* **Complex Debugging & TypeScript Type Safety:**
    * **Prompt (Gemini/ChatGPT):** "I'm receiving a TypeScript error 'Property X does not exist on type Y' when spreading `DotProps` from Recharts to my `CustomDot` component's SVG element. How should I correctly destructure Recharts' internal props and pass the `key` directly to resolve this?"
    * **Prompt (Gemini):** "Help debug a Recharts `BarChart` click handler where `e.activePayload` is undefined on `onClick` event. What is the recommended way to make individual bars clickable and retrieve their data payload?"
    * **Outcome:** Drastically reduced debugging time for intricate TypeScript type compatibility issues and Recharts interaction patterns, enabling a more stable and error-free codebase.

* **Realistic Mock Data Generation:**
    * **Prompt (Gemini - for generating Python script):** "Generate 100 realistic mock sales data points for a React dashboard that covers May 2025 to July 2025, with 1-3 entries per day. Include sales, users, categories (Clothing, Electronics), platforms (Web, Mobile), and occasional spikes/dips for anomaly detection demonstration. Provide this as a JSON array."
    * **Outcome:** Provided a custom Python script that generated a rich, appropriately sized, and varied dataset for testing all dashboard functionalities.

**Impact on Development (Speed & Quality):**

AI tools profoundly impacted the development process, enabling an extremely rapid prototyping and implementation cycle. Approximately **40% of the initial code generation** (boilerplate, structural components, fundamental algorithms) was directly assisted or provided by AI. **30% of the effort was dedicated to manual coding**, focusing on complex state management, data orchestration, and ensuring seamless integration between diverse features. The remaining **30% involved intensive AI-assisted debugging, problem-solving for challenging TypeScript errors, and iterative refinement of UI/UX implementations**. This synergistic approach allowed me to deliver a broader range of sophisticated features, including prediction, anomaly detection, and NLP, within the strict 2-3 day timeframe, resulting in a more "AI-Powered" and "visually stunning" product than would have been achievable through traditional manual methods alone.
