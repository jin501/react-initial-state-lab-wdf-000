const React = require('react');


class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return (
      <div>
      <p>{this.state.secondsLeft ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!`}</p>
      </div>
    );
  }
}


module.exports = Bomb
