import React from "react";
import TeamMember from "./components/TeamMembers";
import "./App.css";

function App() {
  return (
    <div class="app">
      <h1>Notre équipe</h1>
      <div class="grille">
        <TeamMember
          nom="Alice Dupont"
          metier="Développeuse Front-end"
          photo="https://cdn.pixabay.com/photo/2015/10/29/08/23/girl-1011915_1280.jpg"
        />

        <TeamMember
          nom="Lucas Martin"
          metier="Développeur Back-end"
          photo="https://thumbs.dreamstime.com/b/sourire-beau-de-jeune-homme-58604690.jpg"
        />

        <TeamMember
          nom="Sofia Bernard"
          metier="UX/UI Designer"
          photo="https://tse3.mm.bing.net/th/id/OIP.RA9D6OYt0ZnqVzcUeGheAwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        />
      </div>
    </div>
  );
}
export default App;
