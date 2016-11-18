'use strict';

const clui = require('clui'),
	clear = require("cli-clear"),
	pad = require('pad');

var Gauge = clui.Gauge;

const kegs = [
	{
		name: "Ipa",
		current: 5,
		max: 9
	},
	{
		name: "FolkIpa",
		current: 17,
		max: 19
	}
]


const printKeg = (keg) => {
	let str = `${pad(keg.name, 10)} ${Gauge(keg.current, keg.max, 20)}`;
	console.log(str);
};

const print = () => {
	clear();
	
	//console.log(Gauge(4, 20, 20, 19 , 4));
	kegs.forEach(printKeg);
	setTimeout(print, 1000);
}

print();