import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";

const Schedule = () => {
  const [date, handleDateChange] = useState(new Date());

  const renderDate = () => {
    return (
      <div className="col-5 text-left align-self-center">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
    );
  };

  return (
    <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="col">
          <h2>Ideation</h2>
        </div>
        <div className="col">
          <a href="#">Select all in ideation</a>
        </div>
        <div className="col">
          <p>Due Date (Optional)</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2 text-center align-self-center">
          <FontAwesomeIcon className="mr-3 icon" size="2x" icon={faCircle} />
        </div>
        <div className="col-5">
          <div class="card">
            <div class="card-body">
              <div className="row">
                <div className="col">
                  <h3 className="text-muted">Problem</h3>
                  <a href="#">View Builder</a>
                </div>
                <div className="col text-center align-self-center">
                  <FontAwesomeIcon
                    className="mr-3 card-icon"
                    size="2x"
                    icon={faClone}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderDate()}
      </div>
    </div>
  );
};

export default Schedule;
