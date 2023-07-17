import * as yup from 'yup';

export const progressValidationSchema = yup.object().shape({
  progress: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
