import React from 'react';
import ProfileComponent from "./profile/ProfileComponent"

function App() {
  return (
    <div className="app">
      <header className="app-profile">
        <ProfileComponent name="BELGUESMI Henda" bio="Belguesmi a ete née à kalaa khesba le Kef"
        profession="comptable"   />   
     </header>
    </div>
  )
}

export default App;
