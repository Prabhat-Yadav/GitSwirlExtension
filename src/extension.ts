
import * as vscode from 'vscode';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Time check is active" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	var active_time: any = [];
	var active_time_stamp: any = [1];

	var inactive_time: any = [];
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.timecheck', () => {
		// The code you place here will be executed every time your command is executed
		console.log(inactive_time, "this is the in active");

		var star_time: any = new Date();
		var inFocus: any = new Date();
		var outOfFocus: any = new Date();
		let total = 0;
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello gegWorld!');
		vscode.window.onDidChangeWindowState((item) => {

			if (item.focused === true) {
				console.log("active window");
				let temp = new Date();
				inFocus = temp;
				inactive_time.push(inFocus - active_time_stamp[0]);

				// console.log(inactive_time, 'inactive time ');
				for (let i = 0; i < inactive_time.length; i++) {
					total += inactive_time[i];
				}

				var secDiff1 = Math.floor(total / 1000); //in 
				var hDiff1 = Math.floor(secDiff1 / 3600); //in hours
				secDiff1 = secDiff1 % 3600;

				var minDiff1 = Math.floor(secDiff1 / 60); //in minutes
				secDiff1 = secDiff1 % 60;
				console.log(hDiff1 + ':' + minDiff1 + ':' + secDiff1, "Total InactiveTime Worked");
			}

			if (item.focused === false) {
				console.log("inactive window");
				let temp = new Date();
				outOfFocus = temp;
				active_time.push(outOfFocus - inFocus);

				active_time_stamp[0] = outOfFocus;
				// console.log(active_time_stamp,"qq")




				// console.log(active_time, "list");

				for (let i = 0; i < active_time.length; i++) {
					total += active_time[i];
				}
				

				var secDiff = Math.floor(total / 1000); //in 
				var hDiff = Math.floor(secDiff / 3600); //in hours
				secDiff = secDiff % 3600;

				var minDiff = Math.floor(secDiff / 60); //in minutes
				secDiff = secDiff % 60;
				console.log(hDiff + ':' + minDiff + ':' + secDiff, "Total Time Worked");

				//  inactive_time.push(outOfFocus - star_time );
				//  console.log(inactive_time, "list");
				//  for (let i = 0; i < inactive_time.length; i++) {
				//  	total += inactive_time[i];
				//  }
				//  var secDiff1 = Math.floor(total / 1000); //in s
				//  var minDiff1 = Math.floor(total / 60 / 1000); //in minutes
				//  var hDiff1 = Math.floor(total / 3600 / 1000); //in hours
				//  console.log(hDiff + ':' + minDiff + ':' + secDiff, "Total Inactive Time");
			}

		});
	});
	console.log(active_time,"this is the active time");
	console.log(inactive_time,"this is the active time");

	context.subscriptions.push(disposable);

	
}
// this method is called when your extension is deactivated
export function deactivate() { }

