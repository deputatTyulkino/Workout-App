import { FiUser } from "react-icons/fi";
import { Heading } from "../../components/ui/Heading/Heading";
import { Table } from "../../components/ui/Table/Table";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const inf = {
    minutes: 2000,
    workouts: 20,
    kg: 1000,
  };

  return (
    <article className={styles.profile}>
      <div className={styles.infor}>
        <FiUser color="white" size={70} />
        <Heading>Deputat</Heading>
        <Table inf={inf} />
      </div>
      <div className={styles.images}>
        <img
          className={styles.before_image}
          src="src/assets/images/profile-before.jpg"
        />
        <img
          className={styles.after_image}
          src="src/assets/images/profile-after.jpg"
        />
      </div>
    </article>
  );
};
