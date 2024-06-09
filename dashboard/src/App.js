import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import configuration from "./configuration";
import Table from "./components/Table";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./configuration";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setIsSignedIn(true);
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };

    return (
      <>
        <main>
          <section>
            <div>
              <h2 style={{ textAlign: "center", fontSize: "28px" }}>
                Login Page
              </h2>

              <form
                style={{
                  width: "400px",
                  height: "300px",
                  margin: "auto",
                  border: "1px solid white",
                  backgroundColor: "white",
                  borderRadius: "15px",
                  fontSize: "18px",
                }}
              >
                <div
                  style={{
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <label htmlFor="email-address">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", height: "30px" }}
                  />
                </div>

                <div
                  style={{
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", height: "30px" }}
                  />
                </div>

                <div style={{ margin: "10px", width: "100%" }}>
                  <button
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: "18px",
                      marginTop: "30px",
                    }}
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </div>
              </form>

              {/* <p className="text-sm text-white text-center">
                No account yet? <NavLink to="/signup">Sign up</NavLink>
              </p> */}
            </div>
          </section>
        </main>
      </>
    );
  };
  const DataPage = () => {
    const [data, setData] = useState({});
    const rows = [
      { id: 1, col1: "Hello", col2: "World" },
      { id: 2, col1: "DataGridPro", col2: "is Awesome" },
      { id: 3, col1: "MUI", col2: "is Amazing" },
    ];
    useEffect(() => {
      const database = getDatabase(configuration);

      // List of collections to fetch data from
      const collections = ["CLES", "PINC", "MARTEAUX", "SCIES", "TOURNVIS"];

      // Function to fetch data from a specific collection
      const fetchDataFromCollection = (collectionName) => {
        const collectionRef = ref(database, collectionName);
        onValue(collectionRef, (snapshot) => {
          const dataItem = snapshot.val();
          if (dataItem) {
            const displayItem = Object.values(dataItem).slice(0, 5);
            setData((prevData) => ({
              ...prevData,
              [collectionName]: displayItem,
            }));
          }
        });
      };

      // Fetch data from all collections
      collections.forEach(fetchDataFromCollection);
    }, []);

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Dashboard</h1>
        {Object.keys(data).map((collectionName) => {
          let rowsData = [];
          for (let i in data[collectionName]) {
            rowsData.push({
              id: parseInt(data[collectionName][i].id),
              col0: parseInt(data[collectionName][i].id),
              col1: data[collectionName][i].technicien,
              col2: data[collectionName][i].Date,
            });
          }
          return (
            <div key={collectionName}>
              <h2 style={{ textAlign: "center" }}>{collectionName}</h2>
              <h3 style={{ textAlign: "center" }}>
                nombre de {collectionName} restes: {20 - rowsData.length}
              </h3>
              <Table rowsData={rowsData} />
            </div>
          );
        })}
      </div>
    );
  };
  return <>{isSignedIn == true ? <DataPage /> : <AuthPage />}</>;
}
export default App;
