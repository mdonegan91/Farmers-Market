import React from "react";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

//  function LocationList(){
//   return (
//     <React.Fragment>
//       {marketSchedule.map((location, index) =>
//         <Location day = {location.day}
//         location = {location.location}
//         hours = {location.hours}
//         booth = {location.booth}
//         key={index}/>
//       )}
//     </React.Fragment>
//   );
//  }

//  export default LocationList;

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayIndex: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ dayIndex: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Market Schedule</h2>
        <br />
        <select
          value={this.state.dayIndex}
          onChange={this.handleChange}
          class="btn btn-primary dropdown-toggle"
        >
          <option value="0">Sunday</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="0" disabled>
            Friday
          </option>
          <option value="5">Saturday</option>
        </select>
        <br/><br/>
        <h4><strong>Hours: </strong> {marketSchedule[this.state.dayIndex].hours}</h4>
        <h4>
          <strong>Location: </strong> <em>{marketSchedule[this.state.dayIndex].location}</em>
        </h4>
        <h4><strong>Booth: </strong> {marketSchedule[this.state.dayIndex].booth}</h4>
      </React.Fragment>
    );
  }
}

export default Schedule;
