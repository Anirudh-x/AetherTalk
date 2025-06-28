import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";

export type MeetingGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"]
export type MeetingGetMany = inferRouterOutputs<AppRouter>["meetings"]["getMany"]["items"]
export enum MeetingStatus {
  Upcomming = "upcoming",
  Active = "active",
  Processing = "processing",
  Completed = "completed",
  Cancelled = "cancelled",
}