/* eslint-disable import/prefer-default-export */
type FullValidationProps = SimpleValidadeProps & {
  title: string;
  languages: { id: string, title: string }[];
};

type SimpleValidadeProps = {
  rule: any;
  title: string;
};

export function fullValidation({ rule, title, languages }: FullValidationProps): any {
  return rule?.custom((fieldArray: any) => {
    if ((fieldArray?.filter((field: { value: string }) => field.value))?.length === languages?.length) {
      return true;
    }
    return `O campo ${title} é obrigatório`;
  });
}

export function simpleValidation({ rule, title }: SimpleValidadeProps): any {
  return rule?.custom((fieldArray: any) => {
    if (fieldArray?.filter((field: { value: string }) => field.value)?.length > 0) {
      return true;
    }
    return `O campo ${title} é obrigatório`;
  });
}

export function preview(fieldArray: any[]) {
  let fieldValue: string | undefined;

  if (fieldArray) {
    const fieldObj = fieldArray.find((t) => t && t.value);
    if (fieldObj) {
      fieldValue = fieldObj.value;
    }
  }

  return fieldValue;
}
