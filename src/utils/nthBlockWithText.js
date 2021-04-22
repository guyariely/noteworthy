function nthBlockWithText(blocks, n) {
  let i = 0;
  for (const block of blocks) {
    if (block.text) i++;
    if (i === n) return block.text;
  }
  return null;
}

export { nthBlockWithText };
