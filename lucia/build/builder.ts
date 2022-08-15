import {routing, RouteNamespace, RouteAssociation} from './routing';
import fs from 'fs';

class builder {

    protected htmlNamespaces: any;
    protected html: string = '';

    constructor() 
    {
        const routeNamespaces: RouteNamespace = routing.getRoutes();

        for (const namespace in routeNamespaces)
        {
            const route = routeNamespaces[namespace];

            for (const association in route)
            {
                Object.entries(route[association]).forEach(([route, filepath]) => 
                {
                    let html = fs.readFileSync(filepath, {encoding:'utf8',flag:'r'});

                    const current = route.split('@');

                    this.html += `<div lucia-route="${ route }" style="display: none;">${ html }</div>`;
                });
            }
        }

        // Get layout
        let layout = fs.readFileSync('./resources/views/lucia.html', {encoding:'utf8',flag:'r'});
        // Replace tag with content
        this.html = layout.replace('<lucia/>', this.html);
        // Minifie html
        this.html = this.html.replace(/\s{2,}/g, ' ');

        fs.writeFile('./extension/lucia.html', this.html, function (err) 
        {
            if(err) throw err;
            console.log('[success] The file has been saved!');
        });



        // Copy manifest

        fs.copyFile('./resources/manifest.json', './extension/manifest.json', (err) => {
            if (err) throw err;
            console.log('[success] The manifest file has been copied to the extension dir!');
        });
    }

}

new builder();