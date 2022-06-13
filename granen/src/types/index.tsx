export interface MovieType {
    id : number;
    key : number;
    medium_cover_image : string;
    title : string;
    summary: string;
    genres : string[];
    year :number;
}

export interface todoType {
   text: string;  
   isDone: boolean;
}

export interface todosType {
    id: string;  
    text: string;  
    isDone: boolean;
 }

 export type CounterType = {
   count :number;
 }