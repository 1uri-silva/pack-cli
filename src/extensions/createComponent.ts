import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const {
    template,
    print: { success, error },
  } = toolbox

  async function createComponent(folder: string, name: string) {
    if (!name) {
      error('Name must be specified')
      return
    }

    await template.generate({
      template: 'components.ts.ejs',
      target: `${folder}/${name}/index.tsx`,
      props: { name },
    })

    success(`Generated ${folder}/${name}.`)
  }
  toolbox.createComponent = createComponent
}
