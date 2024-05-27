// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import paramedic from "./sing-up-images/Ems paramedics team provide medical help to injured patient on the way to hospital emergency care assistants using a defibrillator and ventilation mask to bring the man back to life in an ambulance.png";
// import rectangle from "./sing-up-images/Rectangle 148.png";
// import logo from "../pagess/sing-up-images/saveme logo 1.png";

// function Signin() {
//   const [formData, setFormData] = useState({
//     email: '',
//     age: '',
//     gender: ''
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await axios.post('https://es-be-5-save-me.onrender.com/api/v1/user/signin', formData);
//       if (response.data.success) {
//         setSuccess('Sign in successful!');
//         navigate('/login');
//       } else {
//         setError(response.data.message || 'Sign in failed');
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="sign-in">
//       <div className="inner-sign-in">
//         <div className="image-section-sign-in">
//           <img id="para-2" src={paramedic} alt="" />
//           <img id="rect-2" src={rectangle} alt="" />
//           <img id="log-2" src={logo} alt="" />
//           <h2>Save!me</h2>
//         </div>
//         <div className="sign-in-details">
//           <h1>
//             Provide the following details to get better services on our app
//           </h1>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="number"
//                 id="age"
//                 name="age"
//                 min="1"
//                 max="120"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 id="gender"
//                 name="gender"
//                 placeholder="Gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             {success && <p className="success-message">{success}</p>}
//             <button className="sign-in-button" type="submit">
//               Sign In
//             </button>
//             <p>
//               Already have an account,{" "}
//               <Link to="/login">
//                 <span id="here-2">click here</span>
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import paramedic from "./sing-up-images/Ems paramedics team provide medical help to injured patient on the way to hospital emergency care assistants using a defibrillator and ventilation mask to bring the man back to life in an ambulance.png";
// import rectangle from "./sing-up-images/Rectangle 148.png";
// import logo from "./sing-up-images/saveme logo 1.png";

// function Signin() {
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     email: '',
//     age: '',
//     gender: '',
//     ...location.state // Pre-fill form data from the Signup page
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (location.state) {
//       setFormData((prevData) => ({
//         ...prevData,
//         name: location.state.name || '',
//         phoneNumber: location.state.phoneNumber || ''
//       }));
//     }
//   }, [location.state]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!validateEmail(formData.email)) {
//       setError('Invalid email format');
//       return;
//     }

//     try {
//       const response = await axios.post('https://es-be-5-save-me.onrender.com/api/v1/user/signin', formData);
//       if (response.data.success) {
//         setSuccess('Sign in successful!');
//         navigate('/login');
//       } else {
//         setError(response.data.message || 'Sign in failed');
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="sign-in">
//       <div className="inner-sign-in">
//         <div className="image-section-sign-in">
//           <img id="para-2" src={paramedic} alt="" />
//           <img id="rect-2" src={rectangle} alt="" />
//           <img id="log-2" src={logo} alt="" />
//           <h2>Save!me</h2>
//         </div>
//         <div className="sign-in-details">
//           <h1>
//             Provide the following details to get better services on our app
//           </h1>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="number"
//                 id="age"
//                 name="age"
//                 min="1"
//                 max="120"
//                 placeholder="Age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 id="gender"
//                 name="gender"
//                 placeholder="Gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             {success && <p className="success-message">{success}</p>}
//             <button className="sign-in-button" type="submit">
//               Sign In
//             </button>
//             <p>
//               Already have an account,{" "}
//               <Link to="/login">
//                 <span id="here-2">click here</span>
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;
