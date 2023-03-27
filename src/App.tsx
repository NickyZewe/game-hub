import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem bg="orange" area="nav">
        Nav
      </GridItem>
      <Show above="lg">
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
