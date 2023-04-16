import React, { Component } from 'react';
import axios from 'axios';


class PostForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = async(e) => {
        e.preventDefault()
        console.log(this.state)
        
        // var config = await fetch('postForm', {
        //     method: "POST",
        //     url: "http://localhost:8000/postForm",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     data: this.state
        // })
        axios.post('http://localhost:8000/postForm', this.state)
        .then(response => {
            alert(response)
        })
        .catch(error => {
            console.log(error)
        }
        )
        // // axios(config)
        // .them(function (response) {
        //     console.log(JSON.stringify(response.data))
        // })
        // .catch(function (error) {
        //     console.log(error)
        // });
    }

    render() {
        const { userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="title" value={title}  onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="body" value={body}  onChange={this.changeHandler}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm