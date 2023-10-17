export interface TypedObject {
  _type: string;
  _key?: string;
  asset?: Asset
}

export type SortOptions = '["custom"]' | '["name"]' | '["position"]' | '["name", "position"]';
export type SortParams = Array<'custom' | 'name' | 'position'>;

export type BackgroundType = {
  larger?: boolean;
  align?: string;
  asset: Asset;
};

export type Asset = {
  _ref: string;
  _type: string;
};

export type ImageType = {
  asset: Asset;
  alt: string;
  width?: number;
  height?: number;
  caption?: LocalizedObject<string>;
};

export type LocalizedValue<T> = { _key: string; value: T };
export type LocalizedObject<T> = { [key: string]: LocalizedValue<T>[] };

export type LocalizedArray<T extends any[]> = {
  [K in keyof T]: T[K] extends LocalizedObject<infer U> ? U : never;
};
