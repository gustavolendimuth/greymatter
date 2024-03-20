type ApplicationFormTitleProps = {
  field: {
    title: string;
    _key: string;
  };
};

export default function ApplicationFormTitle({ field }: ApplicationFormTitleProps) {
  return (
    <div className="col-span-3">
      <h2 className="text-xl font-900 uppercase text-primary sm:text-4xl">
        {field.title && field.title}
      </h2>
    </div>
  );
}
