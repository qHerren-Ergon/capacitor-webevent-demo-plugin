import './style.css'
import {webevent} from "webevent-plugin/src/index.js";
import {sendEvent} from "./eventSender.js";

document.querySelector('#app').innerHTML = `
  <div>
    <button id="button">
        Event
    </button>
    
    <table id="tableEvent1">
        <tr>
          <th>Event 1</th>
          <th>Time before</th>
          <th>Time after</th>
        </tr>
    </table>
    
    <table id="tableEvent2">
        <tr>
          <th>Event 2</th>
          <th>Time before</th>
          <th>Time after</th>
        </tr>
    </table>
  </div>
`

sendEvent(document.querySelector('#button'), document.querySelector('#tableEvent1'), document.querySelector('#tableEvent2'))

webevent.addListener('sendEvent', (value) => {
    var now = new Date();
    var timeBefore = [
        now.getHours(),
        ':',
        now.getMinutes(),
        ':',
        now.getSeconds(),
        '.',
        now.getMilliseconds()
    ].join('');
    console.log(timeBefore);
    console.log(value);
})