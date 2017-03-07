var React = require('react');

var StudentDetail = function(props){
  if(!props.student){
    return <h4>No student selected.</h4>
  }
  return (
    <div id="student-details">
      <img src={props.student.image}/>
      <div id="student-detail-text">
        <h3>{props.student.name}</h3>
        <ul>
          <li>House: {props.student.house}</li>
          <li>Patronus charm: {props.student.patronus.substring(0,1).toUpperCase() +
               props.student.patronus.substring(1,props.student.patronus.length)}</li>
          <li>(Played by: {props.student.actor})</li>
        </ul>
      </div>
    </div>
  );
}

module.exports = StudentDetail;
