export default function Event({ params }: { params: { id: string } }) {
  return <div>Event : {params.id}</div>;
}
