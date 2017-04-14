function go(){
 	console.log('Time for a quiz! Enter front for a question, and back for the answer!');

 	switch(command){
 		case 'front':
 		front();
 		break;
 		case 'back':
 		back();
 		break;
 		default:
 		console.log('Not a command.');
 	}
 }

 function front(){
 		console.log('Who was the first president of the United States?');
 }
function back(){
		console.log('George Washington');}
 go();
