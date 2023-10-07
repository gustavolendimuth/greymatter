/* eslint-disable import/prefer-default-export */
type ValidationProps = {
  Rule: any;
  name: string;
  languages: { id: string, title: string }[];
};

export function validation({ Rule, name, languages }: ValidationProps): any {
  return Rule.custom((fieldArray: any) => {
    if ((fieldArray?.filter((field: { value: string }) => field.value))?.length === languages?.length) {
      return true;
    }
    return `O ${name} é obrigatório`;
  });
}

type PreviewProps = {
  selection: { fieldArray: any[] },
  title: string;
};

export function preview({ selection: { fieldArray }, title }: PreviewProps) {
  let fieldValue: string | undefined;

  if (fieldArray) {
    const fieldObj = fieldArray.find((t) => t && t.value);
    if (fieldObj) {
      fieldValue = fieldObj.value;
    }
  }

  return {
    title: fieldValue || title,
  };
}
