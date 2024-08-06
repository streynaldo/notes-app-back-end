import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle, { rules } from 'eslint-config-dicodingacademy';


export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  rules['no-console'] = 'off',
  rules['linebreak-style'] = 'off',
];