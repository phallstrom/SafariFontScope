function handleContextMenu(event) {

  var t           = document.defaultView.getComputedStyle(event.target, '');
  var color       = t.getPropertyCSSValue('color');
  var r           = ('00' + parseInt(color.getRGBColorValue().red.cssText).toString(16)).slice(-2);
  var g           = ('00' + parseInt(color.getRGBColorValue().green.cssText).toString(16)).slice(-2);
  var b           = ('00' + parseInt(color.getRGBColorValue().blue.cssText).toString(16)).slice(-2);
  var font_family = t.getPropertyCSSValue('font-family').cssText;
  var font_size   = t.getPropertyCSSValue('font-size').cssText;
  var font_weight = t.getPropertyCSSValue('font-weight').cssText;
  var line_height = t.getPropertyCSSValue('line-height').cssText;

  safari.self.tab.setContextMenuEventUserInfo(event, 
    {
      'Family': font_family,
      'Size': (font_size + ' / ' + line_height),
      'Weight': font_weight,
      'Color': ('#' + r + g + b).toUpperCase()
    }
  );

};

document.addEventListener("contextmenu", handleContextMenu, false);

