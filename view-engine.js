const fs = require('fs');

const base = fs.readFileSync('base.html', 'utf8');

module.exports = setView = (content) => {
    const view = fs.readFileSync(content, 'utf8');
    return base.replace(/{% \w+ %}/, view);
}
