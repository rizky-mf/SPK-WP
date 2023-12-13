import { useEffect, useState } from "react";

const useTitlePage = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Aplikasi SPK |`;
  }, []);
};

export default useTitlePage;
