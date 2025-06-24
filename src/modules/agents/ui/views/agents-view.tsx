"use client";


import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";


export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data} columns={columns} />
      {
        data.length === 0 && (
          <EmptyState title="Create your first agent" description="Create your personal agent to join your meetings, attend your calls and interact with yourself." />
        )
      }
    </div>
  )
}

export const AgentsViewLoading = () => {
  return (
    <LoadingState title="Loading Agents" description="This may take a few seconds" />
  )
}

export const AgentsViewError = () => {
  return (
    <ErrorState title="Failed to Load Agents" description="Something went wrong. Please try again later." />
  )
}