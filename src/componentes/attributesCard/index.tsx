import Image from 'next/image';
import styles from './styles.module.scss';
import Attributes from '@/componentes/attributes';

type TAttributesCard = {
	skills: {
		skillValue: number;
		skillName: string;
	}[];
};

export default function AttributesCard({ skills }: TAttributesCard) {
	return (
		<section className={styles.section}>
			{skills.map(function (skill, index) {
				return (
					<Attributes
						key={index}
						skillName={skill.skillName}
						skillValue={skill.skillValue}
					/>
				);
			})}
		</section>
	);
}
