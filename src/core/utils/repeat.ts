export const repeat = (times: number, block: (index: number) => void) => {
  for (let i = 0; i < times; i++) {
    block(i);
  }
};
