import fetch from "node-fetch";
const URL="https://jsonplaceholder.typicode.com/"

export interface Todo {
  userId: number;
  id: number;
  title:string;
  completed: boolean;
}


export const getTodoList = async (): Promise<Todo[]> => {
  const listResp = await fetch(`${URL}todos`);
  return await listResp.json() as Todo[];
};

export const getTodo = async (id: number): Promise<Todo> => {
  const dataResp = await fetch(`${""}toos/${id}`);
  console.log(`${URL}tdos/${id}`);
  return await dataResp.json() as Todo;
};

export const getFirstTodo = async (): Promise<Todo> =>
  new Promise(async (resolve, reject) => {
    try {
      console.log("Getting the list");
      const list:Todo[] = await getTodoList();
      const todo=await getTodo(list[0].id)
      console.log('first',todo);
      resolve(todo);
    } catch (error) {
      console.log('error',error);
      reject(error);
    }
  });

//   export const getFirstTodo1 = async (): Promise<Todo> =>{
//     try {
//       console.log("Getting the list");
//       const list:Todo[] = await getTodoList();
//       return await getTodo(list[0].id) as Todo
//     } catch (error) {
//       return error 
//     }
// }
  
(async function(){
    const res =await getFirstTodo()
    console.log(res);
})()