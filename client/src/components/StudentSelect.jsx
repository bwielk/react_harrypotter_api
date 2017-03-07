var React = require('react');

var StudentSelect = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined}
  },

  render: function(){

    var studentNodes = this.props.students.map(function(student, index){
      return <option value={index} key = {index}>{student.name}</option>
    });

    return (
      <select id="student-select" value = {this.state.selectedIndex}
        onChange = {this.handleSelectChange}>
        {studentNodes}
      </select>
    );
  },

  handleSelectChange: function(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    var selectedStudent = this.props.students[newIndex];
    this.props.didSelectStudent(selectedStudent);
  }
});

module.exports = StudentSelect;
