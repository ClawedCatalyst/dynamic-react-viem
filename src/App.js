import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import Main from "./Main";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "90270b53-6622-4e91-8d50-dcb48b428068",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <Main />
  </DynamicContextProvider>
);

export default App;
