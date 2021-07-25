const fs = require('fs')
const path = require('path')
const TurndownService = require('turndown')

var turndownService = new TurndownService()

for (let i = 30; i < 32; i++) {
    const content = fs.readFileSync(`newsletter/raw/mlutd${i}.html`, 'utf-8')
    var markdown = turndownService.turndown(content)
    fs.writeFileSync(`newsletter/raw/machine-learning-up-to-date-${i}.md`, markdown)
}
// const content = fs.readFileSync('data.xml', { encoding: 'utf-8' })
// var markdown = turndownService.turndown(content)
// fs.writeFileSync('data.md', markdown)
// console.log(markdown)