import styles from './styles.module.scss';
import Image from 'next/image';
import AttributesCard from '@/componentes/attributesCard';

type TPokemonData = {
	id: number;
	skills: {
		skillValue: number;
		skillName: string;
	}[];
	name: string;
};

export default function PokemonData({ skills, id, name }: TPokemonData) {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<Image
					src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
					width={226}
					height={218}
					alt='pokemon'
					className={styles.image}
				/>
				<h1 className={styles.pokemonName}>{name}</h1>
			</div>

			<div className={styles.info}>
				<h2 className={styles.nameInfo}>Skills</h2>
				<Image
					src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
						id - 1
					}.svg`}
					width={226}
					height={218}
					alt='pokemon'
					className={styles.image}
				/>
				<AttributesCard skills={skills} />
			</div>
		</div>
	);
}
