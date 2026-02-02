import Header from "@/components/header";
import Chat from "@/components/chat";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <Chat />
    </main>
  );
}
