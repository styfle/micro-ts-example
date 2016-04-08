"use strict";
import * as micro from 'micro';
//import * as sleep from 'then-sleep';
import {IncomingMessage, ServerResponse} from 'http';

async function requestHandler(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200);
    res.end('wootdawg');
}

micro(requestHandler).listen(process.env.PORT || 3000);
