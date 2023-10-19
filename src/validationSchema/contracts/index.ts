import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  status: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
