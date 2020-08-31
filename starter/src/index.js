import { getCompanyInfo } from './components/services.js';
import { select } from './components/filter.js';
import { ship } from './components/ships.js';
import { ispisHeader } from './components/header.js';

const app = document.getElementById('app');
const head = document.getElementById('head');

app.appendChild(head);

head.appendChild(ispisHeader());

head.appendChild(select);

select.addEventListener('change', () => {
	const fil = document.querySelector('#filter');
	fil.forEach((el) => {
		if (select.value === el.innerHTML) {
			el.nextElementSibling.style.display = 'block';
			el.previousElementSibling.style.display = 'block';
			el.style.display = 'block';
		} else if (select.value === 'svi') {
			el.nextElementSibling.style.display = 'block';
			el.previousElementSibling.style.display = 'block';
			el.style.display = 'block';
		}
	});
});
