import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <GatsbySeo title="404: Not found" language="en" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
