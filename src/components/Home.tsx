import { FC } from 'react';
import Tabs from './Tab';
import HomeSearch from './HomeSearch';
import Trending from './TrendingPage';
import Random from './Random';

const Home: FC = () => {

    return (
        <div className='home-container'>
            <Tabs defaultActiveIndex={1}>
                <Tabs.TabList>
                    <Tabs.Tab index={1}>Home</Tabs.Tab>
                    <Tabs.Tab index={2}>Trending</Tabs.Tab>
                    <Tabs.Tab index={3}>Random</Tabs.Tab>
                </Tabs.TabList>
                <Tabs.TabPanel index={1}>
                    <HomeSearch />
                </Tabs.TabPanel>
                <Tabs.TabPanel index={2}>
                    <Trending />
                </Tabs.TabPanel>
                <Tabs.TabPanel index={3}>
                    <Random />
                </Tabs.TabPanel>
            </Tabs>
        </div>
    )

}

export default Home;
