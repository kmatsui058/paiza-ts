import _fs = require('fs');
const fs = _fs.promises
import path = require('path');

async function main() {
    const oldDir = path.resolve(__dirname, `../old/`)
    const templateDir = path.resolve(__dirname, "../template/")
    const srcDir = path.resolve(__dirname, "../src/")
    const distDir =path.resolve(__dirname,  "../dist/")

    await fs.mkdir(oldDir)
    await fs.mkdir(distDir)
    
    const hasAnswerTs = _fs.existsSync(path.resolve(srcDir, "answer.ts"))
    if(!hasAnswerTs) {
        await fs.copyFile(path.resolve(templateDir, "answer.txt"), path.resolve(srcDir, "answer.ts"))
    }

    const hasTestDataJson = _fs.existsSync(path.resolve(srcDir, "testdata.json"))

    if(!hasTestDataJson) {
        await fs.copyFile(path.resolve(templateDir, "testdata.json"), path.resolve(srcDir, "testdata.json"))
    }
}

main()