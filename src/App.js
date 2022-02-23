import { Tabs, Tab, TabPanel, TabList, TabPanels } from '@chakra-ui/react';
import Nav from './components/Navbar/Navbar';
import DadJokes from './components/DadJokes/DadJokes';
import DankJokes from './components/DankJokes/DankJokes';
export default function App() {
  return (
    <>
      <Nav />
      <Tabs isLazy margin={'5'}>
        <TabList>
          <Tab>Dank</Tab>
          <Tab>Dad</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <DankJokes />
          </TabPanel>
          <TabPanel>
            <DadJokes />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
