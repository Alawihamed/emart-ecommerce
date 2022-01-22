import { FeaturedControls } from "./styleComponents";
const Controls = ({ list, activeTabs, activeTabId }) => {
  const activeTab = (title) => {
    activeTabs(title);
  };
  return (
    <FeaturedControls>
      <ul>
        {list.map((eachItem) => (
          <li
            className={eachItem.title === activeTabId ? "active" : ""}
            key={eachItem.id}
            onClick={() => activeTab(eachItem.title)}
          >
            {eachItem.title}
          </li>
        ))}
      </ul>
    </FeaturedControls>
  );
};
export default Controls;
