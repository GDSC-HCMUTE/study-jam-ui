import CustomTable from "@/components/CustomTable/CustomTable";
const data = [
  {
    key: "1",
    userName: "Mai Hồng Tín",
    email: "tinhongmai@gmail.com",
    creationDate: "2023-09-05",
    event: "Event A",
    team: "Team X",
    role: "Leader",
  },
  {
    key: "2",
    userName: "Admin",
    email: "SuperAdmin@gmail.com",
    creationDate: "2023-09-02",
    event: "Event B",
    role: "Admin",
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-lg font-bold">Home</h1>
      <CustomTable data={data} showActionButtons={true} />
    </div>
  );
};

export default Home;
