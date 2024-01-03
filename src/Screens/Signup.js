

import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";
import image1 from "./images/image1.jpg"; // Import images from the "images" folder
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";

export default function SignUp() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordChars, setPasswordChars] = React.useState([]);

  const navigate = useNavigate();

  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);

  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();

    setAccounts(accounts);
    setAuth(auth);
  };

  const signUp = async () => {
    if (!username || !email || !password) {
      alert("Please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      await auth.methods.createUser(username, email, password).send({ from: accounts });

      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  React.useEffect(() => {
    loadWeb3();
  }, []);

  React.useEffect(() => {
    loadAccounts();
  }, []);

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

  const handleImageClick = (clickedChar) => {
    if (passwordChars.length < 10) {
      setPasswordChars([...passwordChars, clickedChar]);
      setPassword((prevPassword) => prevPassword + clickedChar);
    }
  };

  const erasePassword = () => {
    setPasswordChars([]);
    setPassword("");
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
      />
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
          readOnly // Disable user input for the password field
        />
        <button style={button} onClick={erasePassword}>
          Erase
        </button>
      </div>
      <button style={button} onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
}


