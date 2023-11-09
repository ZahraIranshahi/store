import { toast } from "react-toastify";

export const notify = (type, text) => {
  if (type === "success") {
    toast.success(text);
  }
  if (type === "error") {
    toast.error(text);
  }
};
