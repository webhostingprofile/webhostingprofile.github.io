import { Mission } from "@/components/component/mission";
function MissionPage() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between w-full">
      <div style={{ height: "100%" }}>
        <Mission />
      </div>
    </main>
  );
}

export default MissionPage;
