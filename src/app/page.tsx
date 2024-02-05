import LoginForm from "@/app/ui/login/login-form";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex justify-center bg-white shadow-lg w-1/3 h-96 items-center mt-56" style={{height:'60vh'}}>
        <LoginForm />
      </div>
    </main>
  );
}
