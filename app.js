document.addEventListener('DOMContentLoaded', function () {
    const choices = document.querySelectorAll('.choice');
    const message = document.getElementById('message');
    const computerSelection = document.getElementById('computer-selection');
  
    choices.forEach(choice => {
        choice.addEventListener('click', function () {
            const playerSelection = this.id;
            const computerChoices = ['rock', 'paper', 'scissors'];
            const computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            const result = determineWinner(playerSelection, computerSelection);
  
            displayResult(playerSelection, computerSelection, result);
        });
    });
  
    function determineWinner(player, computer) {
        if (player === computer) {
            return 'It\'s a Tie!';
        }
  
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You Win!';
        }
  
        return 'Computer Wins!';
    }
  
    function displayResult(player, computer, result) {
        message.textContent = `You chose ${player}, Computer chose ${computer}. ${result}`;
        document.getElementById('computer-selection').textContent = computer;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addButton = document.getElementById('add');
    const taskList = document.getElementById('task-list');
  
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
  
        if (taskText === '') {
            return;
        }
  
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span><button class="delete">Delete</button>`;
        taskList.appendChild(li);
  
        taskInput.value = '';
  
        li.querySelector('.delete').addEventListener('click', function () {
            taskList.removeChild(li);
        });
    });
  
    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});

