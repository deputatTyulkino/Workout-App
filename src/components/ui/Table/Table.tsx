import { useId } from "react";
import { capitalize } from "../../../utils/Capitalize";

interface InfHome {
  minutes: number;
  level: string;
  kg: number;
}

interface InfProfile {
  minutes: number;
  workouts: number;
  kg: number;
}

type Props = {
  inf: Partial<InfHome> | Partial<InfProfile>;
};

export const Table = ({ inf }: Props) => {
  const id = useId();
  return (
    <table className="w-full border-collapse table-fixed">
      <thead>
        <tr>
          {Object.keys(inf).map((key) => (
            <th
              key={`${id}-header-${key}`}
              className="text-table-head font-normal text-table text-center"
            >
              {capitalize(key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.entries(inf).map(
            ([key, value]: [string, string | number]) => (
              <td
                key={`${id}-cell-${key}`}
                className="text-white text-table font-bold text-center"
              >
                {value}
              </td>
            ),
          )}
        </tr>
      </tbody>
    </table>
  );
};
