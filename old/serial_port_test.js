var SerialPort = require('serialport');
var partName = '/dev/ttyAMA0'; //ttyACM0

var serialPort = new SerialPort(partName, {
    baudrate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBit: '1',
    flowControl: false,
    parser: SerialPort.parsers.readline("\n")
});

serialPort.on("open", function() {
    console.log("onOpen!");

    setInterval(function() {
        serialPort.write('3')
        console.log('test');
    }, 1500);

    serialPort.on("data", function(data) {
        console.log("data: " + data);
    });

    serialPort.on('close', function(err) {
        console.log('port closed');
    });
});

serialPort.on('error', function(err) {
    console.error("error", err);
});