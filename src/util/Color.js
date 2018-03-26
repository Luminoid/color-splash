export function isLight(background) {
  let lightReg1 = new RegExp(/^#[c-f].[c-f].[c-f].$/, 'i');
  let lightReg2 = new RegExp(/^#[d-f].[d-f]...$/, 'i');
  let lightReg3 = new RegExp(/^#[d-f]...[d-f].$/, 'i');
  let lightReg4 = new RegExp(/^#..[d-f].[d-f].$/, 'i');
  return (
    lightReg1.test(background) ||
    lightReg2.test(background) ||
    lightReg3.test(background) ||
    lightReg4.test(background)
  );
}
