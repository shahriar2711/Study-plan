import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Target,
  BarChart2,
  Calendar,
  LogOut,
  PlusCircle,
  CheckCircle2,
  ChevronDown,
  UserCircle
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { supabase } from '../../lib/supabase';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setCourses(getCoursesForUser(storedUser.email));
    }
  }, []);

  const getCoursesForUser = (email) => {
    const userCourses = {
      "atiq@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
      "sk@gmail.com": [
        { id: 1, name: "Operating Systems", code: "CSE-301", ctNumber: 2, targetGpa: 3.5, requiredMarks: 70},
        { id: 2, name: "Computer Networks", code: "CSE-302", ctNumber: 3, targetGpa: 3.75, requiredMarks: 78 }
      ],
      "mun@gmail.com": [
        { id: 1, name: "Database Systems", code: "CSE-401", ctNumber: 2, targetGpa: 4.0, requiredMarks: 85 },
        { id: 2, name: "Software Engineering", code: "CSE-402", ctNumber: 3, targetGpa: 3.6, requiredMarks: 75 }
      ],
      "abrar@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
      "enan@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
      "adil@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
      "tasnim@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
      "ashir@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
      "sami@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
      "kanchi@gmail.com": [
        { id: 1, name: "Data Structures", code: "CSE-201", ctNumber: 3, targetGpa: 4.0, requiredMarks: 80 },
        { id: 2, name: "Digital Logic Design", code: "CSE-202", ctNumber: 2, targetGpa: 3.75, requiredMarks: 75 }
      ],
    };

    return userCourses[email] || [
      { id: 1, name: "General Course", code: "GEN-101", ctNumber: 1, targetGpa: 3.0, requiredMarks: 60 }
    ];
    // Map through the courses and add a study plan if it's missing
  return coursesForUser.map(course => ({
    ...course,
    studyPlan: course.studyPlan || generateStudyPlan(course.targetGpa)
  }));
  };


  // Profile form state
  const [profileForm, setProfileForm] = useState({
    department: '',
    level: '',
    term: ''
  });

  const [enrollmentForm, setEnrollmentForm] = useState({
    courseName: '',
    courseCode: '',
    targetGpa: '',
    courseCredit: '',
    ctNumber: ''
  });
  

  // Tasks state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete DS Assignment', course: 'CSE-201', deadline: '2024-03-20', completed: false },
    { id: 2, title: 'Prepare for DLD Quiz', course: 'CSE-202', deadline: '2024-03-22', completed: true },
  ]);

  const [newTask, setNewTask] = useState({ title: '', course: '', deadline: '' });





  // Function to generate a study plan based on target GPA
const generateStudyPlan = (targetGpa) => {
  const tg = parseFloat(targetGpa);
  if (tg >= 3.75) {
    return 'Focus on advanced topics, extra tutorials, and additional practice assignments.';
  } else if (tg >= 3.5) {
    return 'Maintain regular study hours and review lecture notes frequently.';
  } else {
    return 'Concentrate on core fundamentals and practice problem-solving daily.';
  }
};

