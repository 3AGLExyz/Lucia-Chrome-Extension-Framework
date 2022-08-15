import { routes as defined_routes } from '../../resources/js/routes';
import fs from 'fs';

export type RouteAssociation = {
    [route: string]: string;
};

export type RouteNamespace = { 
    [namespace: string]: RouteAssociation[] 
}

enum ConsoleColor {
    reset = "\x1b[0m",
    error = "\x1b[31m",
    success  = "\x1b[32m",
    info = "\x1b[36m"
}

class Routing {

    private routeNamespaces: RouteNamespace = {};

    private consl(message: string, type: ConsoleColor = ConsoleColor.reset) {
        console.log(type, message);
    }
    
    getRoutes() 
    {
        return this.routeNamespaces;
    }

    constructor() 
    {
        defined_routes.forEach(route => {

            // Split the route into the view and the controller
            let entry: string[] = route.split('@');
            let namespace = entry[1];
            let filepath = `./resources/views/${ namespace }/${ entry[0] }.html`;

            // Check if the file exists
            if (!fs.existsSync(filepath)) 
            {
                this.consl(`[error] The route '${ route }' couldn't be associated with '${ filepath }' because doesn't exist! Skipping entry…`, ConsoleColor.error);
                return;
            }

            const rAssociation: RouteAssociation = {
                [route]: filepath
            }

            this.routeNamespaces[ namespace ] = this.routeNamespaces[ namespace ] === undefined 
                                        ? [ rAssociation ] 
                                        : this.routeNamespaces[ namespace ].concat( rAssociation );

            this.consl(`[success] The route '${ route }' has been associated with '${ filepath }'`, ConsoleColor.success);
        });
        this.consl(`[info] Routes have been associated!`, ConsoleColor.info);
    }
}

export const routing = new Routing();