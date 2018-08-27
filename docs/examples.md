## pile-icons examples

>  从[pile-ui](https://www.npmjs.com/package/pile-ui)提取出来

<div class="demo">
<div 
  class="icon-wrapper" 
  v-clipboard="icon.id" 
  @success="$message.success(`${icon.id}已复制~`)" 
  @error="$message.error('代码复制失败~')"  
  v-for="icon in icons"
>
  <div class="svg-wrapper">
    <svg :viewBox="icon.viewBox">
      <use :xlink:href="`#${icon.id}`" />
    </svg>
  </div>
  <p>{{icon.id}}</p>
</div>
</div>

<style>
.demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center
}
.icon-wrapper {
  padding: 10px;
  min-width:150px;
  text-align: center;
}

.svg-wrapper {
  border: 1px dashed #999;
  padding: 10px;
  display: inline-block;
}
.icon-wrapper svg {
  width: 2em;
  height: 2em;
  fill: currentColor;
  overflow: hidden;
}
.icon-wrapper span {
  display: block;
}
</style>

<script>
import * as icons from 'pile-icons';

console.log(icons)

export default {
  data() {
    return {
      icons,
      row: 'icon'
    }
  }
}
</script>
