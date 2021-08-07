import { InputHTMLAttributes, VFC } from 'react'

type UserFormProps = {
  text: string
  name: string
}

type InputUserPorps = {
  value: UserFormProps
  hundleChange: (e: InputHTMLAttributes<HTMLInputElement>) => void
}

export const InputUser: VFC<InputUserPorps> = (props) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
          名前
        </label>
        <input
          className="bg-white bg-opacity-20  appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          name="name"
          value={props.value.name}
          onChange={props.hundleChange}
          placeholder="記入しない場合は匿名"
          autoComplete="off"
        />
      </div>

      <div className="mb-6">
        <label className="text-gray-400 text-sm font-bold mb-2" htmlFor="question">
          質問内容
        </label>
        <input
          className="shadow bg-black appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="question"
          type="text"
          name="text"
          value={props.value.text}
          onChange={props.hundleChange}
          placeholder="質問を入力して下さい"
          autoComplete="off"
        ></input>
      </div>
    </div>
  )
}
