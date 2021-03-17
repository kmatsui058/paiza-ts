var dtElements = document.getElementsByTagName('dt');
var result = [];
function titleToValue(element) {
    var parent = element.parentElement;
    if (!parent) {
        return null;
    }
    ;
    var ddElement = parent.getElementsByTagName('dd')[0];
    if (!ddElement) {
        return null;
    }
    var pElement = ddElement.getElementsByTagName('p')[0];
    if (!pElement) {
        return null;
    }
    return pElement.innerText;
}
for (var index in dtElements) {
    var element = dtElements[index];
    if (!element) {
        alert('予期せぬ構造です。データが不足している可能性があります');
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
            if (!outelement) {
                alert('予期せぬ構造です。データが不足している可能性があります');
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
var confirmResult = confirm("\u5024\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u304B\uFF1F");
if (confirmResult) {
    navigator.clipboard.writeText(JSON.stringify(result));
}
