import React from 'react';
import { connect } from 'react-redux';
import { TIME_RANGE_MIN, TIME_RANGE_MAX } from '../constants';
import dateFormat from 'dateformat';
import leftPad from 'left-pad'; // :D
import Appointment from '../components/Appointment';

const timeListLength = TIME_RANGE_MAX - TIME_RANGE_MIN + 1;
const timeList = Array.from({ length: timeListLength }).map((_, index) => {
  const hour = TIME_RANGE_MIN + index;
  return `${leftPad(hour, 2, 0)}:00`;
});

let Overview = ({ appointments }) => {
  const now = new Date();
  const today = dateFormat(now, 'd mmmm yyyy').toLowerCase();
  return (
    <div className="overview">
      <header>{today}</header>
      <article>
        <ul>
          {timeList.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
        <div className="appointment-container">
          {appointments.map((data, index) => {
            return <Appointment key={index} {...data} />
          })}
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = ({ appointments }) => {
  return {
    appointments,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      //dispatch(toggleTodo(id))
    }
  }
};

Overview = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default Overview;
