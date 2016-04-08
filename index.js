"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const micro = require('micro');
function requestHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.writeHead(200);
        res.end('woot');
    });
}
micro(requestHandler).listen(process.env.PORT || 3000);
//# sourceMappingURL=index.js.map