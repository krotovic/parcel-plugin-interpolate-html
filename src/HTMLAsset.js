module.exports = parseInt(process.versions.node, 10) < 8
    ? require('parcel-bundler/lib/assets/HTMLAsset.js')
    : require('parcel-bundler/src/assets/HTMLAsset.js');
