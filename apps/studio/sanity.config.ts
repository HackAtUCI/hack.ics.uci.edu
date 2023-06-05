import {defineConfig} from 'sanity'
import {theme} from 'https://themer.sanity.build/api/hues?primary=1c3385;800'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hack.ics.uci.edu',
  theme,

  projectId: 'ue554f0d',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
