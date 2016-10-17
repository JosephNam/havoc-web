import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { updateField } from '../actions/addTodoMenu'

const style = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'

}


let AddTodoMenu = ({
  category, name, description, priority, date, time,
  cancelAddTodo, updateField
}) => {
  const handleCategoryChange = (event, index, value) => {
    updateField('category', value)
  }
  const handlePriorityChange = (event, index, value) => {
    updateField('priority', value)
  }
  const handleNameChange = (event) => {
    updateField('name', event.target.value)
  }
  const handleDescriptionChange = (event) => {
    updateField('description', event.target.value)
  }
  const handleDateChange = (event, date) => {
    updateField('date', date)
  }
  const handleTimeChange = (event, time) => {
    updateField('time', time)
  }
  return (
    <div style={style}>
      <SelectField
        value={category}
        onChange={handleCategoryChange}>
        <MenuItem value={'school'} primaryText='School' />
        <MenuItem value={'work'} primaryText='Work' />
      </SelectField>
      <TextField
        value={name}
        onChange={handleNameChange}
        hintText='Task Name'
        floatingLabelText='Task Name' />
      <TextField
        value={description}
        onChange={handleDescriptionChange}
        hintText='Description'
        floatingLabelText='Description' />
      <SelectField
        value={priority}
        onChange={handlePriorityChange}>
        <MenuItem value={1} primaryText='Low Priority' />
        <MenuItem value={2} primaryText='Medium Priority' />
        <MenuItem value={3} primaryText='High Priority' />
      </SelectField>
      <DatePicker
        value={date}
        onChange={handleDateChange}
        hintText='Due Date' />
      <TimePicker
        value={time}
        onChange={handleTimeChange}
        hintText='Due Time' />
      <RaisedButton label='Create Task' primary />
      <FlatButton
        label='Cancel'
        secondary
        onTouchTap={cancelAddTodo} />
    </div>
  )
}

AddTodoMenu.propTypes = {
  category        : PropTypes.string.isRequired,
  name            : PropTypes.string.isRequired,
  description     : PropTypes.string.isRequired,
  priority        : PropTypes.number.isRequired,
  date            : PropTypes.instanceOf(Date),
  time            : PropTypes.instanceOf(Date),
  cancelAddTodo   : PropTypes.func.isRequired,
  updateField     : PropTypes.func.isRequired
}

export default AddTodoMenu
