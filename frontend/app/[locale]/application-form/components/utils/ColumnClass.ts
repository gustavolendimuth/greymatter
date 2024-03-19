export const columnClass = (size: number) => {
  let className = 'col-span-3';
  if (size === 3) {
    className = 'col-span-1';
  } else if (size === 2) {
    className = 'col-span-2';
  }
  return className;
};
