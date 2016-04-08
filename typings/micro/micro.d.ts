declare module "micro" {
	namespace micro {
		function send(res: string, statusCode: number, data?: any): void;
    }
    export = micro;
}
