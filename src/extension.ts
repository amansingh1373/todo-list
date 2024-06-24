import * as vscode from 'vscode';
import path from 'path';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "todo-list" is now active!');


	let disposable = vscode.commands.registerCommand('todo-list.showWebviewPanel', () => {
		const panel = vscode.window.createWebviewPanel(
            'todoList',
            'To-do List',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
				retainContextWhenHidden: true,
                localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'webview'))]
            }
        );
		const scriptSrc = panel.webview.asWebviewUri(vscode.Uri.joinPath( context.extensionUri, "webview", "build", "assets", "index.js",));
        const uri: UriMap = {
			'script': scriptSrc
		};
		panel.webview.html = getWebviewContent(uri);
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.openWelcomePage', () => {
			console.log('openWelcomePage');
			vscode.commands.executeCommand('workbench.action.openWalkthrough', 'todo-list.todo-list#sample', true);
		})
	);
	
}

export function deactivate() {}

type UriMap = {
	[key: string]: vscode.Uri;
};

const getWebviewContent = (uri: UriMap) => {
	return /*html*/`
		<!doctype html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>todo-list</title>
		</head>
		<body>
			<div id="root"></div>
			<script type="module" src="${uri['script']}"></script>
		</body>
		</html>
	`;
};
