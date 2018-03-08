import React, { Component } from 'react'
import Audio from './Audio'

class Notification extends Component {
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
    const response = await fetch('https://ring-signal-server.herokuapp.com/ringtones/');
    const json = await response.json();
    setTimeout(() => {
      this.setState({
        data: json,
        fetched: true
      })
}, 900)

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
    return (<div id="notifcation-page">
      <h1>customize your notifications</h1>
      {!this.state.fetched ? <h2 id='load'>LOADING</h2>: null}
      <div id="notifcation">

        <span>{this.renderTones()}</span>

      </div>
    </div>)
  }
}
export default Notification
