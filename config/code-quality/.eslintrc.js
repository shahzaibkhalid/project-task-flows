const projectESLintConfig = {
  extends: [
    require.resolve('manage-react-app/eslint'),

    // -------- START --------
    // ADD PROJECT SPECFIC EXTENDS HERE
    // -------- END --------

    /**
     * We are using `eslint-config-prettier` to turn off some of the
     * ESLint rules that conflicts with Prettier, e.g. `max-len`, 'quptes'
     * etc. We want to use ESLint for code-quality and Prettier for code-
     * formatting and it makes sense to turn-off Formatting-specific rules
     * of ESLint which this package does.
     * Note: We don't need `eslint-plugin-prettier` which runs Prettier as
     * part of ESLint.
     * Note: THIS HAS TO BE AT THE END TO TURN OFF THE RULES, SO THAT NO
     * OTHER PACKAGE CAN OVERRIDE IT.
     */
    require.resolve('eslint-config-prettier'),
  ],
};

module.exports = projectESLintConfig;
