import { GluegunCommand, GluegunToolbox } from 'gluegun'

type ExtendsPropsGluegunToolbox = GluegunToolbox & {
  createComponent(folder: string, name: string): Promise<void>
}

const command: GluegunCommand = {
  name: 'generate:page',
  alias: ['gnp'],
  description: 'Create an page react [component page name]',
  run: async (toolbox: ExtendsPropsGluegunToolbox) => {
    const { parameters, createComponent } = toolbox

    const firstSentenceUpperCase = parameters.first.replace(/([A-Z])/g, '$1')

    await createComponent(
      parameters.options?.p ?? 'src/pages',
      firstSentenceUpperCase.charAt(0).toUpperCase() +
        firstSentenceUpperCase.slice(1)
    )
  },
}

module.exports = command
