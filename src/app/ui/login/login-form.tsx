"use client";

import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const entrar = () => {
    console.log("Entrou");
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
            className="outline-none p-2  border-b_gray border-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Digite sua senha"
            className="outline-none p-2  border-b_gray border-2"
          />
        </div>
        <button className='bg-orange text-white p-2 mt-2 font-bold cursor-pointer' type='submit'>Entrar em Minha Loja</button>
      </div>
    </form>
  );
}
