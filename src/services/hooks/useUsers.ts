import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

export async function getUsers (page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users/", {
    params: {
      page,
    },
  });
  const totalCount = Number(headers["x-total-count"]);
  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.created_at).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));
  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, /// 10 minutes
    ...options
  }) as UseQueryResult<GetUsersResponse, unknown>;
}
