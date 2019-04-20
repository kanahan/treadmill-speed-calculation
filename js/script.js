!((d) => {
  const hour = d.querySelector('#inputhour');
  const min = d.querySelector('#inputmin');
  const sec = d.querySelector('#inputsec');
  let in2 = d.querySelector("#input2");
  let in3 = d.querySelector("#input3");
  let in4 = d.querySelector("#input4");
  let radios = [...(d.querySelectorAll("input[name='radio']"))];

  const initListener = () => {
    hour.addEventListener("keyup", (e) => {
      calcByTime();
    });
    min.addEventListener("keyup", (e) => {
      calcByTime();
    });
    sec.addEventListener("keyup", (e) => {
      calcByTime();
    });
    in2.addEventListener("keyup", (e) => {
      calcByKM();
    });
    in3.addEventListener("keyup", (e) => {
      calc(e, true);
      if (d.querySelector('#time').checked) {
        calcByKM();
      } else {
        calcByTime();
      }
    });
    in4.addEventListener("keyup", (e) => {
      calc(e, false);
      if (d.querySelector('#time').checked) {
        calcByKM();
      } else {
        calcByTime();
      }
    });
    radios.forEach((elem) => {
      elem.addEventListener("keyup", (e) => {
        calc(e)
      })
    });
  }

  const calcByTime = (e) => {
    const kmh = d.querySelector('#input4').value;
    const cHour = isNaN(hour.value) ? 0 : parseInt(hour.value);
    const cMin = isNaN(min.value) ? 0 : parseInt(min.value);
    const cSec = isNaN(sec.value) ? 0 : parseInt(sec.value);

    const time = cHour + (cMin / 60) + (cSec / 3600);

    in2.value = kmh * time;
  }

  const calcByKM = () => {
    const km = d.querySelector('#input2').value;
    const kmh = d.querySelector('#input4').value;

    if (!isNaN(km) && !isNaN(kmh)) {
      const time = km / kmh;
      modTime(time * 3600);
    }
  }

  const calc = (e, toKM) => {
    const input = e.target.value;
    if (toKM) {
      in4.value = 60 / input;
    }
    else {
      in3.value = 60 / input;
    }
  }

  const modTime = (secs) => {
    const cHour = Math.floor(secs / 3600);
    const cMin = Math.floor((secs - (cHour * 3600)) / 60);
    const cSec = Math.floor(secs - (cHour * 3600) - (cMin * 60));
    hour.value = cHour;
    min.value = cMin;
    sec.value = cSec;
  }

  initListener();
})(document);


let obj = {
  name: 'foo',
  age: 22,
  result: {
    english: 'a',
    malay: 'b'
  }
}