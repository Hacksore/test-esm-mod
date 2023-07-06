// the module def 
const generateUUID = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const activate = async (id: string) => {
  const moduleState = { moduleId: generateUUID(), data: {} };

  // get data from the api
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json());
  moduleState.data = data;

  return moduleState;
}

