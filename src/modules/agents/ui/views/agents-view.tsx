"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { DataPagination } from "@/components/data-pagination";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/data-table";

export const AgentsView = () => {

  const router = useRouter();
  const [filters, setFilters] = useAgentsFilters();

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions({
    ...filters,
  }));

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.items} columns={columns} onRowClick={(row => router.push(`/agents/${row.id}`))} />
      <DataPagination page={filters.page} totalPages={data.totalPages} onPageChange={(page) => setFilters({ page })} />
      {
        data.items.length === 0 && (
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