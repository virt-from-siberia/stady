import Cart from '~p/Cart';
import Order from '~p/Order';
import Result from '~p/Result';
import Page404 from '~p/error404';
import ProductList from '~p/products/list';
import ProductItem from '~p/products/item';

let routes = [
    {
        name: 'home',
        url: '/',
        component: ProductList,
        exact: true
    },
    {
        name: 'product',
        url: '/products/:id',
        component: ProductItem,
        exact: true
    },
    {
        name: 'cart',
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
});

let urlBuilder = function(name, params){
    if(!routesMap.hasOwnProperty(name)){
        return null;
    }

    let url = routesMap[name]; // news/:id

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export {routesMap, urlBuilder};