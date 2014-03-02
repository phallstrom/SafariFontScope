function handleContextMenu(event) {

  t = document.defaultView.getComputedStyle(event.target, '');

  color = t.getPropertyCSSValue('color');
  r = parseInt(color.getRGBColorValue().red.cssText).toString(16);
  g = parseInt(color.getRGBColorValue().green.cssText).toString(16);
  b = parseInt(color.getRGBColorValue().blue.cssText).toString(16);

  safari.self.tab.setContextMenuEventUserInfo(event, 
    {
      'Font Family': t.getPropertyCSSValue('font-family').cssText,
      'Font Size': t.getPropertyCSSValue('font-size').cssText,
      'Line Height': t.getPropertyCSSValue('line-height').cssText,
      'Font Color': ('#' + r + g + b).toUpperCase()
    }
  );

};

document.addEventListener("contextmenu", handleContextMenu, false);

