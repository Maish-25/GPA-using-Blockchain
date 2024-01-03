



import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";

// Define the images array at the top of the component
const images = [
  { src: image1, passwordChar: "A" },
  { src: image2, passwordChar: "B" },
  { src: image3, passwordChar: "C" },
  { src: image4, passwordChar: "D" },
  { src: image5, passwordChar: "E" },
  { src: image6, passwordChar: "F" },
  { src: image7, passwordChar: "G" },
  { src: image8, passwordChar: "H" },
  { src: image9, passwordChar: "I" },
];

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [passwordChars, setPasswordChars] = React.useState([]);
  const navigate = useNavigate();

  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);

  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();

    setAccounts(accounts);
    setAuth(auth);
  };

  const login = async () => {
    const enteredPassword = passwordChars.join("");

    if (!email || !enteredPassword) {
      alert("Please fill all details");
      return;
    }

    try {
      const res = await auth.methods.usersList(email).call();

      if (res.password === enteredPassword) {
        localStorage.setItem("email", email);
        localStorage.setItem("account", accounts);
        navigate("/Home");
      } else {
        alert("Wrong user credentials or please sign up");
        setPasswordChars([]);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    loadWeb3();
  }, []);

  React.useEffect(() => {
    loadAccounts();
  }, []);

  // Function to shuffle array randomly
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the images array randomly
  const shuffledImages = React.useMemo(() => shuffleArray([...images]), []);

  const handleImageClick = (clickedChar) => {
    if (passwordChars.length < 10) {
      setPasswordChars([...passwordChars, clickedChar]);
    }
  };

  const erasePassword = () => {
    setPasswordChars([]);
  };

  const rootDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const input = {
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    outline: "none",
    border: "2px solid grey",
    fontSize: 17,
  };

  const button = {
    width: 325,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    cursor: "pointer",
    fontSize: 17,
    color: "white",
    backgroundColor: "#9D27CD",
    border: "none",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s",
  };

  const handleImageHover = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleImageLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  const imageContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    justifyContent: "center",
  };

  return (
    <div style={rootDiv}>
      <div style={imageContainerStyle}>
        {shuffledImages.map((imageData, index) => (
          <img
            key={index}
            src={imageData.src}
            style={imageStyle}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(imageData.passwordChar)}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
        ))}
        
      </div>
      <input
        style={input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          style={input}
          value={passwordChars.join("")}
          type="password"
          placeholder="Password"
          readOnly
        />
        <button style={button} onClick={erasePassword}>
          Erase
        </button>
      </div>
      <button style={button} onClick={login}>
        Sign In
      </button>

      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/Signup");
        }}
      >
        Create a new account
      </span>
    </div>
  );
}







//S!
// import * as React from "react";
// import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
// import { useNavigate } from "react-router-dom";
// import { FaTimes } from "react-icons/fa"; // Import the erase icon from react-icons/fa
// import image1 from "./images/image1.jpg";
// import image2 from "./images/image2.jpg";
// import image3 from "./images/image3.jpg";
// import image4 from "./images/image4.jpg";
// import image5 from "./images/image5.jpg";
// import image6 from "./images/image6.jpg";
// import image7 from "./images/image7.jpg";
// import image8 from "./images/image8.jpg";
// import image9 from "./images/image9.jpg";

// // Define the images array at the top of the component
// const images = [
//   { src: image1, passwordChar: "A" },
//   { src: image2, passwordChar: "B" },
//   { src: image3, passwordChar: "C" },
//   { src: image4, passwordChar: "D" },
//   { src: image5, passwordChar: "E" },
//   { src: image6, passwordChar: "F" },
//   { src: image7, passwordChar: "G" },
//   { src: image8, passwordChar: "H" },
//   { src: image9, passwordChar: "I" },
// ];

// export default function SignIn() {
//   const [email, setEmail] = React.useState("");
//   const [passwordChars, setPasswordChars] = React.useState([]);
//   const navigate = useNavigate();

//   const [accounts, setAccounts] = React.useState(null);
//   const [auth, setAuth] = React.useState(null);

//   const loadAccounts = async () => {
//     let { auth, accounts } = await loadBlockchainData();

//     setAccounts(accounts);
//     setAuth(auth);
//   };

//   const login = async () => {
//     const enteredPassword = passwordChars.join("");

//     if (!email || !enteredPassword) {
//       alert("Please fill all details");
//       return;
//     }

//     try {
//       const res = await auth.methods.usersList(email).call();

//       if (res.password === enteredPassword) {
//         localStorage.setItem("email", email);
//         localStorage.setItem("account", accounts);
//         navigate("/Home");
//       } else {
//         alert("Wrong user credentials or please sign up");
//         setPasswordChars([]);
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   React.useEffect(() => {
//     loadWeb3();
//   }, []);

//   React.useEffect(() => {
//     loadAccounts();
//   }, []);

//   // Function to shuffle array randomly
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   // Shuffle the images array randomly
//   const shuffledImages = React.useMemo(() => shuffleArray([...images]), []);

//   const handleImageClick = (clickedChar) => {
//     if (passwordChars.length < 10) {
//       setPasswordChars([...passwordChars, clickedChar]);
//     }
//   };

//   const erasePassword = () => {
//     setPasswordChars([]);
//   };

//   const rootDiv = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//   };

//   const input = {
//     width: 300,
//     padding: 10,
//     margin: 10,
//     borderRadius: 10,
//     outline: "none",
//     border: "2px solid grey",
//     fontSize: 17,
//   };

//   const button = {
//     width: 325,
//     padding: 10,
//     borderRadius: 10,
//     margin: 10,
//     cursor: "pointer",
//     fontSize: 17,
//     color: "white",
//     backgroundColor: "#9D27CD",
//     border: "none",
//   };

//   const imageStyle = {
//     width: "100px",
//     height: "100px",
//     objectFit: "cover",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "transform 0.2s",
//   };

//   const handleImageHover = (e) => {
//     e.target.style.transform = "scale(1.1)";
//   };

//   const handleImageLeave = (e) => {
//     e.target.style.transform = "scale(1)";
//   };

//   const imageContainerStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "10px",
//     justifyContent: "center",
//   };

//   const eraseIconStyle = {
//     fontSize: 20,
//     marginLeft: 5,
//     cursor: "pointer",
//   };

//   return (
//     <div style={rootDiv}>
//       <div style={imageContainerStyle}>
//         {shuffledImages.map((imageData, index) => (
//           <img
//             key={index}
//             src={imageData.src}
//             style={imageStyle}
//             alt={`Image ${index + 1}`}
//             onClick={() => handleImageClick(imageData.passwordChar)}
//             onMouseEnter={handleImageHover}
//             onMouseLeave={handleImageLeave}
//           />
//         ))}

//       </div>
//       <input
//         style={{ ...input, textAlign: "center" }}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         type="text"
//       />
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <input
//           style={{ ...input, textAlign: "center" }}
//           value={passwordChars.join("")}
//           type="password"
//           placeholder="Password"
//           readOnly
//         />
//         <FaTimes style={eraseIconStyle} onClick={erasePassword} />
//       </div>
//       <button style={button} onClick={login}>
//         Sign In
//       </button>

//       <span
//         style={{ cursor: "pointer" }}
//         onClick={() => {
//           navigate("/Signup");
//         }}
//       >
//         Create a new account
//       </span>
//     </div>
//   );
// }

