var player = prompt("Warning: Do not begin this adventure from beginning to end! straight through from beginning to end! This page contains many different adventures you can go on. From time to time you will be asked to make a choice. Your choice may lead to success or disaster! The adventure you take are a result of choice. You are responsible because you choose! After you make your choice, follow the instructions to see what happens to you next. Remember- you cannot go back! Think carefully before you make a move! One mistake can be your last...or it may lead you to fame and fortune! You wake up in a white room with a door and a window. Do you head for the DOOR, open the WINDOW or stay in BED?").toUpperCase();

switch(player) {
	case 'DOOR':
		var medium = prompt("You turn the knob, step outside and SPLASH into a flowing river! Can you swim (YES/N0)?").toUpperCase();
			if (medium === 'YES') {
				alert("Exhausted from the swim, you reach dry land and encounter a tribe who treat your wounds and feed you well. You never reach civilization answers any questions about the ROOM or where you are. At least you're alive!");
			}	else {
				alert("All your life you were too afraid to swim, terrified of being splashed on. You drown to death! Face your fears or perish!");
			}
	break;

	case 'WINDOW':
		var hard = prompt("You turn the knob, step outside and SPLASH into a flowing river! Can you swim (YES/NO)?").toUpperCase();
			if (hard === 'YES') {
				alert("Exhausted from the swim, you reach dry land and encounter a tribe who treat your wounds and feed you well. You never reach civilization answers any questions about the ROOM or where you are. At leas you're alive!");
			}	else {
				alert("All your life you were too afraid to swim, terrified of being splashed on. You drown to death! Face your fears or perish!");
			}

	break;

	case 'BED':
		var expert = prompt("You decided to stay in bed. Great choice. Would you like CHIPS with that? (YES/NO)?").toUpperCase();
				if (expert === 'YES') {
				alert("Enjoy CHIPS in BED!");
			}	else {
				alert("Go to sleep, you're drunk.");
			}
	break;

default: 
	alert("I did not undertsand your choice. Choose DOOR, WINDOW or BED.");	
}
