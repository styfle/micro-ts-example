"use strict";
import {send} from 'micro';
import {sleep} from 'then-sleep';
export default async function (req: any, res: any) {
    await sleep(500);
    send(res, 200, 'Ready!');
}
