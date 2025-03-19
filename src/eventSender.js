import {webevent} from "webevent-plugin/src/index.js";

export function sendEvent(element) {


  const sentEvent = () => {

    var now = new Date();
    var timeBefore = [
      now.toLocaleTimeString().split(" ")[0],
      '.',
      now.getMilliseconds()
    ].join('');
    console.log(timeBefore);
    webevent.eventSender(timeBefore).then();


    var now = new Date();
    var timeBefore = [
      now.toLocaleTimeString().split(" ")[0],
      '.',
      now.getMilliseconds()
    ].join('');
    console.log(timeBefore);
    webevent.eventSenderWithTimer(timeBefore).then();
  }
  element.addEventListener('click', () => sentEvent())
}
