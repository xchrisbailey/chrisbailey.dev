// yanked mostly from Dan Vega
const fs = require('fs')
const inquirer = require('inquirer')
const slugify = require('slugify')
const jsToYaml = require('json-to-pretty-yaml')
const prettier = require('prettier')
const chalk = require('chalk')
const { exec } = require('child_process')

const log = console.log
const error = chalk.bold.red
const success = chalk.bold.green.inverse

;(async () => {
  const args = process.argv
  if (args.length < 3) {
    const { title, excerpt, tags } = await inquirer.prompt([
      { type: 'input', name: 'title', message: 'Post Title:' },
      { type: 'input', name: 'excerpt', message: 'Post Excerpt:' },
      { type: 'input', name: 'tags', message: 'Tags (comma separated):' },
    ])

    const slug = slugify(title).toLowerCase()
    const createdOn = new Date()
    const year = createdOn.getFullYear()
    const month = `${createdOn.getMonth() + 1 < 10 ? '0' : ''}${
      createdOn.getMonth() + 1
    }`
    const day = `${createdOn.getDate() < 10 ? '0' : ''}${createdOn.getDate()}`
    const blogPostFolder = `./content/posts/${year}/${month}/${day}`
    const tagsList = tags.split(',').map(t => t.trim())

    if (!fs.existsSync(blogPostFolder)) {
      fs.mkdirSync(blogPostFolder, { recursive: true })
    }

    const yaml = jsToYaml.stringify({
      slug,
      title,
      date: createdOn.toISOString(),
      published: false,
      excerpt: excerpt,
      author: 'Chris Bailey',
      tags: tagsList,
    })

    const markdown = prettier.format(`---\n${yaml}\n---\n`, {
      parser: 'markdown',
      singleQuote: true,
    })

    fs.writeFileSync(`${blogPostFolder}/${slug}.md`, markdown)

    log(
      success(
        `Post ${title} was created successfully, opening with Typora now..`
      )
    )
    exec(`open -a typora ${blogPostFolder}/${slug}.md`).unref()
  } else {
    log(error("Please don't provide any arguments to the generator"))
  }
})()
