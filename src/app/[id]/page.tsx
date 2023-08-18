import Image from 'next/image';
import logoPoke from '@public/images/logoPoke.png';
import styles from './styles.module.scss';
import Pokemon from '@/componentes/pokemon';

async function getChosenPokemon(id: string) {
	const pokeApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const pokemon = await fetch(pokeApi).then(function (response) {
		return response.json();
	});

	return pokemon;
}

type TPage = {
	params: {
		id: string;
	};
};

type TPokemon = {
	id: number;
	name: string;
	weight: number;
	height: number;
	stats: {
		base_stat: number;
		stat: {
			name: string;
		};
	}[];
};

export default async function Page({ params }: TPage) {
	const pokemon: TPokemon = await getChosenPokemon(params.id);
	const skills = pokemon.stats.map(function (skill) {
		const dataSkill = {
			skillValue: skill.base_stat,
			skillName: skill.stat.name,
		};
		return dataSkill;
	});

	return (
		<main className={styles.homePage}>
			<Image
				alt='logoPoke'
				className={styles.logoPokemon}
				src={logoPoke}
			/>
			<Pokemon skills={skills} id={pokemon.id} name={pokemon.name} />
		</main>
	);
}
