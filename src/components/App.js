import React from 'react';
import ReactDOM from 'react-dom';
import ImcForm from './ImcForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card card-outline-secondary">
              <div className="card-header">
                <h3 className="mb-0">IMC Calculator</h3>
              </div>
              <div className="card-body">
                <ImcForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
