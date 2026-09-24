"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeonetError = void 0;
class GeonetError extends Error {
    isGeonetError = true;
    sdk = 'Geonet';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.GeonetError = GeonetError;
//# sourceMappingURL=GeonetError.js.map