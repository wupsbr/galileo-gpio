galileo-gpio
============

galileo-gpio is a simple node.js based library to help access the GPIO of the Intel Galileo (Yocto Linux). It's modelled loosely around the built-in ``fs`` module and based on pi-gpio.

```javascript
var gpio = require("galileo-gpio");

gpio.open(27, "output", function(err) {		// Open pin 27 for output
	gpio.write(27, 1, function() {			// Set pin 27 high (1)
		gpio.close(27);						// Close pin 27
	});
});
```
## Under Development

This project is under development right now and isn't working yet. Soon it's finished I will update this README.


## Installation

If you haven't already, get node and npm on the Intel Galileo. The simplest way is:

	sudo apt-get install nodejs npm

The Intel Galileo's GPIO pins require you to be root to access them. That's totally unsafe for several reasons. 

Do ``cd`` to your project directory and use npm to install galileo-gpio in your project.

	npm install galileo-gpio

That's it!

## Usage

### .open(pinNumber, [direction = "output"], [callback])

Aliased to ``.export``

Makes ``pinNumber`` available for use. 

* ``pinNumber``: The pin number to make available. Remember, ``pinNumber`` is the physical pin number on the Intel Galileo. 
* ``direction``: (Optional) Direction can either be ``input`` or ``output``, depending on what you want to do with the pin. You could alternatively use ``in`` or ``out``. Default: ``output``.
* ``callback``: (Optional) Will be called when the pin is available for use. May receive an error as the first argument if something went wrong.

### .close(pinNumber, [callback])

Aliased to ``.unexport``

Closes ``pinNumber``.

* ``pinNumber``: The pin number to close. Again, ``pinNumber`` is the physical pin number on the Intel Galileo.
* ``callback``: (Optional) Will be called when the pin is closed. Again, may receive an error as the first argument.

### .setDirection(pinNumber, direction, [callback])

Changes the direction from ``input`` to ``output`` or vice-versa.

* ``pinNumber``: As usual.
* ``direction``: Either ``input`` or ``in`` or ``output`` or ``out``.
* ``callback``: Will be called when direction change is complete. May receive an error as usual.

### .getDirection(pinNumber, [callback])

Gets the direction of the pin. Acts like a getter for the method above.

* ``pinNumber``: As usual
* ``callback``: Will be called when the direction is received. The first argument could be an error. The second argument will either be ``in`` or ``out``. 

### .read(pinNumber, [callback])

Reads the current value of the pin. Most useful if the pin is in the ``input`` direction.

* ``pinNumber``: As usual.
* ``callback``: Will receive a possible error object as the first argument, and the value of the pin as the second argument. The value will be either ``0`` or ``1`` (numeric).

Example:
```javascript
gpio.read(27, function(err, value) {
	if(err) throw err;
	console.log(value);	// The current state of the pin
});
```

### .write(pinNumber, value, [callback])

Writes ``value`` to ``pinNumber``. Will obviously fail if the pin is not in the ``output`` direction.

* ``pinNumber``: As usual.
* ``value``: Should be either a numeric ``0`` or ``1``. Any value that isn't ``0`` or ``1`` will be coerced to be boolean, and then converted to 0 (false) or 1 (true). Just stick to sending a numeric 0 or 1, will you? ;)
* ``callback``: Will be called when the value is set. Again, might receive an error.

## Misc

* To run tests: ``npm install && npm test`` where you've got the checkout.
* This module was created, ``git push``'ed and ``npm publish``'ed all from the Raspberry Pi! The Pi rocks!

## License

(The MIT License)

Copyright (c) 2014 David Ruiz <wupsbr@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
