import React from 'react'


const Audio = ({label = 'Label', mp3link = "http://k003.kiwi6.com/hotlink/niv84ax9uw/TREKKIN.mp3" }) =>
<div>
  <div id="player">
    <label>{label}</label>
    <audio controls>
      <source src={mp3link} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    </div>
</div>

export default Audio
