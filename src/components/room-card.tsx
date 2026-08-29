import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Room } from "@/data/types";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-surface shadow-card">
      <Link to={room.href} className="block aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      </Link>
      <div className="p-6">
        <h3 className="font-display text-2xl text-ink">{room.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{room.tagline}</p>
        <Link
          to={room.href}
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
        >
          Explore {room.name}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
