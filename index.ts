"use strict";
const micro = require('micro');
//import * as sleep from 'then-sleep';
import {IncomingMessage, ServerResponse} from 'http';

async function requestHandler(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200);
    res.end('wootdawg');
}

micro.default(requestHandler).listen(process.env.PORT || 3000);
