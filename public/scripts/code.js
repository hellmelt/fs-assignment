//
//
(() => {
  const appendOutput = (text) => {
  	document.querySelector('#output').value += text;
  };

  const playSound = (text) => {
  	const audio = document.querySelector('audio');
  	audio.src = '/sounds/' + text + '.wav';
  	audio.play();
  };

  const setCell = (id, text) => {
  	const cell = document.querySelector('#' + id)
  	cell.innerText = text;
  	cell.addEventListener('click', () => {
  		appendOutput(text);
  		playSound(text === '#' ? 'pound' : text);
  	});
  };

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

  document.querySelector('#sumButton').addEventListener('click', () => {
  	document.querySelector('#sumOutput').innerText = 'The sum is ' + 
  	computeSum(document.querySelector('#output').value);
  });

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