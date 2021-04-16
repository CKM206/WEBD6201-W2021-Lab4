"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFunction = exports.AuthGuard = exports.UserDisplayName = void 0;
function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
    return '';
}
exports.UserDisplayName = UserDisplayName;
function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('./login');
    }
    next();
}
exports.AuthGuard = AuthGuard;
function TestFunction(req, res, next) {
    console.error("HEY I GOT HERE");
    next();
}
exports.TestFunction = TestFunction;
//# sourceMappingURL=index.js.map