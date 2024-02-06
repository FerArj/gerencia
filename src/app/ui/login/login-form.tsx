"use client";
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";
import api from "../../../../services/api.js";
import Link from "next/link";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginData>();

  interface LoginData {
    email: string;
    password: string;
  }

  const entrar = (data: LoginData) => {
    api.post("/lojas/login", data).then((response: AxiosResponse) => {
      console.log(response);
    }).catch((error:any) => {
      console.log(error);
    })
  };

  return (
    <form onSubmit={handleSubmit(entrar)}>
      <h1 className="flex text-center justify-center text-2xl font-bold mb-10">
        Entre com sua conta
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col w-96 gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
            className="outline-none p-2  border-gray border-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Digite sua senha"
            className="outline-none p-2  border-gray border-2"
          />
        </div>
        <Link href="/gerenciador">teste</Link>
        <button className='bg-orange text-white p-2 mt-2 font-bold cursor-pointer' type='submit'>Entrar em Minha Loja</button>
      </div>
    </form>
  );
}
