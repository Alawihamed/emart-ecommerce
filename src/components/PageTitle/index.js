import { TitleSection } from "./styleComponents";

const Title = (props) => {
  return (
    <TitleSection>
      <h2>{props.title}</h2>
    </TitleSection>
  );
};
export default Title;
