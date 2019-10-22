module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
    //移动端适配，默认设计稿的宽度为750px，在css中直接设置px，编译时转换为rem
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ['*'],
      minPixelValue: 1
    }
  }
};
