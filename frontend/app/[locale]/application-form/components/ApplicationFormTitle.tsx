type ApplicationFormTitleProps = {
  field: {
    _key: string;
    title: string;
  };
};

export default function ApplicationFormTitle({ field }: ApplicationFormTitleProps) {
  return (
    <div key={field._key} className="col-span-3">
      <h2 className="text-xl font-900 uppercase text-primary sm:text-4xl">
        {field.title && field.title}
      </h2>
    </div>
  );
}
