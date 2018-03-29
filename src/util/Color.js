export function isLight(background) {
  let lightReg1 = /^#[c-f].[c-f].[c-f].$/i;
  let lightReg2 = /^#[d-f].[d-f]...$/i;
  let lightReg3 = /^#[d-f]...[d-f].$/i;
  let lightReg4 = /^#..[d-f].[d-f].$/i;
  return (
    lightReg1.test(background) ||
    lightReg2.test(background) ||
    lightReg3.test(background) ||
    lightReg4.test(background)
  );
}

function hex2dec(hex) {
  let numberReg = /^\d$/;
  let upperCaseReg = /^[ABCDEF]$/;
  let lowerCaseReg = /^[abcdef]$/;
  if (numberReg.test(hex)) {
    return parseInt(hex, 10);
  } else if (upperCaseReg.test(hex)) {
    return hex.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
  } else if (lowerCaseReg.test(hex)) {
    return hex.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
  } else {
    return 0;
  }
}

export function hex2rgb(hex) {
  const [, a, b, c, d, e, f] = hex;
  const red = 16 * hex2dec(a) + hex2dec(b);
  const green = 16 * hex2dec(c) + hex2dec(d);
  const blue = 16 * hex2dec(e) + hex2dec(f);
  return [red, green, blue];
}
