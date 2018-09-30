function handleContextMenu(event) {

  const t           = document.defaultView.getComputedStyle(event.target, '');
  const color       = t.getPropertyCSSValue('color').getRGBColorValue();
  const r           = ('00' + parseInt(color.red.cssText).toString(16)).slice(-2);
  const g           = ('00' + parseInt(color.green.cssText).toString(16)).slice(-2);
  const b           = ('00' + parseInt(color.blue.cssText).toString(16)).slice(-2);
  const a           = ('00' + parseInt(parseFloat(color.alpha.cssText) * 255).toString(16)).slice(-2);
  const font_family = t.getPropertyCSSValue('font-family').cssText;
  const font_size   = t.getPropertyCSSValue('font-size').cssText;
  const font_weight = t.getPropertyCSSValue('font-weight').cssText;
  const line_height = t.getPropertyCSSValue('line-height').cssText;
  const opacity     = t.getPropertyCSSValue('opacity').cssText;

  var rgba  = ('#' + r + g + b);
  if (a != 'ff') { rgba += a }

  var output = {
    'Family': font_family,
    'Size': (font_size + ' / ' + line_height),
    'Weight': font_weight,
    'Color': rgba.toUpperCase(),
  };

  if (opacity != "1") { output['Opacity'] = opacity }

  safari.self.tab.setContextMenuEventUserInfo(event, output);

};

document.addEventListener("contextmenu", handleContextMenu, false);
