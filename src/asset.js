const HTMLAsset = require('./HTMLAsset');
const escapeStringRegexp = require('escape-string-regexp');

class InterpolateHtmlAsset extends HTMLAsset {
    async pretransform() {
        this.contents = this.interpolate(this.contents);
        return super.pretransform();
    }

    interpolate(code) {
        const env = this.options.env;
        const regex = /%(\w.*?)%/g;
        
        return code.replace(regex, (match, envKey) => env[envKey] === undefined ? match : env[envKey]);
    }
}

module.exports = InterpolateHtmlAsset;
