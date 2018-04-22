//
// Freespee frontend assignment.
// Anders Hjelm, 2@andershjelm.com
// 2018-04-23

// ///////////////
// Enclose everything in an IFFY, that is nice
(() => {
  // //////////
  // Adds text to the #output	
  const appendOutput = (text) => {
  	document.querySelector('#output').value += text;
  };

  // //////////
  // Plays a DTMF sound, from the DTMF char
  const playSound = (text) => {
  	if (text === '#') text = 'pound';
  	if (text === '*') text = 'star';
  	const audio = document.querySelector('audio');
  	audio.src = '/sounds/' + text + '.wav';
  	audio.play();
  };

  // //////////
  // Sets upp a cell with the desired text and binds the click
  const setCell = (id, text) => {
  	const cell = document.querySelector('#' + id)
  	cell.innerText = text;
  	cell.addEventListener('click', () => {
  		appendOutput(text);
  		playSound(text);
  	});
  };

  // //////////
  // Calcute the sum of the digits in inputText. Beware of non-digits.
  const computeSum = (inputText) => {
    let acc = 0;
    const arr = [...inputText];
    arr.forEach((char) => {
    	const parsed = parseInt(char, 10);
    	if (!isNaN(parsed)) {
    		acc += parsed;
    	}
    });
    return acc;
  };

  // Set up the click on Sum botton. Grab the sum, type it in sumOutput
  document.querySelector('#sumButton').addEventListener('click', () => {
  	document.querySelector('#sumOutput').innerText = 'The sum is ' + 
  	computeSum(document.querySelector('#output').value);
  });

  // Populate all the cells in the table
  setCell('c11', '1');
  setCell('c12', '2');
  setCell('c13', '3');

  setCell('c21', '4');
  setCell('c22', '5');
  setCell('c23', '6');

  setCell('c31', '7');
  setCell('c32', '8');
  setCell('c33', '9');

  setCell('c41', '*');
  setCell('c42', '0');
  setCell('c43', '#');

})();