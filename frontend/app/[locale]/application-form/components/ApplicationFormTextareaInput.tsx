import { columnClass } from './utils/ColumnClass';

type ApplicationFormTextareaInputProps = {
  field: {
    title: string;
    required: boolean;
    columnSize: number;
  };
  id: string;
};

export default function ApplicationFormTextareaInput({
  field,
  id,
}: ApplicationFormTextareaInputProps) {
  return (
    <div className={columnClass(field.columnSize) + ' flex flex-col gap-2 pb-4'}>
      <label className="px-1 font-medium text-secondary" htmlFor={id}>
        {field.title}
      </label>
      <textarea
        className="w-full rounded-md border-2 border-primary p-2 shadow-sm"
        id={id}
        required={field.required}
        minLength={field.required ? 3 : 0}
        rows={4}
        spellCheck="true"
      />
    </div>
  );
}
