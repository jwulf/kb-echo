var inputEvent = require('input-event');

var i = new inputEvent('/dev/input/event0'); // 'event0' is the file corresponding to my keyboard in /dev/input/
const k = new inputEvent.Keyboard(i)
i.on('raw', data => console.log(data));
k.on('keyup', console.log);
k.on('keydown', console.log);
k.on('keypress', console.log);
k.on('rel', console.log);
k.on('abs', console.log);
k.on('syn', console.log);
