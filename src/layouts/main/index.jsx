import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth("max-w-2xl")
    localStorage.setItem("width", width);
  }, [width]);

  return (
    <>
      <Outlet />
    </>
  );
}
