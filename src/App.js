import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import initialData from "./components/initial-data";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Route, Switch } from "react-router-dom";
class App extends Component {

  state = initialData;

  onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(this.state.listSI);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    this.setState({
      listSI: items
    });
  };

  render() {
    return (
      <div className="App container-fluid">
        <h2 className="text-center py-4 page-title">Select Builder Schedule - 2019 Fall Cohort</h2>
        <div className="row">
            <Navbar></Navbar>
 
          <div className="col-md-9 ml-sm-auto col-lg-10 px-0">
          <Switch>
            <Route exact path="/">
                <Schedule lists={this.state.listIdeation} name="Ideation" isDnD={false} />
                <Schedule lists={this.state.listValidation} name="Validation" isDnD={false} />
                <Schedule lists={this.state.listSI} name="Social Innovation" isDnD={false} />
            </Route>
            <Route path="/social">
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="lists">
                  {(provided) => (
                    <div
                      className="lists"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <Schedule
                        lists={this.state.listSI}
                        name="Social Innovation"
                        isDnD={true}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </Route>
          </Switch>
          </div>
        </div>
        <div className="row text-right my-3">
          <div className="col">
            <button className="btn-cancel">cancel</button>
            <button className="btn-submit">use this builder schedule</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;