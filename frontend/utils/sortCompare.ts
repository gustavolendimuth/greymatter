type ObjectWithVariableKeyAndValue = {
  [key: string]: any;
};

const sortCompare = <T extends ObjectWithVariableKeyAndValue>(...prop: string[]): ((objectA: T, objectB: T) => number) => {
  const compare = (objectA: T, objectB: T): number => {
    const a = objectA[prop[0]];
    const b = objectB[prop[0]];
    if (a > b) return 1;
    if (a < b) return -1;
    if (prop.length > 1) { return sortCompare<T>(...prop.slice(1))(objectA, objectB); }
    return 0;
  };
  return compare;
};

export default sortCompare;
