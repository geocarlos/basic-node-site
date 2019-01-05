const setView = require('./view-engine');

const routes = {
    '/': 'index.html',
    '/home': 'index.html',
    '/about': 'about.html',
    '404': '404.html'
}

module.exports = route = (url)=>{
    return setView(routes[url]);
};