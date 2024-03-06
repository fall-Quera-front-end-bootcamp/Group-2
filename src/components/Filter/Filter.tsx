import DropDownList from "./FilterDropDownList";
import Icon from '../ui/Icon'; 

export interface IFilter {
  id: number;
  d1Values: string[];
  d2Values: string[];
  onDelete: (id: number) => void;
  onChange: (choice: string) => void;
}

export const Filter = ({
  id,
  d1Values,
  d2Values,
  onDelete,
  onChange,
}: IFilter) => {
  const isOrNot = ["است", "نیست"];

  return (
    <div className="w-[673px] ml-[24px] flex flex-row-reverse items-center gap-xs">
      <p>تسک هایی که </p>
      <DropDownList
        options={d1Values}
        width="w-[182px]"
        onChange={onChange}
        containsSearch={true}
      />

      <p>آنها</p>
      <DropDownList
        width="w-[146px]"
        options={d2Values}
        onChange={() => {}}
        containsSearch={true}
      />
      <DropDownList
        options={isOrNot}
        width="w-[107px]"
        onChange={() => {}}
        tsize="text-[12px]"
        containsSearch={false}
      />
      <button className="mr-auto text-red-primary" onClick={() => onDelete(id)}>
        <Icon iconName="Remove" /> 
      </button>
    </div>
  );
};