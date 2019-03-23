import React from 'react';

import JSLinks from '../../routes/aside-links/JSLinks';
import WebpackLinks from '../../routes/aside-links/WebpackLinks';
import ReactLinks from '../../routes/aside-links/ReactLinks';
import NodeJsLinks from '../../routes/aside-links/NodeJsLinks';

const Links = ({ page }) => {
  switch (page) {
    case 'js-page':      return <JSLinks      />
    case 'webpack-page': return <WebpackLinks />
    case 'react-page':   return <ReactLinks   />
    case 'nodejs-page':  return <NodeJsLinks  />
  }
}

export default Links;
