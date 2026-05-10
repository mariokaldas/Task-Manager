export type ItaskData = {
  id: string;
  title: string;
  description: string;
  priority: priorityType;
  dueDate: string;
  category: categoryType;
  isCompleted: boolean;
};
export function resetCardData():ItaskData {
  return {
    id: '',
    title: '',
    description: '',
    priority: priorityType.Medium,
    dueDate: '',
    category: 'Work',
    isCompleted: false,
  };
}

export enum priorityType {
  'Low' , 'Medium' , 'High'
} ;

export type categoryType = 'Work' | 'Study' | 'Personal';
