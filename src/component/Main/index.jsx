import React from "react";

import DataList from "./DataList";

const Data = (props) => {
  const { selectTab, selectedTab } = props;

  return (
    <div>
      <DataList selectTab={selectTab} selectedTab={selectedTab} />
    </div>
  );
};
export default Data;
