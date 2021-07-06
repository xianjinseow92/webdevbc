import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import useHttp from "hooks/use-http";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    /**
     * taskText (accessed via second arg of .bind)
     * taskData (accessed via transformDataFunc callback in useHtpp hook)
     * written this way to avoid nesting `createTask` in `enterTaskHandler`
     */
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = (taskText) => {
    const requestConfig = {
      url: "https://custom-hooks-69eac-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      method: "POST",
      body: { text: taskText },
      headers: {
        "Content-Type": "application/json",
      },
    };

    sendTaskRequest(requestConfig, createTask.bind(null, taskText)); // using .bind because we want a way to reference taskText without nesting `createTask` function in `enterTaskHandler` function.
    // .bind first arg explicitly sets the "this" value within the function (if you have any "this" keywords inside the function, it will use the first arg as "this")
    // .bind subsequent args are parameters
    // 
  };

  // const enterTaskHandler = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://custom-hooks-69eac-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const generatedId = data.name; // firebase-specific => "name" contains generated id
  //     const createdTask = { id: generatedId, text: taskText };

  //     props.onAddTask(createdTask);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
