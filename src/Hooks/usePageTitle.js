import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Pastry Cloud`;
  }, [title]);
};

export default usePageTitle;
