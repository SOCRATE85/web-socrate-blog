"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const validateUser = (options) => {
    if (!options.email.includes('@')) {
        return {
            errors: [
                {
                    field: 'email',
                    message: 'Not a valid email',
                }
            ]
        };
    }
    return null;
};
exports.validateUser = validateUser;
//# sourceMappingURL=validateUser.js.map