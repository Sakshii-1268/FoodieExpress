import { useRestaurantStore } from '@/store/useRestaurantStore';
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

export type FilterOptionsState = {
  id: string;
  label: string
};

const filterOptions: FilterOptionsState[] = [
  { id: "burger", label: " Burger", },
  { id: "pizza", label: " Pizza", },
  { id: "salad", label: " Salad", },
  { id: "sushi", label: " Sushi", },
  { id: "thali", label: " Thali", },

]

const FilterPage = () => {
  const { setAppliedFilter, appliedFilter , resetAppliedFilter} = useRestaurantStore();
  const appliedFilterHandler = (value: string) => {
    setAppliedFilter(value);
  }

  return (
    <div className='md:w-72'>
      <div className='flex items-center justify-between'>
        <h1 className='font-medium text-lg'>Filter By Cuisines</h1>
        <Button variant={'link'} onClick={resetAppliedFilter}>Reset</Button>
      </div>
      {
        filterOptions.map((option, index) => (
          <div className='flex items-center space-x-2 my-5' key={option.id}>
            <Checkbox id={option.id} checked={appliedFilter.includes(option.label)} onClick={() => appliedFilterHandler(option.label)} />
            <Label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{option.label}</Label>
          </div>
        ))
      }
    </div>
  )
}

export default FilterPage