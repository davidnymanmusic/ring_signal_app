import React, { Component } from 'react'
import Audio from './Audio'

class Alarms extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.getData = this.getData.bind(this)
    this.renderTones = this.renderTones.bind(this)
  };


  async getData() {
    const response = await fetch('https://ring-signal-server.herokuapp.com/alarms/');
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
      <h1>alarms for all</h1>
      <div id="ringtones">

        <span>{this.renderTones()}</span>

      </div>
    </div>)
  }
}
export default Alarms
