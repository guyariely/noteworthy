import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";

function getTextType(keyCode) {
  const textTypes = {
    72: "HIGHLIGHT",
    89: "CODE",
    83: "STRIKETHROUGH",
  };
  return textTypes[keyCode];
}

function getHeaderType(keyCode) {
  const headerTypes = {
    84: "header-one",
    72: "header-two",
  };
  return headerTypes[keyCode];
}

function keyBindingFn(e) {
  const { keyCode } = e;

  if (KeyBindingUtil.hasCommandModifier(e)) {
    const textType = getTextType(keyCode);
    if (textType) return textType;
  }

  if (e.nativeEvent.altKey) {
    const headerType = getHeaderType(keyCode);
    if (headerType) return headerType;
  }

  return getDefaultKeyBinding(e);
}

export { keyBindingFn };
