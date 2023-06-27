import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../Store/Context";
import "./Signup.css";

export default function Signup() {
   const history = useHistory();
   const [userName, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");

   const { firebase } = useContext(FirebaseContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then((result) => {
            result.user.updateProfile({ displayName: userName }).then(() => {
               console.log(result);
               firebase
                  .firestore()
                  .collection("Users")
                  .add({
                     id: result.user.uid,
                     usename: userName,
                     phone: phone,
                  })
                  .then(() => {
                     history.push("/login");
                  });
            });
         });
   };

   return (
      <div>
         <div className="signupParentDiv">
            <img width="200px" alt="" height="200px" src={Logo}></img>
            <form onSubmit={handleSubmit}>
               <label htmlFor="fname">Username</label>
               <br />
               <input
                  className="input"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  id="fname"
                  name="name"
                  defaultValue="username"
               />
               <br />
               <label htmlFor="fname">Email</label>
               <br />
               <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  defaultValue="email"
               />
               <br />
               <label htmlFor="lname">Phone</label>
               <br />
               <input
                  className="input"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  name="phone"
                  defaultValue="phone"
               />
               <br />
               <label htmlFor="lname">Password</label>
               <br />
               <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  defaultValue="password"
               />
               <br />
               <br />
               <button>Signup</button>
            </form>
            <a onClick={()=>{
               history.push('/login')
            }}>Login</a>
         </div>
      </div>
   );
}
