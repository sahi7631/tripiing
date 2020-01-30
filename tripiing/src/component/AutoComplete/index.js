import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';
const { Option, OptGroup } = AutoComplete;

const dataSource = [
    {
      title: 'Libraries',
    },
    {
      title: 'Solutions',
    },
    {
      title: 'Articles',
    },
  ];
function renderTitle(title) {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          more
        </a>
      </span>
    );
  }

const Complete = (props) => {
  const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
    </OptGroup>
  ));

    return (
      <div className="certain-category-search-wrapper" style={{ width: 220 }}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 220 }}
          size="large"
          style={{ width: '100%' }}
          dataSource={options}
          placeholder="input here"
          optionLabelProp="value"
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      </div>
    );
  }
 
  export default Complete