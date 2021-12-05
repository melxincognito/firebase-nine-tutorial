import "./App.css";
import { auth } from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>click me</button>
    </div>
  );
}

export default App;
