function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./dataFetchActions'));
__export(require('./components'));
// there seems to be a bug in TypeScript: this only works if the exports are in this order.
// Swapping the two exports leads to the core module missing the dataFetchActions constants
