class AnalogClock extends HTMLElement{
  constructor(){
    super();
    this.innerHTML = `<div class="analog-clock-hand hour-hand"></div>
<div class="analog-clock-hand minute-hand"></div>
<div class="analog-clock-hand second-hand"></div>
<div class="analog-clock-dot"></div>
<div class="analog-clock-face"></div>`
  }
  get minuteHand(){
    return this.querySelector(".minute-hand")
  } 

  get secondHand(){
    return this.querySelector(".second-hand")
  }

  get hourHand(){
    return this.querySelector(".hour-hand")
  }

  connectedCallback(){
    this.clockTick();
    setInterval(()=>{this.clockTick()}, 1000);
  }

  clockTick(){
    let offset = -90;

    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let secondsRotation = seconds/60;
    let minutesRotation = (minutes+secondsRotation)/60;
    let hoursRotation = (hours+minutesRotation)/12;

    this.hourHand.style.rotate = hoursRotation*360+offset+"deg"
    this.minuteHand.style.rotate = minutesRotation*360+offset+"deg"  
    this.secondHand.style.rotate = secondsRotation*360+offset+"deg"
  }
}

class DigitalClock extends HTMLElement{
  constructor(){
    super();
    this.innerHTML = `<p class="digital-clock-caption"></p>`
  }
  get digitalClockCaption(){
    return this.querySelector(".digital-clock-caption")
  } 

  connectedCallback(){
    this.clockTick();
    setInterval(()=>{this.clockTick()}, 1000);
  }

  clockTick(){
    let date = new Date();

    let seconds = new String(date.getSeconds()).padStart(2,"0");
    let minutes = new String(date.getMinutes()).padStart(2,"0");
    let hours = new String(date.getHours()).padStart(2,"0");

    this.digitalClockCaption.innerText = `${hours}:${minutes}:${seconds}`
  }

}


customElements.define("analog-clock", AnalogClock)
customElements.define("digital-clock", DigitalClock)
