import React, { Component } from 'react';
import axios from 'axios';
// import './resources/calc.css';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p: '',
            r: '',
            t: '',
            type: '',
            interest: ''
        }
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
                this.setState({ interest: response['data'] })
            })
            .catch(error => {
                console.log(error)
            },
            )
    }
    render() {
        const { p, r, t, type } = this.state;
        return (
            <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundImage: 'url("uiuc.jpg")',
                backgroundSize: 'cover',
                height: '100vh',
              }}>
                <h1 style={{ marginBottom: '2rem' }}>Interest Calculator</h1>
                <form onSubmit={this.submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '0.5rem' }}>Deposit:</label>
                        <input type="text" name="p" value={p} onChange={this.changeHandler} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '0.5rem' }}>Interest Rate:</label>
                        <input type="text" name="r" value={r} onChange={this.changeHandler} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '0.5rem' }}>Deposit Time:</label>
                        <input type="text" name="t" value={t} onChange={this.changeHandler} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: '0.5rem' }}>Deposit Type:</label>
                        <input type="text" name="type" value={type} onChange={this.changeHandler} />
                    </div>
                    <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                        Calculate
                    </button>
                </form>
                <h3 style={{ marginTop: '2rem' }}>
                    Total Amount: <span>{this.state.interest}</span>
                </h3>
            </div>
        );
    }

    //     render() {
    //         const { p, r, t, type} = this.state
    //     return (
    //       <div>
    //         <h1>Interest Calculator</h1>
    //         <form onSubmit={this.submitHandler}>
    //             <div>
    //                 <label>Deposite:</label>
    //                 <input type="text" name="p" value={p} onChange={this.changeHandler}/>
    //             </div>
    //             <div>
    //                 <label>Interest Rate:</label>
    //                 <input type="text" name="r" value={r}  onChange={this.changeHandler}/>
    //             </div>
    //             <div>
    //             <label>Deposite Time:</label>
    //                 <input type="text" name="t" value={t}  onChange={this.changeHandler}/>
    //             </div>
    //             <div>
    //                 <label>Deposite Type:</label>
    //                 <input type="text" name="type" value={type}  onChange={this.changeHandler}/>
    //             </div>
    //             <button type='submit'>Submit</button>
    //         </form>
    //         <h3>
    //         Total Amount <span>{this.state.interest}</span>
    //         </h3>
    //       </div>
    //     )
    //   }
}

export default PostForm