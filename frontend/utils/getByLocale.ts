/* eslint-disable no-redeclare */
import { LocalizedObject, TypedObject } from 'types/propertiesTypes';

// Overloaded function signatures
export function getByLocale(
  input: [
    LocalizedObject<string> | LocalizedObject<TypedObject>,
    LocalizedObject<TypedObject> | LocalizedObject<string>,
  ],
  locale: string
): [string | null, TypedObject | null];

export function getByLocale<T>(input: LocalizedObject<T>, locale: string): T | null;

// Implementation
export function getByLocale(
  input:
    | [LocalizedObject<string> | LocalizedObject<TypedObject>, LocalizedObject<TypedObject> | LocalizedObject<string>]
    | LocalizedObject<any>,
  locale: string
): any {
  if (!input) return null;

  const getValue = <T>(obj: LocalizedObject<T>): T | null => {
    const values = obj[locale];
    return values && values.length > 0 ? values[0].value : null;
  };

  if (Array.isArray(input)) {
    return [getValue(input[0] as LocalizedObject<string>), getValue(input[1] as LocalizedObject<TypedObject>)];
  }

  return getValue(input);
}
