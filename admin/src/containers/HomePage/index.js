/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {getModels} from '../../utils/contentApi';
import ItemCard from '../../components/ItemCard';
import { PluginHeader } from 'strapi-helper-plugin';

const HomePage = () => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    async function loadContentTypes() {
      const models = await getModels();
      setModels(models);
      console.log(models);
    }

    loadContentTypes();
  }, []);
  return (
    <>
     <PluginHeader
        title="Export Content"
        description={pluginId + " / Export content to file"}
      />
   { models.map(model => {
      return(
        <ItemCard  key={model.apiID} name={model.schema.collectionName} model={model} />
        )
      })}
    </>
  );
};

export default memo(HomePage);
