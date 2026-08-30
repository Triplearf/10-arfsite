import Container from "@/components/container";

export default function Home() {
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <Container>
        <div className="flex flex-col justify-center">
        <p className="text-5xl font-extrabold">Look Around!</p>
        <p className="text-center">{":>"}</p>
        </div>
      </Container>
    </div>
  );
}
