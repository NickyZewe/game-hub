import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        sm: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="sm">
        <GridItem bg="dodgerblue" area="aside">
          aside
        </GridItem>
      </Show>
      <GridItem bg="coral" area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
