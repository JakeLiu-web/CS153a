import React from 'react';

class PhonePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      callStatus: '',
    };
  }

  handlePhoneNumberChange = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleCall = () => {
    const { phoneNumber } = this.state;

    if (phoneNumber) {
      this.setState({ callStatus: `Calling ${phoneNumber}...` });

      // Simulating a call by clearing the call status after 3 seconds
      setTimeout(() => {
        this.setState({ callStatus: '' });
      }, 3000);
    }
  };

  render() {
    const { phoneNumber, callStatus } = this.state;
    const { navigateTo } = this.props;

    return (
      <div>
        <h1>Phone</h1>
        <div className="phone">
          <input type="text" value={phoneNumber} onChange={this.handlePhoneNumberChange} placeholder="Enter phone number" />
          <button onClick={this.handleCall}>Call</button>
          <p>{callStatus}</p>
        </div>
        <button onClick={() => navigateTo('Home')}>Back to Home</button>
      </div>
    );
  }
}

export default PhonePage;
