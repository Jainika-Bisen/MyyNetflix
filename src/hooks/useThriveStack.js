// src/hooks/useThriveStack.js
import { useEffect } from "react";

export default function useThriveStack() {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://cdn.thrivestack.ai/ts.js";
    // script.async = true;
    // script.setAttribute("data-ts-api-key", "7QHibRGzoc3eCYkV06VWAep/4ykmRh4nQE/gY8mN2g8=");
    // document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

// src/hooks/useThriveStackUser.js
// import { useEffect } from "react";

// export default function useThriveStackUser(userId, userEmail) {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (window.thriveStack && typeof window.thriveStack.setUser === "function") {
//         window.thriveStack.setUser(userId, userEmail);
//         clearInterval(interval);
//         console.log("ThriveStack user set");
//       }
//     }, 300);

//     // Optional: after 5s, stop trying
//     setTimeout(() => clearInterval(interval), 5000);
//   }, [userId, userEmail]);
// }
