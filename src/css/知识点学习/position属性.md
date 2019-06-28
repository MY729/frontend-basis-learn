# position属性

## 定义

|属性值|描述|
|----|----|
|static|默认值，按照正常的文档流进行排列|
|absolute|1. 脱离文档流 <br/>2. 有父元素的position值为absolute或relative,根据父元素定位，否则依据body对象定位<br/>3. 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定|

## static属性值

默认值。没有定位，元素出现在正常的流中

```html
<div class="parent">
  <div class="div2">div2</div>
  <div class="div3">div3</div>
</div>
```

```css
body {
  margin: 0;
}
.parent {
  width: 300px;
  height: 300px;
  background-color: #FFC1C1;
}
.div2 {
  width: 50px;
  height: 50px;
  background-color: #E9967A;
}
.div3 {
  width: 100px;
  height: 100px;
  background-color: #FA8072;
}
```

效果预览：[https://codepen.io/my729/pen/QXwOmQ](https://codepen.io/my729/pen/QXwOmQ)

上面示例的html结构和css是下面文章所有效果都要用到的公共代码，主要是设置颜色和宽高，在后面的文章将不再重复这些代码

## absolute属性值

我们让parent距离顶部50px; 给div2元素一个position: absolute的定位

```css
.parent {
  margin-top: 50px;
}
.div2 {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

可以看到div2重叠在div3上面, 并且距离body元素top: 30px,left: 30px;
  
这里我们说距离body元素而不是父元素parent,因为此时的父元素parent没有设置position值，那么它的position默认是static

我们回顾上面absolute值得定义:
::: tip absolute属性值定义描述
1. 脱离文档流----div2脱离父元素，相对body定位
2. 有父元素的position值为absolute或relative,根据父元素定位，否则依据body对象定位
3. 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定
:::

当我们给父元素parent设置position值为absolute或relative时：

```css
.parent {
  position: absolute;
}
```

此时div2是相对于parent元素定位的

效果预览：[https://codepen.io/my729/pen/vqEWvy](https://codepen.io/my729/pen/vqEWvy)

## relative属性值