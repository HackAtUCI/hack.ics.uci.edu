import clsx from "clsx";
import TeamCard from "./TeamCard";

import styles from "./TeamSection.module.scss";

type Member = {
  name: string;
  position: string;
  image: string;
  linkedInUrl: string;
};

interface TeamSection {
  team: string;
  members: Member[];
}
const TeamSection = ({ team, members }: TeamSection) => {
  return (
    <section>
      <h2 className={styles.teamTitle}>{team}</h2>
      <div className={styles.teamGrid}>
        {members.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            position={member.position}
            image={member.image}
            linkedInUrl={member.linkedInUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
