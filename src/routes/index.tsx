import { Route, Routes } from "react-router-dom";
import Counter from "../components/contents/counter";
import { Home } from "../pages";
import { Wiki } from "../pages/wiki";

export const RoutesManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<Wiki />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};
