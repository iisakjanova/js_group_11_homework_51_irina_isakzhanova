import React from 'react';

class Numbers extends React.Component {
    state = {
        numbers: []
    }

    constructor(props) {
        super(props);
        this.state = {
            numbers: this.getNumbers()
        }
    }

    getNumbers() {
        let numbersArray = [];

        while (numbersArray.length < 5) {
            const number = Math.floor(Math.random() * 32 + 5);

            if (!numbersArray.includes(number)) {
                numbersArray.push(number);
            }
        }

        return numbersArray.sort((a, b) => a > b ? 1 : -1);
    }

    render() {
        return (
            <div>
                <div className="numbers">
                    {this.state.numbers.map((item) => (
                        <div className="number" key={item}>{item}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Numbers;