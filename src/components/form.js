import React from "react";
import "../App.css";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.loadWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <div>
            <button className="button">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
