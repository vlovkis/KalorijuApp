// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InfoForm } = initSchema(schema);

export {
  InfoForm
};