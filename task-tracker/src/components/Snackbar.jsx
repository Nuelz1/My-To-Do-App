import { useEffect } from "react";
import useMessageStore from "../store/useMessageStore";

const Snackbar = () => {
  const { message, type, show, clearMessage } =
    useMessageStore();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, clearMessage]);

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white ${
        type === "success"
          ? "bg-green-500"
          : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
