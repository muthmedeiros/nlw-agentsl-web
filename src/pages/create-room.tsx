import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
	id: string;
	name: string;
}>;

export function CreateRoom() {
	const { data, isLoading } = useQuery({
		queryKey: ["get-rooms"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3333/rooms");

			if (!response.ok) {
				throw new Error("Failed to fetch rooms");
			}

			const result: GetRoomsAPIResponse = await response.json();

			return result;
		},
	});

	return (
		<div>
			{isLoading && <p>Loading...</p>}

			<div className="flex flex-col gap-1">
				{data?.map((room) => {
					return (
						<Link to={`/room/${room.id}`} key={room.id}>
							{room.name}
						</Link>
					);
				})}
			</div>

			<Link className="underline" to="/room">
				Go to Room
			</Link>
		</div>
	);
}
