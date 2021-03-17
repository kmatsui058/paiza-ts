
const dtElements = document.getElementsByTagName('dt')
const result: {input: string, output: string}[] = []

function titleToValue(element: HTMLElement): string | null {
    const parent = element.parentElement
    if (!parent) {
        return null
    };
    const ddElement = parent.getElementsByTagName('dd')[0]
    if (!ddElement) {
        return null
    }
    const pElement = ddElement.getElementsByTagName('p')[0]
    if (!pElement) {
        return null
    }
    return pElement.innerText;
}
for (const index in dtElements) {
    const element = dtElements[index]
    if (!element) { alert('予期せぬ構造です。データが不足している可能性があります'); continue };
    if (element.innerText && element.innerText.includes('入力例')) {
        const inputValues = titleToValue(element)
        if (!inputValues) { alert('予期せぬ構造です。データが不足している可能性があります'); continue }
        const serchText = element.innerText.replace('入力例', '出力例')
        for (const index in dtElements) {
            const outelement = dtElements[index]
            if (!outelement) { alert('予期せぬ構造です。データが不足している可能性があります'); continue };
            if (outelement.innerText && outelement.innerText.includes(serchText)) {
                const outputValues = titleToValue(outelement)
                if (!outputValues) { alert('予期せぬ構造です。データが不足している可能性があります'); continue }
                result.push({ input: inputValues, output: outputValues })
            }
        }
    }
}
const confirmResult = confirm(`値をクリップボードにコピーしますか？`)
if(confirmResult) {
    navigator.clipboard.writeText(JSON.stringify(result))
}