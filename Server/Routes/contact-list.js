"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_list_1 = require("../Controllers/contact-list");
const router = express_1.default.Router();
exports.default = router;
router.get('/', contact_list_1.DisplayContactListPage);
router.get('/edit/:id', contact_list_1.DisplayEditPage);
router.get('/add', contact_list_1.DisplayAddPage);
router.get('/delete/:id', contact_list_1.ProcessDeletePage);
router.post('/edit/:id', contact_list_1.ProcessEditPage);
router.post('/add', contact_list_1.ProcessAddPage);
//# sourceMappingURL=contact-list.js.map