import React from 'react';
import {Control, useForm, UseFormHandleSubmit} from 'react-hook-form';
import {map} from 'react-itertools';

export type TRHMethod = {
  handleSubmit: UseFormHandleSubmit<any>;
  control: Control<any, object>;
};

const isAccessForm = (child: any, method: TRHMethod) => {
  if (child) {
    if (child?.props?.name || child?.props?.useMethod === true) {
      return React.createElement(child.type, {
        ...{
          ...child.props,
          method,
          key: child.props.name,
        },
      });
    }
  }
  return child;
};

interface IRHFormProps {
  defaultValues: any;
  children(method: TRHMethod): React.ReactElement;
}

const RHForm: React.FC<IRHFormProps> = ({defaultValues, children}) => {
  const {control, handleSubmit} = useForm({defaultValues});

  return (
    <>
      {map(children({control, handleSubmit}), child =>
        isAccessForm(child, {control, handleSubmit}),
      )}
    </>
  );
};
export default RHForm;
