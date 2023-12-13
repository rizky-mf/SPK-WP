import { Column } from "react-table";
import { River } from "type";

const datasetColumns: ReadonlyArray<Column<River>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "Nama",
    accessor: "name",
    width: "20%",
  },
  {
    Header: "Prestasi Kompetensi (C1)",
    accessor: "competition",
    width: "17.5%",
  },
  {
    Header: "Nilai Akademik (C2)",
    accessor: "academic",
    width: "17.5%",
  },
  {
    Header: "Nilai Keterampilan (C3)",
    accessor: "skill",
    width: "17.5%",
  },
  {
    Header: "Nilai Absensi (C4)",
    accessor: "absence",
    width: "17.5%",
  },
  {
    Header: "Organisasi/Ekstrakulikuler (C5)",
    accessor: "organization",
    width: "17.5%",
  },
];

export { datasetColumns };
