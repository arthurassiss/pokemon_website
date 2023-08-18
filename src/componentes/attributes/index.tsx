import styles from './styles.module.scss';

type TAttributes = {
	skillName: string;
	skillValue: number;
};

export default function Attributes({ skillName, skillValue }: TAttributes) {
	return (
		<div className={styles.atributes}>
			<h3 className={styles.skill}>{skillName}</h3>

			<h3 className={styles.number}>{skillValue}</h3>

			<div className={styles.scrollbar}>
				<div
					className={styles.bar}
					style={{
						width: `${skillValue * 0.8}%`,
					}}
				/>
			</div>
		</div>
	);
}
