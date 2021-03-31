import { inject } from '@genx/react/hoc';
import { SiteMapRoutes } from '@genx/react/web';

import sitemap from 'config/testSitemap';

export default inject({ sitemap })(SiteMapRoutes);
