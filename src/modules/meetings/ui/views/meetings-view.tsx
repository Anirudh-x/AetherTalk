"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import {  useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsView = () => {

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div className="overflow-x-scroll">
      {JSON.stringify(data)}
    </div>
  );
}


export const MeetingsViewLoading = () => {
  return (
    <LoadingState title="Loading Meetings" description="This may take a few seconds" />
  )
}

export const MeetingsViewError = () => {
  return (
    <ErrorState title="Failed to Load Meetings" description="Something went wrong. Please try again later." />
  )
}