import { getSihps } from './services.js';

export const ship = () => {
	const ships = document.createElement('div');
	getSihps().then((res) => {
		let data = res.data;

		data.forEach((element) => {
			let link = document.createElement('a');
			link.href = element.url;
			let img = document.createElement('img');
			link.appendChild(img);

			let acispis = element.active;
			let actispis;

			if (acispis == true) {
				actispis = 'Aktivan';
			} else {
				actispis = 'Neaktivan';
			}

			const p = document.createElement('p');
			p.innerHTML = `${element.ship_name}, ${element.ship_model}`;
			const pIspis = document.createElement('p');
			actispis.id = 'filtriranje';
			pIspis.innerHTML = `${actispis}`;

			ships.append(link, p, pIspis);
		});
	});
	return ships;
};
