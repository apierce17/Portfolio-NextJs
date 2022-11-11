import { buildConfig } from 'payload/config';
import path from 'path';
import Posts from './collections/Posts';
import Media from './collections/Media';
import Projects from './collections/Projects';

export default buildConfig({
  serverURL: process.env.SERVER_URL, 
  collections: [
    Posts,
    Projects,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
