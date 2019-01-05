/**
 * This module defines which template should be picked based on the Request URL
 */

 // Require the module that puts content templates into the base template
const setView = require('./view-engine');

// Object that has URLs as keys and templates as values
const routes = {
    '/': 'index.html',
    '/home': 'index.html',
    '/about': 'about.html',
    '404': '404.html'
}

module.exports = route = (url)=>{
    return getView(routes[url]);
};