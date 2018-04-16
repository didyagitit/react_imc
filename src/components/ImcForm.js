import React from 'react';
import NumberInput from './NumberInput';
import ImcResult from './ImcResult';
import ImcWarning from './ImcWarning';

class ImcForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      height: 0,
      weight: 0,
      warning: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();

    const weight = this.state.weight;
    const height = this.state.height;

    if (height && weight) {
      const imc = (weight / (height * height)).toFixed(2);
      this.setState({result: imc, warning: false});
    } else {
      this.setState({result: null, warning: true});
    }
  }

  render() {
    return (
      <form className="form" role="form">
        <div className="row">
          <div className="col-12">
            <ImcResult result={this.state.result} />
            <ImcWarning warning={this.state.warning} />
          </div>
        </div>
        <NumberInput
          name="height"
          label="Height (meters)"
          placeholder={0}
          onChange={this.handleInputChange} />
        <NumberInput
          name="weight"
          label="Weight (kg)"
          placeholder={0}
          onChange={this.handleInputChange} />
        <div className="row">
          <div className="col-12 text-center pt-2">
            <button type="submit" id="get-result" className="btn btn-success" onClick={this.handleClick}>Calculate IMC</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ImcForm;
