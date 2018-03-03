import React, { Component } from 'react'
import Audio from './Audio'

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.getData = this.getData.bind(this)
    this.renderTones = this.renderTones.bind(this)
  };


  async getData() {
    const response = await fetch('http://localhost:8888/ringtones');
    const json = await response.json();
    console.log(json);
    this.setState({
      data: json
    })
  }
  componentDidMount(){
    this.getData()
  }
  renderTones(){
    return this.state.data.map((tone, index) =>
   <Audio key={index} label={tone.name} mp3link={tone.url} />
    )
  }
  render() {
    return (<div>
      <h1>customize your notifications</h1>
      <div id="notifcation">

        <span>{this.renderTones()}</span>

      </div>
    </div>)
  }
}
  export default Notification
