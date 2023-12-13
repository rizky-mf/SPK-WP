import { Column } from "react-table";
import { River } from "type";
import { attribute } from "../criteria";

type WeightDataProps = {
  criteria: string;
  attribute: attribute;
  value: number;
};

type RankRiverDataProps = Pick<River, "no" | "name"> & {
  rank: number;
  total: number;
  valueV: number;
};

const calculateWeightColumns: ReadonlyArray<Column<WeightDataProps>> = [
  {
    Header: "Criteria",
    accessor: "criteria",
    width: "33%",
  },
  {
    Header: "Attribute",
    accessor: "attribute",
    width: "33%",
  },
  {
    Header: "Weight",
    accessor: "value",
    width: "33%",
  },
];

const normalizeDataColumns: ReadonlyArray<Column<River & { valueS: number }>> =
  [
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
      Header: "Competition",
      accessor: "competition",
      width: "17.5%",
    },
    {
      Header: "academic",
      accessor: "academic",
      width: "17.5%",
    },
    {
      Header: "Skill",
      accessor: "skill",
      width: "17.5%",
    },
    {
      Header: "Absence",
      accessor: "absence",
      width: "17.5%",
    },
    {
      Header: "Organization",
      accessor: "organization",
      width: "17.5%",
    },
    {
      Header: "S",
      accessor: "valueS",
      width: "17.5%",
    },
  ];

const rankingRiverColumns: ReadonlyArray<Column<RankRiverDataProps>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "30%",
  },
  {
    Header: "Total",
    accessor: "total",
    width: "30%",
  },
  {
    Header: "V",
    accessor: "valueV",
    width: "30%",
  },
  {
    Header: "Rank",
    accessor: "rank",
    width: "30%",
  },
];

export { calculateWeightColumns, normalizeDataColumns, rankingRiverColumns };
export type { WeightDataProps, RankRiverDataProps };
