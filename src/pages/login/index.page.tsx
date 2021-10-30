import { Button } from 'src/components/Button'

import { useLogin } from './useLogin'

const Login = () => {
  const { setLogin, signIn, handleEmail, handlePassword, email, password, isLogin, register, handleTestLogin } =
    useLogin()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-100">
            {isLogin ? '管理者ログイン' : 'アカウント登録'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={handleEmail}
                autoComplete="off"
                required
                className="appearance-none rounded-none bg-blue-50 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handlePassword}
                autoComplete="off"
                required
                className="appearance-none rounded-none bg-blue-50 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <a
                  onClick={() => setLogin(!isLogin)}
                  className="cursor-pointer font-medium text-indigo-200 hover:text-indigo-500"
                >
                  {isLogin ? 'アカウント作成' : '戻る'}
                </a>
              </div>
            </div>

            <div className="text-sm">
              <a onClick={handleTestLogin} className="cursor-pointer font-mono text-white hover:text-indigo-500">
                テストユーザー
              </a>
            </div>
          </div>

          <div>
            <Button
              onClick={isLogin ? signIn : register}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? 'Sign in' : 'register'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
