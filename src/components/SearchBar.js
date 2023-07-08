import React from 'react';

const searchBarStyle =
	'p-4 border border-gray-300 rounded-md text-gray-700 bg-white w-64';

const SearchBar = (props) => {
	const handleSearch = (event) => {
		const searchTerm = event.target.value;
		props?.onSearch(searchTerm);
	};

	return (
		<input
			type="search"
			className={searchBarStyle}
			placeholder={props?.placeHolder || 'Enter your search terms...'}
			onChange={handleSearch}
		/>
	);
};

export default SearchBar;
