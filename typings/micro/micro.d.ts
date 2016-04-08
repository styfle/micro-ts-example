declare module "micro" {
    import {IncomingMessage, ServerResponse} from 'http';
	namespace m {
        function  micro(requestListener?: (request: IncomingMessage, response: ServerResponse) => Promise<void>): void;
    }
    export = m;
}
