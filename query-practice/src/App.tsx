import { useQuery } from '@tanstack/react-query'
import './App.css'

interface ITodoData {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {
  const { data, isLoading, error } = useQuery<ITodoData[]>({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
        res.json(),
      ),
  })

  if (isLoading) return <div className='text-2xl'>Loading...</div>
  if (error) return <div className='text-2xl'>Error: {error.message}</div>

  return (
    <main className='flex flex-col items-center justify-center'>
      <ul className='flex flex-col items-center justify-center'>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
