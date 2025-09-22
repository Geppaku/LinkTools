javascript:(function() {
	const containerId = 'gemini-timer-container';
	let container = document.getElementById(containerId);

	if (container) {
		container.style.display = container.style.display === 'none' ? 'block' : 'none';
		return;
	}

	container = document.createElement('div');
	container.id = containerId;
	container.style.cssText = `
		position: fixed;
		top: 20px;
		right: 20px;
		background-color: #fff;
		border: 1px solid #ccc;
		box-shadow: 0 4px 8px rgba(0,0,0,0.2);
		padding: 15px;
		border-radius: 8px;
		z-index: 9999;
		font-family: Arial, sans-serif;
		text-align: center;
		width: 280px;
	`;

	let totalSeconds = 0;
	let isRunning = false;
	let timerInterval;

	const timerDisplay = document.createElement('div');
	timerDisplay.style.cssText = `
		font-size: 2.5em;
		font-weight: bold;
		margin-bottom: 15px;
		color: black;
	`;
	timerDisplay.textContent = '00:00';

	const updateDisplay = () => {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};

	const adjustTime = (seconds) => {
		totalSeconds = Math.max(0, totalSeconds + seconds);
		updateDisplay();
	};

	const toggleTimer = (button) => {
		if (isRunning) {
			clearInterval(timerInterval);
			button.textContent = 'Start';
		} else {
			timerInterval = setInterval(() => {
				if (totalSeconds > 0) {
					totalSeconds--;
					updateDisplay();
				} else {
					clearInterval(timerInterval);
					isRunning = false;
					button.textContent = 'Start';
					alert('時間になりました！');
				}
			}, 1000);
			button.textContent = 'Stop';
		}
		isRunning = !isRunning;
	};

	const clearTimer = (button) => {
		clearInterval(timerInterval);
		totalSeconds = 0;
		isRunning = false;
		updateDisplay();
		button.textContent = 'Start';
	};

	const buttonsConfig = [
		{ text: '+1 min', seconds: 60 },
		{ text: '+5 min', seconds: 300 },
		{ text: '+15 min', seconds: 900 },
		{ text: '-1 min', seconds: -60 },
		{ text: '-5 min', seconds: -300 },
		{ text: '-15 min', seconds: -900 }
	];

	const buttonContainer = document.createElement('div');
	buttonContainer.style.cssText = `
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
		margin-bottom: 10px;
	`;

	buttonsConfig.forEach(config => {
		const button = document.createElement('button');
		button.textContent = config.text;
		button.onclick = () => adjustTime(config.seconds);
		button.style.cssText = `
			padding: 8px;
			font-size: 0.9em;
			border: 1px solid #ddd;
			border-radius: 5px;
			cursor: pointer;
			background-color: #f8f9fa;
			color: #333;
		`;
		buttonContainer.appendChild(button);
	});

	const controlButtonContainer = document.createElement('div');
	controlButtonContainer.style.cssText = `
		display: flex;
		justify-content: space-between;
		gap: 8px;
	`;

	const clearButton = document.createElement('button');
	clearButton.textContent = 'Clear';
	clearButton.onclick = () => clearTimer(toggleButton);
	clearButton.style.cssText = `
		flex: 1;
		padding: 10px;
		font-size: 1em;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		background-color: #dc3545;
		color: white;
	`;

	const toggleButton = document.createElement('button');
	toggleButton.textContent = 'Start';
	toggleButton.onclick = () => toggleTimer(toggleButton);
	toggleButton.style.cssText = `
		flex: 2;
		padding: 10px;
		font-size: 1em;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		background-color: #007bff;
		color: white;
	`;

	controlButtonContainer.appendChild(clearButton);
	controlButtonContainer.appendChild(toggleButton);

	container.appendChild(timerDisplay);
	container.appendChild(buttonContainer);
	container.appendChild(controlButtonContainer);
	document.body.appendChild(container);

})();