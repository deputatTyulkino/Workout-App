import { useId } from "react";
import styles from "./Table.module.scss";
import { capitalize } from "../../../utils/Capitalize";

interface InfHome {
  minutes: number;
  level: string;
  up: number;
}

interface InfProfile {
  minutes: number,
  workouts: number,
  kg: number
}

type Props = {
  inf: InfHome | InfProfile;
};

export const Table = ({ inf }: Props) => {
  const id = useId();
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {Object.keys(inf).map((key) => (
            <th key={`${id}-header-${key}`} className={styles.header}>
              {capitalize(key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.entries(inf).map(
            ([key, value]: [string, string | number]) => (
              <td key={`${id}-cell-${key}`} className={styles.cell}>
                {key === "up" ? value + "%" : value}
              </td>
            ),
          )}
        </tr>
      </tbody>
    </table>
  );
};
