const HTMLAsset = require('./HTMLAsset');
const escapeStringRegexp = require('escape-string-regexp');

class InterpolateHtmlAsset extends HTMLAsset {
    async pretransform() {
        this.contents = this.interpolate(this.contents);
        return super.pretransform();
    }

    interpolate(code) {
        const env = this.options.env;
        Object.keys(env).forEach((envKey) => {
            const replacement = env[envKey];
            code = code.replace(
                new RegExp('%' + escapeStringRegexp(envKey) + '%', 'g'),
                replacement,
            )
        });
        return code;
    }
}

module.exports = InterpolateHtmlAsset;
