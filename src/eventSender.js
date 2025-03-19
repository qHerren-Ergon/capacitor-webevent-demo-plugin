import {webevent} from "webevent-plugin/src/index.js";

export function sendEvent(element, e1, e2) {


  const sendtEvent = () => {

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
    webevent.eventSender().then();

    var e1NewRow = e1.tBodies[0].insertRow(-1);


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
    webevent.eventSenderWithTimer().then();
    addBeforeTime(element)
  }
  element.addEventListener('click', () => sendtEvent())
}
