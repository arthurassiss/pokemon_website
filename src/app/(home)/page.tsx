import Image from 'next/image';
import styles from './styles.module.scss';
import logoPoke from '@public/images/logoPoke.png';
import Card from '@/componentes/card';

async function getPokemons() {
	const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
	const pokemons = [];
	let index = 1;

	while (index < 61) {
		if (index % 3 === 0) {
			const pokemon = await fetch(pokeApi + index).then(function (
				response,
			) {
				return response.json();
			});
			pokemons.push(pokemon);
		}

		index++;
	}

	return pokemons;
}

export default async function Home() {
	const pokemons = await getPokemons();
	return (
		<main className={styles.homePage}>
			<Image
				alt='logoPoke'
				className={styles.logoPokemon}
				src={logoPoke}
			/>
			<div className={styles.homePokemons}>
				{pokemons.map(function (pokemon, index) {
					return (
						<Card
							key={index}
							id={pokemon.id}
							name={pokemon.name}
							weight={pokemon.weight}
							height={pokemon.height}
							stats={pokemon.stats[0].base_stat}
						/>
					);
				})}
			</div>
		</main>
	);
}
