import React from "react";

import { withWidth, AppBar, Tabs, Tab } from "@material-ui/core";

export default withWidth()(({ muscles, onSelect, category, width }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        // centered={width !== "xs"}
        // scrollable={width === "xs"}
        variant="scrollable"
        // scrollButtons="on"
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} key={group} />
        ))}
      </Tabs>
    </AppBar>
  );
});
