import React from 'react';

class Numbers extends React.Component {
    state = {
        numbers: []
    };

    render() {
        return (
            <div className="numbers">
                {this.state.numbers.map((item) => (
                    <div className="number">{item}</div>
                ))}
            </div>
        );
    }
}

export default Numbers;