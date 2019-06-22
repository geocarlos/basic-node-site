/**
 * This module puts content templates into the base template
 */

// Require fs module to read in the template files.
const fs = require('fs');

// Read in base.html synchronously
const base = fs.readFileSync('base.html', 'utf8');

module.exports = getView = (content) => {
    // Read in content template synchronously
    const view = fs.readFileSync(content, 'utf8');
    // Note that {% content %} in base.html is replaced with the template content.
    // The regular expression /{% \w+ %}/ makes it possible to use any word between
    // {% and %}.
    return base.replace(/{% \w+ %}/, view)
}
