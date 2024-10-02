import { FC, createContext, useState, ReactNode, useContext } from 'react';

interface TabsProps {
    children: ReactNode,
    defaultActiveIndex: number,
}

interface TabListProps {
    children: ReactNode,
}

interface TabProps {
    children: ReactNode,
    index: number,
}

interface TabPanelProps {
    children: ReactNode,
    index: number,
}

interface TabContextProps {
    activeTab: number,
    handleTabClick: (tabIndex: number) => void
}

const TabContext = createContext<TabContextProps | null>(null);

const Tabs: FC<TabsProps> & {
    TabList: FC<TabListProps>,
    Tab: FC<TabProps>,
    TabPanel: FC<TabPanelProps>
} = (props) => {

    // props
    const { children, defaultActiveIndex } = props;

    // state
    const [activeTab, setActiveTab] = useState<number>(defaultActiveIndex);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    }

    return (
        <TabContext.Provider value={{ activeTab, handleTabClick }}>
            <div className='tab-container'>{children}</div>
        </TabContext.Provider>
    )
}

const TabList: FC<TabListProps> = (props) => {

    // props
    const { children } = props;

    return (
        <div className='tab-list-wrapper'>
            {children}
        </div>
    )

}

const Tab: FC<TabProps> = (props) => {

    // props
    const { children, index } = props;

    const { activeTab, handleTabClick } = useContext(TabContext) as TabContextProps;

    return (
        <div
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
        >
            {children}
        </div>
    )

}

const TabPanel: FC<TabPanelProps> = (props) => {

    // props
    const { children, index } = props;

    const { activeTab } = useContext(TabContext) as TabContextProps;

    if (activeTab !== index) return null;

    return (
        <div className='tab-panel-container'>
            {children}
        </div>
    )

}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
