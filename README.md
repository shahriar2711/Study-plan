CUET Study Plan Manager
A React-based application that helps students manage their study plans and track academic progress. Users can log in using default credentials, update their profiles (including department, level, term, and CGPA), enroll in courses, and generate detailed day-to-day study plans based on their target GPA.

Features
User Authentication:
Login using default credentials.
Profile update with department, level, term, and CGPA fields.
Profile details update dynamically in both the dashboard overview and the CGPA tracker.
Course Enrollment:
Enroll in courses by providing details such as course name, course code, course credit, CT number, and target GPA.
Automatically generate a day-to-day study plan that outlines daily tasks for students.
Dashboard Overview:
View profile details, current CGPA, number of enrolled courses, and pending tasks.
Detailed course overview and study plan display.
Installation
Clone the Repository:
bash
Copy
Edit
git clone https://github.com/yourusername/cuet-study-plan-manager.git
Install Dependencies:
bash
Copy
Edit
cd cuet-study-plan-manager
npm install
Run the Application:
bash
Copy
Edit
npm run dev
Open your browser and navigate to http://localhost:5173 to view the app.
Technologies Used
MERN Stack:
MongoDB: Database to store user profiles, courses, and study plans.
Express: Back-end framework for building RESTful APIs.
React: Front-end library for building the user interface.
Node.js: Server runtime environment.
Additional Libraries:
Tailwind CSS: Utility-first CSS framework for styling.
Chart.js & react-chartjs-2: For displaying charts in the CGPA tracker.
Lucide React: Icon library.
Concurrently: To run the client and server simultaneously (if used).
Contributing
Contributions are welcome! Please fork the repository and open a pull request with your suggested changes. For major changes, please open an issue first to discuss what you'd like to change.

License
This project is licensed under the MIT License.
