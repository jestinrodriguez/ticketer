"use client";

import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";

const PurchaseTicket = ({ eventId }: { eventId: Id<"events"> }) => {
  const router = useRouter();
  const { user } = useUser();
  const queuePosition = useQuery(api.waitingList.getQueuePosition, {
    eventId,
    userId: user?.id ?? "",
  });
  
  return (
    <div>PurchaseTicket</div>
  )
}

export default PurchaseTicket