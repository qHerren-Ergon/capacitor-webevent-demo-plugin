import {webevent} from "webevent-plugin/src/index.js";

export function sendEvent(element, table) {


  const sentEvent = () => {

    var now = new Date();
    var timeBefore = [
      now.toLocaleTimeString().split(" ")[0],
      '.',
      now.getMilliseconds()
    ].join('');
    console.log(timeBefore);
    webevent.eventSender(timeBefore).then(() => {
      webevent.addListener('sendEvent', (value) => {
        var now = new Date();
        var timeAfter = [
          now.toLocaleTimeString().split(" ")[0],
          '.',
          now.getMilliseconds()
        ].join('');
        console.log(timeAfter);
        console.log(value);
        createRow(table, value.value, value.time, timeAfter);
      })
    });


    var now = new Date();
    var timeBefore = [
      now.toLocaleTimeString().split(" ")[0],
      '.',
      now.getMilliseconds()
    ].join('');
    console.log(timeBefore);
    webevent.eventSenderWithTimer(timeBefore).then(() => {
      webevent.addListener('sendEventWithTimer', (value) => {
        var now = new Date();
        var timeAfter = [
          now.toLocaleTimeString().split(" ")[0],
          '.',
          now.getMilliseconds()
        ].join('');
        console.log(timeAfter);
        console.log(value);
        createRow(table, value.value, value.time, timeAfter);
      })
    });
  }
  element.addEventListener('click', () => sentEvent())
}

function createRow(element, value, timeBefore, timeAfter) {
  var newRow = element.tBodies[0].insertRow(-1);
  newRow.insertCell(0).appendChild(document.createTextNode(value));
  newRow.insertCell(1).appendChild(document.createTextNode(timeBefore));
  newRow.insertCell(2).appendChild(document.createTextNode(timeAfter));
}
