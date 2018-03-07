import React, { Component } from 'react'
import Audio from './Audio'

class Alarms extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      fetched: false
    }
    this.getData = this.getData.bind(this)
    this.renderTones = this.renderTones.bind(this)
  };


  async getData() {
    const response = await fetch('https://ring-signal-server.herokuapp.com/alarms/');
    const json = await response.json();
    this.setState({
      data: json,
      fetched: true
    })
    console.log(this.state.fetched);
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
      {!this.state.fetched ? <h2 id='load'>LOADING</h2>: null}
      <div id="ringtones">

        <span>{this.renderTones()}</span>

      </div>
    </div>)
  }
}
export default Alarms
