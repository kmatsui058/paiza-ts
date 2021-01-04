import _fs = require('fs');
const fs = _fs.promises
import dayjs from 'dayjs'
import path = require('path');

async function main() {
    const oldDir = path.resolve(__dirname, `../old/${dayjs().format('YYYY-MM-DD-hh-mm-ss')}/`)
    const templateDir = path.resolve(__dirname, "../template/")
    const srcDir = path.resolve(__dirname, "../src/")
    const distDir =path.resolve(__dirname,  "../dist/")
    await fs.mkdir(oldDir)
    await fs.mkdir(path.resolve(oldDir, "dist/"))
    await fs.copyFile(path.resolve(srcDir, "answer.ts"), path.resolve(oldDir, "answer.ts"))
    await fs.copyFile(path.resolve(distDir, "answer.js"), path.resolve(oldDir, "dist/answer.js"))
    await fs.copyFile(path.resolve(srcDir, "testdata.json"), path.resolve(oldDir, "testdata.json"))
    await fs.copyFile(path.resolve(templateDir, "testdata.json"), path.resolve(srcDir, "testdata.json"))
    await fs.copyFile(path.resolve(templateDir, "answer.txt"), path.resolve(srcDir, "answer.ts"))
}

main()