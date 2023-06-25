import React from "react";

const DataListItem = (props) => {
	const { item, selectTab, selectedTab } = props;
	const { id, firstName, lastName, email, phone } = item || {};

	const isActive = selectedTab ? selectedTab.id === id : false;

  const onClickData = (e) => {
    debugger
		if (isActive) {
			selectTab(null);
			return;
		}
		selectTab(item);
	};

	return (
		<tr onClick={onClickData}>
			<td className="column1">{id}</td>
			<td className="column2">{firstName}</td>
			<td className="column3">{lastName}</td>
			<td className="column4">{email}</td>
			<td className="column5">{phone}</td>
		</tr>
	);
};
export default DataListItem;
