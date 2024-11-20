import React from 'react';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => {
	const teamMembers = [
		'Brayan Alberto Ocampo Carmona',
		'Johan Jair Guzmán Camargo',
		'Victor Manuel Cifuentes Mazo'
	];
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.sections}>
					<p>
						<strong>
							Institución Universitaria Politécnico Grancolombiano
							(Los colores)
						</strong>
					</p>
					<p>Prof. Uriel Moreno Lopez</p>
					<p>
						<strong>Ciudad:</strong> Medellin Antioquia Colombia
					</p>
					<p>
						<strong>Equipo:</strong>
					</p>
					<ul className={styles.teamList}>
						{teamMembers.map((member, index) => (
							<li key={index}>{member}</li>
						))}
					</ul>
				</div>
				<div className={styles.logo}>
					<img
						src='https://www.poli.edu.co/themes/custom/ptecnico2023/logo-politecnico-grancolombiano-white.svg'
						alt='Logo Universidad Poligran'
						className={styles.logoImage}
					/>
				</div>
			</div>
			<p className={styles.copy}>© Brayan Ocampo {currentYear}</p>
		</footer>
	);
};

export default Footer;
