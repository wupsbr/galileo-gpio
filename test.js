var gpio = require("./galileo-gpio");

gpio.open(18, "output", function(err) {
	gpio.open(30, "input", function(err) {
	    gpio.read(18, function(err, value) {
	        console.log(value);
	    });
	});
});