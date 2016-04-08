declare module "micro" {
    import {IncomingMessage, ServerResponse} from 'http';
	
    export default function micro(requestListener?: (request: IncomingMessage, response: ServerResponse) => Promise<void>): void;
	
}
