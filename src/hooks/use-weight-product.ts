import {
    calculateWeightColumns,
    WeightDataProps,
    normalizeDataColumns,
    RankRiverDataProps,
    rankingRiverColumns,
  } from "@/data/columns/product-weight";
  import { attribute, criteriaWP } from "@/data/criteria";
  import useDataset from "@/store/use-dataset";
  import { useEffect, useState } from "react";
  import { River } from "type";
  
  const useWeightProduct = () => {
    const dataset = useDataset((store) => store.rivers);
    const [calculateWeightData, setCalculateWeightData] = useState<
      WeightDataProps[]
    >([]);
    const [normalizeWeightData, setNormalizeWeightData] = useState<
      WeightDataProps[]
    >([]);
    const [normalizeData, setNormalizeData] = useState<
      (River & { valueS: number })[]
    >([]);
    const [rankData, setRankData] = useState<RankRiverDataProps[]>([]);
  
    useEffect(() => {
      // Mencari total weight untuk dinormalisasi
      const totalWeight = criteriaWP.reduce(
        (prev, curr) => prev + curr.weight,
        0
      );
  
      // mencari nilai Weight (W)
      const weightData = criteriaWP.map((item) => {
        return {
          ...item,
          value: item.weight / totalWeight,
        };
      });
  
      // mencari nilai Weight (W) Ternormalisasi
      const normalizeWeightData = weightData.map((item) => {
        return {
          ...item,
          value:
            item.attribute === attribute.BENEFIT
              ? 1 * item.value
              : -1 * item.value,
        };
      });
  
      const normalizeDataObj: any = {};
      normalizeWeightData.forEach((item) => {
        normalizeDataObj[item.criteria] = { ...item };
      });
  
      // Mencari nilai S ternormalisasi
      const newNormalizeData = dataset.map((item) => {
        const criteria: Record<string, number> = {
          competition: Math.pow(
            item.competition,
            normalizeDataObj.competition.value
          ),
          academic: Math.pow(item.academic, normalizeDataObj.academic.value),
          skill: Math.pow(item.skill, normalizeDataObj.skill.value),
          absence: Math.pow(item.absence, normalizeDataObj.absence.value),
          organization: Math.pow(item.organization, normalizeDataObj.organization.value),
        };
        return {
          ...item,
          ...criteria,
          valueS: Object.keys(criteria).reduce(
            (prev, curr) => prev * criteria[curr],
            1
          ),
        };
      });
  
      // Mencarit total nilai S
      const totalValueS = newNormalizeData.reduce(
        (prev, curr) => prev + curr.valueS,
        0
      );
  
      console.log("Total value S", totalValueS);
  
      // Mencari nilai V
      let newRankData = newNormalizeData.map<RankRiverDataProps>((item) => {
        return {
          ...item,
          rank: 1,
          total: item.valueS,
          valueV: item.valueS / totalValueS,
        };
      });
  
      // Melakukan perangkingan
      var sorted = newRankData.slice().sort(function (a, b) {
        return b.valueV - a.valueV;
      });
      var ranks = newRankData.map(function (v) {
        return sorted.indexOf(v) + 1;
      });
      newRankData = ranks.map<RankRiverDataProps>((rank, idx) => {
        return {
          ...newRankData[idx],
          rank,
        };
      });
      newRankData = newRankData.map((item) => {
        const isRankFound = newRankData.find((data) => data.total === item.total);
        return {
          ...item,
          rank: isRankFound ? isRankFound.rank : item.rank,
        };
      });
  
      // Memasukkan data kedalam user interface
      setNormalizeData(newNormalizeData);
      setCalculateWeightData(weightData);
      setNormalizeWeightData(normalizeWeightData);
      setRankData(newRankData);
    }, []);
  
    return {
      calculateWeight: {
        columns: calculateWeightColumns,
        data: calculateWeightData,
      },
      normalizeWeight: {
        columns: calculateWeightColumns,
        data: normalizeWeightData,
      },
      normalizeData: {
        columns: normalizeDataColumns,
        data: normalizeData,
      },
      rankData: {
        columns: rankingRiverColumns,
        data: rankData,
      },
    };
  };
  
  export default useWeightProduct;
  