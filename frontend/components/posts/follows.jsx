import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const Follows = ({ follows, followers }) => {
  return (
    <div className="follows-div">
      <div className="follows-wrapper">
        <Tabs defaultTab="one">
          <TabList>
            <Tab tabFor="one">Following</Tab>
            <Tab tabFor="two">Followers</Tab>
          </TabList>
          <TabPanel tabId="one">
            <ul className="follow-list">
              {follows.map(user => (
                <li key={user.id} className="follow-list-item">
                  <div className="follow-list-item-div">
                    <img className="follow-avatar" src={user.avatar} alt="avatar" />
                    <div className="follow-info">
                      {user.username}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </TabPanel>
          <TabPanel tabId="two">
            <ul className="follow-list">
              {followers.map(user => (
                <li key={user.id} className="follow-list-item">
                  <div className="follow-list-item-div">
                    <img className="follow-avatar" src={user.avatar} alt="avatar" />
                    <div className="follow-info">
                      {user.username}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
};

export default Follows;
