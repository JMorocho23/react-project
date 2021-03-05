import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faClone, faBars } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";

const Card = ({ name, selectAll, isDnD }) => {
  const [date, handleDateChange] = useState(new Date());
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectAll) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectAll]);

  const renderDate = () => {
    return (
      <div className="col-4 col-md-4 col-sm-4 pb-3 text-center align-self-center">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
    );
  };

  const renderDnD = () => {
    if (isDnD) {
      return (
        <div className="text-center align-self-center">
          <FontAwesomeIcon
            className="mr-3 selected-icon"
            size="2x"
            icon={faBars}
          />
        </div>
      );
    }
  };

  const renderSelected = () => {
    if (selected) {
      return (
        <div className="row my-2 ">
          <div className="col d-inline-flex  flex-wrap selected">
          {renderDnD()}
          <button
            onClick={() => {
              setSelected(false);
            }}
            className="btn-card"
          >
            <div className="text-center align-self-center d-none d-sm-block ">
              <FontAwesomeIcon
                className="mr-3 selected-icon"
                size="2x"
                icon={faCircle}
              />
            </div>

            <div className="">
              <div className="card-selected">
                <div className="card-body">
                  <div className="row">
                    <div className="col text-left">
                      <h3 className="text-muted">{name}</h3>
                      <a href="/#">View Builder</a>
                    </div>
                    <div className="col text-center align-self-center">
                      <FontAwesomeIcon
                        className="mr-3 card-icon-selected"
                        size="2x"
                        icon={faClone}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          {renderDate()}
            </div>
        </div>
      );
    } else {
      return (
        <div className="row my-2">
          <div className="col col d-inline-flex flex-wrap">
          {renderDnD()}
          <button
            onClick={() => {
              setSelected(true);
            }}
            className="btn-card"
          >
            <div className="text-center align-self-center d-none d-sm-block">
              <FontAwesomeIcon
                className="mr-3 icon"
                size="2x"
                icon={faCircle}
              />
            </div>
            <div className="">
              <div className="card">  
                <div className="card-body">
                  <div className="row">
                    <div className="col text-left">
                      <h3 className="text-muted">{name}</h3>
                      <a href="/#">View Builder</a>
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
          </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container-fluid">
      {renderSelected()}
    </div>
  );
};

export default Card;
