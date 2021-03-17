var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var dtElements = document.getElementsByClassName('sample-content__title');
var result = [];
function titleToValue(element) {
    var parent = element.parentElement;
    if (!parent) {
        return null;
    }
    ;
    var codeElement = parent.getElementsByTagName('code')[0];
    if (!codeElement) {
        return null;
    }
    return codeElement.innerText;
}
for (var index in dtElements) {
    var element = dtElements[index];
    if (!element || !(element instanceof HTMLElement)) {
        continue;
    }
    ;
    if (element.innerText && element.innerText.includes('入力例')) {
        var inputValues = titleToValue(element);
        if (!inputValues) {
            alert('予期せぬ構造です。データが不足している可能性があります');
            continue;
        }
        var serchText = element.innerText.replace('入力例', '出力例');
        for (var index_1 in dtElements) {
            var outelement = dtElements[index_1];
            if (!outelement || !(outelement instanceof HTMLElement)) {
                continue;
            }
            ;
            if (outelement.innerText && outelement.innerText.includes(serchText)) {
                var outputValues = titleToValue(outelement);
                if (!outputValues) {
                    alert('予期せぬ構造です。データが不足している可能性があります');
                    continue;
                }
                result.push({ input: inputValues, output: outputValues });
            }
        }
    }
}
if (result.length) {
    var confirmResult = confirm("\u5024\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u304B\uFF1F" + JSON.stringify(result));
    if (confirmResult) {
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.clipboard.writeText(JSON.stringify(result))];
                    case 1:
                        _a.sent();
                        console.log("copied");
                        return [2 /*return*/];
                }
            });
        }); }, 1000);
    }
}
