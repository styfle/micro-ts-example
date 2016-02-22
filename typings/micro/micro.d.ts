/// <reference path="../node/node.d.ts" />
declare module "micro" {
	namespace micro {
		function send(res: string, statusCode: number, data?: any);
    }
    export = micro;
}

