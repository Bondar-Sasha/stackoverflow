import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { userApiController } from '../../../Features'
import { TextLoader } from '../../../Shared'
import { useAppDispatch, setIsLogin } from '../../../App/redux'

interface RegisterFormData {
  username: string
  password: string
}
const { loginControls, getLazyUserControls } = userApiController

const LoginPage: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const [login] = loginControls()
  const [userTrigger, {}] = getLazyUserControls()
  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await login(data)
      console.log(document.cookie)
      if (res.error && 'status' in res.error && res.error.status === 404) {
        dispatch(setIsLogin(false))
      } else {
        await userTrigger({ id: Number(res.data?.data.id) })
        dispatch(setIsLogin(true))
      }
    } catch (error) {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div>
        <input
          type="text"
          placeholder="Username"
          {...register('username', { required: 'Username is required' })}
          value="useruser1"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required' })}
          value="useruser1"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit" className="w-16">
        <span>sign Up</span> <TextLoader />
      </button>
    </form>
  )
}

export default LoginPage
