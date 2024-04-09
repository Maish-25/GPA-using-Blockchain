// import "./App.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignIn from "./Screens/Signin";
// import SignUp from "./Screens/Signup";
// import Home from "./Screens/Home";
// import CrowdfundingInterface from "./Screens/CrowdfundingInterface";

// function App() {
//   const email = localStorage.getItem("email");
 
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<SignIn />} />
//           <Route path="/Signup" element={<SignUp />} />
//           <Route
//             path="/Home"
//             element={email ? <Home  /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// App.js
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";
import CardSection from "./Sections/CardSection";
import ChartSection from "./Sections/ChartSection";
import Footer from "./components/Footer";
import Header from "./Sections/Header";
import MessagingSection from "./Sections/MessagingSection";
import FAQSection from "./Sections/FAQSection";
import PaymentSection from "./Sections/PricingSection";
import { OuterLayout } from "./styles/Layout";
import aos from 'aos';
import 'aos/dist/aos.css';
import ScrolledButton from "./components/ScrolledButton";

function App() {
  const email = localStorage.getItem("email");

  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route
            path="/Home"
            element={email ? <Header/> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      <OuterLayout>
        <main>
          <CardSection />
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
          <FAQSection />
        </main>
      </OuterLayout>
      <Footer />
      <ScrolledButton />

    </div>
  );
}

export default App;



// import React,{useEffect} from "react";
// import "./App.css";
// import CardSection from "./Sections/CardSection";
// import ChartSection from "./Sections/ChartSection";
// import Footer from "./components/Footer";
// import Header from "./Sections/Header";
// import MessagingSection from "./Sections/MessagingSection";
// import FAQSection from "./Sections/FAQSection";
// import PaymentSection from "./Sections/PricingSection";
// import { OuterLayout } from "./styles/Layout";
// import aos from 'aos'
// import 'aos/dist/aos.css'
// import ScrolledButton from "./components/ScrolledButton";

// function App() {


//   useEffect(()=>{
//     aos.init({duration: 3000})
//   },[])

//   return (
//     <div className="App">
//       <Header />
//       <OuterLayout>
//         <main>
//           <CardSection />
//           <ChartSection />
//           <MessagingSection />
//           <PaymentSection />
//           <FAQSection />
//         </main>
//       </OuterLayout>
//       <Footer />
//       <ScrolledButton />
//     </div>
//   );
// }

// export default App;
