"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminOrSuper = void 0;
const isAdminOrSuper = (req, res, next) => {
    try {
        if (req.tokenData.role !== 2 && req.tokenData.role !== 3) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorize'
            });
        }
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Unauthorize'
        });
    }
};
exports.isAdminOrSuper = isAdminOrSuper;
