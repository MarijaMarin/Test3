export const select = () => {
	let div1 = document.createElement('div');
	const select = document.createElement('select');
	const opt = document.createElement('option');
	opt.value = 'svi';
	opt.innerHTML = 'Svi brodovi';
	select.appendChild(opt);
	const opt1 = document.createElement('option');
	opt1.value = 'Aktivan';
	opt1.innerHTML = 'Aktivan brod';
	select.appendChild(opt1);
	const opt2 = document.createElement('option');
	opt2.value = 'Neaktivan';
	opt2.innerHTML = 'Neaktivan Brod';
	select.appendChild(opt2);
	div1.appendChild(select);

	return select;
};

export default select;
