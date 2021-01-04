import _fs = require('fs');
const fs = _fs.promises
import dayjs from 'dayjs'

async function main() {
    const oldDir = `../old/${dayjs().format('YYYY-MM-DD-hh-mm-ss')}/`
    const templateDir = "../template/"
    const srcDir = "../src/"
    await fs.copyFile(srcDir + "answer.ts", oldDir + "answer.ts")
    await fs.copyFile(srcDir + "answer.js", oldDir + "answer.js")
    await fs.copyFile(srcDir + "testdata.json", oldDir + "testdata.json")
    await fs.copyFile(templateDir + "testdata.json", srcDir + "testdata.json")
    await fs.copyFile(templateDir + "answer.txt", srcDir + "answer.ts")
}

main()