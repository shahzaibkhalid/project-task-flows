const { mergePrettierConfigWithBase } = require('manage-react-app/prettier')

const projectPrettierConfig = {
  /**
   * You can specify custom project-specific
   * Prettier config here.
   */
}

module.exports = mergePrettierConfigWithBase(projectPrettierConfig)
