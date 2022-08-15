export function init()
{
    registerOnHrefClickListener();

    $( document ).ready(function()
    {
        loadView();
    });
}

function registerOnHrefClickListener() 
{
    // Unregister href listener (to prevent double-loading)
    $('[href]').off();

    // Register href listener
    $('[href]').on('click', function(event) 
    {
        event.preventDefault();

        let route = $(this).attr('href');

        if(route.includes('&open_window'))
        {
            console.log(`Opening window and forward routing to '${route}'`);

            window.open(chrome.runtime.getURL(`./lucia.html?route=${
                route.replace('&open_window', '') 
            }`));

            return;
        }

        if(route.includes('@'))
        { 
            console.log(`Request containing a route, loading '${route}'`);

            loadView(route);

            return;
        }

        console.log(`The href attribute is not a route, loading as default uri '${route}'`);

        window.open(route);
    });
}

function loadView(route = 'index@popup')
{
    const urlParams = new URLSearchParams(window.location.search);

    route = urlParams.has('route') ? urlParams.get('route') : route;

    $('[lucia-route]').hide();

    let toView = `[lucia-route="${route}"]`;

    console.log(`Loading view: ${toView}`);

    $(toView).show();
}