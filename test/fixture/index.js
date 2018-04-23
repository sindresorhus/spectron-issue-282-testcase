'use strict';
const electron = require('electron');

function load(url) {
	const win = new electron.BrowserWindow();
	win.loadURL(url);
	return win;
}

electron.app.on('ready', () => {
	load(`file://${__dirname}/index.html`);
});
