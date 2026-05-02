"use strict";
exports.__esModule = true;
exports.isSameTypeRef = exports.isSameTypeRefByAttr = exports.getTypeId = exports.TypeRef = void 0;
/**
 * T should be restricted to Entity.
 */
var TypeRef = /** @class */ (function () {
    function TypeRef(app, type) {
        /**
         * Field that is never set. Used to make two TypeRefs incompatible (they are structurally compared otherwise).
         * Cannot be private.
         */
        this.phantom = null;
        this.app = app;
        this.type = type;
        Object.freeze(this);
    }
    /**
     * breaks when the object passes worker barrier
     */
    TypeRef.prototype.toString = function () {
        return "[TypeRef ".concat(this.app, " ").concat(this.type, "]");
    };
    return TypeRef;
}());
exports.TypeRef = TypeRef;
function getTypeId(typeRef) {
    return typeRef.app + "/" + typeRef.type;
}
exports.getTypeId = getTypeId;
function isSameTypeRefByAttr(typeRef, app, type) {
    return typeRef.app === app && typeRef.type === type;
}
exports.isSameTypeRefByAttr = isSameTypeRefByAttr;
function isSameTypeRef(typeRef1, typeRef2) {
    return isSameTypeRefByAttr(typeRef1, typeRef2.app, typeRef2.type);
}
exports.isSameTypeRef = isSameTypeRef;
