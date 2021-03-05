import React, { useState } from "react";
import Card from "./Card";
import { Draggable } from "react-beautiful-dnd";

const Schedule = ({ lists, name, isDnD }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [btnText, setBtnText] = useState(`Select all in ${name}`);

  return (
    <div className="col-md-9 col-lg-10 col-sm-12">
      <div className="d-flex align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="col">
          <h2 className="section-title">{name}</h2>
        </div>
        <div className="col">
          <button
            onClick={() => {
              if (selectAll) {
                setSelectAll(false);
                setBtnText(`Select all in ${name}`);
              } else {
                setSelectAll(true);
                setBtnText(`Unselect all in ${name}`);
              }
            }}
            className="btn-select"
          >
            {btnText}
          </button>
        </div>
        <div className="col">
          <p className="section-date">Due Date (Optional)</p>
        </div>
      </div>
      {lists.map((item, index) => {
        if (isDnD) {
          return (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Card
                    key={item.id}
                    name={item.name}
                    selectAll={selectAll}
                    isDnD={true}
                  />
                </div>
              )}
            </Draggable>
          );
        } else {
          return (
            <Card
              key={item.id}
              name={item.name}
              selectAll={selectAll}
              isDnD={false}
            />
          );
        }
      })}
    </div>
  );
};

export default Schedule;
