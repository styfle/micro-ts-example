declare module "then-sleep" {
	namespace foo {
		function sleep(ms: number): Promise<any>;
    }
    export = foo;
}
