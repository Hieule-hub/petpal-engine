export const checkNameSearch = (textSearch: string, text: string): boolean => {
	const lowercase = textSearch.toLowerCase();
	const textFilter = lowercase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	const nameLowercase = text.toLowerCase();
	const nameTextFilter = nameLowercase
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');

	return nameTextFilter.includes(textFilter);
};
