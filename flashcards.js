var inquirer = require('inquirer'); 
var fs = require('fs');
var command = process.argv[2];


 function basicCard(front, back){
 		this.front = front;
 		this.back = back;
 }

 function clozeCard(text, cloze){
 		this.cloze = cloze;
 		this.text = text;
 		this.clozeDeleted = this.text.replace(this.cloze, '...');
 		//this.full = full;
 }

 var firstPresident = new basicCard('Who was the first president of the United States?', 'George Washington');
 var skyColor = new basicCard('What color is the sky?', 'Blue');

 var firstPresidentCloze = new clozeCard('George Washington was the first president of the United States.', 'George Washington');

inquirer.prompt([
		{
			type: 'list',
			message: 'What type of flash card would you like to create?',
			choices: ['Basic Flashcard', 'Cloze Flashcard'],
			name: 'pick',
		},
		
		{
			type: 'input',
			message: 'Enter the cloze Flashcard statement here:'
		}

		]).then(function(answer){
			if(answer.pick === 'Basic Flashcard') {
				inquirer.prompt([
					{
						type: 'input',
						message: 'Enter the Basic Flashcard question here:',
						name: 'basicQ',
					},

					])
			}

	}
)




























 