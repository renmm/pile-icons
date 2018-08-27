## icon图标方案

我们在做组件库时，不可避免要碰到针对图标的设计。

一张表格表示：

| 方案        | 优点           | 缺点  | 说明 |
| ------------- |:-------------:| -----:| -----:|
| CSS Sprite（雪碧图）      | 1. 减少网页的http请求，提高性能 | 1. 维护困难 <br /> 2. 缓存失效 | 雪碧图如果只针对较独立的活动类页面，通过脚本生成，也是一种不错的方案 |
| font icons     | 1. 轻量性 <br /> 2. 灵活性  <br /> 3. 兼容性高      |  1. 图标字体只能被渲染成单色或者CSS3的渐变色，由于此限制使得它不能广泛使用 <br /> 2. 动画上只能使用简单的css动画 | 兼容性好，普及性高，pc兼容ie8的，使用字体图标 |
| svg sprite | 1. 缩放无损还原，显示清晰 <br />  2. 语义性良好 <br /> 3. 可用CSS控制图标样式以及动画 <br /> 4. 减少http请求      |  1. SVG在绘制的性能上比PNG要差 <br /> 2. 局限性，对应单色或普通渐变没什么问题，但对不规则的渐变以及特效叠加效果显示不全 <br /> 3. 兼容性稍差，android > 2.3，ie >= 9 | 移动端场景可以普及svg sprite方式，可以考虑动画版icon |


#### 使用 SVG 中的 symbol，use 元素来制作SVG Sprite


```css
<body>
    <svg style="width:0; height:0; visibility:hidden;position:absolute;z-index:-1">
        <symbol viewBox="0 0 32 32" id="card">
            <path d="M4 15.554V23h24v-7.446L22.868 7H9.133l-5.132 8.554zM2 15L8 5h16l6 10v10H2V15zm18 2v2h4v-2h-4zM8 17v2h4v-2H8zm18 8h4v2h-4v-2zM2 25h4v2H2v-2z"></path>
        </symbol>
    </svg>
    <svg>
        <use xlink:href="#card"/> 
    </svg>
</body>
```


参考:

1. [基于svg-sprite的svg icon方案实践](http://tech.lede.com/2018/03/28/fe/svg-icon/)
2. [拥抱Web设计新趋势：SVG Sprites实践应用](https://aotu.io/notes/2016/07/09/SVG-Symbol-component-practice/index.html)
3. [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
