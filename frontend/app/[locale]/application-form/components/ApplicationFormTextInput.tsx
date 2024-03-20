import { columnClass } from './utils/ColumnClass';

type ApplicationFormTextInputProps = {
  field: {
    title: string;
    required: boolean;
    columnSize: number;
    value: string;
  };
  id: string;
};

export default function ApplicationFormTextInput({ field, id }: ApplicationFormTextInputProps) {
  return (
    <div className={columnClass(field.columnSize) + ' flex flex-col justify-between gap-2 pb-4'}>
      <label
        className="px-1 font-medium text-secondary"
        htmlFor={field.value === 'cnpj' ? 'cnpj' : id}
      >
        {field.title}
      </label>
      <input
        className="h-12 rounded-md border-2 border-primary p-2 shadow-sm"
        type={field.value === 'number' ? 'number' : 'text'}
        id={field.value === 'cnpj' ? 'cnpj' : id}
        name={field.title}
        required={field.required}
        minLength={field.required ? 3 : undefined}
        placeholder={field.value === 'cnpj' ? '00.000.000/0000-00' : ''}
        spellCheck="false"
      />
    </div>
  );
}
