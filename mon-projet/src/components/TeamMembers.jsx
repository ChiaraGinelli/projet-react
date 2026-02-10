function TeamMember(props) {
  return (
  <div class="team-member">
    <img src={props.photo} alt={props.nom} width="100px"/>
    <h2>{props.nom}</h2>
    <h3>{props.metier}</h3>
  </div>)
}
export default TeamMember