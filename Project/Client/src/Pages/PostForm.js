import React, { Component } from 'react';
import axios from 'axios';
import './resources/calc.css';
import './resources/top.css';
import './resources/clock.css';



class PostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            p: '',
            r: '',
            t: '',
            type: '',
            interest: '',
            interest: '',
            intervalId: null
        }
    }
    inc = 1000;

    clock = () => {
        const date = new Date();

        const hours = ((date.getHours() + 11) % 12 + 1);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;

        document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
        document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
        document.querySelector('.second').style.transform = `rotate(${second}deg)`;
    };

    componentDidMount() {
        const intervalId = setInterval(this.clock, this.inc);
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8000/interestCalculation', this.state)
            .then(response => {
                console.log(response['data'])
                if (response['data'] == 'Invalid interest type') {
                    window.alert('Invalid interest type')
                } else if (response['data'] == 'Invalid input type') {
                    window.alert('Invalid value type')
                } 
                 else {
                    this.setState({ interest: response['data'] })
                }
            })
            .catch(error => {
                console.log(error)
            },
            )
    }

    render() {
        const { p, r, t, type } = this.state;
        return (
            <div className='pic'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                {/*Top Bar */}
                <div class="top">
                    <center>
                        <ul>
                            <li>
                                <a href="#">Interest Calculator</a>
                                <ul>
                                    <li><a href="#">simple</a></li>
                                    <li><a href="#">compound</a></li>
                                </ul>
                            </li>
                            <li><a href="#">CAGR</a></li>
                            <li><a href="#">Doubling Time</a></li>
                            <li><a href="#">Purchasing Power</a></li>

                        </ul>
                    </center>
                </div>

                


                {/*form feature */}
                {/* <div style={{ float: 'left'}}> */}
                <div className="container">
                    {/*clock feature */}
                    
                    <form onSubmit={this.submitHandler} className="label">
                        <h1 className="header">Interest Calculator</h1>
                        {/* <div>Simple interest is calculated only on the principal amount, or on that portion of the principal amount that remains. It excludes the effect of compounding. Simple interest can be applied over a time period other than a year, for example, every month.</div> */}
                        <label className="label">Deposit:</label>
                        <input type="text" name="p" value={p} onChange={this.changeHandler} style={{ width: '300px' }} />
                        <label className="label">Interest Rate: (Percentage, %)</label>
                        <input type="text" name="r" value={r} onChange={this.changeHandler} style={{ width: '300px' }} />
                        <label className="label">Deposit Time: (Year)</label>
                        <input type="text" name="t" value={t} onChange={this.changeHandler} style={{ width: '300px' }} />
                        <label className="label">Deposit Type:</label>
                        <input type="text" name="type" value={type} onChange={this.changeHandler} style={{ width: '300px' }} />
                        <button type="submit" style={{ fontFamily: 'Arial', marginTop: '1rem', width: '200px', padding: '0.5rem 1rem' }}>
                            Calculate
                        </button>
                        <h3 style={{ marginTop: '2rem' }}>
                            Total Amount: <span>{this.state.interest}</span>
                        </h3>
                    </form>
                    <div class="clock">
                        <div class="wrap">
                            <span class="hour"></span>
                            <span class="minute"></span>
                            <span class="second"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                </div>

               

                
                {/* </div> */}
            </div>
        );
    }
}

export default PostForm