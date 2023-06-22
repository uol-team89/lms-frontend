"use client";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ITeacher } from "../types/teacher";
import { ISubject } from "../types/subject";
import CrudPage from "../components/CrudPage";

interface ITeachersProps {}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "subjects",
    headerName: "Subjects",
    width: 400,
    editable: false,
    valueGetter: (params: GridValueGetterParams) => {
      return params.value.map((c: ISubject) => c.title).join();
    },
  },
];

const rows: ITeacher[] = [
  {
    id: 1,
    name: "Mr. James",
    subjects: [
      { title: "Computer Science" },
      { title: "Discrete Mathematics I" },
    ],
  },
  {
    id: 2,
    name: "Mrs. Jane",
    subjects: [
      { title: "Algorithms And Data Structures" },
      { title: "Discrete Mathematics II" },
    ],
  },
];
const Teachers: React.FC<ITeachersProps> = ({}) => {
  return (
    <div>
      <CrudPage
        title="List of teachers"
        dataGridColumnDefs={columns}
        entityArray={rows}
        buttonOnClick={()=>console.log('wtf')}
      ></CrudPage>
    </div>
  );
};

export default Teachers;
