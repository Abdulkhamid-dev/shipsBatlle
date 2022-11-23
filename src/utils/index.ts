export function pxToRem(size: number) {
  if (typeof size === "number") {
    return `${Number(size / 16)}rem`;
  }
  throw new Error("size is not a number. Type numbers only");
}
