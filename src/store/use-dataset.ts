import create from "zustand";
import dataset from "@/data/dataset";
import { Datas } from "type";

type UseDatasetProps = {
  datas: Datas[];
  push: (data: Omit<Datas, "no">) => void;
};

const useDataset = create<UseDatasetProps>((set) => {
  return {
    datas: dataset,
    push: (data) => {
      set((store) => {
        const newDatas = store.datas.map((item, idx) => ({
          ...item,
          no: idx + 1,
        }));

        const lastNum = newDatas[newDatas.length - 1].no;
        newDatas.push({ ...data, no: lastNum + 1 });

        return {
          datas: newDatas,
        };
      });
    },
  };
});

export default useDataset;
