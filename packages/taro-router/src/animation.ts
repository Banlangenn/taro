/**
 * 插入页面动画需要的样式
 */
export function loadAnimateStyle (ms = 300) {
  const css = `
.taro_router .taro_page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translate(100%, 0);
  transition: transform ${ms}ms;
}

.taro_router .taro_page.taro_tabbar_page,
.taro_router .taro_page.taro_page_show.taro_page_stationed {
  transform: none;
}

.taro_router .taro_page.taro_page_show {
  transform: translate(0, 0);
}`

  const style = document.createElement('style')
  style.innerHTML = css
  document.getElementsByTagName('head')[0].appendChild(style)
}
