import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import HomePage from "./HomePage";
import ArtForm from "./ArtForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <NavigationBar user={user} setUser={setUser} />
              <HomePage user={user} />
              <ArtForm user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
