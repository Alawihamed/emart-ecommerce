import React, { useState } from "react";
import Controls from "../FeatureControls";
import ProductCard from "../ProductCard";
import Menu from "../../menu";

const feature_list = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Fruits",
  },
  {
    id: 3,
    title: "Fresh Meat",
  },
  {
    id: 4,
    title: "Vegetables",
  },
];

const FeatureProducts = () => {
  const [activeTabId, setActiveTabId] = useState("All");
  const onChangeActiveTab = (title) => {
    setActiveTabId(title);
  };
  return (
    <>
      <Controls
        list={feature_list}
        activeTabs={onChangeActiveTab}
        activeTabId={activeTabId}
      />
      <ProductCard menu={Menu} activeTabId={activeTabId} />
    </>
  );
};
export default FeatureProducts;
