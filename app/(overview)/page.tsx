import CustomTable from "@/components/CustomTable/CustomTable";
const DataTable = [
  {
    key: '1',
    userName: 'Mai Hồng Tín',
    email: 'tinhongmai@gmail.com',
    creationDate: '2023-09-05',
    event: 'Event A',
    team: 'Team X',
  },
  {
    key: '2',
    userName: 'Admin',
    email: 'SuperAdmin@gmail.com',
    creationDate: '2023-09-02',
    event: 'Event B',
    role: 'Leader',
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-lg font-bold">Home</h1>
      <CustomTable data = {DataTable}/>
    </div>
  );
};

export default Home;
