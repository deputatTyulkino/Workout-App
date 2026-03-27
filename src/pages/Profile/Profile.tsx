import { FiUser } from "react-icons/fi";
import { Heading } from "../../components/ui/Heading/Heading";
import { Table } from "../../components/ui/Table/Table";
import bg from "../../assets/images/profile-bg.png";
import { useProfile } from "../../hooks/queries/useProfile";

export const Profile = () => {
  const { data } = useProfile();

  const inf = {
    minutes: data?.workout_minutes ?? 0,
    workouts: data?.workouts_count ?? 0,
    kg: data?.weight_lifted ?? 0,
  };

  return (
    <article className="flex flex-col items-center gap-10">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-no-repeat bg-center-top bg-cover py-7.5! px-6.25! rounded-b-[15px] shadow-accent max-block-[40%] block-[40%] inline-full flex flex-col justify-end items-center relative"
      >
        <FiUser className="mbe-3" color="white" size={70} />
        <Heading className="mbe-2.5">Deputat</Heading>
        <Table inf={inf} />
      </div>
      <div className="flex flex-wrap gap-7.5 justify-center items-center inline-full px-6.25!">
        <div className="overflow-hidden rounded-[15px] grow-2 basis-50 block-83.75 flex flex-col items-center">
          <p className="text-lg font-normal text-white mbe-2.5">Before</p>
          <img
            className="block-full inline-full object-cover object-center rounded-[15px]"
            src="src/assets/images/profile-before.jpg"
          />
        </div>
        <div className="rounded-[15px] grow-2 basis-50 block-83.75 flex flex-col items-center overflow-hidden">
          <p className="text-lg font-normal text-white mbe-2.5">After</p>
          <img
            className="block-full inline-full object-cover object-center rounded-[15px]"
            src="src/assets/images/profile-after.jpg"
          />
        </div>
      </div>
    </article>
  );
};
