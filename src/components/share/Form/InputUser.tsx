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
      <div className="p-6 text-white">
        <label htmlFor="text">
          <textarea
            className="whitespace-pre-wrap bg-black outline-none w-full h-40 p-2 sm:text-xl"
            name="text"
            id="text"
            value={props.value.text}
            onChange={props.hundleChange}
            autoComplete="off"
            placeholder="質問してみよう！"
          ></textarea>
        </label>

        <label htmlFor="name">
          <input
            className="bg-black border-b border-gray-700 sm:w-1/3 w-1/2 py-2 px-3 outline-none"
            type="text"
            name="name"
            id="name"
            value={props.value.name}
            onChange={props.hundleChange}
            autoComplete="off"
            placeholder="匿名"
          />
        </label>
      </div>
    </div>
  )
}
