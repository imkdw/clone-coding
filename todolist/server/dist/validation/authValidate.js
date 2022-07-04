"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthValidate {
    static userId(userId) {
        const lowerCaseRegex = /[a-z]/g;
        const lowerCaseCondition = userId.match(lowerCaseRegex);
        const idLenghtCondition = userId.length >= 5 && userId.length <= 12;
        // userId의 길이가 0일 경우
        if (userId.length === 0) {
            return;
        }
        // 대문자가 포함되어 있을경우
        if (!lowerCaseCondition) {
            return;
        }
        // 5 ~ 12자리를 만족하지 못할경우
        if (!idLenghtCondition) {
            return;
        }
        return true;
    }
}
exports.default = AuthValidate;
//# sourceMappingURL=authValidate.js.map