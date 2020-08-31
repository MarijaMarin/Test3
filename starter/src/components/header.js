import { getCompanyInfo } from './services.js';

export const ispisHeader = () => {
	getCompanyInfo().then((res) => {
		const head = document.getElementById('head');

		const imeFirme = document.createElement('p');
		imeFirme.textContent = `${res.data.name}`;
		head.appendChild(imeFirme);

		const osnivacFirme = document.createElement('p');
		osnivacFirme.textContent = `${res.data.founder}`;
		head.appendChild(osnivacFirme);

		const godinaOsnivanje = document.createElement('p');
		godinaOsnivanje.textContent = `${res.data.founded}`;
		head.appendChild(godinaOsnivanje);
	});
	return head;
};
