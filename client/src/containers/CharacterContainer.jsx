var React = require('react');
var StudentSelect = require('../components/StudentSelect.jsx');
var StudentDetail = require('../components/StudentDetail.jsx');

var CharacterContainer = React.createClass({
  componentDidMount: function(){
    var url = "http://hp-api.herokuapp.com/api/characters/students";
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function(){
      if (request.status !== 200) return;
      var data = JSON.parse(request.responseText);
      this.setState({students: data, focusStudent: data[0]});
    }.bind(this);

    request.send();
  },

  getInitialState: function(){
    return {students: [], focusStudent: null};
  },

  render: function(){
    return (
      <div id="container">
        <StudentSelect id="student-select-wrapper" students = {this.state.students} didSelectStudent = {this.didSelectStudent} />
        <StudentDetail id="student-detail-wrapper" student = {this.state.focusStudent} />
      </div>
    );
  },

  didSelectStudent: function(student){
    this.setState({focusStudent: student});
  }
});

module.exports = CharacterContainer;
