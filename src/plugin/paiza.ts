
const dtElements = document.getElementsByClassName('sample-content__title')
const result: {input: string, output: string}[] = []

function titleToValue(element: HTMLElement): string | null {
    const parent = element.parentElement
    if (!parent) {
        return null
    };
    const codeElement = parent.getElementsByTagName('code')[0]
    if (!codeElement) {
        return null
    }
    return codeElement.innerText;
}
for (const index in dtElements) {
    const element = dtElements[index]
    if (!element || !(element instanceof HTMLElement)) { continue };
    if (element.innerText && element.innerText.includes('入力例')) {
        const inputValues = titleToValue(element)
        if (!inputValues) { alert('予期せぬ構造です。データが不足している可能性があります'); continue }
        const serchText = element.innerText.replace('入力例', '出力例')
        for (const index in dtElements) {
            const outelement = dtElements[index]
            if (!outelement || !(outelement instanceof HTMLElement)) { continue };
            if (outelement.innerText && outelement.innerText.includes(serchText)) {
                const outputValues = titleToValue(outelement)
                if (!outputValues) { alert('予期せぬ構造です。データが不足している可能性があります'); continue }
                result.push({ input: inputValues, output: outputValues })
            }
        }
    }
}
const confirmResult = confirm(`値をクリップボードにコピーしますか？${JSON.stringify(result)}`)
if(confirmResult) {
    setTimeout(async () => {
        await navigator.clipboard.writeText(JSON.stringify(result))
        console.log("copied")
    }, 1000)
}