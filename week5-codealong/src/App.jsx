import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase.js";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Step 2: listen for sign-in / sign-out. The cleanup stops listening.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  // Step 3: register, log in, log out. Each returns a Promise, so we use async/await
  async function run(action) {
    setError("");
    try {
      await action();
    } catch (err) {
      setError(err.code); // e.g. auth/weak-password
    }
  }

  return (
    <>
      <h1>Week 5 code-along: Firebase Auth</h1>
      {user ? (
        <div className="box">
          <p className="ok">Signed in as {user.email}</p>
          <p>uid: {user.uid}</p>
          <button onClick={() => signOut(auth)}>Log out</button>
        </div>
      ) : (
        <div className="box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password (6+ characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() =>
              run(() => createUserWithEmailAndPassword(auth, email, password))
            }
          >
            Register
          </button>
          <button
            onClick={() =>
              run(() => signInWithEmailAndPassword(auth, email, password))
            }
          >
            Log in
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </>
  );
}

export default App;
