import { Button } from 'src/components/share/Button'
import { useSign } from 'src/hooks/useSign'

export const Sign = () => {
  const { signIn, hundleEmail, hundlePassword, email, password, isSignIn, register, hundleBoolean, hundleAuteLogin } =
    useSign()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignIn ? '管理者ログイン' : 'アカウント登録'}
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
                onChange={hundleEmail}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                onChange={hundlePassword}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <a onClick={hundleBoolean} className="font-medium text-indigo-600 hover:text-indigo-500">
                  {isSignIn ? 'Create your register?' : 'Back to login?'}
                </a>
              </div>
            </div>

            <div className="text-sm">
              <a onClick={hundleAuteLogin} className="font-medium text-indigo-600 hover:text-indigo-500">
                テストユーザー
              </a>
            </div>
          </div>

          <div>
            <Button
              onClick={isSignIn ? signIn : register}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSignIn ? 'Sign in' : 'register'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
