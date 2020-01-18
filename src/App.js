import React from 'react';
import BeeManagerTable from "./BeeManagerTable";

function App() {
  return (
    <div>
      <button
        onClick={() => {
          fetch('/bee-manager/', {
            method: 'GET'
          }).then((res) => {
            return res.json();
          }).then((message) => {
            console.log(message);
          }).catch((err) => {
            console.log("Failed to retrieve current state from Express API ", err);
          });
        }}
      >Get all states</button>
      <button
        onClick={() => {
          fetch('/bee-manager/', {
            method: 'PUT',
            body: JSON.stringify({
              id: '123',
              speed: 40,
              altitude: 60
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(() => {
            console.log("API State update successful");
          }).catch((err) => {
            console.log("Failed to update state to Express API ", err);
          })
        }}
      >Update state</button>
      <button
        onClick={() => {
          fetch('/bee-manager/', {
            method: 'POST',
            body: JSON.stringify({
              id: '123',
              speed: 20,
              altitude: 20
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(() => {
            console.log("API State addition successful");
          }).catch((err) => {
            console.log("Failed to add new state to Express API ", err);
          })
        }}
      >Add new state</button>
      <button
        onClick={() => {
          fetch('/bee-manager/', {
            method: 'DELETE',
            body: JSON.stringify({
              id: '123'
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(() => {
            console.log("API State deletion successful");
          }).catch((err) => {
            console.log("Failed to delete the state in Express API ", err);
          })
        }}
      >Delete state</button>
      <BeeManagerTable/>
    </div>
  );
}

export default App;
