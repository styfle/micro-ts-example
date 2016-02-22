"use strict";
import {send} from 'micro';
export default async function (req, res) {
	    send(res, 200, 'Ready!');
}
