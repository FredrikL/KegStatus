'use strict';

const clui = require('clui'),
	clear = require("cli-clear"),
	pad = require('pad');

var Gauge = clui.Gauge;

const kegs = [
	{
		tap: 1,
		name: "Inte så besk Ipa",
		percent: 5.5,
		current: 5,
		max: 9
	},
	{
		tap: 2,
		name: "FolkIpa",
		percent: 3,
		current: 1,
		max: 19
	}
]


const printKeg = (keg) => {
	console.log(`Tap ${keg.tap}`);
	console.log(`${pad(keg.name, 30)} ${pad(4,keg.percent)}%`)
	let str = `${Gauge(keg.current, keg.max, 35)}`;
	console.log(str);
	console.log("");
};

const print = () => {
	clear();

	console.log("BeerMeTo");
	console.log("");	

	kegs.forEach(printKeg);
	setTimeout(print, 1000);
}

print();