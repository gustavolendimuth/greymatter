import { SortOption, SortParams } from 'types/propertiesTypes';

type VariableObject = {
  [key: string]: any;
};

const sortCompare =
  <T extends VariableObject>(sortParams: SortParams): ((objectA: T, objectB: T) => number) =>
  (objectA: T, objectB: T): number =>
    sortParams.reduce((acc, prop) => {
      if (acc !== 0) return acc;

      const a = objectA[prop];
      const b = objectB[prop];

      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    }, 0);

export default function sort<T extends VariableObject>(
  items: T[],
  sortParams: SortParams | SortOption
): T[] {
  const params = Array.isArray(sortParams) ? sortParams : [sortParams];
  if (params.includes('custom')) return items;
  return items.sort(sortCompare(params));
}
