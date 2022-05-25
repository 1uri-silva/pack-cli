import { GluegunCommand, GluegunToolbox } from 'gluegun'

type ExtendsPropsGluegunToolbox = GluegunToolbox & {
  createComponent(folder: string, name: string): Promise<void>
}

const command: GluegunCommand = {
  name: 'generate:component',
  alias: ['gnc'],
  description: 'Create an component react [component name]',
  run: async (toolbox: ExtendsPropsGluegunToolbox) => {
    const { parameters, createComponent } = toolbox

    const firstSentenceUpperCase = parameters.first.replace(/([A-Z])/g, '$1')

    await createComponent(
      parameters.options?.p ?? 'src/components',
      firstSentenceUpperCase.charAt(0).toUpperCase() +
        firstSentenceUpperCase.slice(1)
    )
  },
}

module.exports = command
