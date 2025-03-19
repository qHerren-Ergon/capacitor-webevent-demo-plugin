import './style.css'
import {webevent} from "webevent-plugin/src/index.js";
import {sendEvent} from "./eventSender.js";

let timeBeforeE1;
let timeAfterE1;

let timeBeforeE2;
let timeAfterE2;

document.querySelector('#app').innerHTML = `
  <div>
    <button id="button">
        Event
    </button>
    
    <table id="tableEvent">
        <tr>
          <th>Event</th>
          <th>Time before</th>
          <th>Time after</th>
        </tr>
    </table>
  </div>
`

sendEvent(document.querySelector('#button'))

webevent.addListener('sendEvent', (value) => {
    var now = new Date();
    var timeAfter = [
        now.toLocaleTimeString().split(" ")[0],
        '.',
        now.getMilliseconds()
    ].join('');
    console.log(timeAfter);
    console.log(value);
    createRow(document.querySelector('#tableEvent'), value.value, value.time, timeAfter);
})

webevent.addListener('sendEventWithTimer', (value) => {
    var now = new Date();
    var timeAfter = [
        now.toLocaleTimeString().split(" ")[0],
        '.',
        now.getMilliseconds()
    ].join('');
    console.log(timeAfter);
    console.log(value);
    createRow(document.querySelector('#tableEvent'), value.value, value.time, timeAfter);
})

function createRow(element, value, timeBefore, timeAfter) {
    var newRow = element.tBodies[0].insertRow(-1);
    newRow.insertCell(0).appendChild(document.createTextNode(value));
    newRow.insertCell(1).appendChild(document.createTextNode(timeBefore));
    newRow.insertCell(2).appendChild(document.createTextNode(timeAfter));
}