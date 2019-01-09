
export = OpenApiEnforcerMiddleware

declare class OpenApiEnforcerMiddleware {
    constructor (definition: string|object, options?:OpenApiEnforcerMiddleware.Options );

    controllers (controllersDirectoryPath: string, ...dependencyInjection: any): void;
    middleware (): OpenApiEnforcerMiddleware.MiddlewareFunction;
    mocks (controllersDirectoryPath: string, automatic?: boolean, ...dependencyInjection: any): void;
    use (middleware: OpenApiEnforcerMiddleware.MiddlewareFunction): void;

    promise: Promise<object>
}

declare namespace OpenApiEnforcerMiddleware {

    export interface MiddlewareFunction {
        (req: object, res: object, next: NextFunction): void;
        (err: Error, req: object, res: object, next: NextFunction): void;
    }

    export interface NextFunction {
        (err?: Error): void;
    }

    export interface Options {
        development: boolean;
        fallThrough: boolean;
        mockHeader: string;
        mockQuery: string;
        reqMockStatusCodeProperty: string;
        reqOpenApiProperty: string;
        reqOperationProperty: string;
        xController: string;
        xOperation: string;
    }



}