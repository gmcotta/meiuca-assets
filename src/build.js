const { svgToJS } = require('./utils/svgToJS.js');

const assetModuleFolder = ['icons'];

assetModuleFolder.forEach(asset => {
  const options = {
    inputDir: `src/assets/${asset}`,
    outputDir: `dist/assets/${asset}`
  };
  svgToJS(options);
})