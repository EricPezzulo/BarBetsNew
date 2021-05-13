import { useState } from "react";
import "./LoadPagination.css";

function LoadPagination() {
  const [items, setItems] = useState([]);
  const [visable, setVisable] = useState(3);

  const loadMore = () => {
    setVisable(visable + 5);
  };

  return <div></div>;
}

export default LoadPagination;
