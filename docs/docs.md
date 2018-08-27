## pile-icons

> 此库存放[pile-icons](https://www.npmjs.com/package/pile-icons)的svg图标

#### 使用`svg`图标

install

```shell
npm i --save pile-icons 
```

#### 按需加载`svg icon`，使用[babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import):

install

```shell
npm i -D babel-plugin-import

```

Via `.babelrc` or `babel-loader`.

```json
{
  "plugins": ["import", {
      "libraryName": "pile-icons",
      "customName": name => `pile-icons/dist/svg/${name}.svg`
    }]
}
```

examples:

```js
import { car } from 'pile-icons';
 
      ↓ ↓ ↓ ↓ ↓ ↓
      
var car = require('pile-icons/svg/car.svg');
```

#### 生成svg-sprite，使用webpack插件[svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader)

install 

```shell
npm i -D svg-sprite-loader
```

update `webpack.config`:

```js
config.module.rules.push({
  test: /\.svg$/,
  include: ['pile-icons'],
  use: [
    {
      loader: 'svg-sprite-loader',
      options: {
        symbolId: '[name]',
      },
    },
  ],
}, {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  exclude: ['pile-icons'],
  loader: 'url-loader?limit=10000&minetype=image/svg+xml',
});
```
::: warning
配置2条规则，是因为`pile-icons`需要依赖`svg-sprite-loader`动态将svg生成svg-sprite格式，而项目里的其他使用svg格式的不需要。
:::

#### 使用`svg`图标:

```js
import {car} from 'pile-icons';

<svg :viewBox="car.viewBox">
  <use :xlink:href="`#${car.id}`" />
</svg>
```

::: warning
需要依赖webpack的插件`svg-sprite-loader`动态插入`svg-sprite`
:::
