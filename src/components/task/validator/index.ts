import * as Yup from "yup";

export const TaskValidation = () => {
  return Yup.object().shape({
    name: Yup.string().min(5, "Task name must be at least 5 characters").required("Task name is required"),
    date: Yup.string().required("Date is required"),
  });
};
