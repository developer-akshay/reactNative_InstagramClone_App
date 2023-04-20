module.exports = {

  //if you don't want to write import react from 'React'  again and again 
  presets: [
    [
    'module:metro-react-native-babel-preset',
    {useTransformReactJSXExperimental: true},
    ],
  ],
  //making runtime automatic 
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      }
    ],
  ],
};
