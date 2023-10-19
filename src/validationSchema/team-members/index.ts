import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  role: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
});
