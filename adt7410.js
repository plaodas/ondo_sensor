/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/@chirimen/adt7410@1.0.4/adt7410.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).ADT7410 = e()
}(this, function () {
    "use strict";
    const t = function (t, e) {
        this.i2cPort = t, this.i2cSlave = null, this.slaveAddress = e
    };
    return t.prototype = {
        init: async function () {
            this.i2cSlave = await this.i2cPort.open(this.slaveAddress)
        },
        read: async function () {
            if (null == this.i2cSlave) throw new Error("i2cSlave is not open yet.");
            const t = await this.i2cSlave.read8(0),
                e = (t << 8 | await this.i2cSlave.read8(1)) >> 3;
            return 0 === (16 & t) ? e / 16 : (e - 8192) / 16
        }
    }, t
});
//# sourceMappingURL=/sm/b9bdc926b677d62f0f954b762fd13d2b60e2d2663ac87aa3fbbe742f2a46bbab.map