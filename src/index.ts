import express, {Request, Response} from 'express'

const app = express();
const PORT = 3000;

interface Todos{
    "id" : number,
    "title" : string,
    "description" : string
}

app.get("/todos",(req:Request,res:Response)=>{
    const todos:Todos[] = [
        {
          "id": 1,
          "title": "Complete project proposal",
          "description": "Prepare and submit the proposal for the fleet tracking app project."
        },
        {
          "id": 2,
          "title": "Study TypeScript basics",
          "description": "Go through TypeScript documentation and understand the core concepts."
        },
        {
          "id": 3,
          "title": "Review React custom hooks",
          "description": "Revise custom hooks in React and implement them in a small app."
        },
        {
          "id": 4,
          "title": "Optimize Career Bridge backend",
          "description": "Improve the backend performance by refining SQL queries and API calls."
        },
        {
          "id": 5,
          "title": "Plan 7th semester final exam preparation",
          "description": "Create a study plan and focus on the most critical subjects for the finals."
        }
    ];
    res.json({todos});
})

app.listen(PORT, ()=>{
    console.log("Server started");
})