export default function main(lines: string[], debug = false): string {
    const numbers: number[] = lines.map(line => Number(line))
    let result = numbers[0]
    if(!result) throw new Error
    numbers.forEach(number => {
        if(!result) throw new Error
        if (number < result)
            result = number
    })
    if(debug) console.log('hoge')
    return result.toFixed()
}
//@ts-ignore
Object.defineProperty(global, 'main', {value: main})