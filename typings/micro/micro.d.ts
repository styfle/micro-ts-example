declare module "micro" {
    import {IncomingMessage, ServerResponse} from 'http';
	namespace m {
        function foo(requestListener?: (request: IncomingMessage, response: ServerResponse) =>void): void;
		function send(res: string, statusCode: number, data?: any): void;
    }
    export = m;
}
