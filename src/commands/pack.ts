import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'pack-cli',
  description: 'Day to day automation',
  run: async (toolbox) => {
    const { printCommands } = toolbox.print

    printCommands(toolbox)
  },
}

module.exports = command
