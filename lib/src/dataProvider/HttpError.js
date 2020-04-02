var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(readonly, readonly, readonly) {
        if (readonly === void 0) { readonly = message; }
        if (readonly === void 0) { readonly = status; }
        if (readonly === void 0) { readonly = body = null; }
        _super.call(this, message);
        this.readonly = readonly;
        this.readonly = readonly;
        this.readonly = readonly;
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = new Error(message).stack;
        }
        this.stack = new Error().stack;
    }
    return HttpError;
})(Error);
exports["default"] = HttpError;
