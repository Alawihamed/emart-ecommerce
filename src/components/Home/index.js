import { Container } from "@mui/material";
import Title from "../PageTitle";
import FeatureProducts from "../FeatureProducts";
const Home = () => {
  return (
    <Container>
      <Title title="Featured Product" />
      <FeatureProducts />
    </Container>
  );
};
export default Home;
