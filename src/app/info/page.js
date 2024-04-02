import { Info } from "@/components/component/info";
function InfoPage() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between w-full">
      <div style={{ height: "100%" }}>
        <Info />
      </div>
    </main>
  );
}

export default InfoPage;
