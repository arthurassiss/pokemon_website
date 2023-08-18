import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type TCard = {
	name: string;
	id: number;
	weight: number;
	height: number;
	stats: number;
};

export default async function Card(data: TCard) {
	return (
		<Link href={`/${data.id}`} className={styles.card}>
			<div className={styles.cardPhotoDiv}>
				<Image
					className={styles.cardPhoto}
					alt='pokemon'
					src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
					width={96}
					height={96}
				/>
			</div>
			<h2 className={styles.name}>{data.name}</h2>
			<div className={styles.atributes}>
				<div className={styles.weightDiv}>
					<h3 className={styles.weight}>weight</h3>
					<h4 className={styles.numberWeight}>{data.weight}</h4>
				</div>
				<div className={styles.heightDiv}>
					<h3 className={styles.height}>Height</h3>
					<h4 className={styles.numberHeight}>{data.height}</h4>
				</div>
			</div>
			<div className={styles.statsDiv}>
				<h3 className={styles.stats}>stats:</h3>
				<h4>{data.stats}</h4>
			</div>
		</Link>
	);
}
