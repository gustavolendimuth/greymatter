import React from 'react';

import ApplicationFormTitle from './ApplicationFormTitle';

type ApplicationFormFileUploadProps = {
  id: string;
  field: {
    title: string;
    _key: string;
  };
};

export default function ApplicationFormFileUpload({ id, field }: ApplicationFormFileUploadProps) {
  return (
    <>
      <ApplicationFormTitle field={field} />
      <input
        className="form-control form-control-lg attachments col-span-3"
        name={field.title}
        type="file"
        id={id}
        multiple
      />
    </>
  );
}
