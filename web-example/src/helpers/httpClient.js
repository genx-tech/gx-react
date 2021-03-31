import settings from 'config/settings';
import { HttpClient } from '@genx/react/helpers';

const client = new HttpClient(settings.apiEndpoint);

export default client;
