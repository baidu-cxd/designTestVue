<template>
  <div class="document">
    <!-- 文档导航控件虚拟层 -->
    <div class="doc-content-nav">
      <div class="doc-content-inner-content">
        <div class="nav">
          左侧导航
        </div>
        <div class="nav-right">
          右侧导航<br>
          右侧导航<br>
          右侧导航<br>
          右侧导航<br>
          右侧导航<br>
          右侧导航<br>
          右侧导航<br>
        </div>
      </div>
    </div> 
    <!-- 文档主体区域 -->
    <div class="main">
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
      文档<br>
    </div>
  </div>
</template>

<style lang="stylus">

// 样式

html, body, app, .document
  width 100%
  height 100%
.document
  position relative
.doc-content
  width 1200px
  margin auto
  background-color #ffffff
  z-index 2
  position absolute
.doc-content-nav
  width 100vw
  height 100vh
  position fixed
  background-color red
  z-index 1
  .doc-content-inner-content
    width 800px
    margin auto
    height 100%
    position relative
  .nav
    width 120px
    height 100%
    background-color yellow
  .nav-right
    width 120px
    height 100%
    background-color yellow
    position absolute
    right  0
    top 0
    height 100px
    overflow-y scroll
.main
  width 500px
  box-sizing border-box
  // margin auto
  height 1200px
  position absolute
  z-index 10
  left 50%
  transform translateX(-50%)


// 页脚部分
.doc-footer
  width 100%
  height 100px
  background #000
</style>