// Handler for the enroll course form submission
const handleEnrollCourse = (e) => {
  e.preventDefault();
  const { courseName, courseCode, targetGpa, courseCredit, ctNumber } = enrollmentForm;
  
  if (!courseName || !courseCode || !targetGpa || !courseCredit || !ctNumber) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Generate a study plan (using your existing generateStudyPlan function)
  const studyPlan = generateStudyPlan(targetGpa);
  
  // Calculate required marks
  const parsedCredit = parseFloat(courseCredit);
  const totalNumber = 100 * parsedCredit;
  let requiredMarks = totalNumber;
  const parsedTargetGpa = parseFloat(targetGpa);
  
  if (parsedTargetGpa === 4) {
    requiredMarks = 80 * parsedCredit;
  } else if (parsedTargetGpa === 3.75) {
    requiredMarks = 75 * parsedCredit;
  } else if (parsedTargetGpa === 3.5) {
    requiredMarks = 70 * parsedCredit;
  } else if (parsedTargetGpa === 3.25) {
    requiredMarks = 65 * parsedCredit;
  } else if (parsedTargetGpa === 3.0) {
    requiredMarks = 60 * parsedCredit;
  }
  
  const newCourse = {
    id: courseCode, // simple id generation
    name: courseName,
    code: courseCode,
    ctNumber: parseInt(ctNumber),
    courseCredit: parseFloat(courseCredit),
    targetGpa: parseFloat(targetGpa),
    requiredMarks: requiredMarks,
    studyPlan: studyPlan
  };
  
  setCourses([...courses, newCourse]);
  // Reset the form fields
  setEnrollmentForm({ courseName: '', courseCode: '', targetGpa: '', courseCredit: '', ctNumber: '' });
};



  // CGPA data
  const cgpaData = {
    labels: ['Level 1 Term 1', 'Level 1 Term 2', 'Level 2 Term 1'],
    datasets: [
      {
        label: 'CGPA Progression',
        data: [3.5, 3.75, 3.85],
        borderColor: 'rgb(79, 70, 229)',
        tension: 0.1,
      },
    ],
  };

  // Table configuration
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('name', {
      header: 'Course Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('code', {
      header: 'Course Code',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('ctNumber', {
      header: 'CT Number',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('targetGpa', {
      header: 'Target GPA',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('requiredMarks', {
      header: 'Required Marks',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('studyPlan', {
      header: 'Study Plan',
      cell: info => info.getValue() || "Maintain regular study hours and review lecture notes frequently.",
    }),
  ];
  

  const table = useReactTable({
    data: courses,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

      if (!storedUser) {
        console.log("No logged-in user found, redirecting to login...");
        navigate("/login");  // Redirect to login if no user is found
        return;
      }

      setUserProfile(storedUser);  // Set user profile from localStorage
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");  // Clear stored user
    navigate("/login");  // Redirect to login
  };


  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          department: profileForm.department,
          level: parseInt(profileForm.level),
          term: parseInt(profileForm.term),
          updated_at: new Date()
        });

      if (error) throw error;
      await fetchUserProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.course && newTask.deadline) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          ...newTask,
          completed: false,
        },
      ]);
      setNewTask({ title: '', course: '', deadline: '' });
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {!userProfile?.department && (
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <h3 className="text-yellow-800 font-medium">Complete Your Profile</h3>
                <p className="text-yellow-700 text-sm mt-1">Please update your department, level, and term information.</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Current CGPA</h3>
                  <BarChart2 className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-3xl font-bold text-indigo-600 mt-2">3.85</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Courses</h3>
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-3xl font-bold text-indigo-600 mt-2">{courses.length}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Target GPA</h3>
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-3xl font-bold text-indigo-600 mt-2">4.00</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Pending Tasks</h3>
                  <Calendar className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-3xl font-bold text-indigo-600 mt-2">
                  {tasks.filter(task => !task.completed).length}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Course Overview</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    {table.getHeaderGroups().map(headerGroup => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                          <th
                            key={header.id}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {table.getRowModel().rows.map(row => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                          <td
                            key={cell.id}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Update Profile</h2>
            <form onSubmit={updateProfile} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  value={profileForm.department}
                  onChange={(e) => setProfileForm({ ...profileForm, department: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select Department</option>
                  <option value="CSE">Computer Science & Engineering</option>
                  <option value="EEE">Electrical & Electronic Engineering</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="CE">Civil Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Level</label>
                <select
                  value={profileForm.level}
                  onChange={(e) => setProfileForm({ ...profileForm, level: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select Level</option>
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                  <option value="4">Level 4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Term</label>
                <select
                  value={profileForm.term}
                  onChange={(e) => setProfileForm({ ...profileForm, term: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select Term</option>
                  <option value="1">Term 1</option>
                  <option value="2">Term 2</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update Profile
              </button>
            </form>
          </div>
        );

        case 'courses':
  return (
    <div className="space-y-6">
      {/* Enroll in Course Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Enroll in Course</h2>
        <form onSubmit={handleEnrollCourse} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                type="text"
                value={enrollmentForm.courseName}
                onChange={(e) => setEnrollmentForm({ ...enrollmentForm, courseName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter course name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Code</label>
              <input
                type="text"
                value={enrollmentForm.courseCode}
                onChange={(e) => setEnrollmentForm({ ...enrollmentForm, courseCode: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter course code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Target GPA</label>
              <input
                type="number"
                min="0"
                max="4"
                step="0.01"
                value={enrollmentForm.targetGpa}
                onChange={(e) => setEnrollmentForm({ ...enrollmentForm, targetGpa: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter target GPA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Credit</label>
              <input
                type="number"
                min="0"
                value={enrollmentForm.courseCredit}
                onChange={(e) => setEnrollmentForm({ ...enrollmentForm, courseCredit: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter course credit"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CT Number</label>
              <input
                type="number"
                min="0"
                value={enrollmentForm.ctNumber}
                onChange={(e) => setEnrollmentForm({ ...enrollmentForm, ctNumber: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter CT number"
              />
            </div>
          </div>
  
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enroll Course
          </button>
        </form>
      </div>
  
      {/* Enrolled Courses Table (remains unchanged, but ensure you include columns for courseCredit and requiredMarks if desired) */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

        

      case 'cgpa':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">CGPA Progression</h2>
            <div className="h-96">
              <Line data={cgpaData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Task Management</h2>

              <form onSubmit={addTask} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Task Title"
                    className="rounded-md border border-gray-300 px-4 py-2"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  />
                  <select
                    className="rounded-md border border-gray-300 px-4 py-2"
                    value={newTask.course}
                    onChange={(e) => setNewTask({ ...newTask, course: e.target.value })}
                  >
                    <option value="">Select Course</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.code}>{course.name}</option>
                    ))}
                  </select>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      className="rounded-md border border-gray-300 px-4 py-2 flex-1"
                      value={newTask.deadline}
                      onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                      <PlusCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </form>

              <div className="space-y-4">
                {tasks.map(task => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
                      }`}
                  >
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className={`${task.completed ? 'text-green-500' : 'text-gray-400'
                          } hover:text-green-600`}
                      >
                        <CheckCircle2 className="h-5 w-5" />
                      </button>
                      <div>
                        <h3 className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                          }`}>
                          {task.title}
                        </h3>
                        <p className="text-sm text-gray-500">{task.course} • Due {task.deadline}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen shadow-md">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold">CUET Study Plan</span>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm rounded-md ${activeTab === 'overview'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm rounded-md ${activeTab === 'profile'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <UserCircle className="h-5 w-5" />
                <span>Profile</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm rounded-md ${activeTab === 'courses'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <BookOpen className="h-5 w-5" />
                <span>Courses</span>
              </button>

              <button
                onClick={() => setActiveTab('cgpa')}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm rounded-md ${activeTab === 'cgpa'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <BarChart2 className="h-5 w-5" />
                <span>CGPA Tracker</span>
              </button>

              <button
                onClick={() => setActiveTab('tasks')}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm rounded-md ${activeTab === 'tasks'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Tasks</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 px-4 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
